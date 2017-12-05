
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProdCatalogCategoryType} from '../product/ProdCatalogCategoryType.js';
import {ProductCategory} from '../product/ProductCategory.js';
import {ProdCatalog} from '../product/ProdCatalog.js';


const ProdCatalogCategory = new GraphQLObjectType({
  name: 'ProdCatalogCategoryType',
  description: 'Type for ProdCatalogCategory in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    prodCatalogCategoryType: {
      type: ProdCatalogCategoryTypeType,
      args : {prodCatalogCategoryTypeId: {type: GraphQLString}},
      resolve: (prodCatalogCategory, args, {loaders}) => loaders.ofbizArray.load(`prodCatalogCategoryTypes/find?=${args.prodCatalogCategoryTypeId}`)
    },
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (prodCatalogCategory, args, {loaders}) => loaders.ofbizArray.load(`productCategorys/find?=${args.productCategoryId}`)
    },
    sequenceNum: {type: GraphQLInt},
    prodCatalog: {
      type: ProdCatalogType,
      args : {prodCatalogId: {type: GraphQLString}},
      resolve: (prodCatalogCategory, args, {loaders}) => loaders.ofbizArray.load(`prodCatalogs/find?=${args.prodCatalogId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProdCatalogCategory};
    