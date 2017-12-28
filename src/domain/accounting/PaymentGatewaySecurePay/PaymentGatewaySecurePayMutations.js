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
import {PaymentGatewaySecurePayInputType} from '../../accounting/PaymentGatewaySecurePay/PaymentGatewaySecurePayInputType.js';
import {PaymentGatewaySecurePayResponseType} from '../../accounting/PaymentGatewaySecurePay/PaymentGatewaySecurePayResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPaymentGatewaySecurePay = {
  type: PaymentGatewaySecurePayResponseType,
  description: 'mutation for ofbiz createPaymentGatewaySecurePay method',
  args:{paymentGatewaySecurePayToBeAdded: {type: PaymentGatewaySecurePayInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentGatewaySecurePays/add?`, args.paymentGatewaySecurePayToBeAdded, req);
  }
};
export {createPaymentGatewaySecurePay};


const updatePaymentGatewaySecurePay = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePaymentGatewaySecurePay method',
  args:{paymentGatewaySecurePayToBeUpdated: {type: PaymentGatewaySecurePayInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentGatewaySecurePays/${args.nullVal}?`, args.paymentGatewaySecurePayToBeUpdated, req);
  }
};
export {updatePaymentGatewaySecurePay};


const deletePaymentGatewaySecurePayByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePaymentGatewaySecurePayByIdUpdated method',
  args:{paymentGatewaySecurePayId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentGatewaySecurePays/${args.paymentGatewaySecurePayId}?`, null, req);
  }
};
export {deletePaymentGatewaySecurePayByIdUpdated};
