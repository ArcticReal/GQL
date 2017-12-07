
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


const InventoryItemAttributeType = new GraphQLObjectType({
  name: 'InventoryItemAttributeType',
  description: 'Type for InventoryItemAttribute in product',

  fields: () => ({
    inventoryItem: {
      type: InventoryItemType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (inventoryItemAttribute, args, {loaders}) => loaders.ofbiz.load(`inventoryItems/find?inventoryItemId=${inventoryItemAttribute.inventoryItemId}`)
    },
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLInt},
    attrName: {type: GraphQLString}
  })
});

export {InventoryItemAttributeType};
    