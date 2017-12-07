
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PaymentType} from '../accounting/PaymentType.js';
import {PaymentMethodTypeGlAccountType} from '../accounting/PaymentMethodTypeGlAccountType.js';
import {ProductPaymentMethodTypeType} from '../product/ProductPaymentMethodTypeType.js';
import {ProductStoreVendorPaymentType} from '../product/ProductStoreVendorPaymentType.js';
import {ProductStorePaymentSettingType} from '../product/ProductStorePaymentSettingType.js';
import {PaymentMethodType} from '../accounting/PaymentMethodType.js';
import {PaymentGatewayResponseType} from '../accounting/PaymentGatewayResponseType.js';
import {GlAccountType} from '../accounting/GlAccountType.js';
import {OrderPaymentPreferenceType} from '../order/OrderPaymentPreferenceType.js';


const PaymentMethodTypeType = new GraphQLObjectType({
  name: 'PaymentMethodTypeType',
  description: 'Type for PaymentMethodType in accounting',

  fields: () => ({
    defaultGlAccount: {
      type: GlAccountType,
      args : {defaultGlAccountId: {type: GraphQLString}},
      resolve: (paymentMethodType, args, {loaders}) => loaders.ofbiz.load(`glAccounts/find?glAccountId=${paymentMethodType.defaultGlAccountId}`)
    },
    description: {type: GraphQLString},
    paymentMethodTypeId: {type: GraphQLString},
    paymentMethodTypeGlAccount: {
      type: new GraphQLList(PaymentMethodTypeGlAccountType),
      args : {paymentMethodTypeId: {type: GraphQLString}},
      resolve: (paymentMethodType, args, {loaders}) => loaders.ofbizArray.load(`paymentMethodTypeGlAccounts/find?paymentMethodTypeId=${paymentMethodType.paymentMethodTypeId}`)
    },
    paymentGatewayResponse: {
      type: new GraphQLList(PaymentGatewayResponseType),
      args : {paymentMethodTypeId: {type: GraphQLString}},
      resolve: (paymentMethodType, args, {loaders}) => loaders.ofbizArray.load(`paymentGatewayResponses/find?paymentMethodTypeId=${paymentMethodType.paymentMethodTypeId}`)
    },
    productPaymentMethodType: {
      type: new GraphQLList(ProductPaymentMethodTypeType),
      args : {paymentMethodTypeId: {type: GraphQLString}},
      resolve: (paymentMethodType, args, {loaders}) => loaders.ofbizArray.load(`productPaymentMethodTypes/find?paymentMethodTypeId=${paymentMethodType.paymentMethodTypeId}`)
    },
    orderPaymentPreference: {
      type: new GraphQLList(OrderPaymentPreferenceType),
      args : {paymentMethodTypeId: {type: GraphQLString}},
      resolve: (paymentMethodType, args, {loaders}) => loaders.ofbizArray.load(`orderPaymentPreferences/find?paymentMethodTypeId=${paymentMethodType.paymentMethodTypeId}`)
    },
    productStoreVendorPayment: {
      type: new GraphQLList(ProductStoreVendorPaymentType),
      args : {paymentMethodTypeId: {type: GraphQLString}},
      resolve: (paymentMethodType, args, {loaders}) => loaders.ofbizArray.load(`productStoreVendorPayments/find?paymentMethodTypeId=${paymentMethodType.paymentMethodTypeId}`)
    },
    productStorePaymentSetting: {
      type: new GraphQLList(ProductStorePaymentSettingType),
      args : {paymentMethodTypeId: {type: GraphQLString}},
      resolve: (paymentMethodType, args, {loaders}) => loaders.ofbizArray.load(`productStorePaymentSettings/find?paymentMethodTypeId=${paymentMethodType.paymentMethodTypeId}`)
    },
    payment: {
      type: new GraphQLList(PaymentType),
      args : {paymentMethodTypeId: {type: GraphQLString}},
      resolve: (paymentMethodType, args, {loaders}) => loaders.ofbizArray.load(`payments/find?paymentMethodTypeId=${paymentMethodType.paymentMethodTypeId}`)
    },
    paymentMethod: {
      type: new GraphQLList(PaymentMethodType),
      args : {paymentMethodTypeId: {type: GraphQLString}},
      resolve: (paymentMethodType, args, {loaders}) => loaders.ofbizArray.load(`paymentMethods/find?paymentMethodTypeId=${paymentMethodType.paymentMethodTypeId}`)
    }
  })
});

export {PaymentMethodTypeType};
    