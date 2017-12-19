
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

import {PartyRoleType} from '../../party/PartyRole/PartyRoleType.js';
import {ItemIssuanceType} from '../../shipment/ItemIssuance/ItemIssuanceType.js';


const ItemIssuanceRoleType = new GraphQLObjectType({
  name: 'ItemIssuanceRoleType',
  description: 'Type for ItemIssuanceRole in shipment',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    itemIssuance: {
      type: ItemIssuanceType,
      args : {itemIssuanceId: {type: GraphQLString}},
      resolve: (itemIssuanceRole, args, {loaders}) => loaders.ofbiz.load(`shipment/itemIssuances/find?itemIssuanceId=${itemIssuanceRole.itemIssuanceId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (itemIssuanceRole, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${itemIssuanceRole.partyId}`)
    }
  })
});

export {ItemIssuanceRoleType};
    