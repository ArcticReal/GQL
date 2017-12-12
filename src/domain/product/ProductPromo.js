
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

import {ProductStorePromoApplType} from '../product/ProductStorePromoAppl.js';
import {OrderAdjustmentType} from '../order/OrderAdjustment.js';
import {ProductPromoCondType} from '../product/ProductPromoCond.js';
import {ReturnAdjustmentType} from '../order/ReturnAdjustment.js';
import {ProductPromoCodeType} from '../product/ProductPromoCode.js';
import {ProductPromoCategoryType} from '../product/ProductPromoCategory.js';
import {ProductPromoProductType} from '../product/ProductPromoProduct.js';
import {ProductPromoActionType} from '../product/ProductPromoAction.js';
import {ProductPromoRuleType} from '../product/ProductPromoRule.js';
import {ProductPromoContentType} from '../product/ProductPromoContent.js';
import {PartyType} from '../party/Party.js';
import {QuoteAdjustmentType} from '../order/QuoteAdjustment.js';
import {MarketingCampaignPromoType} from '../marketing/MarketingCampaignPromo.js';
import {AgreementPromoApplType} from '../party/AgreementPromoAppl.js';
import {ProductPromoUseType} from '../product/ProductPromoUse.js';
import {UserLoginType} from '../login/UserLogin.js';


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
      resolve: (productPromo, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${productPromo.overrideOrgPartyId}`)
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
      resolve: (productPromo, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${productPromo.lastModifiedByUserLogin}`)
    },
    createdDate: {type: GraphQLString},
    billbackFactor: {type: GraphQLFloat},
    createdByUserLogin: {
      type: UserLoginType,
      args : {createdByUserLogin: {type: GraphQLString}},
      resolve: (productPromo, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${productPromo.createdByUserLogin}`)
    },
    productStorePromoAppls: {
      type: new GraphQLList(ProductStorePromoApplType),
      args : {},
      resolve: (productPromo, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStorePromoAppls/find?productPromoId=${productPromo.productPromoId}`)
    },
    productPromoActions: {
      type: new GraphQLList(ProductPromoActionType),
      args : {},
      resolve: (productPromo, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPromoActions/find?productPromoId=${productPromo.productPromoId}`)
    },
    agreementPromoAppls: {
      type: new GraphQLList(AgreementPromoApplType),
      args : {},
      resolve: (productPromo, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementPromoAppls/find?productPromoId=${productPromo.productPromoId}`)
    },
    productPromoCategories: {
      type: new GraphQLList(ProductPromoCategoryType),
      args : {},
      resolve: (productPromo, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPromoCategorys/find?productPromoId=${productPromo.productPromoId}`)
    },
    productPromoContents: {
      type: new GraphQLList(ProductPromoContentType),
      args : {},
      resolve: (productPromo, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPromoContents/find?productPromoId=${productPromo.productPromoId}`)
    },
    marketingCampaignPromos: {
      type: new GraphQLList(MarketingCampaignPromoType),
      args : {},
      resolve: (productPromo, args, {loaders}) => loaders.ofbizArray.load(`marketing/marketingCampaign/marketingCampaignPromos/find?productPromoId=${productPromo.productPromoId}`)
    },
    productPromoConds: {
      type: new GraphQLList(ProductPromoCondType),
      args : {},
      resolve: (productPromo, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPromoConds/find?productPromoId=${productPromo.productPromoId}`)
    },
    returnAdjustments: {
      type: new GraphQLList(ReturnAdjustmentType),
      args : {},
      resolve: (productPromo, args, {loaders}) => loaders.ofbizArray.load(`order/returnAdjustments/find?productPromoId=${productPromo.productPromoId}`)
    },
    productPromoUses: {
      type: new GraphQLList(ProductPromoUseType),
      args : {},
      resolve: (productPromo, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPromoUses/find?productPromoId=${productPromo.productPromoId}`)
    },
    productPromoRules: {
      type: new GraphQLList(ProductPromoRuleType),
      args : {},
      resolve: (productPromo, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPromoRules/find?productPromoId=${productPromo.productPromoId}`)
    },
    quoteAdjustments: {
      type: new GraphQLList(QuoteAdjustmentType),
      args : {},
      resolve: (productPromo, args, {loaders}) => loaders.ofbizArray.load(`order/quote/quoteAdjustments/find?productPromoId=${productPromo.productPromoId}`)
    },
    orderAdjustments: {
      type: new GraphQLList(OrderAdjustmentType),
      args : {},
      resolve: (productPromo, args, {loaders}) => loaders.ofbizArray.load(`order/orderAdjustments/find?productPromoId=${productPromo.productPromoId}`)
    },
    productPromoCodes: {
      type: new GraphQLList(ProductPromoCodeType),
      args : {},
      resolve: (productPromo, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPromoCodes/find?productPromoId=${productPromo.productPromoId}`)
    },
    productPromoProducts: {
      type: new GraphQLList(ProductPromoProductType),
      args : {},
      resolve: (productPromo, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPromoProducts/find?productPromoId=${productPromo.productPromoId}`)
    }
  })
});

export {ProductPromoType};
    




const ProductPromoInputType = new GraphQLInputObjectType({
  name: 'ProductPromoInputType',
  description: 'input type for ProductPromo in product',

  fields: () => ({
    showToCustomer: {type: GraphQLBoolean},
    lastModifiedDate: {type: GraphQLString},
    requireCode: {type: GraphQLBoolean},
    overrideOrgPartyId: {type: GraphQLString},
    productPromoId: {type: GraphQLString},
    useLimitPerCustomer: {type: GraphQLInt},
    useLimitPerOrder: {type: GraphQLInt},
    useLimitPerPromotion: {type: GraphQLInt},
    promoName: {type: GraphQLString},
    promoText: {type: GraphQLString},
    userEntered: {type: GraphQLBoolean},
    lastModifiedByUserLogin: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    billbackFactor: {type: GraphQLFloat},
    createdByUserLogin: {type: GraphQLString}
  })
});

export {ProductPromoInputType};
    