
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


const TrainingRequestType = new GraphQLObjectType({
  name: 'TrainingRequestType',
  description: 'Type for TrainingRequest in humanres',

  fields: () => ({
    trainingRequestId: {type: GraphQLString},
    personTrainings: {
      type: new GraphQLList(PersonTrainingType),
      args : {trainingRequestId: {type: GraphQLString}},
      resolve: (trainingRequest, args, {loaders}) => loaders.ofbizArray.load(`personTrainings/find?trainingRequestId=${trainingRequest.trainingRequestId}`)
    }
  })
});

export {TrainingRequestType};
    




const TrainingRequestInputType = new GraphQLInputObjectType({
  name: 'TrainingRequestInputType',
  description: 'input type for TrainingRequest in humanres',

  fields: () => ({
    trainingRequestId: {type: GraphQLString}
  })
});

export {TrainingRequestInputType};
    