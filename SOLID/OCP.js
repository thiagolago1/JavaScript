//Princípio do Aberto/Fechado (OCP)

//CÓDIGO RUIM
class coffe {
        coffeFlavor = [ 'express', 'capuccino' ]
        coffeMaker = {
        makeCoffe(flavor) {
            if (coffeFlavor.indexOf(flavor) > -1 ) {
                    console.log('Coffe Ready!');
            } else {
            console.log('Fail! No Coffe!');
            }
        }
    }
}

//CÓDIGO BOM
class coffe {
        coffeFlavor = [ 'express', 'capuccino' ]
        coffeMaker = {
        makeCoffe(flavor) {
            if (coffeFlavor.indexOf(flavor) > -1 ) {
                    console.log('Coffe Ready!');
            } else {
            console.log('Fail! No Coffe!');
            }
        },

        addFlavor(flavor) {
            coffeFlavor.push(flavor);
        }
    }
}

