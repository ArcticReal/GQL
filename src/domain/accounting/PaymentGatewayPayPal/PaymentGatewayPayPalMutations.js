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
import {PaymentGatewayPayPalInputType} from '../../accounting/PaymentGatewayPayPal/PaymentGatewayPayPalInputType.js';
import {PaymentGatewayPayPalResponseType} from '../../accounting/PaymentGatewayPayPal/PaymentGatewayPayPalResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPaymentGatewayPayPal = {
  type: PaymentGatewayPayPalResponseType,
  description: 'mutation for ofbiz createPaymentGatewayPayPal method',
  args:{paymentGatewayPayPalToBeAdded: {type: PaymentGatewayPayPalInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentGatewayPayPals/add?`, args.paymentGatewayPayPalToBeAdded, req);
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
