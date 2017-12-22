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

const TaxAuthorityRateTypeResponseType = new GraphQLObjectType({
  name: 'TaxAuthorityRateTypeResponseType',
  description: 'response type for TaxAuthorityRateType',

  fields: () => ({
    description: {type: GraphQLString},
    taxAuthorityRateTypeId: {type: GraphQLString}
  })
});

export {TaxAuthorityRateTypeResponseType};
    