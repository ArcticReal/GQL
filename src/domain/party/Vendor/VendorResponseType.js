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

const VendorResponseType = new GraphQLObjectType({
  name: 'VendorResponseType',
  description: 'response type for Vendor',

  fields: () => ({
    manifestCompanyName: {type: GraphQLString},
    manifestCompanyTitle: {type: GraphQLString},
    manifestLogoUrl: {type: GraphQLString},
    manifestPolicies: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {VendorResponseType};
    