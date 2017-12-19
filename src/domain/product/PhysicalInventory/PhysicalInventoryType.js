
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

import {AcctgTransType} from '../../accounting/AcctgTrans/AcctgTransType.js';
import {InventoryItemDetailType} from '../../product/InventoryItemDetail/InventoryItemDetailType.js';
import {InventoryItemVarianceType} from '../../product/InventoryItemVariance/InventoryItemVarianceType.js';


const PhysicalInventoryType = new GraphQLObjectType({
  name: 'PhysicalInventoryType',
  description: 'Type for PhysicalInventory in product',

  fields: () => ({
    physicalInventoryId: {type: GraphQLString},
    physicalInventoryDate: {type: GraphQLString},
    generalComments: {type: GraphQLString},
    partyId: {type: GraphQLString},
    inventoryItemDetails: {
      type: new GraphQLList(InventoryItemDetailType),
      args : {},
      resolve: (physicalInventory, args, {loaders}) => loaders.ofbizArray.load(`product/inventoryItem/inventoryItemDetails/find?physicalInventoryId=${physicalInventory.physicalInventoryId}`)
    },
    inventoryItemVariances: {
      type: new GraphQLList(InventoryItemVarianceType),
      args : {},
      resolve: (physicalInventory, args, {loaders}) => loaders.ofbizArray.load(`product/inventoryItem/inventoryItemVariances/find?physicalInventoryId=${physicalInventory.physicalInventoryId}`)
    },
    acctgTranses: {
      type: new GraphQLList(AcctgTransType),
      args : {},
      resolve: (physicalInventory, args, {loaders}) => loaders.ofbizArray.load(`accounting/acctgTranss/find?physicalInventoryId=${physicalInventory.physicalInventoryId}`)
    }
  })
});

export {PhysicalInventoryType};
    