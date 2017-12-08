
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
      resolve: (partyInvitationRoleAssoc, args, {loaders}) => loaders.ofbiz.load(`roleTypes/find?roleTypeId=${partyInvitationRoleAssoc.roleTypeId}`)
    },
    partyInvitation: {
      type: PartyInvitationType,
      args : {partyInvitationId: {type: GraphQLString}},
      resolve: (partyInvitationRoleAssoc, args, {loaders}) => loaders.ofbiz.load(`partyInvitations/find?partyInvitationId=${partyInvitationRoleAssoc.partyInvitationId}`)
    }
  })
});

export {PartyInvitationRoleAssocType};
    




const PartyInvitationRoleAssocInputType = new GraphQLInputObjectType({
  name: 'PartyInvitationRoleAssocInputType',
  description: 'input type for PartyInvitationRoleAssoc in party',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    partyInvitationId: {type: GraphQLString}
  })
});

export {PartyInvitationRoleAssocInputType};
    