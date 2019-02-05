import Promise = require("promise");
import {Customer} from "../../../entity/customer";
import {PoolConnection} from "mysql";
import {CustomerDAO} from "../customer-dao";


export class CustomerDAOImpl implements CustomerDAO {

    constructor(private connection: PoolConnection) {
    }

    delete(id: string): Promise<boolean> {

        return new Promise((resolve, reject) => {

            this.connection.query(`DELETE FROM Customer WHERE id='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });

    }

    find(id: string): Promise<Array<Customer>> {

        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM Customer WHERE id='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });

    }

    findAll(): Promise<Array<Customer>> {

        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM Customer`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });

    }

    save(entity: Customer): Promise<boolean> {

        return new Promise((resolve, reject) => {

            this.connection.query(`INSERT INTO Customer VALUES ('${entity.id}','${entity.name}','${entity.address}')`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });

    }

    update(entity: Customer): Promise<boolean> {
        return new Promise((resolve, reject) => {

            console.log(`UPDATE Customer SET name = '${entity.name}', address ='${entity.address}' WHERE id='${entity.id}'`);
            this.connection.query(`UPDATE Customer SET name = '${entity.name}', address ='${entity.address}' WHERE id='${entity.id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }
    //newwww
    count(): Promise<number> {
        return new  Promise((resolve,reject)=>{
            this.connection.query("select count(*) from customer ",(err,results)=>{
                if (err){
                    reject(err);
                } else{
                    resolve(results);
                }
            });
        });
    }

}