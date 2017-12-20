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
import {InventoryItemTempResInputType} from '../../product/InventoryItemTempRes/InventoryItemTempResInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createInventoryItemTempRes = {
  type: ResopnseType,
  description: 'mutation for ofbiz createInventoryItemTempRes method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/inventoryItem/inventoryItemTempRess/add?`, null, req);
  }
};
export {createInventoryItemTempRes};


const deleteInventoryItemTempResByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteInventoryItemTempResByIdUpdated method',
  args:{inventoryItemTempResId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/inventoryItem/inventoryItemTempRess/${args.inventoryItemTempResId}?`, null, req);
  }
};
export {deleteInventoryItemTempResByIdUpdated};


const updateInventoryItemTempRes = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateInventoryItemTempRes method',
  args:{inventoryItemTempResToBeUpdated: {type: InventoryItemTempResInputType},visitId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/inventoryItem/inventoryItemTempRess/${args.visitId}?`, args.inventoryItemTempResToBeUpdated, req);
  }
};
export {updateInventoryItemTempRes};
