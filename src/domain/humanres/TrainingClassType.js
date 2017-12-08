
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

import {PersonTrainingType} from '../humanres/PersonTraining.js';


const TrainingClassTypeType = new GraphQLObjectType({
  name: 'TrainingClassTypeType',
  description: 'Type for TrainingClassType in humanres',

  fields: () => ({
    parentType: {
      type: TrainingClassTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (trainingClassType, args, {loaders}) => loaders.ofbiz.load(`trainingClassTypes/find?trainingClassTypeId=${trainingClassType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    trainingClassTypeId: {type: GraphQLString},
    trainingClassTypes: {
      type: new GraphQLList(TrainingClassTypeType),
      args : {trainingClassTypeId: {type: GraphQLString}},
      resolve: (trainingClassType, args, {loaders}) => loaders.ofbizArray.load(`trainingClassTypes/find?trainingClassTypeId=${trainingClassType.trainingClassTypeId}`)
    },
    personTrainings: {
      type: new GraphQLList(PersonTrainingType),
      args : {trainingClassTypeId: {type: GraphQLString}},
      resolve: (trainingClassType, args, {loaders}) => loaders.ofbizArray.load(`personTrainings/find?trainingClassTypeId=${trainingClassType.trainingClassTypeId}`)
    }
  })
});

export {TrainingClassTypeType};
    




const TrainingClassTypeInputType = new GraphQLInputObjectType({
  name: 'TrainingClassTypeInputType',
  description: 'input type for TrainingClassType in humanres',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    trainingClassTypeId: {type: GraphQLString}
  })
});

export {TrainingClassTypeInputType};
    