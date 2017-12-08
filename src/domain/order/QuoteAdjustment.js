
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

import {ProductPromoType} from '../product/ProductPromo.js';
import {QuoteType} from '../order/Quote.js';
import {OrderAdjustmentTypeType} from '../order/OrderAdjustmentType.js';
import {TaxAuthorityType} from '../accounting/TaxAuthority.js';
import {GlAccountType} from '../accounting/GlAccount.js';
import {UserLoginType} from '../login/UserLogin.js';


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
      resolve: (quoteAdjustment, args, {loaders}) => loaders.ofbiz.load(`productPromos/find?productPromoId=${quoteAdjustment.productPromoId}`)
    },
    taxAuthPartyId: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    quoteAdjustmentId: {type: GraphQLString},
    primaryGeoId: {type: GraphQLString},
    taxAuthGeo: {
      type: TaxAuthorityType,
      args : {taxAuthGeoId: {type: GraphQLString}},
      resolve: (quoteAdjustment, args, {loaders}) => loaders.ofbiz.load(`taxAuthoritys/find?taxAuthGeoId=${quoteAdjustment.taxAuthGeoId}`)
    },
    secondaryGeoId: {type: GraphQLString},
    createdByUserLogin: {
      type: UserLoginType,
      args : {createdByUserLogin: {type: GraphQLString}},
      resolve: (quoteAdjustment, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${quoteAdjustment.createdByUserLogin}`)
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
      resolve: (quoteAdjustment, args, {loaders}) => loaders.ofbiz.load(`glAccounts/find?glAccountId=${quoteAdjustment.overrideGlAccountId}`)
    },
    quote: {
      type: QuoteType,
      args : {quoteId: {type: GraphQLString}},
      resolve: (quoteAdjustment, args, {loaders}) => loaders.ofbiz.load(`quotes/find?quoteId=${quoteAdjustment.quoteId}`)
    },
    includeInTax: {type: GraphQLBoolean},
    quoteAdjustmentType: {
      type: OrderAdjustmentTypeType,
      args : {quoteAdjustmentTypeId: {type: GraphQLString}},
      resolve: (quoteAdjustment, args, {loaders}) => loaders.ofbiz.load(`orderAdjustmentTypes/find?orderAdjustmentTypeId=${quoteAdjustment.quoteAdjustmentTypeId}`)
    },
    createdDate: {type: GraphQLString},
    productPromoActionSeqId: {type: GraphQLString},
    sourcePercentage: {type: GraphQLFloat}
  })
});

export {QuoteAdjustmentType};
    




const QuoteAdjustmentInputType = new GraphQLInputObjectType({
  name: 'QuoteAdjustmentInputType',
  description: 'input type for QuoteAdjustment in order',

  fields: () => ({
    customerReferenceId: {type: GraphQLString},
    correspondingProductId: {type: GraphQLString},
    includeInShipping: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    exemptAmount: {type: GraphQLFloat},
    productPromoId: {type: GraphQLString},
    taxAuthPartyId: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    quoteAdjustmentId: {type: GraphQLString},
    primaryGeoId: {type: GraphQLString},
    taxAuthGeoId: {type: GraphQLString},
    secondaryGeoId: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString},
    amount: {type: GraphQLFloat},
    comments: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    sourceReferenceId: {type: GraphQLString},
    quoteItemSeqId: {type: GraphQLString},
    productPromoRuleId: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    overrideGlAccountId: {type: GraphQLString},
    quoteId: {type: GraphQLString},
    includeInTax: {type: GraphQLBoolean},
    quoteAdjustmentTypeId: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    productPromoActionSeqId: {type: GraphQLString},
    sourcePercentage: {type: GraphQLFloat}
  })
});

export {QuoteAdjustmentInputType};
    