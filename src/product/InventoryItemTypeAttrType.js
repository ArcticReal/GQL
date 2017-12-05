
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


const InventoryItemTypeAttr = new GraphQLObjectType({
  name: 'InventoryItemTypeAttrType',
  description: 'Type for InventoryItemTypeAttr in product',

  fields: () => ({
    description: {type: GraphQLString},
    attrName: {type: GraphQLString},
    inventoryItemType: {
      type: InventoryItemTypeType,
      args : {inventoryItemTypeId: {type: GraphQLString}},
      resolve: (inventoryItemTypeAttr, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemTypes/find?=${args.inventoryItemTypeId}`)
    }
  })
});

export {InventoryItemTypeAttr};
    