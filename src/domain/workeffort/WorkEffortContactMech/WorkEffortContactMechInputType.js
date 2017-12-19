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

const WorkEffortContactMechInputType = new GraphQLInputObjectType({
  name: 'WorkEffortContactMechInputType',
  description: 'input type for WorkEffortContactMech',

  fields: () => ({
    comments: {type: GraphQLString},
    contactMechId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkEffortContactMechInputType};
    