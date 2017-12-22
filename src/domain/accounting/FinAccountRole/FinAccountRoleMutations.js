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
import {FinAccountRoleResponseType} from '../../accounting/FinAccountRole/FinAccountRoleResponseType.js';
import {FinAccountRoleInputType} from '../../accounting/FinAccountRole/FinAccountRoleInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFinAccountRole = {
  type: FinAccountRoleResponseType,
  description: 'mutation for ofbiz createFinAccountRole method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/finAccount/finAccountRoles/add?`, null, req);
  }
};
export {createFinAccountRole};


const deleteFinAccountRoleByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFinAccountRoleByIdUpdated method',
  args:{finAccountRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/finAccount/finAccountRoles/${args.finAccountRoleId}?`, null, req);
  }
};
export {deleteFinAccountRoleByIdUpdated};


const updateFinAccountRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFinAccountRole method',
  args:{finAccountRoleToBeUpdated: {type: FinAccountRoleInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/finAccount/finAccountRoles/${args.roleTypeId}?`, args.finAccountRoleToBeUpdated, req);
  }
};
export {updateFinAccountRole};
