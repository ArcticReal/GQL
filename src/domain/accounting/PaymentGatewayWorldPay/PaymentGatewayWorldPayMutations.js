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
import {PaymentGatewayWorldPayResponseType} from '../../accounting/PaymentGatewayWorldPay/PaymentGatewayWorldPayResponseType.js';
import {PaymentGatewayWorldPayInputType} from '../../accounting/PaymentGatewayWorldPay/PaymentGatewayWorldPayInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPaymentGatewayWorldPay = {
  type: PaymentGatewayWorldPayResponseType,
  description: 'mutation for ofbiz createPaymentGatewayWorldPay method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentGatewayWorldPays/add?`, null, req);
  }
};
export {createPaymentGatewayWorldPay};


const updatePaymentGatewayWorldPay = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePaymentGatewayWorldPay method',
  args:{paymentGatewayWorldPayToBeUpdated: {type: PaymentGatewayWorldPayInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentGatewayWorldPays/${args.nullVal}?`, args.paymentGatewayWorldPayToBeUpdated, req);
  }
};
export {updatePaymentGatewayWorldPay};


const deletePaymentGatewayWorldPayByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePaymentGatewayWorldPayByIdUpdated method',
  args:{paymentGatewayWorldPayId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentGatewayWorldPays/${args.paymentGatewayWorldPayId}?`, null, req);
  }
};
export {deletePaymentGatewayWorldPayByIdUpdated};
