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

const WorkEffortDeliverableProdResponseType = new GraphQLObjectType({
  name: 'WorkEffortDeliverableProdResponseType',
  description: 'response type for WorkEffortDeliverableProd',

  fields: () => ({
    deliverableId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkEffortDeliverableProdResponseType};
    