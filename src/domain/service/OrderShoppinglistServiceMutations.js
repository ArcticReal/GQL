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


const addDistinctShoppingListItem = {
  type: ResponseType,
  description: 'mutation for ofbiz addDistinctShoppingListItem method',
  args:{shoppingListId: {type: GraphQLString},quantity: {type: GraphQLFloat},reservLength: {type: GraphQLFloat},productId: {type: GraphQLString},reservPersons: {type: GraphQLFloat},reservStart: {type: GraphQLString},configId: {type: GraphQLString},quantityPurchased: {type: GraphQLFloat},productStoreId: {type: GraphQLString},modifiedPrice: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderShoppinglist/addDistinctShoppingListItem?shoppingListId=${args.shoppingListId}&quantity=${args.quantity}&reservLength=${args.reservLength}&productId=${args.productId}&reservPersons=${args.reservPersons}&reservStart=${args.reservStart}&configId=${args.configId}&quantityPurchased=${args.quantityPurchased}&productStoreId=${args.productStoreId}&modifiedPrice=${args.modifiedPrice}&`, null, req);
  }
};
export {addDistinctShoppingListItem};


const addSuggestionsToShoppingList = {
  type: ResponseType,
  description: 'mutation for ofbiz addSuggestionsToShoppingList method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderShoppinglist/addSuggestionsToShoppingList?orderId=${args.orderId}&`, null, req);
  }
};
export {addSuggestionsToShoppingList};


const autoDeleteAutoSaveShoppingList = {
  type: ResponseType,
  description: 'mutation for ofbiz autoDeleteAutoSaveShoppingList method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderShoppinglist/autoDeleteAutoSaveShoppingList?`, null, req);
  }
};
export {autoDeleteAutoSaveShoppingList};


const calculateShoppingListDeepTotalPrice = {
  type: ResponseType,
  description: 'mutation for ofbiz calculateShoppingListDeepTotalPrice method',
  args:{shoppingListId: {type: GraphQLString},prodCatalogId: {type: GraphQLString},webSiteId: {type: GraphQLString},autoUserLogin: {type: new GraphQLList(KeyValueInputType)},quantity: {type: GraphQLFloat},currencyUomId: {type: GraphQLString},productStoreId: {type: GraphQLString},partyId: {type: GraphQLString},productStoreGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderShoppinglist/calculateShoppingListDeepTotalPrice?shoppingListId=${args.shoppingListId}&prodCatalogId=${args.prodCatalogId}&webSiteId=${args.webSiteId}&autoUserLogin=${args.autoUserLogin}&quantity=${args.quantity}&currencyUomId=${args.currencyUomId}&productStoreId=${args.productStoreId}&partyId=${args.partyId}&productStoreGroupId=${args.productStoreGroupId}&`, null, req);
  }
};
export {calculateShoppingListDeepTotalPrice};


const createShoppingList = {
  type: ResponseType,
  description: 'mutation for ofbiz createShoppingList method',
  args:{intervalNumber: {type: GraphQLInt},recurrenceInfoId: {type: GraphQLString},parentShoppingListId: {type: GraphQLString},productPromoCodeId: {type: GraphQLString},description: {type: GraphQLString},endDateTime: {type: GraphQLString},isActive: {type: GraphQLString},shoppingListTypeId: {type: GraphQLString},contactMechId: {type: GraphQLString},frequency: {type: GraphQLInt},shippingMethodString: {type: GraphQLString},carrierPartyId: {type: GraphQLString},startDateTime: {type: GraphQLString},currencyUom: {type: GraphQLString},lastOrderedDate: {type: GraphQLString},carrierRoleTypeId: {type: GraphQLString},paymentMethodId: {type: GraphQLString},isPublic: {type: GraphQLString},productStoreId: {type: GraphQLString},listName: {type: GraphQLString},lastAdminModified: {type: GraphQLString},partyId: {type: GraphQLString},shipmentMethodTypeId: {type: GraphQLString},visitorId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderShoppinglist/createShoppingList?intervalNumber=${args.intervalNumber}&recurrenceInfoId=${args.recurrenceInfoId}&parentShoppingListId=${args.parentShoppingListId}&productPromoCodeId=${args.productPromoCodeId}&description=${args.description}&endDateTime=${args.endDateTime}&isActive=${args.isActive}&shoppingListTypeId=${args.shoppingListTypeId}&contactMechId=${args.contactMechId}&frequency=${args.frequency}&shippingMethodString=${args.shippingMethodString}&carrierPartyId=${args.carrierPartyId}&startDateTime=${args.startDateTime}&currencyUom=${args.currencyUom}&lastOrderedDate=${args.lastOrderedDate}&carrierRoleTypeId=${args.carrierRoleTypeId}&paymentMethodId=${args.paymentMethodId}&isPublic=${args.isPublic}&productStoreId=${args.productStoreId}&listName=${args.listName}&lastAdminModified=${args.lastAdminModified}&partyId=${args.partyId}&shipmentMethodTypeId=${args.shipmentMethodTypeId}&visitorId=${args.visitorId}&`, null, req);
  }
};
export {createShoppingList};


