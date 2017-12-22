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

const VendorProductResponseType = new GraphQLObjectType({
  name: 'VendorProductResponseType',
  description: 'response type for VendorProduct',

  fields: () => ({
    productId: {type: GraphQLString},
    productStoreGroupId: {type: GraphQLString},
    vendorPartyId: {type: GraphQLString}
  })
});

export {VendorProductResponseType};
    