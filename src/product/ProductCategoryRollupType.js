
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductCategory} from '../product/ProductCategory.js';
import {ProductCategory} from '../product/ProductCategory.js';


const ProductCategoryRollup = new GraphQLObjectType({
  name: 'ProductCategoryRollupType',
  description: 'Type for ProductCategoryRollup in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategoryRollup, args, {loaders}) => loaders.ofbizArray.load(`productCategorys/find?=${args.productCategoryId}`)
    },
    sequenceNum: {type: GraphQLInt},
    parentProductCategory: {
      type: ProductCategoryType,
      args : {parentProductCategoryId: {type: GraphQLString}},
      resolve: (productCategoryRollup, args, {loaders}) => loaders.ofbizArray.load(`productCategorys/find?productCategoryId=${args.parentProductCategoryId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductCategoryRollup};
    