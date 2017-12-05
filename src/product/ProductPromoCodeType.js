
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
import {ProductPromo} from '../product/ProductPromo.js';
import {UserLogin} from '../product/UserLogin.js';


const ProductPromoCode = new GraphQLObjectType({
  name: 'ProductPromoCodeType',
  description: 'Type for ProductPromoCode in product',

  fields: () => ({
    useLimitPerCode: {type: GraphQLInt},
    fromDate: {type: GraphQLString},
    userEntered: {type: GraphQLBoolean},
    lastModifiedByUserLogin: {
      type: UserLoginType,
      args : {lastModifiedByUserLogin: {type: GraphQLString}},
      resolve: (productPromoCode, args, {loaders}) => loaders.ofbizArray.load(`userLogins/find?userLoginId=${args.lastModifiedByUserLogin}`)
    },
    createdDate: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    productPromoCodeId: {type: GraphQLString},
    requireEmailOrParty: {type: GraphQLBoolean},
    productPromo: {
      type: ProductPromoType,
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromoCode, args, {loaders}) => loaders.ofbizArray.load(`productPromos/find?=${args.productPromoId}`)
    },
    useLimitPerCustomer: {type: GraphQLInt},
    createdByUserLogin: {
      type: UserLoginType,
      args : {createdByUserLogin: {type: GraphQLString}},
      resolve: (productPromoCode, args, {loaders}) => loaders.ofbizArray.load(`userLogins/find?userLoginId=${args.createdByUserLogin}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductPromoCode};
    