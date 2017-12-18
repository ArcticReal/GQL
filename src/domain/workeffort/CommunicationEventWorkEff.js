
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

import {WorkEffortType} from '../workeffort/WorkEffort.js';
import {CommunicationEventType} from '../party/CommunicationEvent.js';


const CommunicationEventWorkEffType = new GraphQLObjectType({
  name: 'CommunicationEventWorkEffType',
  description: 'Type for CommunicationEventWorkEff in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (communicationEventWorkEff, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${communicationEventWorkEff.workEffortId}`)
    },
    communicationEvent: {
      type: CommunicationEventType,
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (communicationEventWorkEff, args, {loaders}) => loaders.ofbiz.load(`party/communicationEvents/find?communicationEventId=${communicationEventWorkEff.communicationEventId}`)
    },
    description: {type: GraphQLString}
  })
});

export {CommunicationEventWorkEffType};
    




const CommunicationEventWorkEffInputType = new GraphQLInputObjectType({
  name: 'CommunicationEventWorkEffInputType',
  description: 'input type for CommunicationEventWorkEff',

  fields: () => ({
    communicationEventId: {type: GraphQLString},
    description: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {CommunicationEventWorkEffInputType};
    