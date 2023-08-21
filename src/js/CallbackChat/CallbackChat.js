import './style.css'

export default class CallbackChat {
    constructor(container) {
        this.container = container;
    }    

    init() {        
        this.container.innerHTML = `
        <!-- Callback Chat -->
        <div class="callback-wrap">
          <div class="callback-button"></div>
          <form class="form">
              <div class="title">
                <div>Напишите нам</div>
                <span class="cross">&#215;</span>
              </div>      
              <input class="input" type="text">
              <button class="btn">Отправить</button>
            </form>
        </div>`;

        this.subscribeToEvents();
    }

    subscribeToEvents() {
        const callbackButton = document.querySelector('.callback-button');
        const cross = document.querySelector('.cross');        

        let switchPopup = () => {            
            const form = this.container.querySelector('.form');
            form.classList.toggle('active');    
            callbackButton.classList.toggle('hidden'); 
        }
        switchPopup = switchPopup.bind(this);

        callbackButton.addEventListener('click', switchPopup);
        cross.addEventListener('click', switchPopup);
    }
}
