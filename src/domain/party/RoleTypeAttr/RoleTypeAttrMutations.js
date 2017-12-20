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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createRoleTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz createRoleTypeAttr method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/roleType/roleTypeAttrs/add?`, null, req);
  }
};
export {createRoleTypeAttr};


const updateRoleTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateRoleTypeAttr method',
  args:{roleTypeAttrToBeUpdated: {type: RoleTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/roleType/roleTypeAttrs/${args.attrName}?`, args.roleTypeAttrToBeUpdated, req);
  }
};
export {updateRoleTypeAttr};


const deleteRoleTypeAttrByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteRoleTypeAttrByIdUpdated method',
  args:{roleTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/roleType/roleTypeAttrs/${args.roleTypeAttrId}?`, null, req);
  }
};
export {deleteRoleTypeAttrByIdUpdated};
