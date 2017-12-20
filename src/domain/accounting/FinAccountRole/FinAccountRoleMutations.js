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
import {FinAccountRoleInputType} from '../../accounting/FinAccountRole/FinAccountRoleInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFinAccountRole = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFinAccountRole method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/finAccount/finAccountRoles/add?`, null, req);
  }
};
export {createFinAccountRole};


const deleteFinAccountRoleByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteFinAccountRoleByIdUpdated method',
  args:{finAccountRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/finAccount/finAccountRoles/${args.finAccountRoleId}?`, null, req);
  }
};
export {deleteFinAccountRoleByIdUpdated};


const updateFinAccountRole = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFinAccountRole method',
  args:{finAccountRoleToBeUpdated: {type: FinAccountRoleInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/finAccount/finAccountRoles/${args.roleTypeId}?`, args.finAccountRoleToBeUpdated, req);
  }
};
export {updateFinAccountRole};
