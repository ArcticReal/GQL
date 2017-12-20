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
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../framework/helpTypes.js';


const createInventoryItemAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz createInventoryItemAttribute method',
  args:{inventoryItemId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productInventory/createInventoryItemAttribute?inventoryItemId=${args.inventoryItemId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {createInventoryItemAttribute};


const createInventoryItemTempRes = {
  type: ResopnseType,
  description: 'mutation for ofbiz createInventoryItemTempRes method',
  args:{visitId: {type: GraphQLString},productId: {type: GraphQLString},productStoreId: {type: GraphQLString},reservedDate: {type: GraphQLString},quantity: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productInventory/createInventoryItemTempRes?visitId=${args.visitId}productId=${args.productId}productStoreId=${args.productStoreId}reservedDate=${args.reservedDate}quantity=${args.quantity}`, null, req);
  }
};
export {createInventoryItemTempRes};


const createInventoryItemTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz createInventoryItemTypeAttr method',
  args:{attrName: {type: GraphQLString},inventoryItemTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productInventory/createInventoryItemTypeAttr?attrName=${args.attrName}inventoryItemTypeId=${args.inventoryItemTypeId}description=${args.description}`, null, req);
  }
};
export {createInventoryItemTypeAttr};


const deleteInventoryItemAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteInventoryItemAttribute method',
  args:{inventoryItemId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productInventory/deleteInventoryItemAttribute?inventoryItemId=${args.inventoryItemId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteInventoryItemAttribute};


const deleteInventoryItemTempRes = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteInventoryItemTempRes method',
  args:{visitId: {type: GraphQLString},productId: {type: GraphQLString},productStoreId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productInventory/deleteInventoryItemTempRes?visitId=${args.visitId}productId=${args.productId}productStoreId=${args.productStoreId}`, null, req);
  }
};
export {deleteInventoryItemTempRes};


const deleteInventoryItemTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteInventoryItemTypeAttr method',
  args:{attrName: {type: GraphQLString},inventoryItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productInventory/deleteInventoryItemTypeAttr?attrName=${args.attrName}inventoryItemTypeId=${args.inventoryItemTypeId}`, null, req);
  }
};
export {deleteInventoryItemTypeAttr};


const updateInventoryItemAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateInventoryItemAttribute method',
  args:{inventoryItemId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productInventory/updateInventoryItemAttribute?inventoryItemId=${args.inventoryItemId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {updateInventoryItemAttribute};


const updateInventoryItemTempRes = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateInventoryItemTempRes method',
  args:{visitId: {type: GraphQLString},productId: {type: GraphQLString},productStoreId: {type: GraphQLString},reservedDate: {type: GraphQLString},quantity: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productInventory/updateInventoryItemTempRes?visitId=${args.visitId}productId=${args.productId}productStoreId=${args.productStoreId}reservedDate=${args.reservedDate}quantity=${args.quantity}`, null, req);
  }
};
export {updateInventoryItemTempRes};


const updateInventoryItemTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateInventoryItemTypeAttr method',
  args:{attrName: {type: GraphQLString},inventoryItemTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productInventory/updateInventoryItemTypeAttr?attrName=${args.attrName}inventoryItemTypeId=${args.inventoryItemTypeId}description=${args.description}`, null, req);
  }
};
export {updateInventoryItemTypeAttr};
