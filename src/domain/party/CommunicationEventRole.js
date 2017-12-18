
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
import {CommunicationEventType} from '../party/CommunicationEvent.js';
import {ContactMechType} from '../party/ContactMech.js';


const CommunicationEventRoleType = new GraphQLObjectType({
  name: 'CommunicationEventRoleType',
  description: 'Type for CommunicationEventRole in party',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    communicationEvent: {
      type: CommunicationEventType,
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (communicationEventRole, args, {loaders}) => loaders.ofbiz.load(`party/communicationEvents/find?communicationEventId=${communicationEventRole.communicationEventId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (communicationEventRole, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${communicationEventRole.partyId}`)
    },
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (communicationEventRole, args, {loaders}) => loaders.ofbiz.load(`party/contactMechs/find?contactMechId=${communicationEventRole.contactMechId}`)
    }
  })
});

export {CommunicationEventRoleType};
    




const CommunicationEventRoleInputType = new GraphQLInputObjectType({
  name: 'CommunicationEventRoleInputType',
  description: 'input type for CommunicationEventRole',

  fields: () => ({
    communicationEventId: {type: GraphQLString},
    contactMechId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {CommunicationEventRoleInputType};
    