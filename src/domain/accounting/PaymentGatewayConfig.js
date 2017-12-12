
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

import {PaymentGatewayAuthorizeNetType} from '../accounting/PaymentGatewayAuthorizeNet.js';
import {PaymentGatewayPayflowProType} from '../accounting/PaymentGatewayPayflowPro.js';
import {PaymentGatewayClearCommerceType} from '../accounting/PaymentGatewayClearCommerce.js';
import {PaymentGatewayCyberSourceType} from '../accounting/PaymentGatewayCyberSource.js';
import {PaymentGatewayEwayType} from '../accounting/PaymentGatewayEway.js';
import {PaymentGatewayWorldPayType} from '../accounting/PaymentGatewayWorldPay.js';
import {PaymentGatewayiDEALType} from '../accounting/PaymentGatewayiDEAL.js';
import {PaymentGatewaySagePayType} from '../accounting/PaymentGatewaySagePay.js';
import {PaymentGatewaySecurePayType} from '../accounting/PaymentGatewaySecurePay.js';
import {PaymentGatewayPayPalType} from '../accounting/PaymentGatewayPayPal.js';
import {PaymentGatewayOrbitalType} from '../accounting/PaymentGatewayOrbital.js';
import {ProductStorePaymentSettingType} from '../product/ProductStorePaymentSetting.js';
import {PaymentGatewayConfigTypeType} from '../accounting/PaymentGatewayConfigType.js';


const PaymentGatewayConfigType = new GraphQLObjectType({
  name: 'PaymentGatewayConfigType',
  description: 'Type for PaymentGatewayConfig in accounting',

  fields: () => ({
    paymentGatewayConfigId: {type: GraphQLString},
    paymentGatewayConfigType: {
      type: PaymentGatewayConfigTypeType,
      args : {paymentGatewayConfigTypeId: {type: GraphQLString}},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentGatewayConfigTypes/find?paymentGatewayConfigTypeId=${paymentGatewayConfig.paymentGatewayConfigTypeId}`)
    },
    description: {type: GraphQLString},
    paymentGatewaySagePaies: {
      type: new GraphQLList(PaymentGatewaySagePayType),
      args : {},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentGatewaySagePays/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    },
    paymentGatewayAuthorizeNets: {
      type: new GraphQLList(PaymentGatewayAuthorizeNetType),
      args : {},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentGatewayAuthorizeNets/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    },
    paymentGatewayCyberSources: {
      type: new GraphQLList(PaymentGatewayCyberSourceType),
      args : {},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentGatewayCyberSources/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    },
    paymentGatewayPayflowPros: {
      type: new GraphQLList(PaymentGatewayPayflowProType),
      args : {},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentGatewayPayflowPros/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    },
    paymentGatewayiDEALs: {
      type: new GraphQLList(PaymentGatewayiDEALType),
      args : {},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentGatewayiDEALs/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    },
    productStorePaymentSettings: {
      type: new GraphQLList(ProductStorePaymentSettingType),
      args : {},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStorePaymentSettings/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    },
    paymentGatewayWorldPaies: {
      type: new GraphQLList(PaymentGatewayWorldPayType),
      args : {},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentGatewayWorldPays/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    },
    paymentGatewayEwaies: {
      type: new GraphQLList(PaymentGatewayEwayType),
      args : {},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentGatewayEways/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    },
    paymentGatewaySecurePaies: {
      type: new GraphQLList(PaymentGatewaySecurePayType),
      args : {},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentGatewaySecurePays/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    },
    paymentGatewayPayPals: {
      type: new GraphQLList(PaymentGatewayPayPalType),
      args : {},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentGatewayPayPals/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    },
    paymentGatewayClearCommerces: {
      type: new GraphQLList(PaymentGatewayClearCommerceType),
      args : {},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentGatewayClearCommerces/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    },
    paymentGatewayOrbitals: {
      type: new GraphQLList(PaymentGatewayOrbitalType),
      args : {},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentGatewayOrbitals/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    }
  })
});

export {PaymentGatewayConfigType};
    




const PaymentGatewayConfigInputType = new GraphQLInputObjectType({
  name: 'PaymentGatewayConfigInputType',
  description: 'input type for PaymentGatewayConfig in accounting',

  fields: () => ({
    paymentGatewayConfigId: {type: GraphQLString},
    paymentGatewayConfigTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {PaymentGatewayConfigInputType};
    