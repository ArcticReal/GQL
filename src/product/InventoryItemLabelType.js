
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {InventoryItemLabelType} from '../product/InventoryItemLabelType.js';


const InventoryItemLabel = new GraphQLObjectType({
  name: 'InventoryItemLabelType',
  description: 'Type for InventoryItemLabel in product',

  fields: () => ({
    inventoryItemLabelId: {type: GraphQLString},
    inventoryItemLabelType: {
      type: InventoryItemLabelTypeType,
      args : {inventoryItemLabelTypeId: {type: GraphQLString}},
      resolve: (inventoryItemLabel, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemLabelTypes/find?=${args.inventoryItemLabelTypeId}`)
    },
    description: {type: GraphQLString}
  })
});

export {InventoryItemLabel};
    