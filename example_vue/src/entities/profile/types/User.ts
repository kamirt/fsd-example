import type { IDeliveryAddress } from "./DeliveryAddress";

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    deliveryAddresses: IDeliveryAddress[];
    birthDate: string;
}