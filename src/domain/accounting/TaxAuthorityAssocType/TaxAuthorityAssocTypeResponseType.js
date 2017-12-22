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

const TaxAuthorityAssocTypeResponseType = new GraphQLObjectType({
  name: 'TaxAuthorityAssocTypeResponseType',
  description: 'response type for TaxAuthorityAssocType',

  fields: () => ({
    description: {type: GraphQLString},
    taxAuthorityAssocTypeId: {type: GraphQLString}
  })
});

export {TaxAuthorityAssocTypeResponseType};
    