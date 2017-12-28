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
import {InventoryItemDetailInputType} from '../../product/InventoryItemDetail/InventoryItemDetailInputType.js';
import {InventoryItemDetailResponseType} from '../../product/InventoryItemDetail/InventoryItemDetailResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createInventoryItemDetail = {
  type: InventoryItemDetailResponseType,
  description: 'mutation for ofbiz createInventoryItemDetail method',
  args:{inventoryItemDetailToBeAdded: {type: InventoryItemDetailInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/inventoryItem/inventoryItemDetails/add?`, args.inventoryItemDetailToBeAdded, req);
  }
};
export {createInventoryItemDetail};


const deleteInventoryItemDetailByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteInventoryItemDetailByIdUpdated method',
  args:{inventoryItemDetailId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/inventoryItem/inventoryItemDetails/${args.inventoryItemDetailId}?`, null, req);
  }
};
export {deleteInventoryItemDetailByIdUpdated};


const updateInventoryItemDetail = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateInventoryItemDetail method',
  args:{inventoryItemDetailToBeUpdated: {type: InventoryItemDetailInputType},inventoryItemDetailSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/inventoryItem/inventoryItemDetails/${args.inventoryItemDetailSeqId}?`, args.inventoryItemDetailToBeUpdated, req);
  }
};
export {updateInventoryItemDetail};
