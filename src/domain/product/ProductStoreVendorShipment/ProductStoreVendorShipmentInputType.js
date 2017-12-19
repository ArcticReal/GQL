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

const ProductStoreVendorShipmentInputType = new GraphQLInputObjectType({
  name: 'ProductStoreVendorShipmentInputType',
  description: 'input type for ProductStoreVendorShipment',

  fields: () => ({
    carrierPartyId: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    shipmentMethodTypeId: {type: GraphQLString},
    vendorPartyId: {type: GraphQLString}
  })
});

export {ProductStoreVendorShipmentInputType};
    