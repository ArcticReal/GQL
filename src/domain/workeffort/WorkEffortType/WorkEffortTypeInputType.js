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

const WorkEffortTypeInputType = new GraphQLInputObjectType({
  name: 'WorkEffortTypeInputType',
  description: 'input type for WorkEffortType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    workEffortTypeId: {type: GraphQLString}
  })
});

export {WorkEffortTypeInputType};
    