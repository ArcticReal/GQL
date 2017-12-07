
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
import {PartyInvitationType} from '../party/PartyInvitationType.js';


const PartyInvitationGroupAssocType = new GraphQLObjectType({
  name: 'PartyInvitationGroupAssocType',
  description: 'Type for PartyInvitationGroupAssoc in party',

  fields: () => ({
    partyTo: {
      type: PartyType,
      args : {partyIdTo: {type: GraphQLString}},
      resolve: (partyInvitationGroupAssoc, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${partyInvitationGroupAssoc.partyIdTo}`)
    },
    partyInvitation: {
      type: PartyInvitationType,
      args : {partyInvitationId: {type: GraphQLString}},
      resolve: (partyInvitationGroupAssoc, args, {loaders}) => loaders.ofbiz.load(`partyInvitations/find?partyInvitationId=${partyInvitationGroupAssoc.partyInvitationId}`)
    }
  })
});

export {PartyInvitationGroupAssocType};
    