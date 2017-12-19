
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

import {InventoryItemType} from '../../product/InventoryItem/InventoryItemType.js';


const LotType = new GraphQLObjectType({
  name: 'LotType',
  description: 'Type for Lot in product',

  fields: () => ({
    quantity: {type: GraphQLFloat},
    lotId: {type: GraphQLString},
    creationDate: {type: GraphQLString},
    expirationDate: {type: GraphQLString},
    inventoryItems: {
      type: new GraphQLList(InventoryItemType),
      args : {},
      resolve: (lot, args, {loaders}) => loaders.ofbizArray.load(`product/inventoryItems/find?lotId=${lot.lotId}`)
    }
  })
});

export {LotType};
    