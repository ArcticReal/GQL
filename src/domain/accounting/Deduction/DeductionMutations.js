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
import {DeductionInputType} from '../../accounting/Deduction/DeductionInputType.js';
import {DeductionResponseType} from '../../accounting/Deduction/DeductionResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createDeduction = {
  type: DeductionResponseType,
  description: 'mutation for ofbiz createDeduction method',
  args:{deductionToBeAdded: {type: DeductionInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/deductions/add?`, args.deductionToBeAdded, req);
  }
};
export {createDeduction};


const updateDeduction = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateDeduction method',
  args:{deductionToBeUpdated: {type: DeductionInputType},deductionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/deductions/${args.deductionId}?`, args.deductionToBeUpdated, req);
  }
};
export {updateDeduction};


const deleteDeductionByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteDeductionByIdUpdated method',
  args:{deductionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/deductions/${args.deductionId}?`, null, req);
  }
};
export {deleteDeductionByIdUpdated};
