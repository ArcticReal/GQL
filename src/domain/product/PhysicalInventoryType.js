
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {AcctgTransType} from '../accounting/AcctgTransType.js';
import {InventoryItemDetailType} from '../product/InventoryItemDetailType.js';
import {InventoryItemVarianceType} from '../product/InventoryItemVarianceType.js';


const PhysicalInventoryType = new GraphQLObjectType({
  name: 'PhysicalInventoryType',
  description: 'Type for PhysicalInventory in product',

  fields: () => ({
    physicalInventoryId: {type: GraphQLString},
    physicalInventoryDate: {type: GraphQLString},
    generalComments: {type: GraphQLString},
    partyId: {type: GraphQLString},
    inventoryItemDetail: {
      type: new GraphQLList(InventoryItemDetailType),
      args : {physicalInventoryId: {type: GraphQLString}},
      resolve: (physicalInventory, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemDetails/find?physicalInventoryId=${physicalInventory.physicalInventoryId}`)
    },
    inventoryItemVariance: {
      type: new GraphQLList(InventoryItemVarianceType),
      args : {physicalInventoryId: {type: GraphQLString}},
      resolve: (physicalInventory, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemVariances/find?physicalInventoryId=${physicalInventory.physicalInventoryId}`)
    },
    acctgTrans: {
      type: new GraphQLList(AcctgTransType),
      args : {physicalInventoryId: {type: GraphQLString}},
      resolve: (physicalInventory, args, {loaders}) => loaders.ofbizArray.load(`acctgTranss/find?physicalInventoryId=${physicalInventory.physicalInventoryId}`)
    }
  })
});

export {PhysicalInventoryType};
    