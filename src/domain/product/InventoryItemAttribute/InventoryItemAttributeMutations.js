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
import {InventoryItemAttributeInputType} from '../../product/InventoryItemAttribute/InventoryItemAttributeInputType.js';
import {InventoryItemAttributeResponseType} from '../../product/InventoryItemAttribute/InventoryItemAttributeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createInventoryItemAttribute = {
  type: InventoryItemAttributeResponseType,
  description: 'mutation for ofbiz createInventoryItemAttribute method',
  args:{inventoryItemAttributeToBeAdded: {type: InventoryItemAttributeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/inventoryItem/inventoryItemAttributes/add?`, args.inventoryItemAttributeToBeAdded, req);
  }
};
export {createInventoryItemAttribute};


const updateInventoryItemAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateInventoryItemAttribute method',
  args:{inventoryItemAttributeToBeUpdated: {type: InventoryItemAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/inventoryItem/inventoryItemAttributes/${args.attrName}?`, args.inventoryItemAttributeToBeUpdated, req);
  }
};
export {updateInventoryItemAttribute};


const deleteInventoryItemAttributeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteInventoryItemAttributeByIdUpdated method',
  args:{inventoryItemAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/inventoryItem/inventoryItemAttributes/${args.inventoryItemAttributeId}?`, null, req);
  }
};
export {deleteInventoryItemAttributeByIdUpdated};
