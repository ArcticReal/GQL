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

const VendorInputType = new GraphQLInputObjectType({
  name: 'VendorInputType',
  description: 'input type for Vendor',

  fields: () => ({
    manifestCompanyName: {type: GraphQLString},
    manifestCompanyTitle: {type: GraphQLString},
    manifestLogoUrl: {type: GraphQLString},
    manifestPolicies: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {VendorInputType};
    