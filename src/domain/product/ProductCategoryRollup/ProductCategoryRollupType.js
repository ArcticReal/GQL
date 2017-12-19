
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

import {ProductCategoryType} from '../../product/ProductCategory/ProductCategoryType.js';


const ProductCategoryRollupType = new GraphQLObjectType({
  name: 'ProductCategoryRollupType',
  description: 'Type for ProductCategoryRollup in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategoryRollup, args, {loaders}) => loaders.ofbiz.load(`product/product/productCategorys/find?productCategoryId=${productCategoryRollup.productCategoryId}`)
    },
    sequenceNum: {type: GraphQLInt},
    parentProductCategory: {
      type: ProductCategoryType,
      args : {parentProductCategoryId: {type: GraphQLString}},
      resolve: (productCategoryRollup, args, {loaders}) => loaders.ofbiz.load(`product/product/productCategorys/find?productCategoryId=${productCategoryRollup.parentProductCategoryId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductCategoryRollupType};
    