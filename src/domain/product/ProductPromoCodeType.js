
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductPromoType} from '../product/ProductPromoType.js';
import {OrderProductPromoCodeType} from '../order/OrderProductPromoCodeType.js';
import {ProductPromoCodeEmailType} from '../product/ProductPromoCodeEmailType.js';
import {ShoppingListType} from '../order/ShoppingListType.js';
import {ProductPromoCodePartyType} from '../product/ProductPromoCodePartyType.js';
import {ProductPromoUseType} from '../product/ProductPromoUseType.js';
import {UserLoginType} from '../login/UserLoginType.js';


const ProductPromoCodeType = new GraphQLObjectType({
  name: 'ProductPromoCodeType',
  description: 'Type for ProductPromoCode in product',

  fields: () => ({
    useLimitPerCode: {type: GraphQLInt},
    fromDate: {type: GraphQLString},
    userEntered: {type: GraphQLBoolean},
    lastModifiedByUserLogin: {
      type: UserLoginType,
      args : {lastModifiedByUserLogin: {type: GraphQLString}},
      resolve: (productPromoCode, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${productPromoCode.lastModifiedByUserLogin}`)
    },
    createdDate: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    productPromoCodeId: {type: GraphQLString},
    requireEmailOrParty: {type: GraphQLBoolean},
    productPromo: {
      type: ProductPromoType,
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromoCode, args, {loaders}) => loaders.ofbiz.load(`productPromos/find?productPromoId=${productPromoCode.productPromoId}`)
    },
    useLimitPerCustomer: {type: GraphQLInt},
    createdByUserLogin: {
      type: UserLoginType,
      args : {createdByUserLogin: {type: GraphQLString}},
      resolve: (productPromoCode, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${productPromoCode.createdByUserLogin}`)
    },
    thruDate: {type: GraphQLString},
    productPromoCodeParty: {
      type: new GraphQLList(ProductPromoCodePartyType),
      args : {productPromoCodeId: {type: GraphQLString}},
      resolve: (productPromoCode, args, {loaders}) => loaders.ofbizArray.load(`productPromoCodePartys/find?productPromoCodeId=${productPromoCode.productPromoCodeId}`)
    },
    orderProductPromoCode: {
      type: new GraphQLList(OrderProductPromoCodeType),
      args : {productPromoCodeId: {type: GraphQLString}},
      resolve: (productPromoCode, args, {loaders}) => loaders.ofbizArray.load(`orderProductPromoCodes/find?productPromoCodeId=${productPromoCode.productPromoCodeId}`)
    },
    productPromoUse: {
      type: new GraphQLList(ProductPromoUseType),
      args : {productPromoCodeId: {type: GraphQLString}},
      resolve: (productPromoCode, args, {loaders}) => loaders.ofbizArray.load(`productPromoUses/find?productPromoCodeId=${productPromoCode.productPromoCodeId}`)
    },
    shoppingList: {
      type: new GraphQLList(ShoppingListType),
      args : {productPromoCodeId: {type: GraphQLString}},
      resolve: (productPromoCode, args, {loaders}) => loaders.ofbizArray.load(`shoppingLists/find?productPromoCodeId=${productPromoCode.productPromoCodeId}`)
    },
    productPromoCodeEmail: {
      type: new GraphQLList(ProductPromoCodeEmailType),
      args : {productPromoCodeId: {type: GraphQLString}},
      resolve: (productPromoCode, args, {loaders}) => loaders.ofbizArray.load(`productPromoCodeEmails/find?productPromoCodeId=${productPromoCode.productPromoCodeId}`)
    }
  })
});

export {ProductPromoCodeType};
    