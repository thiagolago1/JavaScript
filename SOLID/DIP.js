//Princípio da Inversão de Dependência (DIP)

//CÓDIGO RUIM
let button = true;

let lamp = true;

trigger = () => {
    if (button === true && lamp === true) {
        return console.log('Lamp On')
    } 
    
}

console.log(trigger());


//CÓDIGO BOM
class button {
    
    trigger()

}

let lampp = true;

class lamp {

    trigger() {
        
    if (lamp == true) {
        triggerPulled(console.log('ON'))
    } else {
        triggerNotPulled(console.log('OFF'))
        }
    }
}

    