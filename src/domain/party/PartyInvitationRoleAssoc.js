
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

import {PartyInvitationType} from '../party/PartyInvitation.js';
import {RoleTypeType} from '../party/RoleType.js';


const PartyInvitationRoleAssocType = new GraphQLObjectType({
  name: 'PartyInvitationRoleAssocType',
  description: 'Type for PartyInvitationRoleAssoc in party',

  fields: () => ({
    roleType: {
      type: RoleTypeType,
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (partyInvitationRoleAssoc, args, {loaders}) => loaders.ofbiz.load(`party/roleTypes/find?roleTypeId=${partyInvitationRoleAssoc.roleTypeId}`)
    },
    partyInvitation: {
      type: PartyInvitationType,
      args : {partyInvitationId: {type: GraphQLString}},
      resolve: (partyInvitationRoleAssoc, args, {loaders}) => loaders.ofbiz.load(`party/party/partyInvitations/find?partyInvitationId=${partyInvitationRoleAssoc.partyInvitationId}`)
    }
  })
});

export {PartyInvitationRoleAssocType};
    




const PartyInvitationRoleAssocInputType = new GraphQLInputObjectType({
  name: 'PartyInvitationRoleAssocInputType',
  description: 'input type for PartyInvitationRoleAssoc',

  fields: () => ({
    partyInvitationId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString}
  })
});

export {PartyInvitationRoleAssocInputType};
    