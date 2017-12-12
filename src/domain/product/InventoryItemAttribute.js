
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


const InventoryItemAttributeType = new GraphQLObjectType({
  name: 'InventoryItemAttributeType',
  description: 'Type for InventoryItemAttribute in product',

  fields: () => ({
    inventoryItem: {
      type: InventoryItemType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (inventoryItemAttribute, args, {loaders}) => loaders.ofbiz.load(`product/inventoryItems/find?inventoryItemId=${inventoryItemAttribute.inventoryItemId}`)
    },
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {InventoryItemAttributeType};
    




const InventoryItemAttributeInputType = new GraphQLInputObjectType({
  name: 'InventoryItemAttributeInputType',
  description: 'input type for InventoryItemAttribute in product',

  fields: () => ({
    inventoryItemId: {type: GraphQLString},
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {InventoryItemAttributeInputType};
    