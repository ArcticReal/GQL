
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProdCatalogCategoryTypeType} from '../product/ProdCatalogCategoryTypeType.js';
import {ProdCatalogType} from '../product/ProdCatalogType.js';
import {ProductCategoryType} from '../product/ProductCategoryType.js';


const ProdCatalogCategoryType = new GraphQLObjectType({
  name: 'ProdCatalogCategoryType',
  description: 'Type for ProdCatalogCategory in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    prodCatalogCategoryType: {
      type: ProdCatalogCategoryTypeType,
      args : {prodCatalogCategoryTypeId: {type: GraphQLString}},
      resolve: (prodCatalogCategory, args, {loaders}) => loaders.ofbiz.load(`prodCatalogCategoryTypes/find?prodCatalogCategoryTypeId=${prodCatalogCategory.prodCatalogCategoryTypeId}`)
    },
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (prodCatalogCategory, args, {loaders}) => loaders.ofbiz.load(`productCategorys/find?productCategoryId=${prodCatalogCategory.productCategoryId}`)
    },
    sequenceNum: {type: GraphQLInt},
    prodCatalog: {
      type: ProdCatalogType,
      args : {prodCatalogId: {type: GraphQLString}},
      resolve: (prodCatalogCategory, args, {loaders}) => loaders.ofbiz.load(`prodCatalogs/find?prodCatalogId=${prodCatalogCategory.prodCatalogId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProdCatalogCategoryType};
    