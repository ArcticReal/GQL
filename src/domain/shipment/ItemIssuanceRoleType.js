
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
import {ItemIssuanceType} from '../shipment/ItemIssuanceType.js';


const ItemIssuanceRoleType = new GraphQLObjectType({
  name: 'ItemIssuanceRoleType',
  description: 'Type for ItemIssuanceRole in shipment',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    itemIssuance: {
      type: ItemIssuanceType,
      args : {itemIssuanceId: {type: GraphQLString}},
      resolve: (itemIssuanceRole, args, {loaders}) => loaders.ofbiz.load(`itemIssuances/find?itemIssuanceId=${itemIssuanceRole.itemIssuanceId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (itemIssuanceRole, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${itemIssuanceRole.partyId}`)
    }
  })
});

export {ItemIssuanceRoleType};
    