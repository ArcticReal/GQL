
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
import {OrderHeaderType} from '../order/OrderHeaderType.js';


const OrderRoleType = new GraphQLObjectType({
  name: 'OrderRoleType',
  description: 'Type for OrderRole in order',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderRole, args, {loaders}) => loaders.ofbiz.load(`orderHeaders/find?orderId=${orderRole.orderId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (orderRole, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${orderRole.partyId}`)
    }
  })
});

export {OrderRoleType};
    