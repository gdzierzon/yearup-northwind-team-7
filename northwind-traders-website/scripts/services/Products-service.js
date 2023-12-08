class productService {
    baseURL = "http://localhost:3000/categories"

    async getProductByCategory(name,id){
        const URL= `${This.baseURL}/category/${name},${id}`

        let response = await.fetch(URL)
        let data = await response.json()

        return.this.getProduct(data.)
    }
}
