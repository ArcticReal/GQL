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
import {RoleTypeAttrInputType} from '../../party/RoleTypeAttr/RoleTypeAttrInputType.js';
import {RoleTypeAttrResponseType} from '../../party/RoleTypeAttr/RoleTypeAttrResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createRoleTypeAttr = {
  type: RoleTypeAttrResponseType,
  description: 'mutation for ofbiz createRoleTypeAttr method',
  args:{roleTypeAttrToBeAdded: {type: RoleTypeAttrInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/roleType/roleTypeAttrs/add?`, args.roleTypeAttrToBeAdded, req);
  }
};
export {createRoleTypeAttr};


const updateRoleTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateRoleTypeAttr method',
  args:{roleTypeAttrToBeUpdated: {type: RoleTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/roleType/roleTypeAttrs/${args.attrName}?`, args.roleTypeAttrToBeUpdated, req);
  }
};
export {updateRoleTypeAttr};


const deleteRoleTypeAttrByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteRoleTypeAttrByIdUpdated method',
  args:{roleTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/roleType/roleTypeAttrs/${args.roleTypeAttrId}?`, null, req);
  }
};
export {deleteRoleTypeAttrByIdUpdated};
