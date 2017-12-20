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
import {RequirementRoleInputType} from '../../order/RequirementRole/RequirementRoleInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createRequirementRole = {
  type: ResopnseType,
  description: 'mutation for ofbiz createRequirementRole method',
  args:{requirementRoleToBeAdded: {type: RequirementRoleInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/requirement/requirementRoles/add?`, args.requirementRoleToBeAdded, req);
  }
};
export {createRequirementRole};


const deleteRequirementRoleByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteRequirementRoleByIdUpdated method',
  args:{requirementRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/requirement/requirementRoles/${args.requirementRoleId}?`, null, req);
  }
};
export {deleteRequirementRoleByIdUpdated};


const updateRequirementRole = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateRequirementRole method',
  args:{requirementRoleToBeUpdated: {type: RequirementRoleInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/requirement/requirementRoles/${args.roleTypeId}?`, args.requirementRoleToBeUpdated, req);
  }
};
export {updateRequirementRole};
