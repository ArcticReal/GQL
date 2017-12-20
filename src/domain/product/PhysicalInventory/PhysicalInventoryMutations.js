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
import {PhysicalInventoryInputType} from '../../product/PhysicalInventory/PhysicalInventoryInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPhysicalInventory = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPhysicalInventory method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/physicalInventorys/add?`, null, req);
  }
};
export {createPhysicalInventory};


const updatePhysicalInventory = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePhysicalInventory method',
  args:{physicalInventoryToBeUpdated: {type: PhysicalInventoryInputType},physicalInventoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/physicalInventorys/${args.physicalInventoryId}?`, args.physicalInventoryToBeUpdated, req);
  }
};
export {updatePhysicalInventory};


const deletePhysicalInventoryByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePhysicalInventoryByIdUpdated method',
  args:{physicalInventoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/physicalInventorys/${args.physicalInventoryId}?`, null, req);
  }
};
export {deletePhysicalInventoryByIdUpdated};
