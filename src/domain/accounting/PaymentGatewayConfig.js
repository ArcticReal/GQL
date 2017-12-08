
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
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbiz.load(`paymentGatewayConfigTypes/find?paymentGatewayConfigTypeId=${paymentGatewayConfig.paymentGatewayConfigTypeId}`)
    },
    description: {type: GraphQLString},
    paymentGatewaySagePaies: {
      type: new GraphQLList(PaymentGatewaySagePayType),
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`paymentGatewaySagePays/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    },
    paymentGatewayAuthorizeNets: {
      type: new GraphQLList(PaymentGatewayAuthorizeNetType),
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`paymentGatewayAuthorizeNets/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    },
    paymentGatewayCyberSources: {
      type: new GraphQLList(PaymentGatewayCyberSourceType),
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`paymentGatewayCyberSources/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    },
    paymentGatewayPayflowPros: {
      type: new GraphQLList(PaymentGatewayPayflowProType),
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`paymentGatewayPayflowPros/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    },
    paymentGatewayiDEALs: {
      type: new GraphQLList(PaymentGatewayiDEALType),
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`paymentGatewayiDEALs/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    },
    productStorePaymentSettings: {
      type: new GraphQLList(ProductStorePaymentSettingType),
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`productStorePaymentSettings/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    },
    paymentGatewayWorldPaies: {
      type: new GraphQLList(PaymentGatewayWorldPayType),
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`paymentGatewayWorldPays/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    },
    paymentGatewayEwaies: {
      type: new GraphQLList(PaymentGatewayEwayType),
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`paymentGatewayEways/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    },
    paymentGatewaySecurePaies: {
      type: new GraphQLList(PaymentGatewaySecurePayType),
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`paymentGatewaySecurePays/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    },
    paymentGatewayPayPals: {
      type: new GraphQLList(PaymentGatewayPayPalType),
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`paymentGatewayPayPals/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    },
    paymentGatewayClearCommerces: {
      type: new GraphQLList(PaymentGatewayClearCommerceType),
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`paymentGatewayClearCommerces/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
    },
    paymentGatewayOrbitals: {
      type: new GraphQLList(PaymentGatewayOrbitalType),
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayConfig, args, {loaders}) => loaders.ofbizArray.load(`paymentGatewayOrbitals/find?paymentGatewayConfigId=${paymentGatewayConfig.paymentGatewayConfigId}`)
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
    