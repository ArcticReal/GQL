
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
import {OrderHeaderType} from '../order/OrderHeaderType.js';
import {ReturnAdjustmentType} from '../order/ReturnAdjustmentType.js';
import {TaxAuthorityRateProductType} from '../accounting/TaxAuthorityRateProductType.js';
import {OrderAdjustmentTypeType} from '../order/OrderAdjustmentTypeType.js';
import {OrderAdjustmentAttributeType} from '../order/OrderAdjustmentAttributeType.js';
import {TaxAuthorityType} from '../accounting/TaxAuthorityType.js';
import {GlAccountType} from '../accounting/GlAccountType.js';
import {OrderAdjustmentBillingType} from '../order/OrderAdjustmentBillingType.js';
import {UserLoginType} from '../login/UserLoginType.js';


const OrderAdjustmentType = new GraphQLObjectType({
  name: 'OrderAdjustmentType',
  description: 'Type for OrderAdjustment in order',

  fields: () => ({
    customerReferenceId: {type: GraphQLString},
    correspondingProductId: {type: GraphQLString},
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderAdjustment, args, {loaders}) => loaders.ofbiz.load(`orderHeaders/find?orderId=${orderAdjustment.orderId}`)
    },
    includeInShipping: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    exemptAmount: {type: GraphQLFloat},
    productPromo: {
      type: ProductPromoType,
      args : {productPromoId: {type: GraphQLString}},
      resolve: (orderAdjustment, args, {loaders}) => loaders.ofbiz.load(`productPromos/find?productPromoId=${orderAdjustment.productPromoId}`)
    },
    taxAuthPartyId: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    oldPercentage: {type: GraphQLString/*this was a type I didn't find TODO find a solution*/},
    primaryGeoId: {type: GraphQLString},
    taxAuthGeo: {
      type: TaxAuthorityType,
      args : {taxAuthGeoId: {type: GraphQLString}},
      resolve: (orderAdjustment, args, {loaders}) => loaders.ofbiz.load(`taxAuthoritys/find?taxAuthGeoId=${orderAdjustment.taxAuthGeoId}`)
    },
    originalAdjustment: {
      type: OrderAdjustmentType,
      args : {originalAdjustmentId: {type: GraphQLString}},
      resolve: (orderAdjustment, args, {loaders}) => loaders.ofbiz.load(`orderAdjustments/find?orderAdjustmentId=${orderAdjustment.originalAdjustmentId}`)
    },
    secondaryGeoId: {type: GraphQLString},
    createdByUserLogin: {
      type: UserLoginType,
      args : {createdByUserLogin: {type: GraphQLString}},
      resolve: (orderAdjustment, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${orderAdjustment.createdByUserLogin}`)
    },
    orderAdjustmentId: {type: GraphQLString},
    amountAlreadyIncluded: {type: GraphQLFloat},
    orderItemSeqId: {type: GraphQLString},
    amount: {type: GraphQLFloat},
    comments: {type: GraphQLString},
    recurringAmount: {type: GraphQLFloat},
    lastModifiedDate: {type: GraphQLString},
    sourceReferenceId: {type: GraphQLString},
    orderAdjustmentType: {
      type: OrderAdjustmentTypeType,
      args : {orderAdjustmentTypeId: {type: GraphQLString}},
      resolve: (orderAdjustment, args, {loaders}) => loaders.ofbiz.load(`orderAdjustmentTypes/find?orderAdjustmentTypeId=${orderAdjustment.orderAdjustmentTypeId}`)
    },
    productPromoRuleId: {type: GraphQLString},
    isManual: {type: GraphQLBoolean},
    productFeatureId: {type: GraphQLString},
    taxAuthorityRateSeq: {
      type: TaxAuthorityRateProductType,
      args : {taxAuthorityRateSeqId: {type: GraphQLString}},
      resolve: (orderAdjustment, args, {loaders}) => loaders.ofbiz.load(`taxAuthorityRateProducts/find?taxAuthorityRateSeqId=${orderAdjustment.taxAuthorityRateSeqId}`)
    },
    overrideGlAccount: {
      type: GlAccountType,
      args : {overrideGlAccountId: {type: GraphQLString}},
      resolve: (orderAdjustment, args, {loaders}) => loaders.ofbiz.load(`glAccounts/find?glAccountId=${orderAdjustment.overrideGlAccountId}`)
    },
    oldAmountPerQuantity: {type: GraphQLString/*this was a type I didn't find TODO find a solution*/},
    shipGroupSeqId: {type: GraphQLString},
    includeInTax: {type: GraphQLBoolean},
    createdDate: {type: GraphQLString},
    productPromoActionSeqId: {type: GraphQLString},
    sourcePercentage: {type: GraphQLFloat},
    orderAdjustmentAttribute: {
      type: new GraphQLList(OrderAdjustmentAttributeType),
      args : {orderAdjustmentId: {type: GraphQLString}},
      resolve: (orderAdjustment, args, {loaders}) => loaders.ofbizArray.load(`orderAdjustmentAttributes/find?orderAdjustmentId=${orderAdjustment.orderAdjustmentId}`)
    },
    orderAdjustmentBilling: {
      type: new GraphQLList(OrderAdjustmentBillingType),
      args : {orderAdjustmentId: {type: GraphQLString}},
      resolve: (orderAdjustment, args, {loaders}) => loaders.ofbizArray.load(`orderAdjustmentBillings/find?orderAdjustmentId=${orderAdjustment.orderAdjustmentId}`)
    },
    returnAdjustment: {
      type: new GraphQLList(ReturnAdjustmentType),
      args : {orderAdjustmentId: {type: GraphQLString}},
      resolve: (orderAdjustment, args, {loaders}) => loaders.ofbizArray.load(`returnAdjustments/find?orderAdjustmentId=${orderAdjustment.orderAdjustmentId}`)
    }
  })
});

export {OrderAdjustmentType};
    