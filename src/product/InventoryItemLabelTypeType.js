
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


const InventoryItemLabelType = new GraphQLObjectType({
  name: 'InventoryItemLabelTypeType',
  description: 'Type for InventoryItemLabelType in product',

  fields: () => ({
    parentType: {
      type: InventoryItemLabelTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (inventoryItemLabelType, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemLabelTypes/find?inventoryItemLabelTypeId=${args.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    inventoryItemLabelTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {InventoryItemLabelType};
    