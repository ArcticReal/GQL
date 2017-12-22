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
import {PicklistRoleInputType} from '../../shipment/PicklistRole/PicklistRoleInputType.js';
import {PicklistRoleResponseType} from '../../shipment/PicklistRole/PicklistRoleResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPicklistRole = {
  type: PicklistRoleResponseType,
  description: 'mutation for ofbiz createPicklistRole method',
  args:{picklistRoleToBeAdded: {type: PicklistRoleInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/picklist/picklistRoles/add?`, args.picklistRoleToBeAdded, req);
  }
};
export {createPicklistRole};


const deletePicklistRoleByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePicklistRoleByIdUpdated method',
  args:{picklistRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/picklist/picklistRoles/${args.picklistRoleId}?`, null, req);
  }
};
export {deletePicklistRoleByIdUpdated};


const updatePicklistRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePicklistRole method',
  args:{picklistRoleToBeUpdated: {type: PicklistRoleInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/picklist/picklistRoles/${args.roleTypeId}?`, args.picklistRoleToBeUpdated, req);
  }
};
export {updatePicklistRole};
