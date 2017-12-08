
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

import {InventoryItemType} from '../product/InventoryItem.js';
import {WorkEffortType} from '../workeffort/WorkEffort.js';


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
    




const WorkEffortInventoryAssignInputType = new GraphQLInputObjectType({
  name: 'WorkEffortInventoryAssignInputType',
  description: 'input type for WorkEffortInventoryAssign in workeffort',

  fields: () => ({
    workEffortId: {type: GraphQLString},
    inventoryItemId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    statusId: {type: GraphQLString}
  })
});

export {WorkEffortInventoryAssignInputType};
    