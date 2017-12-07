
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


const WorkEffortInventoryProducedType = new GraphQLObjectType({
  name: 'WorkEffortInventoryProducedType',
  description: 'Type for WorkEffortInventoryProduced in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortInventoryProduced, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${workEffortInventoryProduced.workEffortId}`)
    },
    inventoryItem: {
      type: InventoryItemType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (workEffortInventoryProduced, args, {loaders}) => loaders.ofbiz.load(`inventoryItems/find?inventoryItemId=${workEffortInventoryProduced.inventoryItemId}`)
    }
  })
});

export {WorkEffortInventoryProducedType};
    