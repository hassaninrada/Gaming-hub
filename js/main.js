const GAMES_DATA = [
    {
        id: 'subway-surfers',
        title: 'Subway Surfers: World Tour',
        genre: 'Action',
        image: 'https://static.wikia.nocookie.net/subwaysurf/images/6/69/WinterWonderlandAppIcon.png/revision/latest/scale-to-width-down/250?cb=20241209134108',
        rating: 4.9,
        plays: '10.5M'
    },
    {
        id: 'chess',
        title: 'Chess',
        genre: 'Board',
        image: 'assets/thumbnails/thumb_chess_1768506894907.png',
        rating: 4.9,
        plays: '120k'
    },
    {
        id: 'tower',
        title: 'Smash Ball 3D',
        genre: 'Action',
        image: 'https://play-lh.googleusercontent.com/7kc1X8GpAEEPnt4JpOtWegnz47QxB0tIpNJ1PaIjWdvnlu254wRSd1rlMXw1mztkig=w600-h300-pc0xffffff-pd',
        rating: 4.9,
        plays: '2.4M'
    },
    {
        id: '2048',
        title: 'Number Grid 2048',
        genre: 'Puzzle',
        image: 'assets/thumbnails/thumb_2048_1768506924137.png',
        rating: 4.7,
        plays: '85k'
    },
    {
        id: '8ball',
        title: 'Elite 8 Ball Pool 2.0',
        genre: 'Sports',
        image: 'assets/thumbnails/thumb_8ball_1768506939436.png',
        rating: 4.9,
        plays: '250k'
    },
    {
        id: 'pingpong',
        title: 'Ping Pong Go!',
        genre: 'Sports',
        image: 'assets/thumbnails/thumb_pingpong.png',
        rating: 4.9,
        plays: '1.8M'
    },
    {
        id: 'stickman-parkour',
        title: 'Stickman Climb 2: Pro Challenge',
        genre: 'Action',
        image: 'assets/thumbnails/thumb_stickman.png',
        rating: 4.9,
        plays: '4.5M'
    },
    {
        id: 'blocky-blast',
        title: 'Blocky Blast: Supreme Puzzle',
        genre: 'Puzzle',
        image: 'assets/thumbnails/thumb_blocky.png',
        rating: 4.8,
        plays: '900k'
    },

    {
        id: 'ludo',
        title: 'Ludo Pro AI',
        genre: 'Board',
        image: 'assets/thumbnails/thumb_ludo_1768506972157.png',
        rating: 4.8,
        plays: '550k'
    },
    {
        id: 'cricket',
        title: '🏏 City Cricket - IPL Edition',
        genre: 'Sports',
        image: 'assets/thumbnails/thumb_cricket_1768507450211.png',
        rating: 4.9,
        plays: '2.8M'
    },
    {
        id: 'uno',
        title: 'Uno Strategist 2.0',
        genre: 'Board',
        image: 'https://gaming-cdn.com/images/products/4898/orig/uno-pc-game-ubisoft-connect-cover.jpg?v=1701186113',
        rating: 4.9,
        plays: '1.2M'
    },
    {
        id: 'match3',
        title: ' Candy Crush ',
        genre: 'Puzzle',
        image: 'https://i.ytimg.com/vi/b6l3KkTgDew/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAS7S2VYXMgC-T_RiJtTIhjJSe48A',
        rating: 4.8,
        plays: '100k'
    },
    {
        id: 'maze',
        title: 'Cyber Maze 2.0',
        genre: 'Puzzle',
        image: 'https://peekandpoke.com/wp-content/uploads/2023/05/cover_image_1200x630_cyber_maze_raider.png',
        rating: 4.9,
        plays: '250k'
    },
    {
        id: 'snake',
        title: 'Neon Snake 2.0',
        genre: 'Action',
        image: 'https://assets.bgames.com/8/114948/100813/1200x630/neon-snake.webp',
        rating: 4.7,
        plays: '450k'
    },
    {
        id: 'pacman',
        title: 'Cyber Pacman 2.0',
        genre: 'Action',
        image: 'https://www2.minijuegosgratis.com/v3/games/thumbnails/2399_1.jpg',
        rating: 4.9,
        plays: '950k'
    },
    {
        id: 'tetris',
        title: 'Tetris Pro 2.0',
        genre: 'Puzzle',
        image: 'https://m.media-amazon.com/images/I/811itIRXX7L.png',
        rating: 4.8,
        plays: '800k'
    },
    {
        id: 'solitaire',
        title: 'Solitaire Classic Pro',
        genre: 'Board',
        image: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch/70010000058011/c2c46d1abeb8a00a96f8c7e1de49939cf5eb5bce7324aeaf842be3d63d9e8f9c',
        rating: 4.9,
        plays: '3.2M'
    },
    {
        id: 'domino',
        title: 'Domino Elite 2.0',
        genre: 'Board',
        image: 'https://i.ytimg.com/vi/nOH_tDrnYjc/maxresdefault.jpg',
        rating: 4.7,
        plays: '200k'
    },
    {
        id: 'minesweeper',
        title: 'Minesweeper Pro 2.0',
        genre: 'Puzzle',
        image: 'https://sc.filehippo.net/images/t_app-icon-l/p/ce2f726a-4984-4d92-987e-1cb2f6a03b74/1100757901/mines-pro-logo',
        rating: 4.6,
        plays: '220k'
    },
    {
        id: 'breakout',
        title: 'Breakout Neon 2.0',
        genre: 'Action',
        image: "assets/thumbnails/brek out neon.png",
        rating: 4.8,
        plays: '650k'
    },
    {
        id: 'flappy ',
        title: 'Flappy Bird 2.0',
        genre: 'Action',
        image: 'https://i.ytimg.com/vi/ihvBiJ1oC9U/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDS1fKUzNuMZN17_juid1RLdJkDtg',
        rating: 4.5,
        plays: '2.5M'
    },
    {
        id: 'typing',
        title: 'Typing pro',
        genre: 'Puzzle',
        image: "assets/thumbnails/download.png",
        rating: 4.9,
        plays: '400k'
    },
    {
        id: 'stone-paper-scissors',
        title: 'Stone-Paper-Scissors Game',
        genre: 'Action',
        image: 'https://i.ytimg.com/vi/6lh_sTF7AG4/maxresdefault.jpg',
        rating: 4.9,
        plays: '250k'
    },
    {
        id: 'archery',
        title: ' Master Archer',
        genre: 'Sports',
        image: 'https://imgs.crazygames.com/archery-world-tour/20230727042624/archery-world-tour-cover?metadata=none&quality=60&width=412',
        rating: 4.9,
        plays: '180k'
    },
    {
        id: 'angry-birds',
        title: 'Angry Birds: Ultra Pro',
        genre: 'Action',
        image: 'https://www.angrybirds.com/wp-content/uploads/2022/06/AB_Classic_1920x1080_TitlePicture_Vector-1300x731.png',
        rating: 4.9,
        plays: '4.2M'
    },
    {
        id: 'fruit-slicer',
        title: 'Fruit Ninja',
        genre: 'Action',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdXVzCrfYUvk1lKM7BlPj8s2xqip4_mHVbXA&s',
        rating: 4.9,
        plays: '2.1M'
    },
    {
        id: 'quiz-game',
        title: 'Quiz Master',
        genre: 'Puzzle',
        image: "assets/thumbnails/quiz .png",
        rating: 4.8,
        plays: '950k'
    },
    {
        id: 'whack-a-mole',
        title: 'Neon Whack-A-Mole',
        genre: 'Action',
        image: 'https://plays.org/game/whack-a-mole/assets/loader.png',
        rating: 4.8,
        plays: '450k'
    },
    {
        id: 'simon-says',
        title: 'Simon Say',
        genre: 'Puzzle',
        image: 'https://kidmons.com/assets/img/games/1200x630/simon.jpg',
        rating: 4.9,
        plays: '300k'
    },
    {
        id: 'crossy-road',
        title: 'Crossy Neon Rush',
        genre: 'Action',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTll4UXDeLrq_CF7EXHgSg4qzoZAwaZ8xnjNw&s',
        rating: 4.8,
        plays: '5.5M'
    },
    {
        id: 'hangman',
        title: 'Cyber Hangman Pro',
        genre: 'Puzzle',
        image: 'https://play-lh.googleusercontent.com/eXjUGkt7e06JA08Hza3FoDywkQqDdqyUs8StcYGtCQ6FxTxrrNwPCxwCFXT58PRymHPf=w240-h480-rw',
        rating: 4.7,
        plays: '150k'
    },
    {
        id: 'connect-four',
        title: 'Connect Four Elite',
        genre: 'Board',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiYjdtBXZl-FEs75aCrsGsneL4kr192Vo8cQ&s',
        rating: 4.9,
        plays: '1M'
    },
    {
        id: 'speak-number-guess',
        title: 'Voice Guess number',
        genre: 'Puzzle',
        image: "assets/thumbnails/nuber guess .png",
        rating: 4.9,
        plays: '450k'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('games-grid');
    const searchInput = document.getElementById('game-search');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Initialize UI
    renderGames(GAMES_DATA);

    // Auto-start background synth ambiance
    window.addEventListener('click', () => {
        if (typeof GameHubAudio !== 'undefined' && !GameHubAudio.isMusicPlaying) {
            GameHubAudio.playMusic();
        }
    }, { once: true });

    // Search Logic
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = GAMES_DATA.filter(g =>
            g.title.toLowerCase().includes(term) || g.genre.toLowerCase().includes(term)
        );
        renderGames(filtered);
    });

    // Filter Logic
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            const filtered = filter === 'all'
                ? GAMES_DATA
                : GAMES_DATA.filter(g => g.genre.toLowerCase() === filter);
            renderGames(filtered);
        });
    });

    function renderGames(data) {
        grid.innerHTML = '';
        data.forEach(game => {
            const card = document.createElement('div');
            card.className = 'game-card';
            card.innerHTML = `
                <div class="card-img-wrap">
                    <img src="${game.image}" alt="${game.title}">
                    <span class="game-genre">${game.genre}</span>
                </div>
                <div class="card-body">
                    <h3>${game.title}</h3>
                    <div class="card-meta">
                        <div class="rating">
                            <i data-lucide="star" style="width:14px; height:14px; fill:currentColor"></i>
                            ${game.rating}
                        </div>
                        <div class="plays">
                            <i data-lucide="users" style="width:14px; height:14px"></i>
                            ${game.plays}
                        </div>
                    </div>
                </div>
            `;
            card.onclick = () => {
                if (typeof GameHubAudio !== 'undefined') GameHubAudio.play('click');
                setTimeout(() => window.location.href = `games/${game.id}.html`, 100);
            };
            grid.appendChild(card);
        });
        // Re-init lucide icons for dynamic items
        lucide.createIcons();
    }

    // Load stats from global storage
    const globalStats = JSON.parse(localStorage.getItem('portal_user_stats')) || {
        totalScore: 0,
        gamesPlayed: 0,
        level: 1,
        exp: 0
    };

    document.getElementById('games-played').innerText = globalStats.gamesPlayed.toLocaleString();
    document.getElementById('total-score').innerText = globalStats.totalScore.toLocaleString();
    document.getElementById('level').innerText = `Lvl ${globalStats.level}`;

    // Session Handling
    const session = JSON.parse(localStorage.getItem('portal_session'));
    const playerName = document.getElementById('player-name');
    const logoutBtn = document.getElementById('logout-trigger');

    if (session) {
        playerName.innerText = session.name;
        logoutBtn.style.display = 'flex';
        document.getElementById('user-display').onclick = null; // Disable redirect to auth if logged in
    }

    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('portal_session');
        window.location.reload();
    });

    // Header transparency
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.main-header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(5, 5, 8, 0.95)';
            header.style.paddingTop = '5px';
            header.style.paddingBottom = '5px';
        } else {
            header.style.background = 'rgba(5, 5, 8, 0.8)';
            header.style.paddingTop = '10px';
            header.style.paddingBottom = '10px';
        }
    });
});
