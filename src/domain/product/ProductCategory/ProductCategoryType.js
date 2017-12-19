
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

import {TaxAuthorityCategoryType} from '../../accounting/TaxAuthorityCategory/TaxAuthorityCategoryType.js';
import {MarketInterestType} from '../../product/MarketInterest/MarketInterestType.js';
import {ProductFeatureCategoryApplType} from '../../product/ProductFeatureCategoryAppl/ProductFeatureCategoryApplType.js';
import {ProductCategoryGlAccountType} from '../../product/ProductCategoryGlAccount/ProductCategoryGlAccountType.js';
import {PartyNeedType} from '../../party/PartyNeed/PartyNeedType.js';
import {ProductPromoCategoryType} from '../../product/ProductPromoCategory/ProductPromoCategoryType.js';
import {ProductType} from '../../product/Product/ProductType.js';
import {SalesForecastDetailType} from '../../marketing/SalesForecastDetail/SalesForecastDetailType.js';
import {ProductCategoryRollupType} from '../../product/ProductCategoryRollup/ProductCategoryRollupType.js';
import {ProductCategoryTypeType} from '../../product/ProductCategoryType/ProductCategoryTypeType.js';
import {ProductCategoryMemberType} from '../../product/ProductCategoryMember/ProductCategoryMemberType.js';
import {ProdCatalogCategoryType} from '../../product/ProdCatalogCategory/ProdCatalogCategoryType.js';
import {ProductCategoryLinkType} from '../../product/ProductCategoryLink/ProductCategoryLinkType.js';
import {ProductCategoryRoleType} from '../../product/ProductCategoryRole/ProductCategoryRoleType.js';
import {ProductFeatureCatGrpApplType} from '../../product/ProductFeatureCatGrpAppl/ProductFeatureCatGrpApplType.js';
import {TaxAuthorityRateProductType} from '../../accounting/TaxAuthorityRateProduct/TaxAuthorityRateProductType.js';
import {ProductCategoryContentType} from '../../product/ProductCategoryContent/ProductCategoryContentType.js';
import {SubscriptionType} from '../../product/Subscription/SubscriptionType.js';
import {ProductCategoryAttributeType} from '../../product/ProductCategoryAttribute/ProductCategoryAttributeType.js';


const ProductCategoryType = new GraphQLObjectType({
  name: 'ProductCategoryType',
  description: 'Type for ProductCategory in product',

  fields: () => ({
    longDescription: {type: GraphQLString},
    productCategoryType: {
      type: ProductCategoryTypeType,
      args : {productCategoryTypeId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbiz.load(`product/product/productCategoryTypes/find?productCategoryTypeId=${productCategory.productCategoryTypeId}`)
    },
    productCategoryId: {type: GraphQLString},
    linkOneImageUrl: {type: GraphQLString},
    detailScreen: {type: GraphQLString},
    primaryParentCategory: {
      type: ProductCategoryType,
      args : {primaryParentCategoryId: {type: GraphQLString}},
      resolve: (productCategory, args, {loaders}) => loaders.ofbiz.load(`product/product/productCategorys/find?productCategoryId=${productCategory.primaryParentCategoryId}`)
    },
    categoryImageUrl: {type: GraphQLString},
    description: {type: GraphQLString},
    showInSelect: {type: GraphQLBoolean},
    linkTwoImageUrl: {type: GraphQLString},
    categoryName: {type: GraphQLString},
    salesForecastDetails: {
      type: new GraphQLList(SalesForecastDetailType),
      args : {},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`marketing/salesForecast/salesForecastDetails/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    productCategories: {
      type: new GraphQLList(ProductCategoryType),
      args : {},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`product/product/productCategorys/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    productCategoryContents: {
      type: new GraphQLList(ProductCategoryContentType),
      args : {},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`product/product/productCategoryContents/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    marketInterests: {
      type: new GraphQLList(MarketInterestType),
      args : {},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`product/marketInterests/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    productPromoCategories: {
      type: new GraphQLList(ProductPromoCategoryType),
      args : {},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPromoCategorys/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    taxAuthorityRateProducts: {
      type: new GraphQLList(TaxAuthorityRateProductType),
      args : {},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`accounting/taxAuthority/taxAuthorityRateProducts/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    prodCatalogCategories: {
      type: new GraphQLList(ProdCatalogCategoryType),
      args : {},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`product/prodCatalog/prodCatalogCategorys/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    productCategoryRollups: {
      type: new GraphQLList(ProductCategoryRollupType),
      args : {},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`product/product/productCategoryRollups/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    productFeatureCatGrpAppls: {
      type: new GraphQLList(ProductFeatureCatGrpApplType),
      args : {},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`product/product/productFeatureCatGrpAppls/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    products: {
      type: new GraphQLList(ProductType),
      args : {},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`/products/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    taxAuthorityCategories: {
      type: new GraphQLList(TaxAuthorityCategoryType),
      args : {},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`accounting/taxAuthority/taxAuthorityCategorys/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    productCategoryGlAccounts: {
      type: new GraphQLList(ProductCategoryGlAccountType),
      args : {},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`product/product/productCategoryGlAccounts/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    productFeatureCategoryAppls: {
      type: new GraphQLList(ProductFeatureCategoryApplType),
      args : {},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`product/product/productFeatureCategoryAppls/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    subscriptions: {
      type: new GraphQLList(SubscriptionType),
      args : {},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`product/subscriptions/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    productCategoryLinks: {
      type: new GraphQLList(ProductCategoryLinkType),
      args : {},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`product/product/productCategoryLinks/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    productCategoryMembers: {
      type: new GraphQLList(ProductCategoryMemberType),
      args : {},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`product/product/productCategoryMembers/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    productCategoryRoles: {
      type: new GraphQLList(ProductCategoryRoleType),
      args : {},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`product/product/productCategoryRoles/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    partyNeeds: {
      type: new GraphQLList(PartyNeedType),
      args : {},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyNeeds/find?productCategoryId=${productCategory.productCategoryId}`)
    },
    productCategoryAttributes: {
      type: new GraphQLList(ProductCategoryAttributeType),
      args : {},
      resolve: (productCategory, args, {loaders}) => loaders.ofbizArray.load(`product/product/productCategoryAttributes/find?productCategoryId=${productCategory.productCategoryId}`)
    }
  })
});

export {ProductCategoryType};
    