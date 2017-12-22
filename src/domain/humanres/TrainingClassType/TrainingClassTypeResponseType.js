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

const TrainingClassTypeResponseType = new GraphQLObjectType({
  name: 'TrainingClassTypeResponseType',
  description: 'response type for TrainingClassType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    trainingClassTypeId: {type: GraphQLString}
  })
});

export {TrainingClassTypeResponseType};
    