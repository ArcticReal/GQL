
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProdCatalogCategoryTypeType} from '../product/ProdCatalogCategoryType.js';
import {ProdCatalogType} from '../product/ProdCatalog.js';
import {ProductCategoryType} from '../product/ProductCategory.js';


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
    




const ProdCatalogCategoryInputType = new GraphQLInputObjectType({
  name: 'ProdCatalogCategoryInputType',
  description: 'input type for ProdCatalogCategory in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    prodCatalogCategoryTypeId: {type: GraphQLString},
    productCategoryId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    prodCatalogId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProdCatalogCategoryInputType};
    