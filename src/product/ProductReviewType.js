
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {UserLogin} from '../product/UserLogin.js';
import {Product} from '../product/Product.js';
import {StatusItem} from '../product/StatusItem.js';
import {ProductStore} from '../product/ProductStore.js';


const ProductReview = new GraphQLObjectType({
  name: 'ProductReviewType',
  description: 'Type for ProductReview in product',

  fields: () => ({
    userLogin: {
      type: UserLoginType,
      args : {userLoginId: {type: GraphQLString}},
      resolve: (productReview, args, {loaders}) => loaders.ofbizArray.load(`userLogins/find?userLoginId=${args.userLoginId}`)
    },
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productReview, args, {loaders}) => loaders.ofbizArray.load(`products/find?=${args.productId}`)
    },
    status: {
      type: StatusItemType,
      args : {statusId: {type: GraphQLString}},
      resolve: (productReview, args, {loaders}) => loaders.ofbizArray.load(`statusItems/find?=${args.statusId}`)
    },
    postedDateTime: {type: GraphQLString},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productReview, args, {loaders}) => loaders.ofbizArray.load(`productStores/find?=${args.productStoreId}`)
    },
    postedAnonymous: {type: GraphQLBoolean},
    productReviewId: {type: GraphQLString},
    productRating: {type: GraphQLFloat},
    productReview: {type: GraphQLString}
  })
});

export {ProductReview};
    