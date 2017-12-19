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

const WorkEffortInventoryProducedInputType = new GraphQLInputObjectType({
  name: 'WorkEffortInventoryProducedInputType',
  description: 'input type for WorkEffortInventoryProduced',

  fields: () => ({
    inventoryItemId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkEffortInventoryProducedInputType};
    