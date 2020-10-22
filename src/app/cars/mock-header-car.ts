import { MyTableConfig } from '../components/table/table-config.component';

export const HEADERSCAR: MyTableConfig = 
{
    headers: [
        {
            key : "id",
            label : "#"
        }, 
        {
            key : "model",
            label : "Model"
        },
        {
            key : "manufacturer",
            label : "Manufacturer"
        },
        {
            key : "license",
            label : "License"
        },
        {
            key : "registration",
            label : "Registration"
        }
    ]
}
