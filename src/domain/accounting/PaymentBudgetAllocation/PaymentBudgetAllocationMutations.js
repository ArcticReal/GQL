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
import {PaymentBudgetAllocationResponseType} from '../../accounting/PaymentBudgetAllocation/PaymentBudgetAllocationResponseType.js';
import {PaymentBudgetAllocationInputType} from '../../accounting/PaymentBudgetAllocation/PaymentBudgetAllocationInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPaymentBudgetAllocation = {
  type: PaymentBudgetAllocationResponseType,
  description: 'mutation for ofbiz createPaymentBudgetAllocation method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/budget/paymentBudgetAllocations/add?`, null, req);
  }
};
export {createPaymentBudgetAllocation};


const updatePaymentBudgetAllocation = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePaymentBudgetAllocation method',
  args:{paymentBudgetAllocationToBeUpdated: {type: PaymentBudgetAllocationInputType},budgetItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/budget/paymentBudgetAllocations/${args.budgetItemSeqId}?`, args.paymentBudgetAllocationToBeUpdated, req);
  }
};
export {updatePaymentBudgetAllocation};


const deletePaymentBudgetAllocationByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePaymentBudgetAllocationByIdUpdated method',
  args:{paymentBudgetAllocationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/budget/paymentBudgetAllocations/${args.paymentBudgetAllocationId}?`, null, req);
  }
};
export {deletePaymentBudgetAllocationByIdUpdated};
