
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PaymentMethodTypeType} from '../accounting/PaymentMethodTypeType.js';
import {PaymentGatewayConfigType} from '../accounting/PaymentGatewayConfigType.js';
import {ProductStoreType} from '../product/ProductStoreType.js';


const ProductStorePaymentSettingType = new GraphQLObjectType({
  name: 'ProductStorePaymentSettingType',
  description: 'Type for ProductStorePaymentSetting in product',

  fields: () => ({
    paymentGatewayConfig: {
      type: PaymentGatewayConfigType,
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (productStorePaymentSetting, args, {loaders}) => loaders.ofbiz.load(`paymentGatewayConfigs/find?paymentGatewayConfigId=${productStorePaymentSetting.paymentGatewayConfigId}`)
    },
    paymentService: {type: GraphQLInt},
    paymentPropertiesPath: {type: GraphQLInt},
    paymentServiceTypeEnumId: {type: GraphQLString},
    applyToAllProducts: {type: GraphQLBoolean},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStorePaymentSetting, args, {loaders}) => loaders.ofbiz.load(`productStores/find?productStoreId=${productStorePaymentSetting.productStoreId}`)
    },
    paymentMethodType: {
      type: PaymentMethodTypeType,
      args : {paymentMethodTypeId: {type: GraphQLString}},
      resolve: (productStorePaymentSetting, args, {loaders}) => loaders.ofbiz.load(`paymentMethodTypes/find?paymentMethodTypeId=${productStorePaymentSetting.paymentMethodTypeId}`)
    },
    paymentCustomMethodId: {type: GraphQLString}
  })
});

export {ProductStorePaymentSettingType};
    