const createShoppingListItem = {
  type: ResponseType,
  description: 'mutation for ofbiz createShoppingListItem method',
  args:{shoppingListId: {type: GraphQLString},quantity: {type: GraphQLFloat},reservLength: {type: GraphQLFloat},productId: {type: GraphQLString},reservPersons: {type: GraphQLFloat},reservStart: {type: GraphQLString},configId: {type: GraphQLString},quantityPurchased: {type: GraphQLFloat},productStoreId: {type: GraphQLString},modifiedPrice: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderShoppinglist/createShoppingListItem?shoppingListId=${args.shoppingListId}&quantity=${args.quantity}&reservLength=${args.reservLength}&productId=${args.productId}&reservPersons=${args.reservPersons}&reservStart=${args.reservStart}&configId=${args.configId}&quantityPurchased=${args.quantityPurchased}&productStoreId=${args.productStoreId}&modifiedPrice=${args.modifiedPrice}&`, null, req);
  }
};
export {createShoppingListItem};


const createShoppingListItemSurvey = {
  type: ResponseType,
  description: 'mutation for ofbiz createShoppingListItemSurvey method',
  args:{shoppingListId: {type: GraphQLString},shoppingListItemSeqId: {type: GraphQLString},surveyResponseId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderShoppinglist/createShoppingListItemSurvey?shoppingListId=${args.shoppingListId}&shoppingListItemSeqId=${args.shoppingListItemSeqId}&surveyResponseId=${args.surveyResponseId}&`, null, req);
  }
};
export {createShoppingListItemSurvey};


const createShoppingListRecurrence = {
  type: ResponseType,
  description: 'mutation for ofbiz createShoppingListRecurrence method',
  args:{intervalNumber: {type: GraphQLInt},startDateTime: {type: GraphQLString},endDateTime: {type: GraphQLString},frequency: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderShoppinglist/createShoppingListRecurrence?intervalNumber=${args.intervalNumber}&startDateTime=${args.startDateTime}&endDateTime=${args.endDateTime}&frequency=${args.frequency}&`, null, req);
  }
};
export {createShoppingListRecurrence};


const createShoppingListType = {
  type: ResponseType,
  description: 'mutation for ofbiz createShoppingListType method',
  args:{shoppingListTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderShoppinglist/createShoppingListType?shoppingListTypeId=${args.shoppingListTypeId}&description=${args.description}&`, null, req);
  }
};
export {createShoppingListType};


const deleteShoppingListItemSurvey = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteShoppingListItemSurvey method',
  args:{shoppingListId: {type: GraphQLString},shoppingListItemSeqId: {type: GraphQLString},surveyResponseId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderShoppinglist/deleteShoppingListItemSurvey?shoppingListId=${args.shoppingListId}&shoppingListItemSeqId=${args.shoppingListItemSeqId}&surveyResponseId=${args.surveyResponseId}&`, null, req);
  }
};
export {deleteShoppingListItemSurvey};


const deleteShoppingListType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteShoppingListType method',
  args:{shoppingListTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderShoppinglist/deleteShoppingListType?shoppingListTypeId=${args.shoppingListTypeId}&`, null, req);
  }
};
export {deleteShoppingListType};


