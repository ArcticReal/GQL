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
import {InventoryItemStatusInputType} from '../../product/InventoryItemStatus/InventoryItemStatusInputType.js';
import {InventoryItemStatusResponseType} from '../../product/InventoryItemStatus/InventoryItemStatusResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createInventoryItemStatus = {
  type: InventoryItemStatusResponseType,
  description: 'mutation for ofbiz createInventoryItemStatus method',
  args:{inventoryItemStatusToBeAdded: {type: InventoryItemStatusInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/inventoryItem/inventoryItemStatuss/add?`, args.inventoryItemStatusToBeAdded, req);
  }
};
export {createInventoryItemStatus};


const deleteInventoryItemStatusByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteInventoryItemStatusByIdUpdated method',
  args:{inventoryItemStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/inventoryItem/inventoryItemStatuss/${args.inventoryItemStatusId}?`, null, req);
  }
};
export {deleteInventoryItemStatusByIdUpdated};


const updateInventoryItemStatus = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateInventoryItemStatus method',
  args:{inventoryItemStatusToBeUpdated: {type: InventoryItemStatusInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/inventoryItem/inventoryItemStatuss/${args.nullVal}?`, args.inventoryItemStatusToBeUpdated, req);
  }
};
export {updateInventoryItemStatus};
