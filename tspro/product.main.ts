
import { ProductService } from "./product.service";

let ps: ProductService = new ProductService();

//let res:Array<Product>  = ps.getProducts();


ps.getProductsAync().then((res) => {
    console.log(res);
}
).catch((err) => {
    console.log(err);
});

console.log("=================");