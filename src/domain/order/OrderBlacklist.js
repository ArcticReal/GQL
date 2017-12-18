
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

import {OrderBlacklistTypeType} from '../order/OrderBlacklistType.js';


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
    




const OrderBlacklistInputType = new GraphQLInputObjectType({
  name: 'OrderBlacklistInputType',
  description: 'input type for OrderBlacklist',

  fields: () => ({
    blacklistString: {type: GraphQLString},
    orderBlacklistTypeId: {type: GraphQLString}
  })
});

export {OrderBlacklistInputType};
    