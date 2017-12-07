
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductPriceActionType} from '../product/ProductPriceActionType.js';
import {OrderItemType} from '../order/OrderItemType.js';


const OrderItemPriceInfoType = new GraphQLObjectType({
  name: 'OrderItemPriceInfoType',
  description: 'Type for OrderItemPriceInfo in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    order: {
      type: OrderItemType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItemPriceInfo, args, {loaders}) => loaders.ofbiz.load(`orderItems/find?orderId=${orderItemPriceInfo.orderId}`)
    },
    productPriceActionSeqId: {type: GraphQLString},
    modifyAmount: {type: GraphQLFloat},
    description: {type: GraphQLString},
    productPriceRule: {
      type: ProductPriceActionType,
      args : {productPriceRuleId: {type: GraphQLString}},
      resolve: (orderItemPriceInfo, args, {loaders}) => loaders.ofbiz.load(`productPriceActions/find?productPriceRuleId=${orderItemPriceInfo.productPriceRuleId}`)
    },
    rateCode: {type: GraphQLString},
    orderItemPriceInfoId: {type: GraphQLString}
  })
});

export {OrderItemPriceInfoType};
    