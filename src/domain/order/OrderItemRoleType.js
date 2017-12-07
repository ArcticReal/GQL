
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyRoleType} from '../party/PartyRoleType.js';
import {OrderItemType} from '../order/OrderItemType.js';


const OrderItemRoleType = new GraphQLObjectType({
  name: 'OrderItemRoleType',
  description: 'Type for OrderItemRole in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    order: {
      type: OrderItemType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItemRole, args, {loaders}) => loaders.ofbiz.load(`orderItems/find?orderId=${orderItemRole.orderId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (orderItemRole, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${orderItemRole.partyId}`)
    }
  })
});

export {OrderItemRoleType};
    