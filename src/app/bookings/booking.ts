import { Car } from '../cars/car';
import { User } from '../users/user';

export class Booking {

    id: number;
    startBooking: Date;
    endOfBooking: Date;
    user: User;
    car: Car;

    constructor() {
        this.user = new User();
        this.car = new Car();
    }
}