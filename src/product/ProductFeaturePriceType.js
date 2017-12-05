
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
import {UserLogin} from '../product/UserLogin.js';
import {ProductPriceType} from '../product/ProductPriceType.js';


const ProductFeaturePrice = new GraphQLObjectType({
  name: 'ProductFeaturePriceType',
  description: 'Type for ProductFeaturePrice in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    lastModifiedByUserLogin: {
      type: UserLoginType,
      args : {lastModifiedByUserLogin: {type: GraphQLString}},
      resolve: (productFeaturePrice, args, {loaders}) => loaders.ofbizArray.load(`userLogins/find?userLoginId=${args.lastModifiedByUserLogin}`)
    },
    currencyUomId: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    price: {type: GraphQLFloat},
    productFeatureId: {type: GraphQLString},
    createdByUserLogin: {
      type: UserLoginType,
      args : {createdByUserLogin: {type: GraphQLString}},
      resolve: (productFeaturePrice, args, {loaders}) => loaders.ofbizArray.load(`userLogins/find?userLoginId=${args.createdByUserLogin}`)
    },
    productPriceType: {
      type: ProductPriceTypeType,
      args : {productPriceTypeId: {type: GraphQLString}},
      resolve: (productFeaturePrice, args, {loaders}) => loaders.ofbizArray.load(`productPriceTypes/find?=${args.productPriceTypeId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductFeaturePrice};
    