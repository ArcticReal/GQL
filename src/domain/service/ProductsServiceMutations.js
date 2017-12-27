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


const AddProductToBestSellCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz AddProductToBestSellCategory method',
  args:{week: {type: GraphQLInt},year: {type: GraphQLInt},productStoreId: {type: GraphQLString},prodCatalogId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/AddProductToBestSellCategory?week=${args.week}&year=${args.year}&productStoreId=${args.productStoreId}&prodCatalogId=${args.prodCatalogId}&`, null, req);
  }
};
export {AddProductToBestSellCategory};


const FindBestSellingProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz FindBestSellingProduct method',
  args:{productCategoryId: {type: GraphQLString},week: {type: GraphQLInt},primaryProductCategoryId: {type: GraphQLString},year: {type: GraphQLInt},productStoreId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/FindBestSellingProduct?productCategoryId=${args.productCategoryId}&week=${args.week}&primaryProductCategoryId=${args.primaryProductCategoryId}&year=${args.year}&productStoreId=${args.productStoreId}&`, null, req);
  }
};
export {FindBestSellingProduct};


const FindCategoryChild = {
  type: ResponseType,
  description: 'mutation for ofbiz FindCategoryChild method',
  args:{productCategoryId: {type: GraphQLString},week: {type: GraphQLInt},primaryProductCategoryId: {type: GraphQLString},year: {type: GraphQLInt},productStoreId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/FindCategoryChild?productCategoryId=${args.productCategoryId}&week=${args.week}&primaryProductCategoryId=${args.primaryProductCategoryId}&year=${args.year}&productStoreId=${args.productStoreId}&`, null, req);
  }
};
export {FindCategoryChild};


const RemoveProductFromBestSellCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz RemoveProductFromBestSellCategory method',
  args:{prodCatalogId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/RemoveProductFromBestSellCategory?prodCatalogId=${args.prodCatalogId}&`, null, req);
  }
};
export {RemoveProductFromBestSellCategory};


const addAdditionalViewForProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz addAdditionalViewForProduct method',
  args:{productId: {type: GraphQLString},productContentTypeId: {type: GraphQLString},purchaseFromDate: {type: GraphQLString},useTimeUomId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},contentId: {type: GraphQLString},useCountLimit: {type: GraphQLInt},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},_uploadedFile_contentType: {type: GraphQLString},useRoleTypeId: {type: GraphQLString},useTime: {type: GraphQLInt},purchaseThruDate: {type: GraphQLString},uploadedFile: {type: GraphQLString},_uploadedFile_fileName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/addAdditionalViewForProduct?productId=${args.productId}&productContentTypeId=${args.productContentTypeId}&purchaseFromDate=${args.purchaseFromDate}&useTimeUomId=${args.useTimeUomId}&sequenceNum=${args.sequenceNum}&contentId=${args.contentId}&useCountLimit=${args.useCountLimit}&thruDate=${args.thruDate}&fromDate=${args.fromDate}&_uploadedFile_contentType=${args._uploadedFile_contentType}&useRoleTypeId=${args.useRoleTypeId}&useTime=${args.useTime}&purchaseThruDate=${args.purchaseThruDate}&uploadedFile=${args.uploadedFile}&_uploadedFile_fileName=${args._uploadedFile_fileName}&`, null, req);
  }
};
export {addAdditionalViewForProduct};


const addCustomerDigitalDownloadProductFile = {
  type: ResponseType,
  description: 'mutation for ofbiz addCustomerDigitalDownloadProductFile method',
  args:{productId: {type: GraphQLString},contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/addCustomerDigitalDownloadProductFile?productId=${args.productId}&contentId=${args.contentId}&`, null, req);
  }
};
export {addCustomerDigitalDownloadProductFile};


const addImageForProductPromo = {
  type: ResponseType,
  description: 'mutation for ofbiz addImageForProductPromo method',
  args:{productPromoContentTypeId: {type: GraphQLString},productPromoId: {type: GraphQLString},fromDate: {type: GraphQLString},_uploadedFile_contentType: {type: GraphQLString},contentId: {type: GraphQLString},uploadedFile: {type: GraphQLString},_uploadedFile_fileName: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/addImageForProductPromo?productPromoContentTypeId=${args.productPromoContentTypeId}&productPromoId=${args.productPromoId}&fromDate=${args.fromDate}&_uploadedFile_contentType=${args._uploadedFile_contentType}&contentId=${args.contentId}&uploadedFile=${args.uploadedFile}&_uploadedFile_fileName=${args._uploadedFile_fileName}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {addImageForProductPromo};


const addImageFrame = {
  type: ResponseType,
  description: 'mutation for ofbiz addImageFrame method',
  args:{imageWidth: {type: GraphQLString},imageName: {type: GraphQLString},productId: {type: GraphQLString},frameDataResourceId: {type: GraphQLString},frameContentId: {type: GraphQLString},imageHeight: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/addImageFrame?imageWidth=${args.imageWidth}&imageName=${args.imageName}&productId=${args.productId}&frameDataResourceId=${args.frameDataResourceId}&frameContentId=${args.frameContentId}&imageHeight=${args.imageHeight}&`, null, req);
  }
};
export {addImageFrame};


const addMultipleuploadForProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz addMultipleuploadForProduct method',
  args:{productId: {type: GraphQLString},productContentTypeId: {type: GraphQLString},purchaseFromDate: {type: GraphQLString},useTimeUomId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},contentId: {type: GraphQLString},useCountLimit: {type: GraphQLInt},imageResize: {type: GraphQLString},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},_uploadedFile_contentType: {type: GraphQLString},useRoleTypeId: {type: GraphQLString},dataResourceId: {type: GraphQLString},useTime: {type: GraphQLInt},purchaseThruDate: {type: GraphQLString},uploadedFile: {type: GraphQLString},_uploadedFile_fileName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/addMultipleuploadForProduct?productId=${args.productId}&productContentTypeId=${args.productContentTypeId}&purchaseFromDate=${args.purchaseFromDate}&useTimeUomId=${args.useTimeUomId}&sequenceNum=${args.sequenceNum}&contentId=${args.contentId}&useCountLimit=${args.useCountLimit}&imageResize=${args.imageResize}&thruDate=${args.thruDate}&fromDate=${args.fromDate}&_uploadedFile_contentType=${args._uploadedFile_contentType}&useRoleTypeId=${args.useRoleTypeId}&dataResourceId=${args.dataResourceId}&useTime=${args.useTime}&purchaseThruDate=${args.purchaseThruDate}&uploadedFile=${args.uploadedFile}&_uploadedFile_fileName=${args._uploadedFile_fileName}&`, null, req);
  }
};
export {addMultipleuploadForProduct};


const addPartyToCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz addPartyToCategory method',
  args:{roleTypeId: {type: GraphQLString},productCategoryId: {type: GraphQLString},partyId: {type: GraphQLString},fromDate: {type: GraphQLString},comments: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/addPartyToCategory?roleTypeId=${args.roleTypeId}&productCategoryId=${args.productCategoryId}&partyId=${args.partyId}&fromDate=${args.fromDate}&comments=${args.comments}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {addPartyToCategory};


const addPartyToProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz addPartyToProduct method',
  args:{roleTypeId: {type: GraphQLString},productId: {type: GraphQLString},partyId: {type: GraphQLString},fromDate: {type: GraphQLString},comments: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/addPartyToProduct?roleTypeId=${args.roleTypeId}&productId=${args.productId}&partyId=${args.partyId}&fromDate=${args.fromDate}&comments=${args.comments}&sequenceNum=${args.sequenceNum}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {addPartyToProduct};


const addProdCatalogToParty = {
  type: ResponseType,
  description: 'mutation for ofbiz addProdCatalogToParty method',
  args:{roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString},prodCatalogId: {type: GraphQLString},fromDate: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/addProdCatalogToParty?roleTypeId=${args.roleTypeId}&partyId=${args.partyId}&prodCatalogId=${args.prodCatalogId}&fromDate=${args.fromDate}&sequenceNum=${args.sequenceNum}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {addProdCatalogToParty};


const addProductCatalogToParty = {
  type: GraphQLString,
  description: 'mutation for ofbiz addProductCatalogToParty method',
  args:{fromDatenanos: {type: GraphQLInt},thruDatenanos: {type: GraphQLInt},partyId: {type: GraphQLString},roleTypeId: {type: GraphQLString},prodCatalogId: {type: GraphQLString},sequenceNum: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/addProductCatalogToParty?fromDatenanos=${args.fromDatenanos}&thruDatenanos=${args.thruDatenanos}&partyId=${args.partyId}&roleTypeId=${args.roleTypeId}&prodCatalogId=${args.prodCatalogId}&sequenceNum=${args.sequenceNum}&`, null, req);
  }
};
export {addProductCatalogToParty};


const addProductCategoryToCategories = {
  type: ResponseType,
  description: 'mutation for ofbiz addProductCategoryToCategories method',
  args:{productCategoryId: {type: GraphQLString},categories: {type: GraphQLString},fromDate: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/addProductCategoryToCategories?productCategoryId=${args.productCategoryId}&categories=${args.categories}&fromDate=${args.fromDate}&sequenceNum=${args.sequenceNum}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {addProductCategoryToCategories};


const addProductCategoryToCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz addProductCategoryToCategory method',
  args:{productCategoryId: {type: GraphQLString},parentProductCategoryId: {type: GraphQLString},fromDate: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/addProductCategoryToCategory?productCategoryId=${args.productCategoryId}&parentProductCategoryId=${args.parentProductCategoryId}&fromDate=${args.fromDate}&sequenceNum=${args.sequenceNum}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {addProductCategoryToCategory};


const addProductCategoryToProdCatalog = {
  type: ResponseType,
  description: 'mutation for ofbiz addProductCategoryToProdCatalog method',
  args:{prodCatalogCategoryTypeId: {type: GraphQLString},productCategoryId: {type: GraphQLString},prodCatalogId: {type: GraphQLString},fromDate: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/addProductCategoryToProdCatalog?prodCatalogCategoryTypeId=${args.prodCatalogCategoryTypeId}&productCategoryId=${args.productCategoryId}&prodCatalogId=${args.prodCatalogId}&fromDate=${args.fromDate}&sequenceNum=${args.sequenceNum}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {addProductCategoryToProdCatalog};


const addProductToCategories = {
  type: ResponseType,
  description: 'mutation for ofbiz addProductToCategories method',
  args:{productId: {type: GraphQLString},categoryIds: {type: new GraphQLList(GraphQLString)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/addProductToCategories?productId=${args.productId}&`, args.categoryIds, req);
  }
};
export {addProductToCategories};


const addProductToCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz addProductToCategory method',
  args:{productId: {type: GraphQLString},categoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/addProductToCategory?productId=${args.productId}&categoryId=${args.categoryId}&`, null, req);
  }
};
export {addProductToCategory};


const addRejectedReasonImageManagement = {
  type: ResponseType,
  description: 'mutation for ofbiz addRejectedReasonImageManagement method',
  args:{contentId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/addRejectedReasonImageManagement?contentId=${args.contentId}&description=${args.description}&`, null, req);
  }
};
export {addRejectedReasonImageManagement};


const cancleOrderItemGroupOrder = {
  type: ResponseType,
  description: 'mutation for ofbiz cancleOrderItemGroupOrder method',
  args:{orderId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/cancleOrderItemGroupOrder?orderId=${args.orderId}&orderItemSeqId=${args.orderItemSeqId}&`, null, req);
  }
};
export {cancleOrderItemGroupOrder};


const catalogPermissionCheck = {
  type: ResponseType,
  description: 'mutation for ofbiz catalogPermissionCheck method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/catalogPermissionCheck?primaryPermission=${args.primaryPermission}&altPermission=${args.altPermission}&resourceDescription=${args.resourceDescription}&mainAction=${args.mainAction}&`, null, req);
  }
};
export {catalogPermissionCheck};


const checkCategoryPermissionWithViewPurchaseAllow = {
  type: ResponseType,
  description: 'mutation for ofbiz checkCategoryPermissionWithViewPurchaseAllow method',
  args:{productCategoryId: {type: GraphQLString},primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/checkCategoryPermissionWithViewPurchaseAllow?productCategoryId=${args.productCategoryId}&primaryPermission=${args.primaryPermission}&altPermission=${args.altPermission}&resourceDescription=${args.resourceDescription}&mainAction=${args.mainAction}&`, null, req);
  }
};
export {checkCategoryPermissionWithViewPurchaseAllow};


const checkOrderItemForProductGroupOrder = {
  type: ResponseType,
  description: 'mutation for ofbiz checkOrderItemForProductGroupOrder method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/checkOrderItemForProductGroupOrder?orderId=${args.orderId}&`, null, req);
  }
};
export {checkOrderItemForProductGroupOrder};


const checkProductGroupOrderExpired = {
  type: ResponseType,
  description: 'mutation for ofbiz checkProductGroupOrderExpired method',
  args:{groupOrderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/checkProductGroupOrderExpired?groupOrderId=${args.groupOrderId}&`, null, req);
  }
};
export {checkProductGroupOrderExpired};


const copyToProductVariants = {
  type: ResponseType,
  description: 'mutation for ofbiz copyToProductVariants method',
  args:{virtualProductId: {type: GraphQLString},removeBefore: {type: GraphQLString},duplicateContent: {type: GraphQLString},duplicateAttributes: {type: GraphQLString},duplicateProduct: {type: GraphQLString},duplicateCategoryMembers: {type: GraphQLString},duplicatePrices: {type: GraphQLString},duplicateLocations: {type: GraphQLString},duplicateFacilities: {type: GraphQLString},duplicateIDs: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/copyToProductVariants?virtualProductId=${args.virtualProductId}&removeBefore=${args.removeBefore}&duplicateContent=${args.duplicateContent}&duplicateAttributes=${args.duplicateAttributes}&duplicateProduct=${args.duplicateProduct}&duplicateCategoryMembers=${args.duplicateCategoryMembers}&duplicatePrices=${args.duplicatePrices}&duplicateLocations=${args.duplicateLocations}&duplicateFacilities=${args.duplicateFacilities}&duplicateIDs=${args.duplicateIDs}&`, null, req);
  }
};
export {copyToProductVariants};


const countProductView = {
  type: ResponseType,
  description: 'mutation for ofbiz countProductView method',
  args:{productId: {type: GraphQLString},weight: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/countProductView?productId=${args.productId}&weight=${args.weight}&`, null, req);
  }
};
export {countProductView};


const createCategoryContent = {
  type: ResponseType,
  description: 'mutation for ofbiz createCategoryContent method',
  args:{prodCatContentTypeId: {type: GraphQLString},productCategoryId: {type: GraphQLString},ownerContentId: {type: GraphQLString},contentId: {type: GraphQLString},useDaysLimit: {type: GraphQLFloat},contentTypeId: {type: GraphQLString},description: {type: GraphQLString},mimeTypeId: {type: GraphQLString},childLeafCount: {type: GraphQLInt},privilegeEnumId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},dataResourceId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},purchaseFromDate: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},useCountLimit: {type: GraphQLInt},serviceName: {type: GraphQLString},customMethodId: {type: GraphQLString},characterSetId: {type: GraphQLString},thruDate: {type: GraphQLString},contentName: {type: GraphQLInt},fromDate: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString},decoratorContentId: {type: GraphQLString},purchaseThruDate: {type: GraphQLString},childBranchCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createCategoryContent?prodCatContentTypeId=${args.prodCatContentTypeId}&productCategoryId=${args.productCategoryId}&ownerContentId=${args.ownerContentId}&contentId=${args.contentId}&useDaysLimit=${args.useDaysLimit}&contentTypeId=${args.contentTypeId}&description=${args.description}&mimeTypeId=${args.mimeTypeId}&childLeafCount=${args.childLeafCount}&privilegeEnumId=${args.privilegeEnumId}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&dataResourceId=${args.dataResourceId}&createdByUserLogin=${args.createdByUserLogin}&purchaseFromDate=${args.purchaseFromDate}&templateDataResourceId=${args.templateDataResourceId}&lastModifiedDate=${args.lastModifiedDate}&instanceOfContentId=${args.instanceOfContentId}&useCountLimit=${args.useCountLimit}&serviceName=${args.serviceName}&customMethodId=${args.customMethodId}&characterSetId=${args.characterSetId}&thruDate=${args.thruDate}&contentName=${args.contentName}&fromDate=${args.fromDate}&createdDate=${args.createdDate}&statusId=${args.statusId}&localeString=${args.localeString}&decoratorContentId=${args.decoratorContentId}&purchaseThruDate=${args.purchaseThruDate}&childBranchCount=${args.childBranchCount}&`, null, req);
  }
};
export {createCategoryContent};


const createCommunicationEventProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz createCommunicationEventProduct method',
  args:{productId: {type: GraphQLString},communicationEventId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createCommunicationEventProduct?productId=${args.productId}&communicationEventId=${args.communicationEventId}&`, null, req);
  }
};
export {createCommunicationEventProduct};


const createCustomerDigitalDownloadProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz createCustomerDigitalDownloadProduct method',
  args:{price: {type: GraphQLFloat},productStoreId: {type: GraphQLString},productName: {type: GraphQLString},currencyUomId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createCustomerDigitalDownloadProduct?price=${args.price}&productStoreId=${args.productStoreId}&productName=${args.productName}&currencyUomId=${args.currencyUomId}&description=${args.description}&`, null, req);
  }
};
export {createCustomerDigitalDownloadProduct};


const createDownloadContentForCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz createDownloadContentForCategory method',
  args:{prodCatContentTypeId: {type: GraphQLString},ownerContentId: {type: GraphQLString},imageData: {type: GraphQLString},contentId: {type: GraphQLString},useDaysLimit: {type: GraphQLFloat},contentTypeId: {type: GraphQLString},description: {type: GraphQLString},mimeTypeId: {type: GraphQLString},childLeafCount: {type: GraphQLInt},privilegeEnumId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},productCategoryId: {type: GraphQLString},dataResourceId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},purchaseFromDate: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},useCountLimit: {type: GraphQLInt},serviceName: {type: GraphQLString},customMethodId: {type: GraphQLString},characterSetId: {type: GraphQLString},_imageData_fileName: {type: GraphQLString},thruDate: {type: GraphQLString},contentName: {type: GraphQLInt},fromDate: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString},_imageData_contentType: {type: GraphQLString},decoratorContentId: {type: GraphQLString},purchaseThruDate: {type: GraphQLString},childBranchCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createDownloadContentForCategory?prodCatContentTypeId=${args.prodCatContentTypeId}&ownerContentId=${args.ownerContentId}&imageData=${args.imageData}&contentId=${args.contentId}&useDaysLimit=${args.useDaysLimit}&contentTypeId=${args.contentTypeId}&description=${args.description}&mimeTypeId=${args.mimeTypeId}&childLeafCount=${args.childLeafCount}&privilegeEnumId=${args.privilegeEnumId}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&productCategoryId=${args.productCategoryId}&dataResourceId=${args.dataResourceId}&createdByUserLogin=${args.createdByUserLogin}&dataResourceTypeId=${args.dataResourceTypeId}&purchaseFromDate=${args.purchaseFromDate}&templateDataResourceId=${args.templateDataResourceId}&lastModifiedDate=${args.lastModifiedDate}&instanceOfContentId=${args.instanceOfContentId}&useCountLimit=${args.useCountLimit}&serviceName=${args.serviceName}&customMethodId=${args.customMethodId}&characterSetId=${args.characterSetId}&_imageData_fileName=${args._imageData_fileName}&thruDate=${args.thruDate}&contentName=${args.contentName}&fromDate=${args.fromDate}&createdDate=${args.createdDate}&statusId=${args.statusId}&localeString=${args.localeString}&_imageData_contentType=${args._imageData_contentType}&decoratorContentId=${args.decoratorContentId}&purchaseThruDate=${args.purchaseThruDate}&childBranchCount=${args.childBranchCount}&`, null, req);
  }
};
export {createDownloadContentForCategory};


const createDownloadContentForProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz createDownloadContentForProduct method',
  args:{productContentTypeId: {type: GraphQLString},useTimeUomId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},ownerContentId: {type: GraphQLString},imageData: {type: GraphQLString},contentId: {type: GraphQLString},contentTypeId: {type: GraphQLString},description: {type: GraphQLString},mimeTypeId: {type: GraphQLString},childLeafCount: {type: GraphQLInt},privilegeEnumId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},useRoleTypeId: {type: GraphQLString},dataResourceId: {type: GraphQLString},useTime: {type: GraphQLInt},createdByUserLogin: {type: GraphQLString},purchaseFromDate: {type: GraphQLString},productId: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},useCountLimit: {type: GraphQLInt},serviceName: {type: GraphQLString},customMethodId: {type: GraphQLString},characterSetId: {type: GraphQLString},_imageData_fileName: {type: GraphQLString},thruDate: {type: GraphQLString},contentName: {type: GraphQLInt},fromDate: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString},_imageData_contentType: {type: GraphQLString},decoratorContentId: {type: GraphQLString},purchaseThruDate: {type: GraphQLString},childBranchCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createDownloadContentForProduct?productContentTypeId=${args.productContentTypeId}&useTimeUomId=${args.useTimeUomId}&sequenceNum=${args.sequenceNum}&ownerContentId=${args.ownerContentId}&imageData=${args.imageData}&contentId=${args.contentId}&contentTypeId=${args.contentTypeId}&description=${args.description}&mimeTypeId=${args.mimeTypeId}&childLeafCount=${args.childLeafCount}&privilegeEnumId=${args.privilegeEnumId}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&useRoleTypeId=${args.useRoleTypeId}&dataResourceId=${args.dataResourceId}&useTime=${args.useTime}&createdByUserLogin=${args.createdByUserLogin}&purchaseFromDate=${args.purchaseFromDate}&productId=${args.productId}&templateDataResourceId=${args.templateDataResourceId}&lastModifiedDate=${args.lastModifiedDate}&instanceOfContentId=${args.instanceOfContentId}&useCountLimit=${args.useCountLimit}&serviceName=${args.serviceName}&customMethodId=${args.customMethodId}&characterSetId=${args.characterSetId}&_imageData_fileName=${args._imageData_fileName}&thruDate=${args.thruDate}&contentName=${args.contentName}&fromDate=${args.fromDate}&createdDate=${args.createdDate}&statusId=${args.statusId}&localeString=${args.localeString}&_imageData_contentType=${args._imageData_contentType}&decoratorContentId=${args.decoratorContentId}&purchaseThruDate=${args.purchaseThruDate}&childBranchCount=${args.childBranchCount}&`, null, req);
  }
};
export {createDownloadContentForProduct};


const createEmailContentForProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz createEmailContentForProduct method',
  args:{fromDate: {type: GraphQLString},productId: {type: GraphQLString},subject: {type: GraphQLString},plainBody: {type: GraphQLString},productContentTypeId: {type: GraphQLString},useTimeUomId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},ownerContentId: {type: GraphQLString},contentId: {type: GraphQLString},contentTypeId: {type: GraphQLString},description: {type: GraphQLString},mimeTypeId: {type: GraphQLString},childLeafCount: {type: GraphQLInt},privilegeEnumId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},useRoleTypeId: {type: GraphQLString},dataResourceId: {type: GraphQLString},useTime: {type: GraphQLInt},createdByUserLogin: {type: GraphQLString},purchaseFromDate: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},useCountLimit: {type: GraphQLInt},serviceName: {type: GraphQLString},customMethodId: {type: GraphQLString},characterSetId: {type: GraphQLString},thruDate: {type: GraphQLString},contentName: {type: GraphQLInt},createdDate: {type: GraphQLString},htmlBody: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString},decoratorContentId: {type: GraphQLString},purchaseThruDate: {type: GraphQLString},childBranchCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createEmailContentForProduct?fromDate=${args.fromDate}&productId=${args.productId}&subject=${args.subject}&plainBody=${args.plainBody}&productContentTypeId=${args.productContentTypeId}&useTimeUomId=${args.useTimeUomId}&sequenceNum=${args.sequenceNum}&ownerContentId=${args.ownerContentId}&contentId=${args.contentId}&contentTypeId=${args.contentTypeId}&description=${args.description}&mimeTypeId=${args.mimeTypeId}&childLeafCount=${args.childLeafCount}&privilegeEnumId=${args.privilegeEnumId}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&useRoleTypeId=${args.useRoleTypeId}&dataResourceId=${args.dataResourceId}&useTime=${args.useTime}&createdByUserLogin=${args.createdByUserLogin}&purchaseFromDate=${args.purchaseFromDate}&templateDataResourceId=${args.templateDataResourceId}&lastModifiedDate=${args.lastModifiedDate}&instanceOfContentId=${args.instanceOfContentId}&useCountLimit=${args.useCountLimit}&serviceName=${args.serviceName}&customMethodId=${args.customMethodId}&characterSetId=${args.characterSetId}&thruDate=${args.thruDate}&contentName=${args.contentName}&createdDate=${args.createdDate}&htmlBody=${args.htmlBody}&statusId=${args.statusId}&localeString=${args.localeString}&decoratorContentId=${args.decoratorContentId}&purchaseThruDate=${args.purchaseThruDate}&childBranchCount=${args.childBranchCount}&`, null, req);
  }
};
export {createEmailContentForProduct};


const createGoodIdentification = {
  type: ResponseType,
  description: 'mutation for ofbiz createGoodIdentification method',
  args:{productId: {type: GraphQLString},goodIdentificationTypeId: {type: GraphQLString},idValue: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createGoodIdentification?productId=${args.productId}&goodIdentificationTypeId=${args.goodIdentificationTypeId}&idValue=${args.idValue}&`, null, req);
  }
};
export {createGoodIdentification};


const createGoodIdentificationType = {
  type: ResponseType,
  description: 'mutation for ofbiz createGoodIdentificationType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},goodIdentificationTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createGoodIdentificationType?parentTypeId=${args.parentTypeId}&hasTable=${args.hasTable}&goodIdentificationTypeId=${args.goodIdentificationTypeId}&description=${args.description}&`, null, req);
  }
};
export {createGoodIdentificationType};


const createImageContentApproval = {
  type: ResponseType,
  description: 'mutation for ofbiz createImageContentApproval method',
  args:{contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createImageContentApproval?contentId=${args.contentId}&`, null, req);
  }
};
export {createImageContentApproval};


const createJobForProductGroupOrder = {
  type: ResponseType,
  description: 'mutation for ofbiz createJobForProductGroupOrder method',
  args:{groupOrderId: {type: GraphQLString},fromDate: {type: GraphQLString},jobId: {type: GraphQLString},productId: {type: GraphQLString},statusId: {type: GraphQLString},reqOrderQty: {type: GraphQLFloat},soldOrderQty: {type: GraphQLFloat},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createJobForProductGroupOrder?groupOrderId=${args.groupOrderId}&fromDate=${args.fromDate}&jobId=${args.jobId}&productId=${args.productId}&statusId=${args.statusId}&reqOrderQty=${args.reqOrderQty}&soldOrderQty=${args.soldOrderQty}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {createJobForProductGroupOrder};


const createMarketInterest = {
  type: ResponseType,
  description: 'mutation for ofbiz createMarketInterest method',
  args:{fromDate: {type: GraphQLString},productCategoryId: {type: GraphQLString},partyClassificationGroupId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createMarketInterest?fromDate=${args.fromDate}&productCategoryId=${args.productCategoryId}&partyClassificationGroupId=${args.partyClassificationGroupId}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {createMarketInterest};


const createMissingCategoryAndProductAltUrls = {
  type: ResponseType,
  description: 'mutation for ofbiz createMissingCategoryAndProductAltUrls method',
  args:{prodCatalogId: {type: GraphQLString},product: {type: GraphQLString},category: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createMissingCategoryAndProductAltUrls?prodCatalogId=${args.prodCatalogId}&product=${args.product}&category=${args.category}&`, null, req);
  }
};
export {createMissingCategoryAndProductAltUrls};


const createNewImageThumbnail = {
  type: ResponseType,
  description: 'mutation for ofbiz createNewImageThumbnail method',
  args:{dataResourceName: {type: GraphQLString},sizeWidth: {type: GraphQLString},productId: {type: GraphQLString},drObjectInfo: {type: GraphQLString},contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createNewImageThumbnail?dataResourceName=${args.dataResourceName}&sizeWidth=${args.sizeWidth}&productId=${args.productId}&drObjectInfo=${args.drObjectInfo}&contentId=${args.contentId}&`, null, req);
  }
};
export {createNewImageThumbnail};


const createProdCatalog = {
  type: ResponseType,
  description: 'mutation for ofbiz createProdCatalog method',
  args:{catalogName: {type: GraphQLString},headerLogo: {type: GraphQLString},styleSheet: {type: GraphQLString},templatePathPrefix: {type: GraphQLString},useQuickAdd: {type: GraphQLString},contentPathPrefix: {type: GraphQLString},viewAllowPermReqd: {type: GraphQLString},prodCatalogId: {type: GraphQLString},purchaseAllowPermReqd: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProdCatalog?catalogName=${args.catalogName}&headerLogo=${args.headerLogo}&styleSheet=${args.styleSheet}&templatePathPrefix=${args.templatePathPrefix}&useQuickAdd=${args.useQuickAdd}&contentPathPrefix=${args.contentPathPrefix}&viewAllowPermReqd=${args.viewAllowPermReqd}&prodCatalogId=${args.prodCatalogId}&purchaseAllowPermReqd=${args.purchaseAllowPermReqd}&`, null, req);
  }
};
export {createProdCatalog};


const createProdCatalogCategoryType = {
  type: ResponseType,
  description: 'mutation for ofbiz createProdCatalogCategoryType method',
  args:{prodCatalogCategoryTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProdCatalogCategoryType?prodCatalogCategoryTypeId=${args.prodCatalogCategoryTypeId}&parentTypeId=${args.parentTypeId}&description=${args.description}&`, null, req);
  }
};
export {createProdCatalogCategoryType};


const createProdCatalogInvFacility = {
  type: ResponseType,
  description: 'mutation for ofbiz createProdCatalogInvFacility method',
  args:{fromDate: {type: GraphQLString},facilityId: {type: GraphQLString},prodCatalogId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProdCatalogInvFacility?fromDate=${args.fromDate}&facilityId=${args.facilityId}&prodCatalogId=${args.prodCatalogId}&sequenceNum=${args.sequenceNum}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {createProdCatalogInvFacility};


const createProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz createProduct method',
  args:{internalName: {type: GraphQLString},productTypeId: {type: GraphQLString},originGeoId: {type: GraphQLString},detailScreen: {type: GraphQLString},requireInventory: {type: GraphQLString},quantityUomId: {type: GraphQLString},mediumImageUrl: {type: GraphQLString},productName: {type: GraphQLString},introductionDate: {type: GraphQLString},shippingHeight: {type: GraphQLFloat},originalImageUrl: {type: GraphQLString},inShippingBox: {type: GraphQLString},detailImageUrl: {type: GraphQLString},supportDiscontinuationDate: {type: GraphQLString},productWidth: {type: GraphQLFloat},includeInPromotions: {type: GraphQLString},configId: {type: GraphQLString},billOfMaterialLevel: {type: GraphQLInt},lotIdFilledIn: {type: GraphQLString},productRating: {type: GraphQLFloat},manufacturerPartyId: {type: GraphQLString},brandName: {type: GraphQLString},requireAmount: {type: GraphQLString},smallImageUrl: {type: GraphQLString},taxable: {type: GraphQLString},productId: {type: GraphQLString},primaryProductCategoryId: {type: GraphQLString},salesDiscontinuationDate: {type: GraphQLString},salesDiscWhenNotAvail: {type: GraphQLString},returnable: {type: GraphQLString},weightUomId: {type: GraphQLString},isVirtual: {type: GraphQLString},priceDetailText: {type: GraphQLString},reserv2ndPPPerc: {type: GraphQLFloat},widthUomId: {type: GraphQLString},longDescription: {type: GraphQLString},diameterUomId: {type: GraphQLString},autoCreateKeywords: {type: GraphQLString},amountUomTypeId: {type: GraphQLString},productDiameter: {type: GraphQLFloat},ratingTypeEnum: {type: GraphQLString},description: {type: GraphQLString},chargeShipping: {type: GraphQLString},reservNthPPPerc: {type: GraphQLFloat},quantityIncluded: {type: GraphQLFloat},heightUomId: {type: GraphQLString},virtualVariantMethodEnum: {type: GraphQLString},shippingWeight: {type: GraphQLFloat},shippingWidth: {type: GraphQLFloat},shippingDepth: {type: GraphQLFloat},reservMaxPersons: {type: GraphQLFloat},fixedAmount: {type: GraphQLFloat},inventoryItemTypeId: {type: GraphQLString},piecesIncluded: {type: GraphQLInt},productDepth: {type: GraphQLFloat},facilityId: {type: GraphQLString},comments: {type: GraphQLString},releaseDate: {type: GraphQLString},productHeight: {type: GraphQLFloat},defaultShipmentBoxTypeId: {type: GraphQLString},orderDecimalQuantity: {type: GraphQLString},inventoryMessage: {type: GraphQLString},productWeight: {type: GraphQLFloat},depthUomId: {type: GraphQLString},isVariant: {type: GraphQLString},largeImageUrl: {type: GraphQLString},requirementMethodEnumId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProduct?internalName=${args.internalName}&productTypeId=${args.productTypeId}&originGeoId=${args.originGeoId}&detailScreen=${args.detailScreen}&requireInventory=${args.requireInventory}&quantityUomId=${args.quantityUomId}&mediumImageUrl=${args.mediumImageUrl}&productName=${args.productName}&introductionDate=${args.introductionDate}&shippingHeight=${args.shippingHeight}&originalImageUrl=${args.originalImageUrl}&inShippingBox=${args.inShippingBox}&detailImageUrl=${args.detailImageUrl}&supportDiscontinuationDate=${args.supportDiscontinuationDate}&productWidth=${args.productWidth}&includeInPromotions=${args.includeInPromotions}&configId=${args.configId}&billOfMaterialLevel=${args.billOfMaterialLevel}&lotIdFilledIn=${args.lotIdFilledIn}&productRating=${args.productRating}&manufacturerPartyId=${args.manufacturerPartyId}&brandName=${args.brandName}&requireAmount=${args.requireAmount}&smallImageUrl=${args.smallImageUrl}&taxable=${args.taxable}&productId=${args.productId}&primaryProductCategoryId=${args.primaryProductCategoryId}&salesDiscontinuationDate=${args.salesDiscontinuationDate}&salesDiscWhenNotAvail=${args.salesDiscWhenNotAvail}&returnable=${args.returnable}&weightUomId=${args.weightUomId}&isVirtual=${args.isVirtual}&priceDetailText=${args.priceDetailText}&reserv2ndPPPerc=${args.reserv2ndPPPerc}&widthUomId=${args.widthUomId}&longDescription=${args.longDescription}&diameterUomId=${args.diameterUomId}&autoCreateKeywords=${args.autoCreateKeywords}&amountUomTypeId=${args.amountUomTypeId}&productDiameter=${args.productDiameter}&ratingTypeEnum=${args.ratingTypeEnum}&description=${args.description}&chargeShipping=${args.chargeShipping}&reservNthPPPerc=${args.reservNthPPPerc}&quantityIncluded=${args.quantityIncluded}&heightUomId=${args.heightUomId}&virtualVariantMethodEnum=${args.virtualVariantMethodEnum}&shippingWeight=${args.shippingWeight}&shippingWidth=${args.shippingWidth}&shippingDepth=${args.shippingDepth}&reservMaxPersons=${args.reservMaxPersons}&fixedAmount=${args.fixedAmount}&inventoryItemTypeId=${args.inventoryItemTypeId}&piecesIncluded=${args.piecesIncluded}&productDepth=${args.productDepth}&facilityId=${args.facilityId}&comments=${args.comments}&releaseDate=${args.releaseDate}&productHeight=${args.productHeight}&defaultShipmentBoxTypeId=${args.defaultShipmentBoxTypeId}&orderDecimalQuantity=${args.orderDecimalQuantity}&inventoryMessage=${args.inventoryMessage}&productWeight=${args.productWeight}&depthUomId=${args.depthUomId}&isVariant=${args.isVariant}&largeImageUrl=${args.largeImageUrl}&requirementMethodEnumId=${args.requirementMethodEnumId}&`, null, req);
  }
};
export {createProduct};


const createProductAssoc = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductAssoc method',
  args:{fromDate: {type: GraphQLString},productId: {type: GraphQLString},productIdTo: {type: GraphQLString},productAssocTypeId: {type: GraphQLString},reason: {type: GraphQLString},scrapFactor: {type: GraphQLFloat},quantity: {type: GraphQLFloat},recurrenceInfoId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},estimateCalcMethod: {type: GraphQLString},instruction: {type: GraphQLString},routingWorkEffortId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProductAssoc?fromDate=${args.fromDate}&productId=${args.productId}&productIdTo=${args.productIdTo}&productAssocTypeId=${args.productAssocTypeId}&reason=${args.reason}&scrapFactor=${args.scrapFactor}&quantity=${args.quantity}&recurrenceInfoId=${args.recurrenceInfoId}&sequenceNum=${args.sequenceNum}&estimateCalcMethod=${args.estimateCalcMethod}&instruction=${args.instruction}&routingWorkEffortId=${args.routingWorkEffortId}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {createProductAssoc};


const createProductAssocType = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductAssocType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString},productAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProductAssocType?parentTypeId=${args.parentTypeId}&hasTable=${args.hasTable}&description=${args.description}&productAssocTypeId=${args.productAssocTypeId}&`, null, req);
  }
};
export {createProductAssocType};


const createProductAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductAttribute method',
  args:{productId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt},attrType: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProductAttribute?productId=${args.productId}&attrName=${args.attrName}&attrDescription=${args.attrDescription}&attrValue=${args.attrValue}&attrType=${args.attrType}&`, null, req);
  }
};
export {createProductAttribute};


const createProductCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductCategory method',
  args:{productCategoryTypeId: {type: GraphQLString},longDescription: {type: GraphQLString},productCategoryId: {type: GraphQLString},linkOneImageUrl: {type: GraphQLString},detailScreen: {type: GraphQLString},primaryParentCategoryId: {type: GraphQLString},categoryImageUrl: {type: GraphQLString},description: {type: GraphQLString},showInSelect: {type: GraphQLString},linkTwoImageUrl: {type: GraphQLString},categoryName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProductCategory?productCategoryTypeId=${args.productCategoryTypeId}&longDescription=${args.longDescription}&productCategoryId=${args.productCategoryId}&linkOneImageUrl=${args.linkOneImageUrl}&detailScreen=${args.detailScreen}&primaryParentCategoryId=${args.primaryParentCategoryId}&categoryImageUrl=${args.categoryImageUrl}&description=${args.description}&showInSelect=${args.showInSelect}&linkTwoImageUrl=${args.linkTwoImageUrl}&categoryName=${args.categoryName}&`, null, req);
  }
};
export {createProductCategory};


const createProductCategoryAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductCategoryAttribute method',
  args:{productCategoryId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProductCategoryAttribute?productCategoryId=${args.productCategoryId}&attrName=${args.attrName}&attrDescription=${args.attrDescription}&attrValue=${args.attrValue}&`, null, req);
  }
};
export {createProductCategoryAttribute};


const createProductCategoryContentType = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductCategoryContentType method',
  args:{prodCatContentTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProductCategoryContentType?prodCatContentTypeId=${args.prodCatContentTypeId}&parentTypeId=${args.parentTypeId}&hasTable=${args.hasTable}&description=${args.description}&`, null, req);
  }
};
export {createProductCategoryContentType};


const createProductCategoryGlAccount = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductCategoryGlAccount method',
  args:{productCategoryId: {type: GraphQLString},glAccountTypeId: {type: GraphQLString},glAccountId: {type: GraphQLString},organizationPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProductCategoryGlAccount?productCategoryId=${args.productCategoryId}&glAccountTypeId=${args.glAccountTypeId}&glAccountId=${args.glAccountId}&organizationPartyId=${args.organizationPartyId}&`, null, req);
  }
};
export {createProductCategoryGlAccount};


const createProductCategoryLink = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductCategoryLink method',
  args:{productCategoryId: {type: GraphQLString},fromDate: {type: GraphQLString},linkInfo: {type: GraphQLString},comments: {type: GraphQLString},sequenceNum: {type: GraphQLInt},detailText: {type: GraphQLString},titleText: {type: GraphQLString},imageUrl: {type: GraphQLString},imageTwoUrl: {type: GraphQLString},linkTypeEnumId: {type: GraphQLString},linkSeqId: {type: GraphQLString},thruDate: {type: GraphQLString},detailSubScreen: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProductCategoryLink?productCategoryId=${args.productCategoryId}&fromDate=${args.fromDate}&linkInfo=${args.linkInfo}&comments=${args.comments}&sequenceNum=${args.sequenceNum}&detailText=${args.detailText}&titleText=${args.titleText}&imageUrl=${args.imageUrl}&imageTwoUrl=${args.imageTwoUrl}&linkTypeEnumId=${args.linkTypeEnumId}&linkSeqId=${args.linkSeqId}&thruDate=${args.thruDate}&detailSubScreen=${args.detailSubScreen}&`, null, req);
  }
};
export {createProductCategoryLink};


const createProductCategoryType = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductCategoryType method',
  args:{productCategoryTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProductCategoryType?productCategoryTypeId=${args.productCategoryTypeId}&parentTypeId=${args.parentTypeId}&hasTable=${args.hasTable}&description=${args.description}&`, null, req);
  }
};
export {createProductCategoryType};


const createProductCategoryTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductCategoryTypeAttr method',
  args:{productCategoryTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProductCategoryTypeAttr?productCategoryTypeId=${args.productCategoryTypeId}&attrName=${args.attrName}&description=${args.description}&`, null, req);
  }
};
export {createProductCategoryTypeAttr};


const createProductConfig = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductConfig method',
  args:{configItemId: {type: GraphQLString},productId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},fromDate: {type: GraphQLString},longDescription: {type: GraphQLString},defaultConfigOptionId: {type: GraphQLString},configTypeId: {type: GraphQLString},description: {type: GraphQLString},isMandatory: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProductConfig?configItemId=${args.configItemId}&productId=${args.productId}&sequenceNum=${args.sequenceNum}&fromDate=${args.fromDate}&longDescription=${args.longDescription}&defaultConfigOptionId=${args.defaultConfigOptionId}&configTypeId=${args.configTypeId}&description=${args.description}&isMandatory=${args.isMandatory}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {createProductConfig};


const createProductConfigItem = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductConfigItem method',
  args:{longDescription: {type: GraphQLString},imageUrl: {type: GraphQLString},configItemName: {type: GraphQLString},configItemTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProductConfigItem?longDescription=${args.longDescription}&imageUrl=${args.imageUrl}&configItemName=${args.configItemName}&configItemTypeId=${args.configItemTypeId}&description=${args.description}&`, null, req);
  }
};
export {createProductConfigItem};


const createProductConfigItemContent = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductConfigItemContent method',
  args:{configItemId: {type: GraphQLString},confItemContentTypeId: {type: GraphQLString},ownerContentId: {type: GraphQLString},contentId: {type: GraphQLString},contentTypeId: {type: GraphQLString},description: {type: GraphQLString},mimeTypeId: {type: GraphQLString},childLeafCount: {type: GraphQLInt},privilegeEnumId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},dataResourceId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},serviceName: {type: GraphQLString},customMethodId: {type: GraphQLString},characterSetId: {type: GraphQLString},thruDate: {type: GraphQLString},contentName: {type: GraphQLInt},fromDate: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString},decoratorContentId: {type: GraphQLString},childBranchCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProductConfigItemContent?configItemId=${args.configItemId}&confItemContentTypeId=${args.confItemContentTypeId}&ownerContentId=${args.ownerContentId}&contentId=${args.contentId}&contentTypeId=${args.contentTypeId}&description=${args.description}&mimeTypeId=${args.mimeTypeId}&childLeafCount=${args.childLeafCount}&privilegeEnumId=${args.privilegeEnumId}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&dataResourceId=${args.dataResourceId}&createdByUserLogin=${args.createdByUserLogin}&templateDataResourceId=${args.templateDataResourceId}&lastModifiedDate=${args.lastModifiedDate}&instanceOfContentId=${args.instanceOfContentId}&serviceName=${args.serviceName}&customMethodId=${args.customMethodId}&characterSetId=${args.characterSetId}&thruDate=${args.thruDate}&contentName=${args.contentName}&fromDate=${args.fromDate}&createdDate=${args.createdDate}&statusId=${args.statusId}&localeString=${args.localeString}&decoratorContentId=${args.decoratorContentId}&childBranchCount=${args.childBranchCount}&`, null, req);
  }
};
export {createProductConfigItemContent};


const createProductConfigOption = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductConfigOption method',
  args:{configItemId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},configOptionName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProductConfigOption?configItemId=${args.configItemId}&sequenceNum=${args.sequenceNum}&configOptionName=${args.configOptionName}&description=${args.description}&`, null, req);
  }
};
export {createProductConfigOption};


const createProductConfigProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductConfigProduct method',
  args:{configItemId: {type: GraphQLString},productId: {type: GraphQLString},configOptionId: {type: GraphQLString},quantity: {type: GraphQLFloat},sequenceNum: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProductConfigProduct?configItemId=${args.configItemId}&productId=${args.productId}&configOptionId=${args.configOptionId}&quantity=${args.quantity}&sequenceNum=${args.sequenceNum}&`, null, req);
  }
};
export {createProductConfigProduct};


const createProductContent = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductContent method',
  args:{productId: {type: GraphQLString},productContentTypeId: {type: GraphQLString},useTimeUomId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},ownerContentId: {type: GraphQLString},contentId: {type: GraphQLString},contentTypeId: {type: GraphQLString},description: {type: GraphQLString},mimeTypeId: {type: GraphQLString},childLeafCount: {type: GraphQLInt},privilegeEnumId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},useRoleTypeId: {type: GraphQLString},dataResourceId: {type: GraphQLString},useTime: {type: GraphQLInt},createdByUserLogin: {type: GraphQLString},purchaseFromDate: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},useCountLimit: {type: GraphQLInt},serviceName: {type: GraphQLString},customMethodId: {type: GraphQLString},characterSetId: {type: GraphQLString},thruDate: {type: GraphQLString},contentName: {type: GraphQLInt},fromDate: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString},decoratorContentId: {type: GraphQLString},purchaseThruDate: {type: GraphQLString},childBranchCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProductContent?productId=${args.productId}&productContentTypeId=${args.productContentTypeId}&useTimeUomId=${args.useTimeUomId}&sequenceNum=${args.sequenceNum}&ownerContentId=${args.ownerContentId}&contentId=${args.contentId}&contentTypeId=${args.contentTypeId}&description=${args.description}&mimeTypeId=${args.mimeTypeId}&childLeafCount=${args.childLeafCount}&privilegeEnumId=${args.privilegeEnumId}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&useRoleTypeId=${args.useRoleTypeId}&dataResourceId=${args.dataResourceId}&useTime=${args.useTime}&createdByUserLogin=${args.createdByUserLogin}&purchaseFromDate=${args.purchaseFromDate}&templateDataResourceId=${args.templateDataResourceId}&lastModifiedDate=${args.lastModifiedDate}&instanceOfContentId=${args.instanceOfContentId}&useCountLimit=${args.useCountLimit}&serviceName=${args.serviceName}&customMethodId=${args.customMethodId}&characterSetId=${args.characterSetId}&thruDate=${args.thruDate}&contentName=${args.contentName}&fromDate=${args.fromDate}&createdDate=${args.createdDate}&statusId=${args.statusId}&localeString=${args.localeString}&decoratorContentId=${args.decoratorContentId}&purchaseThruDate=${args.purchaseThruDate}&childBranchCount=${args.childBranchCount}&`, null, req);
  }
};
export {createProductContent};


