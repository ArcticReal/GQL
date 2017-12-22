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

const WorkEffortContactMechResponseType = new GraphQLObjectType({
  name: 'WorkEffortContactMechResponseType',
  description: 'response type for WorkEffortContactMech',

  fields: () => ({
    comments: {type: GraphQLString},
    contactMechId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkEffortContactMechResponseType};
    