import { Product } from "./product.model";
export class ProductService {
    private products: Array<Product> = [
        { id: '1', name: 'Mouse', price: 1200 },
        { id: '2', name: 'Pen', price: 200 },
    ];

    public getProducts(): Array<Product> {
        return this.products;
    }
    public getProductsAync(): Promise<Array<Product>> {
        let promise:Promise<Array<Product>>
            = new Promise<Array<Product>>((resolve, reject) => {
            resolve(this.products);
        });
        return promise;
    }
    public async  getProductsAyncES7(): Promise<Array<Product>> {
        return this.products;
        
    }
}