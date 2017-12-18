
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

import {PartyRoleType} from '../party/PartyRole.js';
import {OrderItemType} from '../order/OrderItem.js';


const OrderItemRoleType = new GraphQLObjectType({
  name: 'OrderItemRoleType',
  description: 'Type for OrderItemRole in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    order: {
      type: OrderItemType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItemRole, args, {loaders}) => loaders.ofbiz.load(`order/orderItems/find?orderId=${orderItemRole.orderId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (orderItemRole, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${orderItemRole.partyId}`)
    }
  })
});

export {OrderItemRoleType};
    




const OrderItemRoleInputType = new GraphQLInputObjectType({
  name: 'OrderItemRoleInputType',
  description: 'input type for OrderItemRole',

  fields: () => ({
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString}
  })
});

export {OrderItemRoleInputType};
    