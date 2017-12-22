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
import {PaymentResponseType} from '../../accounting/Payment/PaymentResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPayment = {
  type: PaymentResponseType,
  description: 'mutation for ofbiz createPayment method',
  args:{paymentToBeAdded: {type: PaymentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payments/add?`, args.paymentToBeAdded, req);
  }
};
export {createPayment};


const updatePayment = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePayment method',
  args:{paymentToBeUpdated: {type: PaymentInputType},paymentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payments/${args.paymentId}?`, args.paymentToBeUpdated, req);
  }
};
export {updatePayment};


const deletePaymentByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePaymentByIdUpdated method',
  args:{paymentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payments/${args.paymentId}?`, null, req);
  }
};
export {deletePaymentByIdUpdated};
