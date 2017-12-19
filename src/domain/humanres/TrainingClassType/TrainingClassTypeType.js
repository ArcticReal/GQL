
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

import {PersonTrainingType} from '../../humanres/PersonTraining/PersonTrainingType.js';


const TrainingClassTypeType = new GraphQLObjectType({
  name: 'TrainingClassTypeType',
  description: 'Type for TrainingClassType in humanres',

  fields: () => ({
    parentType: {
      type: TrainingClassTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (trainingClassType, args, {loaders}) => loaders.ofbiz.load(`humanres/trainingClassTypes/find?trainingClassTypeId=${trainingClassType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    trainingClassTypeId: {type: GraphQLString},
    trainingClassTypes: {
      type: new GraphQLList(TrainingClassTypeType),
      args : {},
      resolve: (trainingClassType, args, {loaders}) => loaders.ofbizArray.load(`humanres/trainingClassTypes/find?trainingClassTypeId=${trainingClassType.trainingClassTypeId}`)
    },
    personTrainings: {
      type: new GraphQLList(PersonTrainingType),
      args : {},
      resolve: (trainingClassType, args, {loaders}) => loaders.ofbizArray.load(`humanres/personTrainings/find?trainingClassTypeId=${trainingClassType.trainingClassTypeId}`)
    }
  })
});

export {TrainingClassTypeType};
    