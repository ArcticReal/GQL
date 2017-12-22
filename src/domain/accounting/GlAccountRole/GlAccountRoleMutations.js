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
import {GlAccountRoleInputType} from '../../accounting/GlAccountRole/GlAccountRoleInputType.js';
import {GlAccountRoleResponseType} from '../../accounting/GlAccountRole/GlAccountRoleResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createGlAccountRole = {
  type: GlAccountRoleResponseType,
  description: 'mutation for ofbiz createGlAccountRole method',
  args:{glAccountRoleToBeAdded: {type: GlAccountRoleInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/glAccount/glAccountRoles/add?`, args.glAccountRoleToBeAdded, req);
  }
};
export {createGlAccountRole};


const deleteGlAccountRoleByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGlAccountRoleByIdUpdated method',
  args:{glAccountRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/glAccount/glAccountRoles/${args.glAccountRoleId}?`, null, req);
  }
};
export {deleteGlAccountRoleByIdUpdated};


const updateGlAccountRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlAccountRole method',
  args:{glAccountRoleToBeUpdated: {type: GlAccountRoleInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/glAccount/glAccountRoles/${args.roleTypeId}?`, args.glAccountRoleToBeUpdated, req);
  }
};
export {updateGlAccountRole};
