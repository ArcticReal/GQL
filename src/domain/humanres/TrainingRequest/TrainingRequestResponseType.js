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

const TrainingRequestResponseType = new GraphQLObjectType({
  name: 'TrainingRequestResponseType',
  description: 'response type for TrainingRequest',

  fields: () => ({
    trainingRequestId: {type: GraphQLString}
  })
});

export {TrainingRequestResponseType};
    