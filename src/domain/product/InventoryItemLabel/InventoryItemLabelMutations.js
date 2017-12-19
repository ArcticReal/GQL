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


const createInventoryItemLabel = {
  type: GraphQLString,
  description: 'mutation for ofbiz createInventoryItemLabel method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/inventoryItem/inventoryItemLabels/add?`, null, req);
  }
};
export {createInventoryItemLabel};


const updateInventoryItemLabel = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateInventoryItemLabel method',
  args:{inventoryItemLabelToBeUpdated: {type: InventoryItemLabelInputType},inventoryItemLabelId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/inventoryItem/inventoryItemLabels/${args.inventoryItemLabelId}?`, args.inventoryItemLabelToBeUpdated, req);
  }
};
export {updateInventoryItemLabel};


const deleteInventoryItemLabelByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteInventoryItemLabelByIdUpdated method',
  args:{inventoryItemLabelId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/inventoryItem/inventoryItemLabels/${args.inventoryItemLabelId}?`, null, req);
  }
};
export {deleteInventoryItemLabelByIdUpdated};
