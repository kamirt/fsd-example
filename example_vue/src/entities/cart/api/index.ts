import type { ICart } from "../types/Cart.interface";
import type { ICartProduct } from "../types/CartProduct.interface";

export default {
    createCart ():Promise<{ id: number }> {
        return Promise.resolve({ id: 183776 })
    },

    getCart ():Promise<ICart> {
        return Promise.resolve({
            id: 389389,
            products: [
                {
                    id: 9384,
                    name: 'Product_1',
                    photo: 'https://api.slingacademy.com/public/sample-photos/1.jpeg'
                },
                {
                    id: 9385,
                    name: 'Product_2',
                    photo: 'https://api.slingacademy.com/public/sample-photos/2.jpeg'
                },
                {
                    id: 9386,
                    name: 'Product_3',
                    photo: 'https://api.slingacademy.com/public/sample-photos/3.jpeg'
                }
            ],
            deliveryAddressId: 23
        })
    },

    putIntoCart(cartId: ICart['id'], productId: ICartProduct['id']): Promise<void> {
        return Promise.resolve()
    },

    deleteFromCart(cartId: ICart['id'], productId: ICartProduct['id']): Promise<void> {
        return Promise.resolve()
    },

    clearCart(cartId: ICart['id']): Promise<void> {
        return Promise.resolve()
    },
}