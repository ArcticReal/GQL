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

const WorkEffortStatusInputType = new GraphQLInputObjectType({
  name: 'WorkEffortStatusInputType',
  description: 'input type for WorkEffortStatus',

  fields: () => ({
    reason: {type: GraphQLString},
    setByUserLogin: {type: GraphQLString},
    statusDatetime: {type: GraphQLString},
    statusId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkEffortStatusInputType};
    