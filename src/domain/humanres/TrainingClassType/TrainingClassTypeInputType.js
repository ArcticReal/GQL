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

const TrainingClassTypeInputType = new GraphQLInputObjectType({
  name: 'TrainingClassTypeInputType',
  description: 'input type for TrainingClassType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    trainingClassTypeId: {type: GraphQLString}
  })
});

export {TrainingClassTypeInputType};
    