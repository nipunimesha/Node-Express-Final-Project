import {ItemDTO} from "../dto/item-dto";
import {pool} from "../db/db-pool";
import {DAOTypes, getDAO} from "../dao/dao-factory";
import Promise = require("promise");
import {ItemDAO} from "../dao/custom/item-dao";

export class ItemBO{

    findAllItems(): Promise<Array<ItemDTO>>{

        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const ItemDAO = <ItemDAO> getDAO(DAOTypes.ITEM, connection);

                    const promise = ItemDAO.findAll();
                    promise.then(Items => {
                        resolve(Items);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });


        });

    }

    findItem(id: string): Promise<Array<ItemDTO>>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const ItemDAO = <ItemDAO> getDAO(DAOTypes.ITEM, connection);

                    const promise = ItemDAO.find(id);
                    promise.then(Item => {
                        resolve(Item);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });


        });
    }

    saveItem(Item: ItemDTO): Promise<boolean>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const ItemDAO = <ItemDAO> getDAO(DAOTypes.ITEM, connection);

                    const promise = ItemDAO.save(Item);
                    promise.then(result => {
                        resolve(result);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });


        });
    }

    updateItem(Item: ItemDTO): Promise<boolean>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const ItemDAO = <ItemDAO> getDAO(DAOTypes.ITEM, connection);

                    const promise = ItemDAO.update(Item);
                    promise.then(result => {
                        resolve(result);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });


        });
    }

    deleteItem(id: string): Promise<boolean>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const ItemDAO = <ItemDAO> getDAO(DAOTypes.ITEM, connection);

                    const promise = ItemDAO.delete(id);
                    promise.then(result => {
                        resolve(result);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });


        });
    }

}