const createProductContentType = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductContentType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString},productContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProductContentType?parentTypeId=${args.parentTypeId}&hasTable=${args.hasTable}&description=${args.description}&productContentTypeId=${args.productContentTypeId}&`, null, req);
  }
};
export {createProductContentType};


const createProductFeatureDataResource = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductFeatureDataResource method',
  args:{dataResourceId: {type: GraphQLString},productFeatureId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProductFeatureDataResource?dataResourceId=${args.dataResourceId}&productFeatureId=${args.productFeatureId}&`, null, req);
  }
};
export {createProductFeatureDataResource};


const createProductGeo = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductGeo method',
  args:{productId: {type: GraphQLString},geoId: {type: GraphQLString},description: {type: GraphQLString},productGeoEnumId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProductGeo?productId=${args.productId}&geoId=${args.geoId}&description=${args.description}&productGeoEnumId=${args.productGeoEnumId}&`, null, req);
  }
};
export {createProductGeo};


const createProductGlAccount = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductGlAccount method',
  args:{productId: {type: GraphQLString},glAccountTypeId: {type: GraphQLString},glAccountId: {type: GraphQLString},organizationPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProductGlAccount?productId=${args.productId}&glAccountTypeId=${args.glAccountTypeId}&glAccountId=${args.glAccountId}&organizationPartyId=${args.organizationPartyId}&`, null, req);
  }
};
export {createProductGlAccount};


const createProductGroupOrder = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductGroupOrder method',
  args:{fromDate: {type: GraphQLString},jobId: {type: GraphQLString},productId: {type: GraphQLString},statusId: {type: GraphQLString},reqOrderQty: {type: GraphQLFloat},soldOrderQty: {type: GraphQLFloat},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProductGroupOrder?fromDate=${args.fromDate}&jobId=${args.jobId}&productId=${args.productId}&statusId=${args.statusId}&reqOrderQty=${args.reqOrderQty}&soldOrderQty=${args.soldOrderQty}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {createProductGroupOrder};


const createProductInCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductInCategory method',
  args:{productFeatureIdByType: {type: GraphQLString},productCategoryId: {type: GraphQLString},productFeatureSelectableByType: {type: GraphQLString},originGeoId: {type: GraphQLString},detailScreen: {type: GraphQLString},requireInventory: {type: GraphQLString},quantityUomId: {type: GraphQLString},mediumImageUrl: {type: GraphQLString},productName: {type: GraphQLString},introductionDate: {type: GraphQLString},shippingHeight: {type: GraphQLFloat},originalImageUrl: {type: GraphQLString},inShippingBox: {type: GraphQLString},detailImageUrl: {type: GraphQLString},supportDiscontinuationDate: {type: GraphQLString},productWidth: {type: GraphQLFloat},includeInPromotions: {type: GraphQLString},configId: {type: GraphQLString},billOfMaterialLevel: {type: GraphQLInt},lotIdFilledIn: {type: GraphQLString},productRating: {type: GraphQLFloat},createdByUserLogin: {type: GraphQLString},manufacturerPartyId: {type: GraphQLString},brandName: {type: GraphQLString},requireAmount: {type: GraphQLString},productId: {type: GraphQLString},smallImageUrl: {type: GraphQLString},taxable: {type: GraphQLString},primaryProductCategoryId: {type: GraphQLString},salesDiscontinuationDate: {type: GraphQLString},salesDiscWhenNotAvail: {type: GraphQLString},returnable: {type: GraphQLString},weightUomId: {type: GraphQLString},isVirtual: {type: GraphQLString},priceDetailText: {type: GraphQLString},reserv2ndPPPerc: {type: GraphQLFloat},widthUomId: {type: GraphQLString},longDescription: {type: GraphQLString},diameterUomId: {type: GraphQLString},autoCreateKeywords: {type: GraphQLString},amountUomTypeId: {type: GraphQLString},productDiameter: {type: GraphQLFloat},ratingTypeEnum: {type: GraphQLString},description: {type: GraphQLString},chargeShipping: {type: GraphQLString},reservNthPPPerc: {type: GraphQLFloat},quantityIncluded: {type: GraphQLFloat},heightUomId: {type: GraphQLString},internalName: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},virtualVariantMethodEnum: {type: GraphQLString},shippingWeight: {type: GraphQLFloat},shippingWidth: {type: GraphQLFloat},shippingDepth: {type: GraphQLFloat},reservMaxPersons: {type: GraphQLFloat},fixedAmount: {type: GraphQLFloat},inventoryItemTypeId: {type: GraphQLString},piecesIncluded: {type: GraphQLInt},productDepth: {type: GraphQLFloat},defaultPrice: {type: GraphQLFloat},facilityId: {type: GraphQLString},comments: {type: GraphQLString},releaseDate: {type: GraphQLString},productHeight: {type: GraphQLFloat},lastModifiedDate: {type: GraphQLString},defaultShipmentBoxTypeId: {type: GraphQLString},orderDecimalQuantity: {type: GraphQLString},inventoryMessage: {type: GraphQLString},productWeight: {type: GraphQLFloat},depthUomId: {type: GraphQLString},productTypeId: {type: GraphQLString},createdDate: {type: GraphQLString},currencyUomId: {type: GraphQLString},isVariant: {type: GraphQLString},largeImageUrl: {type: GraphQLString},requirementMethodEnumId: {type: GraphQLString},averageCost: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProductInCategory?productFeatureIdByType=${args.productFeatureIdByType}&productCategoryId=${args.productCategoryId}&productFeatureSelectableByType=${args.productFeatureSelectableByType}&originGeoId=${args.originGeoId}&detailScreen=${args.detailScreen}&requireInventory=${args.requireInventory}&quantityUomId=${args.quantityUomId}&mediumImageUrl=${args.mediumImageUrl}&productName=${args.productName}&introductionDate=${args.introductionDate}&shippingHeight=${args.shippingHeight}&originalImageUrl=${args.originalImageUrl}&inShippingBox=${args.inShippingBox}&detailImageUrl=${args.detailImageUrl}&supportDiscontinuationDate=${args.supportDiscontinuationDate}&productWidth=${args.productWidth}&includeInPromotions=${args.includeInPromotions}&configId=${args.configId}&billOfMaterialLevel=${args.billOfMaterialLevel}&lotIdFilledIn=${args.lotIdFilledIn}&productRating=${args.productRating}&createdByUserLogin=${args.createdByUserLogin}&manufacturerPartyId=${args.manufacturerPartyId}&brandName=${args.brandName}&requireAmount=${args.requireAmount}&productId=${args.productId}&smallImageUrl=${args.smallImageUrl}&taxable=${args.taxable}&primaryProductCategoryId=${args.primaryProductCategoryId}&salesDiscontinuationDate=${args.salesDiscontinuationDate}&salesDiscWhenNotAvail=${args.salesDiscWhenNotAvail}&returnable=${args.returnable}&weightUomId=${args.weightUomId}&isVirtual=${args.isVirtual}&priceDetailText=${args.priceDetailText}&reserv2ndPPPerc=${args.reserv2ndPPPerc}&widthUomId=${args.widthUomId}&longDescription=${args.longDescription}&diameterUomId=${args.diameterUomId}&autoCreateKeywords=${args.autoCreateKeywords}&amountUomTypeId=${args.amountUomTypeId}&productDiameter=${args.productDiameter}&ratingTypeEnum=${args.ratingTypeEnum}&description=${args.description}&chargeShipping=${args.chargeShipping}&reservNthPPPerc=${args.reservNthPPPerc}&quantityIncluded=${args.quantityIncluded}&heightUomId=${args.heightUomId}&internalName=${args.internalName}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&virtualVariantMethodEnum=${args.virtualVariantMethodEnum}&shippingWeight=${args.shippingWeight}&shippingWidth=${args.shippingWidth}&shippingDepth=${args.shippingDepth}&reservMaxPersons=${args.reservMaxPersons}&fixedAmount=${args.fixedAmount}&inventoryItemTypeId=${args.inventoryItemTypeId}&piecesIncluded=${args.piecesIncluded}&productDepth=${args.productDepth}&defaultPrice=${args.defaultPrice}&facilityId=${args.facilityId}&comments=${args.comments}&releaseDate=${args.releaseDate}&productHeight=${args.productHeight}&lastModifiedDate=${args.lastModifiedDate}&defaultShipmentBoxTypeId=${args.defaultShipmentBoxTypeId}&orderDecimalQuantity=${args.orderDecimalQuantity}&inventoryMessage=${args.inventoryMessage}&productWeight=${args.productWeight}&depthUomId=${args.depthUomId}&productTypeId=${args.productTypeId}&createdDate=${args.createdDate}&currencyUomId=${args.currencyUomId}&isVariant=${args.isVariant}&largeImageUrl=${args.largeImageUrl}&requirementMethodEnumId=${args.requirementMethodEnumId}&averageCost=${args.averageCost}&`, null, req);
  }
};
export {createProductInCategory};


const createProductKeyword = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductKeyword method',
  args:{productId: {type: GraphQLString},keywordTypeId: {type: GraphQLString},keyword: {type: GraphQLString},relevancyWeight: {type: GraphQLInt},statusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProductKeyword?productId=${args.productId}&keywordTypeId=${args.keywordTypeId}&keyword=${args.keyword}&relevancyWeight=${args.relevancyWeight}&statusId=${args.statusId}&`, null, req);
  }
};
export {createProductKeyword};


const createProductMaint = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductMaint method',
  args:{productId: {type: GraphQLString},intervalUomId: {type: GraphQLString},maintTemplateWorkEffortId: {type: GraphQLString},maintName: {type: GraphQLString},intervalQuantity: {type: GraphQLFloat},productMaintTypeId: {type: GraphQLString},intervalMeterTypeId: {type: GraphQLString},repeatCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProductMaint?productId=${args.productId}&intervalUomId=${args.intervalUomId}&maintTemplateWorkEffortId=${args.maintTemplateWorkEffortId}&maintName=${args.maintName}&intervalQuantity=${args.intervalQuantity}&productMaintTypeId=${args.productMaintTypeId}&intervalMeterTypeId=${args.intervalMeterTypeId}&repeatCount=${args.repeatCount}&`, null, req);
  }
};
export {createProductMaint};


const createProductMaintType = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductMaintType method',
  args:{parentTypeId: {type: GraphQLString},description: {type: GraphQLString},productMaintTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProductMaintType?parentTypeId=${args.parentTypeId}&description=${args.description}&productMaintTypeId=${args.productMaintTypeId}&`, null, req);
  }
};
export {createProductMaintType};


const createProductMeter = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductMeter method',
  args:{productId: {type: GraphQLString},productMeterTypeId: {type: GraphQLString},meterName: {type: GraphQLString},meterUomId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProductMeter?productId=${args.productId}&productMeterTypeId=${args.productMeterTypeId}&meterName=${args.meterName}&meterUomId=${args.meterUomId}&`, null, req);
  }
};
export {createProductMeter};


const createProductMeterType = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductMeterType method',
  args:{defaultUomId: {type: GraphQLString},productMeterTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProductMeterType?defaultUomId=${args.defaultUomId}&productMeterTypeId=${args.productMeterTypeId}&description=${args.description}&`, null, req);
  }
};
export {createProductMeterType};


const createProductPaymentMethodType = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductPaymentMethodType method',
  args:{productId: {type: GraphQLString},paymentMethodTypeId: {type: GraphQLString},productPricePurposeId: {type: GraphQLString},fromDate: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProductPaymentMethodType?productId=${args.productId}&paymentMethodTypeId=${args.paymentMethodTypeId}&productPricePurposeId=${args.productPricePurposeId}&fromDate=${args.fromDate}&sequenceNum=${args.sequenceNum}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {createProductPaymentMethodType};


const createProductPrice = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductPrice method',
  args:{currencyUomId: {type: GraphQLString},productId: {type: GraphQLString},price: {type: GraphQLFloat},productPricePurposeId: {type: GraphQLString},productStoreGroupId: {type: GraphQLString},productPriceTypeId: {type: GraphQLString},fromDate: {type: GraphQLString},taxAuthPartyId: {type: GraphQLString},taxInPrice: {type: GraphQLString},termUomId: {type: GraphQLString},customPriceCalcService: {type: GraphQLString},taxPercentage: {type: GraphQLFloat},taxAuthGeoId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProductPrice?currencyUomId=${args.currencyUomId}&productId=${args.productId}&price=${args.price}&productPricePurposeId=${args.productPricePurposeId}&productStoreGroupId=${args.productStoreGroupId}&productPriceTypeId=${args.productPriceTypeId}&fromDate=${args.fromDate}&taxAuthPartyId=${args.taxAuthPartyId}&taxInPrice=${args.taxInPrice}&termUomId=${args.termUomId}&customPriceCalcService=${args.customPriceCalcService}&taxPercentage=${args.taxPercentage}&taxAuthGeoId=${args.taxAuthGeoId}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {createProductPrice};


const createProductPromoContent = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductPromoContent method',
  args:{productPromoContentTypeId: {type: GraphQLString},contentId: {type: GraphQLString},productPromoId: {type: GraphQLString},fromDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProductPromoContent?productPromoContentTypeId=${args.productPromoContentTypeId}&contentId=${args.contentId}&productPromoId=${args.productPromoId}&fromDate=${args.fromDate}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {createProductPromoContent};


const createProductReview = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductReview method',
  args:{productId: {type: GraphQLString},productStoreId: {type: GraphQLString},productRating: {type: GraphQLFloat},userLoginId: {type: GraphQLString},statusId: {type: GraphQLString},postedDateTime: {type: GraphQLString},postedAnonymous: {type: GraphQLString},productReview: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProductReview?productId=${args.productId}&productStoreId=${args.productStoreId}&productRating=${args.productRating}&userLoginId=${args.userLoginId}&statusId=${args.statusId}&postedDateTime=${args.postedDateTime}&postedAnonymous=${args.postedAnonymous}&productReview=${args.productReview}&`, null, req);
  }
};
export {createProductReview};


const createProductType = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductType method',
  args:{isPhysical: {type: GraphQLString},parentTypeId: {type: GraphQLString},isDigital: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString},productTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProductType?isPhysical=${args.isPhysical}&parentTypeId=${args.parentTypeId}&isDigital=${args.isDigital}&hasTable=${args.hasTable}&description=${args.description}&productTypeId=${args.productTypeId}&`, null, req);
  }
};
export {createProductType};


const createProductTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductTypeAttr method',
  args:{productTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createProductTypeAttr?productTypeId=${args.productTypeId}&attrName=${args.attrName}&description=${args.description}&`, null, req);
  }
};
export {createProductTypeAttr};


const createRelatedUrlContentForCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz createRelatedUrlContentForCategory method',
  args:{prodCatContentTypeId: {type: GraphQLString},productCategoryId: {type: GraphQLString},description: {type: GraphQLString},title: {type: GraphQLString},url: {type: GraphQLString},fromDate: {type: GraphQLString},purchaseFromDate: {type: GraphQLString},localeString: {type: GraphQLString},contentId: {type: GraphQLString},useDaysLimit: {type: GraphQLFloat},purchaseThruDate: {type: GraphQLString},useCountLimit: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createRelatedUrlContentForCategory?prodCatContentTypeId=${args.prodCatContentTypeId}&productCategoryId=${args.productCategoryId}&description=${args.description}&title=${args.title}&url=${args.url}&fromDate=${args.fromDate}&purchaseFromDate=${args.purchaseFromDate}&localeString=${args.localeString}&contentId=${args.contentId}&useDaysLimit=${args.useDaysLimit}&purchaseThruDate=${args.purchaseThruDate}&useCountLimit=${args.useCountLimit}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {createRelatedUrlContentForCategory};


const createSalesAgreement = {
  type: ResponseType,
  description: 'mutation for ofbiz createSalesAgreement method',
  args:{agreementId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString},roleTypeIdTo: {type: GraphQLString},partyIdFrom: {type: GraphQLString},productId: {type: GraphQLString},agreementDate: {type: GraphQLString},agreementTypeId: {type: GraphQLString},description: {type: GraphQLString},roleTypeIdFrom: {type: GraphQLString},agreementItemTypeId: {type: GraphQLString},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},textData: {type: GraphQLString},currencyUomId: {type: GraphQLString},agreementText: {type: GraphQLString},agreementImage: {type: GraphQLString},price: {type: GraphQLFloat},partyIdTo: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createSalesAgreement?agreementId=${args.agreementId}&agreementItemSeqId=${args.agreementItemSeqId}&roleTypeIdTo=${args.roleTypeIdTo}&partyIdFrom=${args.partyIdFrom}&productId=${args.productId}&agreementDate=${args.agreementDate}&agreementTypeId=${args.agreementTypeId}&description=${args.description}&roleTypeIdFrom=${args.roleTypeIdFrom}&agreementItemTypeId=${args.agreementItemTypeId}&thruDate=${args.thruDate}&fromDate=${args.fromDate}&textData=${args.textData}&currencyUomId=${args.currencyUomId}&agreementText=${args.agreementText}&agreementImage=${args.agreementImage}&price=${args.price}&partyIdTo=${args.partyIdTo}&`, null, req);
  }
};
export {createSalesAgreement};


const createSimpleTextContentForAlternateLocale = {
  type: ResponseType,
  description: 'mutation for ofbiz createSimpleTextContentForAlternateLocale method',
  args:{localeString: {type: GraphQLString},mainContentId: {type: GraphQLString},text: {type: GraphQLString},ownerContentId: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},contentTypeId: {type: GraphQLString},description: {type: GraphQLString},mimeTypeId: {type: GraphQLString},childLeafCount: {type: GraphQLInt},serviceName: {type: GraphQLString},customMethodId: {type: GraphQLString},characterSetId: {type: GraphQLString},contentName: {type: GraphQLInt},privilegeEnumId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},dataResourceId: {type: GraphQLString},decoratorContentId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},childBranchCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createSimpleTextContentForAlternateLocale?localeString=${args.localeString}&mainContentId=${args.mainContentId}&text=${args.text}&ownerContentId=${args.ownerContentId}&templateDataResourceId=${args.templateDataResourceId}&lastModifiedDate=${args.lastModifiedDate}&instanceOfContentId=${args.instanceOfContentId}&contentTypeId=${args.contentTypeId}&description=${args.description}&mimeTypeId=${args.mimeTypeId}&childLeafCount=${args.childLeafCount}&serviceName=${args.serviceName}&customMethodId=${args.customMethodId}&characterSetId=${args.characterSetId}&contentName=${args.contentName}&privilegeEnumId=${args.privilegeEnumId}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&createdDate=${args.createdDate}&statusId=${args.statusId}&dataResourceId=${args.dataResourceId}&decoratorContentId=${args.decoratorContentId}&createdByUserLogin=${args.createdByUserLogin}&childBranchCount=${args.childBranchCount}&`, null, req);
  }
};
export {createSimpleTextContentForAlternateLocale};


const createSimpleTextContentForCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz createSimpleTextContentForCategory method',
  args:{prodCatContentTypeId: {type: GraphQLString},productCategoryId: {type: GraphQLString},text: {type: GraphQLString},ownerContentId: {type: GraphQLString},contentId: {type: GraphQLString},useDaysLimit: {type: GraphQLFloat},contentTypeId: {type: GraphQLString},description: {type: GraphQLString},mimeTypeId: {type: GraphQLString},childLeafCount: {type: GraphQLInt},privilegeEnumId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},dataResourceId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},purchaseFromDate: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},useCountLimit: {type: GraphQLInt},serviceName: {type: GraphQLString},customMethodId: {type: GraphQLString},characterSetId: {type: GraphQLString},thruDate: {type: GraphQLString},contentName: {type: GraphQLInt},fromDate: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString},decoratorContentId: {type: GraphQLString},purchaseThruDate: {type: GraphQLString},childBranchCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createSimpleTextContentForCategory?prodCatContentTypeId=${args.prodCatContentTypeId}&productCategoryId=${args.productCategoryId}&text=${args.text}&ownerContentId=${args.ownerContentId}&contentId=${args.contentId}&useDaysLimit=${args.useDaysLimit}&contentTypeId=${args.contentTypeId}&description=${args.description}&mimeTypeId=${args.mimeTypeId}&childLeafCount=${args.childLeafCount}&privilegeEnumId=${args.privilegeEnumId}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&dataResourceId=${args.dataResourceId}&createdByUserLogin=${args.createdByUserLogin}&purchaseFromDate=${args.purchaseFromDate}&templateDataResourceId=${args.templateDataResourceId}&lastModifiedDate=${args.lastModifiedDate}&instanceOfContentId=${args.instanceOfContentId}&useCountLimit=${args.useCountLimit}&serviceName=${args.serviceName}&customMethodId=${args.customMethodId}&characterSetId=${args.characterSetId}&thruDate=${args.thruDate}&contentName=${args.contentName}&fromDate=${args.fromDate}&createdDate=${args.createdDate}&statusId=${args.statusId}&localeString=${args.localeString}&decoratorContentId=${args.decoratorContentId}&purchaseThruDate=${args.purchaseThruDate}&childBranchCount=${args.childBranchCount}&`, null, req);
  }
};
export {createSimpleTextContentForCategory};


const createSimpleTextContentForProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz createSimpleTextContentForProduct method',
  args:{productId: {type: GraphQLString},text: {type: GraphQLString},productContentTypeId: {type: GraphQLString},useTimeUomId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},ownerContentId: {type: GraphQLString},contentId: {type: GraphQLString},contentTypeId: {type: GraphQLString},description: {type: GraphQLString},mimeTypeId: {type: GraphQLString},childLeafCount: {type: GraphQLInt},privilegeEnumId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},useRoleTypeId: {type: GraphQLString},dataResourceId: {type: GraphQLString},useTime: {type: GraphQLInt},createdByUserLogin: {type: GraphQLString},purchaseFromDate: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},useCountLimit: {type: GraphQLInt},serviceName: {type: GraphQLString},customMethodId: {type: GraphQLString},characterSetId: {type: GraphQLString},thruDate: {type: GraphQLString},contentName: {type: GraphQLInt},fromDate: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString},decoratorContentId: {type: GraphQLString},purchaseThruDate: {type: GraphQLString},childBranchCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createSimpleTextContentForProduct?productId=${args.productId}&text=${args.text}&productContentTypeId=${args.productContentTypeId}&useTimeUomId=${args.useTimeUomId}&sequenceNum=${args.sequenceNum}&ownerContentId=${args.ownerContentId}&contentId=${args.contentId}&contentTypeId=${args.contentTypeId}&description=${args.description}&mimeTypeId=${args.mimeTypeId}&childLeafCount=${args.childLeafCount}&privilegeEnumId=${args.privilegeEnumId}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&useRoleTypeId=${args.useRoleTypeId}&dataResourceId=${args.dataResourceId}&useTime=${args.useTime}&createdByUserLogin=${args.createdByUserLogin}&purchaseFromDate=${args.purchaseFromDate}&templateDataResourceId=${args.templateDataResourceId}&lastModifiedDate=${args.lastModifiedDate}&instanceOfContentId=${args.instanceOfContentId}&useCountLimit=${args.useCountLimit}&serviceName=${args.serviceName}&customMethodId=${args.customMethodId}&characterSetId=${args.characterSetId}&thruDate=${args.thruDate}&contentName=${args.contentName}&fromDate=${args.fromDate}&createdDate=${args.createdDate}&statusId=${args.statusId}&localeString=${args.localeString}&decoratorContentId=${args.decoratorContentId}&purchaseThruDate=${args.purchaseThruDate}&childBranchCount=${args.childBranchCount}&`, null, req);
  }
};
export {createSimpleTextContentForProduct};


const createSimpleTextContentForProductConfigItem = {
  type: ResponseType,
  description: 'mutation for ofbiz createSimpleTextContentForProductConfigItem method',
  args:{configItemId: {type: GraphQLString},text: {type: GraphQLString},ownerContentId: {type: GraphQLString},contentId: {type: GraphQLString},contentTypeId: {type: GraphQLString},description: {type: GraphQLString},mimeTypeId: {type: GraphQLString},childLeafCount: {type: GraphQLInt},privilegeEnumId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},dataResourceId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},confItemContentTypeId: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},serviceName: {type: GraphQLString},customMethodId: {type: GraphQLString},characterSetId: {type: GraphQLString},thruDate: {type: GraphQLString},contentName: {type: GraphQLInt},fromDate: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString},decoratorContentId: {type: GraphQLString},childBranchCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createSimpleTextContentForProductConfigItem?configItemId=${args.configItemId}&text=${args.text}&ownerContentId=${args.ownerContentId}&contentId=${args.contentId}&contentTypeId=${args.contentTypeId}&description=${args.description}&mimeTypeId=${args.mimeTypeId}&childLeafCount=${args.childLeafCount}&privilegeEnumId=${args.privilegeEnumId}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&dataResourceId=${args.dataResourceId}&createdByUserLogin=${args.createdByUserLogin}&confItemContentTypeId=${args.confItemContentTypeId}&templateDataResourceId=${args.templateDataResourceId}&lastModifiedDate=${args.lastModifiedDate}&instanceOfContentId=${args.instanceOfContentId}&serviceName=${args.serviceName}&customMethodId=${args.customMethodId}&characterSetId=${args.characterSetId}&thruDate=${args.thruDate}&contentName=${args.contentName}&fromDate=${args.fromDate}&createdDate=${args.createdDate}&statusId=${args.statusId}&localeString=${args.localeString}&decoratorContentId=${args.decoratorContentId}&childBranchCount=${args.childBranchCount}&`, null, req);
  }
};
export {createSimpleTextContentForProductConfigItem};


const createSupplierProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz createSupplierProduct method',
  args:{currencyUomId: {type: GraphQLString},productId: {type: GraphQLString},availableFromDate: {type: GraphQLString},minimumOrderQuantity: {type: GraphQLFloat},partyId: {type: GraphQLString},supplierProductId: {type: GraphQLString},lastPrice: {type: GraphQLFloat},supplierProductName: {type: GraphQLString},comments: {type: GraphQLString},canDropShip: {type: GraphQLString},supplierRatingTypeId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString},quantityUomId: {type: GraphQLString},supplierPrefOrderId: {type: GraphQLString},unitsIncluded: {type: GraphQLFloat},orderQtyIncrements: {type: GraphQLFloat},shippingPrice: {type: GraphQLFloat},agreementId: {type: GraphQLString},availableThruDate: {type: GraphQLString},standardLeadTimeDays: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createSupplierProduct?currencyUomId=${args.currencyUomId}&productId=${args.productId}&availableFromDate=${args.availableFromDate}&minimumOrderQuantity=${args.minimumOrderQuantity}&partyId=${args.partyId}&supplierProductId=${args.supplierProductId}&lastPrice=${args.lastPrice}&supplierProductName=${args.supplierProductName}&comments=${args.comments}&canDropShip=${args.canDropShip}&supplierRatingTypeId=${args.supplierRatingTypeId}&agreementItemSeqId=${args.agreementItemSeqId}&quantityUomId=${args.quantityUomId}&supplierPrefOrderId=${args.supplierPrefOrderId}&unitsIncluded=${args.unitsIncluded}&orderQtyIncrements=${args.orderQtyIncrements}&shippingPrice=${args.shippingPrice}&agreementId=${args.agreementId}&availableThruDate=${args.availableThruDate}&standardLeadTimeDays=${args.standardLeadTimeDays}&`, null, req);
  }
};
export {createSupplierProduct};


const createSupplierProductFeature = {
  type: ResponseType,
  description: 'mutation for ofbiz createSupplierProductFeature method',
  args:{productFeatureId: {type: GraphQLString},partyId: {type: GraphQLString},idCode: {type: GraphQLString},description: {type: GraphQLString},uomId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createSupplierProductFeature?productFeatureId=${args.productFeatureId}&partyId=${args.partyId}&idCode=${args.idCode}&description=${args.description}&uomId=${args.uomId}&`, null, req);
  }
};
export {createSupplierProductFeature};


const createVendorProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz createVendorProduct method',
  args:{productId: {type: GraphQLString},vendorPartyId: {type: GraphQLString},productStoreGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createVendorProduct?productId=${args.productId}&vendorPartyId=${args.vendorPartyId}&productStoreGroupId=${args.productStoreGroupId}&`, null, req);
  }
};
export {createVendorProduct};


const createWebAnalyticsConfig = {
  type: ResponseType,
  description: 'mutation for ofbiz createWebAnalyticsConfig method',
  args:{webAnalyticsTypeId: {type: GraphQLString},webSiteId: {type: GraphQLString},webAnalyticsCode: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createWebAnalyticsConfig?webAnalyticsTypeId=${args.webAnalyticsTypeId}&webSiteId=${args.webSiteId}&webAnalyticsCode=${args.webAnalyticsCode}&`, null, req);
  }
};
export {createWebAnalyticsConfig};


const createWebAnalyticsType = {
  type: ResponseType,
  description: 'mutation for ofbiz createWebAnalyticsType method',
  args:{webAnalyticsTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/createWebAnalyticsType?webAnalyticsTypeId=${args.webAnalyticsTypeId}&parentTypeId=${args.parentTypeId}&hasTable=${args.hasTable}&description=${args.description}&`, null, req);
  }
};
export {createWebAnalyticsType};


const deleteCustomerDigitalDownloadProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteCustomerDigitalDownloadProduct method',
  args:{productId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteCustomerDigitalDownloadProduct?productId=${args.productId}&`, null, req);
  }
};
export {deleteCustomerDigitalDownloadProduct};


const deleteGoodIdentification = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteGoodIdentification method',
  args:{productId: {type: GraphQLString},goodIdentificationTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteGoodIdentification?productId=${args.productId}&goodIdentificationTypeId=${args.goodIdentificationTypeId}&`, null, req);
  }
};
export {deleteGoodIdentification};


const deleteGoodIdentificationType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteGoodIdentificationType method',
  args:{goodIdentificationTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteGoodIdentificationType?goodIdentificationTypeId=${args.goodIdentificationTypeId}&`, null, req);
  }
};
export {deleteGoodIdentificationType};


const deleteMarketInterest = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteMarketInterest method',
  args:{fromDate: {type: GraphQLString},productCategoryId: {type: GraphQLString},partyClassificationGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteMarketInterest?fromDate=${args.fromDate}&productCategoryId=${args.productCategoryId}&partyClassificationGroupId=${args.partyClassificationGroupId}&`, null, req);
  }
};
export {deleteMarketInterest};


const deleteProdCatalog = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProdCatalog method',
  args:{prodCatalogId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteProdCatalog?prodCatalogId=${args.prodCatalogId}&`, null, req);
  }
};
export {deleteProdCatalog};


const deleteProdCatalogCategoryType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProdCatalogCategoryType method',
  args:{prodCatalogCategoryTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteProdCatalogCategoryType?prodCatalogCategoryTypeId=${args.prodCatalogCategoryTypeId}&`, null, req);
  }
};
export {deleteProdCatalogCategoryType};


const deleteProductAssoc = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductAssoc method',
  args:{fromDate: {type: GraphQLString},productId: {type: GraphQLString},productIdTo: {type: GraphQLString},productAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteProductAssoc?fromDate=${args.fromDate}&productId=${args.productId}&productIdTo=${args.productIdTo}&productAssocTypeId=${args.productAssocTypeId}&`, null, req);
  }
};
export {deleteProductAssoc};


const deleteProductAssocType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductAssocType method',
  args:{productAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteProductAssocType?productAssocTypeId=${args.productAssocTypeId}&`, null, req);
  }
};
export {deleteProductAssocType};


const deleteProductAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductAttribute method',
  args:{productId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteProductAttribute?productId=${args.productId}&attrName=${args.attrName}&`, null, req);
  }
};
export {deleteProductAttribute};


const deleteProductCategoryAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductCategoryAttribute method',
  args:{productCategoryId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteProductCategoryAttribute?productCategoryId=${args.productCategoryId}&attrName=${args.attrName}&`, null, req);
  }
};
export {deleteProductCategoryAttribute};


const deleteProductCategoryContentType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductCategoryContentType method',
  args:{prodCatContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteProductCategoryContentType?prodCatContentTypeId=${args.prodCatContentTypeId}&`, null, req);
  }
};
export {deleteProductCategoryContentType};


const deleteProductCategoryGlAccount = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductCategoryGlAccount method',
  args:{productCategoryId: {type: GraphQLString},glAccountTypeId: {type: GraphQLString},organizationPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteProductCategoryGlAccount?productCategoryId=${args.productCategoryId}&glAccountTypeId=${args.glAccountTypeId}&organizationPartyId=${args.organizationPartyId}&`, null, req);
  }
};
export {deleteProductCategoryGlAccount};


const deleteProductCategoryLink = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductCategoryLink method',
  args:{fromDate: {type: GraphQLString},productCategoryId: {type: GraphQLString},linkSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteProductCategoryLink?fromDate=${args.fromDate}&productCategoryId=${args.productCategoryId}&linkSeqId=${args.linkSeqId}&`, null, req);
  }
};
export {deleteProductCategoryLink};


const deleteProductCategoryType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductCategoryType method',
  args:{productCategoryTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteProductCategoryType?productCategoryTypeId=${args.productCategoryTypeId}&`, null, req);
  }
};
export {deleteProductCategoryType};


const deleteProductCategoryTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductCategoryTypeAttr method',
  args:{productCategoryTypeId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteProductCategoryTypeAttr?productCategoryTypeId=${args.productCategoryTypeId}&attrName=${args.attrName}&`, null, req);
  }
};
export {deleteProductCategoryTypeAttr};


const deleteProductConfig = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductConfig method',
  args:{configItemId: {type: GraphQLString},fromDate: {type: GraphQLString},productId: {type: GraphQLString},sequenceNum: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteProductConfig?configItemId=${args.configItemId}&fromDate=${args.fromDate}&productId=${args.productId}&sequenceNum=${args.sequenceNum}&`, null, req);
  }
};
export {deleteProductConfig};


const deleteProductConfigItem = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductConfigItem method',
  args:{configItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteProductConfigItem?configItemId=${args.configItemId}&`, null, req);
  }
};
export {deleteProductConfigItem};


const deleteProductConfigOption = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductConfigOption method',
  args:{configItemId: {type: GraphQLString},configOptionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteProductConfigOption?configItemId=${args.configItemId}&configOptionId=${args.configOptionId}&`, null, req);
  }
};
export {deleteProductConfigOption};


const deleteProductConfigProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductConfigProduct method',
  args:{configItemId: {type: GraphQLString},productId: {type: GraphQLString},configOptionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteProductConfigProduct?configItemId=${args.configItemId}&productId=${args.productId}&configOptionId=${args.configOptionId}&`, null, req);
  }
};
export {deleteProductConfigProduct};


const deleteProductContentType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductContentType method',
  args:{productContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteProductContentType?productContentTypeId=${args.productContentTypeId}&`, null, req);
  }
};
export {deleteProductContentType};


const deleteProductGeo = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductGeo method',
  args:{productId: {type: GraphQLString},geoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteProductGeo?productId=${args.productId}&geoId=${args.geoId}&`, null, req);
  }
};
export {deleteProductGeo};


const deleteProductGlAccount = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductGlAccount method',
  args:{productId: {type: GraphQLString},glAccountTypeId: {type: GraphQLString},organizationPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteProductGlAccount?productId=${args.productId}&glAccountTypeId=${args.glAccountTypeId}&organizationPartyId=${args.organizationPartyId}&`, null, req);
  }
};
export {deleteProductGlAccount};


const deleteProductGroupOrder = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductGroupOrder method',
  args:{groupOrderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteProductGroupOrder?groupOrderId=${args.groupOrderId}&`, null, req);
  }
};
export {deleteProductGroupOrder};


const deleteProductKeyword = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductKeyword method',
  args:{productId: {type: GraphQLString},keywordTypeId: {type: GraphQLString},keyword: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteProductKeyword?productId=${args.productId}&keywordTypeId=${args.keywordTypeId}&keyword=${args.keyword}&`, null, req);
  }
};
export {deleteProductKeyword};


const deleteProductKeywords = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductKeywords method',
  args:{productId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteProductKeywords?productId=${args.productId}&`, null, req);
  }
};
export {deleteProductKeywords};


const deleteProductMaint = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductMaint method',
  args:{productId: {type: GraphQLString},productMaintSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteProductMaint?productId=${args.productId}&productMaintSeqId=${args.productMaintSeqId}&`, null, req);
  }
};
export {deleteProductMaint};


const deleteProductMaintType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductMaintType method',
  args:{productMaintTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteProductMaintType?productMaintTypeId=${args.productMaintTypeId}&`, null, req);
  }
};
export {deleteProductMaintType};


const deleteProductMeter = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductMeter method',
  args:{productId: {type: GraphQLString},productMeterTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteProductMeter?productId=${args.productId}&productMeterTypeId=${args.productMeterTypeId}&`, null, req);
  }
};
export {deleteProductMeter};


const deleteProductMeterType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductMeterType method',
  args:{productMeterTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteProductMeterType?productMeterTypeId=${args.productMeterTypeId}&`, null, req);
  }
};
export {deleteProductMeterType};


const deleteProductPaymentMethodType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductPaymentMethodType method',
  args:{fromDate: {type: GraphQLString},productId: {type: GraphQLString},paymentMethodTypeId: {type: GraphQLString},productPricePurposeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteProductPaymentMethodType?fromDate=${args.fromDate}&productId=${args.productId}&paymentMethodTypeId=${args.paymentMethodTypeId}&productPricePurposeId=${args.productPricePurposeId}&`, null, req);
  }
};
export {deleteProductPaymentMethodType};


const deleteProductPrice = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductPrice method',
  args:{fromDate: {type: GraphQLString},currencyUomId: {type: GraphQLString},productId: {type: GraphQLString},productPricePurposeId: {type: GraphQLString},productStoreGroupId: {type: GraphQLString},productPriceTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteProductPrice?fromDate=${args.fromDate}&currencyUomId=${args.currencyUomId}&productId=${args.productId}&productPricePurposeId=${args.productPricePurposeId}&productStoreGroupId=${args.productStoreGroupId}&productPriceTypeId=${args.productPriceTypeId}&`, null, req);
  }
};
export {deleteProductPrice};


const deleteProductType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductType method',
  args:{productTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteProductType?productTypeId=${args.productTypeId}&`, null, req);
  }
};
export {deleteProductType};


const deleteProductTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductTypeAttr method',
  args:{productTypeId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteProductTypeAttr?productTypeId=${args.productTypeId}&attrName=${args.attrName}&`, null, req);
  }
};
export {deleteProductTypeAttr};


const deleteVendorProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteVendorProduct method',
  args:{productId: {type: GraphQLString},vendorPartyId: {type: GraphQLString},productStoreGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteVendorProduct?productId=${args.productId}&vendorPartyId=${args.vendorPartyId}&productStoreGroupId=${args.productStoreGroupId}&`, null, req);
  }
};
export {deleteVendorProduct};


const deleteWebAnalyticsConfig = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteWebAnalyticsConfig method',
  args:{webAnalyticsTypeId: {type: GraphQLString},webSiteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteWebAnalyticsConfig?webAnalyticsTypeId=${args.webAnalyticsTypeId}&webSiteId=${args.webSiteId}&`, null, req);
  }
};
export {deleteWebAnalyticsConfig};


const deleteWebAnalyticsType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteWebAnalyticsType method',
  args:{webAnalyticsTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/deleteWebAnalyticsType?webAnalyticsTypeId=${args.webAnalyticsTypeId}&`, null, req);
  }
};
export {deleteWebAnalyticsType};


const discontinueProductSales = {
  type: ResponseType,
  description: 'mutation for ofbiz discontinueProductSales method',
  args:{productId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/discontinueProductSales?productId=${args.productId}&`, null, req);
  }
};
export {discontinueProductSales};


const duplicateCategoryEntities = {
  type: ResponseType,
  description: 'mutation for ofbiz duplicateCategoryEntities method',
  args:{productCategoryId: {type: GraphQLString},entityName: {type: GraphQLString},productCategoryIdTo: {type: GraphQLString},validDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/duplicateCategoryEntities?productCategoryId=${args.productCategoryId}&entityName=${args.entityName}&productCategoryIdTo=${args.productCategoryIdTo}&validDate=${args.validDate}&`, null, req);
  }
};
export {duplicateCategoryEntities};


const duplicateProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz duplicateProduct method',
  args:{oldProductId: {type: GraphQLString},productId: {type: GraphQLString},duplicateAssocs: {type: GraphQLString},removeCategoryMembers: {type: GraphQLString},duplicateCategoryMembers: {type: GraphQLString},duplicatePrices: {type: GraphQLString},newProductName: {type: GraphQLString},removeFeatureAppls: {type: GraphQLString},duplicateIDs: {type: GraphQLString},removePrices: {type: GraphQLString},newDescription: {type: GraphQLString},removeContent: {type: GraphQLString},newLongDescription: {type: GraphQLString},duplicateContent: {type: GraphQLString},duplicateAttributes: {type: GraphQLString},duplicateInventoryItems: {type: GraphQLString},duplicateFeatureAppls: {type: GraphQLString},removeInventoryItems: {type: GraphQLString},removeIDs: {type: GraphQLString},removeAttributes: {type: GraphQLString},newInternalName: {type: GraphQLString},removeAssocs: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/duplicateProduct?oldProductId=${args.oldProductId}&productId=${args.productId}&duplicateAssocs=${args.duplicateAssocs}&removeCategoryMembers=${args.removeCategoryMembers}&duplicateCategoryMembers=${args.duplicateCategoryMembers}&duplicatePrices=${args.duplicatePrices}&newProductName=${args.newProductName}&removeFeatureAppls=${args.removeFeatureAppls}&duplicateIDs=${args.duplicateIDs}&removePrices=${args.removePrices}&newDescription=${args.newDescription}&removeContent=${args.removeContent}&newLongDescription=${args.newLongDescription}&duplicateContent=${args.duplicateContent}&duplicateAttributes=${args.duplicateAttributes}&duplicateInventoryItems=${args.duplicateInventoryItems}&duplicateFeatureAppls=${args.duplicateFeatureAppls}&removeInventoryItems=${args.removeInventoryItems}&removeIDs=${args.removeIDs}&removeAttributes=${args.removeAttributes}&newInternalName=${args.newInternalName}&removeAssocs=${args.removeAssocs}&`, null, req);
  }
};
export {duplicateProduct};


const duplicateProductCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz duplicateProductCategory method',
  args:{productCategoryId: {type: GraphQLString},oldProductCategoryId: {type: GraphQLString},duplicateContent: {type: GraphQLString},duplicateChildRollup: {type: GraphQLString},duplicateFeatureGroups: {type: GraphQLString},duplicateAttributes: {type: GraphQLString},duplicateRoles: {type: GraphQLString},duplicateParentRollup: {type: GraphQLString},duplicateFeatureCategories: {type: GraphQLString},duplicateMembers: {type: GraphQLString},duplicateCatalogs: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/duplicateProductCategory?productCategoryId=${args.productCategoryId}&oldProductCategoryId=${args.oldProductCategoryId}&duplicateContent=${args.duplicateContent}&duplicateChildRollup=${args.duplicateChildRollup}&duplicateFeatureGroups=${args.duplicateFeatureGroups}&duplicateAttributes=${args.duplicateAttributes}&duplicateRoles=${args.duplicateRoles}&duplicateParentRollup=${args.duplicateParentRollup}&duplicateFeatureCategories=${args.duplicateFeatureCategories}&duplicateMembers=${args.duplicateMembers}&duplicateCatalogs=${args.duplicateCatalogs}&`, null, req);
  }
};
export {duplicateProductCategory};


const expireProdCatalogInvFacility = {
  type: ResponseType,
  description: 'mutation for ofbiz expireProdCatalogInvFacility method',
  args:{fromDate: {type: GraphQLString},facilityId: {type: GraphQLString},prodCatalogId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/expireProdCatalogInvFacility?fromDate=${args.fromDate}&facilityId=${args.facilityId}&prodCatalogId=${args.prodCatalogId}&`, null, req);
  }
};
export {expireProdCatalogInvFacility};


const findProductById = {
  type: ResponseType,
  description: 'mutation for ofbiz findProductById method',
  args:{idToFind: {type: GraphQLString},searchAllId: {type: GraphQLString},goodIdentificationTypeId: {type: GraphQLString},searchProductFirst: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/findProductById?idToFind=${args.idToFind}&searchAllId=${args.searchAllId}&goodIdentificationTypeId=${args.goodIdentificationTypeId}&searchProductFirst=${args.searchProductFirst}&`, null, req);
  }
};
export {findProductById};


const forceIndexProductKeywords = {
  type: ResponseType,
  description: 'mutation for ofbiz forceIndexProductKeywords method',
  args:{productId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/forceIndexProductKeywords?productId=${args.productId}&`, null, req);
  }
};
export {forceIndexProductKeywords};


const getAllExistingVariants = {
  type: ResponseType,
  description: 'mutation for ofbiz getAllExistingVariants method',
  args:{productId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/getAllExistingVariants?productId=${args.productId}&productFeatureAppls=${args.productFeatureAppls}&`, null, req);
  }
};
export {getAllExistingVariants};


const getCategoryVariantProducts = {
  type: ResponseType,
  description: 'mutation for ofbiz getCategoryVariantProducts method',
  args:{productCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/getCategoryVariantProducts?productFeatures=${args.productFeatures}&productCategoryId=${args.productCategoryId}&`, null, req);
  }
};
export {getCategoryVariantProducts};


const getProductFeaturesByType = {
  type: ResponseType,
  description: 'mutation for ofbiz getProductFeaturesByType method',
  args:{productId: {type: GraphQLString},productFeatureApplTypeId: {type: GraphQLString},productFeatureCategoryId: {type: GraphQLString},productFeatureGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/getProductFeaturesByType?productId=${args.productId}&productFeatureApplTypeId=${args.productFeatureApplTypeId}&productFeatureCategoryId=${args.productFeatureCategoryId}&productFeatureGroupId=${args.productFeatureGroupId}&`, null, req);
  }
};
export {getProductFeaturesByType};


const getSupplierProductFeatures = {
  type: ResponseType,
  description: 'mutation for ofbiz getSupplierProductFeatures method',
  args:{productFeatureId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/getSupplierProductFeatures?productFeatureId=${args.productFeatureId}&partyId=${args.partyId}&`, null, req);
  }
};
export {getSupplierProductFeatures};


const getVariantCombinations = {
  type: ResponseType,
  description: 'mutation for ofbiz getVariantCombinations method',
  args:{productId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/getVariantCombinations?productId=${args.productId}&`, null, req);
  }
};
export {getVariantCombinations};


const imageCrop = {
  type: ResponseType,
  description: 'mutation for ofbiz imageCrop method',
  args:{imageName: {type: GraphQLString},productId: {type: GraphQLString},imageY: {type: GraphQLString},imageW: {type: GraphQLString},imageX: {type: GraphQLString},imageH: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/imageCrop?imageName=${args.imageName}&productId=${args.productId}&imageY=${args.imageY}&imageW=${args.imageW}&imageX=${args.imageX}&imageH=${args.imageH}&`, null, req);
  }
};
export {imageCrop};


const imageRotate = {
  type: ResponseType,
  description: 'mutation for ofbiz imageRotate method',
  args:{imageName: {type: GraphQLString},productId: {type: GraphQLString},angle: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/imageRotate?imageName=${args.imageName}&productId=${args.productId}&angle=${args.angle}&`, null, req);
  }
};
export {imageRotate};


const indexProductKeywords = {
  type: ResponseType,
  description: 'mutation for ofbiz indexProductKeywords method',
  args:{productId: {type: GraphQLString},productInstance: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/indexProductKeywords?productId=${args.productId}&productInstance=${args.productInstance}&`, null, req);
  }
};
export {indexProductKeywords};


const interfaceProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz interfaceProduct method',
  args:{originGeoId: {type: GraphQLString},detailScreen: {type: GraphQLString},requireInventory: {type: GraphQLString},quantityUomId: {type: GraphQLString},mediumImageUrl: {type: GraphQLString},productName: {type: GraphQLString},introductionDate: {type: GraphQLString},shippingHeight: {type: GraphQLFloat},originalImageUrl: {type: GraphQLString},inShippingBox: {type: GraphQLString},detailImageUrl: {type: GraphQLString},supportDiscontinuationDate: {type: GraphQLString},productWidth: {type: GraphQLFloat},includeInPromotions: {type: GraphQLString},configId: {type: GraphQLString},billOfMaterialLevel: {type: GraphQLInt},lotIdFilledIn: {type: GraphQLString},productRating: {type: GraphQLFloat},manufacturerPartyId: {type: GraphQLString},brandName: {type: GraphQLString},requireAmount: {type: GraphQLString},smallImageUrl: {type: GraphQLString},taxable: {type: GraphQLString},primaryProductCategoryId: {type: GraphQLString},salesDiscontinuationDate: {type: GraphQLString},salesDiscWhenNotAvail: {type: GraphQLString},returnable: {type: GraphQLString},weightUomId: {type: GraphQLString},isVirtual: {type: GraphQLString},priceDetailText: {type: GraphQLString},reserv2ndPPPerc: {type: GraphQLFloat},widthUomId: {type: GraphQLString},longDescription: {type: GraphQLString},diameterUomId: {type: GraphQLString},autoCreateKeywords: {type: GraphQLString},amountUomTypeId: {type: GraphQLString},productDiameter: {type: GraphQLFloat},ratingTypeEnum: {type: GraphQLString},description: {type: GraphQLString},chargeShipping: {type: GraphQLString},reservNthPPPerc: {type: GraphQLFloat},quantityIncluded: {type: GraphQLFloat},heightUomId: {type: GraphQLString},internalName: {type: GraphQLString},virtualVariantMethodEnum: {type: GraphQLString},shippingWeight: {type: GraphQLFloat},shippingWidth: {type: GraphQLFloat},shippingDepth: {type: GraphQLFloat},reservMaxPersons: {type: GraphQLFloat},fixedAmount: {type: GraphQLFloat},inventoryItemTypeId: {type: GraphQLString},piecesIncluded: {type: GraphQLInt},productDepth: {type: GraphQLFloat},facilityId: {type: GraphQLString},comments: {type: GraphQLString},releaseDate: {type: GraphQLString},productHeight: {type: GraphQLFloat},defaultShipmentBoxTypeId: {type: GraphQLString},orderDecimalQuantity: {type: GraphQLString},inventoryMessage: {type: GraphQLString},productWeight: {type: GraphQLFloat},depthUomId: {type: GraphQLString},productTypeId: {type: GraphQLString},isVariant: {type: GraphQLString},largeImageUrl: {type: GraphQLString},requirementMethodEnumId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/interfaceProduct?originGeoId=${args.originGeoId}&detailScreen=${args.detailScreen}&requireInventory=${args.requireInventory}&quantityUomId=${args.quantityUomId}&mediumImageUrl=${args.mediumImageUrl}&productName=${args.productName}&introductionDate=${args.introductionDate}&shippingHeight=${args.shippingHeight}&originalImageUrl=${args.originalImageUrl}&inShippingBox=${args.inShippingBox}&detailImageUrl=${args.detailImageUrl}&supportDiscontinuationDate=${args.supportDiscontinuationDate}&productWidth=${args.productWidth}&includeInPromotions=${args.includeInPromotions}&configId=${args.configId}&billOfMaterialLevel=${args.billOfMaterialLevel}&lotIdFilledIn=${args.lotIdFilledIn}&productRating=${args.productRating}&manufacturerPartyId=${args.manufacturerPartyId}&brandName=${args.brandName}&requireAmount=${args.requireAmount}&smallImageUrl=${args.smallImageUrl}&taxable=${args.taxable}&primaryProductCategoryId=${args.primaryProductCategoryId}&salesDiscontinuationDate=${args.salesDiscontinuationDate}&salesDiscWhenNotAvail=${args.salesDiscWhenNotAvail}&returnable=${args.returnable}&weightUomId=${args.weightUomId}&isVirtual=${args.isVirtual}&priceDetailText=${args.priceDetailText}&reserv2ndPPPerc=${args.reserv2ndPPPerc}&widthUomId=${args.widthUomId}&longDescription=${args.longDescription}&diameterUomId=${args.diameterUomId}&autoCreateKeywords=${args.autoCreateKeywords}&amountUomTypeId=${args.amountUomTypeId}&productDiameter=${args.productDiameter}&ratingTypeEnum=${args.ratingTypeEnum}&description=${args.description}&chargeShipping=${args.chargeShipping}&reservNthPPPerc=${args.reservNthPPPerc}&quantityIncluded=${args.quantityIncluded}&heightUomId=${args.heightUomId}&internalName=${args.internalName}&virtualVariantMethodEnum=${args.virtualVariantMethodEnum}&shippingWeight=${args.shippingWeight}&shippingWidth=${args.shippingWidth}&shippingDepth=${args.shippingDepth}&reservMaxPersons=${args.reservMaxPersons}&fixedAmount=${args.fixedAmount}&inventoryItemTypeId=${args.inventoryItemTypeId}&piecesIncluded=${args.piecesIncluded}&productDepth=${args.productDepth}&facilityId=${args.facilityId}&comments=${args.comments}&releaseDate=${args.releaseDate}&productHeight=${args.productHeight}&defaultShipmentBoxTypeId=${args.defaultShipmentBoxTypeId}&orderDecimalQuantity=${args.orderDecimalQuantity}&inventoryMessage=${args.inventoryMessage}&productWeight=${args.productWeight}&depthUomId=${args.depthUomId}&productTypeId=${args.productTypeId}&isVariant=${args.isVariant}&largeImageUrl=${args.largeImageUrl}&requirementMethodEnumId=${args.requirementMethodEnumId}&`, null, req);
  }
};
export {interfaceProduct};


const loadBestSellingCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz loadBestSellingCategory method',
  args:{productStoreId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/loadBestSellingCategory?productStoreId=${args.productStoreId}&`, null, req);
  }
};
export {loadBestSellingCategory};


const multipleUploadProductImages = {
  type: ResponseType,
  description: 'mutation for ofbiz multipleUploadProductImages method',
  args:{productId: {type: GraphQLString},_additionalImageOne_fileName: {type: GraphQLString},_additionalImageTwo_fileName: {type: GraphQLString},_additionalImageThree_fileName: {type: GraphQLString},_additionalImageFour_fileName: {type: GraphQLString},_additionalImageFive_fileName: {type: GraphQLString},_additionalImageSix_fileName: {type: GraphQLString},_additionalImageSeven_fileName: {type: GraphQLString},_additionalImageEight_fileName: {type: GraphQLString},_additionalImageNine_fileName: {type: GraphQLString},_additionalImageTen_fileName: {type: GraphQLString},imageResize: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/multipleUploadProductImages?productId=${args.productId}&_additionalImageOne_fileName=${args._additionalImageOne_fileName}&_additionalImageTwo_fileName=${args._additionalImageTwo_fileName}&_additionalImageThree_fileName=${args._additionalImageThree_fileName}&_additionalImageFour_fileName=${args._additionalImageFour_fileName}&_additionalImageFive_fileName=${args._additionalImageFive_fileName}&_additionalImageSix_fileName=${args._additionalImageSix_fileName}&_additionalImageSeven_fileName=${args._additionalImageSeven_fileName}&_additionalImageEight_fileName=${args._additionalImageEight_fileName}&_additionalImageNine_fileName=${args._additionalImageNine_fileName}&_additionalImageTen_fileName=${args._additionalImageTen_fileName}&imageResize=${args.imageResize}&`, null, req);
  }
};
export {multipleUploadProductImages};


const prodCatalogToPartyPermissionCheck = {
  type: ResponseType,
  description: 'mutation for ofbiz prodCatalogToPartyPermissionCheck method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/prodCatalogToPartyPermissionCheck?primaryPermission=${args.primaryPermission}&altPermission=${args.altPermission}&resourceDescription=${args.resourceDescription}&mainAction=${args.mainAction}&`, null, req);
  }
};
export {prodCatalogToPartyPermissionCheck};


const productCategoryGenericPermission = {
  type: ResponseType,
  description: 'mutation for ofbiz productCategoryGenericPermission method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/productCategoryGenericPermission?primaryPermission=${args.primaryPermission}&altPermission=${args.altPermission}&resourceDescription=${args.resourceDescription}&mainAction=${args.mainAction}&`, null, req);
  }
};
export {productCategoryGenericPermission};


const productGenericPermission = {
  type: ResponseType,
  description: 'mutation for ofbiz productGenericPermission method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/productGenericPermission?primaryPermission=${args.primaryPermission}&altPermission=${args.altPermission}&resourceDescription=${args.resourceDescription}&mainAction=${args.mainAction}&`, null, req);
  }
};
export {productGenericPermission};


const productImportFromSpreadsheet = {
  type: ResponseType,
  description: 'mutation for ofbiz productImportFromSpreadsheet method',
  args:{dirName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/productImportFromSpreadsheet?dirName=${args.dirName}&`, null, req);
  }
};
export {productImportFromSpreadsheet};


const productPriceGenericPermission = {
  type: ResponseType,
  description: 'mutation for ofbiz productPriceGenericPermission method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/productPriceGenericPermission?primaryPermission=${args.primaryPermission}&altPermission=${args.altPermission}&resourceDescription=${args.resourceDescription}&mainAction=${args.mainAction}&`, null, req);
  }
};
export {productPriceGenericPermission};


const quickAddVariant = {
  type: ResponseType,
  description: 'mutation for ofbiz quickAddVariant method',
  args:{productId: {type: GraphQLString},productVariantId: {type: GraphQLString},productFeatureIds: {type: GraphQLString},sequenceNum: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/quickAddVariant?productId=${args.productId}&productVariantId=${args.productVariantId}&productFeatureIds=${args.productFeatureIds}&sequenceNum=${args.sequenceNum}&`, null, req);
  }
};
export {quickAddVariant};


const quickCreateVirtualWithVariants = {
  type: ResponseType,
  description: 'mutation for ofbiz quickCreateVirtualWithVariants method',
  args:{variantProductIdsBag: {type: GraphQLString},productId: {type: GraphQLString},productFeatureIdTwo: {type: GraphQLString},productFeatureIdThree: {type: GraphQLString},productFeatureIdOne: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/quickCreateVirtualWithVariants?variantProductIdsBag=${args.variantProductIdsBag}&productId=${args.productId}&productFeatureIdTwo=${args.productFeatureIdTwo}&productFeatureIdThree=${args.productFeatureIdThree}&productFeatureIdOne=${args.productFeatureIdOne}&`, null, req);
  }
};
export {quickCreateVirtualWithVariants};


const removeCategoryContent = {
  type: ResponseType,
  description: 'mutation for ofbiz removeCategoryContent method',
  args:{fromDate: {type: GraphQLString},prodCatContentTypeId: {type: GraphQLString},productCategoryId: {type: GraphQLString},contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/removeCategoryContent?fromDate=${args.fromDate}&prodCatContentTypeId=${args.prodCatContentTypeId}&productCategoryId=${args.productCategoryId}&contentId=${args.contentId}&`, null, req);
  }
};
export {removeCategoryContent};


const removeCommunicationEventProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz removeCommunicationEventProduct method',
  args:{productId: {type: GraphQLString},communicationEventId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/removeCommunicationEventProduct?productId=${args.productId}&communicationEventId=${args.communicationEventId}&`, null, req);
  }
};
export {removeCommunicationEventProduct};


const removeCustomerDigitalDownloadProductFile = {
  type: ResponseType,
  description: 'mutation for ofbiz removeCustomerDigitalDownloadProductFile method',
  args:{fromDate: {type: GraphQLString},productId: {type: GraphQLString},contentId: {type: GraphQLString},productContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/removeCustomerDigitalDownloadProductFile?fromDate=${args.fromDate}&productId=${args.productId}&contentId=${args.contentId}&productContentTypeId=${args.productContentTypeId}&`, null, req);
  }
};
export {removeCustomerDigitalDownloadProductFile};


const removeImageBySize = {
  type: ResponseType,
  description: 'mutation for ofbiz removeImageBySize method',
  args:{productId: {type: GraphQLString},mapKey: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/removeImageBySize?productId=${args.productId}&mapKey=${args.mapKey}&`, null, req);
  }
};
export {removeImageBySize};


const removeImageContentApproval = {
  type: ResponseType,
  description: 'mutation for ofbiz removeImageContentApproval method',
  args:{partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/removeImageContentApproval?partyId=${args.partyId}&`, null, req);
  }
};
export {removeImageContentApproval};


const removeImageFileForImageManagement = {
  type: ResponseType,
  description: 'mutation for ofbiz removeImageFileForImageManagement method',
  args:{dataResourceName: {type: GraphQLString},productId: {type: GraphQLString},contentId: {type: GraphQLString},objectInfo: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/removeImageFileForImageManagement?dataResourceName=${args.dataResourceName}&productId=${args.productId}&contentId=${args.contentId}&objectInfo=${args.objectInfo}&`, null, req);
  }
};
export {removeImageFileForImageManagement};


const removePartyFromCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz removePartyFromCategory method',
  args:{fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},productCategoryId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/removePartyFromCategory?fromDate=${args.fromDate}&roleTypeId=${args.roleTypeId}&productCategoryId=${args.productCategoryId}&partyId=${args.partyId}&`, null, req);
  }
};
export {removePartyFromCategory};


const removePartyFromProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz removePartyFromProduct method',
  args:{fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},productId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/removePartyFromProduct?fromDate=${args.fromDate}&roleTypeId=${args.roleTypeId}&productId=${args.productId}&partyId=${args.partyId}&`, null, req);
  }
};
export {removePartyFromProduct};


const removeProdCatalogFromParty = {
  type: ResponseType,
  description: 'mutation for ofbiz removeProdCatalogFromParty method',
  args:{fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString},prodCatalogId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/removeProdCatalogFromParty?fromDate=${args.fromDate}&roleTypeId=${args.roleTypeId}&partyId=${args.partyId}&prodCatalogId=${args.prodCatalogId}&`, null, req);
  }
};
export {removeProdCatalogFromParty};


const removeProductCategoryFromCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz removeProductCategoryFromCategory method',
  args:{fromDate: {type: GraphQLString},productCategoryId: {type: GraphQLString},parentProductCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/removeProductCategoryFromCategory?fromDate=${args.fromDate}&productCategoryId=${args.productCategoryId}&parentProductCategoryId=${args.parentProductCategoryId}&`, null, req);
  }
};
export {removeProductCategoryFromCategory};


const removeProductCategoryFromProdCatalog = {
  type: ResponseType,
  description: 'mutation for ofbiz removeProductCategoryFromProdCatalog method',
  args:{fromDate: {type: GraphQLString},prodCatalogCategoryTypeId: {type: GraphQLString},productCategoryId: {type: GraphQLString},prodCatalogId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/removeProductCategoryFromProdCatalog?fromDate=${args.fromDate}&prodCatalogCategoryTypeId=${args.prodCatalogCategoryTypeId}&productCategoryId=${args.productCategoryId}&prodCatalogId=${args.prodCatalogId}&`, null, req);
  }
};
export {removeProductCategoryFromProdCatalog};


const removeProductConfigItemContent = {
  type: ResponseType,
  description: 'mutation for ofbiz removeProductConfigItemContent method',
  args:{configItemId: {type: GraphQLString},confItemContentTypeId: {type: GraphQLString},fromDate: {type: GraphQLString},contentId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/removeProductConfigItemContent?configItemId=${args.configItemId}&confItemContentTypeId=${args.confItemContentTypeId}&fromDate=${args.fromDate}&contentId=${args.contentId}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {removeProductConfigItemContent};


const removeProductContent = {
  type: ResponseType,
  description: 'mutation for ofbiz removeProductContent method',
  args:{fromDate: {type: GraphQLString},productId: {type: GraphQLString},contentId: {type: GraphQLString},productContentTypeId: {type: GraphQLString},purchaseFromDate: {type: GraphQLString},useTimeUomId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},useRoleTypeId: {type: GraphQLString},useTime: {type: GraphQLInt},purchaseThruDate: {type: GraphQLString},useCountLimit: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/removeProductContent?fromDate=${args.fromDate}&productId=${args.productId}&contentId=${args.contentId}&productContentTypeId=${args.productContentTypeId}&purchaseFromDate=${args.purchaseFromDate}&useTimeUomId=${args.useTimeUomId}&sequenceNum=${args.sequenceNum}&useRoleTypeId=${args.useRoleTypeId}&useTime=${args.useTime}&purchaseThruDate=${args.purchaseThruDate}&useCountLimit=${args.useCountLimit}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {removeProductContent};


const removeProductContentAndImageFile = {
  type: ResponseType,
  description: 'mutation for ofbiz removeProductContentAndImageFile method',
  args:{fromDate: {type: GraphQLString},productId: {type: GraphQLString},contentId: {type: GraphQLString},productContentTypeId: {type: GraphQLString},purchaseFromDate: {type: GraphQLString},useTimeUomId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},useRoleTypeId: {type: GraphQLString},useTime: {type: GraphQLInt},purchaseThruDate: {type: GraphQLString},useCountLimit: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/removeProductContentAndImageFile?fromDate=${args.fromDate}&productId=${args.productId}&contentId=${args.contentId}&productContentTypeId=${args.productContentTypeId}&purchaseFromDate=${args.purchaseFromDate}&useTimeUomId=${args.useTimeUomId}&sequenceNum=${args.sequenceNum}&useRoleTypeId=${args.useRoleTypeId}&useTime=${args.useTime}&purchaseThruDate=${args.purchaseThruDate}&useCountLimit=${args.useCountLimit}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {removeProductContentAndImageFile};


const removeProductContentForImageManagement = {
  type: ResponseType,
  description: 'mutation for ofbiz removeProductContentForImageManagement method',
  args:{productId: {type: GraphQLString},contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/removeProductContentForImageManagement?productId=${args.productId}&contentId=${args.contentId}&`, null, req);
  }
};
export {removeProductContentForImageManagement};


const removeProductFeatureDataResource = {
  type: ResponseType,
  description: 'mutation for ofbiz removeProductFeatureDataResource method',
  args:{dataResourceId: {type: GraphQLString},productFeatureId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/removeProductFeatureDataResource?dataResourceId=${args.dataResourceId}&productFeatureId=${args.productFeatureId}&`, null, req);
  }
};
export {removeProductFeatureDataResource};


const removeProductFromCategories = {
  type: GraphQLString,
  description: 'mutation for ofbiz removeProductFromCategories method',
  args:{productId: {type: GraphQLString},productCategoryIds: {type: new GraphQLList(GraphQLString)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/removeProductFromCategories?productId=${args.productId}&`, args.productCategoryIds, req);
  }
};
export {removeProductFromCategories};


const removeProductFromCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz removeProductFromCategory method',
  args:{productId: {type: GraphQLString},productCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/removeProductFromCategory?productId=${args.productId}&productCategoryId=${args.productCategoryId}&`, null, req);
  }
};
export {removeProductFromCategory};


const removeProductPromoContent = {
  type: ResponseType,
  description: 'mutation for ofbiz removeProductPromoContent method',
  args:{fromDate: {type: GraphQLString},productPromoContentTypeId: {type: GraphQLString},contentId: {type: GraphQLString},productPromoId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/removeProductPromoContent?fromDate=${args.fromDate}&productPromoContentTypeId=${args.productPromoContentTypeId}&contentId=${args.contentId}&productPromoId=${args.productPromoId}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {removeProductPromoContent};


const removeSupplierProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz removeSupplierProduct method',
  args:{currencyUomId: {type: GraphQLString},productId: {type: GraphQLString},availableFromDate: {type: GraphQLString},minimumOrderQuantity: {type: GraphQLFloat},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/removeSupplierProduct?currencyUomId=${args.currencyUomId}&productId=${args.productId}&availableFromDate=${args.availableFromDate}&minimumOrderQuantity=${args.minimumOrderQuantity}&partyId=${args.partyId}&`, null, req);
  }
};
export {removeSupplierProduct};


const removeSupplierProductFeature = {
  type: ResponseType,
  description: 'mutation for ofbiz removeSupplierProductFeature method',
  args:{productFeatureId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/removeSupplierProductFeature?productFeatureId=${args.productFeatureId}&partyId=${args.partyId}&`, null, req);
  }
};
export {removeSupplierProductFeature};


const renameImage = {
  type: ResponseType,
  description: 'mutation for ofbiz renameImage method',
  args:{productId: {type: GraphQLString},drDataResourceName: {type: GraphQLString},contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/renameImage?productId=${args.productId}&drDataResourceName=${args.drDataResourceName}&contentId=${args.contentId}&`, null, req);
  }
};
export {renameImage};


const replaceImageToExistImage = {
  type: ResponseType,
  description: 'mutation for ofbiz replaceImageToExistImage method',
  args:{dataResourceNameExist: {type: GraphQLString},productId: {type: GraphQLString},contentIdExist: {type: GraphQLString},contentIdReplace: {type: GraphQLString},dataResourceNameReplace: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/replaceImageToExistImage?dataResourceNameExist=${args.dataResourceNameExist}&productId=${args.productId}&contentIdExist=${args.contentIdExist}&contentIdReplace=${args.contentIdReplace}&dataResourceNameReplace=${args.dataResourceNameReplace}&`, null, req);
  }
};
export {replaceImageToExistImage};


const resizeImageOfProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz resizeImageOfProduct method',
  args:{dataResourceName: {type: GraphQLString},productId: {type: GraphQLString},resizeWidth: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/resizeImageOfProduct?dataResourceName=${args.dataResourceName}&productId=${args.productId}&resizeWidth=${args.resizeWidth}&`, null, req);
  }
};
export {resizeImageOfProduct};


const resizeImages = {
  type: ResponseType,
  description: 'mutation for ofbiz resizeImages method',
  args:{resizeOption: {type: GraphQLString},productId: {type: GraphQLString},size: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/resizeImages?resizeOption=${args.resizeOption}&productId=${args.productId}&size=${args.size}&`, null, req);
  }
};
export {resizeImages};


const safeAddProductCategoryToCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz safeAddProductCategoryToCategory method',
  args:{fromDate: {type: GraphQLString},productCategoryId: {type: GraphQLString},parentProductCategoryId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/safeAddProductCategoryToCategory?fromDate=${args.fromDate}&productCategoryId=${args.productCategoryId}&parentProductCategoryId=${args.parentProductCategoryId}&sequenceNum=${args.sequenceNum}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {safeAddProductCategoryToCategory};


const safeAddProductToCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz safeAddProductToCategory method',
  args:{fromDate: {type: GraphQLString},productCategoryId: {type: GraphQLString},productId: {type: GraphQLString},comments: {type: GraphQLString},quantity: {type: GraphQLFloat},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/safeAddProductToCategory?fromDate=${args.fromDate}&productCategoryId=${args.productCategoryId}&productId=${args.productId}&comments=${args.comments}&quantity=${args.quantity}&sequenceNum=${args.sequenceNum}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {safeAddProductToCategory};


const saveProductPriceChange = {
  type: ResponseType,
  description: 'mutation for ofbiz saveProductPriceChange method',
  args:{fromDate: {type: GraphQLString},currencyUomId: {type: GraphQLString},productId: {type: GraphQLString},productPricePurposeId: {type: GraphQLString},productStoreGroupId: {type: GraphQLString},productPriceTypeId: {type: GraphQLString},taxInPrice: {type: GraphQLString},termUomId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},oldPrice: {type: GraphQLFloat},priceWithTax: {type: GraphQLFloat},taxPercentage: {type: GraphQLFloat},thruDate: {type: GraphQLString},taxAuthPartyId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},createdDate: {type: GraphQLString},customPriceCalcService: {type: GraphQLString},price: {type: GraphQLFloat},priceWithoutTax: {type: GraphQLFloat},taxAuthGeoId: {type: GraphQLString},taxAmount: {type: GraphQLFloat},createdByUserLogin: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/saveProductPriceChange?fromDate=${args.fromDate}&currencyUomId=${args.currencyUomId}&productId=${args.productId}&productPricePurposeId=${args.productPricePurposeId}&productStoreGroupId=${args.productStoreGroupId}&productPriceTypeId=${args.productPriceTypeId}&taxInPrice=${args.taxInPrice}&termUomId=${args.termUomId}&lastModifiedDate=${args.lastModifiedDate}&oldPrice=${args.oldPrice}&priceWithTax=${args.priceWithTax}&taxPercentage=${args.taxPercentage}&thruDate=${args.thruDate}&taxAuthPartyId=${args.taxAuthPartyId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&createdDate=${args.createdDate}&customPriceCalcService=${args.customPriceCalcService}&price=${args.price}&priceWithoutTax=${args.priceWithoutTax}&taxAuthGeoId=${args.taxAuthGeoId}&taxAmount=${args.taxAmount}&createdByUserLogin=${args.createdByUserLogin}&`, null, req);
  }
};
export {saveProductPriceChange};


