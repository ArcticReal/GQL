
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {OrderBlacklistType} from '../order/OrderBlacklistType.js';


const OrderBlacklistTypeType = new GraphQLObjectType({
  name: 'OrderBlacklistTypeType',
  description: 'Type for OrderBlacklistType in order',

  fields: () => ({
    description: {type: GraphQLString},
    orderBlacklistTypeId: {type: GraphQLString},
    orderBlacklist: {
      type: new GraphQLList(OrderBlacklistType),
      args : {orderBlacklistTypeId: {type: GraphQLString}},
      resolve: (orderBlacklistType, args, {loaders}) => loaders.ofbizArray.load(`orderBlacklists/find?orderBlacklistTypeId=${orderBlacklistType.orderBlacklistTypeId}`)
    }
  })
});

export {OrderBlacklistTypeType};
    