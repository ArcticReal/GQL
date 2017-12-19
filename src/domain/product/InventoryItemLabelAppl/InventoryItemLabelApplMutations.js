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
import {InventoryItemLabelApplInputType} from '../../product/InventoryItemLabelAppl/InventoryItemLabelApplInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createInventoryItemLabelAppl = {
  type: GraphQLString,
  description: 'mutation for ofbiz createInventoryItemLabelAppl method',
  args:{inventoryItemLabelApplToBeAdded: {type: InventoryItemLabelApplInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/inventoryItem/inventoryItemLabelAppls/add?`, args.inventoryItemLabelApplToBeAdded, req);
  }
};
export {createInventoryItemLabelAppl};


const deleteInventoryItemLabelApplByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteInventoryItemLabelApplByIdUpdated method',
  args:{inventoryItemLabelApplId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/inventoryItem/inventoryItemLabelAppls/${args.inventoryItemLabelApplId}?`, null, req);
  }
};
export {deleteInventoryItemLabelApplByIdUpdated};


const updateInventoryItemLabelAppl = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateInventoryItemLabelAppl method',
  args:{inventoryItemLabelApplToBeUpdated: {type: InventoryItemLabelApplInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/inventoryItem/inventoryItemLabelAppls/${args.nullVal}?`, args.inventoryItemLabelApplToBeUpdated, req);
  }
};
export {updateInventoryItemLabelAppl};
