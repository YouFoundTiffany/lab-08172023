// TOPPINGS ARRAY
const toppings = [{
    name: 'Sprinkles',
    quantity: 0,
    price: .25
},
{
    name: 'Chocolate Chips',
    price: .25,
    quantity: 0
},
{
    name: 'Cookie Chunks',
    price: .5,
    quantity: 0
}]
// CONES ARRAY
const cones = [{
    name: 'Sugar',
    quantity: 0,
    price: .25
},
{
    name: 'Plain',
    price: .25,
    quantity: 0
},
{
    name: 'Waffle',
    price: .5,
    quantity: 0
}]

// ICE CREAM ARRAY
const iceCream = [{
    name: 'Cookie Dough',
    price: 1.25,
    quantity: 0
},
{
    name: 'Vanilla',
    price: 1,
    quantity: 0
},
{
    name: 'Strawberry',
    price: 1.25,
    quantity: 0
}]

let cartElem = document.getElementById('cart')
let totalElem = document.getElementById('total')

// CART HTML TEMPLATE
//     < !--STUB TEMPLATE
// <div class="d-flex justify-content-between p-1 fs-3">
//     <span>Sprinkes x2</span>
//     <span>$0.25</span>

// DRAW MENU ITEMS FUNCTION
function buySprinkles() {
    // TODO find the topping I want to buy...find the sprinkles 
    // TODO increase how many toppings I have...increase the quantity 
    //  TODO add the sandwich to the cart ... update the DOM 

    let sprinkles = toppings.find(toppings => toppings.name == 'Sprinkles')
    sprinkles.quantity++
    // cartElem.innerHTML = `                        <div class="d-flex font-cab justify-content-between p-1 fs-3">
    //                         <span>${sprinkles.name} x ${sprinkles.quantity}</span>
    //                         <span>${sprinkles.price}</span>
    //                 </div>`
    drawCart()
    console.log('buying sprinkles', sprinkles.quantity)
}

function buyChocChip() {
    // TODO find the topping I want to buy...find the Choc Chips 
    // TODO increase how many toppings I have...increase the quantity 
    //  TODO add the topping items to the cart ... update the DOM 
    let chocChip = toppings.find(toppings => toppings.name == 'Chocolate Chips')
    chocChip.quantity++
    // cartElem.innerHTML = `                        <div class="d-flex font-cab justify-content-between p-1 fs-3">
    //                         <span>${chocChip.name} x ${chocChip.quantity}</span>
    //                         <span>${chocChip.price}</span>
    //                 </div>`
    drawCart()
    console.log('buying choc chips', chocChip.quantity)
}

function buyChunks() {
    // TODO find the topping I want to buy...find the Cookie Chunks 
    // TODO increase how many toppings I have...increase the quantity 
    //  TODO add the sandwich to the cart ... update the DOM 
    let chunks = toppings.find(toppings => toppings.name == 'Cookie Chunks')
    chunks.quantity++
    // cartElem.innerHTML = `                        <div class="d-flex font-cab justify-content-between p-1 fs-3">
    //                         <span>${chunks.name} x ${chunks.quantity}</span>
    //                         <span>${chunks.price}</span>
    //                 </div>`
    drawCart()
    console.log('buying chunks', chunks.quantity)
}


// WRITE TO DOM FUNCTION
function drawCart() {
    // TODO find the  ALL THE TOPPINGS topping I want to buy
    // TODO IF I HAVE ONE, CHECK THE QTY IS OVER ZERO
    //  TODO IF I DO, THEN ADD IT TO THE DOM
    let template = ''
    toppings.forEach(topping => {
        // NOTE in order to 'inject' javascript values in a string... we must use `` AND ${}
        if (topping.quantity > 0) {
            template += `                        <div class="d-flex justify-content-between p1 fs-3">
                            <span>${topping.name} x ${topping.quantity}</span>
                            <span>$${topping.price}</span>
                        </div>`
        }
    })
    cartElem.innerHTML = template
    console.log('template', template)
}


// DRAW TOTAL FUNCTION
function drawTotals() {
    // TODO look at ALL the toppings
    // TODO while looking at the toppings, check if they are in the cart.... is the quantity > 0
    // TODO if it is, how many do I have * how much do they cost....multiple quantity and price
    // TODO add the multiplied value to a total
    // TODO draw it to the DOM

    let total = 0
    toppings.forEach(toppings => {
        if (toppings.quantity > 0) {
            total += toppings.quantity * toppings.price
        }
        console.log(total, 'total')
    })

}


// DRAW PURCHASE OR CHECK OUT FUNCTION
















