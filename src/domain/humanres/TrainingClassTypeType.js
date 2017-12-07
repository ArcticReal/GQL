
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PersonTrainingType} from '../humanres/PersonTrainingType.js';


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
    trainingClassType: {
      type: new GraphQLList(TrainingClassTypeType),
      args : {trainingClassTypeId: {type: GraphQLString}},
      resolve: (trainingClassType, args, {loaders}) => loaders.ofbizArray.load(`trainingClassTypes/find?trainingClassTypeId=${trainingClassType.trainingClassTypeId}`)
    },
    personTraining: {
      type: new GraphQLList(PersonTrainingType),
      args : {trainingClassTypeId: {type: GraphQLString}},
      resolve: (trainingClassType, args, {loaders}) => loaders.ofbizArray.load(`personTrainings/find?trainingClassTypeId=${trainingClassType.trainingClassTypeId}`)
    }
  })
});

export {TrainingClassTypeType};
    