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
import {RequirementBudgetAllocationInputType} from '../../order/RequirementBudgetAllocation/RequirementBudgetAllocationInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createRequirementBudgetAllocation = {
  type: ResopnseType,
  description: 'mutation for ofbiz createRequirementBudgetAllocation method',
  args:{requirementBudgetAllocationToBeAdded: {type: RequirementBudgetAllocationInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/requirement/requirementBudgetAllocations/add?`, args.requirementBudgetAllocationToBeAdded, req);
  }
};
export {createRequirementBudgetAllocation};


const updateRequirementBudgetAllocation = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateRequirementBudgetAllocation method',
  args:{requirementBudgetAllocationToBeUpdated: {type: RequirementBudgetAllocationInputType},budgetItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/requirement/requirementBudgetAllocations/${args.budgetItemSeqId}?`, args.requirementBudgetAllocationToBeUpdated, req);
  }
};
export {updateRequirementBudgetAllocation};


const deleteRequirementBudgetAllocationByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteRequirementBudgetAllocationByIdUpdated method',
  args:{requirementBudgetAllocationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/requirement/requirementBudgetAllocations/${args.requirementBudgetAllocationId}?`, null, req);
  }
};
export {deleteRequirementBudgetAllocationByIdUpdated};
