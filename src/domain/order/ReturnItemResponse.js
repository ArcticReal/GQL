
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

import {OrderHeaderType} from '../order/OrderHeader.js';
import {PaymentType} from '../accounting/Payment.js';
import {ReturnItemType} from '../order/ReturnItem.js';
import {FinAccountTransType} from '../accounting/FinAccountTrans.js';
import {BillingAccountType} from '../accounting/BillingAccount.js';
import {OrderPaymentPreferenceType} from '../order/OrderPaymentPreference.js';


const ReturnItemResponseType = new GraphQLObjectType({
  name: 'ReturnItemResponseType',
  description: 'Type for ReturnItemResponse in order',

  fields: () => ({
    replacementOrder: {
      type: OrderHeaderType,
      args : {replacementOrderId: {type: GraphQLString}},
      resolve: (returnItemResponse, args, {loaders}) => loaders.ofbiz.load(`order/orderHeaders/find?orderId=${returnItemResponse.replacementOrderId}`)
    },
    finAccountTrans: {
      type: FinAccountTransType,
      args : {finAccountTransId: {type: GraphQLString}},
      resolve: (returnItemResponse, args, {loaders}) => loaders.ofbiz.load(`accounting/finAccount/finAccountTranss/find?finAccountTransId=${returnItemResponse.finAccountTransId}`)
    },
    returnItemResponseId: {type: GraphQLString},
    orderPaymentPreference: {
      type: OrderPaymentPreferenceType,
      args : {orderPaymentPreferenceId: {type: GraphQLString}},
      resolve: (returnItemResponse, args, {loaders}) => loaders.ofbiz.load(`order/orderPaymentPreferences/find?orderPaymentPreferenceId=${returnItemResponse.orderPaymentPreferenceId}`)
    },
    responseAmount: {type: GraphQLFloat},
    payment: {
      type: PaymentType,
      args : {paymentId: {type: GraphQLString}},
      resolve: (returnItemResponse, args, {loaders}) => loaders.ofbiz.load(`accounting/payments/find?paymentId=${returnItemResponse.paymentId}`)
    },
    billingAccount: {
      type: BillingAccountType,
      args : {billingAccountId: {type: GraphQLString}},
      resolve: (returnItemResponse, args, {loaders}) => loaders.ofbiz.load(`accounting/billingAccounts/find?billingAccountId=${returnItemResponse.billingAccountId}`)
    },
    responseDate: {type: GraphQLString},
    returnItems: {
      type: new GraphQLList(ReturnItemType),
      args : {},
      resolve: (returnItemResponse, args, {loaders}) => loaders.ofbizArray.load(`order/returnItems/find?returnItemResponseId=${returnItemResponse.returnItemResponseId}`)
    }
  })
});

export {ReturnItemResponseType};
    




const ReturnItemResponseInputType = new GraphQLInputObjectType({
  name: 'ReturnItemResponseInputType',
  description: 'input type for ReturnItemResponse in order',

  fields: () => ({
    replacementOrderId: {type: GraphQLString},
    finAccountTransId: {type: GraphQLString},
    returnItemResponseId: {type: GraphQLString},
    orderPaymentPreferenceId: {type: GraphQLString},
    responseAmount: {type: GraphQLFloat},
    paymentId: {type: GraphQLString},
    billingAccountId: {type: GraphQLString},
    responseDate: {type: GraphQLString}
  })
});

export {ReturnItemResponseInputType};
    