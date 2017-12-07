
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {InventoryItemLabelApplType} from '../product/InventoryItemLabelApplType.js';
import {InventoryItemLabelTypeType} from '../product/InventoryItemLabelTypeType.js';


const InventoryItemLabelType = new GraphQLObjectType({
  name: 'InventoryItemLabelType',
  description: 'Type for InventoryItemLabel in product',

  fields: () => ({
    inventoryItemLabelId: {type: GraphQLString},
    inventoryItemLabelType: {
      type: InventoryItemLabelTypeType,
      args : {inventoryItemLabelTypeId: {type: GraphQLString}},
      resolve: (inventoryItemLabel, args, {loaders}) => loaders.ofbiz.load(`inventoryItemLabelTypes/find?inventoryItemLabelTypeId=${inventoryItemLabel.inventoryItemLabelTypeId}`)
    },
    description: {type: GraphQLString},
    inventoryItemLabelAppl: {
      type: new GraphQLList(InventoryItemLabelApplType),
      args : {inventoryItemLabelId: {type: GraphQLString}},
      resolve: (inventoryItemLabel, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemLabelAppls/find?inventoryItemLabelId=${inventoryItemLabel.inventoryItemLabelId}`)
    }
  })
});

export {InventoryItemLabelType};
    