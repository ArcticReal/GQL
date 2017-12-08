
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

import {ContactMechTypeType} from '../party/ContactMechType.js';
import {CommunicationEventType} from '../party/CommunicationEvent.js';


const CommunicationEventTypeType = new GraphQLObjectType({
  name: 'CommunicationEventTypeType',
  description: 'Type for CommunicationEventType in party',

  fields: () => ({
    parentType: {
      type: CommunicationEventTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (communicationEventType, args, {loaders}) => loaders.ofbiz.load(`communicationEventTypes/find?communicationEventTypeId=${communicationEventType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    contactMechType: {
      type: ContactMechTypeType,
      args : {contactMechTypeId: {type: GraphQLString}},
      resolve: (communicationEventType, args, {loaders}) => loaders.ofbiz.load(`contactMechTypes/find?contactMechTypeId=${communicationEventType.contactMechTypeId}`)
    },
    communicationEventTypeId: {type: GraphQLString},
    communicationEventTypes: {
      type: new GraphQLList(CommunicationEventTypeType),
      args : {communicationEventTypeId: {type: GraphQLString}},
      resolve: (communicationEventType, args, {loaders}) => loaders.ofbizArray.load(`communicationEventTypes/find?communicationEventTypeId=${communicationEventType.communicationEventTypeId}`)
    },
    communicationEvents: {
      type: new GraphQLList(CommunicationEventType),
      args : {communicationEventTypeId: {type: GraphQLString}},
      resolve: (communicationEventType, args, {loaders}) => loaders.ofbizArray.load(`communicationEvents/find?communicationEventTypeId=${communicationEventType.communicationEventTypeId}`)
    }
  })
});

export {CommunicationEventTypeType};
    




const CommunicationEventTypeInputType = new GraphQLInputObjectType({
  name: 'CommunicationEventTypeInputType',
  description: 'input type for CommunicationEventType in party',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    contactMechTypeId: {type: GraphQLString},
    communicationEventTypeId: {type: GraphQLString}
  })
});

export {CommunicationEventTypeInputType};
    