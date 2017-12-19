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
import {PaymentGatewayRespMsgInputType} from '../../accounting/PaymentGatewayRespMsg/PaymentGatewayRespMsgInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createPaymentGatewayRespMsg = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPaymentGatewayRespMsg method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentGatewayRespMsgs/add?`, null, req);
  }
};
export {createPaymentGatewayRespMsg};


const updatePaymentGatewayRespMsg = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePaymentGatewayRespMsg method',
  args:{paymentGatewayRespMsgToBeUpdated: {type: PaymentGatewayRespMsgInputType},paymentGatewayRespMsgId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentGatewayRespMsgs/${args.paymentGatewayRespMsgId}?`, args.paymentGatewayRespMsgToBeUpdated, req);
  }
};
export {updatePaymentGatewayRespMsg};


const deletePaymentGatewayRespMsgByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePaymentGatewayRespMsgByIdUpdated method',
  args:{paymentGatewayRespMsgId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentGatewayRespMsgs/${args.paymentGatewayRespMsgId}?`, null, req);
  }
};
export {deletePaymentGatewayRespMsgByIdUpdated};
