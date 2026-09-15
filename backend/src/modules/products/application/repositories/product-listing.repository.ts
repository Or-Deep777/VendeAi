import { ProductListing } from "../../domain/entities/product-listing.entity.js";

export interface ProductListingRepository{
    create(ProductListing:ProductListing):void
}