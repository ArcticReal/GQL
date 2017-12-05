
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PaymentGatewayConfig} from '../product/PaymentGatewayConfig.js';
import {ProductStore} from '../product/ProductStore.js';
import {PaymentMethodType} from '../product/PaymentMethodType.js';
import {CustomMethod} from '../product/CustomMethod.js';


const ProductStorePaymentSetting = new GraphQLObjectType({
  name: 'ProductStorePaymentSettingType',
  description: 'Type for ProductStorePaymentSetting in product',

  fields: () => ({
    paymentGatewayConfig: {
      type: PaymentGatewayConfigType,
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (productStorePaymentSetting, args, {loaders}) => loaders.ofbizArray.load(`paymentGatewayConfigs/find?=${args.paymentGatewayConfigId}`)
    },
    paymentService: {type: GraphQLInt},
    paymentPropertiesPath: {type: GraphQLInt},
    paymentServiceTypeEnumId: {type: GraphQLString},
    applyToAllProducts: {type: GraphQLBoolean},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStorePaymentSetting, args, {loaders}) => loaders.ofbizArray.load(`productStores/find?=${args.productStoreId}`)
    },
    paymentMethodType: {
      type: PaymentMethodTypeType,
      args : {paymentMethodTypeId: {type: GraphQLString}},
      resolve: (productStorePaymentSetting, args, {loaders}) => loaders.ofbizArray.load(`paymentMethodTypes/find?=${args.paymentMethodTypeId}`)
    },
    paymentCustomMethod: {
      type: CustomMethodType,
      args : {paymentCustomMethodId: {type: GraphQLString}},
      resolve: (productStorePaymentSetting, args, {loaders}) => loaders.ofbizArray.load(`customMethods/find?customMethodId=${args.paymentCustomMethodId}`)
    }
  })
});

export {ProductStorePaymentSetting};
    