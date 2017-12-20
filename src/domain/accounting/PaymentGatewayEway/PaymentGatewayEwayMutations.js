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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPaymentGatewayEway = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPaymentGatewayEway method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentGatewayEways/add?`, null, req);
  }
};
export {createPaymentGatewayEway};


const updatePaymentGatewayEway = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePaymentGatewayEway method',
  args:{paymentGatewayEwayToBeUpdated: {type: PaymentGatewayEwayInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentGatewayEways/${args.nullVal}?`, args.paymentGatewayEwayToBeUpdated, req);
  }
};
export {updatePaymentGatewayEway};


const deletePaymentGatewayEwayByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePaymentGatewayEwayByIdUpdated method',
  args:{paymentGatewayEwayId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentGatewayEways/${args.paymentGatewayEwayId}?`, null, req);
  }
};
export {deletePaymentGatewayEwayByIdUpdated};
