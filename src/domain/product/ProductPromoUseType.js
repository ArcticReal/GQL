
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
import {OrderHeaderType} from '../order/OrderHeaderType.js';
import {PartyType} from '../party/PartyType.js';
import {ProductPromoCodeType} from '../product/ProductPromoCodeType.js';


const ProductPromoUseType = new GraphQLObjectType({
  name: 'ProductPromoUseType',
  description: 'Type for ProductPromoUse in product',

  fields: () => ({
    quantityLeftInActions: {type: GraphQLFloat},
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (productPromoUse, args, {loaders}) => loaders.ofbiz.load(`orderHeaders/find?orderId=${productPromoUse.orderId}`)
    },
    totalDiscountAmount: {type: GraphQLFloat},
    productPromoCode: {
      type: ProductPromoCodeType,
      args : {productPromoCodeId: {type: GraphQLString}},
      resolve: (productPromoUse, args, {loaders}) => loaders.ofbiz.load(`productPromoCodes/find?productPromoCodeId=${productPromoUse.productPromoCodeId}`)
    },
    promoSequenceId: {type: GraphQLString},
    productPromo: {
      type: ProductPromoType,
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromoUse, args, {loaders}) => loaders.ofbiz.load(`productPromos/find?productPromoId=${productPromoUse.productPromoId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (productPromoUse, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${productPromoUse.partyId}`)
    }
  })
});

export {ProductPromoUseType};
    