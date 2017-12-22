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

const OldPartyTaxInfoResponseType = new GraphQLObjectType({
  name: 'OldPartyTaxInfoResponseType',
  description: 'response type for OldPartyTaxInfo',

  fields: () => ({
    fromDate: {type: GraphQLString},
    geoId: {type: GraphQLString},
    isExempt: {type: GraphQLBoolean},
    partyId: {type: GraphQLString},
    partyTaxId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {OldPartyTaxInfoResponseType};
    