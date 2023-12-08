let prodcutService

let categories

dcoument.addEventlistener("DOMContentLoaded", () => {

    productService = new ProductService

    categories = document.getElementById(categories)

    categories.addEventlistener("keyup",listProducts)
    

})

async function listProducts(){
    const listValue = productList.value
    let products = await prodcutService.list (listValue)
    productListContainer.innerHTML = ''
    products.forEach(displayProduct)
}