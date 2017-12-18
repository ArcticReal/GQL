
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
    




const QuoteAdjustmentInputType = new GraphQLInputObjectType({
  name: 'QuoteAdjustmentInputType',
  description: 'input type for QuoteAdjustment',

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

export {QuoteAdjustmentInputType};
    