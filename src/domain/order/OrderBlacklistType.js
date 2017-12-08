
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

import {OrderBlacklistType} from '../order/OrderBlacklist.js';


const OrderBlacklistTypeType = new GraphQLObjectType({
  name: 'OrderBlacklistTypeType',
  description: 'Type for OrderBlacklistType in order',

  fields: () => ({
    description: {type: GraphQLString},
    orderBlacklistTypeId: {type: GraphQLString},
    orderBlacklists: {
      type: new GraphQLList(OrderBlacklistType),
      args : {orderBlacklistTypeId: {type: GraphQLString}},
      resolve: (orderBlacklistType, args, {loaders}) => loaders.ofbizArray.load(`orderBlacklists/find?orderBlacklistTypeId=${orderBlacklistType.orderBlacklistTypeId}`)
    }
  })
});

export {OrderBlacklistTypeType};
    




const OrderBlacklistTypeInputType = new GraphQLInputObjectType({
  name: 'OrderBlacklistTypeInputType',
  description: 'input type for OrderBlacklistType in order',

  fields: () => ({
    description: {type: GraphQLString},
    orderBlacklistTypeId: {type: GraphQLString}
  })
});

export {OrderBlacklistTypeInputType};
    