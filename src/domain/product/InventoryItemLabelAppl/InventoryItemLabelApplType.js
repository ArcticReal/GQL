
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
import {InventoryItemLabelType} from '../../product/InventoryItemLabel/InventoryItemLabelType.js';
import {InventoryItemLabelTypeType} from '../../product/InventoryItemLabelType/InventoryItemLabelTypeType.js';


const InventoryItemLabelApplType = new GraphQLObjectType({
  name: 'InventoryItemLabelApplType',
  description: 'Type for InventoryItemLabelAppl in product',

  fields: () => ({
    inventoryItem: {
      type: InventoryItemType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (inventoryItemLabelAppl, args, {loaders}) => loaders.ofbiz.load(`product/inventoryItems/find?inventoryItemId=${inventoryItemLabelAppl.inventoryItemId}`)
    },
    inventoryItemLabel: {
      type: InventoryItemLabelType,
      args : {inventoryItemLabelId: {type: GraphQLString}},
      resolve: (inventoryItemLabelAppl, args, {loaders}) => loaders.ofbiz.load(`product/inventoryItem/inventoryItemLabels/find?inventoryItemLabelId=${inventoryItemLabelAppl.inventoryItemLabelId}`)
    },
    sequenceNum: {type: GraphQLInt},
    inventoryItemLabelType: {
      type: InventoryItemLabelTypeType,
      args : {inventoryItemLabelTypeId: {type: GraphQLString}},
      resolve: (inventoryItemLabelAppl, args, {loaders}) => loaders.ofbiz.load(`product/inventoryItem/inventoryItemLabelTypes/find?inventoryItemLabelTypeId=${inventoryItemLabelAppl.inventoryItemLabelTypeId}`)
    }
  })
});

export {InventoryItemLabelApplType};
    