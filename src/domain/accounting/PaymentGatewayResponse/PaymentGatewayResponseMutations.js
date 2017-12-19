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
import {PaymentGatewayResponseInputType} from '../../accounting/PaymentGatewayResponse/PaymentGatewayResponseInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createPaymentGatewayResponse = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPaymentGatewayResponse method',
  args:{paymentGatewayResponseToBeAdded: {type: PaymentGatewayResponseInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentGatewayResponses/add?`, args.paymentGatewayResponseToBeAdded, req);
  }
};
export {createPaymentGatewayResponse};


const updatePaymentGatewayResponse = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePaymentGatewayResponse method',
  args:{paymentGatewayResponseToBeUpdated: {type: PaymentGatewayResponseInputType},paymentGatewayResponseId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentGatewayResponses/${args.paymentGatewayResponseId}?`, args.paymentGatewayResponseToBeUpdated, req);
  }
};
export {updatePaymentGatewayResponse};


const deletePaymentGatewayResponseByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePaymentGatewayResponseByIdUpdated method',
  args:{paymentGatewayResponseId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentGatewayResponses/${args.paymentGatewayResponseId}?`, null, req);
  }
};
export {deletePaymentGatewayResponseByIdUpdated};
