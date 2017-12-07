
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {InventoryItemTypeType} from '../product/InventoryItemTypeType.js';


const InventoryItemTypeAttrType = new GraphQLObjectType({
  name: 'InventoryItemTypeAttrType',
  description: 'Type for InventoryItemTypeAttr in product',

  fields: () => ({
    description: {type: GraphQLString},
    attrName: {type: GraphQLString},
    inventoryItemType: {
      type: InventoryItemTypeType,
      args : {inventoryItemTypeId: {type: GraphQLString}},
      resolve: (inventoryItemTypeAttr, args, {loaders}) => loaders.ofbiz.load(`inventoryItemTypes/find?inventoryItemTypeId=${inventoryItemTypeAttr.inventoryItemTypeId}`)
    }
  })
});

export {InventoryItemTypeAttrType};
    