//Princípio da Responsabilidade Única (SRP)

//CÓDIGO RUIM 
class userOrder {
    constructor (user) {
        this.user = user;
    }

    changeOrder (order) {
        if (this.verifyOrder()) {    
            return console.log('OK!')
        } else {
            return console.log('Wrong!')
        }
    }

    verifyOrder() {
        if (order === console.log('OK!')) {
            return console.log('OrderOK!')
        } else {
            return console.log('Something is wrong!')
        }
    }
}


//CÓDIGO BOM
 class userOrder {
     constructor(user) {
         this.user = user;
     }

     veryfyOrder() {

     }
 }

 class userAuthOrder {
     constructor(user) {
         this.user = user;
         this.authOrder = new this.authOrder(user);
     }

     changeOrder(order) {
         if (this.authOrder.veryfyOrder()){
             return console.log('This Code is Better!')
         }
     }
 }

