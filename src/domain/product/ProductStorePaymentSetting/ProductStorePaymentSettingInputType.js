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

const ProductStorePaymentSettingInputType = new GraphQLInputObjectType({
  name: 'ProductStorePaymentSettingInputType',
  description: 'input type for ProductStorePaymentSetting',

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

export {ProductStorePaymentSettingInputType};
    