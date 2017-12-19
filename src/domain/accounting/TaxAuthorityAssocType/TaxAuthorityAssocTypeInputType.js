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

const TaxAuthorityAssocTypeInputType = new GraphQLInputObjectType({
  name: 'TaxAuthorityAssocTypeInputType',
  description: 'input type for TaxAuthorityAssocType',

  fields: () => ({
    description: {type: GraphQLString},
    taxAuthorityAssocTypeId: {type: GraphQLString}
  })
});

export {TaxAuthorityAssocTypeInputType};
    