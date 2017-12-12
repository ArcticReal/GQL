
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


const WorkEffortInventoryProducedType = new GraphQLObjectType({
  name: 'WorkEffortInventoryProducedType',
  description: 'Type for WorkEffortInventoryProduced in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortInventoryProduced, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${workEffortInventoryProduced.workEffortId}`)
    },
    inventoryItem: {
      type: InventoryItemType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (workEffortInventoryProduced, args, {loaders}) => loaders.ofbiz.load(`product/inventoryItems/find?inventoryItemId=${workEffortInventoryProduced.inventoryItemId}`)
    }
  })
});

export {WorkEffortInventoryProducedType};
    




const WorkEffortInventoryProducedInputType = new GraphQLInputObjectType({
  name: 'WorkEffortInventoryProducedInputType',
  description: 'input type for WorkEffortInventoryProduced in workeffort',

  fields: () => ({
    workEffortId: {type: GraphQLString},
    inventoryItemId: {type: GraphQLString}
  })
});

export {WorkEffortInventoryProducedInputType};
    