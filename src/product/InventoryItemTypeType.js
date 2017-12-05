
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


const InventoryItemType = new GraphQLObjectType({
  name: 'InventoryItemTypeType',
  description: 'Type for InventoryItemType in product',

  fields: () => ({
    parentType: {
      type: InventoryItemTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (inventoryItemType, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemTypes/find?inventoryItemTypeId=${args.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    inventoryItemTypeId: {type: GraphQLString}
  })
});

export {InventoryItemType};
    