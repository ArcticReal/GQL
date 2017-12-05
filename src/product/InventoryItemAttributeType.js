
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


const InventoryItemAttribute = new GraphQLObjectType({
  name: 'InventoryItemAttributeType',
  description: 'Type for InventoryItemAttribute in product',

  fields: () => ({
    inventoryItem: {
      type: InventoryItemType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (inventoryItemAttribute, args, {loaders}) => loaders.ofbizArray.load(`inventoryItems/find?=${args.inventoryItemId}`)
    },
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLInt},
    attrName: {type: GraphQLString}
  })
});

export {InventoryItemAttribute};
    