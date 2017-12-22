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
import {PaymentGatewayEwayInputType} from '../../accounting/PaymentGatewayEway/PaymentGatewayEwayInputType.js';
import {PaymentGatewayEwayResponseType} from '../../accounting/PaymentGatewayEway/PaymentGatewayEwayResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPaymentGatewayEway = {
  type: PaymentGatewayEwayResponseType,
  description: 'mutation for ofbiz createPaymentGatewayEway method',
  args:{paymentGatewayEwayToBeAdded: {type: PaymentGatewayEwayInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentGatewayEways/add?`, args.paymentGatewayEwayToBeAdded, req);
  }
};
export {createPaymentGatewayEway};


const updatePaymentGatewayEway = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePaymentGatewayEway method',
  args:{paymentGatewayEwayToBeUpdated: {type: PaymentGatewayEwayInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentGatewayEways/${args.nullVal}?`, args.paymentGatewayEwayToBeUpdated, req);
  }
};
export {updatePaymentGatewayEway};


const deletePaymentGatewayEwayByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePaymentGatewayEwayByIdUpdated method',
  args:{paymentGatewayEwayId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentGatewayEways/${args.paymentGatewayEwayId}?`, null, req);
  }
};
export {deletePaymentGatewayEwayByIdUpdated};
