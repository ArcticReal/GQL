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

const TaxAuthorityInputType = new GraphQLInputObjectType({
  name: 'TaxAuthorityInputType',
  description: 'input type for TaxAuthority',

  fields: () => ({
    includeTaxInPrice: {type: GraphQLBoolean},
    requireTaxIdForExemption: {type: GraphQLBoolean},
    taxAuthGeoId: {type: GraphQLString},
    taxAuthPartyId: {type: GraphQLString},
    taxIdFormatPattern: {type: GraphQLString}
  })
});

export {TaxAuthorityInputType};
    