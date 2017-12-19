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

const WorkEffortTransBoxInputType = new GraphQLInputObjectType({
  name: 'WorkEffortTransBoxInputType',
  description: 'input type for WorkEffortTransBox',

  fields: () => ({
    processWorkEffortId: {type: GraphQLString},
    toActivityId: {type: GraphQLString},
    transitionId: {type: GraphQLString}
  })
});

export {WorkEffortTransBoxInputType};
    