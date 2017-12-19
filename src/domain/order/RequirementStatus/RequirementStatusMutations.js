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
import {RequirementStatusInputType} from '../../order/RequirementStatus/RequirementStatusInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createRequirementStatus = {
  type: GraphQLString,
  description: 'mutation for ofbiz createRequirementStatus method',
  args:{requirementStatusToBeAdded: {type: RequirementStatusInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/requirement/requirementStatuss/add?`, args.requirementStatusToBeAdded, req);
  }
};
export {createRequirementStatus};


const updateRequirementStatus = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateRequirementStatus method',
  args:{requirementStatusToBeUpdated: {type: RequirementStatusInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/requirement/requirementStatuss/${args.nullVal}?`, args.requirementStatusToBeUpdated, req);
  }
};
export {updateRequirementStatus};


const deleteRequirementStatusByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteRequirementStatusByIdUpdated method',
  args:{requirementStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/requirement/requirementStatuss/${args.requirementStatusId}?`, null, req);
  }
};
export {deleteRequirementStatusByIdUpdated};
