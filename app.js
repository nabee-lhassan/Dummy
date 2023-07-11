let product = {
    data: [
        {
            product_name:"white t-shirt ",
            category:"T-shirt",
            price:"45",
            image:"./image/t-shirt1.webp",

        },
        
        {
            product_name:"yellow t-shirt",
            category:"T-shirt",
            price:"98",
            image:"./image/t-shirt2.webp",

        },
        {
            product_name:"Black t-shirt",
            category:"T-shirt",
            price:"58",
            image:"./image/t-shirt3.webp",

        }
    ]
}


for(let p_value of product.data){
    


    // create card
    let card =document.createElement("div");
    card.classList.add ("card", "p_value.category");

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







// let Product_container = document.querySelector(".main-product-container");

// let main_product = document.createElement("div");
// main_product.classList.add("main-product");


// let product_name = document.createElement("div");
// product_name.classList.add("product-name");


// let images = document.createElement("img");
// images.setAttribute("src","https://cdn.mukama.com/31812/formal-friday-ultrafine-merino-t-shirt-black.jpg");

// console.log(images);



// main_product.appendChild(images);
// Product_container.appendChild(main_product);