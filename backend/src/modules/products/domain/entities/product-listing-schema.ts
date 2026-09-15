import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { ProductListingStatus } from "./product-listing.entity.js"

@Entity("product_listings")
export class ProductListingSchema{

    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column({type:"varchar"})
    title:string

    @Column({type:"text",nullable:true})
    description:string

    @Column({type:"int"})
    price:number

    @Column({type:"varchar"})
    sellerId:string

    @Column({type:"varchar"})
    categoryId:string

    @Column({type:"enum",enum:ProductListingStatus})
    status:ProductListingStatus
}