class ShoppingCart {
    constructor() {
        this.items = []
       
        
      // ...
    }

//get items this should let yoy read the value of this.items
getItems (){
    return this.items
}   
// this will add item and its properties to a new object called item 
addItem(itemName,quantity,price){
    this.items.push({
        name:itemName,
        quantity:quantity,
        pricePerUnit:price
    })
         } 
         // this will clear all items from the array items 
clear()  {
    return this.items=  []
}
//this is supposed to clone whichever cart it is called on and return a separete but same cart
clone(cart){ 
      
    this.cart2= Object.assign({},cart)
    
    return this.cart2
}
    }

  



module.exports = ShoppingCart



