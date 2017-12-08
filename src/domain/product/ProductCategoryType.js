
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

import {ProductCategoryTypeAttrType} from '../product/ProductCategoryTypeAttr.js';
import {ProductCategoryType} from '../product/ProductCategory.js';


const ProductCategoryTypeType = new GraphQLObjectType({
  name: 'ProductCategoryTypeType',
  description: 'Type for ProductCategoryType in product',

  fields: () => ({
    productCategoryTypeId: {type: GraphQLString},
    parentType: {
      type: ProductCategoryTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (productCategoryType, args, {loaders}) => loaders.ofbiz.load(`productCategoryTypes/find?productCategoryTypeId=${productCategoryType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    productCategories: {
      type: new GraphQLList(ProductCategoryType),
      args : {productCategoryTypeId: {type: GraphQLString}},
      resolve: (productCategoryType, args, {loaders}) => loaders.ofbizArray.load(`productCategorys/find?productCategoryTypeId=${productCategoryType.productCategoryTypeId}`)
    },
    productCategoryTypes: {
      type: new GraphQLList(ProductCategoryTypeType),
      args : {productCategoryTypeId: {type: GraphQLString}},
      resolve: (productCategoryType, args, {loaders}) => loaders.ofbizArray.load(`productCategoryTypes/find?productCategoryTypeId=${productCategoryType.productCategoryTypeId}`)
    },
    productCategoryTypeAttrs: {
      type: new GraphQLList(ProductCategoryTypeAttrType),
      args : {productCategoryTypeId: {type: GraphQLString}},
      resolve: (productCategoryType, args, {loaders}) => loaders.ofbizArray.load(`productCategoryTypeAttrs/find?productCategoryTypeId=${productCategoryType.productCategoryTypeId}`)
    }
  })
});

export {ProductCategoryTypeType};
    




const ProductCategoryTypeInputType = new GraphQLInputObjectType({
  name: 'ProductCategoryTypeInputType',
  description: 'input type for ProductCategoryType in product',

  fields: () => ({
    productCategoryTypeId: {type: GraphQLString},
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString}
  })
});

export {ProductCategoryTypeInputType};
    