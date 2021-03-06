
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

import {ProdCatalogCategoryType} from '../../product/ProdCatalogCategory/ProdCatalogCategoryType.js';


const ProdCatalogCategoryTypeType = new GraphQLObjectType({
  name: 'ProdCatalogCategoryTypeType',
  description: 'Type for ProdCatalogCategoryType in product',

  fields: () => ({
    prodCatalogCategoryTypeId: {type: GraphQLString},
    parentType: {
      type: ProdCatalogCategoryTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (prodCatalogCategoryType, args, {loaders}) => loaders.ofbiz.load(`product/prodCatalog/prodCatalogCategoryTypes/find?prodCatalogCategoryTypeId=${prodCatalogCategoryType.parentTypeId}`)
    },
    description: {type: GraphQLString},
    prodCatalogCategories: {
      type: new GraphQLList(ProdCatalogCategoryType),
      args : {},
      resolve: (prodCatalogCategoryType, args, {loaders}) => loaders.ofbizArray.load(`product/prodCatalog/prodCatalogCategorys/find?prodCatalogCategoryTypeId=${prodCatalogCategoryType.prodCatalogCategoryTypeId}`)
    },
    prodCatalogCategoryTypes: {
      type: new GraphQLList(ProdCatalogCategoryTypeType),
      args : {},
      resolve: (prodCatalogCategoryType, args, {loaders}) => loaders.ofbizArray.load(`product/prodCatalog/prodCatalogCategoryTypes/find?prodCatalogCategoryTypeId=${prodCatalogCategoryType.prodCatalogCategoryTypeId}`)
    }
  })
});

export {ProdCatalogCategoryTypeType};
    