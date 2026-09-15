import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateProductListingUseCase } from "../../application/create-product-listing.use-case.js";
import { FindAllProductListingUseCase } from "../../application/find-all-product-listing.use-case.js";

@Controller("products")
export class ProductListingController{
    constructor(
        private readonly createProductListingUseCase: CreateProductListingUseCase,
        private readonly findAllProductListingCase: FindAllProductListingUseCase
    ){}
    @Post()
    create(@Body()body:any){
        return this.createProductListingUseCase.execute(body)
    }

    @Get()
    async findAll(){
        return this.findAllProductListingCase.execute()
    }
}