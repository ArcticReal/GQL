
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

import {PaymentType} from '../accounting/Payment.js';
import {PaymentMethodTypeGlAccountType} from '../accounting/PaymentMethodTypeGlAccount.js';
import {ProductPaymentMethodTypeType} from '../product/ProductPaymentMethodType.js';
import {ProductStoreVendorPaymentType} from '../product/ProductStoreVendorPayment.js';
import {ProductStorePaymentSettingType} from '../product/ProductStorePaymentSetting.js';
import {PaymentMethodType} from '../accounting/PaymentMethod.js';
import {PaymentGatewayResponseType} from '../accounting/PaymentGatewayResponse.js';
import {GlAccountType} from '../accounting/GlAccount.js';
import {OrderPaymentPreferenceType} from '../order/OrderPaymentPreference.js';


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
    paymentMethodTypeGlAccounts: {
      type: new GraphQLList(PaymentMethodTypeGlAccountType),
      args : {paymentMethodTypeId: {type: GraphQLString}},
      resolve: (paymentMethodType, args, {loaders}) => loaders.ofbizArray.load(`paymentMethodTypeGlAccounts/find?paymentMethodTypeId=${paymentMethodType.paymentMethodTypeId}`)
    },
    paymentGatewayResponses: {
      type: new GraphQLList(PaymentGatewayResponseType),
      args : {paymentMethodTypeId: {type: GraphQLString}},
      resolve: (paymentMethodType, args, {loaders}) => loaders.ofbizArray.load(`paymentGatewayResponses/find?paymentMethodTypeId=${paymentMethodType.paymentMethodTypeId}`)
    },
    productPaymentMethodTypes: {
      type: new GraphQLList(ProductPaymentMethodTypeType),
      args : {paymentMethodTypeId: {type: GraphQLString}},
      resolve: (paymentMethodType, args, {loaders}) => loaders.ofbizArray.load(`productPaymentMethodTypes/find?paymentMethodTypeId=${paymentMethodType.paymentMethodTypeId}`)
    },
    orderPaymentPreferences: {
      type: new GraphQLList(OrderPaymentPreferenceType),
      args : {paymentMethodTypeId: {type: GraphQLString}},
      resolve: (paymentMethodType, args, {loaders}) => loaders.ofbizArray.load(`orderPaymentPreferences/find?paymentMethodTypeId=${paymentMethodType.paymentMethodTypeId}`)
    },
    productStoreVendorPayments: {
      type: new GraphQLList(ProductStoreVendorPaymentType),
      args : {paymentMethodTypeId: {type: GraphQLString}},
      resolve: (paymentMethodType, args, {loaders}) => loaders.ofbizArray.load(`productStoreVendorPayments/find?paymentMethodTypeId=${paymentMethodType.paymentMethodTypeId}`)
    },
    productStorePaymentSettings: {
      type: new GraphQLList(ProductStorePaymentSettingType),
      args : {paymentMethodTypeId: {type: GraphQLString}},
      resolve: (paymentMethodType, args, {loaders}) => loaders.ofbizArray.load(`productStorePaymentSettings/find?paymentMethodTypeId=${paymentMethodType.paymentMethodTypeId}`)
    },
    payments: {
      type: new GraphQLList(PaymentType),
      args : {paymentMethodTypeId: {type: GraphQLString}},
      resolve: (paymentMethodType, args, {loaders}) => loaders.ofbizArray.load(`payments/find?paymentMethodTypeId=${paymentMethodType.paymentMethodTypeId}`)
    },
    paymentMethods: {
      type: new GraphQLList(PaymentMethodType),
      args : {paymentMethodTypeId: {type: GraphQLString}},
      resolve: (paymentMethodType, args, {loaders}) => loaders.ofbizArray.load(`paymentMethods/find?paymentMethodTypeId=${paymentMethodType.paymentMethodTypeId}`)
    }
  })
});

export {PaymentMethodTypeType};
    




const PaymentMethodTypeInputType = new GraphQLInputObjectType({
  name: 'PaymentMethodTypeInputType',
  description: 'input type for PaymentMethodType in accounting',

  fields: () => ({
    defaultGlAccountId: {type: GraphQLString},
    description: {type: GraphQLString},
    paymentMethodTypeId: {type: GraphQLString}
  })
});

export {PaymentMethodTypeInputType};
    