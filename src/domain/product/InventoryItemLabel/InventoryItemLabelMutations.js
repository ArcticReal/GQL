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
import {InventoryItemLabelInputType} from '../../product/InventoryItemLabel/InventoryItemLabelInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createInventoryItemLabel = {
  type: ResopnseType,
  description: 'mutation for ofbiz createInventoryItemLabel method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/inventoryItem/inventoryItemLabels/add?`, null, req);
  }
};
export {createInventoryItemLabel};


const updateInventoryItemLabel = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateInventoryItemLabel method',
  args:{inventoryItemLabelToBeUpdated: {type: InventoryItemLabelInputType},inventoryItemLabelId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/inventoryItem/inventoryItemLabels/${args.inventoryItemLabelId}?`, args.inventoryItemLabelToBeUpdated, req);
  }
};
export {updateInventoryItemLabel};


const deleteInventoryItemLabelByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteInventoryItemLabelByIdUpdated method',
  args:{inventoryItemLabelId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/inventoryItem/inventoryItemLabels/${args.inventoryItemLabelId}?`, null, req);
  }
};
export {deleteInventoryItemLabelByIdUpdated};