const setImageDetail = {
  type: ResponseType,
  description: 'mutation for ofbiz setImageDetail method',
  args:{fromDate: {type: GraphQLString},productId: {type: GraphQLString},contentId: {type: GraphQLString},productContentTypeId: {type: GraphQLString},purchaseFromDate: {type: GraphQLString},useTimeUomId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},useRoleTypeId: {type: GraphQLString},useTime: {type: GraphQLInt},description: {type: GraphQLString},purchaseThruDate: {type: GraphQLString},useCountLimit: {type: GraphQLInt},thruDate: {type: GraphQLString},drIsPublic: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/setImageDetail?fromDate=${args.fromDate}&productId=${args.productId}&contentId=${args.contentId}&productContentTypeId=${args.productContentTypeId}&purchaseFromDate=${args.purchaseFromDate}&useTimeUomId=${args.useTimeUomId}&sequenceNum=${args.sequenceNum}&useRoleTypeId=${args.useRoleTypeId}&useTime=${args.useTime}&description=${args.description}&purchaseThruDate=${args.purchaseThruDate}&useCountLimit=${args.useCountLimit}&thruDate=${args.thruDate}&drIsPublic=${args.drIsPublic}&`, null, req);
  }
};
export {setImageDetail};


const setProductReviewStatus = {
  type: ResponseType,
  description: 'mutation for ofbiz setProductReviewStatus method',
  args:{statusId: {type: GraphQLString},productReviewId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/setProductReviewStatus?statusId=${args.statusId}&productReviewId=${args.productReviewId}&`, null, req);
  }
};
export {setProductReviewStatus};


const updateCategoryContent = {
  type: ResponseType,
  description: 'mutation for ofbiz updateCategoryContent method',
  args:{fromDate: {type: GraphQLString},prodCatContentTypeId: {type: GraphQLString},productCategoryId: {type: GraphQLString},contentId: {type: GraphQLString},ownerContentId: {type: GraphQLString},useDaysLimit: {type: GraphQLFloat},contentTypeId: {type: GraphQLString},description: {type: GraphQLString},mimeTypeId: {type: GraphQLString},childLeafCount: {type: GraphQLInt},privilegeEnumId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},dataResourceId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},purchaseFromDate: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},useCountLimit: {type: GraphQLInt},serviceName: {type: GraphQLString},customMethodId: {type: GraphQLString},characterSetId: {type: GraphQLString},thruDate: {type: GraphQLString},contentName: {type: GraphQLInt},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString},decoratorContentId: {type: GraphQLString},purchaseThruDate: {type: GraphQLString},childBranchCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateCategoryContent?fromDate=${args.fromDate}&prodCatContentTypeId=${args.prodCatContentTypeId}&productCategoryId=${args.productCategoryId}&contentId=${args.contentId}&ownerContentId=${args.ownerContentId}&useDaysLimit=${args.useDaysLimit}&contentTypeId=${args.contentTypeId}&description=${args.description}&mimeTypeId=${args.mimeTypeId}&childLeafCount=${args.childLeafCount}&privilegeEnumId=${args.privilegeEnumId}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&dataResourceId=${args.dataResourceId}&createdByUserLogin=${args.createdByUserLogin}&purchaseFromDate=${args.purchaseFromDate}&templateDataResourceId=${args.templateDataResourceId}&lastModifiedDate=${args.lastModifiedDate}&instanceOfContentId=${args.instanceOfContentId}&useCountLimit=${args.useCountLimit}&serviceName=${args.serviceName}&customMethodId=${args.customMethodId}&characterSetId=${args.characterSetId}&thruDate=${args.thruDate}&contentName=${args.contentName}&createdDate=${args.createdDate}&statusId=${args.statusId}&localeString=${args.localeString}&decoratorContentId=${args.decoratorContentId}&purchaseThruDate=${args.purchaseThruDate}&childBranchCount=${args.childBranchCount}&`, null, req);
  }
};
export {updateCategoryContent};


const updateContentSEOForCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz updateContentSEOForCategory method',
  args:{productCategoryId: {type: GraphQLString},title: {type: GraphQLString},metaDescription: {type: GraphQLString},metaKeyword: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateContentSEOForCategory?productCategoryId=${args.productCategoryId}&title=${args.title}&metaDescription=${args.metaDescription}&metaKeyword=${args.metaKeyword}&`, null, req);
  }
};
export {updateContentSEOForCategory};


const updateContentSEOForProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz updateContentSEOForProduct method',
  args:{productId: {type: GraphQLString},title: {type: GraphQLString},metaDescription: {type: GraphQLString},metaKeyword: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateContentSEOForProduct?productId=${args.productId}&title=${args.title}&metaDescription=${args.metaDescription}&metaKeyword=${args.metaKeyword}&`, null, req);
  }
};
export {updateContentSEOForProduct};


const updateCustomerDigitalDownloadProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz updateCustomerDigitalDownloadProduct method',
  args:{currencyUomId: {type: GraphQLString},productId: {type: GraphQLString},availableFromDate: {type: GraphQLString},minimumOrderQuantity: {type: GraphQLFloat},price: {type: GraphQLFloat},description: {type: GraphQLString},productName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateCustomerDigitalDownloadProduct?currencyUomId=${args.currencyUomId}&productId=${args.productId}&availableFromDate=${args.availableFromDate}&minimumOrderQuantity=${args.minimumOrderQuantity}&price=${args.price}&description=${args.description}&productName=${args.productName}&`, null, req);
  }
};
export {updateCustomerDigitalDownloadProduct};


const updateDownloadContentForCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz updateDownloadContentForCategory method',
  args:{fromDate: {type: GraphQLString},prodCatContentTypeId: {type: GraphQLString},productCategoryId: {type: GraphQLString},contentId: {type: GraphQLString},ownerContentId: {type: GraphQLString},imageData: {type: GraphQLString},useDaysLimit: {type: GraphQLFloat},contentTypeId: {type: GraphQLString},description: {type: GraphQLString},mimeTypeId: {type: GraphQLString},childLeafCount: {type: GraphQLInt},privilegeEnumId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},fileDataResourceId: {type: GraphQLString},dataResourceId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},purchaseFromDate: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},useCountLimit: {type: GraphQLInt},serviceName: {type: GraphQLString},customMethodId: {type: GraphQLString},characterSetId: {type: GraphQLString},_imageData_fileName: {type: GraphQLString},thruDate: {type: GraphQLString},contentName: {type: GraphQLInt},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString},_imageData_contentType: {type: GraphQLString},decoratorContentId: {type: GraphQLString},purchaseThruDate: {type: GraphQLString},childBranchCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateDownloadContentForCategory?fromDate=${args.fromDate}&prodCatContentTypeId=${args.prodCatContentTypeId}&productCategoryId=${args.productCategoryId}&contentId=${args.contentId}&ownerContentId=${args.ownerContentId}&imageData=${args.imageData}&useDaysLimit=${args.useDaysLimit}&contentTypeId=${args.contentTypeId}&description=${args.description}&mimeTypeId=${args.mimeTypeId}&childLeafCount=${args.childLeafCount}&privilegeEnumId=${args.privilegeEnumId}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&fileDataResourceId=${args.fileDataResourceId}&dataResourceId=${args.dataResourceId}&createdByUserLogin=${args.createdByUserLogin}&purchaseFromDate=${args.purchaseFromDate}&templateDataResourceId=${args.templateDataResourceId}&lastModifiedDate=${args.lastModifiedDate}&instanceOfContentId=${args.instanceOfContentId}&useCountLimit=${args.useCountLimit}&serviceName=${args.serviceName}&customMethodId=${args.customMethodId}&characterSetId=${args.characterSetId}&_imageData_fileName=${args._imageData_fileName}&thruDate=${args.thruDate}&contentName=${args.contentName}&createdDate=${args.createdDate}&statusId=${args.statusId}&localeString=${args.localeString}&_imageData_contentType=${args._imageData_contentType}&decoratorContentId=${args.decoratorContentId}&purchaseThruDate=${args.purchaseThruDate}&childBranchCount=${args.childBranchCount}&`, null, req);
  }
};
export {updateDownloadContentForCategory};


const updateDownloadContentForProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz updateDownloadContentForProduct method',
  args:{fromDate: {type: GraphQLString},productId: {type: GraphQLString},contentId: {type: GraphQLString},productContentTypeId: {type: GraphQLString},useTimeUomId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},ownerContentId: {type: GraphQLString},contentTypeId: {type: GraphQLString},description: {type: GraphQLString},mimeTypeId: {type: GraphQLString},childLeafCount: {type: GraphQLInt},privilegeEnumId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},file: {type: GraphQLString},fileDataResourceId: {type: GraphQLString},useRoleTypeId: {type: GraphQLString},dataResourceId: {type: GraphQLString},useTime: {type: GraphQLInt},createdByUserLogin: {type: GraphQLString},purchaseFromDate: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},useCountLimit: {type: GraphQLInt},serviceName: {type: GraphQLString},customMethodId: {type: GraphQLString},characterSetId: {type: GraphQLString},thruDate: {type: GraphQLString},contentName: {type: GraphQLInt},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString},decoratorContentId: {type: GraphQLString},purchaseThruDate: {type: GraphQLString},childBranchCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateDownloadContentForProduct?fromDate=${args.fromDate}&productId=${args.productId}&contentId=${args.contentId}&productContentTypeId=${args.productContentTypeId}&useTimeUomId=${args.useTimeUomId}&sequenceNum=${args.sequenceNum}&ownerContentId=${args.ownerContentId}&contentTypeId=${args.contentTypeId}&description=${args.description}&mimeTypeId=${args.mimeTypeId}&childLeafCount=${args.childLeafCount}&privilegeEnumId=${args.privilegeEnumId}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&file=${args.file}&fileDataResourceId=${args.fileDataResourceId}&useRoleTypeId=${args.useRoleTypeId}&dataResourceId=${args.dataResourceId}&useTime=${args.useTime}&createdByUserLogin=${args.createdByUserLogin}&purchaseFromDate=${args.purchaseFromDate}&templateDataResourceId=${args.templateDataResourceId}&lastModifiedDate=${args.lastModifiedDate}&instanceOfContentId=${args.instanceOfContentId}&useCountLimit=${args.useCountLimit}&serviceName=${args.serviceName}&customMethodId=${args.customMethodId}&characterSetId=${args.characterSetId}&thruDate=${args.thruDate}&contentName=${args.contentName}&createdDate=${args.createdDate}&statusId=${args.statusId}&localeString=${args.localeString}&decoratorContentId=${args.decoratorContentId}&purchaseThruDate=${args.purchaseThruDate}&childBranchCount=${args.childBranchCount}&`, null, req);
  }
};
export {updateDownloadContentForProduct};


const updateEmailContentForProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz updateEmailContentForProduct method',
  args:{fromDate: {type: GraphQLString},productId: {type: GraphQLString},contentId: {type: GraphQLString},productContentTypeId: {type: GraphQLString},useTimeUomId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},ownerContentId: {type: GraphQLString},subject: {type: GraphQLString},contentTypeId: {type: GraphQLString},description: {type: GraphQLString},mimeTypeId: {type: GraphQLString},plainBody: {type: GraphQLString},childLeafCount: {type: GraphQLInt},plainBodyDataResourceId: {type: GraphQLString},privilegeEnumId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},htmlBodyDataResourceId: {type: GraphQLString},useRoleTypeId: {type: GraphQLString},dataResourceId: {type: GraphQLString},useTime: {type: GraphQLInt},createdByUserLogin: {type: GraphQLString},purchaseFromDate: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},subjectDataResourceId: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},useCountLimit: {type: GraphQLInt},serviceName: {type: GraphQLString},customMethodId: {type: GraphQLString},characterSetId: {type: GraphQLString},thruDate: {type: GraphQLString},contentName: {type: GraphQLInt},createdDate: {type: GraphQLString},htmlBody: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString},decoratorContentId: {type: GraphQLString},purchaseThruDate: {type: GraphQLString},childBranchCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateEmailContentForProduct?fromDate=${args.fromDate}&productId=${args.productId}&contentId=${args.contentId}&productContentTypeId=${args.productContentTypeId}&useTimeUomId=${args.useTimeUomId}&sequenceNum=${args.sequenceNum}&ownerContentId=${args.ownerContentId}&subject=${args.subject}&contentTypeId=${args.contentTypeId}&description=${args.description}&mimeTypeId=${args.mimeTypeId}&plainBody=${args.plainBody}&childLeafCount=${args.childLeafCount}&plainBodyDataResourceId=${args.plainBodyDataResourceId}&privilegeEnumId=${args.privilegeEnumId}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&htmlBodyDataResourceId=${args.htmlBodyDataResourceId}&useRoleTypeId=${args.useRoleTypeId}&dataResourceId=${args.dataResourceId}&useTime=${args.useTime}&createdByUserLogin=${args.createdByUserLogin}&purchaseFromDate=${args.purchaseFromDate}&templateDataResourceId=${args.templateDataResourceId}&lastModifiedDate=${args.lastModifiedDate}&subjectDataResourceId=${args.subjectDataResourceId}&instanceOfContentId=${args.instanceOfContentId}&useCountLimit=${args.useCountLimit}&serviceName=${args.serviceName}&customMethodId=${args.customMethodId}&characterSetId=${args.characterSetId}&thruDate=${args.thruDate}&contentName=${args.contentName}&createdDate=${args.createdDate}&htmlBody=${args.htmlBody}&statusId=${args.statusId}&localeString=${args.localeString}&decoratorContentId=${args.decoratorContentId}&purchaseThruDate=${args.purchaseThruDate}&childBranchCount=${args.childBranchCount}&`, null, req);
  }
};
export {updateEmailContentForProduct};


const updateGoodIdentification = {
  type: ResponseType,
  description: 'mutation for ofbiz updateGoodIdentification method',
  args:{productId: {type: GraphQLString},goodIdentificationTypeId: {type: GraphQLString},idValue: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateGoodIdentification?productId=${args.productId}&goodIdentificationTypeId=${args.goodIdentificationTypeId}&idValue=${args.idValue}&`, null, req);
  }
};
export {updateGoodIdentification};


const updateGoodIdentificationType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateGoodIdentificationType method',
  args:{goodIdentificationTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateGoodIdentificationType?goodIdentificationTypeId=${args.goodIdentificationTypeId}&parentTypeId=${args.parentTypeId}&hasTable=${args.hasTable}&description=${args.description}&`, null, req);
  }
};
export {updateGoodIdentificationType};


const updateMarketInterest = {
  type: ResponseType,
  description: 'mutation for ofbiz updateMarketInterest method',
  args:{fromDate: {type: GraphQLString},productCategoryId: {type: GraphQLString},partyClassificationGroupId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateMarketInterest?fromDate=${args.fromDate}&productCategoryId=${args.productCategoryId}&partyClassificationGroupId=${args.partyClassificationGroupId}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {updateMarketInterest};


const updatePartyToCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePartyToCategory method',
  args:{fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},productCategoryId: {type: GraphQLString},partyId: {type: GraphQLString},comments: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updatePartyToCategory?fromDate=${args.fromDate}&roleTypeId=${args.roleTypeId}&productCategoryId=${args.productCategoryId}&partyId=${args.partyId}&comments=${args.comments}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {updatePartyToCategory};


const updatePartyToProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePartyToProduct method',
  args:{fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},productId: {type: GraphQLString},partyId: {type: GraphQLString},comments: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updatePartyToProduct?fromDate=${args.fromDate}&roleTypeId=${args.roleTypeId}&productId=${args.productId}&partyId=${args.partyId}&comments=${args.comments}&sequenceNum=${args.sequenceNum}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {updatePartyToProduct};


const updateProdCatalog = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProdCatalog method',
  args:{catalogName: {type: GraphQLString},prodCatalogId: {type: GraphQLString},headerLogo: {type: GraphQLString},styleSheet: {type: GraphQLString},templatePathPrefix: {type: GraphQLString},useQuickAdd: {type: GraphQLString},contentPathPrefix: {type: GraphQLString},viewAllowPermReqd: {type: GraphQLString},purchaseAllowPermReqd: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProdCatalog?catalogName=${args.catalogName}&prodCatalogId=${args.prodCatalogId}&headerLogo=${args.headerLogo}&styleSheet=${args.styleSheet}&templatePathPrefix=${args.templatePathPrefix}&useQuickAdd=${args.useQuickAdd}&contentPathPrefix=${args.contentPathPrefix}&viewAllowPermReqd=${args.viewAllowPermReqd}&purchaseAllowPermReqd=${args.purchaseAllowPermReqd}&`, null, req);
  }
};
export {updateProdCatalog};


const updateProdCatalogCategoryType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProdCatalogCategoryType method',
  args:{prodCatalogCategoryTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProdCatalogCategoryType?prodCatalogCategoryTypeId=${args.prodCatalogCategoryTypeId}&parentTypeId=${args.parentTypeId}&description=${args.description}&`, null, req);
  }
};
export {updateProdCatalogCategoryType};


const updateProdCatalogInvFacility = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProdCatalogInvFacility method',
  args:{fromDate: {type: GraphQLString},facilityId: {type: GraphQLString},prodCatalogId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProdCatalogInvFacility?fromDate=${args.fromDate}&facilityId=${args.facilityId}&prodCatalogId=${args.prodCatalogId}&sequenceNum=${args.sequenceNum}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {updateProdCatalogInvFacility};


const updateProdCatalogToParty = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProdCatalogToParty method',
  args:{fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString},prodCatalogId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProdCatalogToParty?fromDate=${args.fromDate}&roleTypeId=${args.roleTypeId}&partyId=${args.partyId}&prodCatalogId=${args.prodCatalogId}&sequenceNum=${args.sequenceNum}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {updateProdCatalogToParty};


const updateProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProduct method',
  args:{productId: {type: GraphQLString},originGeoId: {type: GraphQLString},detailScreen: {type: GraphQLString},requireInventory: {type: GraphQLString},quantityUomId: {type: GraphQLString},mediumImageUrl: {type: GraphQLString},productName: {type: GraphQLString},introductionDate: {type: GraphQLString},shippingHeight: {type: GraphQLFloat},originalImageUrl: {type: GraphQLString},inShippingBox: {type: GraphQLString},detailImageUrl: {type: GraphQLString},supportDiscontinuationDate: {type: GraphQLString},productWidth: {type: GraphQLFloat},includeInPromotions: {type: GraphQLString},configId: {type: GraphQLString},billOfMaterialLevel: {type: GraphQLInt},lotIdFilledIn: {type: GraphQLString},productRating: {type: GraphQLFloat},manufacturerPartyId: {type: GraphQLString},brandName: {type: GraphQLString},requireAmount: {type: GraphQLString},smallImageUrl: {type: GraphQLString},taxable: {type: GraphQLString},primaryProductCategoryId: {type: GraphQLString},salesDiscontinuationDate: {type: GraphQLString},salesDiscWhenNotAvail: {type: GraphQLString},returnable: {type: GraphQLString},weightUomId: {type: GraphQLString},isVirtual: {type: GraphQLString},priceDetailText: {type: GraphQLString},reserv2ndPPPerc: {type: GraphQLFloat},widthUomId: {type: GraphQLString},longDescription: {type: GraphQLString},diameterUomId: {type: GraphQLString},autoCreateKeywords: {type: GraphQLString},amountUomTypeId: {type: GraphQLString},productDiameter: {type: GraphQLFloat},ratingTypeEnum: {type: GraphQLString},description: {type: GraphQLString},chargeShipping: {type: GraphQLString},reservNthPPPerc: {type: GraphQLFloat},quantityIncluded: {type: GraphQLFloat},heightUomId: {type: GraphQLString},internalName: {type: GraphQLString},virtualVariantMethodEnum: {type: GraphQLString},shippingWeight: {type: GraphQLFloat},shippingWidth: {type: GraphQLFloat},shippingDepth: {type: GraphQLFloat},reservMaxPersons: {type: GraphQLFloat},fixedAmount: {type: GraphQLFloat},inventoryItemTypeId: {type: GraphQLString},piecesIncluded: {type: GraphQLInt},productDepth: {type: GraphQLFloat},facilityId: {type: GraphQLString},comments: {type: GraphQLString},releaseDate: {type: GraphQLString},productHeight: {type: GraphQLFloat},defaultShipmentBoxTypeId: {type: GraphQLString},orderDecimalQuantity: {type: GraphQLString},inventoryMessage: {type: GraphQLString},productWeight: {type: GraphQLFloat},depthUomId: {type: GraphQLString},productTypeId: {type: GraphQLString},isVariant: {type: GraphQLString},largeImageUrl: {type: GraphQLString},requirementMethodEnumId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProduct?productId=${args.productId}&originGeoId=${args.originGeoId}&detailScreen=${args.detailScreen}&requireInventory=${args.requireInventory}&quantityUomId=${args.quantityUomId}&mediumImageUrl=${args.mediumImageUrl}&productName=${args.productName}&introductionDate=${args.introductionDate}&shippingHeight=${args.shippingHeight}&originalImageUrl=${args.originalImageUrl}&inShippingBox=${args.inShippingBox}&detailImageUrl=${args.detailImageUrl}&supportDiscontinuationDate=${args.supportDiscontinuationDate}&productWidth=${args.productWidth}&includeInPromotions=${args.includeInPromotions}&configId=${args.configId}&billOfMaterialLevel=${args.billOfMaterialLevel}&lotIdFilledIn=${args.lotIdFilledIn}&productRating=${args.productRating}&manufacturerPartyId=${args.manufacturerPartyId}&brandName=${args.brandName}&requireAmount=${args.requireAmount}&smallImageUrl=${args.smallImageUrl}&taxable=${args.taxable}&primaryProductCategoryId=${args.primaryProductCategoryId}&salesDiscontinuationDate=${args.salesDiscontinuationDate}&salesDiscWhenNotAvail=${args.salesDiscWhenNotAvail}&returnable=${args.returnable}&weightUomId=${args.weightUomId}&isVirtual=${args.isVirtual}&priceDetailText=${args.priceDetailText}&reserv2ndPPPerc=${args.reserv2ndPPPerc}&widthUomId=${args.widthUomId}&longDescription=${args.longDescription}&diameterUomId=${args.diameterUomId}&autoCreateKeywords=${args.autoCreateKeywords}&amountUomTypeId=${args.amountUomTypeId}&productDiameter=${args.productDiameter}&ratingTypeEnum=${args.ratingTypeEnum}&description=${args.description}&chargeShipping=${args.chargeShipping}&reservNthPPPerc=${args.reservNthPPPerc}&quantityIncluded=${args.quantityIncluded}&heightUomId=${args.heightUomId}&internalName=${args.internalName}&virtualVariantMethodEnum=${args.virtualVariantMethodEnum}&shippingWeight=${args.shippingWeight}&shippingWidth=${args.shippingWidth}&shippingDepth=${args.shippingDepth}&reservMaxPersons=${args.reservMaxPersons}&fixedAmount=${args.fixedAmount}&inventoryItemTypeId=${args.inventoryItemTypeId}&piecesIncluded=${args.piecesIncluded}&productDepth=${args.productDepth}&facilityId=${args.facilityId}&comments=${args.comments}&releaseDate=${args.releaseDate}&productHeight=${args.productHeight}&defaultShipmentBoxTypeId=${args.defaultShipmentBoxTypeId}&orderDecimalQuantity=${args.orderDecimalQuantity}&inventoryMessage=${args.inventoryMessage}&productWeight=${args.productWeight}&depthUomId=${args.depthUomId}&productTypeId=${args.productTypeId}&isVariant=${args.isVariant}&largeImageUrl=${args.largeImageUrl}&requirementMethodEnumId=${args.requirementMethodEnumId}&`, null, req);
  }
};
export {updateProduct};


