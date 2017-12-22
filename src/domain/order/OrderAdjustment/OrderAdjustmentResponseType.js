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

const OrderAdjustmentResponseType = new GraphQLObjectType({
  name: 'OrderAdjustmentResponseType',
  description: 'response type for OrderAdjustment',

  fields: () => ({
    amount: {type: GraphQLFloat},
    amountAlreadyIncluded: {type: GraphQLFloat},
    comments: {type: GraphQLString},
    correspondingProductId: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    customerReferenceId: {type: GraphQLString},
    description: {type: GraphQLString},
    exemptAmount: {type: GraphQLFloat},
    includeInShipping: {type: GraphQLBoolean},
    includeInTax: {type: GraphQLBoolean},
    isManual: {type: GraphQLBoolean},
    lastModifiedByUserLogin: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    oldAmountPerQuantity: {type: GraphQLFloat},
    oldPercentage: {type: GraphQLFloat},
    orderAdjustmentId: {type: GraphQLString},
    orderAdjustmentTypeId: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    originalAdjustmentId: {type: GraphQLString},
    overrideGlAccountId: {type: GraphQLString},
    primaryGeoId: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    productPromoActionSeqId: {type: GraphQLString},
    productPromoId: {type: GraphQLString},
    productPromoRuleId: {type: GraphQLString},
    recurringAmount: {type: GraphQLFloat},
    secondaryGeoId: {type: GraphQLString},
    shipGroupSeqId: {type: GraphQLString},
    sourcePercentage: {type: GraphQLFloat},
    sourceReferenceId: {type: GraphQLString},
    taxAuthGeoId: {type: GraphQLString},
    taxAuthPartyId: {type: GraphQLString},
    taxAuthorityRateSeqId: {type: GraphQLString}
  })
});

export {OrderAdjustmentResponseType};
    