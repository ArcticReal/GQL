
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
import {InventoryItemLabelType} from '../product/InventoryItemLabel.js';
import {InventoryItemLabelTypeType} from '../product/InventoryItemLabelType.js';


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
    




const InventoryItemLabelApplInputType = new GraphQLInputObjectType({
  name: 'InventoryItemLabelApplInputType',
  description: 'input type for InventoryItemLabelAppl in product',

  fields: () => ({
    inventoryItemId: {type: GraphQLString},
    inventoryItemLabelId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    inventoryItemLabelTypeId: {type: GraphQLString}
  })
});

export {InventoryItemLabelApplInputType};
    