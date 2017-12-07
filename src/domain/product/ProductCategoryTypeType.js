
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductCategoryTypeAttrType} from '../product/ProductCategoryTypeAttrType.js';
import {ProductCategoryType} from '../product/ProductCategoryType.js';


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
    productCategory: {
      type: new GraphQLList(ProductCategoryType),
      args : {productCategoryTypeId: {type: GraphQLString}},
      resolve: (productCategoryType, args, {loaders}) => loaders.ofbizArray.load(`productCategorys/find?productCategoryTypeId=${productCategoryType.productCategoryTypeId}`)
    },
    productCategoryType: {
      type: new GraphQLList(ProductCategoryTypeType),
      args : {productCategoryTypeId: {type: GraphQLString}},
      resolve: (productCategoryType, args, {loaders}) => loaders.ofbizArray.load(`productCategoryTypes/find?productCategoryTypeId=${productCategoryType.productCategoryTypeId}`)
    },
    productCategoryTypeAttr: {
      type: new GraphQLList(ProductCategoryTypeAttrType),
      args : {productCategoryTypeId: {type: GraphQLString}},
      resolve: (productCategoryType, args, {loaders}) => loaders.ofbizArray.load(`productCategoryTypeAttrs/find?productCategoryTypeId=${productCategoryType.productCategoryTypeId}`)
    }
  })
});

export {ProductCategoryTypeType};
    