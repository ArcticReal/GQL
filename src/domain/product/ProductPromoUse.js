
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
import {OrderHeaderType} from '../order/OrderHeader.js';
import {PartyType} from '../party/Party.js';
import {ProductPromoCodeType} from '../product/ProductPromoCode.js';


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
    




const ProductPromoUseInputType = new GraphQLInputObjectType({
  name: 'ProductPromoUseInputType',
  description: 'input type for ProductPromoUse in product',

  fields: () => ({
    quantityLeftInActions: {type: GraphQLFloat},
    orderId: {type: GraphQLString},
    totalDiscountAmount: {type: GraphQLFloat},
    productPromoCodeId: {type: GraphQLString},
    promoSequenceId: {type: GraphQLString},
    productPromoId: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {ProductPromoUseInputType};
    