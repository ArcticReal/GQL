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
import {InventoryItemLabelTypeInputType} from '../../product/InventoryItemLabelType/InventoryItemLabelTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createInventoryItemLabelType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createInventoryItemLabelType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/inventoryItem/inventoryItemLabelTypes/add?`, null, req);
  }
};
export {createInventoryItemLabelType};


const updateInventoryItemLabelType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateInventoryItemLabelType method',
  args:{inventoryItemLabelTypeToBeUpdated: {type: InventoryItemLabelTypeInputType},inventoryItemLabelTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/inventoryItem/inventoryItemLabelTypes/${args.inventoryItemLabelTypeId}?`, args.inventoryItemLabelTypeToBeUpdated, req);
  }
};
export {updateInventoryItemLabelType};


const deleteInventoryItemLabelTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteInventoryItemLabelTypeByIdUpdated method',
  args:{inventoryItemLabelTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/inventoryItem/inventoryItemLabelTypes/${args.inventoryItemLabelTypeId}?`, null, req);
  }
};
export {deleteInventoryItemLabelTypeByIdUpdated};
