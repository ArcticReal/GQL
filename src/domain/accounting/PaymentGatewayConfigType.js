
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PaymentGatewayAuthorizeNetType} from '../accounting/PaymentGatewayAuthorizeNetType.js';
import {PaymentGatewayPayflowProType} from '../accounting/PaymentGatewayPayflowProType.js';
import {PaymentGatewayClearCommerceType} from '../accounting/PaymentGatewayClearCommerceType.js';
import {PaymentGatewayCyberSourceType} from '../accounting/PaymentGatewayCyberSourceType.js';
import {PaymentGatewayEwayType} from '../accounting/PaymentGatewayEwayType.js';
import {PaymentGatewayWorldPayType} from '../accounting/PaymentGatewayWorldPayType.js';
import {PaymentGatewayiDEALType} from '../accounting/PaymentGatewayiDEALType.js';
import {PaymentGatewaySagePayType} from '../accounting/PaymentGatewaySagePayType.js';
import {PaymentGatewaySecurePayType} from '../accounting/PaymentGatewaySecurePayType.js';
import {PaymentGatewayPayPalType} from '../accounting/PaymentGatewayPayPalType.js';
import {PaymentGatewayOrbitalType} from '../accounting/PaymentGatewayOrbitalType.js';
import {ProductStorePaymentSettingType} from '../product/ProductStorePaymentSettingType.js';
import {PaymentGatewayConfigTypeType} from '../accounting/PaymentGatewayConfigTypeType.js';


const PaymentGatewayConfigType = new GraphQLObjectType({
  name: 'PaymentGatewayConfigType',
  description: 'Type for PaymentGatewayConfig in accounting',

  fields: () => ({
    paymentGatewayConfigId: {type: GraphQLString},
    paymentGatewayConfigType: {
      type: PaymentGatewayConfigTypeType,
      args : {paymentGatewayConfigTypeId: {type: GraphQLString}},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbiz.load(`paymentGatewayConfigTypes/find?paymentGatewayConfigTypeId=${paymentGatewayConfig.paymentGatewayConfigTypeId}`)
    },
    description: {type: GraphQLString},
    paymentGatewaySagePay: {
      type: new GraphQLList(PaymentGatewaySagePayType),
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`paymentGatewaySagePays/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    },
    paymentGatewayAuthorizeNet: {
      type: new GraphQLList(PaymentGatewayAuthorizeNetType),
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`paymentGatewayAuthorizeNets/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    },
    paymentGatewayCyberSource: {
      type: new GraphQLList(PaymentGatewayCyberSourceType),
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`paymentGatewayCyberSources/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    },
    paymentGatewayPayflowPro: {
      type: new GraphQLList(PaymentGatewayPayflowProType),
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`paymentGatewayPayflowPros/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    },
    paymentGatewayiDEAL: {
      type: new GraphQLList(PaymentGatewayiDEALType),
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`paymentGatewayiDEALs/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    },
    productStorePaymentSetting: {
      type: new GraphQLList(ProductStorePaymentSettingType),
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`productStorePaymentSettings/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    },
    paymentGatewayWorldPay: {
      type: new GraphQLList(PaymentGatewayWorldPayType),
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`paymentGatewayWorldPays/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    },
    paymentGatewayEway: {
      type: new GraphQLList(PaymentGatewayEwayType),
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`paymentGatewayEways/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    },
    paymentGatewaySecurePay: {
      type: new GraphQLList(PaymentGatewaySecurePayType),
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`paymentGatewaySecurePays/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    },
    paymentGatewayPayPal: {
      type: new GraphQLList(PaymentGatewayPayPalType),
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`paymentGatewayPayPals/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    },
    paymentGatewayClearCommerce: {
      type: new GraphQLList(PaymentGatewayClearCommerceType),
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`paymentGatewayClearCommerces/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    },
    paymentGatewayOrbital: {
      type: new GraphQLList(PaymentGatewayOrbitalType),
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`paymentGatewayOrbitals/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    }
  })
});

export {PaymentGatewayConfigType};
    