
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
import {OrderHeaderType} from '../../order/OrderHeader/OrderHeaderType.js';
import {ReturnAdjustmentType} from '../../order/ReturnAdjustment/ReturnAdjustmentType.js';
import {TaxAuthorityRateProductType} from '../../accounting/TaxAuthorityRateProduct/TaxAuthorityRateProductType.js';
import {OrderAdjustmentTypeType} from '../../order/OrderAdjustmentType/OrderAdjustmentTypeType.js';
import {OrderAdjustmentAttributeType} from '../../order/OrderAdjustmentAttribute/OrderAdjustmentAttributeType.js';
import {TaxAuthorityType} from '../../accounting/TaxAuthority/TaxAuthorityType.js';
import {GlAccountType} from '../../accounting/GlAccount/GlAccountType.js';
import {OrderAdjustmentBillingType} from '../../order/OrderAdjustmentBilling/OrderAdjustmentBillingType.js';
import {UserLoginType} from '../../login/UserLogin/UserLoginType.js';


const OrderAdjustmentType = new GraphQLObjectType({
  name: 'OrderAdjustmentType',
  description: 'Type for OrderAdjustment in order',

  fields: () => ({
    customerReferenceId: {type: GraphQLString},
    correspondingProductId: {type: GraphQLString},
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderAdjustment, args, {loaders}) => loaders.ofbiz.load(`order/orderHeaders/find?orderId=${orderAdjustment.orderId}`)
    },
    includeInShipping: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    exemptAmount: {type: GraphQLFloat},
    productPromo: {
      type: ProductPromoType,
      args : {productPromoId: {type: GraphQLString}},
      resolve: (orderAdjustment, args, {loaders}) => loaders.ofbiz.load(`product/product/productPromos/find?productPromoId=${orderAdjustment.productPromoId}`)
    },
    taxAuthPartyId: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    oldPercentage: {type: GraphQLString/*this was a type I didn't find TODO find a solution*/},
    primaryGeoId: {type: GraphQLString},
    taxAuthGeo: {
      type: TaxAuthorityType,
      args : {taxAuthGeoId: {type: GraphQLString}},
      resolve: (orderAdjustment, args, {loaders}) => loaders.ofbiz.load(`accounting/taxAuthoritys/find?taxAuthGeoId=${orderAdjustment.taxAuthGeoId}`)
    },
    originalAdjustment: {
      type: OrderAdjustmentType,
      args : {originalAdjustmentId: {type: GraphQLString}},
      resolve: (orderAdjustment, args, {loaders}) => loaders.ofbiz.load(`order/orderAdjustments/find?orderAdjustmentId=${orderAdjustment.originalAdjustmentId}`)
    },
    secondaryGeoId: {type: GraphQLString},
    createdByUserLogin: {
      type: UserLoginType,
      args : {createdByUserLogin: {type: GraphQLString}},
      resolve: (orderAdjustment, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${orderAdjustment.createdByUserLogin}`)
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
      resolve: (orderAdjustment, args, {loaders}) => loaders.ofbiz.load(`order/orderAdjustment/orderAdjustmentTypes/find?orderAdjustmentTypeId=${orderAdjustment.orderAdjustmentTypeId}`)
    },
    productPromoRuleId: {type: GraphQLString},
    isManual: {type: GraphQLBoolean},
    productFeatureId: {type: GraphQLString},
    taxAuthorityRateSeq: {
      type: TaxAuthorityRateProductType,
      args : {taxAuthorityRateSeqId: {type: GraphQLString}},
      resolve: (orderAdjustment, args, {loaders}) => loaders.ofbiz.load(`accounting/taxAuthority/taxAuthorityRateProducts/find?taxAuthorityRateSeqId=${orderAdjustment.taxAuthorityRateSeqId}`)
    },
    overrideGlAccount: {
      type: GlAccountType,
      args : {overrideGlAccountId: {type: GraphQLString}},
      resolve: (orderAdjustment, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccounts/find?glAccountId=${orderAdjustment.overrideGlAccountId}`)
    },
    oldAmountPerQuantity: {type: GraphQLString/*this was a type I didn't find TODO find a solution*/},
    shipGroupSeqId: {type: GraphQLString},
    includeInTax: {type: GraphQLBoolean},
    createdDate: {type: GraphQLString},
    productPromoActionSeqId: {type: GraphQLString},
    sourcePercentage: {type: GraphQLFloat},
    orderAdjustmentAttributes: {
      type: new GraphQLList(OrderAdjustmentAttributeType),
      args : {},
      resolve: (orderAdjustment, args, {loaders}) => loaders.ofbizArray.load(`order/orderAdjustment/orderAdjustmentAttributes/find?orderAdjustmentId=${orderAdjustment.orderAdjustmentId}`)
    },
    orderAdjustmentBillings: {
      type: new GraphQLList(OrderAdjustmentBillingType),
      args : {},
      resolve: (orderAdjustment, args, {loaders}) => loaders.ofbizArray.load(`order/orderAdjustment/orderAdjustmentBillings/find?orderAdjustmentId=${orderAdjustment.orderAdjustmentId}`)
    },
    returnAdjustments: {
      type: new GraphQLList(ReturnAdjustmentType),
      args : {},
      resolve: (orderAdjustment, args, {loaders}) => loaders.ofbizArray.load(`order/returnAdjustments/find?orderAdjustmentId=${orderAdjustment.orderAdjustmentId}`)
    }
  })
});

export {OrderAdjustmentType};
    