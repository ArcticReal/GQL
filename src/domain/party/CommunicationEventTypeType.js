
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ContactMechTypeType} from '../party/ContactMechTypeType.js';
import {CommunicationEventType} from '../party/CommunicationEventType.js';


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
    communicationEventType: {
      type: new GraphQLList(CommunicationEventTypeType),
      args : {communicationEventTypeId: {type: GraphQLString}},
      resolve: (communicationEventType, args, {loaders}) => loaders.ofbizArray.load(`communicationEventTypes/find?communicationEventTypeId=${communicationEventType.communicationEventTypeId}`)
    },
    communicationEvent: {
      type: new GraphQLList(CommunicationEventType),
      args : {communicationEventTypeId: {type: GraphQLString}},
      resolve: (communicationEventType, args, {loaders}) => loaders.ofbizArray.load(`communicationEvents/find?communicationEventTypeId=${communicationEventType.communicationEventTypeId}`)
    }
  })
});

export {CommunicationEventTypeType};
    