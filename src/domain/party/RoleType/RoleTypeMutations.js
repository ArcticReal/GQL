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
import {RoleTypeInputType} from '../../party/RoleType/RoleTypeInputType.js';
import {RoleTypeResponseType} from '../../party/RoleType/RoleTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createRoleType = {
  type: RoleTypeResponseType,
  description: 'mutation for ofbiz createRoleType method',
  args:{roleTypeToBeAdded: {type: RoleTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/roleTypes/add?`, args.roleTypeToBeAdded, req);
  }
};
export {createRoleType};


const updateRoleType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateRoleType method',
  args:{roleTypeToBeUpdated: {type: RoleTypeInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/roleTypes/${args.roleTypeId}?`, args.roleTypeToBeUpdated, req);
  }
};
export {updateRoleType};


const deleteRoleTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteRoleTypeByIdUpdated method',
  args:{roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/roleTypes/${args.roleTypeId}?`, null, req);
  }
};
export {deleteRoleTypeByIdUpdated};
