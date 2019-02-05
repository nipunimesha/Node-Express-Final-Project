import Promise = require("promise");
import {Item} from "../../../entity/Item";
import {ItemDAO} from "../item-dao";
import {PoolConnection} from "mysql";



export class ItemDaoImpl implements ItemDAO {

    constructor(private connection: PoolConnection) {
    }

    delete(code: string): Promise<boolean> {

        return new Promise((resolve, reject) => {

            this.connection.query(`DELETE FROM item WHERE code='${code}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });

    }

    find(code: string): Promise<Array<Item>> {

        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM item WHERE code='${code}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });

    }

    findAll(): Promise<Array<Item>> {

        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM item`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });

    }

    save(entity:Item): Promise<boolean> {

        return new Promise((resolve, reject) => {

            this.connection.query(`INSERT INTO item VALUES ('${entity.code}','${entity.description}','${entity.qty_On_Hand}','${entity.unitPrice}')`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });

    }

    update(entity: Item): Promise<boolean> {
        return new Promise((resolve, reject) => {

            console.log(`UPDATE item SET description = '${entity.description}',qty_on_hand='${entity.qty_On_Hand}',unit_price ='${entity.unitPrice}' WHERE code='${entity.code}'`);
            this.connection.query(`UPDATE item SET description = '${entity.description}', address ='${entity.qty_On_Hand}' WHERE code='${entity.code}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

}