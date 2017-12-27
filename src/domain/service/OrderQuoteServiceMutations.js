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


const autoCreateQuoteAdjustments = {
  type: ResponseType,
  description: 'mutation for ofbiz autoCreateQuoteAdjustments method',
  args:{quoteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/autoCreateQuoteAdjustments?quoteId=${args.quoteId}&`, null, req);
  }
};
export {autoCreateQuoteAdjustments};


const autoUpdateQuotePrice = {
  type: ResponseType,
  description: 'mutation for ofbiz autoUpdateQuotePrice method',
  args:{quoteItemSeqId: {type: GraphQLString},quoteId: {type: GraphQLString},defaultQuoteUnitPrice: {type: GraphQLFloat},manualQuoteUnitPrice: {type: GraphQLFloat},averageCost: {type: GraphQLFloat},costToPriceMult: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/autoUpdateQuotePrice?quoteItemSeqId=${args.quoteItemSeqId}&quoteId=${args.quoteId}&defaultQuoteUnitPrice=${args.defaultQuoteUnitPrice}&manualQuoteUnitPrice=${args.manualQuoteUnitPrice}&averageCost=${args.averageCost}&costToPriceMult=${args.costToPriceMult}&`, null, req);
  }
};
export {autoUpdateQuotePrice};


const checkUpdateQuoteStatus = {
  type: ResponseType,
  description: 'mutation for ofbiz checkUpdateQuoteStatus method',
  args:{quoteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/checkUpdateQuoteStatus?quoteId=${args.quoteId}&`, null, req);
  }
};
export {checkUpdateQuoteStatus};


const copyQuote = {
  type: ResponseType,
  description: 'mutation for ofbiz copyQuote method',
  args:{quoteId: {type: GraphQLString},copyQuoteAttributes: {type: GraphQLString},copyQuoteCoefficients: {type: GraphQLString},copyQuoteTerms: {type: GraphQLString},copyQuoteRoles: {type: GraphQLString},copyQuoteItems: {type: GraphQLString},copyQuoteAdjustments: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/copyQuote?quoteId=${args.quoteId}&copyQuoteAttributes=${args.copyQuoteAttributes}&copyQuoteCoefficients=${args.copyQuoteCoefficients}&copyQuoteTerms=${args.copyQuoteTerms}&copyQuoteRoles=${args.copyQuoteRoles}&copyQuoteItems=${args.copyQuoteItems}&copyQuoteAdjustments=${args.copyQuoteAdjustments}&`, null, req);
  }
};
export {copyQuote};


const copyQuoteItem = {
  type: ResponseType,
  description: 'mutation for ofbiz copyQuoteItem method',
  args:{quoteItemSeqId: {type: GraphQLString},quoteId: {type: GraphQLString},workEffortId: {type: GraphQLString},quantity: {type: GraphQLFloat},reservLength: {type: GraphQLFloat},comments: {type: GraphQLString},productId: {type: GraphQLString},reservPersons: {type: GraphQLFloat},quoteIdTo: {type: GraphQLString},deliverableTypeId: {type: GraphQLString},quoteItemSeqIdTo: {type: GraphQLString},productFeatureId: {type: GraphQLString},quoteUnitPrice: {type: GraphQLFloat},uomId: {type: GraphQLString},estimatedDeliveryDate: {type: GraphQLString},isPromo: {type: GraphQLString},custRequestItemSeqId: {type: GraphQLString},copyQuoteAdjustments: {type: GraphQLString},skillTypeId: {type: GraphQLString},reservStart: {type: GraphQLString},configId: {type: GraphQLString},custRequestId: {type: GraphQLString},leadTimeDays: {type: GraphQLInt},selectedAmount: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/copyQuoteItem?quoteItemSeqId=${args.quoteItemSeqId}&quoteId=${args.quoteId}&workEffortId=${args.workEffortId}&quantity=${args.quantity}&reservLength=${args.reservLength}&comments=${args.comments}&productId=${args.productId}&reservPersons=${args.reservPersons}&quoteIdTo=${args.quoteIdTo}&deliverableTypeId=${args.deliverableTypeId}&quoteItemSeqIdTo=${args.quoteItemSeqIdTo}&productFeatureId=${args.productFeatureId}&quoteUnitPrice=${args.quoteUnitPrice}&uomId=${args.uomId}&estimatedDeliveryDate=${args.estimatedDeliveryDate}&isPromo=${args.isPromo}&custRequestItemSeqId=${args.custRequestItemSeqId}&copyQuoteAdjustments=${args.copyQuoteAdjustments}&skillTypeId=${args.skillTypeId}&reservStart=${args.reservStart}&configId=${args.configId}&custRequestId=${args.custRequestId}&leadTimeDays=${args.leadTimeDays}&selectedAmount=${args.selectedAmount}&`, null, req);
  }
};
export {copyQuoteItem};


const createQuote = {
  type: ResponseType,
  description: 'mutation for ofbiz createQuote method',
  args:{quoteTypeId: {type: GraphQLString},currencyUomId: {type: GraphQLString},salesChannelEnumId: {type: GraphQLString},statusId: {type: GraphQLString},validFromDate: {type: GraphQLString},description: {type: GraphQLString},productStoreId: {type: GraphQLString},partyId: {type: GraphQLString},issueDate: {type: GraphQLString},validThruDate: {type: GraphQLString},quoteName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/createQuote?quoteTypeId=${args.quoteTypeId}&currencyUomId=${args.currencyUomId}&salesChannelEnumId=${args.salesChannelEnumId}&statusId=${args.statusId}&validFromDate=${args.validFromDate}&description=${args.description}&productStoreId=${args.productStoreId}&partyId=${args.partyId}&issueDate=${args.issueDate}&validThruDate=${args.validThruDate}&quoteName=${args.quoteName}&`, null, req);
  }
};
export {createQuote};


