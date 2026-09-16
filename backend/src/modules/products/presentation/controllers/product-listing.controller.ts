import { Body, Controller, Post, Get } from "@nestjs/common";
import { CreateProductListingUseCase } from "../../application/use-cases/create-product-listing.use-case.js";
import { FindAllProductListingUseCase } from "../../application/use-cases/find-all-product-listing.use-case.js";
import { CreateProductListingDto } from "../dtos/create-product-listing.dto.js";

@Controller("products")
export class ProductListingController{
    constructor(
        private readonly createProductListingUseCase: CreateProductListingUseCase,
        private readonly findAllProductListingUseCase: FindAllProductListingUseCase
    ){}

    @Post()
    create(@Body()data:CreateProductListingDto){
        return this.createProductListingUseCase.execute(data)
    }

    @Get()
    async findAll(){
        return this.findAllProductListingUseCase.execute()
    }
}