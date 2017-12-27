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


const calculateProductPrice = {
  type: ResponseType,
  description: 'mutation for ofbiz calculateProductPrice method',
  args:{product: {type: new GraphQLList(KeyValueInputType)},currencyUomIdTo: {type: GraphQLString},autoUserLogin: {type: new GraphQLList(KeyValueInputType)},optimizeForLargeRuleSet: {type: GraphQLString},amount: {type: GraphQLFloat},quantity: {type: GraphQLFloat},termUomId: {type: GraphQLString},surveyResponseId: {type: GraphQLString},productStoreGroupId: {type: GraphQLString},findAllQuantityPrices: {type: GraphQLString},currencyUomId: {type: GraphQLString},agreementId: {type: GraphQLString},productStoreId: {type: GraphQLString},partyId: {type: GraphQLString},productPricePurposeId: {type: GraphQLString},checkIncludeVat: {type: GraphQLString},prodCatalogId: {type: GraphQLString},webSiteId: {type: GraphQLString},customAttributes: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/calculateProductPrice?product=${args.product}&currencyUomIdTo=${args.currencyUomIdTo}&autoUserLogin=${args.autoUserLogin}&optimizeForLargeRuleSet=${args.optimizeForLargeRuleSet}&amount=${args.amount}&quantity=${args.quantity}&termUomId=${args.termUomId}&surveyResponseId=${args.surveyResponseId}&productStoreGroupId=${args.productStoreGroupId}&findAllQuantityPrices=${args.findAllQuantityPrices}&currencyUomId=${args.currencyUomId}&agreementId=${args.agreementId}&productStoreId=${args.productStoreId}&partyId=${args.partyId}&productPricePurposeId=${args.productPricePurposeId}&checkIncludeVat=${args.checkIncludeVat}&prodCatalogId=${args.prodCatalogId}&webSiteId=${args.webSiteId}&customAttributes=${args.customAttributes}&`, null, req);
  }
};
export {calculateProductPrice};


const calculatePurchasePrice = {
  type: ResponseType,
  description: 'mutation for ofbiz calculatePurchasePrice method',
  args:{product: {type: new GraphQLList(KeyValueInputType)},currencyUomId: {type: GraphQLString},amount: {type: GraphQLFloat},quantity: {type: GraphQLFloat},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/calculatePurchasePrice?product=${args.product}&currencyUomId=${args.currencyUomId}&amount=${args.amount}&quantity=${args.quantity}&partyId=${args.partyId}&`, null, req);
  }
};
export {calculatePurchasePrice};


const createBulkProductPromoCode = {
  type: ResponseType,
  description: 'mutation for ofbiz createBulkProductPromoCode method',
  args:{useLimitPerCode: {type: GraphQLInt},lastModifiedDate: {type: GraphQLString},productPromoId: {type: GraphQLString},useLimitPerCustomer: {type: GraphQLInt},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},userEntered: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},createdDate: {type: GraphQLString},_uploadedFile_contentType: {type: GraphQLString},requireEmailOrParty: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},uploadedFile: {type: GraphQLString},_uploadedFile_fileName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/createBulkProductPromoCode?useLimitPerCode=${args.useLimitPerCode}&lastModifiedDate=${args.lastModifiedDate}&productPromoId=${args.productPromoId}&useLimitPerCustomer=${args.useLimitPerCustomer}&thruDate=${args.thruDate}&fromDate=${args.fromDate}&userEntered=${args.userEntered}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&createdDate=${args.createdDate}&_uploadedFile_contentType=${args._uploadedFile_contentType}&requireEmailOrParty=${args.requireEmailOrParty}&createdByUserLogin=${args.createdByUserLogin}&uploadedFile=${args.uploadedFile}&_uploadedFile_fileName=${args._uploadedFile_fileName}&`, null, req);
  }
};
export {createBulkProductPromoCode};


const createBulkProductPromoCodeEmail = {
  type: ResponseType,
  description: 'mutation for ofbiz createBulkProductPromoCodeEmail method',
  args:{productPromoCodeId: {type: GraphQLString},_uploadedFile_contentType: {type: GraphQLString},uploadedFile: {type: GraphQLString},_uploadedFile_fileName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/createBulkProductPromoCodeEmail?productPromoCodeId=${args.productPromoCodeId}&_uploadedFile_contentType=${args._uploadedFile_contentType}&uploadedFile=${args.uploadedFile}&_uploadedFile_fileName=${args._uploadedFile_fileName}&`, null, req);
  }
};
export {createBulkProductPromoCodeEmail};


