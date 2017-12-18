
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

import {ProductPriceActionType} from '../product/ProductPriceAction.js';
import {OrderItemType} from '../order/OrderItem.js';


const OrderItemPriceInfoType = new GraphQLObjectType({
  name: 'OrderItemPriceInfoType',
  description: 'Type for OrderItemPriceInfo in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    order: {
      type: OrderItemType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItemPriceInfo, args, {loaders}) => loaders.ofbiz.load(`order/orderItems/find?orderId=${orderItemPriceInfo.orderId}`)
    },
    productPriceActionSeqId: {type: GraphQLString},
    modifyAmount: {type: GraphQLFloat},
    description: {type: GraphQLString},
    productPriceRule: {
      type: ProductPriceActionType,
      args : {productPriceRuleId: {type: GraphQLString}},
      resolve: (orderItemPriceInfo, args, {loaders}) => loaders.ofbiz.load(`product/product/productPriceActions/find?productPriceRuleId=${orderItemPriceInfo.productPriceRuleId}`)
    },
    rateCode: {type: GraphQLString},
    orderItemPriceInfoId: {type: GraphQLString}
  })
});

export {OrderItemPriceInfoType};
    




const OrderItemPriceInfoInputType = new GraphQLInputObjectType({
  name: 'OrderItemPriceInfoInputType',
  description: 'input type for OrderItemPriceInfo',

  fields: () => ({
    description: {type: GraphQLString},
    modifyAmount: {type: GraphQLFloat},
    orderId: {type: GraphQLString},
    orderItemPriceInfoId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    productPriceActionSeqId: {type: GraphQLString},
    productPriceRuleId: {type: GraphQLString},
    rateCode: {type: GraphQLString}
  })
});

export {OrderItemPriceInfoInputType};
    