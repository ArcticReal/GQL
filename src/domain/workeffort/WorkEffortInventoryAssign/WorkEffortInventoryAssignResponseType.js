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

const WorkEffortInventoryAssignResponseType = new GraphQLObjectType({
  name: 'WorkEffortInventoryAssignResponseType',
  description: 'response type for WorkEffortInventoryAssign',

  fields: () => ({
    inventoryItemId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    statusId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkEffortInventoryAssignResponseType};
    