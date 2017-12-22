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

const TaxAuthorityResponseType = new GraphQLObjectType({
  name: 'TaxAuthorityResponseType',
  description: 'response type for TaxAuthority',

  fields: () => ({
    includeTaxInPrice: {type: GraphQLBoolean},
    requireTaxIdForExemption: {type: GraphQLBoolean},
    taxAuthGeoId: {type: GraphQLString},
    taxAuthPartyId: {type: GraphQLString},
    taxIdFormatPattern: {type: GraphQLString}
  })
});

export {TaxAuthorityResponseType};
    