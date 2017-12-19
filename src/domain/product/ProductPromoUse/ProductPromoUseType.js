
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
import {OrderHeaderType} from '../../order/OrderHeader/OrderHeaderType.js';
import {PartyType} from '../../party/Party/PartyType.js';
import {ProductPromoCodeType} from '../../product/ProductPromoCode/ProductPromoCodeType.js';


const ProductPromoUseType = new GraphQLObjectType({
  name: 'ProductPromoUseType',
  description: 'Type for ProductPromoUse in product',

  fields: () => ({
    quantityLeftInActions: {type: GraphQLFloat},
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (productPromoUse, args, {loaders}) => loaders.ofbiz.load(`order/orderHeaders/find?orderId=${productPromoUse.orderId}`)
    },
    totalDiscountAmount: {type: GraphQLFloat},
    productPromoCode: {
      type: ProductPromoCodeType,
      args : {productPromoCodeId: {type: GraphQLString}},
      resolve: (productPromoUse, args, {loaders}) => loaders.ofbiz.load(`product/product/productPromoCodes/find?productPromoCodeId=${productPromoUse.productPromoCodeId}`)
    },
    promoSequenceId: {type: GraphQLString},
    productPromo: {
      type: ProductPromoType,
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromoUse, args, {loaders}) => loaders.ofbiz.load(`product/product/productPromos/find?productPromoId=${productPromoUse.productPromoId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (productPromoUse, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${productPromoUse.partyId}`)
    }
  })
});

export {ProductPromoUseType};
    