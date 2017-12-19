
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
import {ReturnHeaderType} from '../../order/ReturnHeader/ReturnHeaderType.js';
import {OrderAdjustmentType} from '../../order/OrderAdjustment/OrderAdjustmentType.js';
import {ReturnAdjustmentTypeType} from '../../order/ReturnAdjustmentType/ReturnAdjustmentTypeType.js';
import {TaxAuthorityRateProductType} from '../../accounting/TaxAuthorityRateProduct/TaxAuthorityRateProductType.js';
import {ReturnTypeType} from '../../order/ReturnType/ReturnTypeType.js';
import {TaxAuthorityType} from '../../accounting/TaxAuthority/TaxAuthorityType.js';
import {GlAccountType} from '../../accounting/GlAccount/GlAccountType.js';
import {UserLoginType} from '../../login/UserLogin/UserLoginType.js';


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
      resolve: (returnAdjustment, args, {loaders}) => loaders.ofbiz.load(`order/returnTypes/find?returnTypeId=${returnAdjustment.returnTypeId}`)
    },
    exemptAmount: {type: GraphQLFloat},
    productPromo: {
      type: ProductPromoType,
      args : {productPromoId: {type: GraphQLString}},
      resolve: (returnAdjustment, args, {loaders}) => loaders.ofbiz.load(`product/product/productPromos/find?productPromoId=${returnAdjustment.productPromoId}`)
    },
    taxAuthPartyId: {type: GraphQLString},
    returnAdjustmentType: {
      type: ReturnAdjustmentTypeType,
      args : {returnAdjustmentTypeId: {type: GraphQLString}},
      resolve: (returnAdjustment, args, {loaders}) => loaders.ofbiz.load(`order/returnAdjustment/returnAdjustmentTypes/find?returnAdjustmentTypeId=${returnAdjustment.returnAdjustmentTypeId}`)
    },
    lastModifiedByUserLogin: {type: GraphQLString},
    primaryGeoId: {type: GraphQLString},
    return: {
      type: ReturnHeaderType,
      args : {returnId: {type: GraphQLString}},
      resolve: (returnAdjustment, args, {loaders}) => loaders.ofbiz.load(`order/returnHeaders/find?returnId=${returnAdjustment.returnId}`)
    },
    taxAuthGeo: {
      type: TaxAuthorityType,
      args : {taxAuthGeoId: {type: GraphQLString}},
      resolve: (returnAdjustment, args, {loaders}) => loaders.ofbiz.load(`accounting/taxAuthoritys/find?taxAuthGeoId=${returnAdjustment.taxAuthGeoId}`)
    },
    secondaryGeoId: {type: GraphQLString},
    createdByUserLogin: {
      type: UserLoginType,
      args : {createdByUserLogin: {type: GraphQLString}},
      resolve: (returnAdjustment, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${returnAdjustment.createdByUserLogin}`)
    },
    orderAdjustment: {
      type: OrderAdjustmentType,
      args : {orderAdjustmentId: {type: GraphQLString}},
      resolve: (returnAdjustment, args, {loaders}) => loaders.ofbiz.load(`order/orderAdjustments/find?orderAdjustmentId=${returnAdjustment.orderAdjustmentId}`)
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
      resolve: (returnAdjustment, args, {loaders}) => loaders.ofbiz.load(`accounting/taxAuthority/taxAuthorityRateProducts/find?taxAuthorityRateSeqId=${returnAdjustment.taxAuthorityRateSeqId}`)
    },
    overrideGlAccount: {
      type: GlAccountType,
      args : {overrideGlAccountId: {type: GraphQLString}},
      resolve: (returnAdjustment, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccounts/find?glAccountId=${returnAdjustment.overrideGlAccountId}`)
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
    