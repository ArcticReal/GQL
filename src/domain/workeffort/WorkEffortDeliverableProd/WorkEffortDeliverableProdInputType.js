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

const WorkEffortDeliverableProdInputType = new GraphQLInputObjectType({
  name: 'WorkEffortDeliverableProdInputType',
  description: 'input type for WorkEffortDeliverableProd',

  fields: () => ({
    deliverableId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkEffortDeliverableProdInputType};
    