export class Booking {

    id: number;
    startBooking: string;
    endBooking: string;
    id_user: {
        id: number;
        name: string;
        surname: string;
        date: string;
        email: string;
        password: string;
    };
    id_car: {
        id: number;
        yearOfRegistration: number;
        manufacturer: string;
        carModel: string;
        carLicensePlat: string;
        category: {
            idCategory: number;
            name: string;
            cars: null;
        };
    };
}

