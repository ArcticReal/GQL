
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

import {OrderHeaderType} from '../../order/OrderHeader/OrderHeaderType.js';
import {ProductPromoCodeType} from '../../product/ProductPromoCode/ProductPromoCodeType.js';


const OrderProductPromoCodeType = new GraphQLObjectType({
  name: 'OrderProductPromoCodeType',
  description: 'Type for OrderProductPromoCode in order',

  fields: () => ({
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderProductPromoCode, args, {loaders}) => loaders.ofbiz.load(`order/orderHeaders/find?orderId=${orderProductPromoCode.orderId}`)
    },
    productPromoCode: {
      type: ProductPromoCodeType,
      args : {productPromoCodeId: {type: GraphQLString}},
      resolve: (orderProductPromoCode, args, {loaders}) => loaders.ofbiz.load(`product/product/productPromoCodes/find?productPromoCodeId=${orderProductPromoCode.productPromoCodeId}`)
    }
  })
});

export {OrderProductPromoCodeType};
    