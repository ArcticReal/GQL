
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


const ProdCatalogCategoryTypeType = new GraphQLObjectType({
  name: 'ProdCatalogCategoryTypeType',
  description: 'Type for ProdCatalogCategoryType in product',

  fields: () => ({
    prodCatalogCategoryTypeId: {type: GraphQLString},
    parentType: {
      type: ProdCatalogCategoryTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (prodCatalogCategoryType, args, {loaders}) => loaders.ofbiz.load(`prodCatalogCategoryTypes/find?prodCatalogCategoryTypeId=${prodCatalogCategoryType.parentTypeId}`)
    },
    description: {type: GraphQLString},
    prodCatalogCategory: {
      type: new GraphQLList(ProdCatalogCategoryType),
      args : {prodCatalogCategoryTypeId: {type: GraphQLString}},
      resolve: (prodCatalogCategoryType, args, {loaders}) => loaders.ofbizArray.load(`prodCatalogCategorys/find?prodCatalogCategoryTypeId=${prodCatalogCategoryType.prodCatalogCategoryTypeId}`)
    },
    prodCatalogCategoryType: {
      type: new GraphQLList(ProdCatalogCategoryTypeType),
      args : {prodCatalogCategoryTypeId: {type: GraphQLString}},
      resolve: (prodCatalogCategoryType, args, {loaders}) => loaders.ofbizArray.load(`prodCatalogCategoryTypes/find?prodCatalogCategoryTypeId=${prodCatalogCategoryType.prodCatalogCategoryTypeId}`)
    }
  })
});

export {ProdCatalogCategoryTypeType};
    