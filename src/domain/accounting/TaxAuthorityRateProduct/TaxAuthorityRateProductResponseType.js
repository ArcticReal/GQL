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

const TaxAuthorityRateProductResponseType = new GraphQLObjectType({
  name: 'TaxAuthorityRateProductResponseType',
  description: 'response type for TaxAuthorityRateProduct',

  fields: () => ({
    description: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    minItemPrice: {type: GraphQLFloat},
    minPurchase: {type: GraphQLFloat},
    productCategoryId: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    taxAuthGeoId: {type: GraphQLString},
    taxAuthPartyId: {type: GraphQLString},
    taxAuthorityRateSeqId: {type: GraphQLString},
    taxAuthorityRateTypeId: {type: GraphQLString},
    taxPercentage: {type: GraphQLFloat},
    taxPromotions: {type: GraphQLBoolean},
    taxShipping: {type: GraphQLBoolean},
    thruDate: {type: GraphQLString},
    titleTransferEnumId: {type: GraphQLString}
  })
});

export {TaxAuthorityRateProductResponseType};
    