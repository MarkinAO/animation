import './style.css'

export default class Collapse {
    constructor(container) {
        this.container = container;
    }    

    init() {        
        this.container.innerHTML = `
        <!-- Liker -->
        <div class="liker-wrap">
            <button class="liker">Like</button>
        </div>`;

        this.subscribeToEvents();
    }

    subscribeToEvents() {
        const liker = document.querySelector('.liker');
        liker.addEventListener('click', this.onClick);
    }

    onClick(e) {
        const tracks = ['track1', 'track2', 'track3', 'track4'];
        const track = tracks[Math.round(Math.random() * 3)];
        
        const like = document.createElement('div');
        like.classList.add('like');
        like.style.animationName = track;
        e.target.after(like);

        like.addEventListener('animationend', () => like.remove());
    }
}
