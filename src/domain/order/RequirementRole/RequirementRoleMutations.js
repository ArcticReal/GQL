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


const createRequirementRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz createRequirementRole method',
  args:{requirementRoleToBeAdded: {type: RequirementRoleInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/requirement/requirementRoles/add?`, args.requirementRoleToBeAdded, req);
  }
};
export {createRequirementRole};


const deleteRequirementRoleByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteRequirementRoleByIdUpdated method',
  args:{requirementRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/requirement/requirementRoles/${args.requirementRoleId}?`, null, req);
  }
};
export {deleteRequirementRoleByIdUpdated};


const updateRequirementRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateRequirementRole method',
  args:{requirementRoleToBeUpdated: {type: RequirementRoleInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/requirement/requirementRoles/${args.roleTypeId}?`, args.requirementRoleToBeUpdated, req);
  }
};
export {updateRequirementRole};
