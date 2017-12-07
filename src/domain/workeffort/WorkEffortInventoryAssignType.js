
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {InventoryItemType} from '../product/InventoryItemType.js';
import {WorkEffortType} from '../workeffort/WorkEffortType.js';


const WorkEffortInventoryAssignType = new GraphQLObjectType({
  name: 'WorkEffortInventoryAssignType',
  description: 'Type for WorkEffortInventoryAssign in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortInventoryAssign, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${workEffortInventoryAssign.workEffortId}`)
    },
    inventoryItem: {
      type: InventoryItemType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (workEffortInventoryAssign, args, {loaders}) => loaders.ofbiz.load(`inventoryItems/find?inventoryItemId=${workEffortInventoryAssign.inventoryItemId}`)
    },
    quantity: {type: GraphQLFloat},
    statusId: {type: GraphQLString}
  })
});

export {WorkEffortInventoryAssignType};
    