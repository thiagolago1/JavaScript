//Princípio de Substituição (LSP)

//CÓDIGO RUIM
class square {
    constructor() {
        this.base = 10;
        this.height = 10;
    }

    setColor(color) {
    
    }

    seBase(base) {
        this.base = base;
    }

    setHeight(height) {
        this.height = height;
    }

    getArea() {
        return this.base * this.height;
    }
}

class rectangle extends square {
    
}

//CÓDIGO BOM
class body {
    setColor(color) {
        if (color === 'red' || color === 'blue') {
            return console.log('the body has color')
        } else {
            return console.log('the body has no color')
        }
    } 

    render (area) {
            
    }
}

class square extends body {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    getArea() {
        return this.base * this.height;
    }
}