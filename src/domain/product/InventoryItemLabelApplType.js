
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
import {InventoryItemLabelType} from '../product/InventoryItemLabelType.js';
import {InventoryItemLabelTypeType} from '../product/InventoryItemLabelTypeType.js';


const InventoryItemLabelApplType = new GraphQLObjectType({
  name: 'InventoryItemLabelApplType',
  description: 'Type for InventoryItemLabelAppl in product',

  fields: () => ({
    inventoryItem: {
      type: InventoryItemType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (inventoryItemLabelAppl, args, {loaders}) => loaders.ofbiz.load(`inventoryItems/find?inventoryItemId=${inventoryItemLabelAppl.inventoryItemId}`)
    },
    inventoryItemLabel: {
      type: InventoryItemLabelType,
      args : {inventoryItemLabelId: {type: GraphQLString}},
      resolve: (inventoryItemLabelAppl, args, {loaders}) => loaders.ofbiz.load(`inventoryItemLabels/find?inventoryItemLabelId=${inventoryItemLabelAppl.inventoryItemLabelId}`)
    },
    sequenceNum: {type: GraphQLInt},
    inventoryItemLabelType: {
      type: InventoryItemLabelTypeType,
      args : {inventoryItemLabelTypeId: {type: GraphQLString}},
      resolve: (inventoryItemLabelAppl, args, {loaders}) => loaders.ofbiz.load(`inventoryItemLabelTypes/find?inventoryItemLabelTypeId=${inventoryItemLabelAppl.inventoryItemLabelTypeId}`)
    }
  })
});

export {InventoryItemLabelApplType};
    