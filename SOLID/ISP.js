//Princípio da Segregação de Interface (ISP)

//CÓDIGO RUIM
class viewsTopp {
    constructor(settings) {
        this.settings = settings;
        this.setup;
    }
    render(animation) {
        this.rootAnimation = this.settings.rootAnimation;
        this.animation.setup();
    }

}

    const someThing = new viewsTopp({
        rootAnimation: document.getElementByID('body'),
        animation() {
        }
    })


//CÓDIGO BOM
class viewsTopp {
    constructor(settings) {
        this.settings = settings;
        this.options = settings.options;
        this.render;
    }

    render() {
        this.rootAnimation = this.settings.rootAnimation;
        this.renderOptions;
    }

    renderOptions() {
        
    }
}
