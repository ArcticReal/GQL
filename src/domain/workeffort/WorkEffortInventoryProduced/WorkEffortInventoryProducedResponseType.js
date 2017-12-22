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

const WorkEffortInventoryProducedResponseType = new GraphQLObjectType({
  name: 'WorkEffortInventoryProducedResponseType',
  description: 'response type for WorkEffortInventoryProduced',

  fields: () => ({
    inventoryItemId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkEffortInventoryProducedResponseType};
    