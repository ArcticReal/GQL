
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
import {OrderHeaderType} from '../order/OrderHeader.js';


const OrderRoleType = new GraphQLObjectType({
  name: 'OrderRoleType',
  description: 'Type for OrderRole in order',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderRole, args, {loaders}) => loaders.ofbiz.load(`order/orderHeaders/find?orderId=${orderRole.orderId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (orderRole, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${orderRole.partyId}`)
    }
  })
});

export {OrderRoleType};
    




const OrderRoleInputType = new GraphQLInputObjectType({
  name: 'OrderRoleInputType',
  description: 'input type for OrderRole in order',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    orderId: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {OrderRoleInputType};
    