const updateProductAssoc = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductAssoc method',
  args:{fromDate: {type: GraphQLString},productId: {type: GraphQLString},productIdTo: {type: GraphQLString},productAssocTypeId: {type: GraphQLString},reason: {type: GraphQLString},scrapFactor: {type: GraphQLFloat},quantity: {type: GraphQLFloat},recurrenceInfoId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},estimateCalcMethod: {type: GraphQLString},instruction: {type: GraphQLString},routingWorkEffortId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductAssoc?fromDate=${args.fromDate}&productId=${args.productId}&productIdTo=${args.productIdTo}&productAssocTypeId=${args.productAssocTypeId}&reason=${args.reason}&scrapFactor=${args.scrapFactor}&quantity=${args.quantity}&recurrenceInfoId=${args.recurrenceInfoId}&sequenceNum=${args.sequenceNum}&estimateCalcMethod=${args.estimateCalcMethod}&instruction=${args.instruction}&routingWorkEffortId=${args.routingWorkEffortId}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {updateProductAssoc};


const updateProductAssocType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductAssocType method',
  args:{productAssocTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductAssocType?productAssocTypeId=${args.productAssocTypeId}&parentTypeId=${args.parentTypeId}&hasTable=${args.hasTable}&description=${args.description}&`, null, req);
  }
};
export {updateProductAssocType};


const updateProductAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductAttribute method',
  args:{productId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt},attrType: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductAttribute?productId=${args.productId}&attrName=${args.attrName}&attrDescription=${args.attrDescription}&attrValue=${args.attrValue}&attrType=${args.attrType}&`, null, req);
  }
};
export {updateProductAttribute};


const updateProductCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductCategory method',
  args:{productCategoryTypeId: {type: GraphQLString},productCategoryId: {type: GraphQLString},longDescription: {type: GraphQLString},linkOneImageUrl: {type: GraphQLString},detailScreen: {type: GraphQLString},primaryParentCategoryId: {type: GraphQLString},categoryImageUrl: {type: GraphQLString},description: {type: GraphQLString},showInSelect: {type: GraphQLString},linkTwoImageUrl: {type: GraphQLString},categoryName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductCategory?productCategoryTypeId=${args.productCategoryTypeId}&productCategoryId=${args.productCategoryId}&longDescription=${args.longDescription}&linkOneImageUrl=${args.linkOneImageUrl}&detailScreen=${args.detailScreen}&primaryParentCategoryId=${args.primaryParentCategoryId}&categoryImageUrl=${args.categoryImageUrl}&description=${args.description}&showInSelect=${args.showInSelect}&linkTwoImageUrl=${args.linkTwoImageUrl}&categoryName=${args.categoryName}&`, null, req);
  }
};
export {updateProductCategory};


const updateProductCategoryAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductCategoryAttribute method',
  args:{productCategoryId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductCategoryAttribute?productCategoryId=${args.productCategoryId}&attrName=${args.attrName}&attrDescription=${args.attrDescription}&attrValue=${args.attrValue}&`, null, req);
  }
};
export {updateProductCategoryAttribute};


const updateProductCategoryContentType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductCategoryContentType method',
  args:{prodCatContentTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductCategoryContentType?prodCatContentTypeId=${args.prodCatContentTypeId}&parentTypeId=${args.parentTypeId}&hasTable=${args.hasTable}&description=${args.description}&`, null, req);
  }
};
export {updateProductCategoryContentType};


const updateProductCategoryGlAccount = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductCategoryGlAccount method',
  args:{productCategoryId: {type: GraphQLString},glAccountTypeId: {type: GraphQLString},glAccountId: {type: GraphQLString},organizationPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductCategoryGlAccount?productCategoryId=${args.productCategoryId}&glAccountTypeId=${args.glAccountTypeId}&glAccountId=${args.glAccountId}&organizationPartyId=${args.organizationPartyId}&`, null, req);
  }
};
export {updateProductCategoryGlAccount};


const updateProductCategoryLink = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductCategoryLink method',
  args:{fromDate: {type: GraphQLString},productCategoryId: {type: GraphQLString},linkSeqId: {type: GraphQLString},linkInfo: {type: GraphQLString},comments: {type: GraphQLString},sequenceNum: {type: GraphQLInt},detailText: {type: GraphQLString},titleText: {type: GraphQLString},imageUrl: {type: GraphQLString},imageTwoUrl: {type: GraphQLString},linkTypeEnumId: {type: GraphQLString},thruDate: {type: GraphQLString},detailSubScreen: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductCategoryLink?fromDate=${args.fromDate}&productCategoryId=${args.productCategoryId}&linkSeqId=${args.linkSeqId}&linkInfo=${args.linkInfo}&comments=${args.comments}&sequenceNum=${args.sequenceNum}&detailText=${args.detailText}&titleText=${args.titleText}&imageUrl=${args.imageUrl}&imageTwoUrl=${args.imageTwoUrl}&linkTypeEnumId=${args.linkTypeEnumId}&thruDate=${args.thruDate}&detailSubScreen=${args.detailSubScreen}&`, null, req);
  }
};
export {updateProductCategoryLink};


const updateProductCategoryToCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductCategoryToCategory method',
  args:{fromDate: {type: GraphQLString},productCategoryId: {type: GraphQLString},parentProductCategoryId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductCategoryToCategory?fromDate=${args.fromDate}&productCategoryId=${args.productCategoryId}&parentProductCategoryId=${args.parentProductCategoryId}&sequenceNum=${args.sequenceNum}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {updateProductCategoryToCategory};


const updateProductCategoryToProdCatalog = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductCategoryToProdCatalog method',
  args:{fromDate: {type: GraphQLString},prodCatalogCategoryTypeId: {type: GraphQLString},productCategoryId: {type: GraphQLString},prodCatalogId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductCategoryToProdCatalog?fromDate=${args.fromDate}&prodCatalogCategoryTypeId=${args.prodCatalogCategoryTypeId}&productCategoryId=${args.productCategoryId}&prodCatalogId=${args.prodCatalogId}&sequenceNum=${args.sequenceNum}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {updateProductCategoryToProdCatalog};


const updateProductCategoryType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductCategoryType method',
  args:{productCategoryTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductCategoryType?productCategoryTypeId=${args.productCategoryTypeId}&parentTypeId=${args.parentTypeId}&hasTable=${args.hasTable}&description=${args.description}&`, null, req);
  }
};
export {updateProductCategoryType};


const updateProductCategoryTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductCategoryTypeAttr method',
  args:{productCategoryTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductCategoryTypeAttr?productCategoryTypeId=${args.productCategoryTypeId}&attrName=${args.attrName}&description=${args.description}&`, null, req);
  }
};
export {updateProductCategoryTypeAttr};


const updateProductConfig = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductConfig method',
  args:{configItemId: {type: GraphQLString},fromDate: {type: GraphQLString},productId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},longDescription: {type: GraphQLString},defaultConfigOptionId: {type: GraphQLString},configTypeId: {type: GraphQLString},description: {type: GraphQLString},isMandatory: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductConfig?configItemId=${args.configItemId}&fromDate=${args.fromDate}&productId=${args.productId}&sequenceNum=${args.sequenceNum}&longDescription=${args.longDescription}&defaultConfigOptionId=${args.defaultConfigOptionId}&configTypeId=${args.configTypeId}&description=${args.description}&isMandatory=${args.isMandatory}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {updateProductConfig};


const updateProductConfigItem = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductConfigItem method',
  args:{configItemId: {type: GraphQLString},longDescription: {type: GraphQLString},imageUrl: {type: GraphQLString},configItemName: {type: GraphQLString},configItemTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductConfigItem?configItemId=${args.configItemId}&longDescription=${args.longDescription}&imageUrl=${args.imageUrl}&configItemName=${args.configItemName}&configItemTypeId=${args.configItemTypeId}&description=${args.description}&`, null, req);
  }
};
export {updateProductConfigItem};


const updateProductConfigItemContent = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductConfigItemContent method',
  args:{configItemId: {type: GraphQLString},confItemContentTypeId: {type: GraphQLString},fromDate: {type: GraphQLString},contentId: {type: GraphQLString},ownerContentId: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},contentTypeId: {type: GraphQLString},description: {type: GraphQLString},mimeTypeId: {type: GraphQLString},childLeafCount: {type: GraphQLInt},serviceName: {type: GraphQLString},customMethodId: {type: GraphQLString},characterSetId: {type: GraphQLString},thruDate: {type: GraphQLString},contentName: {type: GraphQLInt},privilegeEnumId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString},dataResourceId: {type: GraphQLString},decoratorContentId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},childBranchCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductConfigItemContent?configItemId=${args.configItemId}&confItemContentTypeId=${args.confItemContentTypeId}&fromDate=${args.fromDate}&contentId=${args.contentId}&ownerContentId=${args.ownerContentId}&templateDataResourceId=${args.templateDataResourceId}&lastModifiedDate=${args.lastModifiedDate}&instanceOfContentId=${args.instanceOfContentId}&contentTypeId=${args.contentTypeId}&description=${args.description}&mimeTypeId=${args.mimeTypeId}&childLeafCount=${args.childLeafCount}&serviceName=${args.serviceName}&customMethodId=${args.customMethodId}&characterSetId=${args.characterSetId}&thruDate=${args.thruDate}&contentName=${args.contentName}&privilegeEnumId=${args.privilegeEnumId}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&createdDate=${args.createdDate}&statusId=${args.statusId}&localeString=${args.localeString}&dataResourceId=${args.dataResourceId}&decoratorContentId=${args.decoratorContentId}&createdByUserLogin=${args.createdByUserLogin}&childBranchCount=${args.childBranchCount}&`, null, req);
  }
};
export {updateProductConfigItemContent};


const updateProductConfigOption = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductConfigOption method',
  args:{configItemId: {type: GraphQLString},configOptionId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},configOptionName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductConfigOption?configItemId=${args.configItemId}&configOptionId=${args.configOptionId}&sequenceNum=${args.sequenceNum}&configOptionName=${args.configOptionName}&description=${args.description}&`, null, req);
  }
};
export {updateProductConfigOption};


const updateProductConfigProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductConfigProduct method',
  args:{configItemId: {type: GraphQLString},productId: {type: GraphQLString},configOptionId: {type: GraphQLString},quantity: {type: GraphQLFloat},sequenceNum: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductConfigProduct?configItemId=${args.configItemId}&productId=${args.productId}&configOptionId=${args.configOptionId}&quantity=${args.quantity}&sequenceNum=${args.sequenceNum}&`, null, req);
  }
};
export {updateProductConfigProduct};


const updateProductContent = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductContent method',
  args:{fromDate: {type: GraphQLString},productId: {type: GraphQLString},contentId: {type: GraphQLString},productContentTypeId: {type: GraphQLString},useTimeUomId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},ownerContentId: {type: GraphQLString},contentTypeId: {type: GraphQLString},description: {type: GraphQLString},mimeTypeId: {type: GraphQLString},childLeafCount: {type: GraphQLInt},privilegeEnumId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},useRoleTypeId: {type: GraphQLString},dataResourceId: {type: GraphQLString},useTime: {type: GraphQLInt},createdByUserLogin: {type: GraphQLString},purchaseFromDate: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},useCountLimit: {type: GraphQLInt},serviceName: {type: GraphQLString},customMethodId: {type: GraphQLString},characterSetId: {type: GraphQLString},thruDate: {type: GraphQLString},contentName: {type: GraphQLInt},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString},decoratorContentId: {type: GraphQLString},purchaseThruDate: {type: GraphQLString},childBranchCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductContent?fromDate=${args.fromDate}&productId=${args.productId}&contentId=${args.contentId}&productContentTypeId=${args.productContentTypeId}&useTimeUomId=${args.useTimeUomId}&sequenceNum=${args.sequenceNum}&ownerContentId=${args.ownerContentId}&contentTypeId=${args.contentTypeId}&description=${args.description}&mimeTypeId=${args.mimeTypeId}&childLeafCount=${args.childLeafCount}&privilegeEnumId=${args.privilegeEnumId}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&useRoleTypeId=${args.useRoleTypeId}&dataResourceId=${args.dataResourceId}&useTime=${args.useTime}&createdByUserLogin=${args.createdByUserLogin}&purchaseFromDate=${args.purchaseFromDate}&templateDataResourceId=${args.templateDataResourceId}&lastModifiedDate=${args.lastModifiedDate}&instanceOfContentId=${args.instanceOfContentId}&useCountLimit=${args.useCountLimit}&serviceName=${args.serviceName}&customMethodId=${args.customMethodId}&characterSetId=${args.characterSetId}&thruDate=${args.thruDate}&contentName=${args.contentName}&createdDate=${args.createdDate}&statusId=${args.statusId}&localeString=${args.localeString}&decoratorContentId=${args.decoratorContentId}&purchaseThruDate=${args.purchaseThruDate}&childBranchCount=${args.childBranchCount}&`, null, req);
  }
};
export {updateProductContent};


const updateProductContentType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductContentType method',
  args:{productContentTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductContentType?productContentTypeId=${args.productContentTypeId}&parentTypeId=${args.parentTypeId}&hasTable=${args.hasTable}&description=${args.description}&`, null, req);
  }
};
export {updateProductContentType};


const updateProductGeo = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductGeo method',
  args:{productId: {type: GraphQLString},geoId: {type: GraphQLString},description: {type: GraphQLString},productGeoEnumId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductGeo?productId=${args.productId}&geoId=${args.geoId}&description=${args.description}&productGeoEnumId=${args.productGeoEnumId}&`, null, req);
  }
};
export {updateProductGeo};


const updateProductGlAccount = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductGlAccount method',
  args:{productId: {type: GraphQLString},glAccountTypeId: {type: GraphQLString},glAccountId: {type: GraphQLString},organizationPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductGlAccount?productId=${args.productId}&glAccountTypeId=${args.glAccountTypeId}&glAccountId=${args.glAccountId}&organizationPartyId=${args.organizationPartyId}&`, null, req);
  }
};
export {updateProductGlAccount};


const updateProductGroupOrder = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductGroupOrder method',
  args:{groupOrderId: {type: GraphQLString},fromDate: {type: GraphQLString},jobId: {type: GraphQLString},productId: {type: GraphQLString},statusId: {type: GraphQLString},reqOrderQty: {type: GraphQLFloat},soldOrderQty: {type: GraphQLFloat},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductGroupOrder?groupOrderId=${args.groupOrderId}&fromDate=${args.fromDate}&jobId=${args.jobId}&productId=${args.productId}&statusId=${args.statusId}&reqOrderQty=${args.reqOrderQty}&soldOrderQty=${args.soldOrderQty}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {updateProductGroupOrder};


const updateProductIfAvailableFromShipment = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductIfAvailableFromShipment method',
  args:{inventoryItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductIfAvailableFromShipment?inventoryItemId=${args.inventoryItemId}&`, null, req);
  }
};
export {updateProductIfAvailableFromShipment};


const updateProductKeyword = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductKeyword method',
  args:{productId: {type: GraphQLString},keywordTypeId: {type: GraphQLString},keyword: {type: GraphQLString},relevancyWeight: {type: GraphQLInt},statusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductKeyword?productId=${args.productId}&keywordTypeId=${args.keywordTypeId}&keyword=${args.keyword}&relevancyWeight=${args.relevancyWeight}&statusId=${args.statusId}&`, null, req);
  }
};
export {updateProductKeyword};


const updateProductMaint = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductMaint method',
  args:{productId: {type: GraphQLString},productMaintSeqId: {type: GraphQLString},intervalUomId: {type: GraphQLString},maintTemplateWorkEffortId: {type: GraphQLString},maintName: {type: GraphQLString},intervalQuantity: {type: GraphQLFloat},productMaintTypeId: {type: GraphQLString},intervalMeterTypeId: {type: GraphQLString},repeatCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductMaint?productId=${args.productId}&productMaintSeqId=${args.productMaintSeqId}&intervalUomId=${args.intervalUomId}&maintTemplateWorkEffortId=${args.maintTemplateWorkEffortId}&maintName=${args.maintName}&intervalQuantity=${args.intervalQuantity}&productMaintTypeId=${args.productMaintTypeId}&intervalMeterTypeId=${args.intervalMeterTypeId}&repeatCount=${args.repeatCount}&`, null, req);
  }
};
export {updateProductMaint};


const updateProductMaintType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductMaintType method',
  args:{productMaintTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductMaintType?productMaintTypeId=${args.productMaintTypeId}&parentTypeId=${args.parentTypeId}&description=${args.description}&`, null, req);
  }
};
export {updateProductMaintType};


const updateProductMeter = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductMeter method',
  args:{productId: {type: GraphQLString},productMeterTypeId: {type: GraphQLString},meterName: {type: GraphQLString},meterUomId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductMeter?productId=${args.productId}&productMeterTypeId=${args.productMeterTypeId}&meterName=${args.meterName}&meterUomId=${args.meterUomId}&`, null, req);
  }
};
export {updateProductMeter};


const updateProductMeterType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductMeterType method',
  args:{productMeterTypeId: {type: GraphQLString},defaultUomId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductMeterType?productMeterTypeId=${args.productMeterTypeId}&defaultUomId=${args.defaultUomId}&description=${args.description}&`, null, req);
  }
};
export {updateProductMeterType};


const updateProductPaymentMethodType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductPaymentMethodType method',
  args:{fromDate: {type: GraphQLString},productId: {type: GraphQLString},paymentMethodTypeId: {type: GraphQLString},productPricePurposeId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductPaymentMethodType?fromDate=${args.fromDate}&productId=${args.productId}&paymentMethodTypeId=${args.paymentMethodTypeId}&productPricePurposeId=${args.productPricePurposeId}&sequenceNum=${args.sequenceNum}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {updateProductPaymentMethodType};


const updateProductPrice = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductPrice method',
  args:{fromDate: {type: GraphQLString},currencyUomId: {type: GraphQLString},productId: {type: GraphQLString},price: {type: GraphQLFloat},productPricePurposeId: {type: GraphQLString},productStoreGroupId: {type: GraphQLString},productPriceTypeId: {type: GraphQLString},taxAuthPartyId: {type: GraphQLString},taxInPrice: {type: GraphQLString},termUomId: {type: GraphQLString},customPriceCalcService: {type: GraphQLString},taxPercentage: {type: GraphQLFloat},taxAuthGeoId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductPrice?fromDate=${args.fromDate}&currencyUomId=${args.currencyUomId}&productId=${args.productId}&price=${args.price}&productPricePurposeId=${args.productPricePurposeId}&productStoreGroupId=${args.productStoreGroupId}&productPriceTypeId=${args.productPriceTypeId}&taxAuthPartyId=${args.taxAuthPartyId}&taxInPrice=${args.taxInPrice}&termUomId=${args.termUomId}&customPriceCalcService=${args.customPriceCalcService}&taxPercentage=${args.taxPercentage}&taxAuthGeoId=${args.taxAuthGeoId}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {updateProductPrice};


const updateProductPromoContent = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductPromoContent method',
  args:{fromDate: {type: GraphQLString},productPromoContentTypeId: {type: GraphQLString},contentId: {type: GraphQLString},productPromoId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductPromoContent?fromDate=${args.fromDate}&productPromoContentTypeId=${args.productPromoContentTypeId}&contentId=${args.contentId}&productPromoId=${args.productPromoId}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {updateProductPromoContent};


const updateProductQuickAdminName = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductQuickAdminName method',
  args:{productId: {type: GraphQLString},originGeoId: {type: GraphQLString},detailScreen: {type: GraphQLString},requireInventory: {type: GraphQLString},quantityUomId: {type: GraphQLString},mediumImageUrl: {type: GraphQLString},productName: {type: GraphQLString},introductionDate: {type: GraphQLString},shippingHeight: {type: GraphQLFloat},originalImageUrl: {type: GraphQLString},inShippingBox: {type: GraphQLString},detailImageUrl: {type: GraphQLString},supportDiscontinuationDate: {type: GraphQLString},productWidth: {type: GraphQLFloat},includeInPromotions: {type: GraphQLString},configId: {type: GraphQLString},billOfMaterialLevel: {type: GraphQLInt},lotIdFilledIn: {type: GraphQLString},productRating: {type: GraphQLFloat},manufacturerPartyId: {type: GraphQLString},brandName: {type: GraphQLString},requireAmount: {type: GraphQLString},smallImageUrl: {type: GraphQLString},taxable: {type: GraphQLString},primaryProductCategoryId: {type: GraphQLString},salesDiscontinuationDate: {type: GraphQLString},salesDiscWhenNotAvail: {type: GraphQLString},returnable: {type: GraphQLString},weightUomId: {type: GraphQLString},isVirtual: {type: GraphQLString},priceDetailText: {type: GraphQLString},reserv2ndPPPerc: {type: GraphQLFloat},widthUomId: {type: GraphQLString},longDescription: {type: GraphQLString},diameterUomId: {type: GraphQLString},autoCreateKeywords: {type: GraphQLString},amountUomTypeId: {type: GraphQLString},productDiameter: {type: GraphQLFloat},ratingTypeEnum: {type: GraphQLString},description: {type: GraphQLString},chargeShipping: {type: GraphQLString},reservNthPPPerc: {type: GraphQLFloat},quantityIncluded: {type: GraphQLFloat},heightUomId: {type: GraphQLString},internalName: {type: GraphQLString},virtualVariantMethodEnum: {type: GraphQLString},shippingWeight: {type: GraphQLFloat},shippingWidth: {type: GraphQLFloat},shippingDepth: {type: GraphQLFloat},reservMaxPersons: {type: GraphQLFloat},fixedAmount: {type: GraphQLFloat},inventoryItemTypeId: {type: GraphQLString},piecesIncluded: {type: GraphQLInt},productDepth: {type: GraphQLFloat},facilityId: {type: GraphQLString},comments: {type: GraphQLString},releaseDate: {type: GraphQLString},productHeight: {type: GraphQLFloat},defaultShipmentBoxTypeId: {type: GraphQLString},orderDecimalQuantity: {type: GraphQLString},inventoryMessage: {type: GraphQLString},productWeight: {type: GraphQLFloat},depthUomId: {type: GraphQLString},productTypeId: {type: GraphQLString},isVariant: {type: GraphQLString},largeImageUrl: {type: GraphQLString},requirementMethodEnumId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductQuickAdminName?productId=${args.productId}&originGeoId=${args.originGeoId}&detailScreen=${args.detailScreen}&requireInventory=${args.requireInventory}&quantityUomId=${args.quantityUomId}&mediumImageUrl=${args.mediumImageUrl}&productName=${args.productName}&introductionDate=${args.introductionDate}&shippingHeight=${args.shippingHeight}&originalImageUrl=${args.originalImageUrl}&inShippingBox=${args.inShippingBox}&detailImageUrl=${args.detailImageUrl}&supportDiscontinuationDate=${args.supportDiscontinuationDate}&productWidth=${args.productWidth}&includeInPromotions=${args.includeInPromotions}&configId=${args.configId}&billOfMaterialLevel=${args.billOfMaterialLevel}&lotIdFilledIn=${args.lotIdFilledIn}&productRating=${args.productRating}&manufacturerPartyId=${args.manufacturerPartyId}&brandName=${args.brandName}&requireAmount=${args.requireAmount}&smallImageUrl=${args.smallImageUrl}&taxable=${args.taxable}&primaryProductCategoryId=${args.primaryProductCategoryId}&salesDiscontinuationDate=${args.salesDiscontinuationDate}&salesDiscWhenNotAvail=${args.salesDiscWhenNotAvail}&returnable=${args.returnable}&weightUomId=${args.weightUomId}&isVirtual=${args.isVirtual}&priceDetailText=${args.priceDetailText}&reserv2ndPPPerc=${args.reserv2ndPPPerc}&widthUomId=${args.widthUomId}&longDescription=${args.longDescription}&diameterUomId=${args.diameterUomId}&autoCreateKeywords=${args.autoCreateKeywords}&amountUomTypeId=${args.amountUomTypeId}&productDiameter=${args.productDiameter}&ratingTypeEnum=${args.ratingTypeEnum}&description=${args.description}&chargeShipping=${args.chargeShipping}&reservNthPPPerc=${args.reservNthPPPerc}&quantityIncluded=${args.quantityIncluded}&heightUomId=${args.heightUomId}&internalName=${args.internalName}&virtualVariantMethodEnum=${args.virtualVariantMethodEnum}&shippingWeight=${args.shippingWeight}&shippingWidth=${args.shippingWidth}&shippingDepth=${args.shippingDepth}&reservMaxPersons=${args.reservMaxPersons}&fixedAmount=${args.fixedAmount}&inventoryItemTypeId=${args.inventoryItemTypeId}&piecesIncluded=${args.piecesIncluded}&productDepth=${args.productDepth}&facilityId=${args.facilityId}&comments=${args.comments}&releaseDate=${args.releaseDate}&productHeight=${args.productHeight}&defaultShipmentBoxTypeId=${args.defaultShipmentBoxTypeId}&orderDecimalQuantity=${args.orderDecimalQuantity}&inventoryMessage=${args.inventoryMessage}&productWeight=${args.productWeight}&depthUomId=${args.depthUomId}&productTypeId=${args.productTypeId}&isVariant=${args.isVariant}&largeImageUrl=${args.largeImageUrl}&requirementMethodEnumId=${args.requirementMethodEnumId}&`, null, req);
  }
};
export {updateProductQuickAdminName};


