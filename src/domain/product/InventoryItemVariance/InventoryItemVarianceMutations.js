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
import {InventoryItemVarianceInputType} from '../../product/InventoryItemVariance/InventoryItemVarianceInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createInventoryItemVariance = {
  type: GraphQLString,
  description: 'mutation for ofbiz createInventoryItemVariance method',
  args:{inventoryItemVarianceToBeAdded: {type: InventoryItemVarianceInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/inventoryItem/inventoryItemVariances/add?`, args.inventoryItemVarianceToBeAdded, req);
  }
};
export {createInventoryItemVariance};


const deleteInventoryItemVarianceByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteInventoryItemVarianceByIdUpdated method',
  args:{inventoryItemVarianceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/inventoryItem/inventoryItemVariances/${args.inventoryItemVarianceId}?`, null, req);
  }
};
export {deleteInventoryItemVarianceByIdUpdated};


const updateInventoryItemVariance = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateInventoryItemVariance method',
  args:{inventoryItemVarianceToBeUpdated: {type: InventoryItemVarianceInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/inventoryItem/inventoryItemVariances/${args.nullVal}?`, args.inventoryItemVarianceToBeUpdated, req);
  }
};
export {updateInventoryItemVariance};
