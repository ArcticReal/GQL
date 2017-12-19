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

const VendorProductInputType = new GraphQLInputObjectType({
  name: 'VendorProductInputType',
  description: 'input type for VendorProduct',

  fields: () => ({
    productId: {type: GraphQLString},
    productStoreGroupId: {type: GraphQLString},
    vendorPartyId: {type: GraphQLString}
  })
});

export {VendorProductInputType};
    