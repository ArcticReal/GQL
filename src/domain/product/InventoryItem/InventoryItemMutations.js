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
import {InventoryItemInputType} from '../../product/InventoryItem/InventoryItemInputType.js';
import {InventoryItemResponseType} from '../../product/InventoryItem/InventoryItemResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createInventoryItem = {
  type: InventoryItemResponseType,
  description: 'mutation for ofbiz createInventoryItem method',
  args:{inventoryItemToBeAdded: {type: InventoryItemInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/inventoryItems/add?`, args.inventoryItemToBeAdded, req);
  }
};
export {createInventoryItem};


const updateInventoryItem = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateInventoryItem method',
  args:{inventoryItemToBeUpdated: {type: InventoryItemInputType},inventoryItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/inventoryItems/${args.inventoryItemId}?`, args.inventoryItemToBeUpdated, req);
  }
};
export {updateInventoryItem};


const deleteInventoryItemByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteInventoryItemByIdUpdated method',
  args:{inventoryItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/inventoryItems/${args.inventoryItemId}?`, null, req);
  }
};
export {deleteInventoryItemByIdUpdated};
