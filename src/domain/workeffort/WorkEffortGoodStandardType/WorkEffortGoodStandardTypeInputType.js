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

const WorkEffortGoodStandardTypeInputType = new GraphQLInputObjectType({
  name: 'WorkEffortGoodStandardTypeInputType',
  description: 'input type for WorkEffortGoodStandardType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    workEffortGoodStdTypeId: {type: GraphQLString}
  })
});

export {WorkEffortGoodStandardTypeInputType};
    