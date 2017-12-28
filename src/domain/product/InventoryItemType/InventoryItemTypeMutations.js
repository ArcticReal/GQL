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
import {InventoryItemTypeInputType} from '../../product/InventoryItemType/InventoryItemTypeInputType.js';
import {InventoryItemTypeResponseType} from '../../product/InventoryItemType/InventoryItemTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createInventoryItemType = {
  type: InventoryItemTypeResponseType,
  description: 'mutation for ofbiz createInventoryItemType method',
  args:{inventoryItemTypeToBeAdded: {type: InventoryItemTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/inventoryItem/inventoryItemTypes/add?`, args.inventoryItemTypeToBeAdded, req);
  }
};
export {createInventoryItemType};


const updateInventoryItemType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateInventoryItemType method',
  args:{inventoryItemTypeToBeUpdated: {type: InventoryItemTypeInputType},inventoryItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/inventoryItem/inventoryItemTypes/${args.inventoryItemTypeId}?`, args.inventoryItemTypeToBeUpdated, req);
  }
};
export {updateInventoryItemType};


const deleteInventoryItemTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteInventoryItemTypeByIdUpdated method',
  args:{inventoryItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/inventoryItem/inventoryItemTypes/${args.inventoryItemTypeId}?`, null, req);
  }
};
export {deleteInventoryItemTypeByIdUpdated};
