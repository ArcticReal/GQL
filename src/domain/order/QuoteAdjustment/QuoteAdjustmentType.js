
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

import {ProductPromoType} from '../../product/ProductPromo/ProductPromoType.js';
import {QuoteType} from '../../order/Quote/QuoteType.js';
import {OrderAdjustmentTypeType} from '../../order/OrderAdjustmentType/OrderAdjustmentTypeType.js';
import {TaxAuthorityType} from '../../accounting/TaxAuthority/TaxAuthorityType.js';
import {GlAccountType} from '../../accounting/GlAccount/GlAccountType.js';
import {UserLoginType} from '../../login/UserLogin/UserLoginType.js';


const QuoteAdjustmentType = new GraphQLObjectType({
  name: 'QuoteAdjustmentType',
  description: 'Type for QuoteAdjustment in order',

  fields: () => ({
    customerReferenceId: {type: GraphQLString},
    correspondingProductId: {type: GraphQLString},
    includeInShipping: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    exemptAmount: {type: GraphQLFloat},
    productPromo: {
      type: ProductPromoType,
      args : {productPromoId: {type: GraphQLString}},
      resolve: (quoteAdjustment, args, {loaders}) => loaders.ofbiz.load(`product/product/productPromos/find?productPromoId=${quoteAdjustment.productPromoId}`)
    },
    taxAuthPartyId: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    quoteAdjustmentId: {type: GraphQLString},
    primaryGeoId: {type: GraphQLString},
    taxAuthGeo: {
      type: TaxAuthorityType,
      args : {taxAuthGeoId: {type: GraphQLString}},
      resolve: (quoteAdjustment, args, {loaders}) => loaders.ofbiz.load(`accounting/taxAuthoritys/find?taxAuthGeoId=${quoteAdjustment.taxAuthGeoId}`)
    },
    secondaryGeoId: {type: GraphQLString},
    createdByUserLogin: {
      type: UserLoginType,
      args : {createdByUserLogin: {type: GraphQLString}},
      resolve: (quoteAdjustment, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${quoteAdjustment.createdByUserLogin}`)
    },
    amount: {type: GraphQLFloat},
    comments: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    sourceReferenceId: {type: GraphQLString},
    quoteItemSeqId: {type: GraphQLString},
    productPromoRuleId: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    overrideGlAccount: {
      type: GlAccountType,
      args : {overrideGlAccountId: {type: GraphQLString}},
      resolve: (quoteAdjustment, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccounts/find?glAccountId=${quoteAdjustment.overrideGlAccountId}`)
    },
    quote: {
      type: QuoteType,
      args : {quoteId: {type: GraphQLString}},
      resolve: (quoteAdjustment, args, {loaders}) => loaders.ofbiz.load(`order/quotes/find?quoteId=${quoteAdjustment.quoteId}`)
    },
    includeInTax: {type: GraphQLBoolean},
    quoteAdjustmentType: {
      type: OrderAdjustmentTypeType,
      args : {quoteAdjustmentTypeId: {type: GraphQLString}},
      resolve: (quoteAdjustment, args, {loaders}) => loaders.ofbiz.load(`order/orderAdjustment/orderAdjustmentTypes/find?orderAdjustmentTypeId=${quoteAdjustment.quoteAdjustmentTypeId}`)
    },
    createdDate: {type: GraphQLString},
    productPromoActionSeqId: {type: GraphQLString},
    sourcePercentage: {type: GraphQLFloat}
  })
});

export {QuoteAdjustmentType};
    