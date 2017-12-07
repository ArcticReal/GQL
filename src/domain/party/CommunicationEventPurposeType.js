
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {CommunicationEventType} from '../party/CommunicationEventType.js';
import {CommunicationEventPrpTypType} from '../party/CommunicationEventPrpTypType.js';


const CommunicationEventPurposeType = new GraphQLObjectType({
  name: 'CommunicationEventPurposeType',
  description: 'Type for CommunicationEventPurpose in party',

  fields: () => ({
    communicationEventPrpTyp: {
      type: CommunicationEventPrpTypType,
      args : {communicationEventPrpTypId: {type: GraphQLString}},
      resolve: (communicationEventPurpose, args, {loaders}) => loaders.ofbiz.load(`communicationEventPrpTyps/find?communicationEventPrpTypId=${communicationEventPurpose.communicationEventPrpTypId}`)
    },
    communicationEvent: {
      type: CommunicationEventType,
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (communicationEventPurpose, args, {loaders}) => loaders.ofbiz.load(`communicationEvents/find?communicationEventId=${communicationEventPurpose.communicationEventId}`)
    },
    description: {type: GraphQLString}
  })
});

export {CommunicationEventPurposeType};
    