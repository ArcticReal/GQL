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
import {PaymentInputType} from '../../accounting/Payment/PaymentInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPayment = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPayment method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payments/add?`, null, req);
  }
};
export {createPayment};


const updatePayment = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePayment method',
  args:{paymentToBeUpdated: {type: PaymentInputType},paymentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payments/${args.paymentId}?`, args.paymentToBeUpdated, req);
  }
};
export {updatePayment};


const deletePaymentByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePaymentByIdUpdated method',
  args:{paymentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payments/${args.paymentId}?`, null, req);
  }
};
export {deletePaymentByIdUpdated};
