
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {OrderHeaderType} from '../order/OrderHeaderType.js';
import {PaymentType} from '../accounting/PaymentType.js';
import {ReturnItemType} from '../order/ReturnItemType.js';
import {FinAccountTransType} from '../accounting/FinAccountTransType.js';
import {BillingAccountType} from '../accounting/BillingAccountType.js';
import {OrderPaymentPreferenceType} from '../order/OrderPaymentPreferenceType.js';


const ReturnItemResponseType = new GraphQLObjectType({
  name: 'ReturnItemResponseType',
  description: 'Type for ReturnItemResponse in order',

  fields: () => ({
    replacementOrder: {
      type: OrderHeaderType,
      args : {replacementOrderId: {type: GraphQLString}},
      resolve: (returnItemResponse, args, {loaders}) => loaders.ofbiz.load(`orderHeaders/find?orderId=${returnItemResponse.replacementOrderId}`)
    },
    finAccountTrans: {
      type: FinAccountTransType,
      args : {finAccountTransId: {type: GraphQLString}},
      resolve: (returnItemResponse, args, {loaders}) => loaders.ofbiz.load(`finAccountTranss/find?finAccountTransId=${returnItemResponse.finAccountTransId}`)
    },
    returnItemResponseId: {type: GraphQLString},
    orderPaymentPreference: {
      type: OrderPaymentPreferenceType,
      args : {orderPaymentPreferenceId: {type: GraphQLString}},
      resolve: (returnItemResponse, args, {loaders}) => loaders.ofbiz.load(`orderPaymentPreferences/find?orderPaymentPreferenceId=${returnItemResponse.orderPaymentPreferenceId}`)
    },
    responseAmount: {type: GraphQLFloat},
    payment: {
      type: PaymentType,
      args : {paymentId: {type: GraphQLString}},
      resolve: (returnItemResponse, args, {loaders}) => loaders.ofbiz.load(`payments/find?paymentId=${returnItemResponse.paymentId}`)
    },
    billingAccount: {
      type: BillingAccountType,
      args : {billingAccountId: {type: GraphQLString}},
      resolve: (returnItemResponse, args, {loaders}) => loaders.ofbiz.load(`billingAccounts/find?billingAccountId=${returnItemResponse.billingAccountId}`)
    },
    responseDate: {type: GraphQLString},
    returnItem: {
      type: new GraphQLList(ReturnItemType),
      args : {returnItemResponseId: {type: GraphQLString}},
      resolve: (returnItemResponse, args, {loaders}) => loaders.ofbizArray.load(`returnItems/find?returnItemResponseId=${returnItemResponse.returnItemResponseId}`)
    }
  })
});

export {ReturnItemResponseType};
    