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

const WorkEffortGoodStandardTypeResponseType = new GraphQLObjectType({
  name: 'WorkEffortGoodStandardTypeResponseType',
  description: 'response type for WorkEffortGoodStandardType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    workEffortGoodStdTypeId: {type: GraphQLString}
  })
});

export {WorkEffortGoodStandardTypeResponseType};
    