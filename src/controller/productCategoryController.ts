import { IProductCategory } from "../model/productCategory";
import ProductCategoryService from "../service/productCategoryService";
import {Response, Request} from 'express';
import { injectable } from "tsyringe";

@injectable()
export default class ProductCategoryController {

    private _service: ProductCategoryService;

    constructor(service: ProductCategoryService) {
        //super();
        this._service = service;
    }

    GetAsync = async (req: Request, res: Response) : Promise<Response> => {
        const id = req.params.id;
        const result = await this._service.GetAsync(id);
        return res.status(200).json(result);
    }

    FindAsync = async(req: Request, res: Response ) : Promise<Response> => {
        const result = await this._service.FindAsync();
        return res.status(200).json(result);
    }

    PostAsync = async(req: Request, res: Response) : Promise<Response> => {
        const resource = req.body;

        const result = await this._service.PostAsync(resource);
        return res.status(201).json(result);
    }

    PutAsync = async (req:Request, res: Response) : Promise<Response> =>{
        const id = req.params.id;
        const data = req.body;

        console.log(id);

        const model = await this._service.GetAsync(id);
        if(!model){
            return res.status(404);
        }
        else{
            const result = this._service.PutAsync(id, data);
            return res.status(204).json(result);
        }
    }

    DeleteAsync = async(req: Request, res: Response) : Promise<Response> => {
        const id = req.params.id;

        const model = await this._service.GetAsync(id);
        if(!model)
        {
            return res.status(404);
        }
        else{
            const result = await this._service.DeleteAsync(id);
            return res.status(200).json(result);
        }
    }
}