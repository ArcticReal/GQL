
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {TaxAuthorityCategoryType} from '../accounting/TaxAuthorityCategoryType.js';
import {MarketInterestType} from '../product/MarketInterestType.js';
import {ProductFeatureCategoryApplType} from '../product/ProductFeatureCategoryApplType.js';
import {ProductCategoryGlAccountType} from '../product/ProductCategoryGlAccountType.js';
import {PartyNeedType} from '../party/PartyNeedType.js';
import {ProductPromoCategoryType} from '../product/ProductPromoCategoryType.js';
import {ProductType} from '../product/ProductType.js';
import {SalesForecastDetailType} from '../marketing/SalesForecastDetailType.js';
import {ProductCategoryRollupType} from '../product/ProductCategoryRollupType.js';
import {ProductCategoryTypeType} from '../product/ProductCategoryTypeType.js';
import {ProductCategoryMemberType} from '../product/ProductCategoryMemberType.js';
import {ProdCatalogCategoryType} from '../product/ProdCatalogCategoryType.js';
import {ProductCategoryLinkType} from '../product/ProductCategoryLinkType.js';
import {ProductCategoryRoleType} from '../product/ProductCategoryRoleType.js';
import {ProductFeatureCatGrpApplType} from '../product/ProductFeatureCatGrpApplType.js';
import {TaxAuthorityRateProductType} from '../accounting/TaxAuthorityRateProductType.js';
import {ProductCategoryContentType} from '../product/ProductCategoryContentType.js';
import {SubscriptionType} from '../product/SubscriptionType.js';
import {ProductCategoryAttributeType} from '../product/ProductCategoryAttributeType.js';


const ProductCategoryType = new GraphQLObjectType({
  name: 'ProductCategoryType',
  description: 'Type for ProductCategory in product',

  fields: () => ({
    longDescription: {type: GraphQLString},
    productCategoryType: {
      type: ProductCategoryTypeType,
      args : {productCategoryTypeId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbiz.load(`productCategoryTypes/find?productCategoryTypeId=${productCategory.productCategoryTypeId}`)
    },
    productCategoryId: {type: GraphQLString},
    linkOneImageUrl: {type: GraphQLString},
    detailScreen: {type: GraphQLString},
    primaryParentCategory: {
      type: ProductCategoryType,
      args : {primaryParentCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbiz.load(`productCategorys/find?productCategoryId=${productCategory.primaryParentCategoryId}`)
    },
    categoryImageUrl: {type: GraphQLString},
    description: {type: GraphQLString},
    showInSelect: {type: GraphQLBoolean},
    linkTwoImageUrl: {type: GraphQLString},
    categoryName: {type: GraphQLString},
    salesForecastDetail: {
      type: new GraphQLList(SalesForecastDetailType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`salesForecastDetails/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    productCategory: {
      type: new GraphQLList(ProductCategoryType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`productCategorys/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    productCategoryContent: {
      type: new GraphQLList(ProductCategoryContentType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`productCategoryContents/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    marketInterest: {
      type: new GraphQLList(MarketInterestType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`marketInterests/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    productPromoCategory: {
      type: new GraphQLList(ProductPromoCategoryType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`productPromoCategorys/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    taxAuthorityRateProduct: {
      type: new GraphQLList(TaxAuthorityRateProductType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`taxAuthorityRateProducts/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    prodCatalogCategory: {
      type: new GraphQLList(ProdCatalogCategoryType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`prodCatalogCategorys/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    productCategoryRollup: {
      type: new GraphQLList(ProductCategoryRollupType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`productCategoryRollups/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    productFeatureCatGrpAppl: {
      type: new GraphQLList(ProductFeatureCatGrpApplType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`productFeatureCatGrpAppls/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    product: {
      type: new GraphQLList(ProductType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`products/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    taxAuthorityCategory: {
      type: new GraphQLList(TaxAuthorityCategoryType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`taxAuthorityCategorys/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    productCategoryGlAccount: {
      type: new GraphQLList(ProductCategoryGlAccountType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`productCategoryGlAccounts/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    productFeatureCategoryAppl: {
      type: new GraphQLList(ProductFeatureCategoryApplType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`productFeatureCategoryAppls/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    subscription: {
      type: new GraphQLList(SubscriptionType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`subscriptions/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    productCategoryLink: {
      type: new GraphQLList(ProductCategoryLinkType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`productCategoryLinks/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    productCategoryMember: {
      type: new GraphQLList(ProductCategoryMemberType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`productCategoryMembers/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    productCategoryRole: {
      type: new GraphQLList(ProductCategoryRoleType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`productCategoryRoles/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    partyNeed: {
      type: new GraphQLList(PartyNeedType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`partyNeeds/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    productCategoryAttribute: {
      type: new GraphQLList(ProductCategoryAttributeType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`productCategoryAttributes/find?productCategoryId=${productCategory.productCategoryId}`)
    }
  })
});

export {ProductCategoryType};
    