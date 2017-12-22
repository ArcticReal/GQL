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
import {PaymentGatewayAuthorizeNetInputType} from '../../accounting/PaymentGatewayAuthorizeNet/PaymentGatewayAuthorizeNetInputType.js';
import {PaymentGatewayAuthorizeNetResponseType} from '../../accounting/PaymentGatewayAuthorizeNet/PaymentGatewayAuthorizeNetResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPaymentGatewayAuthorizeNet = {
  type: PaymentGatewayAuthorizeNetResponseType,
  description: 'mutation for ofbiz createPaymentGatewayAuthorizeNet method',
  args:{paymentGatewayAuthorizeNetToBeAdded: {type: PaymentGatewayAuthorizeNetInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentGatewayAuthorizeNets/add?`, args.paymentGatewayAuthorizeNetToBeAdded, req);
  }
};
export {createPaymentGatewayAuthorizeNet};


const updatePaymentGatewayAuthorizeNet = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePaymentGatewayAuthorizeNet method',
  args:{paymentGatewayAuthorizeNetToBeUpdated: {type: PaymentGatewayAuthorizeNetInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentGatewayAuthorizeNets/${args.nullVal}?`, args.paymentGatewayAuthorizeNetToBeUpdated, req);
  }
};
export {updatePaymentGatewayAuthorizeNet};


const deletePaymentGatewayAuthorizeNetByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePaymentGatewayAuthorizeNetByIdUpdated method',
  args:{paymentGatewayAuthorizeNetId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentGatewayAuthorizeNets/${args.paymentGatewayAuthorizeNetId}?`, null, req);
  }
};
export {deletePaymentGatewayAuthorizeNetByIdUpdated};
