
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

import {InventoryItemTypeType} from '../product/InventoryItemType.js';


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
    




const InventoryItemTypeAttrInputType = new GraphQLInputObjectType({
  name: 'InventoryItemTypeAttrInputType',
  description: 'input type for InventoryItemTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    inventoryItemTypeId: {type: GraphQLString}
  })
});

export {InventoryItemTypeAttrInputType};
    