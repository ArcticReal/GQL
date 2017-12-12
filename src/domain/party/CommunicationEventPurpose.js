
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

import {CommunicationEventType} from '../party/CommunicationEvent.js';
import {CommunicationEventPrpTypType} from '../party/CommunicationEventPrpTyp.js';


const CommunicationEventPurposeType = new GraphQLObjectType({
  name: 'CommunicationEventPurposeType',
  description: 'Type for CommunicationEventPurpose in party',

  fields: () => ({
    communicationEventPrpTyp: {
      type: CommunicationEventPrpTypType,
      args : {communicationEventPrpTypId: {type: GraphQLString}},
      resolve: (communicationEventPurpose, args, {loaders}) => loaders.ofbiz.load(`party/communicationEvent/communicationEventPrpTyps/find?communicationEventPrpTypId=${communicationEventPurpose.communicationEventPrpTypId}`)
    },
    communicationEvent: {
      type: CommunicationEventType,
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (communicationEventPurpose, args, {loaders}) => loaders.ofbiz.load(`party/communicationEvents/find?communicationEventId=${communicationEventPurpose.communicationEventId}`)
    },
    description: {type: GraphQLString}
  })
});

export {CommunicationEventPurposeType};
    




const CommunicationEventPurposeInputType = new GraphQLInputObjectType({
  name: 'CommunicationEventPurposeInputType',
  description: 'input type for CommunicationEventPurpose in party',

  fields: () => ({
    communicationEventPrpTypId: {type: GraphQLString},
    communicationEventId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {CommunicationEventPurposeInputType};
    