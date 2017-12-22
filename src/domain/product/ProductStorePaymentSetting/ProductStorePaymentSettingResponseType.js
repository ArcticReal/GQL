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

const ProductStorePaymentSettingResponseType = new GraphQLObjectType({
  name: 'ProductStorePaymentSettingResponseType',
  description: 'response type for ProductStorePaymentSetting',

  fields: () => ({
    applyToAllProducts: {type: GraphQLBoolean},
    paymentCustomMethodId: {type: GraphQLString},
    paymentGatewayConfigId: {type: GraphQLString},
    paymentMethodTypeId: {type: GraphQLString},
    paymentPropertiesPath: {type: GraphQLString},
    paymentService: {type: GraphQLString},
    paymentServiceTypeEnumId: {type: GraphQLString},
    productStoreId: {type: GraphQLString}
  })
});

export {ProductStorePaymentSettingResponseType};
    