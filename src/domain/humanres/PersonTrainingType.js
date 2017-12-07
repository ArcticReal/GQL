
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
import {PartyType} from '../party/PartyType.js';
import {TrainingRequestType} from '../humanres/TrainingRequestType.js';
import {PersonType} from '../party/PersonType.js';
import {TrainingClassTypeType} from '../humanres/TrainingClassTypeType.js';


const PersonTrainingType = new GraphQLObjectType({
  name: 'PersonTrainingType',
  description: 'Type for PersonTraining in humanres',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (personTraining, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${personTraining.workEffortId}`)
    },
    fromDate: {type: GraphQLString},
    approvalStatus: {type: GraphQLString},
    reason: {type: GraphQLString},
    trainingRequest: {
      type: TrainingRequestType,
      args : {trainingRequestId: {type: GraphQLString}},
      resolve: (personTraining, args, {loaders}) => loaders.ofbiz.load(`trainingRequests/find?trainingRequestId=${personTraining.trainingRequestId}`)
    },
    approver: {
      type: PersonType,
      args : {approverId: {type: GraphQLString}},
      resolve: (personTraining, args, {loaders}) => loaders.ofbiz.load(`persons/find?partyId=${personTraining.approverId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (personTraining, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${personTraining.partyId}`)
    },
    trainingClassType: {
      type: TrainingClassTypeType,
      args : {trainingClassTypeId: {type: GraphQLString}},
      resolve: (personTraining, args, {loaders}) => loaders.ofbiz.load(`trainingClassTypes/find?trainingClassTypeId=${personTraining.trainingClassTypeId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {PersonTrainingType};
    