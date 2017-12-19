
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

import {InventoryItemType} from '../../product/InventoryItem/InventoryItemType.js';
import {WorkEffortType} from '../../workeffort/WorkEffort/WorkEffortType.js';


const WorkEffortInventoryAssignType = new GraphQLObjectType({
  name: 'WorkEffortInventoryAssignType',
  description: 'Type for WorkEffortInventoryAssign in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortInventoryAssign, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${workEffortInventoryAssign.workEffortId}`)
    },
    inventoryItem: {
      type: InventoryItemType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (workEffortInventoryAssign, args, {loaders}) => loaders.ofbiz.load(`product/inventoryItems/find?inventoryItemId=${workEffortInventoryAssign.inventoryItemId}`)
    },
    quantity: {type: GraphQLFloat},
    statusId: {type: GraphQLString}
  })
});

export {WorkEffortInventoryAssignType};
    