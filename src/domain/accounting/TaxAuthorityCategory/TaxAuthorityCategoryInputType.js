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

const TaxAuthorityCategoryInputType = new GraphQLInputObjectType({
  name: 'TaxAuthorityCategoryInputType',
  description: 'input type for TaxAuthorityCategory',

  fields: () => ({
    productCategoryId: {type: GraphQLString},
    taxAuthGeoId: {type: GraphQLString},
    taxAuthPartyId: {type: GraphQLString}
  })
});

export {TaxAuthorityCategoryInputType};
    