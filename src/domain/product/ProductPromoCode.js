
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

import {ProductPromoType} from '../product/ProductPromo.js';
import {OrderProductPromoCodeType} from '../order/OrderProductPromoCode.js';
import {ProductPromoCodeEmailType} from '../product/ProductPromoCodeEmail.js';
import {ShoppingListType} from '../order/ShoppingList.js';
import {ProductPromoCodePartyType} from '../product/ProductPromoCodeParty.js';
import {ProductPromoUseType} from '../product/ProductPromoUse.js';
import {UserLoginType} from '../login/UserLogin.js';


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
    productPromoCodeParties: {
      type: new GraphQLList(ProductPromoCodePartyType),
      args : {productPromoCodeId: {type: GraphQLString}},
      resolve: (productPromoCode, args, {loaders}) => loaders.ofbizArray.load(`productPromoCodePartys/find?productPromoCodeId=${productPromoCode.productPromoCodeId}`)
    },
    orderProductPromoCodes: {
      type: new GraphQLList(OrderProductPromoCodeType),
      args : {productPromoCodeId: {type: GraphQLString}},
      resolve: (productPromoCode, args, {loaders}) => loaders.ofbizArray.load(`orderProductPromoCodes/find?productPromoCodeId=${productPromoCode.productPromoCodeId}`)
    },
    productPromoUses: {
      type: new GraphQLList(ProductPromoUseType),
      args : {productPromoCodeId: {type: GraphQLString}},
      resolve: (productPromoCode, args, {loaders}) => loaders.ofbizArray.load(`productPromoUses/find?productPromoCodeId=${productPromoCode.productPromoCodeId}`)
    },
    shoppingLists: {
      type: new GraphQLList(ShoppingListType),
      args : {productPromoCodeId: {type: GraphQLString}},
      resolve: (productPromoCode, args, {loaders}) => loaders.ofbizArray.load(`shoppingLists/find?productPromoCodeId=${productPromoCode.productPromoCodeId}`)
    },
    productPromoCodeEmails: {
      type: new GraphQLList(ProductPromoCodeEmailType),
      args : {productPromoCodeId: {type: GraphQLString}},
      resolve: (productPromoCode, args, {loaders}) => loaders.ofbizArray.load(`productPromoCodeEmails/find?productPromoCodeId=${productPromoCode.productPromoCodeId}`)
    }
  })
});

export {ProductPromoCodeType};
    




const ProductPromoCodeInputType = new GraphQLInputObjectType({
  name: 'ProductPromoCodeInputType',
  description: 'input type for ProductPromoCode in product',

  fields: () => ({
    useLimitPerCode: {type: GraphQLInt},
    fromDate: {type: GraphQLString},
    userEntered: {type: GraphQLBoolean},
    lastModifiedByUserLogin: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    productPromoCodeId: {type: GraphQLString},
    requireEmailOrParty: {type: GraphQLBoolean},
    productPromoId: {type: GraphQLString},
    useLimitPerCustomer: {type: GraphQLInt},
    createdByUserLogin: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductPromoCodeInputType};
    