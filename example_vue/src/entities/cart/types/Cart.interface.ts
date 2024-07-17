import type { ICartProduct } from "./CartProduct.interface";
import type { CartDeliveryAddressId } from "./CartDeliveryAddress.type";

export interface ICart {
    id: number | null;
    // product: Product[] (from '../../product); соблазн высок, но это разные сущности.
    products: ICartProduct[];
    deliveryAddressId: CartDeliveryAddressId | null;
}