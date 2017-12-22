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

const QuoteAdjustmentResponseType = new GraphQLObjectType({
  name: 'QuoteAdjustmentResponseType',
  description: 'response type for QuoteAdjustment',

  fields: () => ({
    amount: {type: GraphQLFloat},
    comments: {type: GraphQLString},
    correspondingProductId: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    customerReferenceId: {type: GraphQLString},
    description: {type: GraphQLString},
    exemptAmount: {type: GraphQLFloat},
    includeInShipping: {type: GraphQLBoolean},
    includeInTax: {type: GraphQLBoolean},
    lastModifiedByUserLogin: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    overrideGlAccountId: {type: GraphQLString},
    primaryGeoId: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    productPromoActionSeqId: {type: GraphQLString},
    productPromoId: {type: GraphQLString},
    productPromoRuleId: {type: GraphQLString},
    quoteAdjustmentId: {type: GraphQLString},
    quoteAdjustmentTypeId: {type: GraphQLString},
    quoteId: {type: GraphQLString},
    quoteItemSeqId: {type: GraphQLString},
    secondaryGeoId: {type: GraphQLString},
    sourcePercentage: {type: GraphQLFloat},
    sourceReferenceId: {type: GraphQLString},
    taxAuthGeoId: {type: GraphQLString},
    taxAuthPartyId: {type: GraphQLString}
  })
});

export {QuoteAdjustmentResponseType};
    