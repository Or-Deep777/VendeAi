import { ProductListing } from "../../domain/entities/product-listing.entity.js";

export abstract class ProductListingRepository{
    abstract create(ProductListing:ProductListing): Promise<void>
    abstract findAll(): Promise<ProductListing[]>
}