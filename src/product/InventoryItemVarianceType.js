
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {InventoryItem} from '../product/InventoryItem.js';
import {VarianceReason} from '../product/VarianceReason.js';
import {PhysicalInventory} from '../product/PhysicalInventory.js';


const InventoryItemVariance = new GraphQLObjectType({
  name: 'InventoryItemVarianceType',
  description: 'Type for InventoryItemVariance in product',

  fields: () => ({
    inventoryItem: {
      type: InventoryItemType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (inventoryItemVariance, args, {loaders}) => loaders.ofbizArray.load(`inventoryItems/find?=${args.inventoryItemId}`)
    },
    varianceReason: {
      type: VarianceReasonType,
      args : {varianceReasonId: {type: GraphQLString}},
      resolve: (inventoryItemVariance, args, {loaders}) => loaders.ofbizArray.load(`varianceReasons/find?=${args.varianceReasonId}`)
    },
    physicalInventory: {
      type: PhysicalInventoryType,
      args : {physicalInventoryId: {type: GraphQLString}},
      resolve: (inventoryItemVariance, args, {loaders}) => loaders.ofbizArray.load(`physicalInventorys/find?=${args.physicalInventoryId}`)
    },
    comments: {type: GraphQLString},
    quantityOnHandVar: {type: GraphQLFloat},
    availableToPromiseVar: {type: GraphQLFloat}
  })
});

export {InventoryItemVariance};
    