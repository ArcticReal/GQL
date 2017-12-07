
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


const TrainingRequestType = new GraphQLObjectType({
  name: 'TrainingRequestType',
  description: 'Type for TrainingRequest in humanres',

  fields: () => ({
    trainingRequestId: {type: GraphQLString},
    personTraining: {
      type: new GraphQLList(PersonTrainingType),
      args : {trainingRequestId: {type: GraphQLString}},
      resolve: (trainingRequest, args, {loaders}) => loaders.ofbizArray.load(`personTrainings/find?trainingRequestId=${trainingRequest.trainingRequestId}`)
    }
  })
});

export {TrainingRequestType};
    