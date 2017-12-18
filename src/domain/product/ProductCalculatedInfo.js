
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

import {ProductType} from '../product/Product.js';


const ProductCalculatedInfoType = new GraphQLObjectType({
  name: 'ProductCalculatedInfoType',
  description: 'Type for ProductCalculatedInfo in product',

  fields: () => ({
    averageCustomerRating: {type: GraphQLFloat},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productCalculatedInfo, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${productCalculatedInfo.productId}`)
    },
    totalTimesViewed: {type: GraphQLInt},
    totalQuantityOrdered: {type: GraphQLFloat}
  })
});

export {ProductCalculatedInfoType};
    




const ProductCalculatedInfoInputType = new GraphQLInputObjectType({
  name: 'ProductCalculatedInfoInputType',
  description: 'input type for ProductCalculatedInfo',

  fields: () => ({
    averageCustomerRating: {type: GraphQLFloat},
    productId: {type: GraphQLString},
    totalQuantityOrdered: {type: GraphQLFloat},
    totalTimesViewed: {type: GraphQLInt}
  })
});

export {ProductCalculatedInfoInputType};
    