
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
import {CommunicationEventType} from '../party/CommunicationEventType.js';
import {ContactMechType} from '../party/ContactMechType.js';


const CommunicationEventRoleType = new GraphQLObjectType({
  name: 'CommunicationEventRoleType',
  description: 'Type for CommunicationEventRole in party',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    communicationEvent: {
      type: CommunicationEventType,
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (communicationEventRole, args, {loaders}) => loaders.ofbiz.load(`communicationEvents/find?communicationEventId=${communicationEventRole.communicationEventId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (communicationEventRole, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${communicationEventRole.partyId}`)
    },
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (communicationEventRole, args, {loaders}) => loaders.ofbiz.load(`contactMechs/find?contactMechId=${communicationEventRole.contactMechId}`)
    }
  })
});

export {CommunicationEventRoleType};
    