const createProductPriceAction = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductPriceAction method',
  args:{productPriceRuleId: {type: GraphQLString},amount: {type: GraphQLFloat},productPriceActionTypeId: {type: GraphQLString},rateCode: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/createProductPriceAction?productPriceRuleId=${args.productPriceRuleId}&amount=${args.amount}&productPriceActionTypeId=${args.productPriceActionTypeId}&rateCode=${args.rateCode}&`, null, req);
  }
};
export {createProductPriceAction};


const createProductPriceActionType = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductPriceActionType method',
  args:{description: {type: GraphQLString},productPriceActionTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/createProductPriceActionType?description=${args.description}&productPriceActionTypeId=${args.productPriceActionTypeId}&`, null, req);
  }
};
export {createProductPriceActionType};


const createProductPriceAutoNotice = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductPriceAutoNotice method',
  args:{fromDate: {type: GraphQLString},runDate: {type: GraphQLString},facilityId: {type: GraphQLString},productPriceNoticeId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/createProductPriceAutoNotice?fromDate=${args.fromDate}&runDate=${args.runDate}&facilityId=${args.facilityId}&productPriceNoticeId=${args.productPriceNoticeId}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {createProductPriceAutoNotice};


const createProductPriceCond = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductPriceCond method',
  args:{productPriceRuleId: {type: GraphQLString},condValueInput: {type: GraphQLString},inputParamEnumId: {type: GraphQLString},condValue: {type: GraphQLString},operatorEnumId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/createProductPriceCond?productPriceRuleId=${args.productPriceRuleId}&condValueInput=${args.condValueInput}&inputParamEnumId=${args.inputParamEnumId}&condValue=${args.condValue}&operatorEnumId=${args.operatorEnumId}&`, null, req);
  }
};
export {createProductPriceCond};


const createProductPriceRule = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductPriceRule method',
  args:{ruleName: {type: GraphQLString},fromDate: {type: GraphQLString},description: {type: GraphQLString},isSale: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/createProductPriceRule?ruleName=${args.ruleName}&fromDate=${args.fromDate}&description=${args.description}&isSale=${args.isSale}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {createProductPriceRule};


const createProductPromo = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductPromo method',
  args:{promoName: {type: GraphQLString},showToCustomer: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},requireCode: {type: GraphQLString},overrideOrgPartyId: {type: GraphQLString},useLimitPerCustomer: {type: GraphQLInt},useLimitPerOrder: {type: GraphQLInt},useLimitPerPromotion: {type: GraphQLInt},promoText: {type: GraphQLString},userEntered: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},createdDate: {type: GraphQLString},billbackFactor: {type: GraphQLFloat},createdByUserLogin: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/createProductPromo?promoName=${args.promoName}&showToCustomer=${args.showToCustomer}&lastModifiedDate=${args.lastModifiedDate}&requireCode=${args.requireCode}&overrideOrgPartyId=${args.overrideOrgPartyId}&useLimitPerCustomer=${args.useLimitPerCustomer}&useLimitPerOrder=${args.useLimitPerOrder}&useLimitPerPromotion=${args.useLimitPerPromotion}&promoText=${args.promoText}&userEntered=${args.userEntered}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&createdDate=${args.createdDate}&billbackFactor=${args.billbackFactor}&createdByUserLogin=${args.createdByUserLogin}&`, null, req);
  }
};
export {createProductPromo};


