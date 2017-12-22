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

const ProductStoreVendorPaymentResponseType = new GraphQLObjectType({
  name: 'ProductStoreVendorPaymentResponseType',
  description: 'response type for ProductStoreVendorPayment',

  fields: () => ({
    creditCardEnumId: {type: GraphQLString},
    paymentMethodTypeId: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    vendorPartyId: {type: GraphQLString}
  })
});

export {ProductStoreVendorPaymentResponseType};
    