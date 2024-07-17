import type { IProduct } from "../model/types/Product.interface";
import type { IProductShort } from "../model/types/ProductShort.interface";

type Products = { items: IProductShort[] };

export default {
    getProductList ():Promise<Products> {
        return Promise.resolve({
            items: [
                {
                    id: 9384,
                    name: 'Product_1',
                    provider: 'Provider Ltd.',
                    photo: 'https://api.slingacademy.com/public/sample-photos/1.jpeg'
                },
                {
                    id: 9385,
                    name: 'Product_2',
                    provider: 'Provider 2',
                    photo: 'https://api.slingacademy.com/public/sample-photos/2.jpeg'
                },
                {
                    id: 9386,
                    name: 'Product_3',
                    provider: 'Provider 3',
                    photo: 'https://api.slingacademy.com/public/sample-photos/3.jpeg'
                }
            ]
        })
    },

    getProductCard(productId: IProduct['id']): Promise<IProduct> {
        return Promise.resolve({
            id: 9384,
            name: 'Product_1',
            provider: 'Provider Ltd.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            photo: 'https://api.slingacademy.com/public/sample-photos/1.jpeg'
        })
    },
}