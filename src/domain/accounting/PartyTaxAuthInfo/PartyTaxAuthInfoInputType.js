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

const PartyTaxAuthInfoInputType = new GraphQLInputObjectType({
  name: 'PartyTaxAuthInfoInputType',
  description: 'input type for PartyTaxAuthInfo',

  fields: () => ({
    fromDate: {type: GraphQLString},
    isExempt: {type: GraphQLBoolean},
    isNexus: {type: GraphQLBoolean},
    partyId: {type: GraphQLString},
    partyTaxId: {type: GraphQLString},
    taxAuthGeoId: {type: GraphQLString},
    taxAuthPartyId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PartyTaxAuthInfoInputType};
    