const makeShoppingListFromOrder = {
  type: ResponseType,
  description: 'mutation for ofbiz makeShoppingListFromOrder method',
  args:{orderId: {type: GraphQLString},intervalNumber: {type: GraphQLInt},startDateTime: {type: GraphQLString},shoppingListId: {type: GraphQLString},endDateTime: {type: GraphQLString},partyId: {type: GraphQLString},shoppingListTypeId: {type: GraphQLString},frequency: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderShoppinglist/makeShoppingListFromOrder?orderId=${args.orderId}&intervalNumber=${args.intervalNumber}&startDateTime=${args.startDateTime}&shoppingListId=${args.shoppingListId}&endDateTime=${args.endDateTime}&partyId=${args.partyId}&shoppingListTypeId=${args.shoppingListTypeId}&frequency=${args.frequency}&`, null, req);
  }
};
export {makeShoppingListFromOrder};


const removeShoppingList = {
  type: ResponseType,
  description: 'mutation for ofbiz removeShoppingList method',
  args:{shoppingListId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderShoppinglist/removeShoppingList?shoppingListId=${args.shoppingListId}&`, null, req);
  }
};
export {removeShoppingList};


const removeShoppingListItem = {
  type: ResponseType,
  description: 'mutation for ofbiz removeShoppingListItem method',
  args:{shoppingListId: {type: GraphQLString},shoppingListItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderShoppinglist/removeShoppingListItem?shoppingListId=${args.shoppingListId}&shoppingListItemSeqId=${args.shoppingListItemSeqId}&`, null, req);
  }
};
export {removeShoppingListItem};


const runShoppingListAutoReorder = {
  type: ResponseType,
  description: 'mutation for ofbiz runShoppingListAutoReorder method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderShoppinglist/runShoppingListAutoReorder?`, null, req);
  }
};
export {runShoppingListAutoReorder};


const shoppingListInterface = {
  type: ResponseType,
  description: 'mutation for ofbiz shoppingListInterface method',
  args:{recurrenceInfoId: {type: GraphQLString},parentShoppingListId: {type: GraphQLString},productPromoCodeId: {type: GraphQLString},description: {type: GraphQLString},isActive: {type: GraphQLString},shoppingListTypeId: {type: GraphQLString},contactMechId: {type: GraphQLString},shippingMethodString: {type: GraphQLString},carrierPartyId: {type: GraphQLString},currencyUom: {type: GraphQLString},lastOrderedDate: {type: GraphQLString},carrierRoleTypeId: {type: GraphQLString},paymentMethodId: {type: GraphQLString},isPublic: {type: GraphQLString},productStoreId: {type: GraphQLString},listName: {type: GraphQLString},lastAdminModified: {type: GraphQLString},partyId: {type: GraphQLString},shipmentMethodTypeId: {type: GraphQLString},visitorId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderShoppinglist/shoppingListInterface?recurrenceInfoId=${args.recurrenceInfoId}&parentShoppingListId=${args.parentShoppingListId}&productPromoCodeId=${args.productPromoCodeId}&description=${args.description}&isActive=${args.isActive}&shoppingListTypeId=${args.shoppingListTypeId}&contactMechId=${args.contactMechId}&shippingMethodString=${args.shippingMethodString}&carrierPartyId=${args.carrierPartyId}&currencyUom=${args.currencyUom}&lastOrderedDate=${args.lastOrderedDate}&carrierRoleTypeId=${args.carrierRoleTypeId}&paymentMethodId=${args.paymentMethodId}&isPublic=${args.isPublic}&productStoreId=${args.productStoreId}&listName=${args.listName}&lastAdminModified=${args.lastAdminModified}&partyId=${args.partyId}&shipmentMethodTypeId=${args.shipmentMethodTypeId}&visitorId=${args.visitorId}&`, null, req);
  }
};
export {shoppingListInterface};


const shoppingListItemInterface = {
  type: ResponseType,
  description: 'mutation for ofbiz shoppingListItemInterface method',
  args:{shoppingListId: {type: GraphQLString},quantity: {type: GraphQLFloat},reservLength: {type: GraphQLFloat},productId: {type: GraphQLString},reservPersons: {type: GraphQLFloat},reservStart: {type: GraphQLString},configId: {type: GraphQLString},quantityPurchased: {type: GraphQLFloat},modifiedPrice: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderShoppinglist/shoppingListItemInterface?shoppingListId=${args.shoppingListId}&quantity=${args.quantity}&reservLength=${args.reservLength}&productId=${args.productId}&reservPersons=${args.reservPersons}&reservStart=${args.reservStart}&configId=${args.configId}&quantityPurchased=${args.quantityPurchased}&modifiedPrice=${args.modifiedPrice}&`, null, req);
  }
};
export {shoppingListItemInterface};


