
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
import {InventoryItemLabel} from '../product/InventoryItemLabel.js';
import {InventoryItemLabelType} from '../product/InventoryItemLabelType.js';


const InventoryItemLabelAppl = new GraphQLObjectType({
  name: 'InventoryItemLabelApplType',
  description: 'Type for InventoryItemLabelAppl in product',

  fields: () => ({
    inventoryItem: {
      type: InventoryItemType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (inventoryItemLabelAppl, args, {loaders}) => loaders.ofbizArray.load(`inventoryItems/find?=${args.inventoryItemId}`)
    },
    inventoryItemLabel: {
      type: InventoryItemLabelType,
      args : {inventoryItemLabelId: {type: GraphQLString}},
      resolve: (inventoryItemLabelAppl, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemLabels/find?=${args.inventoryItemLabelId}`)
    },
    sequenceNum: {type: GraphQLInt},
    inventoryItemLabelType: {
      type: InventoryItemLabelTypeType,
      args : {inventoryItemLabelTypeId: {type: GraphQLString}},
      resolve: (inventoryItemLabelAppl, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemLabelTypes/find?=${args.inventoryItemLabelTypeId}`)
    }
  })
});

export {InventoryItemLabelAppl};
    