
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductType} from '../product/ProductType.js';
import {ProductStoreType} from '../product/ProductStoreType.js';
import {UserLoginType} from '../login/UserLoginType.js';


const ProductReviewType = new GraphQLObjectType({
  name: 'ProductReviewType',
  description: 'Type for ProductReview in product',

  fields: () => ({
    userLogin: {
      type: UserLoginType,
      args : {userLoginId: {type: GraphQLString}},
      resolve: (productReview, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${productReview.userLoginId}`)
    },
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productReview, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${productReview.productId}`)
    },
    statusId: {type: GraphQLString},
    postedDateTime: {type: GraphQLString},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productReview, args, {loaders}) => loaders.ofbiz.load(`productStores/find?productStoreId=${productReview.productStoreId}`)
    },
    postedAnonymous: {type: GraphQLBoolean},
    productReviewId: {type: GraphQLString},
    productRating: {type: GraphQLFloat},
    productReview: {type: GraphQLString}
  })
});

export {ProductReviewType};
    