const updateProductQuickAdminShipping = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductQuickAdminShipping method',
  args:{productId: {type: GraphQLString},originGeoId: {type: GraphQLString},detailScreen: {type: GraphQLString},requireInventory: {type: GraphQLString},quantityUomId: {type: GraphQLString},mediumImageUrl: {type: GraphQLString},productName: {type: GraphQLString},introductionDate: {type: GraphQLString},shippingHeight: {type: GraphQLFloat},originalImageUrl: {type: GraphQLString},inShippingBox: {type: GraphQLString},detailImageUrl: {type: GraphQLString},supportDiscontinuationDate: {type: GraphQLString},productWidth: {type: GraphQLFloat},includeInPromotions: {type: GraphQLString},configId: {type: GraphQLString},billOfMaterialLevel: {type: GraphQLInt},lotIdFilledIn: {type: GraphQLString},productRating: {type: GraphQLFloat},manufacturerPartyId: {type: GraphQLString},brandName: {type: GraphQLString},requireAmount: {type: GraphQLString},smallImageUrl: {type: GraphQLString},taxable: {type: GraphQLString},primaryProductCategoryId: {type: GraphQLString},salesDiscontinuationDate: {type: GraphQLString},salesDiscWhenNotAvail: {type: GraphQLString},returnable: {type: GraphQLString},weightUomId: {type: GraphQLString},isVirtual: {type: GraphQLString},priceDetailText: {type: GraphQLString},reserv2ndPPPerc: {type: GraphQLFloat},widthUomId: {type: GraphQLString},longDescription: {type: GraphQLString},diameterUomId: {type: GraphQLString},autoCreateKeywords: {type: GraphQLString},amountUomTypeId: {type: GraphQLString},productDiameter: {type: GraphQLFloat},ratingTypeEnum: {type: GraphQLString},description: {type: GraphQLString},chargeShipping: {type: GraphQLString},reservNthPPPerc: {type: GraphQLFloat},quantityIncluded: {type: GraphQLFloat},heightUomId: {type: GraphQLString},internalName: {type: GraphQLString},virtualVariantMethodEnum: {type: GraphQLString},shippingWeight: {type: GraphQLFloat},shippingWidth: {type: GraphQLFloat},shippingDepth: {type: GraphQLFloat},reservMaxPersons: {type: GraphQLFloat},fixedAmount: {type: GraphQLFloat},inventoryItemTypeId: {type: GraphQLString},piecesIncluded: {type: GraphQLInt},productDepth: {type: GraphQLFloat},facilityId: {type: GraphQLString},comments: {type: GraphQLString},releaseDate: {type: GraphQLString},productHeight: {type: GraphQLFloat},defaultShipmentBoxTypeId: {type: GraphQLString},orderDecimalQuantity: {type: GraphQLString},inventoryMessage: {type: GraphQLString},productWeight: {type: GraphQLFloat},depthUomId: {type: GraphQLString},productTypeId: {type: GraphQLString},isVariant: {type: GraphQLString},largeImageUrl: {type: GraphQLString},requirementMethodEnumId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductQuickAdminShipping?productId=${args.productId}&originGeoId=${args.originGeoId}&detailScreen=${args.detailScreen}&requireInventory=${args.requireInventory}&quantityUomId=${args.quantityUomId}&mediumImageUrl=${args.mediumImageUrl}&productName=${args.productName}&introductionDate=${args.introductionDate}&shippingHeight=${args.shippingHeight}&originalImageUrl=${args.originalImageUrl}&inShippingBox=${args.inShippingBox}&detailImageUrl=${args.detailImageUrl}&supportDiscontinuationDate=${args.supportDiscontinuationDate}&productWidth=${args.productWidth}&includeInPromotions=${args.includeInPromotions}&configId=${args.configId}&billOfMaterialLevel=${args.billOfMaterialLevel}&lotIdFilledIn=${args.lotIdFilledIn}&productRating=${args.productRating}&manufacturerPartyId=${args.manufacturerPartyId}&brandName=${args.brandName}&requireAmount=${args.requireAmount}&smallImageUrl=${args.smallImageUrl}&taxable=${args.taxable}&primaryProductCategoryId=${args.primaryProductCategoryId}&salesDiscontinuationDate=${args.salesDiscontinuationDate}&salesDiscWhenNotAvail=${args.salesDiscWhenNotAvail}&returnable=${args.returnable}&weightUomId=${args.weightUomId}&isVirtual=${args.isVirtual}&priceDetailText=${args.priceDetailText}&reserv2ndPPPerc=${args.reserv2ndPPPerc}&widthUomId=${args.widthUomId}&longDescription=${args.longDescription}&diameterUomId=${args.diameterUomId}&autoCreateKeywords=${args.autoCreateKeywords}&amountUomTypeId=${args.amountUomTypeId}&productDiameter=${args.productDiameter}&ratingTypeEnum=${args.ratingTypeEnum}&description=${args.description}&chargeShipping=${args.chargeShipping}&reservNthPPPerc=${args.reservNthPPPerc}&quantityIncluded=${args.quantityIncluded}&heightUomId=${args.heightUomId}&internalName=${args.internalName}&virtualVariantMethodEnum=${args.virtualVariantMethodEnum}&shippingWeight=${args.shippingWeight}&shippingWidth=${args.shippingWidth}&shippingDepth=${args.shippingDepth}&reservMaxPersons=${args.reservMaxPersons}&fixedAmount=${args.fixedAmount}&inventoryItemTypeId=${args.inventoryItemTypeId}&piecesIncluded=${args.piecesIncluded}&productDepth=${args.productDepth}&facilityId=${args.facilityId}&comments=${args.comments}&releaseDate=${args.releaseDate}&productHeight=${args.productHeight}&defaultShipmentBoxTypeId=${args.defaultShipmentBoxTypeId}&orderDecimalQuantity=${args.orderDecimalQuantity}&inventoryMessage=${args.inventoryMessage}&productWeight=${args.productWeight}&depthUomId=${args.depthUomId}&productTypeId=${args.productTypeId}&isVariant=${args.isVariant}&largeImageUrl=${args.largeImageUrl}&requirementMethodEnumId=${args.requirementMethodEnumId}&`, null, req);
  }
};
export {updateProductQuickAdminShipping};


const updateProductReview = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductReview method',
  args:{productReviewId: {type: GraphQLString},userLoginId: {type: GraphQLString},productId: {type: GraphQLString},statusId: {type: GraphQLString},postedDateTime: {type: GraphQLString},productStoreId: {type: GraphQLString},postedAnonymous: {type: GraphQLString},productRating: {type: GraphQLFloat},productReview: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductReview?productReviewId=${args.productReviewId}&userLoginId=${args.userLoginId}&productId=${args.productId}&statusId=${args.statusId}&postedDateTime=${args.postedDateTime}&productStoreId=${args.productStoreId}&postedAnonymous=${args.postedAnonymous}&productRating=${args.productRating}&productReview=${args.productReview}&`, null, req);
  }
};
export {updateProductReview};


const updateProductToCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductToCategory method',
  args:{fromDate: {type: GraphQLString},productCategoryId: {type: GraphQLString},productId: {type: GraphQLString},comments: {type: GraphQLString},quantity: {type: GraphQLFloat},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductToCategory?fromDate=${args.fromDate}&productCategoryId=${args.productCategoryId}&productId=${args.productId}&comments=${args.comments}&quantity=${args.quantity}&sequenceNum=${args.sequenceNum}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {updateProductToCategory};


const updateProductType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductType method',
  args:{productTypeId: {type: GraphQLString},isPhysical: {type: GraphQLString},parentTypeId: {type: GraphQLString},isDigital: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductType?productTypeId=${args.productTypeId}&isPhysical=${args.isPhysical}&parentTypeId=${args.parentTypeId}&isDigital=${args.isDigital}&hasTable=${args.hasTable}&description=${args.description}&`, null, req);
  }
};
export {updateProductType};


const updateProductTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductTypeAttr method',
  args:{productTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateProductTypeAttr?productTypeId=${args.productTypeId}&attrName=${args.attrName}&description=${args.description}&`, null, req);
  }
};
export {updateProductTypeAttr};


const updateRelatedUrlContentForCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz updateRelatedUrlContentForCategory method',
  args:{fromDate: {type: GraphQLString},prodCatContentTypeId: {type: GraphQLString},productCategoryId: {type: GraphQLString},contentId: {type: GraphQLString},dataResourceId: {type: GraphQLString},purchaseFromDate: {type: GraphQLString},localeString: {type: GraphQLString},useDaysLimit: {type: GraphQLFloat},description: {type: GraphQLString},purchaseThruDate: {type: GraphQLString},useCountLimit: {type: GraphQLInt},title: {type: GraphQLString},url: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateRelatedUrlContentForCategory?fromDate=${args.fromDate}&prodCatContentTypeId=${args.prodCatContentTypeId}&productCategoryId=${args.productCategoryId}&contentId=${args.contentId}&dataResourceId=${args.dataResourceId}&purchaseFromDate=${args.purchaseFromDate}&localeString=${args.localeString}&useDaysLimit=${args.useDaysLimit}&description=${args.description}&purchaseThruDate=${args.purchaseThruDate}&useCountLimit=${args.useCountLimit}&title=${args.title}&url=${args.url}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {updateRelatedUrlContentForCategory};


const updateSimpleTextContentForCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz updateSimpleTextContentForCategory method',
  args:{fromDate: {type: GraphQLString},prodCatContentTypeId: {type: GraphQLString},productCategoryId: {type: GraphQLString},contentId: {type: GraphQLString},ownerContentId: {type: GraphQLString},useDaysLimit: {type: GraphQLFloat},contentTypeId: {type: GraphQLString},description: {type: GraphQLString},mimeTypeId: {type: GraphQLString},childLeafCount: {type: GraphQLInt},privilegeEnumId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},dataResourceId: {type: GraphQLString},text: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},textDataResourceId: {type: GraphQLString},purchaseFromDate: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},useCountLimit: {type: GraphQLInt},serviceName: {type: GraphQLString},customMethodId: {type: GraphQLString},characterSetId: {type: GraphQLString},thruDate: {type: GraphQLString},contentName: {type: GraphQLInt},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString},decoratorContentId: {type: GraphQLString},purchaseThruDate: {type: GraphQLString},childBranchCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateSimpleTextContentForCategory?fromDate=${args.fromDate}&prodCatContentTypeId=${args.prodCatContentTypeId}&productCategoryId=${args.productCategoryId}&contentId=${args.contentId}&ownerContentId=${args.ownerContentId}&useDaysLimit=${args.useDaysLimit}&contentTypeId=${args.contentTypeId}&description=${args.description}&mimeTypeId=${args.mimeTypeId}&childLeafCount=${args.childLeafCount}&privilegeEnumId=${args.privilegeEnumId}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&dataResourceId=${args.dataResourceId}&text=${args.text}&createdByUserLogin=${args.createdByUserLogin}&textDataResourceId=${args.textDataResourceId}&purchaseFromDate=${args.purchaseFromDate}&templateDataResourceId=${args.templateDataResourceId}&lastModifiedDate=${args.lastModifiedDate}&instanceOfContentId=${args.instanceOfContentId}&useCountLimit=${args.useCountLimit}&serviceName=${args.serviceName}&customMethodId=${args.customMethodId}&characterSetId=${args.characterSetId}&thruDate=${args.thruDate}&contentName=${args.contentName}&createdDate=${args.createdDate}&statusId=${args.statusId}&localeString=${args.localeString}&decoratorContentId=${args.decoratorContentId}&purchaseThruDate=${args.purchaseThruDate}&childBranchCount=${args.childBranchCount}&`, null, req);
  }
};
export {updateSimpleTextContentForCategory};


const updateSimpleTextContentForProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz updateSimpleTextContentForProduct method',
  args:{fromDate: {type: GraphQLString},productId: {type: GraphQLString},contentId: {type: GraphQLString},productContentTypeId: {type: GraphQLString},useTimeUomId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},ownerContentId: {type: GraphQLString},contentTypeId: {type: GraphQLString},description: {type: GraphQLString},mimeTypeId: {type: GraphQLString},childLeafCount: {type: GraphQLInt},privilegeEnumId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},useRoleTypeId: {type: GraphQLString},dataResourceId: {type: GraphQLString},useTime: {type: GraphQLInt},text: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},textDataResourceId: {type: GraphQLString},purchaseFromDate: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},useCountLimit: {type: GraphQLInt},serviceName: {type: GraphQLString},customMethodId: {type: GraphQLString},characterSetId: {type: GraphQLString},thruDate: {type: GraphQLString},contentName: {type: GraphQLInt},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString},decoratorContentId: {type: GraphQLString},purchaseThruDate: {type: GraphQLString},childBranchCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateSimpleTextContentForProduct?fromDate=${args.fromDate}&productId=${args.productId}&contentId=${args.contentId}&productContentTypeId=${args.productContentTypeId}&useTimeUomId=${args.useTimeUomId}&sequenceNum=${args.sequenceNum}&ownerContentId=${args.ownerContentId}&contentTypeId=${args.contentTypeId}&description=${args.description}&mimeTypeId=${args.mimeTypeId}&childLeafCount=${args.childLeafCount}&privilegeEnumId=${args.privilegeEnumId}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&useRoleTypeId=${args.useRoleTypeId}&dataResourceId=${args.dataResourceId}&useTime=${args.useTime}&text=${args.text}&createdByUserLogin=${args.createdByUserLogin}&textDataResourceId=${args.textDataResourceId}&purchaseFromDate=${args.purchaseFromDate}&templateDataResourceId=${args.templateDataResourceId}&lastModifiedDate=${args.lastModifiedDate}&instanceOfContentId=${args.instanceOfContentId}&useCountLimit=${args.useCountLimit}&serviceName=${args.serviceName}&customMethodId=${args.customMethodId}&characterSetId=${args.characterSetId}&thruDate=${args.thruDate}&contentName=${args.contentName}&createdDate=${args.createdDate}&statusId=${args.statusId}&localeString=${args.localeString}&decoratorContentId=${args.decoratorContentId}&purchaseThruDate=${args.purchaseThruDate}&childBranchCount=${args.childBranchCount}&`, null, req);
  }
};
export {updateSimpleTextContentForProduct};


const updateSimpleTextContentForProductConfigItem = {
  type: ResponseType,
  description: 'mutation for ofbiz updateSimpleTextContentForProductConfigItem method',
  args:{configItemId: {type: GraphQLString},confItemContentTypeId: {type: GraphQLString},fromDate: {type: GraphQLString},contentId: {type: GraphQLString},ownerContentId: {type: GraphQLString},contentTypeId: {type: GraphQLString},description: {type: GraphQLString},mimeTypeId: {type: GraphQLString},childLeafCount: {type: GraphQLInt},privilegeEnumId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},dataResourceId: {type: GraphQLString},text: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},textDataResourceId: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},serviceName: {type: GraphQLString},customMethodId: {type: GraphQLString},characterSetId: {type: GraphQLString},thruDate: {type: GraphQLString},contentName: {type: GraphQLInt},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString},decoratorContentId: {type: GraphQLString},childBranchCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateSimpleTextContentForProductConfigItem?configItemId=${args.configItemId}&confItemContentTypeId=${args.confItemContentTypeId}&fromDate=${args.fromDate}&contentId=${args.contentId}&ownerContentId=${args.ownerContentId}&contentTypeId=${args.contentTypeId}&description=${args.description}&mimeTypeId=${args.mimeTypeId}&childLeafCount=${args.childLeafCount}&privilegeEnumId=${args.privilegeEnumId}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&dataResourceId=${args.dataResourceId}&text=${args.text}&createdByUserLogin=${args.createdByUserLogin}&textDataResourceId=${args.textDataResourceId}&templateDataResourceId=${args.templateDataResourceId}&lastModifiedDate=${args.lastModifiedDate}&instanceOfContentId=${args.instanceOfContentId}&serviceName=${args.serviceName}&customMethodId=${args.customMethodId}&characterSetId=${args.characterSetId}&thruDate=${args.thruDate}&contentName=${args.contentName}&createdDate=${args.createdDate}&statusId=${args.statusId}&localeString=${args.localeString}&decoratorContentId=${args.decoratorContentId}&childBranchCount=${args.childBranchCount}&`, null, req);
  }
};
export {updateSimpleTextContentForProductConfigItem};


const updateStatusImageManagement = {
  type: ResponseType,
  description: 'mutation for ofbiz updateStatusImageManagement method',
  args:{contentId: {type: GraphQLString},checkStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateStatusImageManagement?contentId=${args.contentId}&checkStatusId=${args.checkStatusId}&`, null, req);
  }
};
export {updateStatusImageManagement};


const updateSupplierProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz updateSupplierProduct method',
  args:{currencyUomId: {type: GraphQLString},productId: {type: GraphQLString},availableFromDate: {type: GraphQLString},minimumOrderQuantity: {type: GraphQLFloat},partyId: {type: GraphQLString},supplierProductName: {type: GraphQLString},comments: {type: GraphQLString},canDropShip: {type: GraphQLString},supplierRatingTypeId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString},quantityUomId: {type: GraphQLString},supplierProductId: {type: GraphQLString},supplierPrefOrderId: {type: GraphQLString},unitsIncluded: {type: GraphQLFloat},orderQtyIncrements: {type: GraphQLFloat},shippingPrice: {type: GraphQLFloat},agreementId: {type: GraphQLString},availableThruDate: {type: GraphQLString},standardLeadTimeDays: {type: GraphQLFloat},lastPrice: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateSupplierProduct?currencyUomId=${args.currencyUomId}&productId=${args.productId}&availableFromDate=${args.availableFromDate}&minimumOrderQuantity=${args.minimumOrderQuantity}&partyId=${args.partyId}&supplierProductName=${args.supplierProductName}&comments=${args.comments}&canDropShip=${args.canDropShip}&supplierRatingTypeId=${args.supplierRatingTypeId}&agreementItemSeqId=${args.agreementItemSeqId}&quantityUomId=${args.quantityUomId}&supplierProductId=${args.supplierProductId}&supplierPrefOrderId=${args.supplierPrefOrderId}&unitsIncluded=${args.unitsIncluded}&orderQtyIncrements=${args.orderQtyIncrements}&shippingPrice=${args.shippingPrice}&agreementId=${args.agreementId}&availableThruDate=${args.availableThruDate}&standardLeadTimeDays=${args.standardLeadTimeDays}&lastPrice=${args.lastPrice}&`, null, req);
  }
};
export {updateSupplierProduct};


const updateSupplierProductFeature = {
  type: ResponseType,
  description: 'mutation for ofbiz updateSupplierProductFeature method',
  args:{productFeatureId: {type: GraphQLString},partyId: {type: GraphQLString},idCode: {type: GraphQLString},description: {type: GraphQLString},uomId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateSupplierProductFeature?productFeatureId=${args.productFeatureId}&partyId=${args.partyId}&idCode=${args.idCode}&description=${args.description}&uomId=${args.uomId}&`, null, req);
  }
};
export {updateSupplierProductFeature};


const updateWebAnalyticsConfig = {
  type: ResponseType,
  description: 'mutation for ofbiz updateWebAnalyticsConfig method',
  args:{webAnalyticsTypeId: {type: GraphQLString},webSiteId: {type: GraphQLString},webAnalyticsCode: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateWebAnalyticsConfig?webAnalyticsTypeId=${args.webAnalyticsTypeId}&webSiteId=${args.webSiteId}&webAnalyticsCode=${args.webAnalyticsCode}&`, null, req);
  }
};
export {updateWebAnalyticsConfig};


const updateWebAnalyticsType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateWebAnalyticsType method',
  args:{webAnalyticsTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/updateWebAnalyticsType?webAnalyticsTypeId=${args.webAnalyticsTypeId}&parentTypeId=${args.parentTypeId}&hasTable=${args.hasTable}&description=${args.description}&`, null, req);
  }
};
export {updateWebAnalyticsType};


const uploadFrame = {
  type: ResponseType,
  description: 'mutation for ofbiz uploadFrame method',
  args:{uploadedFile: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/uploadFrame?uploadedFile=${args.uploadedFile}&`, null, req);
  }
};
export {uploadFrame};


const uploadProductAdditionalViewImages = {
  type: ResponseType,
  description: 'mutation for ofbiz uploadProductAdditionalViewImages method',
  args:{productId: {type: GraphQLString},_additionalImageOne_fileName: {type: GraphQLString},_additionalImageOne_contentType: {type: GraphQLString},_additionalImageThree_contentType: {type: GraphQLString},_additionalImageThree_fileName: {type: GraphQLString},_additionalImageFour_fileName: {type: GraphQLString},_additionalImageFour_contentType: {type: GraphQLString},_additionalImageTwo_fileName: {type: GraphQLString},_additionalImageTwo_contentType: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/products/uploadProductAdditionalViewImages?productId=${args.productId}&_additionalImageOne_fileName=${args._additionalImageOne_fileName}&_additionalImageOne_contentType=${args._additionalImageOne_contentType}&_additionalImageThree_contentType=${args._additionalImageThree_contentType}&_additionalImageThree_fileName=${args._additionalImageThree_fileName}&_additionalImageFour_fileName=${args._additionalImageFour_fileName}&_additionalImageFour_contentType=${args._additionalImageFour_contentType}&_additionalImageTwo_fileName=${args._additionalImageTwo_fileName}&_additionalImageTwo_contentType=${args._additionalImageTwo_contentType}&`, null, req);
  }
};
export {uploadProductAdditionalViewImages};
