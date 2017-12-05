
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {Product} from '../product/Product.js';


const ProductCalculatedInfo = new GraphQLObjectType({
  name: 'ProductCalculatedInfoType',
  description: 'Type for ProductCalculatedInfo in product',

  fields: () => ({
    averageCustomerRating: {type: GraphQLFloat},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productCalculatedInfo, args, {loaders}) => loaders.ofbizArray.load(`products/find?=${args.productId}`)
    },
    totalTimesViewed: {type: GraphQLInt},
    totalQuantityOrdered: {type: GraphQLFloat}
  })
});

export {ProductCalculatedInfo};
    