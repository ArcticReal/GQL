
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

import {PaymentMethodTypeType} from '../accounting/PaymentMethodType.js';
import {PaymentGatewayConfigType} from '../accounting/PaymentGatewayConfig.js';
import {ProductStoreType} from '../product/ProductStore.js';


const ProductStorePaymentSettingType = new GraphQLObjectType({
  name: 'ProductStorePaymentSettingType',
  description: 'Type for ProductStorePaymentSetting in product',

  fields: () => ({
    paymentGatewayConfig: {
      type: PaymentGatewayConfigType,
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (productStorePaymentSetting, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentGatewayConfigs/find?paymentGatewayConfigId=${productStorePaymentSetting.paymentGatewayConfigId}`)
    },
    paymentService: {type: GraphQLString},
    paymentPropertiesPath: {type: GraphQLString},
    paymentServiceTypeEnumId: {type: GraphQLString},
    applyToAllProducts: {type: GraphQLBoolean},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStorePaymentSetting, args, {loaders}) => loaders.ofbiz.load(`product/product/productStores/find?productStoreId=${productStorePaymentSetting.productStoreId}`)
    },
    paymentMethodType: {
      type: PaymentMethodTypeType,
      args : {paymentMethodTypeId: {type: GraphQLString}},
      resolve: (productStorePaymentSetting, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentMethodTypes/find?paymentMethodTypeId=${productStorePaymentSetting.paymentMethodTypeId}`)
    },
    paymentCustomMethodId: {type: GraphQLString}
  })
});

export {ProductStorePaymentSettingType};
    




const ProductStorePaymentSettingInputType = new GraphQLInputObjectType({
  name: 'ProductStorePaymentSettingInputType',
  description: 'input type for ProductStorePaymentSetting in product',

  fields: () => ({
    paymentGatewayConfigId: {type: GraphQLString},
    paymentService: {type: GraphQLString},
    paymentPropertiesPath: {type: GraphQLString},
    paymentServiceTypeEnumId: {type: GraphQLString},
    applyToAllProducts: {type: GraphQLBoolean},
    productStoreId: {type: GraphQLString},
    paymentMethodTypeId: {type: GraphQLString},
    paymentCustomMethodId: {type: GraphQLString}
  })
});

export {ProductStorePaymentSettingInputType};
    