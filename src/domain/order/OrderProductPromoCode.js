
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

import {OrderHeaderType} from '../order/OrderHeader.js';
import {ProductPromoCodeType} from '../product/ProductPromoCode.js';


const OrderProductPromoCodeType = new GraphQLObjectType({
  name: 'OrderProductPromoCodeType',
  description: 'Type for OrderProductPromoCode in order',

  fields: () => ({
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderProductPromoCode, args, {loaders}) => loaders.ofbiz.load(`orderHeaders/find?orderId=${orderProductPromoCode.orderId}`)
    },
    productPromoCode: {
      type: ProductPromoCodeType,
      args : {productPromoCodeId: {type: GraphQLString}},
      resolve: (orderProductPromoCode, args, {loaders}) => loaders.ofbiz.load(`productPromoCodes/find?productPromoCodeId=${orderProductPromoCode.productPromoCodeId}`)
    }
  })
});

export {OrderProductPromoCodeType};
    




const OrderProductPromoCodeInputType = new GraphQLInputObjectType({
  name: 'OrderProductPromoCodeInputType',
  description: 'input type for OrderProductPromoCode in order',

  fields: () => ({
    orderId: {type: GraphQLString},
    productPromoCodeId: {type: GraphQLString}
  })
});

export {OrderProductPromoCodeInputType};
    