
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

import {ProductPromoType} from '../../product/ProductPromo/ProductPromoType.js';
import {OrderProductPromoCodeType} from '../../order/OrderProductPromoCode/OrderProductPromoCodeType.js';
import {ProductPromoCodeEmailType} from '../../product/ProductPromoCodeEmail/ProductPromoCodeEmailType.js';
import {ShoppingListType} from '../../order/ShoppingList/ShoppingListType.js';
import {ProductPromoCodePartyType} from '../../product/ProductPromoCodeParty/ProductPromoCodePartyType.js';
import {ProductPromoUseType} from '../../product/ProductPromoUse/ProductPromoUseType.js';
import {UserLoginType} from '../../login/UserLogin/UserLoginType.js';


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
      resolve: (productPromoCode, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${productPromoCode.lastModifiedByUserLogin}`)
    },
    createdDate: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    productPromoCodeId: {type: GraphQLString},
    requireEmailOrParty: {type: GraphQLBoolean},
    productPromo: {
      type: ProductPromoType,
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromoCode, args, {loaders}) => loaders.ofbiz.load(`product/product/productPromos/find?productPromoId=${productPromoCode.productPromoId}`)
    },
    useLimitPerCustomer: {type: GraphQLInt},
    createdByUserLogin: {
      type: UserLoginType,
      args : {createdByUserLogin: {type: GraphQLString}},
      resolve: (productPromoCode, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${productPromoCode.createdByUserLogin}`)
    },
    thruDate: {type: GraphQLString},
    productPromoCodeParties: {
      type: new GraphQLList(ProductPromoCodePartyType),
      args : {},
      resolve: (productPromoCode, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPromoCodePartys/find?productPromoCodeId=${productPromoCode.productPromoCodeId}`)
    },
    orderProductPromoCodes: {
      type: new GraphQLList(OrderProductPromoCodeType),
      args : {},
      resolve: (productPromoCode, args, {loaders}) => loaders.ofbizArray.load(`order/orderProductPromoCodes/find?productPromoCodeId=${productPromoCode.productPromoCodeId}`)
    },
    productPromoUses: {
      type: new GraphQLList(ProductPromoUseType),
      args : {},
      resolve: (productPromoCode, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPromoUses/find?productPromoCodeId=${productPromoCode.productPromoCodeId}`)
    },
    shoppingLists: {
      type: new GraphQLList(ShoppingListType),
      args : {},
      resolve: (productPromoCode, args, {loaders}) => loaders.ofbizArray.load(`order/shoppingLists/find?productPromoCodeId=${productPromoCode.productPromoCodeId}`)
    },
    productPromoCodeEmails: {
      type: new GraphQLList(ProductPromoCodeEmailType),
      args : {},
      resolve: (productPromoCode, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPromoCodeEmails/find?productPromoCodeId=${productPromoCode.productPromoCodeId}`)
    }
  })
});

export {ProductPromoCodeType};
    