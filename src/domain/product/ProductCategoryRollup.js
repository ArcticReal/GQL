
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

import {ProductCategoryType} from '../product/ProductCategory.js';


const ProductCategoryRollupType = new GraphQLObjectType({
  name: 'ProductCategoryRollupType',
  description: 'Type for ProductCategoryRollup in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategoryRollup, args, {loaders}) => loaders.ofbiz.load(`productCategorys/find?productCategoryId=${productCategoryRollup.productCategoryId}`)
    },
    sequenceNum: {type: GraphQLInt},
    parentProductCategory: {
      type: ProductCategoryType,
      args : {parentProductCategoryId: {type: GraphQLString}},
      resolve: (productCategoryRollup, args, {loaders}) => loaders.ofbiz.load(`productCategorys/find?productCategoryId=${productCategoryRollup.parentProductCategoryId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductCategoryRollupType};
    




const ProductCategoryRollupInputType = new GraphQLInputObjectType({
  name: 'ProductCategoryRollupInputType',
  description: 'input type for ProductCategoryRollup in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    productCategoryId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    parentProductCategoryId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductCategoryRollupInputType};
    