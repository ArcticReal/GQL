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

const TrainingRequestInputType = new GraphQLInputObjectType({
  name: 'TrainingRequestInputType',
  description: 'input type for TrainingRequest',

  fields: () => ({
    trainingRequestId: {type: GraphQLString}
  })
});

export {TrainingRequestInputType};
    