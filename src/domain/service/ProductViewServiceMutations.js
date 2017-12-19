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
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';


const convertFeaturesForSupplier = {
  type: GraphQLString,
  description: 'mutation for ofbiz convertFeaturesForSupplier method',
  args:{productFeatures: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productView/convertFeaturesForSupplier?productFeatures=${args.productFeatures}partyId=${args.partyId}`, null, req);
  }
};
export {convertFeaturesForSupplier};


const getAllProductVariants = {
  type: GraphQLString,
  description: 'mutation for ofbiz getAllProductVariants method',
  args:{productId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productView/getAllProductVariants?productId=${args.productId}`, null, req);
  }
};
export {getAllProductVariants};


const getAssociatedProducts = {
  type: GraphQLString,
  description: 'mutation for ofbiz getAssociatedProducts method',
  args:{type: {type: GraphQLString},sortDescending: {type: GraphQLBoolean},checkViewAllow: {type: GraphQLBoolean},bidirectional: {type: GraphQLBoolean},productId: {type: GraphQLString},productIdTo: {type: GraphQLString},prodCatalogId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productView/getAssociatedProducts?type=${args.type}sortDescending=${args.sortDescending}checkViewAllow=${args.checkViewAllow}bidirectional=${args.bidirectional}productId=${args.productId}productIdTo=${args.productIdTo}prodCatalogId=${args.prodCatalogId}`, null, req);
  }
};
export {getAssociatedProducts};


const getAssociatedProductsList = {
  type: GraphQLString,
  description: 'mutation for ofbiz getAssociatedProductsList method',
  args:{productCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productView/getAssociatedProductsList?productCategoryId=${args.productCategoryId}`, null, req);
  }
};
export {getAssociatedProductsList};


const getPreviousNextProducts = {
  type: GraphQLString,
  description: 'mutation for ofbiz getPreviousNextProducts method',
  args:{productId: {type: GraphQLString},categoryId: {type: GraphQLString},activeOnly: {type: GraphQLBoolean},introductionDateLimit: {type: GraphQLString},releaseDateLimit: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productView/getPreviousNextProducts?productId=${args.productId}categoryId=${args.categoryId}activeOnly=${args.activeOnly}orderByFields=${args.orderByFields}introductionDateLimit=${args.introductionDateLimit}releaseDateLimit=${args.releaseDateLimit}`, null, req);
  }
};
export {getPreviousNextProducts};


const getProduct = {
  type: GraphQLString,
  description: 'mutation for ofbiz getProduct method',
  args:{productId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productView/getProduct?productId=${args.productId}`, null, req);
  }
};
export {getProduct};


const getProductCategoryAndLimitedMembers = {
  type: GraphQLString,
  description: 'mutation for ofbiz getProductCategoryAndLimitedMembers method',
  args:{productCategoryId: {type: GraphQLString},defaultViewSize: {type: GraphQLInt},limitView: {type: GraphQLBoolean},activeOnly: {type: GraphQLBoolean},checkViewAllow: {type: GraphQLBoolean},viewIndexString: {type: GraphQLString},introductionDateLimit: {type: GraphQLString},useCacheForMembers: {type: GraphQLBoolean},viewSizeString: {type: GraphQLString},productStoreId: {type: GraphQLString},releaseDateLimit: {type: GraphQLString},prodCatalogId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productView/getProductCategoryAndLimitedMembers?productCategoryId=${args.productCategoryId}defaultViewSize=${args.defaultViewSize}limitView=${args.limitView}activeOnly=${args.activeOnly}orderByFields=${args.orderByFields}checkViewAllow=${args.checkViewAllow}viewIndexString=${args.viewIndexString}introductionDateLimit=${args.introductionDateLimit}useCacheForMembers=${args.useCacheForMembers}viewSizeString=${args.viewSizeString}productStoreId=${args.productStoreId}releaseDateLimit=${args.releaseDateLimit}prodCatalogId=${args.prodCatalogId}`, null, req);
  }
};
export {getProductCategoryAndLimitedMembers};


const getProductCategoryMembers = {
  type: GraphQLString,
  description: 'mutation for ofbiz getProductCategoryMembers method',
  args:{categoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productView/getProductCategoryMembers?categoryId=${args.categoryId}`, null, req);
  }
};
export {getProductCategoryMembers};


const getProductFeatureSet = {
  type: GraphQLString,
  description: 'mutation for ofbiz getProductFeatureSet method',
  args:{productId: {type: GraphQLString},productFeatureApplTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productView/getProductFeatureSet?productId=${args.productId}productFeatureApplTypeId=${args.productFeatureApplTypeId}`, null, req);
  }
};
export {getProductFeatureSet};


const getProductFeatures = {
  type: GraphQLString,
  description: 'mutation for ofbiz getProductFeatures method',
  args:{productId: {type: GraphQLString},distinct: {type: GraphQLString},type: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productView/getProductFeatures?productId=${args.productId}distinct=${args.distinct}type=${args.type}`, null, req);
  }
};
export {getProductFeatures};


const getProductVariant = {
  type: GraphQLString,
  description: 'mutation for ofbiz getProductVariant method',
  args:{selectedFeatures: {type: GraphQLString},productId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productView/getProductVariant?selectedFeatures=${args.selectedFeatures}productId=${args.productId}`, null, req);
  }
};
export {getProductVariant};


const getProductVariantTree = {
  type: GraphQLString,
  description: 'mutation for ofbiz getProductVariantTree method',
  args:{productId: {type: GraphQLString},featureOrder: {type: GraphQLString},productStoreId: {type: GraphQLString},checkInventory: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productView/getProductVariantTree?productId=${args.productId}featureOrder=${args.featureOrder}productStoreId=${args.productStoreId}checkInventory=${args.checkInventory}`, null, req);
  }
};
export {getProductVariantTree};


const getSuppliersForProduct = {
  type: GraphQLString,
  description: 'mutation for ofbiz getSuppliersForProduct method',
  args:{productId: {type: GraphQLString},currencyUomId: {type: GraphQLString},quantity: {type: GraphQLFloat},canDropShip: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productView/getSuppliersForProduct?productId=${args.productId}currencyUomId=${args.currencyUomId}quantity=${args.quantity}canDropShip=${args.canDropShip}partyId=${args.partyId}`, null, req);
  }
};
export {getSuppliersForProduct};
