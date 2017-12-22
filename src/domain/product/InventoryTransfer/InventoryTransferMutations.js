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
import {InventoryTransferResponseType} from '../../product/InventoryTransfer/InventoryTransferResponseType.js';
import {InventoryTransferInputType} from '../../product/InventoryTransfer/InventoryTransferInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createInventoryTransfer = {
  type: InventoryTransferResponseType,
  description: 'mutation for ofbiz createInventoryTransfer method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/inventoryTransfers/add?`, null, req);
  }
};
export {createInventoryTransfer};


const updateInventoryTransfer = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateInventoryTransfer method',
  args:{inventoryTransferToBeUpdated: {type: InventoryTransferInputType},inventoryTransferId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/inventoryTransfers/${args.inventoryTransferId}?`, args.inventoryTransferToBeUpdated, req);
  }
};
export {updateInventoryTransfer};


const deleteInventoryTransferByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteInventoryTransferByIdUpdated method',
  args:{inventoryTransferId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/inventoryTransfers/${args.inventoryTransferId}?`, null, req);
  }
};
export {deleteInventoryTransferByIdUpdated};
