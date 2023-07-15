let product = {
    data: [
        {
            product_name:"white t-shirt ",
            category:"Plane",
            price:"45",
            image:"./image/t-shirt1.webp",

        },
        
        {
            product_name:"yellow t-shirt",
            category:"Plane",
            price:"98",
            image:"./image/t-shirt2.webp",

        },
        {
            product_name:"Black t-shirt",
            category:"Plane",
            price:"58",
            image:"./image/t-shirt3.webp",

        },
        {
            product_name:"Contrast Blue",
            category:"Polo",
            price:"70",
            image:"./image/t-shirt4.webp",

        },
        {
            product_name:"Contrast Orange",
            category:"Printed",
            price:"54",
            image:"./image/t-shirt5.webp",

        }
    ]
}


for(let p_value of product.data){
    


    // create card
    let card =document.createElement("div");
    card.classList.add ("card", "hidden", p_value.category);

    // image container

    let imageContainer = document.createElement("div");
   imageContainer.classList.add ("image-container")

// image tag

let image = document.createElement("img");
image.setAttribute("src",p_value.image);

imageContainer.appendChild(image);
card.appendChild(imageContainer);

// category tag 

let category = document.createElement("h5");

category.innerText = "Category" + ": " + p_value.category
card.appendChild(category);

// price tag 

let price = document.createElement("h4");

price.innerText = "$" + " " + p_value.price
card.appendChild(price);

// name tag 

let name = document.createElement("h3");

name.innerText =  p_value.product_name
card.appendChild(name);


let main_product_container = document.querySelector(".main-product-container");
main_product_container.appendChild(card)


}

// function filter(value){

//     let btn = document.querySelectorAll(".filter-btn");
//     btn.forEach(function (e){
// if(value == e.innerText){
//     e.classList.add('active')
// }
// else{
//     e.classList.remove('active')
// }
//     })
// }


function filter(value){

    let btn = document.querySelectorAll(".filter-btn");
    btn.forEach(function (e){
        
        
        
if(value == e.innerText){
    e.classList.add('active')
}
else{
    e.classList.remove('active')
}
    })

    let elements = document.querySelectorAll(".card")
    elements.forEach((e)=>{

        if(value == 'All'){
            e.classList.remove("hidden")
            console.log(e)
        }else{
            if(e.classList.contains(value)){
                e.classList.remove("hidden")
                console.log(e)
            }else{
                e.classList.add("hidden")
            }
        }
    })

}

// window.onload = function () {
//     filter('Printed');
// }


window.onload = function () {

 filter ('All')

}

