import { Category } from "./category";

export class Product {

    constructor(public id?:Number,public name?:String,public price?:Number,public imageUrl?:String,public description?:String,public category?:Category){

    }


}