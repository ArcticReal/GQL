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

const ProductStoreVendorPaymentInputType = new GraphQLInputObjectType({
  name: 'ProductStoreVendorPaymentInputType',
  description: 'input type for ProductStoreVendorPayment',

  fields: () => ({
    creditCardEnumId: {type: GraphQLString},
    paymentMethodTypeId: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    vendorPartyId: {type: GraphQLString}
  })
});

export {ProductStoreVendorPaymentInputType};
    