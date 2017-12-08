
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

import {PartyType} from '../party/Party.js';
import {PartyInvitationRoleAssocType} from '../party/PartyInvitationRoleAssoc.js';
import {PartyInvitationGroupAssocType} from '../party/PartyInvitationGroupAssoc.js';


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
    partyInvitationGroupAssocs: {
      type: new GraphQLList(PartyInvitationGroupAssocType),
      args : {partyInvitationId: {type: GraphQLString}},
      resolve: (partyInvitation, args, {loaders}) => loaders.ofbizArray.load(`partyInvitationGroupAssocs/find?partyInvitationId=${partyInvitation.partyInvitationId}`)
    },
    partyInvitationRoleAssocs: {
      type: new GraphQLList(PartyInvitationRoleAssocType),
      args : {partyInvitationId: {type: GraphQLString}},
      resolve: (partyInvitation, args, {loaders}) => loaders.ofbizArray.load(`partyInvitationRoleAssocs/find?partyInvitationId=${partyInvitation.partyInvitationId}`)
    }
  })
});

export {PartyInvitationType};
    




const PartyInvitationInputType = new GraphQLInputObjectType({
  name: 'PartyInvitationInputType',
  description: 'input type for PartyInvitation in party',

  fields: () => ({
    partyIdFrom: {type: GraphQLString},
    emailAddress: {type: GraphQLString},
    statusId: {type: GraphQLString},
    toName: {type: GraphQLString},
    lastInviteDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    partyInvitationId: {type: GraphQLString}
  })
});

export {PartyInvitationInputType};
    