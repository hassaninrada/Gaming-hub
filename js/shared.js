/**
 * GameHub Pro - Shared Global Logic
 * Handles user statistics, score reporting, and session consistency.
 */

const GameHubStats = {
  // Save a score to global stats
  reportScore: function (gameId, score) {
    let stats = JSON.parse(localStorage.getItem('portal_user_stats')) || {
      totalScore: 0,
      gamesPlayed: 0,
      level: 1,
      exp: 0,
      history: []
    };

    const earnedExp = Math.floor(score / 10);
    stats.totalScore += score;
    stats.gamesPlayed += 1;
    stats.exp += earnedExp;

    // Level up logic (every 1000 exp)
    stats.level = Math.floor(stats.exp / 1000) + 1;

    stats.history.push({
      game: gameId,
      score: score,
      date: new Date().toISOString()
    });

    localStorage.setItem('portal_user_stats', JSON.stringify(stats));
    console.log(`[Nexus OS] Score updated: +${score} XP. Current Level: ${stats.level}`);
  },

  // Get current session
  getSession: function () {
    return JSON.parse(localStorage.getItem('portal_session')) || { name: 'Guest' };
  }
};

const GameHubAudio = {
  ctx: null,
  musicInterval: null,
  isMusicPlaying: false,
  init() {
    if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
  },
  play(type) {
    this.init();
    if (this.ctx.state === 'suspended') this.ctx.resume();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);

    const now = this.ctx.currentTime;
    if (type === 'click') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(100, now + 0.1);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
      osc.start(); osc.stop(now + 0.1);
    } else if (type === 'move') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.linearRampToValueAtTime(600, now + 0.05);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
      osc.start(); osc.stop(now + 0.05);
    } else if (type === 'win') {
      osc.type = 'square';
      [440, 554, 659, 880].forEach((f, i) => {
        const o = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        o.type = 'square'; o.frequency.value = f;
        o.connect(g); g.connect(this.ctx.destination);
        g.gain.setValueAtTime(0.05, now + i * 0.1);
        g.gain.exponentialRampToValueAtTime(0.01, now + i * 0.1 + 0.2);
        o.start(now + i * 0.1); o.stop(now + i * 0.1 + 0.2);
      });
    } else if (type === 'loss') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(200, now);
      osc.frequency.linearRampToValueAtTime(50, now + 0.5);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
      osc.start(); osc.stop(now + 0.5);
    }
  },
  playMusic() {
    this.init();
    if (this.isMusicPlaying) return;
    this.isMusicPlaying = true;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const sequence = [220, 247, 262, 294, 330, 349, 392, 440];
    let step = 0;

    this.musicInterval = setInterval(() => {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(sequence[step % sequence.length], now);
      osc.frequency.exponentialRampToValueAtTime(sequence[step % sequence.length] / 2, now + 0.5);

      gain.gain.setValueAtTime(0.02, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.5);
      step++;
    }, 500);
  },
  stopMusic() {
    if (this.musicInterval) clearInterval(this.musicInterval);
    this.isMusicPlaying = false;
  }
};

const GameHubHelp = {
  show: function (title, content) {
    let modal = document.getElementById('help-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'help-modal';
      modal.setAttribute('style', `
                position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(0,0,0,0.8); backdrop-filter: blur(10px);
                display: flex; align-items: center; justify-content: center;
                z-index: 10000; opacity: 0; transition: opacity 0.3s;
                pointer-events: none;
            `);
      modal.innerHTML = `
                <div style="background: rgba(20,20,30,0.95); border: 1px solid rgba(255,255,255,0.1); border-radius: 24px; padding: 40px; max-width: 600px; width: 95%; position: relative; box-shadow: 0 40px 100px rgba(0,0,0,0.8);">
                    <h2 id="help-title" style="font-weight: 800; margin-bottom: 20px; color: #7c4dff; text-transform: uppercase; letter-spacing: 2px;"></h2>
                    <div id="help-content" style="color: rgba(255,255,255,0.7); line-height: 1.6; font-size: 15px; max-height: 400px; overflow-y: auto; margin-bottom: 30px;"></div>
                    <button class="btn-primary" onclick="GameHubHelp.hide()" style="width: 100%; padding: 15px; background: #7c4dff; border: none; color: #fff; border-radius: 12px; font-weight: 800; cursor: pointer;">CONFIRM NEURAL LINK</button>
                </div>
            `;
      document.body.appendChild(modal);
    }
    document.getElementById('help-title').innerText = title;
    document.getElementById('help-content').innerHTML = content;
    modal.style.opacity = '1';
    modal.style.pointerEvents = 'auto';
  },
  hide: function () {
    const modal = document.getElementById('help-modal');
    if (modal) {
      modal.style.opacity = '0';
      modal.style.pointerEvents = 'none';
    }
  }
};

// InitializeLucide icons if present
if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}
