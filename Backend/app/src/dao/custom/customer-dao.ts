import {Customer} from "../../entity/customer";

export interface CustomerDAO extends SuperDAO<Customer,string>{

    //neww
    count():Promise<number>;

}