const createQuoteAdjustment = {
  type: ResponseType,
  description: 'mutation for ofbiz createQuoteAdjustment method',
  args:{quoteAdjustmentTypeId: {type: GraphQLString},quoteId: {type: GraphQLString},customerReferenceId: {type: GraphQLString},amount: {type: GraphQLFloat},correspondingProductId: {type: GraphQLString},comments: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},sourceReferenceId: {type: GraphQLString},quoteItemSeqId: {type: GraphQLString},productPromoRuleId: {type: GraphQLString},productFeatureId: {type: GraphQLString},includeInShipping: {type: GraphQLString},description: {type: GraphQLString},overrideGlAccountId: {type: GraphQLString},exemptAmount: {type: GraphQLFloat},productPromoId: {type: GraphQLString},includeInTax: {type: GraphQLString},taxAuthPartyId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},createdDate: {type: GraphQLString},productPromoActionSeqId: {type: GraphQLString},primaryGeoId: {type: GraphQLString},sourcePercentage: {type: GraphQLFloat},taxAuthGeoId: {type: GraphQLString},secondaryGeoId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/createQuoteAdjustment?quoteAdjustmentTypeId=${args.quoteAdjustmentTypeId}&quoteId=${args.quoteId}&customerReferenceId=${args.customerReferenceId}&amount=${args.amount}&correspondingProductId=${args.correspondingProductId}&comments=${args.comments}&lastModifiedDate=${args.lastModifiedDate}&sourceReferenceId=${args.sourceReferenceId}&quoteItemSeqId=${args.quoteItemSeqId}&productPromoRuleId=${args.productPromoRuleId}&productFeatureId=${args.productFeatureId}&includeInShipping=${args.includeInShipping}&description=${args.description}&overrideGlAccountId=${args.overrideGlAccountId}&exemptAmount=${args.exemptAmount}&productPromoId=${args.productPromoId}&includeInTax=${args.includeInTax}&taxAuthPartyId=${args.taxAuthPartyId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&createdDate=${args.createdDate}&productPromoActionSeqId=${args.productPromoActionSeqId}&primaryGeoId=${args.primaryGeoId}&sourcePercentage=${args.sourcePercentage}&taxAuthGeoId=${args.taxAuthGeoId}&secondaryGeoId=${args.secondaryGeoId}&createdByUserLogin=${args.createdByUserLogin}&`, null, req);
  }
};
export {createQuoteAdjustment};


const createQuoteAndQuoteItemForRequest = {
  type: ResponseType,
  description: 'mutation for ofbiz createQuoteAndQuoteItemForRequest method',
  args:{custRequestId: {type: GraphQLString},workEffortId: {type: GraphQLString},quantity: {type: GraphQLFloat},reservLength: {type: GraphQLFloat},comments: {type: GraphQLString},productId: {type: GraphQLString},reservPersons: {type: GraphQLFloat},deliverableTypeId: {type: GraphQLString},productFeatureId: {type: GraphQLString},quoteUnitPrice: {type: GraphQLFloat},uomId: {type: GraphQLString},estimatedDeliveryDate: {type: GraphQLString},isPromo: {type: GraphQLString},custRequestItemSeqId: {type: GraphQLString},skillTypeId: {type: GraphQLString},reservStart: {type: GraphQLString},configId: {type: GraphQLString},leadTimeDays: {type: GraphQLInt},selectedAmount: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/createQuoteAndQuoteItemForRequest?custRequestId=${args.custRequestId}&workEffortId=${args.workEffortId}&quantity=${args.quantity}&reservLength=${args.reservLength}&comments=${args.comments}&productId=${args.productId}&reservPersons=${args.reservPersons}&deliverableTypeId=${args.deliverableTypeId}&productFeatureId=${args.productFeatureId}&quoteUnitPrice=${args.quoteUnitPrice}&uomId=${args.uomId}&estimatedDeliveryDate=${args.estimatedDeliveryDate}&isPromo=${args.isPromo}&custRequestItemSeqId=${args.custRequestItemSeqId}&skillTypeId=${args.skillTypeId}&reservStart=${args.reservStart}&configId=${args.configId}&leadTimeDays=${args.leadTimeDays}&selectedAmount=${args.selectedAmount}&`, null, req);
  }
};
export {createQuoteAndQuoteItemForRequest};


const createQuoteAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz createQuoteAttribute method',
  args:{quoteId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/createQuoteAttribute?quoteId=${args.quoteId}&attrName=${args.attrName}&attrDescription=${args.attrDescription}&attrValue=${args.attrValue}&`, null, req);
  }
};
export {createQuoteAttribute};


const createQuoteCoefficient = {
  type: ResponseType,
  description: 'mutation for ofbiz createQuoteCoefficient method',
  args:{coeffName: {type: GraphQLString},quoteId: {type: GraphQLString},coeffValue: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/createQuoteCoefficient?coeffName=${args.coeffName}&quoteId=${args.quoteId}&coeffValue=${args.coeffValue}&`, null, req);
  }
};
export {createQuoteCoefficient};


const createQuoteFromCart = {
  type: ResponseType,
  description: 'mutation for ofbiz createQuoteFromCart method',
  args:{cart: {type: GraphQLString},applyStorePromotions: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/createQuoteFromCart?cart=${args.cart}&applyStorePromotions=${args.applyStorePromotions}&`, null, req);
  }
};
export {createQuoteFromCart};


const createQuoteFromCustRequest = {
  type: ResponseType,
  description: 'mutation for ofbiz createQuoteFromCustRequest method',
  args:{custRequestId: {type: GraphQLString},quoteTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/createQuoteFromCustRequest?custRequestId=${args.custRequestId}&quoteTypeId=${args.quoteTypeId}&`, null, req);
  }
};
export {createQuoteFromCustRequest};


const createQuoteFromShoppingList = {
  type: ResponseType,
  description: 'mutation for ofbiz createQuoteFromShoppingList method',
  args:{shoppingListId: {type: GraphQLString},applyStorePromotions: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/createQuoteFromShoppingList?shoppingListId=${args.shoppingListId}&applyStorePromotions=${args.applyStorePromotions}&`, null, req);
  }
};
export {createQuoteFromShoppingList};


const createQuoteItem = {
  type: ResponseType,
  description: 'mutation for ofbiz createQuoteItem method',
  args:{workEffortId: {type: GraphQLString},quantity: {type: GraphQLFloat},reservLength: {type: GraphQLFloat},comments: {type: GraphQLString},productId: {type: GraphQLString},reservPersons: {type: GraphQLFloat},deliverableTypeId: {type: GraphQLString},quoteItemSeqId: {type: GraphQLString},productFeatureId: {type: GraphQLString},quoteUnitPrice: {type: GraphQLFloat},uomId: {type: GraphQLString},estimatedDeliveryDate: {type: GraphQLString},isPromo: {type: GraphQLString},quoteId: {type: GraphQLString},custRequestItemSeqId: {type: GraphQLString},skillTypeId: {type: GraphQLString},reservStart: {type: GraphQLString},configId: {type: GraphQLString},custRequestId: {type: GraphQLString},leadTimeDays: {type: GraphQLInt},selectedAmount: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/createQuoteItem?workEffortId=${args.workEffortId}&quantity=${args.quantity}&reservLength=${args.reservLength}&comments=${args.comments}&productId=${args.productId}&reservPersons=${args.reservPersons}&deliverableTypeId=${args.deliverableTypeId}&quoteItemSeqId=${args.quoteItemSeqId}&productFeatureId=${args.productFeatureId}&quoteUnitPrice=${args.quoteUnitPrice}&uomId=${args.uomId}&estimatedDeliveryDate=${args.estimatedDeliveryDate}&isPromo=${args.isPromo}&quoteId=${args.quoteId}&custRequestItemSeqId=${args.custRequestItemSeqId}&skillTypeId=${args.skillTypeId}&reservStart=${args.reservStart}&configId=${args.configId}&custRequestId=${args.custRequestId}&leadTimeDays=${args.leadTimeDays}&selectedAmount=${args.selectedAmount}&`, null, req);
  }
};
export {createQuoteItem};


const createQuoteNote = {
  type: ResponseType,
  description: 'mutation for ofbiz createQuoteNote method',
  args:{noteInfo: {type: GraphQLString},quoteId: {type: GraphQLString},noteName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/createQuoteNote?noteInfo=${args.noteInfo}&quoteId=${args.quoteId}&noteName=${args.noteName}&`, null, req);
  }
};
export {createQuoteNote};


const createQuoteRole = {
  type: ResponseType,
  description: 'mutation for ofbiz createQuoteRole method',
  args:{roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString},quoteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/createQuoteRole?roleTypeId=${args.roleTypeId}&partyId=${args.partyId}&quoteId=${args.quoteId}&`, null, req);
  }
};
export {createQuoteRole};


const createQuoteTermAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz createQuoteTermAttribute method',
  args:{quoteItemSeqId: {type: GraphQLString},termTypeId: {type: GraphQLString},quoteId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/createQuoteTermAttribute?quoteItemSeqId=${args.quoteItemSeqId}&termTypeId=${args.termTypeId}&quoteId=${args.quoteId}&attrName=${args.attrName}&attrDescription=${args.attrDescription}&attrValue=${args.attrValue}&`, null, req);
  }
};
export {createQuoteTermAttribute};


const createQuoteType = {
  type: ResponseType,
  description: 'mutation for ofbiz createQuoteType method',
  args:{quoteTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/createQuoteType?quoteTypeId=${args.quoteTypeId}&parentTypeId=${args.parentTypeId}&hasTable=${args.hasTable}&description=${args.description}&`, null, req);
  }
};
export {createQuoteType};


const createQuoteTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz createQuoteTypeAttr method',
  args:{quoteTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/createQuoteTypeAttr?quoteTypeId=${args.quoteTypeId}&attrName=${args.attrName}&description=${args.description}&`, null, req);
  }
};
export {createQuoteTypeAttr};


const createQuoteWorkEffort = {
  type: ResponseType,
  description: 'mutation for ofbiz createQuoteWorkEffort method',
  args:{workEffortId: {type: GraphQLString},quoteId: {type: GraphQLString},recurrenceInfoId: {type: GraphQLString},workEffortTypeId: {type: GraphQLString},reservPersons: {type: GraphQLFloat},revisionNumber: {type: GraphQLInt},tempExprId: {type: GraphQLString},showAsEnumId: {type: GraphQLString},infoUrl: {type: GraphQLString},universalId: {type: GraphQLString},locationDesc: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},actualMilliSeconds: {type: GraphQLFloat},quantityToProduce: {type: GraphQLFloat},workEffortPurposeTypeId: {type: GraphQLString},serviceLoaderName: {type: GraphQLString},accommodationSpotId: {type: GraphQLString},estimatedStartDate: {type: GraphQLString},sendNotificationEmail: {type: GraphQLString},noteId: {type: GraphQLString},quantityRejected: {type: GraphQLFloat},priority: {type: GraphQLInt},currentStatusId: {type: GraphQLString},runtimeDataId: {type: GraphQLString},estimatedMilliSeconds: {type: GraphQLFloat},specialTerms: {type: GraphQLString},timeTransparency: {type: GraphQLInt},actualCompletionDate: {type: GraphQLString},fixedAssetId: {type: GraphQLString},reserv2ndPPPerc: {type: GraphQLFloat},totalMoneyAllowed: {type: GraphQLFloat},estimateCalcMethod: {type: GraphQLString},workEffortParentId: {type: GraphQLString},description: {type: GraphQLString},moneyUomId: {type: GraphQLString},reservNthPPPerc: {type: GraphQLFloat},workEffortName: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},accommodationMapId: {type: GraphQLString},actualStartDate: {type: GraphQLString},scopeEnumId: {type: GraphQLString},quantityProduced: {type: GraphQLFloat},facilityId: {type: GraphQLString},estimatedSetupMillis: {type: GraphQLFloat},lastModifiedDate: {type: GraphQLString},sourceReferenceId: {type: GraphQLString},lastStatusUpdate: {type: GraphQLString},percentComplete: {type: GraphQLInt},totalMilliSecondsAllowed: {type: GraphQLFloat},createdDate: {type: GraphQLString},actualSetupMillis: {type: GraphQLFloat},estimatedCompletionDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/createQuoteWorkEffort?workEffortId=${args.workEffortId}&quoteId=${args.quoteId}&recurrenceInfoId=${args.recurrenceInfoId}&workEffortTypeId=${args.workEffortTypeId}&reservPersons=${args.reservPersons}&revisionNumber=${args.revisionNumber}&tempExprId=${args.tempExprId}&showAsEnumId=${args.showAsEnumId}&infoUrl=${args.infoUrl}&universalId=${args.universalId}&locationDesc=${args.locationDesc}&createdByUserLogin=${args.createdByUserLogin}&actualMilliSeconds=${args.actualMilliSeconds}&quantityToProduce=${args.quantityToProduce}&workEffortPurposeTypeId=${args.workEffortPurposeTypeId}&serviceLoaderName=${args.serviceLoaderName}&accommodationSpotId=${args.accommodationSpotId}&estimatedStartDate=${args.estimatedStartDate}&sendNotificationEmail=${args.sendNotificationEmail}&noteId=${args.noteId}&quantityRejected=${args.quantityRejected}&priority=${args.priority}&currentStatusId=${args.currentStatusId}&runtimeDataId=${args.runtimeDataId}&estimatedMilliSeconds=${args.estimatedMilliSeconds}&specialTerms=${args.specialTerms}&timeTransparency=${args.timeTransparency}&actualCompletionDate=${args.actualCompletionDate}&fixedAssetId=${args.fixedAssetId}&reserv2ndPPPerc=${args.reserv2ndPPPerc}&totalMoneyAllowed=${args.totalMoneyAllowed}&estimateCalcMethod=${args.estimateCalcMethod}&workEffortParentId=${args.workEffortParentId}&description=${args.description}&moneyUomId=${args.moneyUomId}&reservNthPPPerc=${args.reservNthPPPerc}&workEffortName=${args.workEffortName}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&accommodationMapId=${args.accommodationMapId}&actualStartDate=${args.actualStartDate}&scopeEnumId=${args.scopeEnumId}&quantityProduced=${args.quantityProduced}&facilityId=${args.facilityId}&estimatedSetupMillis=${args.estimatedSetupMillis}&lastModifiedDate=${args.lastModifiedDate}&sourceReferenceId=${args.sourceReferenceId}&lastStatusUpdate=${args.lastStatusUpdate}&percentComplete=${args.percentComplete}&totalMilliSecondsAllowed=${args.totalMilliSecondsAllowed}&createdDate=${args.createdDate}&actualSetupMillis=${args.actualSetupMillis}&estimatedCompletionDate=${args.estimatedCompletionDate}&`, null, req);
  }
};
export {createQuoteWorkEffort};


const deleteQuoteTermAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteQuoteTermAttribute method',
  args:{quoteItemSeqId: {type: GraphQLString},termTypeId: {type: GraphQLString},quoteId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/deleteQuoteTermAttribute?quoteItemSeqId=${args.quoteItemSeqId}&termTypeId=${args.termTypeId}&quoteId=${args.quoteId}&attrName=${args.attrName}&`, null, req);
  }
};
export {deleteQuoteTermAttribute};


const deleteQuoteType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteQuoteType method',
  args:{quoteTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/deleteQuoteType?quoteTypeId=${args.quoteTypeId}&`, null, req);
  }
};
export {deleteQuoteType};


const deleteQuoteTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteQuoteTypeAttr method',
  args:{quoteTypeId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/deleteQuoteTypeAttr?quoteTypeId=${args.quoteTypeId}&attrName=${args.attrName}&`, null, req);
  }
};
export {deleteQuoteTypeAttr};


const deleteQuoteWorkEffort = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteQuoteWorkEffort method',
  args:{workEffortId: {type: GraphQLString},quoteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/deleteQuoteWorkEffort?workEffortId=${args.workEffortId}&quoteId=${args.quoteId}&`, null, req);
  }
};
export {deleteQuoteWorkEffort};


const getNextQuoteId = {
  type: ResponseType,
  description: 'mutation for ofbiz getNextQuoteId method',
  args:{quoteTypeId: {type: GraphQLString},currencyUomId: {type: GraphQLString},salesChannelEnumId: {type: GraphQLString},statusId: {type: GraphQLString},validFromDate: {type: GraphQLString},description: {type: GraphQLString},productStoreId: {type: GraphQLString},partyId: {type: GraphQLString},issueDate: {type: GraphQLString},validThruDate: {type: GraphQLString},quoteName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/getNextQuoteId?quoteTypeId=${args.quoteTypeId}&currencyUomId=${args.currencyUomId}&salesChannelEnumId=${args.salesChannelEnumId}&statusId=${args.statusId}&validFromDate=${args.validFromDate}&description=${args.description}&productStoreId=${args.productStoreId}&partyId=${args.partyId}&issueDate=${args.issueDate}&validThruDate=${args.validThruDate}&quoteName=${args.quoteName}&`, null, req);
  }
};
export {getNextQuoteId};


const quoteSequenceEnforced = {
  type: ResponseType,
  description: 'mutation for ofbiz quoteSequenceEnforced method',
  args:{partyAcctgPreference: {type: new GraphQLList(KeyValueInputType)},quoteTypeId: {type: GraphQLString},currencyUomId: {type: GraphQLString},salesChannelEnumId: {type: GraphQLString},statusId: {type: GraphQLString},validFromDate: {type: GraphQLString},description: {type: GraphQLString},productStoreId: {type: GraphQLString},partyId: {type: GraphQLString},issueDate: {type: GraphQLString},validThruDate: {type: GraphQLString},quoteName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/quoteSequenceEnforced?partyAcctgPreference=${args.partyAcctgPreference}&quoteTypeId=${args.quoteTypeId}&currencyUomId=${args.currencyUomId}&salesChannelEnumId=${args.salesChannelEnumId}&statusId=${args.statusId}&validFromDate=${args.validFromDate}&description=${args.description}&productStoreId=${args.productStoreId}&partyId=${args.partyId}&issueDate=${args.issueDate}&validThruDate=${args.validThruDate}&quoteName=${args.quoteName}&`, null, req);
  }
};
export {quoteSequenceEnforced};