const splitShipmentMethodString = {
  type: ResponseType,
  description: 'mutation for ofbiz splitShipmentMethodString method',
  args:{shippingMethodString: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderShoppinglist/splitShipmentMethodString?shippingMethodString=${args.shippingMethodString}&`, null, req);
  }
};
export {splitShipmentMethodString};


const updateShoppingList = {
  type: ResponseType,
  description: 'mutation for ofbiz updateShoppingList method',
  args:{shoppingListId: {type: GraphQLString},intervalNumber: {type: GraphQLInt},recurrenceInfoId: {type: GraphQLString},parentShoppingListId: {type: GraphQLString},productPromoCodeId: {type: GraphQLString},description: {type: GraphQLString},endDateTime: {type: GraphQLString},isActive: {type: GraphQLString},shoppingListTypeId: {type: GraphQLString},contactMechId: {type: GraphQLString},frequency: {type: GraphQLInt},shippingMethodString: {type: GraphQLString},carrierPartyId: {type: GraphQLString},startDateTime: {type: GraphQLString},currencyUom: {type: GraphQLString},lastOrderedDate: {type: GraphQLString},carrierRoleTypeId: {type: GraphQLString},paymentMethodId: {type: GraphQLString},isPublic: {type: GraphQLString},productStoreId: {type: GraphQLString},listName: {type: GraphQLString},lastAdminModified: {type: GraphQLString},partyId: {type: GraphQLString},shipmentMethodTypeId: {type: GraphQLString},visitorId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderShoppinglist/updateShoppingList?shoppingListId=${args.shoppingListId}&intervalNumber=${args.intervalNumber}&recurrenceInfoId=${args.recurrenceInfoId}&parentShoppingListId=${args.parentShoppingListId}&productPromoCodeId=${args.productPromoCodeId}&description=${args.description}&endDateTime=${args.endDateTime}&isActive=${args.isActive}&shoppingListTypeId=${args.shoppingListTypeId}&contactMechId=${args.contactMechId}&frequency=${args.frequency}&shippingMethodString=${args.shippingMethodString}&carrierPartyId=${args.carrierPartyId}&startDateTime=${args.startDateTime}&currencyUom=${args.currencyUom}&lastOrderedDate=${args.lastOrderedDate}&carrierRoleTypeId=${args.carrierRoleTypeId}&paymentMethodId=${args.paymentMethodId}&isPublic=${args.isPublic}&productStoreId=${args.productStoreId}&listName=${args.listName}&lastAdminModified=${args.lastAdminModified}&partyId=${args.partyId}&shipmentMethodTypeId=${args.shipmentMethodTypeId}&visitorId=${args.visitorId}&`, null, req);
  }
};
export {updateShoppingList};


const updateShoppingListItem = {
  type: ResponseType,
  description: 'mutation for ofbiz updateShoppingListItem method',
  args:{shoppingListId: {type: GraphQLString},shoppingListItemSeqId: {type: GraphQLString},quantity: {type: GraphQLFloat},reservLength: {type: GraphQLFloat},productId: {type: GraphQLString},reservPersons: {type: GraphQLFloat},reservStart: {type: GraphQLString},configId: {type: GraphQLString},quantityPurchased: {type: GraphQLFloat},modifiedPrice: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderShoppinglist/updateShoppingListItem?shoppingListId=${args.shoppingListId}&shoppingListItemSeqId=${args.shoppingListItemSeqId}&quantity=${args.quantity}&reservLength=${args.reservLength}&productId=${args.productId}&reservPersons=${args.reservPersons}&reservStart=${args.reservStart}&configId=${args.configId}&quantityPurchased=${args.quantityPurchased}&modifiedPrice=${args.modifiedPrice}&`, null, req);
  }
};
export {updateShoppingListItem};


const updateShoppingListType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateShoppingListType method',
  args:{shoppingListTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderShoppinglist/updateShoppingListType?shoppingListTypeId=${args.shoppingListTypeId}&description=${args.description}&`, null, req);
  }
};
export {updateShoppingListType};
