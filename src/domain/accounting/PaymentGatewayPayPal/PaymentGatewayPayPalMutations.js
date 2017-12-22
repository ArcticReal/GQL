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
import {PaymentGatewayPayPalResponseType} from '../../accounting/PaymentGatewayPayPal/PaymentGatewayPayPalResponseType.js';
import {PaymentGatewayPayPalInputType} from '../../accounting/PaymentGatewayPayPal/PaymentGatewayPayPalInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPaymentGatewayPayPal = {
  type: PaymentGatewayPayPalResponseType,
  description: 'mutation for ofbiz createPaymentGatewayPayPal method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentGatewayPayPals/add?`, null, req);
  }
};
export {createPaymentGatewayPayPal};


const updatePaymentGatewayPayPal = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePaymentGatewayPayPal method',
  args:{paymentGatewayPayPalToBeUpdated: {type: PaymentGatewayPayPalInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentGatewayPayPals/${args.nullVal}?`, args.paymentGatewayPayPalToBeUpdated, req);
  }
};
export {updatePaymentGatewayPayPal};


const deletePaymentGatewayPayPalByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePaymentGatewayPayPalByIdUpdated method',
  args:{paymentGatewayPayPalId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentGatewayPayPals/${args.paymentGatewayPayPalId}?`, null, req);
  }
};
export {deletePaymentGatewayPayPalByIdUpdated};