const removeQuoteAdjustment = {
  type: ResponseType,
  description: 'mutation for ofbiz removeQuoteAdjustment method',
  args:{customerReferenceId: {type: GraphQLString},correspondingProductId: {type: GraphQLString},includeInShipping: {type: GraphQLString},description: {type: GraphQLString},exemptAmount: {type: GraphQLFloat},productPromoId: {type: GraphQLString},taxAuthPartyId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},quoteAdjustmentId: {type: GraphQLString},primaryGeoId: {type: GraphQLString},taxAuthGeoId: {type: GraphQLString},secondaryGeoId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},amount: {type: GraphQLFloat},comments: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},sourceReferenceId: {type: GraphQLString},quoteItemSeqId: {type: GraphQLString},productPromoRuleId: {type: GraphQLString},productFeatureId: {type: GraphQLString},overrideGlAccountId: {type: GraphQLString},quoteId: {type: GraphQLString},includeInTax: {type: GraphQLString},quoteAdjustmentTypeId: {type: GraphQLString},createdDate: {type: GraphQLString},productPromoActionSeqId: {type: GraphQLString},sourcePercentage: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/removeQuoteAdjustment?customerReferenceId=${args.customerReferenceId}&correspondingProductId=${args.correspondingProductId}&includeInShipping=${args.includeInShipping}&description=${args.description}&exemptAmount=${args.exemptAmount}&productPromoId=${args.productPromoId}&taxAuthPartyId=${args.taxAuthPartyId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&quoteAdjustmentId=${args.quoteAdjustmentId}&primaryGeoId=${args.primaryGeoId}&taxAuthGeoId=${args.taxAuthGeoId}&secondaryGeoId=${args.secondaryGeoId}&createdByUserLogin=${args.createdByUserLogin}&amount=${args.amount}&comments=${args.comments}&lastModifiedDate=${args.lastModifiedDate}&sourceReferenceId=${args.sourceReferenceId}&quoteItemSeqId=${args.quoteItemSeqId}&productPromoRuleId=${args.productPromoRuleId}&productFeatureId=${args.productFeatureId}&overrideGlAccountId=${args.overrideGlAccountId}&quoteId=${args.quoteId}&includeInTax=${args.includeInTax}&quoteAdjustmentTypeId=${args.quoteAdjustmentTypeId}&createdDate=${args.createdDate}&productPromoActionSeqId=${args.productPromoActionSeqId}&sourcePercentage=${args.sourcePercentage}&`, null, req);
  }
};
export {removeQuoteAdjustment};


const removeQuoteAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz removeQuoteAttribute method',
  args:{attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt},quoteId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/removeQuoteAttribute?attrDescription=${args.attrDescription}&attrValue=${args.attrValue}&quoteId=${args.quoteId}&attrName=${args.attrName}&`, null, req);
  }
};
export {removeQuoteAttribute};


const removeQuoteCoefficient = {
  type: ResponseType,
  description: 'mutation for ofbiz removeQuoteCoefficient method',
  args:{coeffValue: {type: GraphQLFloat},coeffName: {type: GraphQLString},quoteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/removeQuoteCoefficient?coeffValue=${args.coeffValue}&coeffName=${args.coeffName}&quoteId=${args.quoteId}&`, null, req);
  }
};
export {removeQuoteCoefficient};


const removeQuoteItem = {
  type: ResponseType,
  description: 'mutation for ofbiz removeQuoteItem method',
  args:{workEffortId: {type: GraphQLString},quantity: {type: GraphQLFloat},reservLength: {type: GraphQLFloat},comments: {type: GraphQLString},productId: {type: GraphQLString},reservPersons: {type: GraphQLFloat},deliverableTypeId: {type: GraphQLString},quoteItemSeqId: {type: GraphQLString},productFeatureId: {type: GraphQLString},quoteUnitPrice: {type: GraphQLFloat},uomId: {type: GraphQLString},estimatedDeliveryDate: {type: GraphQLString},isPromo: {type: GraphQLString},quoteId: {type: GraphQLString},custRequestItemSeqId: {type: GraphQLString},skillTypeId: {type: GraphQLString},reservStart: {type: GraphQLString},configId: {type: GraphQLString},custRequestId: {type: GraphQLString},leadTimeDays: {type: GraphQLInt},selectedAmount: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/removeQuoteItem?workEffortId=${args.workEffortId}&quantity=${args.quantity}&reservLength=${args.reservLength}&comments=${args.comments}&productId=${args.productId}&reservPersons=${args.reservPersons}&deliverableTypeId=${args.deliverableTypeId}&quoteItemSeqId=${args.quoteItemSeqId}&productFeatureId=${args.productFeatureId}&quoteUnitPrice=${args.quoteUnitPrice}&uomId=${args.uomId}&estimatedDeliveryDate=${args.estimatedDeliveryDate}&isPromo=${args.isPromo}&quoteId=${args.quoteId}&custRequestItemSeqId=${args.custRequestItemSeqId}&skillTypeId=${args.skillTypeId}&reservStart=${args.reservStart}&configId=${args.configId}&custRequestId=${args.custRequestId}&leadTimeDays=${args.leadTimeDays}&selectedAmount=${args.selectedAmount}&`, null, req);
  }
};
export {removeQuoteItem};


