
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

import {PaymentType} from '../../accounting/Payment/PaymentType.js';
import {PaymentMethodTypeGlAccountType} from '../../accounting/PaymentMethodTypeGlAccount/PaymentMethodTypeGlAccountType.js';
import {ProductPaymentMethodTypeType} from '../../product/ProductPaymentMethodType/ProductPaymentMethodTypeType.js';
import {ProductStoreVendorPaymentType} from '../../product/ProductStoreVendorPayment/ProductStoreVendorPaymentType.js';
import {ProductStorePaymentSettingType} from '../../product/ProductStorePaymentSetting/ProductStorePaymentSettingType.js';
import {PaymentMethodType} from '../../accounting/PaymentMethod/PaymentMethodType.js';
import {PaymentGatewayResponseType} from '../../accounting/PaymentGatewayResponse/PaymentGatewayResponseType.js';
import {GlAccountType} from '../../accounting/GlAccount/GlAccountType.js';
import {OrderPaymentPreferenceType} from '../../order/OrderPaymentPreference/OrderPaymentPreferenceType.js';


const PaymentMethodTypeType = new GraphQLObjectType({
  name: 'PaymentMethodTypeType',
  description: 'Type for PaymentMethodType in accounting',

  fields: () => ({
    defaultGlAccount: {
      type: GlAccountType,
      args : {defaultGlAccountId: {type: GraphQLString}},
      resolve: (paymentMethodType, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccounts/find?glAccountId=${paymentMethodType.defaultGlAccountId}`)
    },
    description: {type: GraphQLString},
    paymentMethodTypeId: {type: GraphQLString},
    paymentMethodTypeGlAccounts: {
      type: new GraphQLList(PaymentMethodTypeGlAccountType),
      args : {},
      resolve: (paymentMethodType, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/paymentMethodTypeGlAccounts/find?paymentMethodTypeId=${paymentMethodType.paymentMethodTypeId}`)
    },
    paymentGatewayResponses: {
      type: new GraphQLList(PaymentGatewayResponseType),
      args : {},
      resolve: (paymentMethodType, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentGatewayResponses/find?paymentMethodTypeId=${paymentMethodType.paymentMethodTypeId}`)
    },
    productPaymentMethodTypes: {
      type: new GraphQLList(ProductPaymentMethodTypeType),
      args : {},
      resolve: (paymentMethodType, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPaymentMethodTypes/find?paymentMethodTypeId=${paymentMethodType.paymentMethodTypeId}`)
    },
    orderPaymentPreferences: {
      type: new GraphQLList(OrderPaymentPreferenceType),
      args : {},
      resolve: (paymentMethodType, args, {loaders}) => loaders.ofbizArray.load(`order/orderPaymentPreferences/find?paymentMethodTypeId=${paymentMethodType.paymentMethodTypeId}`)
    },
    productStoreVendorPayments: {
      type: new GraphQLList(ProductStoreVendorPaymentType),
      args : {},
      resolve: (paymentMethodType, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStoreVendorPayments/find?paymentMethodTypeId=${paymentMethodType.paymentMethodTypeId}`)
    },
    productStorePaymentSettings: {
      type: new GraphQLList(ProductStorePaymentSettingType),
      args : {},
      resolve: (paymentMethodType, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStorePaymentSettings/find?paymentMethodTypeId=${paymentMethodType.paymentMethodTypeId}`)
    },
    payments: {
      type: new GraphQLList(PaymentType),
      args : {},
      resolve: (paymentMethodType, args, {loaders}) => loaders.ofbizArray.load(`accounting/payments/find?paymentMethodTypeId=${paymentMethodType.paymentMethodTypeId}`)
    },
    paymentMethods: {
      type: new GraphQLList(PaymentMethodType),
      args : {},
      resolve: (paymentMethodType, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentMethods/find?paymentMethodTypeId=${paymentMethodType.paymentMethodTypeId}`)
    }
  })
});

export {PaymentMethodTypeType};
    