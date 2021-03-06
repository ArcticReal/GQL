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
import {RequirementInputType} from '../../order/Requirement/RequirementInputType.js';
import {RequirementResponseType} from '../../order/Requirement/RequirementResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createRequirement = {
  type: RequirementResponseType,
  description: 'mutation for ofbiz createRequirement method',
  args:{requirementToBeAdded: {type: RequirementInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/requirements/add?`, args.requirementToBeAdded, req);
  }
};
export {createRequirement};


const updateRequirement = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateRequirement method',
  args:{requirementToBeUpdated: {type: RequirementInputType},requirementId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/requirements/${args.requirementId}?`, args.requirementToBeUpdated, req);
  }
};
export {updateRequirement};


const deleteRequirementByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteRequirementByIdUpdated method',
  args:{requirementId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/requirements/${args.requirementId}?`, null, req);
  }
};
export {deleteRequirementByIdUpdated};
