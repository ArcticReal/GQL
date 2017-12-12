
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

import {UserLoginType} from '../login/UserLogin.js';
import {ProductPriceTypeType} from '../product/ProductPriceType.js';


const ProductFeaturePriceType = new GraphQLObjectType({
  name: 'ProductFeaturePriceType',
  description: 'Type for ProductFeaturePrice in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    lastModifiedByUserLogin: {
      type: UserLoginType,
      args : {lastModifiedByUserLogin: {type: GraphQLString}},
      resolve: (productFeaturePrice, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${productFeaturePrice.lastModifiedByUserLogin}`)
    },
    currencyUomId: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    price: {type: GraphQLFloat},
    productFeatureId: {type: GraphQLString},
    createdByUserLogin: {
      type: UserLoginType,
      args : {createdByUserLogin: {type: GraphQLString}},
      resolve: (productFeaturePrice, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${productFeaturePrice.createdByUserLogin}`)
    },
    productPriceType: {
      type: ProductPriceTypeType,
      args : {productPriceTypeId: {type: GraphQLString}},
      resolve: (productFeaturePrice, args, {loaders}) => loaders.ofbiz.load(`product/product/productPriceTypes/find?productPriceTypeId=${productFeaturePrice.productPriceTypeId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductFeaturePriceType};
    




const ProductFeaturePriceInputType = new GraphQLInputObjectType({
  name: 'ProductFeaturePriceInputType',
  description: 'input type for ProductFeaturePrice in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    price: {type: GraphQLFloat},
    productFeatureId: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString},
    productPriceTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductFeaturePriceInputType};
    