const createProductPromoAction = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductPromoAction method',
  args:{productPromoRuleId: {type: GraphQLString},productPromoActionEnumId: {type: GraphQLString},productPromoId: {type: GraphQLString},amount: {type: GraphQLFloat},quantity: {type: GraphQLFloat},productId: {type: GraphQLString},orderAdjustmentTypeId: {type: GraphQLString},useCartQuantity: {type: GraphQLString},serviceName: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/createProductPromoAction?productPromoRuleId=${args.productPromoRuleId}&productPromoActionEnumId=${args.productPromoActionEnumId}&productPromoId=${args.productPromoId}&amount=${args.amount}&quantity=${args.quantity}&productId=${args.productId}&orderAdjustmentTypeId=${args.orderAdjustmentTypeId}&useCartQuantity=${args.useCartQuantity}&serviceName=${args.serviceName}&partyId=${args.partyId}&`, null, req);
  }
};
export {createProductPromoAction};


const createProductPromoCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductPromoCategory method',
  args:{productCategoryId: {type: GraphQLString},andGroupId: {type: GraphQLString},productPromoActionSeqId: {type: GraphQLString},productPromoRuleId: {type: GraphQLString},productPromoId: {type: GraphQLString},productPromoCondSeqId: {type: GraphQLString},includeSubCategories: {type: GraphQLString},productPromoApplEnumId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/createProductPromoCategory?productCategoryId=${args.productCategoryId}&andGroupId=${args.andGroupId}&productPromoActionSeqId=${args.productPromoActionSeqId}&productPromoRuleId=${args.productPromoRuleId}&productPromoId=${args.productPromoId}&productPromoCondSeqId=${args.productPromoCondSeqId}&includeSubCategories=${args.includeSubCategories}&productPromoApplEnumId=${args.productPromoApplEnumId}&`, null, req);
  }
};
export {createProductPromoCategory};


const createProductPromoCode = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductPromoCode method',
  args:{useLimitPerCode: {type: GraphQLInt},fromDate: {type: GraphQLString},userEntered: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},createdDate: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},productPromoCodeId: {type: GraphQLString},requireEmailOrParty: {type: GraphQLString},productPromoId: {type: GraphQLString},useLimitPerCustomer: {type: GraphQLInt},createdByUserLogin: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/createProductPromoCode?useLimitPerCode=${args.useLimitPerCode}&fromDate=${args.fromDate}&userEntered=${args.userEntered}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&createdDate=${args.createdDate}&lastModifiedDate=${args.lastModifiedDate}&productPromoCodeId=${args.productPromoCodeId}&requireEmailOrParty=${args.requireEmailOrParty}&productPromoId=${args.productPromoId}&useLimitPerCustomer=${args.useLimitPerCustomer}&createdByUserLogin=${args.createdByUserLogin}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {createProductPromoCode};


const createProductPromoCodeEmail = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductPromoCodeEmail method',
  args:{emailAddress: {type: GraphQLString},productPromoCodeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/createProductPromoCodeEmail?emailAddress=${args.emailAddress}&productPromoCodeId=${args.productPromoCodeId}&`, null, req);
  }
};
export {createProductPromoCodeEmail};


const createProductPromoCodeParty = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductPromoCodeParty method',
  args:{productPromoCodeId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/createProductPromoCodeParty?productPromoCodeId=${args.productPromoCodeId}&partyId=${args.partyId}&`, null, req);
  }
};
export {createProductPromoCodeParty};


