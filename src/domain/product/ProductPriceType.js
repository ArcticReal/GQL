
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyType} from '../party/PartyType.js';
import {ProductStoreGroupType} from '../product/ProductStoreGroupType.js';
import {ProductType} from '../product/ProductType.js';
import {ProductPricePurposeType} from '../product/ProductPricePurposeType.js';
import {UserLoginType} from '../login/UserLoginType.js';
import {ProductPriceTypeType} from '../product/ProductPriceTypeType.js';


const ProductPriceType = new GraphQLObjectType({
  name: 'ProductPriceType',
  description: 'Type for ProductPrice in product',

  fields: () => ({
    taxInPrice: {type: GraphQLBoolean},
    termUomId: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productPrice, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${productPrice.productId}`)
    },
    lastModifiedDate: {type: GraphQLString},
    priceWithTax: {type: GraphQLFloat},
    taxPercentage: {type: GraphQLFloat},
    productStoreGroup: {
      type: ProductStoreGroupType,
      args : {productStoreGroupId: {type: GraphQLString}},
      resolve: (productPrice, args, {loaders}) => loaders.ofbiz.load(`productStoreGroups/find?productStoreGroupId=${productPrice.productStoreGroupId}`)
    },
    thruDate: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    taxAuthParty: {
      type: PartyType,
      args : {taxAuthPartyId: {type: GraphQLString}},
      resolve: (productPrice, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${productPrice.taxAuthPartyId}`)
    },
    lastModifiedByUserLogin: {
      type: UserLoginType,
      args : {lastModifiedByUserLogin: {type: GraphQLString}},
      resolve: (productPrice, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${productPrice.lastModifiedByUserLogin}`)
    },
    currencyUomId: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    customPriceCalcService: {type: GraphQLString},
    price: {type: GraphQLFloat},
    priceWithoutTax: {type: GraphQLFloat},
    taxAuthGeoId: {type: GraphQLString},
    productPricePurpose: {
      type: ProductPricePurposeType,
      args : {productPricePurposeId: {type: GraphQLString}},
      resolve: (productPrice, args, {loaders}) => loaders.ofbiz.load(`productPricePurposes/find?productPricePurposeId=${productPrice.productPricePurposeId}`)
    },
    taxAmount: {type: GraphQLFloat},
    createdByUserLogin: {
      type: UserLoginType,
      args : {createdByUserLogin: {type: GraphQLString}},
      resolve: (productPrice, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${productPrice.createdByUserLogin}`)
    },
    productPriceType: {
      type: ProductPriceTypeType,
      args : {productPriceTypeId: {type: GraphQLString}},
      resolve: (productPrice, args, {loaders}) => loaders.ofbiz.load(`productPriceTypes/find?productPriceTypeId=${productPrice.productPriceTypeId}`)
    }
  })
});

export {ProductPriceType};
    