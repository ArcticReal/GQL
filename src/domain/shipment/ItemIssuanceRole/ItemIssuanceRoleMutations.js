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
import {ItemIssuanceRoleResponseType} from '../../shipment/ItemIssuanceRole/ItemIssuanceRoleResponseType.js';
import {ItemIssuanceRoleInputType} from '../../shipment/ItemIssuanceRole/ItemIssuanceRoleInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createItemIssuanceRole = {
  type: ItemIssuanceRoleResponseType,
  description: 'mutation for ofbiz createItemIssuanceRole method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/itemIssuance/itemIssuanceRoles/add?`, null, req);
  }
};
export {createItemIssuanceRole};


const deleteItemIssuanceRoleByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteItemIssuanceRoleByIdUpdated method',
  args:{itemIssuanceRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/itemIssuance/itemIssuanceRoles/${args.itemIssuanceRoleId}?`, null, req);
  }
};
export {deleteItemIssuanceRoleByIdUpdated};


const updateItemIssuanceRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateItemIssuanceRole method',
  args:{itemIssuanceRoleToBeUpdated: {type: ItemIssuanceRoleInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/itemIssuance/itemIssuanceRoles/${args.roleTypeId}?`, args.itemIssuanceRoleToBeUpdated, req);
  }
};
export {updateItemIssuanceRole};
