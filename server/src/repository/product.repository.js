import GenericRepository from "./generic.repository.js";

export default class ProductRepository extends GenericRepository {
    constructor(dao){
        super(dao);
    }
}