const createProductPromoCodeSet = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductPromoCodeSet method',
  args:{quantity: {type: GraphQLInt},useLimitPerCode: {type: GraphQLInt},fromDate: {type: GraphQLString},userEntered: {type: GraphQLString},codeLength: {type: GraphQLInt},promoCodeLayout: {type: GraphQLString},requireEmailOrParty: {type: GraphQLString},productPromoId: {type: GraphQLString},useLimitPerCustomer: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/createProductPromoCodeSet?quantity=${args.quantity}&useLimitPerCode=${args.useLimitPerCode}&fromDate=${args.fromDate}&userEntered=${args.userEntered}&codeLength=${args.codeLength}&promoCodeLayout=${args.promoCodeLayout}&requireEmailOrParty=${args.requireEmailOrParty}&productPromoId=${args.productPromoId}&useLimitPerCustomer=${args.useLimitPerCustomer}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {createProductPromoCodeSet};


const createProductPromoCond = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductPromoCond method',
  args:{productPromoRuleId: {type: GraphQLString},productPromoId: {type: GraphQLString},inputParamEnumId: {type: GraphQLString},condValue: {type: GraphQLString},carrierShipmentMethod: {type: GraphQLString},operatorEnumId: {type: GraphQLString},otherValue: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/createProductPromoCond?productPromoRuleId=${args.productPromoRuleId}&productPromoId=${args.productPromoId}&inputParamEnumId=${args.inputParamEnumId}&condValue=${args.condValue}&carrierShipmentMethod=${args.carrierShipmentMethod}&operatorEnumId=${args.operatorEnumId}&otherValue=${args.otherValue}&`, null, req);
  }
};
export {createProductPromoCond};


const createProductPromoProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductPromoProduct method',
  args:{productId: {type: GraphQLString},productPromoActionSeqId: {type: GraphQLString},productPromoRuleId: {type: GraphQLString},productPromoId: {type: GraphQLString},productPromoCondSeqId: {type: GraphQLString},productPromoApplEnumId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/createProductPromoProduct?productId=${args.productId}&productPromoActionSeqId=${args.productPromoActionSeqId}&productPromoRuleId=${args.productPromoRuleId}&productPromoId=${args.productPromoId}&productPromoCondSeqId=${args.productPromoCondSeqId}&productPromoApplEnumId=${args.productPromoApplEnumId}&`, null, req);
  }
};
export {createProductPromoProduct};


const createProductPromoRule = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductPromoRule method',
  args:{ruleName: {type: GraphQLString},productPromoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/createProductPromoRule?ruleName=${args.ruleName}&productPromoId=${args.productPromoId}&`, null, req);
  }
};
export {createProductPromoRule};


const deleteProductPriceAction = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductPriceAction method',
  args:{productPriceActionSeqId: {type: GraphQLString},productPriceRuleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/deleteProductPriceAction?productPriceActionSeqId=${args.productPriceActionSeqId}&productPriceRuleId=${args.productPriceRuleId}&`, null, req);
  }
};
export {deleteProductPriceAction};


const deleteProductPriceActionType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductPriceActionType method',
  args:{productPriceActionTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/deleteProductPriceActionType?productPriceActionTypeId=${args.productPriceActionTypeId}&`, null, req);
  }
};
export {deleteProductPriceActionType};


const deleteProductPriceAutoNotice = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductPriceAutoNotice method',
  args:{productPriceNoticeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/deleteProductPriceAutoNotice?productPriceNoticeId=${args.productPriceNoticeId}&`, null, req);
  }
};
export {deleteProductPriceAutoNotice};


const deleteProductPriceCond = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductPriceCond method',
  args:{productPriceCondSeqId: {type: GraphQLString},productPriceRuleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/deleteProductPriceCond?productPriceCondSeqId=${args.productPriceCondSeqId}&productPriceRuleId=${args.productPriceRuleId}&`, null, req);
  }
};
export {deleteProductPriceCond};


const deleteProductPriceRule = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductPriceRule method',
  args:{productPriceRuleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/deleteProductPriceRule?productPriceRuleId=${args.productPriceRuleId}&`, null, req);
  }
};
export {deleteProductPriceRule};


const deleteProductPromo = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductPromo method',
  args:{productPromoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/deleteProductPromo?productPromoId=${args.productPromoId}&`, null, req);
  }
};
export {deleteProductPromo};


const deleteProductPromoAction = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductPromoAction method',
  args:{productPromoActionSeqId: {type: GraphQLString},productPromoRuleId: {type: GraphQLString},productPromoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/deleteProductPromoAction?productPromoActionSeqId=${args.productPromoActionSeqId}&productPromoRuleId=${args.productPromoRuleId}&productPromoId=${args.productPromoId}&`, null, req);
  }
};
export {deleteProductPromoAction};


const deleteProductPromoCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductPromoCategory method',
  args:{productCategoryId: {type: GraphQLString},andGroupId: {type: GraphQLString},productPromoActionSeqId: {type: GraphQLString},productPromoRuleId: {type: GraphQLString},productPromoId: {type: GraphQLString},productPromoCondSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/deleteProductPromoCategory?productCategoryId=${args.productCategoryId}&andGroupId=${args.andGroupId}&productPromoActionSeqId=${args.productPromoActionSeqId}&productPromoRuleId=${args.productPromoRuleId}&productPromoId=${args.productPromoId}&productPromoCondSeqId=${args.productPromoCondSeqId}&`, null, req);
  }
};
export {deleteProductPromoCategory};


const deleteProductPromoCode = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductPromoCode method',
  args:{productPromoCodeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/deleteProductPromoCode?productPromoCodeId=${args.productPromoCodeId}&`, null, req);
  }
};
export {deleteProductPromoCode};


const deleteProductPromoCodeEmail = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductPromoCodeEmail method',
  args:{emailAddress: {type: GraphQLString},productPromoCodeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/deleteProductPromoCodeEmail?emailAddress=${args.emailAddress}&productPromoCodeId=${args.productPromoCodeId}&`, null, req);
  }
};
export {deleteProductPromoCodeEmail};


const deleteProductPromoCodeParty = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductPromoCodeParty method',
  args:{productPromoCodeId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/deleteProductPromoCodeParty?productPromoCodeId=${args.productPromoCodeId}&partyId=${args.partyId}&`, null, req);
  }
};
export {deleteProductPromoCodeParty};


const deleteProductPromoCond = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductPromoCond method',
  args:{productPromoRuleId: {type: GraphQLString},productPromoId: {type: GraphQLString},productPromoCondSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/deleteProductPromoCond?productPromoRuleId=${args.productPromoRuleId}&productPromoId=${args.productPromoId}&productPromoCondSeqId=${args.productPromoCondSeqId}&`, null, req);
  }
};
export {deleteProductPromoCond};


const deleteProductPromoProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductPromoProduct method',
  args:{productId: {type: GraphQLString},productPromoActionSeqId: {type: GraphQLString},productPromoRuleId: {type: GraphQLString},productPromoId: {type: GraphQLString},productPromoCondSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/deleteProductPromoProduct?productId=${args.productId}&productPromoActionSeqId=${args.productPromoActionSeqId}&productPromoRuleId=${args.productPromoRuleId}&productPromoId=${args.productPromoId}&productPromoCondSeqId=${args.productPromoCondSeqId}&`, null, req);
  }
};
export {deleteProductPromoProduct};


const deleteProductPromoRule = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductPromoRule method',
  args:{productPromoRuleId: {type: GraphQLString},productPromoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/deleteProductPromoRule?productPromoRuleId=${args.productPromoRuleId}&productPromoId=${args.productPromoId}&`, null, req);
  }
};
export {deleteProductPromoRule};


const getAssociatedPriceRulesConds = {
  type: ResponseType,
  description: 'mutation for ofbiz getAssociatedPriceRulesConds method',
  args:{inputParamEnumId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/getAssociatedPriceRulesConds?inputParamEnumId=${args.inputParamEnumId}&`, null, req);
  }
};
export {getAssociatedPriceRulesConds};


const updateProductPriceAction = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductPriceAction method',
  args:{productPriceActionSeqId: {type: GraphQLString},productPriceRuleId: {type: GraphQLString},amount: {type: GraphQLFloat},productPriceActionTypeId: {type: GraphQLString},rateCode: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/updateProductPriceAction?productPriceActionSeqId=${args.productPriceActionSeqId}&productPriceRuleId=${args.productPriceRuleId}&amount=${args.amount}&productPriceActionTypeId=${args.productPriceActionTypeId}&rateCode=${args.rateCode}&`, null, req);
  }
};
export {updateProductPriceAction};


const updateProductPriceActionType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductPriceActionType method',
  args:{productPriceActionTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/updateProductPriceActionType?productPriceActionTypeId=${args.productPriceActionTypeId}&description=${args.description}&`, null, req);
  }
};
export {updateProductPriceActionType};


