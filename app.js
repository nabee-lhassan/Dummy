let product = {
    data: [
        {
            product_name:"t-shirt white",
            category:"t-shirt",
            price:"45",
            image:"./image/white-t-shirt.jpg",

        },
        
        {
            product_name:"Trouser white",
            category:"trouser",
            price:"98",
            image:"./image/trouser.jpg",

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

document.querySelector(".main-product-container").appendChild(card);

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