
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductPromoType} from '../product/ProductPromoType.js';
import {ReturnHeaderType} from '../order/ReturnHeaderType.js';
import {OrderAdjustmentType} from '../order/OrderAdjustmentType.js';
import {ReturnAdjustmentTypeType} from '../order/ReturnAdjustmentTypeType.js';
import {TaxAuthorityRateProductType} from '../accounting/TaxAuthorityRateProductType.js';
import {ReturnTypeType} from '../order/ReturnTypeType.js';
import {TaxAuthorityType} from '../accounting/TaxAuthorityType.js';
import {GlAccountType} from '../accounting/GlAccountType.js';
import {UserLoginType} from '../login/UserLoginType.js';


const ReturnAdjustmentType = new GraphQLObjectType({
  name: 'ReturnAdjustmentType',
  description: 'Type for ReturnAdjustment in order',

  fields: () => ({
    customerReferenceId: {type: GraphQLString},
    correspondingProductId: {type: GraphQLString},
    includeInShipping: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    returnType: {
      type: ReturnTypeType,
      args : {returnTypeId: {type: GraphQLString}},
      resolve: (returnAdjustment, args, {loaders}) => loaders.ofbiz.load(`returnTypes/find?returnTypeId=${returnAdjustment.returnTypeId}`)
    },
    exemptAmount: {type: GraphQLFloat},
    productPromo: {
      type: ProductPromoType,
      args : {productPromoId: {type: GraphQLString}},
      resolve: (returnAdjustment, args, {loaders}) => loaders.ofbiz.load(`productPromos/find?productPromoId=${returnAdjustment.productPromoId}`)
    },
    taxAuthPartyId: {type: GraphQLString},
    returnAdjustmentType: {
      type: ReturnAdjustmentTypeType,
      args : {returnAdjustmentTypeId: {type: GraphQLString}},
      resolve: (returnAdjustment, args, {loaders}) => loaders.ofbiz.load(`returnAdjustmentTypes/find?returnAdjustmentTypeId=${returnAdjustment.returnAdjustmentTypeId}`)
    },
    lastModifiedByUserLogin: {type: GraphQLString},
    primaryGeoId: {type: GraphQLString},
    return: {
      type: ReturnHeaderType,
      args : {returnId: {type: GraphQLString}},
      resolve: (returnAdjustment, args, {loaders}) => loaders.ofbiz.load(`returnHeaders/find?returnId=${returnAdjustment.returnId}`)
    },
    taxAuthGeo: {
      type: TaxAuthorityType,
      args : {taxAuthGeoId: {type: GraphQLString}},
      resolve: (returnAdjustment, args, {loaders}) => loaders.ofbiz.load(`taxAuthoritys/find?taxAuthGeoId=${returnAdjustment.taxAuthGeoId}`)
    },
    secondaryGeoId: {type: GraphQLString},
    createdByUserLogin: {
      type: UserLoginType,
      args : {createdByUserLogin: {type: GraphQLString}},
      resolve: (returnAdjustment, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${returnAdjustment.createdByUserLogin}`)
    },
    orderAdjustment: {
      type: OrderAdjustmentType,
      args : {orderAdjustmentId: {type: GraphQLString}},
      resolve: (returnAdjustment, args, {loaders}) => loaders.ofbiz.load(`orderAdjustments/find?orderAdjustmentId=${returnAdjustment.orderAdjustmentId}`)
    },
    amount: {type: GraphQLFloat},
    comments: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    sourceReferenceId: {type: GraphQLString},
    productPromoRuleId: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    taxAuthorityRateSeq: {
      type: TaxAuthorityRateProductType,
      args : {taxAuthorityRateSeqId: {type: GraphQLString}},
      resolve: (returnAdjustment, args, {loaders}) => loaders.ofbiz.load(`taxAuthorityRateProducts/find?taxAuthorityRateSeqId=${returnAdjustment.taxAuthorityRateSeqId}`)
    },
    overrideGlAccount: {
      type: GlAccountType,
      args : {overrideGlAccountId: {type: GraphQLString}},
      resolve: (returnAdjustment, args, {loaders}) => loaders.ofbiz.load(`glAccounts/find?glAccountId=${returnAdjustment.overrideGlAccountId}`)
    },
    shipGroupSeqId: {type: GraphQLString},
    includeInTax: {type: GraphQLBoolean},
    returnAdjustmentId: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    productPromoActionSeqId: {type: GraphQLString},
    sourcePercentage: {type: GraphQLFloat},
    returnItemSeqId: {type: GraphQLString}
  })
});

export {ReturnAdjustmentType};
    