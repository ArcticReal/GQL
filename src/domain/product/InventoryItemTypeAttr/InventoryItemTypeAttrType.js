
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

import {InventoryItemTypeType} from '../../product/InventoryItemType/InventoryItemTypeType.js';


const InventoryItemTypeAttrType = new GraphQLObjectType({
  name: 'InventoryItemTypeAttrType',
  description: 'Type for InventoryItemTypeAttr in product',

  fields: () => ({
    description: {type: GraphQLString},
    attrName: {type: GraphQLString},
    inventoryItemType: {
      type: InventoryItemTypeType,
      args : {inventoryItemTypeId: {type: GraphQLString}},
      resolve: (inventoryItemTypeAttr, args, {loaders}) => loaders.ofbiz.load(`product/inventoryItem/inventoryItemTypes/find?inventoryItemTypeId=${inventoryItemTypeAttr.inventoryItemTypeId}`)
    }
  })
});

export {InventoryItemTypeAttrType};
    