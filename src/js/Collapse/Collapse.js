import './style.css'

export default class Collapse {
    constructor(container) {
        this.container = container;
    }    

    init() {        
        this.container.innerHTML = `
        <!-- Callback Chat -->
        <div class="wrap">
            <button class="button">Collapse</button>
            <div class="hint">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam magnam beatae pariatur quis dolores quidem molestias, voluptates accusantium voluptate at doloribus maxime quos aperiam eius ex cumque exercitationem, qui itaque!  </div>
        </div>`;

        this.subscribeToEvents();
    }

    subscribeToEvents() {
        const button = document.querySelector('.button');
        button.addEventListener('click', this.onClick);
    }

    onClick() {
        const hint = document.querySelector('.hint');
        hint.classList.toggle('move');
        
        if(hint.style.height) {
            hint.style.height = null;
        } else {
            hint.style.height = hint.scrollHeight + 'px';
        }
    }
}
