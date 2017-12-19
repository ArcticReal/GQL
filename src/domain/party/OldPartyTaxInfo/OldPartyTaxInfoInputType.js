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

const OldPartyTaxInfoInputType = new GraphQLInputObjectType({
  name: 'OldPartyTaxInfoInputType',
  description: 'input type for OldPartyTaxInfo',

  fields: () => ({
    fromDate: {type: GraphQLString},
    geoId: {type: GraphQLString},
    isExempt: {type: GraphQLBoolean},
    partyId: {type: GraphQLString},
    partyTaxId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {OldPartyTaxInfoInputType};
    