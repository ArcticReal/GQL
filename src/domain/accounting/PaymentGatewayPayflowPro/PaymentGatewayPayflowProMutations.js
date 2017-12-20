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
import {PaymentGatewayPayflowProInputType} from '../../accounting/PaymentGatewayPayflowPro/PaymentGatewayPayflowProInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPaymentGatewayPayflowPro = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPaymentGatewayPayflowPro method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentGatewayPayflowPros/add?`, null, req);
  }
};
export {createPaymentGatewayPayflowPro};


const updatePaymentGatewayPayflowPro = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePaymentGatewayPayflowPro method',
  args:{paymentGatewayPayflowProToBeUpdated: {type: PaymentGatewayPayflowProInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentGatewayPayflowPros/${args.nullVal}?`, args.paymentGatewayPayflowProToBeUpdated, req);
  }
};
export {updatePaymentGatewayPayflowPro};


const deletePaymentGatewayPayflowProByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePaymentGatewayPayflowProByIdUpdated method',
  args:{paymentGatewayPayflowProId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentGatewayPayflowPros/${args.paymentGatewayPayflowProId}?`, null, req);
  }
};
export {deletePaymentGatewayPayflowProByIdUpdated};
