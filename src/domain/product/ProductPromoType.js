
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductStorePromoApplType} from '../product/ProductStorePromoApplType.js';
import {OrderAdjustmentType} from '../order/OrderAdjustmentType.js';
import {ProductPromoCondType} from '../product/ProductPromoCondType.js';
import {ReturnAdjustmentType} from '../order/ReturnAdjustmentType.js';
import {ProductPromoCodeType} from '../product/ProductPromoCodeType.js';
import {ProductPromoCategoryType} from '../product/ProductPromoCategoryType.js';
import {ProductPromoProductType} from '../product/ProductPromoProductType.js';
import {ProductPromoActionType} from '../product/ProductPromoActionType.js';
import {ProductPromoRuleType} from '../product/ProductPromoRuleType.js';
import {ProductPromoContentType} from '../product/ProductPromoContentType.js';
import {PartyType} from '../party/PartyType.js';
import {QuoteAdjustmentType} from '../order/QuoteAdjustmentType.js';
import {MarketingCampaignPromoType} from '../marketing/MarketingCampaignPromoType.js';
import {AgreementPromoApplType} from '../party/AgreementPromoApplType.js';
import {ProductPromoUseType} from '../product/ProductPromoUseType.js';
import {UserLoginType} from '../login/UserLoginType.js';


const ProductPromoType = new GraphQLObjectType({
  name: 'ProductPromoType',
  description: 'Type for ProductPromo in product',

  fields: () => ({
    showToCustomer: {type: GraphQLBoolean},
    lastModifiedDate: {type: GraphQLString},
    requireCode: {type: GraphQLBoolean},
    overrideOrgParty: {
      type: PartyType,
      args : {overrideOrgPartyId: {type: GraphQLString}},
      resolve: (productPromo, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${productPromo.overrideOrgPartyId}`)
    },
    productPromoId: {type: GraphQLString},
    useLimitPerCustomer: {type: GraphQLInt},
    useLimitPerOrder: {type: GraphQLInt},
    useLimitPerPromotion: {type: GraphQLInt},
    promoName: {type: GraphQLString},
    promoText: {type: GraphQLString},
    userEntered: {type: GraphQLBoolean},
    lastModifiedByUserLogin: {
      type: UserLoginType,
      args : {lastModifiedByUserLogin: {type: GraphQLString}},
      resolve: (productPromo, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${productPromo.lastModifiedByUserLogin}`)
    },
    createdDate: {type: GraphQLString},
    billbackFactor: {type: GraphQLFloat},
    createdByUserLogin: {
      type: UserLoginType,
      args : {createdByUserLogin: {type: GraphQLString}},
      resolve: (productPromo, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${productPromo.createdByUserLogin}`)
    },
    productStorePromoAppl: {
      type: new GraphQLList(ProductStorePromoApplType),
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromo, args, {loaders}) => loaders.ofbizArray.load(`productStorePromoAppls/find?productPromoId=${productPromo.productPromoId}`)
    },
    productPromoAction: {
      type: new GraphQLList(ProductPromoActionType),
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromo, args, {loaders}) => loaders.ofbizArray.load(`productPromoActions/find?productPromoId=${productPromo.productPromoId}`)
    },
    agreementPromoAppl: {
      type: new GraphQLList(AgreementPromoApplType),
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromo, args, {loaders}) => loaders.ofbizArray.load(`agreementPromoAppls/find?productPromoId=${productPromo.productPromoId}`)
    },
    productPromoCategory: {
      type: new GraphQLList(ProductPromoCategoryType),
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromo, args, {loaders}) => loaders.ofbizArray.load(`productPromoCategorys/find?productPromoId=${productPromo.productPromoId}`)
    },
    productPromoContent: {
      type: new GraphQLList(ProductPromoContentType),
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromo, args, {loaders}) => loaders.ofbizArray.load(`productPromoContents/find?productPromoId=${productPromo.productPromoId}`)
    },
    marketingCampaignPromo: {
      type: new GraphQLList(MarketingCampaignPromoType),
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromo, args, {loaders}) => loaders.ofbizArray.load(`marketingCampaignPromos/find?productPromoId=${productPromo.productPromoId}`)
    },
    productPromoCond: {
      type: new GraphQLList(ProductPromoCondType),
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromo, args, {loaders}) => loaders.ofbizArray.load(`productPromoConds/find?productPromoId=${productPromo.productPromoId}`)
    },
    returnAdjustment: {
      type: new GraphQLList(ReturnAdjustmentType),
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromo, args, {loaders}) => loaders.ofbizArray.load(`returnAdjustments/find?productPromoId=${productPromo.productPromoId}`)
    },
    productPromoUse: {
      type: new GraphQLList(ProductPromoUseType),
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromo, args, {loaders}) => loaders.ofbizArray.load(`productPromoUses/find?productPromoId=${productPromo.productPromoId}`)
    },
    productPromoRule: {
      type: new GraphQLList(ProductPromoRuleType),
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromo, args, {loaders}) => loaders.ofbizArray.load(`productPromoRules/find?productPromoId=${productPromo.productPromoId}`)
    },
    quoteAdjustment: {
      type: new GraphQLList(QuoteAdjustmentType),
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromo, args, {loaders}) => loaders.ofbizArray.load(`quoteAdjustments/find?productPromoId=${productPromo.productPromoId}`)
    },
    orderAdjustment: {
      type: new GraphQLList(OrderAdjustmentType),
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromo, args, {loaders}) => loaders.ofbizArray.load(`orderAdjustments/find?productPromoId=${productPromo.productPromoId}`)
    },
    productPromoCode: {
      type: new GraphQLList(ProductPromoCodeType),
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromo, args, {loaders}) => loaders.ofbizArray.load(`productPromoCodes/find?productPromoId=${productPromo.productPromoId}`)
    },
    productPromoProduct: {
      type: new GraphQLList(ProductPromoProductType),
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromo, args, {loaders}) => loaders.ofbizArray.load(`productPromoProducts/find?productPromoId=${productPromo.productPromoId}`)
    }
  })
});

export {ProductPromoType};
    