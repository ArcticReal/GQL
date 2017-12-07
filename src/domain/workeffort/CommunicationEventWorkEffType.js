
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {WorkEffortType} from '../workeffort/WorkEffortType.js';
import {CommunicationEventType} from '../party/CommunicationEventType.js';


const CommunicationEventWorkEffType = new GraphQLObjectType({
  name: 'CommunicationEventWorkEffType',
  description: 'Type for CommunicationEventWorkEff in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (communicationEventWorkEff, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${communicationEventWorkEff.workEffortId}`)
    },
    communicationEvent: {
      type: CommunicationEventType,
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (communicationEventWorkEff, args, {loaders}) => loaders.ofbiz.load(`communicationEvents/find?communicationEventId=${communicationEventWorkEff.communicationEventId}`)
    },
    description: {type: GraphQLString}
  })
});

export {CommunicationEventWorkEffType};
    