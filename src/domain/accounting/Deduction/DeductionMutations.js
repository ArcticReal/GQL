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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createDeduction = {
  type: ResopnseType,
  description: 'mutation for ofbiz createDeduction method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/deductions/add?`, null, req);
  }
};
export {createDeduction};


const updateDeduction = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateDeduction method',
  args:{deductionToBeUpdated: {type: DeductionInputType},deductionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/deductions/${args.deductionId}?`, args.deductionToBeUpdated, req);
  }
};
export {updateDeduction};


const deleteDeductionByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteDeductionByIdUpdated method',
  args:{deductionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/deductions/${args.deductionId}?`, null, req);
  }
};
export {deleteDeductionByIdUpdated};
