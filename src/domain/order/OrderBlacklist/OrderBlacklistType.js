
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

import {OrderBlacklistTypeType} from '../../order/OrderBlacklistType/OrderBlacklistTypeType.js';


const OrderBlacklistType = new GraphQLObjectType({
  name: 'OrderBlacklistType',
  description: 'Type for OrderBlacklist in order',

  fields: () => ({
    orderBlacklistType: {
      type: OrderBlacklistTypeType,
      args : {orderBlacklistTypeId: {type: GraphQLString}},
      resolve: (orderBlacklist, args, {loaders}) => loaders.ofbiz.load(`order/orderBlacklist/orderBlacklistTypes/find?orderBlacklistTypeId=${orderBlacklist.orderBlacklistTypeId}`)
    },
    blacklistString: {type: GraphQLString}
  })
});

export {OrderBlacklistType};
    