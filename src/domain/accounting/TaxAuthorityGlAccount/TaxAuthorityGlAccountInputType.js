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

const TaxAuthorityGlAccountInputType = new GraphQLInputObjectType({
  name: 'TaxAuthorityGlAccountInputType',
  description: 'input type for TaxAuthorityGlAccount',

  fields: () => ({
    glAccountId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString},
    taxAuthGeoId: {type: GraphQLString},
    taxAuthPartyId: {type: GraphQLString}
  })
});

export {TaxAuthorityGlAccountInputType};
    