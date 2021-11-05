import {DataTypes, Model, UUIDV4} from 'sequelize';
import databaseConnection from '../repository/databaseConnection';

export interface IProductCategory{
    id: string;
    name: string;
    isActive: boolean;
}

interface ProductCategoryInstance extends Model<IProductCategory>, IProductCategory{
    map () : IProductCategory
}

const productCategory = databaseConnection.define<ProductCategoryInstance>("ProductCategory",{
    id:{
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    isActive:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
},
{
    freezeTableName: true
})

export default productCategory;