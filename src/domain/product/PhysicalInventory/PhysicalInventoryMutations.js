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


const createPhysicalInventory = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPhysicalInventory method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/physicalInventorys/add?`, null, req);
  }
};
export {createPhysicalInventory};


const updatePhysicalInventory = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePhysicalInventory method',
  args:{physicalInventoryToBeUpdated: {type: PhysicalInventoryInputType},physicalInventoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/physicalInventorys/${args.physicalInventoryId}?`, args.physicalInventoryToBeUpdated, req);
  }
};
export {updatePhysicalInventory};


const deletePhysicalInventoryByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePhysicalInventoryByIdUpdated method',
  args:{physicalInventoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/physicalInventorys/${args.physicalInventoryId}?`, null, req);
  }
};
export {deletePhysicalInventoryByIdUpdated};
