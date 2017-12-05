
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {OrderHeader} from '../product/OrderHeader.js';
import {ProductPromoCode} from '../product/ProductPromoCode.js';
import {ProductPromo} from '../product/ProductPromo.js';
import {Party} from '../product/Party.js';


const ProductPromoUse = new GraphQLObjectType({
  name: 'ProductPromoUseType',
  description: 'Type for ProductPromoUse in product',

  fields: () => ({
    quantityLeftInActions: {type: GraphQLFloat},
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (productPromoUse, args, {loaders}) => loaders.ofbizArray.load(`orderHeaders/find?=${args.orderId}`)
    },
    totalDiscountAmount: {type: GraphQLFloat},
    productPromoCode: {
      type: ProductPromoCodeType,
      args : {productPromoCodeId: {type: GraphQLString}},
      resolve: (productPromoUse, args, {loaders}) => loaders.ofbizArray.load(`productPromoCodes/find?=${args.productPromoCodeId}`)
    },
    promoSequenceId: {type: GraphQLString},
    productPromo: {
      type: ProductPromoType,
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromoUse, args, {loaders}) => loaders.ofbizArray.load(`productPromos/find?=${args.productPromoId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (productPromoUse, args, {loaders}) => loaders.ofbizArray.load(`partys/find?=${args.partyId}`)
    }
  })
});

export {ProductPromoUse};
    