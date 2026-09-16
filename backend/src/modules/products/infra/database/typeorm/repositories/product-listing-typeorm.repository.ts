import { Repository } from "typeorm";
import { ProductListingRepository } from "../../../../application/repositories/product-listing.repository.js";
import { ProductListing } from "../../../../domain/entities/product-listing.entity.js";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductListingSchema } from "../entities/product-listing-schema.js";

export class ProductListingTypeOrmRepository implements ProductListingRepository{
    constructor(
        @InjectRepository(ProductListingSchema)
        private readonly repository: Repository<ProductListingSchema>
    ){}

    async create(productListing: ProductListing): Promise<void> {
        const listing = this.repository.create({
            title: productListing.title,
            description: productListing.description,
            priceInCents: productListing.priceInCents,
            sellerId: productListing.sellerId,
            categoryId: productListing.categoryId,
            status: productListing.status
        })
        await this.repository.save(listing)
    }
    async findAll():Promise<ProductListing[]>{
        const listings = await this.repository.find()
        return listings.map((Listing)=>
            ProductListing.restore({
                title:Listing.title,
                description:Listing.description,
                priceInCents:Listing.priceInCents,
                sellerId:Listing.sellerId,
                categoryId:Listing.categoryId,
                status:Listing.status
            })
        )
    }
}