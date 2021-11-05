import productCategory, { IProductCategory } from "../model/productCategory";
import { injectable } from "tsyringe";

@injectable()
export default class ProductCategoryService{

    GetAsync = async (id: string) : Promise<IProductCategory | null> => {
        const result = await  productCategory.findByPk(id);
        if(!result)
        {
            return null;
        }
        else{
            return result;
        }
    }

    FindAsync = (): Promise<IProductCategory[]>=>{
        return productCategory.findAll();
    }

    PostAsync = (resource: IProductCategory): Promise<IProductCategory> =>{
        return productCategory.create(resource);
    }

    PutAsync = async (id: string, resource: IProductCategory) : Promise<boolean> => {
        return (await productCategory.update(resource, {where: {id}}))[0] > 0;
    }

    DeleteAsync = async (id: string) : Promise<boolean> =>{
        return (await productCategory.destroy({where: {id}}))> 0;
    }
}