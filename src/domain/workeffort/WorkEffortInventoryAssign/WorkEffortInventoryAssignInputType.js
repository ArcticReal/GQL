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

const WorkEffortInventoryAssignInputType = new GraphQLInputObjectType({
  name: 'WorkEffortInventoryAssignInputType',
  description: 'input type for WorkEffortInventoryAssign',

  fields: () => ({
    inventoryItemId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    statusId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkEffortInventoryAssignInputType};
    