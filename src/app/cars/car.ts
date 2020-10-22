export class Car {

    id: number;
    model: string;
    license: string;
    manufacturer: string;
    carRegistration: number;
    //category: Category;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}

