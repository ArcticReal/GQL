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
import {InventoryItemTypeAttrInputType} from '../../product/InventoryItemTypeAttr/InventoryItemTypeAttrInputType.js';
import {InventoryItemTypeAttrResponseType} from '../../product/InventoryItemTypeAttr/InventoryItemTypeAttrResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createInventoryItemTypeAttr = {
  type: InventoryItemTypeAttrResponseType,
  description: 'mutation for ofbiz createInventoryItemTypeAttr method',
  args:{inventoryItemTypeAttrToBeAdded: {type: InventoryItemTypeAttrInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/inventoryItem/inventoryItemTypeAttrs/add?`, args.inventoryItemTypeAttrToBeAdded, req);
  }
};
export {createInventoryItemTypeAttr};


const updateInventoryItemTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateInventoryItemTypeAttr method',
  args:{inventoryItemTypeAttrToBeUpdated: {type: InventoryItemTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/inventoryItem/inventoryItemTypeAttrs/${args.attrName}?`, args.inventoryItemTypeAttrToBeUpdated, req);
  }
};
export {updateInventoryItemTypeAttr};


const deleteInventoryItemTypeAttrByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteInventoryItemTypeAttrByIdUpdated method',
  args:{inventoryItemTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/inventoryItem/inventoryItemTypeAttrs/${args.inventoryItemTypeAttrId}?`, null, req);
  }
};
export {deleteInventoryItemTypeAttrByIdUpdated};