const updateProductPriceAutoNotice = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductPriceAutoNotice method',
  args:{productPriceNoticeId: {type: GraphQLString},fromDate: {type: GraphQLString},runDate: {type: GraphQLString},facilityId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/updateProductPriceAutoNotice?productPriceNoticeId=${args.productPriceNoticeId}&fromDate=${args.fromDate}&runDate=${args.runDate}&facilityId=${args.facilityId}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {updateProductPriceAutoNotice};


const updateProductPriceCond = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductPriceCond method',
  args:{productPriceCondSeqId: {type: GraphQLString},productPriceRuleId: {type: GraphQLString},condValueInput: {type: GraphQLString},inputParamEnumId: {type: GraphQLString},condValue: {type: GraphQLString},operatorEnumId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/updateProductPriceCond?productPriceCondSeqId=${args.productPriceCondSeqId}&productPriceRuleId=${args.productPriceRuleId}&condValueInput=${args.condValueInput}&inputParamEnumId=${args.inputParamEnumId}&condValue=${args.condValue}&operatorEnumId=${args.operatorEnumId}&`, null, req);
  }
};
export {updateProductPriceCond};


const updateProductPriceRule = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductPriceRule method',
  args:{productPriceRuleId: {type: GraphQLString},fromDate: {type: GraphQLString},ruleName: {type: GraphQLString},description: {type: GraphQLString},isSale: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/updateProductPriceRule?productPriceRuleId=${args.productPriceRuleId}&fromDate=${args.fromDate}&ruleName=${args.ruleName}&description=${args.description}&isSale=${args.isSale}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {updateProductPriceRule};


const updateProductPromo = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductPromo method',
  args:{productPromoId: {type: GraphQLString},showToCustomer: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},requireCode: {type: GraphQLString},overrideOrgPartyId: {type: GraphQLString},useLimitPerCustomer: {type: GraphQLInt},useLimitPerOrder: {type: GraphQLInt},useLimitPerPromotion: {type: GraphQLInt},promoName: {type: GraphQLString},promoText: {type: GraphQLString},userEntered: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},createdDate: {type: GraphQLString},billbackFactor: {type: GraphQLFloat},createdByUserLogin: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/updateProductPromo?productPromoId=${args.productPromoId}&showToCustomer=${args.showToCustomer}&lastModifiedDate=${args.lastModifiedDate}&requireCode=${args.requireCode}&overrideOrgPartyId=${args.overrideOrgPartyId}&useLimitPerCustomer=${args.useLimitPerCustomer}&useLimitPerOrder=${args.useLimitPerOrder}&useLimitPerPromotion=${args.useLimitPerPromotion}&promoName=${args.promoName}&promoText=${args.promoText}&userEntered=${args.userEntered}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&createdDate=${args.createdDate}&billbackFactor=${args.billbackFactor}&createdByUserLogin=${args.createdByUserLogin}&`, null, req);
  }
};
export {updateProductPromo};


