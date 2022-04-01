// VARIABLES --------------------------------------------------
// let serverDomain = 'http://127.0.0.1:4242/';  // Development
let serverDomain = 'https://isaacshea-api-server.herokuapp.com/'; // Deployment


// CAROUSELS --------------------------------------------------
var Ph_CarouselList = [];

function loadCarousels() { 
    // Get all carousels
    let carousels = document.querySelectorAll('.content-carousel');

    // Loop through each carousel
    for (item of carousels) {
        // Create a new carousel object
        let carousel = new Ph_Carousel({
            parent: item.parentNode,
            html: item,
            items: item.querySelectorAll('.carousel-item'),
            leftButton: item.querySelector('.button-left'),
            rightButton: item.querySelector('.button-right'),
            tickerContainer: item.parentNode.querySelector('.carousel-tickers')
        });
        carousel.initialise();
    }
}
class Ph_Carousel {
    constructor({
        parent, 
        html,
        items,
        leftButton,
        rightButton,
        tickerContainer,
        activeItemID,
        autoPlayDelay = 10000
    } = {}) { 
        this.parent = parent;
        this.html = html;
        this.items = items;
        this.leftButton = leftButton;
        this.rightButton = rightButton;
        this.tickerContainer = tickerContainer;
        this.activeItemID = activeItemID || 0;
        this.autoPlayDelay = autoPlayDelay;

        this.autoPlayTimeout = null;
    }

    initialise() { 
        // Give ID
        this.html.id = 'ph-carousel-' + Ph_CarouselList.length;

        // Add to list
        Ph_CarouselList.push(this);

        // Give IDs to items
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].id = 'ph-carousel-' + Ph_CarouselList.length + '-item-' + i;

            if (this.items[i].classList.contains('active')) {
                this.activeItemID = i;
            }
        }

        // Create tickers
        this.tickerContainer.innerHTML = '';
        for (let i = 0; i < this.items.length; i++) { 
            let ticker = document.createElement('button');
            ticker.classList.add('ticker');
            if (i == this.activeItemID) { ticker.classList.add('active'); }
            ticker.id = this.html.id + '-ticker-' + i;
            this.tickerContainer.appendChild(ticker);

            // Add click event
            ticker.addEventListener('click', () => { 
                this.goto(i);
            });
        }

        // Add event listeners
        this.leftButton.addEventListener('click', () => { this.previous(); });
        this.rightButton.addEventListener('click', () => { this.next(); });

        // Auto play
        // this.autoPlay();
    }

    next() {
        if (this.activeItemID < this.items.length - 1) {
            this.activeItemID++;
        } else {
            this.activeItemID = 0;
        }
        this.update();

        // Remove autoplay
        clearTimeout(this.autoPlayTimeout);
    }

    previous() {
        if (this.activeItemID > 0) {
            this.activeItemID--;
        } else {
            this.activeItemID = this.items.length - 1;
        }
        this.update();

        // Remove autoplay
        clearTimeout(this.autoPlayTimeout);
    }

    goto(id) {
        this.activeItemID = id;
        this.update();

        // Remove autoplay
        clearTimeout(this.autoPlayTimeout);
    }

    update() {
        // Update active item
        for (let i = 0; i < this.items.length; i++) {
            if (i == this.activeItemID) {
                this.items[i].classList.add('active');
                this.html.querySelector('.carousel-items').scrollLeft = (this.items[i].offsetWidth * i) + (i * 20);
            } else {
                this.items[i].classList.remove('active');
            }
        }

        // Update tickers
        for (let i = 0; i < this.tickerContainer.children.length; i++) {
            if (i == this.activeItemID) {
                this.tickerContainer.children[i].classList.add('active');
            } else {
                this.tickerContainer.children[i].classList.remove('active');
            }
        }
    }

    autoPlay() {
        this.autoPlayTimeout = setTimeout(() => {
            this.next();
            this.autoPlay();
        }, this.autoPlayDelay);
    }
}



// COOKIE CONSENT ---------------------------------------------
document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        const isCookiesConsent = localStorage.getItem('isCookiesConsent') || false;

        if (isCookiesConsent === 'true') { 
            destroyCookieConsent();
        } else { 
            document.getElementById('cookie-consent').classList.add('show');
            localStorage.setItem('isCookiesConsent', true);
        }
    }
}

function destroyCookieConsent() { 
    const cookieConsent = document.getElementById('cookie-consent');
    cookieConsent.parentNode.removeChild(cookieConsent);
}