const removeQuoteRole = {
  type: ResponseType,
  description: 'mutation for ofbiz removeQuoteRole method',
  args:{fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString},quoteId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/removeQuoteRole?fromDate=${args.fromDate}&roleTypeId=${args.roleTypeId}&partyId=${args.partyId}&quoteId=${args.quoteId}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {removeQuoteRole};


const sendQuoteReportMail = {
  type: ResponseType,
  description: 'mutation for ofbiz sendQuoteReportMail method',
  args:{sendTo: {type: GraphQLString},emailType: {type: GraphQLString},quoteId: {type: GraphQLString},note: {type: GraphQLString},sendCc: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/sendQuoteReportMail?sendTo=${args.sendTo}&emailType=${args.emailType}&quoteId=${args.quoteId}&note=${args.note}&sendCc=${args.sendCc}&`, null, req);
  }
};
export {sendQuoteReportMail};


const storeQuote = {
  type: ResponseType,
  description: 'mutation for ofbiz storeQuote method',
  args:{salesChannelEnumId: {type: GraphQLString},description: {type: GraphQLString},validThruDate: {type: GraphQLString},quoteTypeId: {type: GraphQLString},currencyUomId: {type: GraphQLString},statusId: {type: GraphQLString},validFromDate: {type: GraphQLString},productStoreId: {type: GraphQLString},partyId: {type: GraphQLString},issueDate: {type: GraphQLString},quoteName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/storeQuote?salesChannelEnumId=${args.salesChannelEnumId}&quoteTerms=${args.quoteTerms}&quoteWorkEfforts=${args.quoteWorkEfforts}&description=${args.description}&quoteAttributes=${args.quoteAttributes}&validThruDate=${args.validThruDate}&quoteTypeId=${args.quoteTypeId}&currencyUomId=${args.currencyUomId}&quoteAdjustments=${args.quoteAdjustments}&statusId=${args.statusId}&quoteCoefficients=${args.quoteCoefficients}&validFromDate=${args.validFromDate}&quoteRoles=${args.quoteRoles}&quoteTermAttributes=${args.quoteTermAttributes}&productStoreId=${args.productStoreId}&partyId=${args.partyId}&issueDate=${args.issueDate}&quoteName=${args.quoteName}&quoteItems=${args.quoteItems}&`, null, req);
  }
};
export {storeQuote};


const updateQuote = {
  type: ResponseType,
  description: 'mutation for ofbiz updateQuote method',
  args:{quoteId: {type: GraphQLString},quoteTypeId: {type: GraphQLString},currencyUomId: {type: GraphQLString},salesChannelEnumId: {type: GraphQLString},statusId: {type: GraphQLString},validFromDate: {type: GraphQLString},description: {type: GraphQLString},productStoreId: {type: GraphQLString},partyId: {type: GraphQLString},issueDate: {type: GraphQLString},validThruDate: {type: GraphQLString},quoteName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/updateQuote?quoteId=${args.quoteId}&quoteTypeId=${args.quoteTypeId}&currencyUomId=${args.currencyUomId}&salesChannelEnumId=${args.salesChannelEnumId}&statusId=${args.statusId}&validFromDate=${args.validFromDate}&description=${args.description}&productStoreId=${args.productStoreId}&partyId=${args.partyId}&issueDate=${args.issueDate}&validThruDate=${args.validThruDate}&quoteName=${args.quoteName}&`, null, req);
  }
};
export {updateQuote};


const updateQuoteAdjustment = {
  type: ResponseType,
  description: 'mutation for ofbiz updateQuoteAdjustment method',
  args:{customerReferenceId: {type: GraphQLString},correspondingProductId: {type: GraphQLString},includeInShipping: {type: GraphQLString},description: {type: GraphQLString},exemptAmount: {type: GraphQLFloat},productPromoId: {type: GraphQLString},taxAuthPartyId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},quoteAdjustmentId: {type: GraphQLString},primaryGeoId: {type: GraphQLString},taxAuthGeoId: {type: GraphQLString},secondaryGeoId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},amount: {type: GraphQLFloat},comments: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},sourceReferenceId: {type: GraphQLString},quoteItemSeqId: {type: GraphQLString},productPromoRuleId: {type: GraphQLString},productFeatureId: {type: GraphQLString},overrideGlAccountId: {type: GraphQLString},quoteId: {type: GraphQLString},includeInTax: {type: GraphQLString},quoteAdjustmentTypeId: {type: GraphQLString},createdDate: {type: GraphQLString},productPromoActionSeqId: {type: GraphQLString},sourcePercentage: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/updateQuoteAdjustment?customerReferenceId=${args.customerReferenceId}&correspondingProductId=${args.correspondingProductId}&includeInShipping=${args.includeInShipping}&description=${args.description}&exemptAmount=${args.exemptAmount}&productPromoId=${args.productPromoId}&taxAuthPartyId=${args.taxAuthPartyId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&quoteAdjustmentId=${args.quoteAdjustmentId}&primaryGeoId=${args.primaryGeoId}&taxAuthGeoId=${args.taxAuthGeoId}&secondaryGeoId=${args.secondaryGeoId}&createdByUserLogin=${args.createdByUserLogin}&amount=${args.amount}&comments=${args.comments}&lastModifiedDate=${args.lastModifiedDate}&sourceReferenceId=${args.sourceReferenceId}&quoteItemSeqId=${args.quoteItemSeqId}&productPromoRuleId=${args.productPromoRuleId}&productFeatureId=${args.productFeatureId}&overrideGlAccountId=${args.overrideGlAccountId}&quoteId=${args.quoteId}&includeInTax=${args.includeInTax}&quoteAdjustmentTypeId=${args.quoteAdjustmentTypeId}&createdDate=${args.createdDate}&productPromoActionSeqId=${args.productPromoActionSeqId}&sourcePercentage=${args.sourcePercentage}&`, null, req);
  }
};
export {updateQuoteAdjustment};


const updateQuoteAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz updateQuoteAttribute method',
  args:{attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt},quoteId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/updateQuoteAttribute?attrDescription=${args.attrDescription}&attrValue=${args.attrValue}&quoteId=${args.quoteId}&attrName=${args.attrName}&`, null, req);
  }
};
export {updateQuoteAttribute};


const updateQuoteCoefficient = {
  type: ResponseType,
  description: 'mutation for ofbiz updateQuoteCoefficient method',
  args:{coeffValue: {type: GraphQLFloat},coeffName: {type: GraphQLString},quoteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/updateQuoteCoefficient?coeffValue=${args.coeffValue}&coeffName=${args.coeffName}&quoteId=${args.quoteId}&`, null, req);
  }
};
export {updateQuoteCoefficient};


const updateQuoteItem = {
  type: ResponseType,
  description: 'mutation for ofbiz updateQuoteItem method',
  args:{workEffortId: {type: GraphQLString},quantity: {type: GraphQLFloat},reservLength: {type: GraphQLFloat},comments: {type: GraphQLString},productId: {type: GraphQLString},reservPersons: {type: GraphQLFloat},deliverableTypeId: {type: GraphQLString},quoteItemSeqId: {type: GraphQLString},productFeatureId: {type: GraphQLString},quoteUnitPrice: {type: GraphQLFloat},uomId: {type: GraphQLString},estimatedDeliveryDate: {type: GraphQLString},isPromo: {type: GraphQLString},quoteId: {type: GraphQLString},custRequestItemSeqId: {type: GraphQLString},skillTypeId: {type: GraphQLString},reservStart: {type: GraphQLString},configId: {type: GraphQLString},custRequestId: {type: GraphQLString},leadTimeDays: {type: GraphQLInt},selectedAmount: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/updateQuoteItem?workEffortId=${args.workEffortId}&quantity=${args.quantity}&reservLength=${args.reservLength}&comments=${args.comments}&productId=${args.productId}&reservPersons=${args.reservPersons}&deliverableTypeId=${args.deliverableTypeId}&quoteItemSeqId=${args.quoteItemSeqId}&productFeatureId=${args.productFeatureId}&quoteUnitPrice=${args.quoteUnitPrice}&uomId=${args.uomId}&estimatedDeliveryDate=${args.estimatedDeliveryDate}&isPromo=${args.isPromo}&quoteId=${args.quoteId}&custRequestItemSeqId=${args.custRequestItemSeqId}&skillTypeId=${args.skillTypeId}&reservStart=${args.reservStart}&configId=${args.configId}&custRequestId=${args.custRequestId}&leadTimeDays=${args.leadTimeDays}&selectedAmount=${args.selectedAmount}&`, null, req);
  }
};
export {updateQuoteItem};


const updateQuoteTermAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz updateQuoteTermAttribute method',
  args:{quoteItemSeqId: {type: GraphQLString},termTypeId: {type: GraphQLString},quoteId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/updateQuoteTermAttribute?quoteItemSeqId=${args.quoteItemSeqId}&termTypeId=${args.termTypeId}&quoteId=${args.quoteId}&attrName=${args.attrName}&attrDescription=${args.attrDescription}&attrValue=${args.attrValue}&`, null, req);
  }
};
export {updateQuoteTermAttribute};


const updateQuoteType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateQuoteType method',
  args:{quoteTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/updateQuoteType?quoteTypeId=${args.quoteTypeId}&parentTypeId=${args.parentTypeId}&hasTable=${args.hasTable}&description=${args.description}&`, null, req);
  }
};
export {updateQuoteType};


const updateQuoteTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz updateQuoteTypeAttr method',
  args:{quoteTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderQuote/updateQuoteTypeAttr?quoteTypeId=${args.quoteTypeId}&attrName=${args.attrName}&description=${args.description}&`, null, req);
  }
};
export {updateQuoteTypeAttr};
