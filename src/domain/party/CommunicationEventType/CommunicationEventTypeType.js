
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

import {ContactMechTypeType} from '../../party/ContactMechType/ContactMechTypeType.js';
import {CommunicationEventType} from '../../party/CommunicationEvent/CommunicationEventType.js';


const CommunicationEventTypeType = new GraphQLObjectType({
  name: 'CommunicationEventTypeType',
  description: 'Type for CommunicationEventType in party',

  fields: () => ({
    parentType: {
      type: CommunicationEventTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (communicationEventType, args, {loaders}) => loaders.ofbiz.load(`party/communicationEvent/communicationEventTypes/find?communicationEventTypeId=${communicationEventType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    contactMechType: {
      type: ContactMechTypeType,
      args : {contactMechTypeId: {type: GraphQLString}},
      resolve: (communicationEventType, args, {loaders}) => loaders.ofbiz.load(`party/contactMech/contactMechTypes/find?contactMechTypeId=${communicationEventType.contactMechTypeId}`)
    },
    communicationEventTypeId: {type: GraphQLString},
    communicationEventTypes: {
      type: new GraphQLList(CommunicationEventTypeType),
      args : {},
      resolve: (communicationEventType, args, {loaders}) => loaders.ofbizArray.load(`party/communicationEvent/communicationEventTypes/find?communicationEventTypeId=${communicationEventType.communicationEventTypeId}`)
    },
    communicationEvents: {
      type: new GraphQLList(CommunicationEventType),
      args : {},
      resolve: (communicationEventType, args, {loaders}) => loaders.ofbizArray.load(`party/communicationEvents/find?communicationEventTypeId=${communicationEventType.communicationEventTypeId}`)
    }
  })
});

export {CommunicationEventTypeType};
    