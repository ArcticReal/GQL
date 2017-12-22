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
import {PaymentGatewaySagePayResponseType} from '../../accounting/PaymentGatewaySagePay/PaymentGatewaySagePayResponseType.js';
import {PaymentGatewaySagePayInputType} from '../../accounting/PaymentGatewaySagePay/PaymentGatewaySagePayInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPaymentGatewaySagePay = {
  type: PaymentGatewaySagePayResponseType,
  description: 'mutation for ofbiz createPaymentGatewaySagePay method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentGatewaySagePays/add?`, null, req);
  }
};
export {createPaymentGatewaySagePay};


const updatePaymentGatewaySagePay = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePaymentGatewaySagePay method',
  args:{paymentGatewaySagePayToBeUpdated: {type: PaymentGatewaySagePayInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentGatewaySagePays/${args.nullVal}?`, args.paymentGatewaySagePayToBeUpdated, req);
  }
};
export {updatePaymentGatewaySagePay};


const deletePaymentGatewaySagePayByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePaymentGatewaySagePayByIdUpdated method',
  args:{paymentGatewaySagePayId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentGatewaySagePays/${args.paymentGatewaySagePayId}?`, null, req);
  }
};
export {deletePaymentGatewaySagePayByIdUpdated};
