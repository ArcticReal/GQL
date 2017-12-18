
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
import {UserLoginType} from '../login/UserLogin.js';


const InventoryItemStatusType = new GraphQLObjectType({
  name: 'InventoryItemStatusType',
  description: 'Type for InventoryItemStatus in product',

  fields: () => ({
    inventoryItem: {
      type: InventoryItemType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (inventoryItemStatus, args, {loaders}) => loaders.ofbiz.load(`product/inventoryItems/find?inventoryItemId=${inventoryItemStatus.inventoryItemId}`)
    },
    ownerPartyId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    productId: {type: GraphQLString},
    statusDatetime: {type: GraphQLString},
    changeByUserLogin: {
      type: UserLoginType,
      args : {changeByUserLoginId: {type: GraphQLString}},
      resolve: (inventoryItemStatus, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${inventoryItemStatus.changeByUserLoginId}`)
    },
    statusEndDatetime: {type: GraphQLString}
  })
});

export {InventoryItemStatusType};
    




const InventoryItemStatusInputType = new GraphQLInputObjectType({
  name: 'InventoryItemStatusInputType',
  description: 'input type for InventoryItemStatus',

  fields: () => ({
    changeByUserLoginId: {type: GraphQLString},
    inventoryItemId: {type: GraphQLString},
    ownerPartyId: {type: GraphQLString},
    productId: {type: GraphQLString},
    statusDatetime: {type: GraphQLString},
    statusEndDatetime: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {InventoryItemStatusInputType};
    