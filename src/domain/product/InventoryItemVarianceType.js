
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
import {PhysicalInventoryType} from '../product/PhysicalInventoryType.js';
import {AcctgTransType} from '../accounting/AcctgTransType.js';
import {VarianceReasonType} from '../product/VarianceReasonType.js';


const InventoryItemVarianceType = new GraphQLObjectType({
  name: 'InventoryItemVarianceType',
  description: 'Type for InventoryItemVariance in product',

  fields: () => ({
    inventoryItem: {
      type: InventoryItemType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (inventoryItemVariance, args, {loaders}) => loaders.ofbiz.load(`inventoryItems/find?inventoryItemId=${inventoryItemVariance.inventoryItemId}`)
    },
    varianceReason: {
      type: VarianceReasonType,
      args : {varianceReasonId: {type: GraphQLString}},
      resolve: (inventoryItemVariance, args, {loaders}) => loaders.ofbiz.load(`varianceReasons/find?varianceReasonId=${inventoryItemVariance.varianceReasonId}`)
    },
    physicalInventory: {
      type: PhysicalInventoryType,
      args : {physicalInventoryId: {type: GraphQLString}},
      resolve: (inventoryItemVariance, args, {loaders}) => loaders.ofbiz.load(`physicalInventorys/find?physicalInventoryId=${inventoryItemVariance.physicalInventoryId}`)
    },
    comments: {type: GraphQLString},
    quantityOnHandVar: {type: GraphQLFloat},
    availableToPromiseVar: {type: GraphQLFloat},
    acctgTrans: {
      type: new GraphQLList(AcctgTransType),
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (inventoryItemVariance, args, {loaders}) => loaders.ofbizArray.load(`acctgTranss/find?inventoryItemId=${inventoryItemVariance.inventoryItemId}`)
    }
  })
});

export {InventoryItemVarianceType};
    