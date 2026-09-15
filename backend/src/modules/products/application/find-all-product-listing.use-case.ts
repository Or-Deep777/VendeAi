import { Inject } from "@nestjs/common";
import { ProductListing } from "../domain/entities/product-listing.entity.js";
import { ProductListingRepository } from "./repositories/product-listing.repository.js";

export class FindAllProductListingUseCase{
    constructor(
        @Inject('ProductListingRepository')
        private productListingRepository: ProductListingRepository
    ){}

    async execute():Promise<ProductListing[]>{
        return this.productListingRepository.findAll()
    }
}