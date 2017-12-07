
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyType} from '../party/PartyType.js';
import {PartyInvitationRoleAssocType} from '../party/PartyInvitationRoleAssocType.js';
import {PartyInvitationGroupAssocType} from '../party/PartyInvitationGroupAssocType.js';


const PartyInvitationType = new GraphQLObjectType({
  name: 'PartyInvitationType',
  description: 'Type for PartyInvitation in party',

  fields: () => ({
    partyFrom: {
      type: PartyType,
      args : {partyIdFrom: {type: GraphQLString}},
      resolve: (partyInvitation, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${partyInvitation.partyIdFrom}`)
    },
    emailAddress: {type: GraphQLString},
    statusId: {type: GraphQLString},
    toName: {type: GraphQLString},
    lastInviteDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    partyInvitationId: {type: GraphQLString},
    partyInvitationGroupAssoc: {
      type: new GraphQLList(PartyInvitationGroupAssocType),
      args : {partyInvitationId: {type: GraphQLString}},
      resolve: (partyInvitation, args, {loaders}) => loaders.ofbizArray.load(`partyInvitationGroupAssocs/find?partyInvitationId=${partyInvitation.partyInvitationId}`)
    },
    partyInvitationRoleAssoc: {
      type: new GraphQLList(PartyInvitationRoleAssocType),
      args : {partyInvitationId: {type: GraphQLString}},
      resolve: (partyInvitation, args, {loaders}) => loaders.ofbizArray.load(`partyInvitationRoleAssocs/find?partyInvitationId=${partyInvitation.partyInvitationId}`)
    }
  })
});

export {PartyInvitationType};
    