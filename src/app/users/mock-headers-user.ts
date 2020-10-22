import { MyTableConfig } from '../components/table/table-config.component';

export const HEADERSUSER: MyTableConfig =
{
    headers: [
        {
            key : "id",
            label : "#"
        }, 
        {
            key : "name",
            label : "Name"
        },
        {
            key : "surname",
            label : "Surname"
        },
        {
            key : "date",
            label : "Date of birth"
        },
        {
            key : "email",
            label : "Email"
        },
        {
            key : "password",
            label : "Password"
        }
    ]
}
   