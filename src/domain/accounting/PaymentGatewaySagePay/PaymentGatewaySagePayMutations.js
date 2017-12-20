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
import {PaymentGatewaySagePayInputType} from '../../accounting/PaymentGatewaySagePay/PaymentGatewaySagePayInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPaymentGatewaySagePay = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPaymentGatewaySagePay method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentGatewaySagePays/add?`, null, req);
  }
};
export {createPaymentGatewaySagePay};


const updatePaymentGatewaySagePay = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePaymentGatewaySagePay method',
  args:{paymentGatewaySagePayToBeUpdated: {type: PaymentGatewaySagePayInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentGatewaySagePays/${args.nullVal}?`, args.paymentGatewaySagePayToBeUpdated, req);
  }
};
export {updatePaymentGatewaySagePay};


const deletePaymentGatewaySagePayByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePaymentGatewaySagePayByIdUpdated method',
  args:{paymentGatewaySagePayId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentGatewaySagePays/${args.paymentGatewaySagePayId}?`, null, req);
  }
};
export {deletePaymentGatewaySagePayByIdUpdated};
