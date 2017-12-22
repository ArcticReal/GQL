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

const TaxAuthorityAssocResponseType = new GraphQLObjectType({
  name: 'TaxAuthorityAssocResponseType',
  description: 'response type for TaxAuthorityAssoc',

  fields: () => ({
    fromDate: {type: GraphQLString},
    taxAuthGeoId: {type: GraphQLString},
    taxAuthPartyId: {type: GraphQLString},
    taxAuthorityAssocTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    toTaxAuthGeoId: {type: GraphQLString},
    toTaxAuthPartyId: {type: GraphQLString}
  })
});

export {TaxAuthorityAssocResponseType};
    