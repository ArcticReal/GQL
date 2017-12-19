
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

import {ProductType} from '../../product/Product/ProductType.js';
import {ProductStoreType} from '../../product/ProductStore/ProductStoreType.js';
import {UserLoginType} from '../../login/UserLogin/UserLoginType.js';


const ProductReviewType = new GraphQLObjectType({
  name: 'ProductReviewType',
  description: 'Type for ProductReview in product',

  fields: () => ({
    userLogin: {
      type: UserLoginType,
      args : {userLoginId: {type: GraphQLString}},
      resolve: (productReview, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${productReview.userLoginId}`)
    },
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productReview, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${productReview.productId}`)
    },
    statusId: {type: GraphQLString},
    postedDateTime: {type: GraphQLString},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productReview, args, {loaders}) => loaders.ofbiz.load(`product/product/productStores/find?productStoreId=${productReview.productStoreId}`)
    },
    postedAnonymous: {type: GraphQLBoolean},
    productReviewId: {type: GraphQLString},
    productRating: {type: GraphQLFloat},
    productReview: {type: GraphQLString}
  })
});

export {ProductReviewType};
    