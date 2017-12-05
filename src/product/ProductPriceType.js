
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
import {ProductStoreGroup} from '../product/ProductStoreGroup.js';
import {Party} from '../product/Party.js';
import {UserLogin} from '../product/UserLogin.js';
import {CustomMethod} from '../product/CustomMethod.js';
import {Geo} from '../product/Geo.js';
import {ProductPricePurpose} from '../product/ProductPricePurpose.js';
import {UserLogin} from '../product/UserLogin.js';
import {ProductPriceType} from '../product/ProductPriceType.js';


const ProductPrice = new GraphQLObjectType({
  name: 'ProductPriceType',
  description: 'Type for ProductPrice in product',

  fields: () => ({
    taxInPrice: {type: GraphQLBoolean},
    termUomId: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productPrice, args, {loaders}) => loaders.ofbizArray.load(`products/find?=${args.productId}`)
    },
    lastModifiedDate: {type: GraphQLString},
    priceWithTax: {type: GraphQLFloat},
    taxPercentage: {type: GraphQLFloat},
    productStoreGroup: {
      type: ProductStoreGroupType,
      args : {productStoreGroupId: {type: GraphQLString}},
      resolve: (productPrice, args, {loaders}) => loaders.ofbizArray.load(`productStoreGroups/find?=${args.productStoreGroupId}`)
    },
    thruDate: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    taxAuthParty: {
      type: PartyType,
      args : {taxAuthPartyId: {type: GraphQLString}},
      resolve: (productPrice, args, {loaders}) => loaders.ofbizArray.load(`partys/find?partyId=${args.taxAuthPartyId}`)
    },
    lastModifiedByUserLogin: {
      type: UserLoginType,
      args : {lastModifiedByUserLogin: {type: GraphQLString}},
      resolve: (productPrice, args, {loaders}) => loaders.ofbizArray.load(`userLogins/find?userLoginId=${args.lastModifiedByUserLogin}`)
    },
    currencyUomId: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    customPriceCalcService: {
      type: CustomMethodType,
      args : {customPriceCalcService: {type: GraphQLString}},
      resolve: (productPrice, args, {loaders}) => loaders.ofbizArray.load(`customMethods/find?customMethodId=${args.customPriceCalcService}`)
    },
    price: {type: GraphQLFloat},
    priceWithoutTax: {type: GraphQLFloat},
    taxAuthGeo: {
      type: GeoType,
      args : {taxAuthGeoId: {type: GraphQLString}},
      resolve: (productPrice, args, {loaders}) => loaders.ofbizArray.load(`geos/find?geoId=${args.taxAuthGeoId}`)
    },
    productPricePurpose: {
      type: ProductPricePurposeType,
      args : {productPricePurposeId: {type: GraphQLString}},
      resolve: (productPrice, args, {loaders}) => loaders.ofbizArray.load(`productPricePurposes/find?=${args.productPricePurposeId}`)
    },
    taxAmount: {type: GraphQLFloat},
    createdByUserLogin: {
      type: UserLoginType,
      args : {createdByUserLogin: {type: GraphQLString}},
      resolve: (productPrice, args, {loaders}) => loaders.ofbizArray.load(`userLogins/find?userLoginId=${args.createdByUserLogin}`)
    },
    productPriceType: {
      type: ProductPriceTypeType,
      args : {productPriceTypeId: {type: GraphQLString}},
      resolve: (productPrice, args, {loaders}) => loaders.ofbizArray.load(`productPriceTypes/find?=${args.productPriceTypeId}`)
    }
  })
});

export {ProductPrice};
    