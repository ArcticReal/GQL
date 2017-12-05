
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
import {StatusItem} from '../product/StatusItem.js';
import {UserLogin} from '../product/UserLogin.js';


const InventoryItemStatus = new GraphQLObjectType({
  name: 'InventoryItemStatusType',
  description: 'Type for InventoryItemStatus in product',

  fields: () => ({
    inventoryItem: {
      type: InventoryItemType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (inventoryItemStatus, args, {loaders}) => loaders.ofbizArray.load(`inventoryItems/find?=${args.inventoryItemId}`)
    },
    ownerPartyId: {type: GraphQLString},
    status: {
      type: StatusItemType,
      args : {statusId: {type: GraphQLString}},
      resolve: (inventoryItemStatus, args, {loaders}) => loaders.ofbizArray.load(`statusItems/find?=${args.statusId}`)
    },
    productId: {type: GraphQLString},
    statusDatetime: {type: GraphQLString},
    changeByUserLogin: {
      type: UserLoginType,
      args : {changeByUserLoginId: {type: GraphQLString}},
      resolve: (inventoryItemStatus, args, {loaders}) => loaders.ofbizArray.load(`userLogins/find?userLoginId=${args.changeByUserLoginId}`)
    },
    statusEndDatetime: {type: GraphQLString}
  })
});

export {InventoryItemStatus};
    