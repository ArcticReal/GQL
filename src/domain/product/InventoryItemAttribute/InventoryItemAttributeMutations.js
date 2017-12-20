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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createInventoryItemAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz createInventoryItemAttribute method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/inventoryItem/inventoryItemAttributes/add?`, null, req);
  }
};
export {createInventoryItemAttribute};


const updateInventoryItemAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateInventoryItemAttribute method',
  args:{inventoryItemAttributeToBeUpdated: {type: InventoryItemAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/inventoryItem/inventoryItemAttributes/${args.attrName}?`, args.inventoryItemAttributeToBeUpdated, req);
  }
};
export {updateInventoryItemAttribute};


const deleteInventoryItemAttributeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteInventoryItemAttributeByIdUpdated method',
  args:{inventoryItemAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/inventoryItem/inventoryItemAttributes/${args.inventoryItemAttributeId}?`, null, req);
  }
};
export {deleteInventoryItemAttributeByIdUpdated};
