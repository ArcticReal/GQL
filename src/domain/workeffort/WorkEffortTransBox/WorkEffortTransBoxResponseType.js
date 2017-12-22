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

const WorkEffortTransBoxResponseType = new GraphQLObjectType({
  name: 'WorkEffortTransBoxResponseType',
  description: 'response type for WorkEffortTransBox',

  fields: () => ({
    processWorkEffortId: {type: GraphQLString},
    toActivityId: {type: GraphQLString},
    transitionId: {type: GraphQLString}
  })
});

export {WorkEffortTransBoxResponseType};
    