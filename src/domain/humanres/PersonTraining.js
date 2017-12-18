
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
import {PartyType} from '../party/Party.js';
import {TrainingRequestType} from '../humanres/TrainingRequest.js';
import {PersonType} from '../party/Person.js';
import {TrainingClassTypeType} from '../humanres/TrainingClassType.js';


const PersonTrainingType = new GraphQLObjectType({
  name: 'PersonTrainingType',
  description: 'Type for PersonTraining in humanres',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (personTraining, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${personTraining.workEffortId}`)
    },
    fromDate: {type: GraphQLString},
    approvalStatus: {type: GraphQLString},
    reason: {type: GraphQLString},
    trainingRequest: {
      type: TrainingRequestType,
      args : {trainingRequestId: {type: GraphQLString}},
      resolve: (personTraining, args, {loaders}) => loaders.ofbiz.load(`humanres/trainingRequests/find?trainingRequestId=${personTraining.trainingRequestId}`)
    },
    approver: {
      type: PersonType,
      args : {approverId: {type: GraphQLString}},
      resolve: (personTraining, args, {loaders}) => loaders.ofbiz.load(`party/persons/find?partyId=${personTraining.approverId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (personTraining, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${personTraining.partyId}`)
    },
    trainingClassType: {
      type: TrainingClassTypeType,
      args : {trainingClassTypeId: {type: GraphQLString}},
      resolve: (personTraining, args, {loaders}) => loaders.ofbiz.load(`humanres/trainingClassTypes/find?trainingClassTypeId=${personTraining.trainingClassTypeId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {PersonTrainingType};
    




const PersonTrainingInputType = new GraphQLInputObjectType({
  name: 'PersonTrainingInputType',
  description: 'input type for PersonTraining',

  fields: () => ({
    approvalStatus: {type: GraphQLString},
    approverId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    reason: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    trainingClassTypeId: {type: GraphQLString},
    trainingRequestId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {PersonTrainingInputType};
    