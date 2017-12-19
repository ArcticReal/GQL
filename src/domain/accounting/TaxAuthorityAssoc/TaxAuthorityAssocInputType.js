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

const TaxAuthorityAssocInputType = new GraphQLInputObjectType({
  name: 'TaxAuthorityAssocInputType',
  description: 'input type for TaxAuthorityAssoc',

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

export {TaxAuthorityAssocInputType};
    