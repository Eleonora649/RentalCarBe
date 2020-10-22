export class User {
    
    public id: number;
    public name: string;
    public surname: string;
    public birth: string;
    public email: string;
    public password: string;
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}