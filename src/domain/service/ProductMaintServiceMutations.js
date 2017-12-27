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
import {ResponseType,KeyValueInputType} from '../../framework/helpTypes.js';


const attachProductFeaturesToCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz attachProductFeaturesToCategory method',
  args:{productCategoryId: {type: GraphQLString},doSubCategories: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productMaint/attachProductFeaturesToCategory?productCategoryId=${args.productCategoryId}&doSubCategories=${args.doSubCategories}&`, null, req);
  }
};
export {attachProductFeaturesToCategory};


const checkImageUrl = {
  type: ResponseType,
  description: 'mutation for ofbiz checkImageUrl method',
  args:{imageUrl: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productMaint/checkImageUrl?imageUrl=${args.imageUrl}&`, null, req);
  }
};
export {checkImageUrl};


const checkImageUrlForAllCategories = {
  type: ResponseType,
  description: 'mutation for ofbiz checkImageUrlForAllCategories method',
  args:{excludeEmpty: {type: GraphQLBoolean},topCategory: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productMaint/checkImageUrlForAllCategories?excludeEmpty=${args.excludeEmpty}&topCategory=${args.topCategory}&`, null, req);
  }
};
export {checkImageUrlForAllCategories};


const checkImageUrlForCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz checkImageUrlForCategory method',
  args:{categoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productMaint/checkImageUrlForCategory?categoryId=${args.categoryId}&`, null, req);
  }
};
export {checkImageUrlForCategory};


const checkImageUrlForCategoryAndProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz checkImageUrlForCategoryAndProduct method',
  args:{categoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productMaint/checkImageUrlForCategoryAndProduct?categoryId=${args.categoryId}&`, null, req);
  }
};
export {checkImageUrlForCategoryAndProduct};


const checkImageUrlForProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz checkImageUrlForProduct method',
  args:{productId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productMaint/checkImageUrlForProduct?productId=${args.productId}&`, null, req);
  }
};
export {checkImageUrlForProduct};


const clearAllVirtualProductImageNames = {
  type: ResponseType,
  description: 'mutation for ofbiz clearAllVirtualProductImageNames method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productMaint/clearAllVirtualProductImageNames?`, null, req);
  }
};
export {clearAllVirtualProductImageNames};


const copyCategoryProductMembers = {
  type: ResponseType,
  description: 'mutation for ofbiz copyCategoryProductMembers method',
  args:{productCategoryId: {type: GraphQLString},productCategoryIdTo: {type: GraphQLString},validDate: {type: GraphQLString},recurse: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productMaint/copyCategoryProductMembers?productCategoryId=${args.productCategoryId}&productCategoryIdTo=${args.productCategoryIdTo}&validDate=${args.validDate}&recurse=${args.recurse}&`, null, req);
  }
};
export {copyCategoryProductMembers};


const discVirtualsWithDiscVariants = {
  type: ResponseType,
  description: 'mutation for ofbiz discVirtualsWithDiscVariants method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productMaint/discVirtualsWithDiscVariants?`, null, req);
  }
};
export {discVirtualsWithDiscVariants};


const expireAllCategoryProductMembers = {
  type: ResponseType,
  description: 'mutation for ofbiz expireAllCategoryProductMembers method',
  args:{productCategoryId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productMaint/expireAllCategoryProductMembers?productCategoryId=${args.productCategoryId}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {expireAllCategoryProductMembers};


const getAllCategories = {
  type: ResponseType,
  description: 'mutation for ofbiz getAllCategories method',
  args:{topCategory: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productMaint/getAllCategories?topCategory=${args.topCategory}&`, null, req);
  }
};
export {getAllCategories};


const getCategoryTrail = {
  type: ResponseType,
  description: 'mutation for ofbiz getCategoryTrail method',
  args:{productCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productMaint/getCategoryTrail?productCategoryId=${args.productCategoryId}&`, null, req);
  }
};
export {getCategoryTrail};


const getRelatedCategories = {
  type: ResponseType,
  description: 'mutation for ofbiz getRelatedCategories method',
  args:{parentProductCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productMaint/getRelatedCategories?parentProductCategoryId=${args.parentProductCategoryId}&categories=${args.categories}&`, null, req);
  }
};
export {getRelatedCategories};


const makeStandAloneFromSingleVariantVirtuals = {
  type: ResponseType,
  description: 'mutation for ofbiz makeStandAloneFromSingleVariantVirtuals method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productMaint/makeStandAloneFromSingleVariantVirtuals?`, null, req);
  }
};
export {makeStandAloneFromSingleVariantVirtuals};


const mergeVirtualWithSingleVariant = {
  type: ResponseType,
  description: 'mutation for ofbiz mergeVirtualWithSingleVariant method',
  args:{productId: {type: GraphQLString},removeOld: {type: GraphQLBoolean},test: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productMaint/mergeVirtualWithSingleVariant?productId=${args.productId}&removeOld=${args.removeOld}&test=${args.test}&`, null, req);
  }
};
export {mergeVirtualWithSingleVariant};


const purgeOldStoreAutoPromos = {
  type: ResponseType,
  description: 'mutation for ofbiz purgeOldStoreAutoPromos method',
  args:{productStoreId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productMaint/purgeOldStoreAutoPromos?productStoreId=${args.productStoreId}&`, null, req);
  }
};
export {purgeOldStoreAutoPromos};


const removeCategoryMembersOfDiscProducts = {
  type: ResponseType,
  description: 'mutation for ofbiz removeCategoryMembersOfDiscProducts method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productMaint/removeCategoryMembersOfDiscProducts?`, null, req);
  }
};
export {removeCategoryMembersOfDiscProducts};


const removeDuplicateOpenEndedCategoryMembers = {
  type: ResponseType,
  description: 'mutation for ofbiz removeDuplicateOpenEndedCategoryMembers method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productMaint/removeDuplicateOpenEndedCategoryMembers?`, null, req);
  }
};
export {removeDuplicateOpenEndedCategoryMembers};


const removeExpiredCategoryProductMembers = {
  type: ResponseType,
  description: 'mutation for ofbiz removeExpiredCategoryProductMembers method',
  args:{productCategoryId: {type: GraphQLString},validDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productMaint/removeExpiredCategoryProductMembers?productCategoryId=${args.productCategoryId}&validDate=${args.validDate}&`, null, req);
  }
};
export {removeExpiredCategoryProductMembers};


const setAllProductImageNames = {
  type: ResponseType,
  description: 'mutation for ofbiz setAllProductImageNames method',
  args:{pattern: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productMaint/setAllProductImageNames?pattern=${args.pattern}&`, null, req);
  }
};
export {setAllProductImageNames};


const updateOldInventoryToDetailAll = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOldInventoryToDetailAll method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productMaint/updateOldInventoryToDetailAll?`, null, req);
  }
};
export {updateOldInventoryToDetailAll};


const updateOldInventoryToDetailSingle = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOldInventoryToDetailSingle method',
  args:{inventoryItem: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productMaint/updateOldInventoryToDetailSingle?inventoryItem=${args.inventoryItem}&`, null, req);
  }
};
export {updateOldInventoryToDetailSingle};
