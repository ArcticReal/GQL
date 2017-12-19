
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
import {PhysicalInventoryType} from '../../product/PhysicalInventory/PhysicalInventoryType.js';
import {AcctgTransType} from '../../accounting/AcctgTrans/AcctgTransType.js';
import {VarianceReasonType} from '../../product/VarianceReason/VarianceReasonType.js';


const InventoryItemVarianceType = new GraphQLObjectType({
  name: 'InventoryItemVarianceType',
  description: 'Type for InventoryItemVariance in product',

  fields: () => ({
    inventoryItem: {
      type: InventoryItemType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (inventoryItemVariance, args, {loaders}) => loaders.ofbiz.load(`product/inventoryItems/find?inventoryItemId=${inventoryItemVariance.inventoryItemId}`)
    },
    varianceReason: {
      type: VarianceReasonType,
      args : {varianceReasonId: {type: GraphQLString}},
      resolve: (inventoryItemVariance, args, {loaders}) => loaders.ofbiz.load(`product/varianceReasons/find?varianceReasonId=${inventoryItemVariance.varianceReasonId}`)
    },
    physicalInventory: {
      type: PhysicalInventoryType,
      args : {physicalInventoryId: {type: GraphQLString}},
      resolve: (inventoryItemVariance, args, {loaders}) => loaders.ofbiz.load(`product/physicalInventorys/find?physicalInventoryId=${inventoryItemVariance.physicalInventoryId}`)
    },
    comments: {type: GraphQLString},
    quantityOnHandVar: {type: GraphQLFloat},
    availableToPromiseVar: {type: GraphQLFloat},
    acctgTranses: {
      type: new GraphQLList(AcctgTransType),
      args : {},
      resolve: (inventoryItemVariance, args, {loaders}) => loaders.ofbizArray.load(`accounting/acctgTranss/find?inventoryItemId=${inventoryItemVariance.inventoryItemId}`)
    }
  })
});

export {InventoryItemVarianceType};
    