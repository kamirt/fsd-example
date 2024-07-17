import type { IUser } from "../types/User";
import { formatDate } from "../../../shared";

export default {
    getUser (): Promise<IUser> {
        const user: IUser = {
            id: 1,
            email: 'example@example.ru',
            firstName: 'Alexander',
            lastName: 'Alexandrov',
            phone: '89999999999',
            deliveryAddresses: [],
            birthDate: formatDate(new Date())
        }

        return Promise.resolve(user)
    }
}