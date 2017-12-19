
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

import {InventoryItemLabelApplType} from '../../product/InventoryItemLabelAppl/InventoryItemLabelApplType.js';
import {InventoryItemLabelTypeType} from '../../product/InventoryItemLabelType/InventoryItemLabelTypeType.js';


const InventoryItemLabelType = new GraphQLObjectType({
  name: 'InventoryItemLabelType',
  description: 'Type for InventoryItemLabel in product',

  fields: () => ({
    inventoryItemLabelId: {type: GraphQLString},
    inventoryItemLabelType: {
      type: InventoryItemLabelTypeType,
      args : {inventoryItemLabelTypeId: {type: GraphQLString}},
      resolve: (inventoryItemLabel, args, {loaders}) => loaders.ofbiz.load(`product/inventoryItem/inventoryItemLabelTypes/find?inventoryItemLabelTypeId=${inventoryItemLabel.inventoryItemLabelTypeId}`)
    },
    description: {type: GraphQLString},
    inventoryItemLabelAppls: {
      type: new GraphQLList(InventoryItemLabelApplType),
      args : {},
      resolve: (inventoryItemLabel, args, {loaders}) => loaders.ofbizArray.load(`product/inventoryItem/inventoryItemLabelAppls/find?inventoryItemLabelId=${inventoryItemLabel.inventoryItemLabelId}`)
    }
  })
});

export {InventoryItemLabelType};
    