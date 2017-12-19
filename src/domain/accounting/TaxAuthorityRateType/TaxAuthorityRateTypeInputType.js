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

const TaxAuthorityRateTypeInputType = new GraphQLInputObjectType({
  name: 'TaxAuthorityRateTypeInputType',
  description: 'input type for TaxAuthorityRateType',

  fields: () => ({
    description: {type: GraphQLString},
    taxAuthorityRateTypeId: {type: GraphQLString}
  })
});

export {TaxAuthorityRateTypeInputType};
    