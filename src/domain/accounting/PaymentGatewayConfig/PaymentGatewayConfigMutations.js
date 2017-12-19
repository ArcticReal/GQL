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
import {PaymentGatewayConfigInputType} from '../../accounting/PaymentGatewayConfig/PaymentGatewayConfigInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createPaymentGatewayConfig = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPaymentGatewayConfig method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentGatewayConfigs/add?`, null, req);
  }
};
export {createPaymentGatewayConfig};


const updatePaymentGatewayConfig = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePaymentGatewayConfig method',
  args:{paymentGatewayConfigToBeUpdated: {type: PaymentGatewayConfigInputType},paymentGatewayConfigId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentGatewayConfigs/${args.paymentGatewayConfigId}?`, args.paymentGatewayConfigToBeUpdated, req);
  }
};
export {updatePaymentGatewayConfig};


const deletePaymentGatewayConfigByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePaymentGatewayConfigByIdUpdated method',
  args:{paymentGatewayConfigId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentGatewayConfigs/${args.paymentGatewayConfigId}?`, null, req);
  }
};
export {deletePaymentGatewayConfigByIdUpdated};
