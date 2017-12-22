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

const ReturnAdjustmentResponseType = new GraphQLObjectType({
  name: 'ReturnAdjustmentResponseType',
  description: 'response type for ReturnAdjustment',

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
    orderAdjustmentId: {type: GraphQLString},
    overrideGlAccountId: {type: GraphQLString},
    primaryGeoId: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    productPromoActionSeqId: {type: GraphQLString},
    productPromoId: {type: GraphQLString},
    productPromoRuleId: {type: GraphQLString},
    returnAdjustmentId: {type: GraphQLString},
    returnAdjustmentTypeId: {type: GraphQLString},
    returnId: {type: GraphQLString},
    returnItemSeqId: {type: GraphQLString},
    returnTypeId: {type: GraphQLString},
    secondaryGeoId: {type: GraphQLString},
    shipGroupSeqId: {type: GraphQLString},
    sourcePercentage: {type: GraphQLFloat},
    sourceReferenceId: {type: GraphQLString},
    taxAuthGeoId: {type: GraphQLString},
    taxAuthPartyId: {type: GraphQLString},
    taxAuthorityRateSeqId: {type: GraphQLString}
  })
});

export {ReturnAdjustmentResponseType};
    