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

const TaxAuthorityCategoryResponseType = new GraphQLObjectType({
  name: 'TaxAuthorityCategoryResponseType',
  description: 'response type for TaxAuthorityCategory',

  fields: () => ({
    productCategoryId: {type: GraphQLString},
    taxAuthGeoId: {type: GraphQLString},
    taxAuthPartyId: {type: GraphQLString}
  })
});

export {TaxAuthorityCategoryResponseType};
    