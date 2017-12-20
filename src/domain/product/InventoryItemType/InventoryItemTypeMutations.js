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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createInventoryItemType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createInventoryItemType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/inventoryItem/inventoryItemTypes/add?`, null, req);
  }
};
export {createInventoryItemType};


const updateInventoryItemType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateInventoryItemType method',
  args:{inventoryItemTypeToBeUpdated: {type: InventoryItemTypeInputType},inventoryItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/inventoryItem/inventoryItemTypes/${args.inventoryItemTypeId}?`, args.inventoryItemTypeToBeUpdated, req);
  }
};
export {updateInventoryItemType};


const deleteInventoryItemTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteInventoryItemTypeByIdUpdated method',
  args:{inventoryItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/inventoryItem/inventoryItemTypes/${args.inventoryItemTypeId}?`, null, req);
  }
};
export {deleteInventoryItemTypeByIdUpdated};
