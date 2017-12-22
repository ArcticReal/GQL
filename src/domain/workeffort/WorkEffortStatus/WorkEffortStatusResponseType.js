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

const WorkEffortStatusResponseType = new GraphQLObjectType({
  name: 'WorkEffortStatusResponseType',
  description: 'response type for WorkEffortStatus',

  fields: () => ({
    reason: {type: GraphQLString},
    setByUserLogin: {type: GraphQLString},
    statusDatetime: {type: GraphQLString},
    statusId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkEffortStatusResponseType};
    