
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

import {TaxAuthorityCategoryType} from '../accounting/TaxAuthorityCategory.js';
import {MarketInterestType} from '../product/MarketInterest.js';
import {ProductFeatureCategoryApplType} from '../product/ProductFeatureCategoryAppl.js';
import {ProductCategoryGlAccountType} from '../product/ProductCategoryGlAccount.js';
import {PartyNeedType} from '../party/PartyNeed.js';
import {ProductPromoCategoryType} from '../product/ProductPromoCategory.js';
import {ProductType} from '../product/Product.js';
import {SalesForecastDetailType} from '../marketing/SalesForecastDetail.js';
import {ProductCategoryRollupType} from '../product/ProductCategoryRollup.js';
import {ProductCategoryTypeType} from '../product/ProductCategoryType.js';
import {ProductCategoryMemberType} from '../product/ProductCategoryMember.js';
import {ProdCatalogCategoryType} from '../product/ProdCatalogCategory.js';
import {ProductCategoryLinkType} from '../product/ProductCategoryLink.js';
import {ProductCategoryRoleType} from '../product/ProductCategoryRole.js';
import {ProductFeatureCatGrpApplType} from '../product/ProductFeatureCatGrpAppl.js';
import {TaxAuthorityRateProductType} from '../accounting/TaxAuthorityRateProduct.js';
import {ProductCategoryContentType} from '../product/ProductCategoryContent.js';
import {SubscriptionType} from '../product/Subscription.js';
import {ProductCategoryAttributeType} from '../product/ProductCategoryAttribute.js';


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
    salesForecastDetails: {
      type: new GraphQLList(SalesForecastDetailType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`salesForecastDetails/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    productCategories: {
      type: new GraphQLList(ProductCategoryType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`productCategorys/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    productCategoryContents: {
      type: new GraphQLList(ProductCategoryContentType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`productCategoryContents/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    marketInterests: {
      type: new GraphQLList(MarketInterestType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`marketInterests/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    productPromoCategories: {
      type: new GraphQLList(ProductPromoCategoryType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`productPromoCategorys/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    taxAuthorityRateProducts: {
      type: new GraphQLList(TaxAuthorityRateProductType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`taxAuthorityRateProducts/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    prodCatalogCategories: {
      type: new GraphQLList(ProdCatalogCategoryType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`prodCatalogCategorys/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    productCategoryRollups: {
      type: new GraphQLList(ProductCategoryRollupType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`productCategoryRollups/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    productFeatureCatGrpAppls: {
      type: new GraphQLList(ProductFeatureCatGrpApplType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`productFeatureCatGrpAppls/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    products: {
      type: new GraphQLList(ProductType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`products/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    taxAuthorityCategories: {
      type: new GraphQLList(TaxAuthorityCategoryType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`taxAuthorityCategorys/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    productCategoryGlAccounts: {
      type: new GraphQLList(ProductCategoryGlAccountType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`productCategoryGlAccounts/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    productFeatureCategoryAppls: {
      type: new GraphQLList(ProductFeatureCategoryApplType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`productFeatureCategoryAppls/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    subscriptions: {
      type: new GraphQLList(SubscriptionType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`subscriptions/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    productCategoryLinks: {
      type: new GraphQLList(ProductCategoryLinkType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`productCategoryLinks/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    productCategoryMembers: {
      type: new GraphQLList(ProductCategoryMemberType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`productCategoryMembers/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    productCategoryRoles: {
      type: new GraphQLList(ProductCategoryRoleType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`productCategoryRoles/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    partyNeeds: {
      type: new GraphQLList(PartyNeedType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`partyNeeds/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    productCategoryAttributes: {
      type: new GraphQLList(ProductCategoryAttributeType),
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`productCategoryAttributes/find?productCategoryId=${productCategory.productCategoryId}`)
    }
  })
});

export {ProductCategoryType};
    




const ProductCategoryInputType = new GraphQLInputObjectType({
  name: 'ProductCategoryInputType',
  description: 'input type for ProductCategory in product',

  fields: () => ({
    longDescription: {type: GraphQLString},
    productCategoryTypeId: {type: GraphQLString},
    productCategoryId: {type: GraphQLString},
    linkOneImageUrl: {type: GraphQLString},
    detailScreen: {type: GraphQLString},
    primaryParentCategoryId: {type: GraphQLString},
    categoryImageUrl: {type: GraphQLString},
    description: {type: GraphQLString},
    showInSelect: {type: GraphQLBoolean},
    linkTwoImageUrl: {type: GraphQLString},
    categoryName: {type: GraphQLString}
  })
});

export {ProductCategoryInputType};
    