const updateProductPromoAction = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductPromoAction method',
  args:{productPromoActionSeqId: {type: GraphQLString},productPromoRuleId: {type: GraphQLString},productPromoId: {type: GraphQLString},amount: {type: GraphQLFloat},quantity: {type: GraphQLFloat},productId: {type: GraphQLString},orderAdjustmentTypeId: {type: GraphQLString},useCartQuantity: {type: GraphQLString},productPromoActionEnumId: {type: GraphQLString},serviceName: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/updateProductPromoAction?productPromoActionSeqId=${args.productPromoActionSeqId}&productPromoRuleId=${args.productPromoRuleId}&productPromoId=${args.productPromoId}&amount=${args.amount}&quantity=${args.quantity}&productId=${args.productId}&orderAdjustmentTypeId=${args.orderAdjustmentTypeId}&useCartQuantity=${args.useCartQuantity}&productPromoActionEnumId=${args.productPromoActionEnumId}&serviceName=${args.serviceName}&partyId=${args.partyId}&`, null, req);
  }
};
export {updateProductPromoAction};


const updateProductPromoCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductPromoCategory method',
  args:{productCategoryId: {type: GraphQLString},andGroupId: {type: GraphQLString},productPromoActionSeqId: {type: GraphQLString},productPromoRuleId: {type: GraphQLString},productPromoId: {type: GraphQLString},productPromoCondSeqId: {type: GraphQLString},includeSubCategories: {type: GraphQLString},productPromoApplEnumId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/updateProductPromoCategory?productCategoryId=${args.productCategoryId}&andGroupId=${args.andGroupId}&productPromoActionSeqId=${args.productPromoActionSeqId}&productPromoRuleId=${args.productPromoRuleId}&productPromoId=${args.productPromoId}&productPromoCondSeqId=${args.productPromoCondSeqId}&includeSubCategories=${args.includeSubCategories}&productPromoApplEnumId=${args.productPromoApplEnumId}&`, null, req);
  }
};
export {updateProductPromoCategory};


const updateProductPromoCode = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductPromoCode method',
  args:{productPromoCodeId: {type: GraphQLString},useLimitPerCode: {type: GraphQLInt},fromDate: {type: GraphQLString},userEntered: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},createdDate: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},requireEmailOrParty: {type: GraphQLString},productPromoId: {type: GraphQLString},useLimitPerCustomer: {type: GraphQLInt},createdByUserLogin: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/updateProductPromoCode?productPromoCodeId=${args.productPromoCodeId}&useLimitPerCode=${args.useLimitPerCode}&fromDate=${args.fromDate}&userEntered=${args.userEntered}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&createdDate=${args.createdDate}&lastModifiedDate=${args.lastModifiedDate}&requireEmailOrParty=${args.requireEmailOrParty}&productPromoId=${args.productPromoId}&useLimitPerCustomer=${args.useLimitPerCustomer}&createdByUserLogin=${args.createdByUserLogin}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {updateProductPromoCode};


const updateProductPromoCond = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductPromoCond method',
  args:{productPromoRuleId: {type: GraphQLString},productPromoId: {type: GraphQLString},productPromoCondSeqId: {type: GraphQLString},inputParamEnumId: {type: GraphQLString},condValue: {type: GraphQLString},carrierShipmentMethod: {type: GraphQLString},operatorEnumId: {type: GraphQLString},otherValue: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/updateProductPromoCond?productPromoRuleId=${args.productPromoRuleId}&productPromoId=${args.productPromoId}&productPromoCondSeqId=${args.productPromoCondSeqId}&inputParamEnumId=${args.inputParamEnumId}&condValue=${args.condValue}&carrierShipmentMethod=${args.carrierShipmentMethod}&operatorEnumId=${args.operatorEnumId}&otherValue=${args.otherValue}&`, null, req);
  }
};
export {updateProductPromoCond};


const updateProductPromoProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductPromoProduct method',
  args:{productId: {type: GraphQLString},productPromoActionSeqId: {type: GraphQLString},productPromoRuleId: {type: GraphQLString},productPromoId: {type: GraphQLString},productPromoCondSeqId: {type: GraphQLString},productPromoApplEnumId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/updateProductPromoProduct?productId=${args.productId}&productPromoActionSeqId=${args.productPromoActionSeqId}&productPromoRuleId=${args.productPromoRuleId}&productPromoId=${args.productPromoId}&productPromoCondSeqId=${args.productPromoCondSeqId}&productPromoApplEnumId=${args.productPromoApplEnumId}&`, null, req);
  }
};
export {updateProductPromoProduct};


const updateProductPromoRule = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductPromoRule method',
  args:{productPromoRuleId: {type: GraphQLString},ruleName: {type: GraphQLString},productPromoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPricepromo/updateProductPromoRule?productPromoRuleId=${args.productPromoRuleId}&ruleName=${args.ruleName}&productPromoId=${args.productPromoId}&`, null, req);
  }
};
export {updateProductPromoRule};
