
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


const LotType = new GraphQLObjectType({
  name: 'LotType',
  description: 'Type for Lot in product',

  fields: () => ({
    quantity: {type: GraphQLFloat},
    lotId: {type: GraphQLString},
    creationDate: {type: GraphQLString},
    expirationDate: {type: GraphQLString},
    inventoryItem: {
      type: new GraphQLList(InventoryItemType),
      args : {lotId: {type: GraphQLString}},
      resolve: (lot, args, {loaders}) => loaders.ofbizArray.load(`inventoryItems/find?lotId=${lot.lotId}`)
    }
  })
});

export {LotType};
    