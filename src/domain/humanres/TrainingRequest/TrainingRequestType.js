
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


const TrainingRequestType = new GraphQLObjectType({
  name: 'TrainingRequestType',
  description: 'Type for TrainingRequest in humanres',

  fields: () => ({
    trainingRequestId: {type: GraphQLString},
    personTrainings: {
      type: new GraphQLList(PersonTrainingType),
      args : {},
      resolve: (trainingRequest, args, {loaders}) => loaders.ofbizArray.load(`humanres/personTrainings/find?trainingRequestId=${trainingRequest.trainingRequestId}`)
    }
  })
});

export {TrainingRequestType};
    