
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

import {InventoryItemLabelApplType} from '../product/InventoryItemLabelAppl.js';
import {InventoryItemLabelTypeType} from '../product/InventoryItemLabelType.js';


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
    




const InventoryItemLabelInputType = new GraphQLInputObjectType({
  name: 'InventoryItemLabelInputType',
  description: 'input type for InventoryItemLabel',

  fields: () => ({
    description: {type: GraphQLString},
    inventoryItemLabelId: {type: GraphQLString},
    inventoryItemLabelTypeId: {type: GraphQLString}
  })
});

export {InventoryItemLabelInputType};
    