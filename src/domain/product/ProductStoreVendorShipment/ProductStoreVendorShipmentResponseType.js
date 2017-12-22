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

const ProductStoreVendorShipmentResponseType = new GraphQLObjectType({
  name: 'ProductStoreVendorShipmentResponseType',
  description: 'response type for ProductStoreVendorShipment',

  fields: () => ({
    carrierPartyId: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    shipmentMethodTypeId: {type: GraphQLString},
    vendorPartyId: {type: GraphQLString}
  })
});

export {ProductStoreVendorShipmentResponseType};
    