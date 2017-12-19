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
import {KeyValueType} from '../../framework/helpTypes.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';


const checkProductStoreGroupRollup = {
  type: GraphQLString,
  description: 'mutation for ofbiz checkProductStoreGroupRollup method',
  args:{productStoreGroupId: {type: GraphQLString},primaryParentGroupId: {type: GraphQLString},fromDate: {type: GraphQLString},parentGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/checkProductStoreGroupRollup?productStoreGroupId=${args.productStoreGroupId}primaryParentGroupId=${args.primaryParentGroupId}fromDate=${args.fromDate}parentGroupId=${args.parentGroupId}`, null, req);
  }
};
export {checkProductStoreGroupRollup};


const createProductStore = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductStore method',
  args:{storeName: {type: GraphQLString},viewCartOnAdd: {type: GraphQLString},requireCustomerRole: {type: GraphQLString},companyName: {type: GraphQLString},headerDeclinedStatus: {type: GraphQLString},requireInventory: {type: GraphQLString},checkInventory: {type: GraphQLString},autoApproveInvoice: {type: GraphQLString},addToCartRemoveIncompat: {type: GraphQLString},enableAutoSuggestionList: {type: GraphQLString},defaultSalesChannelEnumId: {type: GraphQLString},autoApproveOrder: {type: GraphQLString},allowPassword: {type: GraphQLString},showTaxIsExempt: {type: GraphQLString},oldHeaderLogo: {type: GraphQLString},autoSaveCart: {type: GraphQLString},inventoryFacilityId: {type: GraphQLString},headerApprovedStatus: {type: GraphQLString},oldHeaderMiddleBackground: {type: GraphQLString},defaultTimeZoneString: {type: GraphQLString},prorateTaxes: {type: GraphQLString},showCheckoutGiftOptions: {type: GraphQLString},oldStyleSheet: {type: GraphQLString},manualAuthIsCapture: {type: GraphQLString},itemDeclinedStatus: {type: GraphQLString},visualThemeId: {type: GraphQLString},storeCreditAccountEnumId: {type: GraphQLString},showOutOfStockProducts: {type: GraphQLString},itemApprovedStatus: {type: GraphQLString},allowComment: {type: GraphQLString},storeCreditValidDays: {type: GraphQLInt},splitPayPrefPerShpGrp: {type: GraphQLString},authFraudMessage: {type: GraphQLString},managedByLot: {type: GraphQLString},reqShipAddrForDigItems: {type: GraphQLString},oneInventoryFacility: {type: GraphQLString},orderNumberPrefix: {type: GraphQLString},autoInvoiceDigitalItems: {type: GraphQLString},subtitle: {type: GraphQLString},reserveOrderEnumId: {type: GraphQLString},isDemoStore: {type: GraphQLString},retryFailedAuths: {type: GraphQLString},selectPaymentTypePerItem: {type: GraphQLString},balanceResOnOrderCreation: {type: GraphQLString},autoApproveReviews: {type: GraphQLString},explodeOrderItems: {type: GraphQLString},usePrimaryEmailUsername: {type: GraphQLString},headerCancelStatus: {type: GraphQLString},title: {type: GraphQLString},primaryStoreGroupId: {type: GraphQLString},oldHeaderRightBackground: {type: GraphQLString},enableDigProdUpload: {type: GraphQLString},autoOrderCcTryOtherCards: {type: GraphQLString},autoOrderCcTryLaterMax: {type: GraphQLInt},digitalItemApprovedStatus: {type: GraphQLString},reserveInventory: {type: GraphQLString},isImmediatelyFulfilled: {type: GraphQLString},defaultPassword: {type: GraphQLString},itemCancelStatus: {type: GraphQLString},autoOrderCcTryExp: {type: GraphQLString},authDeclinedMessage: {type: GraphQLString},prodSearchExcludeVariants: {type: GraphQLString},shipIfCaptureFails: {type: GraphQLString},showPricesWithVatTax: {type: GraphQLString},defaultCurrencyUomId: {type: GraphQLString},orderDecimalQuantity: {type: GraphQLString},prorateShipping: {type: GraphQLString},digProdUploadCategoryId: {type: GraphQLString},reqReturnInventoryReceive: {type: GraphQLString},authErrorMessage: {type: GraphQLString},setOwnerUponIssuance: {type: GraphQLString},checkGcBalance: {type: GraphQLString},autoOrderCcTryLaterNsf: {type: GraphQLString},addToCartReplaceUpsell: {type: GraphQLString},vatTaxAuthGeoId: {type: GraphQLString},vatTaxAuthPartyId: {type: GraphQLString},daysToCancelNonPay: {type: GraphQLInt},requirementMethodEnumId: {type: GraphQLString},payToPartyId: {type: GraphQLString},defaultLocaleString: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/createProductStore?storeName=${args.storeName}viewCartOnAdd=${args.viewCartOnAdd}requireCustomerRole=${args.requireCustomerRole}companyName=${args.companyName}headerDeclinedStatus=${args.headerDeclinedStatus}requireInventory=${args.requireInventory}checkInventory=${args.checkInventory}autoApproveInvoice=${args.autoApproveInvoice}addToCartRemoveIncompat=${args.addToCartRemoveIncompat}enableAutoSuggestionList=${args.enableAutoSuggestionList}defaultSalesChannelEnumId=${args.defaultSalesChannelEnumId}autoApproveOrder=${args.autoApproveOrder}allowPassword=${args.allowPassword}showTaxIsExempt=${args.showTaxIsExempt}oldHeaderLogo=${args.oldHeaderLogo}autoSaveCart=${args.autoSaveCart}inventoryFacilityId=${args.inventoryFacilityId}headerApprovedStatus=${args.headerApprovedStatus}oldHeaderMiddleBackground=${args.oldHeaderMiddleBackground}defaultTimeZoneString=${args.defaultTimeZoneString}prorateTaxes=${args.prorateTaxes}showCheckoutGiftOptions=${args.showCheckoutGiftOptions}oldStyleSheet=${args.oldStyleSheet}manualAuthIsCapture=${args.manualAuthIsCapture}itemDeclinedStatus=${args.itemDeclinedStatus}visualThemeId=${args.visualThemeId}storeCreditAccountEnumId=${args.storeCreditAccountEnumId}showOutOfStockProducts=${args.showOutOfStockProducts}itemApprovedStatus=${args.itemApprovedStatus}allowComment=${args.allowComment}storeCreditValidDays=${args.storeCreditValidDays}splitPayPrefPerShpGrp=${args.splitPayPrefPerShpGrp}authFraudMessage=${args.authFraudMessage}managedByLot=${args.managedByLot}reqShipAddrForDigItems=${args.reqShipAddrForDigItems}oneInventoryFacility=${args.oneInventoryFacility}orderNumberPrefix=${args.orderNumberPrefix}autoInvoiceDigitalItems=${args.autoInvoiceDigitalItems}subtitle=${args.subtitle}reserveOrderEnumId=${args.reserveOrderEnumId}isDemoStore=${args.isDemoStore}retryFailedAuths=${args.retryFailedAuths}selectPaymentTypePerItem=${args.selectPaymentTypePerItem}balanceResOnOrderCreation=${args.balanceResOnOrderCreation}autoApproveReviews=${args.autoApproveReviews}explodeOrderItems=${args.explodeOrderItems}usePrimaryEmailUsername=${args.usePrimaryEmailUsername}headerCancelStatus=${args.headerCancelStatus}title=${args.title}primaryStoreGroupId=${args.primaryStoreGroupId}oldHeaderRightBackground=${args.oldHeaderRightBackground}enableDigProdUpload=${args.enableDigProdUpload}autoOrderCcTryOtherCards=${args.autoOrderCcTryOtherCards}autoOrderCcTryLaterMax=${args.autoOrderCcTryLaterMax}digitalItemApprovedStatus=${args.digitalItemApprovedStatus}reserveInventory=${args.reserveInventory}isImmediatelyFulfilled=${args.isImmediatelyFulfilled}defaultPassword=${args.defaultPassword}itemCancelStatus=${args.itemCancelStatus}autoOrderCcTryExp=${args.autoOrderCcTryExp}authDeclinedMessage=${args.authDeclinedMessage}prodSearchExcludeVariants=${args.prodSearchExcludeVariants}shipIfCaptureFails=${args.shipIfCaptureFails}showPricesWithVatTax=${args.showPricesWithVatTax}defaultCurrencyUomId=${args.defaultCurrencyUomId}orderDecimalQuantity=${args.orderDecimalQuantity}prorateShipping=${args.prorateShipping}digProdUploadCategoryId=${args.digProdUploadCategoryId}reqReturnInventoryReceive=${args.reqReturnInventoryReceive}authErrorMessage=${args.authErrorMessage}setOwnerUponIssuance=${args.setOwnerUponIssuance}checkGcBalance=${args.checkGcBalance}autoOrderCcTryLaterNsf=${args.autoOrderCcTryLaterNsf}addToCartReplaceUpsell=${args.addToCartReplaceUpsell}vatTaxAuthGeoId=${args.vatTaxAuthGeoId}vatTaxAuthPartyId=${args.vatTaxAuthPartyId}daysToCancelNonPay=${args.daysToCancelNonPay}requirementMethodEnumId=${args.requirementMethodEnumId}payToPartyId=${args.payToPartyId}defaultLocaleString=${args.defaultLocaleString}`, null, req);
  }
};
export {createProductStore};


const createProductStoreCatalog = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductStoreCatalog method',
  args:{productStoreId: {type: GraphQLString},prodCatalogId: {type: GraphQLString},fromDate: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/createProductStoreCatalog?productStoreId=${args.productStoreId}prodCatalogId=${args.prodCatalogId}fromDate=${args.fromDate}sequenceNum=${args.sequenceNum}thruDate=${args.thruDate}`, null, req);
  }
};
export {createProductStoreCatalog};


const createProductStoreEmailSetting = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductStoreEmailSetting method',
  args:{emailType: {type: GraphQLString},bodyScreenLocation: {type: GraphQLString},subject: {type: GraphQLString},fromAddress: {type: GraphQLString},productStoreId: {type: GraphQLString},xslfoAttachScreenLocation: {type: GraphQLString},bccAddress: {type: GraphQLString},contentType: {type: GraphQLString},ccAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/createProductStoreEmailSetting?emailType=${args.emailType}bodyScreenLocation=${args.bodyScreenLocation}subject=${args.subject}fromAddress=${args.fromAddress}productStoreId=${args.productStoreId}xslfoAttachScreenLocation=${args.xslfoAttachScreenLocation}bccAddress=${args.bccAddress}contentType=${args.contentType}ccAddress=${args.ccAddress}`, null, req);
  }
};
export {createProductStoreEmailSetting};


const createProductStoreFacility = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductStoreFacility method',
  args:{fromDate: {type: GraphQLString},facilityId: {type: GraphQLString},productStoreId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/createProductStoreFacility?fromDate=${args.fromDate}facilityId=${args.facilityId}productStoreId=${args.productStoreId}sequenceNum=${args.sequenceNum}thruDate=${args.thruDate}`, null, req);
  }
};
export {createProductStoreFacility};


const createProductStoreFinActSetting = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductStoreFinActSetting method',
  args:{productStoreId: {type: GraphQLString},finAccountTypeId: {type: GraphQLString},authValidDays: {type: GraphQLInt},allowAuthToNegative: {type: GraphQLString},accountCodeLength: {type: GraphQLInt},purchSurveyCopyMe: {type: GraphQLString},validateGCFinAcct: {type: GraphQLString},replenishThreshold: {type: GraphQLFloat},accountValidDays: {type: GraphQLInt},replenishMethodEnumId: {type: GraphQLString},purchSurveySendTo: {type: GraphQLString},minBalance: {type: GraphQLFloat},purchaseSurveyId: {type: GraphQLString},requirePinCode: {type: GraphQLString},pinCodeLength: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/createProductStoreFinActSetting?productStoreId=${args.productStoreId}finAccountTypeId=${args.finAccountTypeId}authValidDays=${args.authValidDays}allowAuthToNegative=${args.allowAuthToNegative}accountCodeLength=${args.accountCodeLength}purchSurveyCopyMe=${args.purchSurveyCopyMe}validateGCFinAcct=${args.validateGCFinAcct}replenishThreshold=${args.replenishThreshold}accountValidDays=${args.accountValidDays}replenishMethodEnumId=${args.replenishMethodEnumId}purchSurveySendTo=${args.purchSurveySendTo}minBalance=${args.minBalance}purchaseSurveyId=${args.purchaseSurveyId}requirePinCode=${args.requirePinCode}pinCodeLength=${args.pinCodeLength}`, null, req);
  }
};
export {createProductStoreFinActSetting};


const createProductStoreGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductStoreGroup method',
  args:{productStoreGroupTypeId: {type: GraphQLString},primaryParentGroupId: {type: GraphQLString},productStoreGroupName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/createProductStoreGroup?productStoreGroupTypeId=${args.productStoreGroupTypeId}primaryParentGroupId=${args.primaryParentGroupId}productStoreGroupName=${args.productStoreGroupName}description=${args.description}`, null, req);
  }
};
export {createProductStoreGroup};


const createProductStoreGroupMember = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductStoreGroupMember method',
  args:{fromDate: {type: GraphQLString},productStoreId: {type: GraphQLString},productStoreGroupId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/createProductStoreGroupMember?fromDate=${args.fromDate}productStoreId=${args.productStoreId}productStoreGroupId=${args.productStoreGroupId}sequenceNum=${args.sequenceNum}thruDate=${args.thruDate}`, null, req);
  }
};
export {createProductStoreGroupMember};


const createProductStoreGroupRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductStoreGroupRole method',
  args:{roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString},productStoreGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/createProductStoreGroupRole?roleTypeId=${args.roleTypeId}partyId=${args.partyId}productStoreGroupId=${args.productStoreGroupId}`, null, req);
  }
};
export {createProductStoreGroupRole};


const createProductStoreGroupRollup = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductStoreGroupRollup method',
  args:{fromDate: {type: GraphQLString},parentGroupId: {type: GraphQLString},productStoreGroupId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/createProductStoreGroupRollup?fromDate=${args.fromDate}parentGroupId=${args.parentGroupId}productStoreGroupId=${args.productStoreGroupId}sequenceNum=${args.sequenceNum}thruDate=${args.thruDate}`, null, req);
  }
};
export {createProductStoreGroupRollup};


const createProductStoreGroupType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductStoreGroupType method',
  args:{productStoreGroupTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/createProductStoreGroupType?productStoreGroupTypeId=${args.productStoreGroupTypeId}description=${args.description}`, null, req);
  }
};
export {createProductStoreGroupType};


const createProductStoreKeywordOvrd = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductStoreKeywordOvrd method',
  args:{productStoreId: {type: GraphQLString},targetTypeEnumId: {type: GraphQLString},keyword: {type: GraphQLString},target: {type: GraphQLString},fromDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/createProductStoreKeywordOvrd?productStoreId=${args.productStoreId}targetTypeEnumId=${args.targetTypeEnumId}keyword=${args.keyword}target=${args.target}fromDate=${args.fromDate}thruDate=${args.thruDate}`, null, req);
  }
};
export {createProductStoreKeywordOvrd};


const createProductStorePaymentSetting = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductStorePaymentSetting method',
  args:{paymentServiceTypeEnumId: {type: GraphQLString},applyToAllProducts: {type: GraphQLString},productStoreId: {type: GraphQLString},paymentMethodTypeId: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},paymentService: {type: GraphQLInt},paymentPropertiesPath: {type: GraphQLInt},paymentCustomMethodId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/createProductStorePaymentSetting?paymentServiceTypeEnumId=${args.paymentServiceTypeEnumId}applyToAllProducts=${args.applyToAllProducts}productStoreId=${args.productStoreId}paymentMethodTypeId=${args.paymentMethodTypeId}paymentGatewayConfigId=${args.paymentGatewayConfigId}paymentService=${args.paymentService}paymentPropertiesPath=${args.paymentPropertiesPath}paymentCustomMethodId=${args.paymentCustomMethodId}`, null, req);
  }
};
export {createProductStorePaymentSetting};


const createProductStorePromoAppl = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductStorePromoAppl method',
  args:{productStoreId: {type: GraphQLString},productPromoId: {type: GraphQLString},fromDate: {type: GraphQLString},sequenceNum: {type: GraphQLInt},manualOnly: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/createProductStorePromoAppl?productStoreId=${args.productStoreId}productPromoId=${args.productPromoId}fromDate=${args.fromDate}sequenceNum=${args.sequenceNum}manualOnly=${args.manualOnly}thruDate=${args.thruDate}`, null, req);
  }
};
export {createProductStorePromoAppl};


const createProductStoreRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductStoreRole method',
  args:{roleTypeId: {type: GraphQLString},productStoreId: {type: GraphQLString},partyId: {type: GraphQLString},fromDate: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/createProductStoreRole?roleTypeId=${args.roleTypeId}productStoreId=${args.productStoreId}partyId=${args.partyId}fromDate=${args.fromDate}sequenceNum=${args.sequenceNum}thruDate=${args.thruDate}`, null, req);
  }
};
export {createProductStoreRole};


const createProductStoreShipMeth = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductStoreShipMeth method',
  args:{roleTypeId: {type: GraphQLString},productStoreId: {type: GraphQLString},partyId: {type: GraphQLString},shipmentMethodTypeId: {type: GraphQLString},productStoreShipMethId: {type: GraphQLString},companyPartyId: {type: GraphQLString},sequenceNumber: {type: GraphQLInt},allowancePercent: {type: GraphQLFloat},includeFeatureGroup: {type: GraphQLString},shipmentCustomMethodId: {type: GraphQLString},minTotal: {type: GraphQLFloat},allowUspsAddr: {type: GraphQLString},minWeight: {type: GraphQLFloat},requireCompanyAddr: {type: GraphQLString},maxSize: {type: GraphQLFloat},maxWeight: {type: GraphQLFloat},excludeGeoId: {type: GraphQLString},serviceName: {type: GraphQLString},includeGeoId: {type: GraphQLString},maxTotal: {type: GraphQLFloat},requireUspsAddr: {type: GraphQLString},shipmentGatewayConfigId: {type: GraphQLString},configProps: {type: GraphQLString},minSize: {type: GraphQLFloat},includeNoChargeItems: {type: GraphQLString},allowCompanyAddr: {type: GraphQLString},minimumPrice: {type: GraphQLFloat},excludeFeatureGroup: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/createProductStoreShipMeth?roleTypeId=${args.roleTypeId}productStoreId=${args.productStoreId}partyId=${args.partyId}shipmentMethodTypeId=${args.shipmentMethodTypeId}productStoreShipMethId=${args.productStoreShipMethId}companyPartyId=${args.companyPartyId}sequenceNumber=${args.sequenceNumber}allowancePercent=${args.allowancePercent}includeFeatureGroup=${args.includeFeatureGroup}shipmentCustomMethodId=${args.shipmentCustomMethodId}minTotal=${args.minTotal}allowUspsAddr=${args.allowUspsAddr}minWeight=${args.minWeight}requireCompanyAddr=${args.requireCompanyAddr}maxSize=${args.maxSize}maxWeight=${args.maxWeight}excludeGeoId=${args.excludeGeoId}serviceName=${args.serviceName}includeGeoId=${args.includeGeoId}maxTotal=${args.maxTotal}requireUspsAddr=${args.requireUspsAddr}shipmentGatewayConfigId=${args.shipmentGatewayConfigId}configProps=${args.configProps}minSize=${args.minSize}includeNoChargeItems=${args.includeNoChargeItems}allowCompanyAddr=${args.allowCompanyAddr}minimumPrice=${args.minimumPrice}excludeFeatureGroup=${args.excludeFeatureGroup}`, null, req);
  }
};
export {createProductStoreShipMeth};


const createProductStoreSurveyAppl = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductStoreSurveyAppl method',
  args:{fromDate: {type: GraphQLString},groupName: {type: GraphQLString},surveyId: {type: GraphQLString},productCategoryId: {type: GraphQLString},productId: {type: GraphQLString},surveyTemplate: {type: GraphQLString},sequenceNum: {type: GraphQLInt},productStoreId: {type: GraphQLString},resultTemplate: {type: GraphQLString},surveyApplTypeId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/createProductStoreSurveyAppl?fromDate=${args.fromDate}groupName=${args.groupName}surveyId=${args.surveyId}productCategoryId=${args.productCategoryId}productId=${args.productId}surveyTemplate=${args.surveyTemplate}sequenceNum=${args.sequenceNum}productStoreId=${args.productStoreId}resultTemplate=${args.resultTemplate}surveyApplTypeId=${args.surveyApplTypeId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createProductStoreSurveyAppl};


const createProductStoreVendorPayment = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductStoreVendorPayment method',
  args:{productStoreId: {type: GraphQLString},paymentMethodTypeId: {type: GraphQLString},vendorPartyId: {type: GraphQLString},creditCardEnumId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/createProductStoreVendorPayment?productStoreId=${args.productStoreId}paymentMethodTypeId=${args.paymentMethodTypeId}vendorPartyId=${args.vendorPartyId}creditCardEnumId=${args.creditCardEnumId}`, null, req);
  }
};
export {createProductStoreVendorPayment};


const createProductStoreVendorShipment = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductStoreVendorShipment method',
  args:{carrierPartyId: {type: GraphQLString},productStoreId: {type: GraphQLString},shipmentMethodTypeId: {type: GraphQLString},vendorPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/createProductStoreVendorShipment?carrierPartyId=${args.carrierPartyId}productStoreId=${args.productStoreId}shipmentMethodTypeId=${args.shipmentMethodTypeId}vendorPartyId=${args.vendorPartyId}`, null, req);
  }
};
export {createProductStoreVendorShipment};


const deleteProductStoreCatalog = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductStoreCatalog method',
  args:{fromDate: {type: GraphQLString},productStoreId: {type: GraphQLString},prodCatalogId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/deleteProductStoreCatalog?fromDate=${args.fromDate}productStoreId=${args.productStoreId}prodCatalogId=${args.prodCatalogId}`, null, req);
  }
};
export {deleteProductStoreCatalog};


const deleteProductStoreFacility = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductStoreFacility method',
  args:{fromDate: {type: GraphQLString},facilityId: {type: GraphQLString},productStoreId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/deleteProductStoreFacility?fromDate=${args.fromDate}facilityId=${args.facilityId}productStoreId=${args.productStoreId}`, null, req);
  }
};
export {deleteProductStoreFacility};


const deleteProductStoreGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductStoreGroup method',
  args:{productStoreGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/deleteProductStoreGroup?productStoreGroupId=${args.productStoreGroupId}`, null, req);
  }
};
export {deleteProductStoreGroup};


const deleteProductStoreGroupRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductStoreGroupRole method',
  args:{roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString},productStoreGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/deleteProductStoreGroupRole?roleTypeId=${args.roleTypeId}partyId=${args.partyId}productStoreGroupId=${args.productStoreGroupId}`, null, req);
  }
};
export {deleteProductStoreGroupRole};


const deleteProductStoreGroupRollup = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductStoreGroupRollup method',
  args:{fromDate: {type: GraphQLString},parentGroupId: {type: GraphQLString},productStoreGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/deleteProductStoreGroupRollup?fromDate=${args.fromDate}parentGroupId=${args.parentGroupId}productStoreGroupId=${args.productStoreGroupId}`, null, req);
  }
};
export {deleteProductStoreGroupRollup};


const deleteProductStoreGroupType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductStoreGroupType method',
  args:{productStoreGroupTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/deleteProductStoreGroupType?productStoreGroupTypeId=${args.productStoreGroupTypeId}`, null, req);
  }
};
export {deleteProductStoreGroupType};


const deleteProductStoreKeywordOvrd = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductStoreKeywordOvrd method',
  args:{fromDate: {type: GraphQLString},productStoreId: {type: GraphQLString},keyword: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/deleteProductStoreKeywordOvrd?fromDate=${args.fromDate}productStoreId=${args.productStoreId}keyword=${args.keyword}`, null, req);
  }
};
export {deleteProductStoreKeywordOvrd};


const deleteProductStorePaymentSetting = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductStorePaymentSetting method',
  args:{paymentServiceTypeEnumId: {type: GraphQLString},productStoreId: {type: GraphQLString},paymentMethodTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/deleteProductStorePaymentSetting?paymentServiceTypeEnumId=${args.paymentServiceTypeEnumId}productStoreId=${args.productStoreId}paymentMethodTypeId=${args.paymentMethodTypeId}`, null, req);
  }
};
export {deleteProductStorePaymentSetting};


const deleteProductStorePromoAppl = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductStorePromoAppl method',
  args:{fromDate: {type: GraphQLString},productStoreId: {type: GraphQLString},productPromoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/deleteProductStorePromoAppl?fromDate=${args.fromDate}productStoreId=${args.productStoreId}productPromoId=${args.productPromoId}`, null, req);
  }
};
export {deleteProductStorePromoAppl};


const deleteProductStoreSurveyAppl = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductStoreSurveyAppl method',
  args:{productStoreSurveyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/deleteProductStoreSurveyAppl?productStoreSurveyId=${args.productStoreSurveyId}`, null, req);
  }
};
export {deleteProductStoreSurveyAppl};


const deleteProductStoreVendorPayment = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductStoreVendorPayment method',
  args:{productStoreId: {type: GraphQLString},paymentMethodTypeId: {type: GraphQLString},vendorPartyId: {type: GraphQLString},creditCardEnumId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/deleteProductStoreVendorPayment?productStoreId=${args.productStoreId}paymentMethodTypeId=${args.paymentMethodTypeId}vendorPartyId=${args.vendorPartyId}creditCardEnumId=${args.creditCardEnumId}`, null, req);
  }
};
export {deleteProductStoreVendorPayment};


const deleteProductStoreVendorShipment = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductStoreVendorShipment method',
  args:{carrierPartyId: {type: GraphQLString},productStoreId: {type: GraphQLString},shipmentMethodTypeId: {type: GraphQLString},vendorPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/deleteProductStoreVendorShipment?carrierPartyId=${args.carrierPartyId}productStoreId=${args.productStoreId}shipmentMethodTypeId=${args.shipmentMethodTypeId}vendorPartyId=${args.vendorPartyId}`, null, req);
  }
};
export {deleteProductStoreVendorShipment};


const isStoreInventoryAvailable = {
  type: GraphQLString,
  description: 'mutation for ofbiz isStoreInventoryAvailable method',
  args:{quantity: {type: GraphQLFloat},productId: {type: GraphQLString},productStoreId: {type: GraphQLString},product: {type: new GraphQLList(KeyValueType)},productStore: {type: new GraphQLList(KeyValueType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/isStoreInventoryAvailable?quantity=${args.quantity}productId=${args.productId}productStoreId=${args.productStoreId}product=${args.product}productStore=${args.productStore}`, null, req);
  }
};
export {isStoreInventoryAvailable};


const isStoreInventoryAvailableOrNotRequired = {
  type: GraphQLString,
  description: 'mutation for ofbiz isStoreInventoryAvailableOrNotRequired method',
  args:{quantity: {type: GraphQLFloat},productId: {type: GraphQLString},productStoreId: {type: GraphQLString},product: {type: new GraphQLList(KeyValueType)},productStore: {type: new GraphQLList(KeyValueType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/isStoreInventoryAvailableOrNotRequired?quantity=${args.quantity}productId=${args.productId}productStoreId=${args.productStoreId}product=${args.product}productStore=${args.productStore}`, null, req);
  }
};
export {isStoreInventoryAvailableOrNotRequired};


const isStoreInventoryRequired = {
  type: GraphQLString,
  description: 'mutation for ofbiz isStoreInventoryRequired method',
  args:{productId: {type: GraphQLString},productStoreId: {type: GraphQLString},product: {type: new GraphQLList(KeyValueType)},productStore: {type: new GraphQLList(KeyValueType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/isStoreInventoryRequired?productId=${args.productId}productStoreId=${args.productStoreId}product=${args.product}productStore=${args.productStore}`, null, req);
  }
};
export {isStoreInventoryRequired};


const productStoreGenericPermission = {
  type: GraphQLString,
  description: 'mutation for ofbiz productStoreGenericPermission method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/productStoreGenericPermission?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {productStoreGenericPermission};


const removeProductStoreEmailSetting = {
  type: GraphQLString,
  description: 'mutation for ofbiz removeProductStoreEmailSetting method',
  args:{emailType: {type: GraphQLString},productStoreId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/removeProductStoreEmailSetting?emailType=${args.emailType}productStoreId=${args.productStoreId}`, null, req);
  }
};
export {removeProductStoreEmailSetting};


const removeProductStoreFinActSetting = {
  type: GraphQLString,
  description: 'mutation for ofbiz removeProductStoreFinActSetting method',
  args:{productStoreId: {type: GraphQLString},finAccountTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/removeProductStoreFinActSetting?productStoreId=${args.productStoreId}finAccountTypeId=${args.finAccountTypeId}`, null, req);
  }
};
export {removeProductStoreFinActSetting};


const removeProductStoreRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz removeProductStoreRole method',
  args:{fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},productStoreId: {type: GraphQLString},partyId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/removeProductStoreRole?fromDate=${args.fromDate}roleTypeId=${args.roleTypeId}productStoreId=${args.productStoreId}partyId=${args.partyId}sequenceNum=${args.sequenceNum}thruDate=${args.thruDate}`, null, req);
  }
};
export {removeProductStoreRole};


const removeProductStoreShipMeth = {
  type: GraphQLString,
  description: 'mutation for ofbiz removeProductStoreShipMeth method',
  args:{productStoreShipMethId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/removeProductStoreShipMeth?productStoreShipMethId=${args.productStoreShipMethId}`, null, req);
  }
};
export {removeProductStoreShipMeth};


const reserveStoreInventory = {
  type: GraphQLString,
  description: 'mutation for ofbiz reserveStoreInventory method',
  args:{quantity: {type: GraphQLFloat},productId: {type: GraphQLString},productStoreId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},facilityId: {type: GraphQLString},orderId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/reserveStoreInventory?quantity=${args.quantity}productId=${args.productId}productStoreId=${args.productStoreId}orderItemSeqId=${args.orderItemSeqId}facilityId=${args.facilityId}orderId=${args.orderId}shipGroupSeqId=${args.shipGroupSeqId}`, null, req);
  }
};
export {reserveStoreInventory};


const updateProductStore = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductStore method',
  args:{productStoreId: {type: GraphQLString},viewCartOnAdd: {type: GraphQLString},requireCustomerRole: {type: GraphQLString},companyName: {type: GraphQLString},headerDeclinedStatus: {type: GraphQLString},requireInventory: {type: GraphQLString},checkInventory: {type: GraphQLString},autoApproveInvoice: {type: GraphQLString},addToCartRemoveIncompat: {type: GraphQLString},enableAutoSuggestionList: {type: GraphQLString},defaultSalesChannelEnumId: {type: GraphQLString},autoApproveOrder: {type: GraphQLString},allowPassword: {type: GraphQLString},showTaxIsExempt: {type: GraphQLString},oldHeaderLogo: {type: GraphQLString},autoSaveCart: {type: GraphQLString},inventoryFacilityId: {type: GraphQLString},headerApprovedStatus: {type: GraphQLString},oldHeaderMiddleBackground: {type: GraphQLString},defaultTimeZoneString: {type: GraphQLString},prorateTaxes: {type: GraphQLString},showCheckoutGiftOptions: {type: GraphQLString},oldStyleSheet: {type: GraphQLString},manualAuthIsCapture: {type: GraphQLString},itemDeclinedStatus: {type: GraphQLString},visualThemeId: {type: GraphQLString},storeCreditAccountEnumId: {type: GraphQLString},showOutOfStockProducts: {type: GraphQLString},itemApprovedStatus: {type: GraphQLString},allowComment: {type: GraphQLString},storeCreditValidDays: {type: GraphQLInt},splitPayPrefPerShpGrp: {type: GraphQLString},authFraudMessage: {type: GraphQLString},managedByLot: {type: GraphQLString},reqShipAddrForDigItems: {type: GraphQLString},oneInventoryFacility: {type: GraphQLString},orderNumberPrefix: {type: GraphQLString},autoInvoiceDigitalItems: {type: GraphQLString},subtitle: {type: GraphQLString},reserveOrderEnumId: {type: GraphQLString},isDemoStore: {type: GraphQLString},retryFailedAuths: {type: GraphQLString},selectPaymentTypePerItem: {type: GraphQLString},balanceResOnOrderCreation: {type: GraphQLString},autoApproveReviews: {type: GraphQLString},explodeOrderItems: {type: GraphQLString},usePrimaryEmailUsername: {type: GraphQLString},headerCancelStatus: {type: GraphQLString},title: {type: GraphQLString},primaryStoreGroupId: {type: GraphQLString},oldHeaderRightBackground: {type: GraphQLString},enableDigProdUpload: {type: GraphQLString},autoOrderCcTryOtherCards: {type: GraphQLString},autoOrderCcTryLaterMax: {type: GraphQLInt},digitalItemApprovedStatus: {type: GraphQLString},storeName: {type: GraphQLString},reserveInventory: {type: GraphQLString},isImmediatelyFulfilled: {type: GraphQLString},defaultPassword: {type: GraphQLString},itemCancelStatus: {type: GraphQLString},autoOrderCcTryExp: {type: GraphQLString},authDeclinedMessage: {type: GraphQLString},prodSearchExcludeVariants: {type: GraphQLString},shipIfCaptureFails: {type: GraphQLString},showPricesWithVatTax: {type: GraphQLString},defaultCurrencyUomId: {type: GraphQLString},orderDecimalQuantity: {type: GraphQLString},prorateShipping: {type: GraphQLString},digProdUploadCategoryId: {type: GraphQLString},reqReturnInventoryReceive: {type: GraphQLString},authErrorMessage: {type: GraphQLString},setOwnerUponIssuance: {type: GraphQLString},checkGcBalance: {type: GraphQLString},autoOrderCcTryLaterNsf: {type: GraphQLString},addToCartReplaceUpsell: {type: GraphQLString},vatTaxAuthGeoId: {type: GraphQLString},vatTaxAuthPartyId: {type: GraphQLString},daysToCancelNonPay: {type: GraphQLInt},requirementMethodEnumId: {type: GraphQLString},payToPartyId: {type: GraphQLString},defaultLocaleString: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/updateProductStore?productStoreId=${args.productStoreId}viewCartOnAdd=${args.viewCartOnAdd}requireCustomerRole=${args.requireCustomerRole}companyName=${args.companyName}headerDeclinedStatus=${args.headerDeclinedStatus}requireInventory=${args.requireInventory}checkInventory=${args.checkInventory}autoApproveInvoice=${args.autoApproveInvoice}addToCartRemoveIncompat=${args.addToCartRemoveIncompat}enableAutoSuggestionList=${args.enableAutoSuggestionList}defaultSalesChannelEnumId=${args.defaultSalesChannelEnumId}autoApproveOrder=${args.autoApproveOrder}allowPassword=${args.allowPassword}showTaxIsExempt=${args.showTaxIsExempt}oldHeaderLogo=${args.oldHeaderLogo}autoSaveCart=${args.autoSaveCart}inventoryFacilityId=${args.inventoryFacilityId}headerApprovedStatus=${args.headerApprovedStatus}oldHeaderMiddleBackground=${args.oldHeaderMiddleBackground}defaultTimeZoneString=${args.defaultTimeZoneString}prorateTaxes=${args.prorateTaxes}showCheckoutGiftOptions=${args.showCheckoutGiftOptions}oldStyleSheet=${args.oldStyleSheet}manualAuthIsCapture=${args.manualAuthIsCapture}itemDeclinedStatus=${args.itemDeclinedStatus}visualThemeId=${args.visualThemeId}storeCreditAccountEnumId=${args.storeCreditAccountEnumId}showOutOfStockProducts=${args.showOutOfStockProducts}itemApprovedStatus=${args.itemApprovedStatus}allowComment=${args.allowComment}storeCreditValidDays=${args.storeCreditValidDays}splitPayPrefPerShpGrp=${args.splitPayPrefPerShpGrp}authFraudMessage=${args.authFraudMessage}managedByLot=${args.managedByLot}reqShipAddrForDigItems=${args.reqShipAddrForDigItems}oneInventoryFacility=${args.oneInventoryFacility}orderNumberPrefix=${args.orderNumberPrefix}autoInvoiceDigitalItems=${args.autoInvoiceDigitalItems}subtitle=${args.subtitle}reserveOrderEnumId=${args.reserveOrderEnumId}isDemoStore=${args.isDemoStore}retryFailedAuths=${args.retryFailedAuths}selectPaymentTypePerItem=${args.selectPaymentTypePerItem}balanceResOnOrderCreation=${args.balanceResOnOrderCreation}autoApproveReviews=${args.autoApproveReviews}explodeOrderItems=${args.explodeOrderItems}usePrimaryEmailUsername=${args.usePrimaryEmailUsername}headerCancelStatus=${args.headerCancelStatus}title=${args.title}primaryStoreGroupId=${args.primaryStoreGroupId}oldHeaderRightBackground=${args.oldHeaderRightBackground}enableDigProdUpload=${args.enableDigProdUpload}autoOrderCcTryOtherCards=${args.autoOrderCcTryOtherCards}autoOrderCcTryLaterMax=${args.autoOrderCcTryLaterMax}digitalItemApprovedStatus=${args.digitalItemApprovedStatus}storeName=${args.storeName}reserveInventory=${args.reserveInventory}isImmediatelyFulfilled=${args.isImmediatelyFulfilled}defaultPassword=${args.defaultPassword}itemCancelStatus=${args.itemCancelStatus}autoOrderCcTryExp=${args.autoOrderCcTryExp}authDeclinedMessage=${args.authDeclinedMessage}prodSearchExcludeVariants=${args.prodSearchExcludeVariants}shipIfCaptureFails=${args.shipIfCaptureFails}showPricesWithVatTax=${args.showPricesWithVatTax}defaultCurrencyUomId=${args.defaultCurrencyUomId}orderDecimalQuantity=${args.orderDecimalQuantity}prorateShipping=${args.prorateShipping}digProdUploadCategoryId=${args.digProdUploadCategoryId}reqReturnInventoryReceive=${args.reqReturnInventoryReceive}authErrorMessage=${args.authErrorMessage}setOwnerUponIssuance=${args.setOwnerUponIssuance}checkGcBalance=${args.checkGcBalance}autoOrderCcTryLaterNsf=${args.autoOrderCcTryLaterNsf}addToCartReplaceUpsell=${args.addToCartReplaceUpsell}vatTaxAuthGeoId=${args.vatTaxAuthGeoId}vatTaxAuthPartyId=${args.vatTaxAuthPartyId}daysToCancelNonPay=${args.daysToCancelNonPay}requirementMethodEnumId=${args.requirementMethodEnumId}payToPartyId=${args.payToPartyId}defaultLocaleString=${args.defaultLocaleString}`, null, req);
  }
};
export {updateProductStore};


const updateProductStoreCatalog = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductStoreCatalog method',
  args:{fromDate: {type: GraphQLString},productStoreId: {type: GraphQLString},prodCatalogId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/updateProductStoreCatalog?fromDate=${args.fromDate}productStoreId=${args.productStoreId}prodCatalogId=${args.prodCatalogId}sequenceNum=${args.sequenceNum}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateProductStoreCatalog};


const updateProductStoreEmailSetting = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductStoreEmailSetting method',
  args:{emailType: {type: GraphQLString},bodyScreenLocation: {type: GraphQLString},subject: {type: GraphQLString},fromAddress: {type: GraphQLString},productStoreId: {type: GraphQLString},xslfoAttachScreenLocation: {type: GraphQLString},bccAddress: {type: GraphQLString},contentType: {type: GraphQLString},ccAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/updateProductStoreEmailSetting?emailType=${args.emailType}bodyScreenLocation=${args.bodyScreenLocation}subject=${args.subject}fromAddress=${args.fromAddress}productStoreId=${args.productStoreId}xslfoAttachScreenLocation=${args.xslfoAttachScreenLocation}bccAddress=${args.bccAddress}contentType=${args.contentType}ccAddress=${args.ccAddress}`, null, req);
  }
};
export {updateProductStoreEmailSetting};


const updateProductStoreFacility = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductStoreFacility method',
  args:{fromDate: {type: GraphQLString},facilityId: {type: GraphQLString},productStoreId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/updateProductStoreFacility?fromDate=${args.fromDate}facilityId=${args.facilityId}productStoreId=${args.productStoreId}sequenceNum=${args.sequenceNum}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateProductStoreFacility};


const updateProductStoreFinActSetting = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductStoreFinActSetting method',
  args:{productStoreId: {type: GraphQLString},finAccountTypeId: {type: GraphQLString},authValidDays: {type: GraphQLInt},allowAuthToNegative: {type: GraphQLString},accountCodeLength: {type: GraphQLInt},purchSurveyCopyMe: {type: GraphQLString},validateGCFinAcct: {type: GraphQLString},replenishThreshold: {type: GraphQLFloat},accountValidDays: {type: GraphQLInt},replenishMethodEnumId: {type: GraphQLString},purchSurveySendTo: {type: GraphQLString},minBalance: {type: GraphQLFloat},purchaseSurveyId: {type: GraphQLString},requirePinCode: {type: GraphQLString},pinCodeLength: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/updateProductStoreFinActSetting?productStoreId=${args.productStoreId}finAccountTypeId=${args.finAccountTypeId}authValidDays=${args.authValidDays}allowAuthToNegative=${args.allowAuthToNegative}accountCodeLength=${args.accountCodeLength}purchSurveyCopyMe=${args.purchSurveyCopyMe}validateGCFinAcct=${args.validateGCFinAcct}replenishThreshold=${args.replenishThreshold}accountValidDays=${args.accountValidDays}replenishMethodEnumId=${args.replenishMethodEnumId}purchSurveySendTo=${args.purchSurveySendTo}minBalance=${args.minBalance}purchaseSurveyId=${args.purchaseSurveyId}requirePinCode=${args.requirePinCode}pinCodeLength=${args.pinCodeLength}`, null, req);
  }
};
export {updateProductStoreFinActSetting};


const updateProductStoreGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductStoreGroup method',
  args:{productStoreGroupId: {type: GraphQLString},productStoreGroupTypeId: {type: GraphQLString},primaryParentGroupId: {type: GraphQLString},productStoreGroupName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/updateProductStoreGroup?productStoreGroupId=${args.productStoreGroupId}productStoreGroupTypeId=${args.productStoreGroupTypeId}primaryParentGroupId=${args.primaryParentGroupId}productStoreGroupName=${args.productStoreGroupName}description=${args.description}`, null, req);
  }
};
export {updateProductStoreGroup};


const updateProductStoreGroupMember = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductStoreGroupMember method',
  args:{fromDate: {type: GraphQLString},productStoreId: {type: GraphQLString},productStoreGroupId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/updateProductStoreGroupMember?fromDate=${args.fromDate}productStoreId=${args.productStoreId}productStoreGroupId=${args.productStoreGroupId}sequenceNum=${args.sequenceNum}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateProductStoreGroupMember};


const updateProductStoreGroupRollup = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductStoreGroupRollup method',
  args:{fromDate: {type: GraphQLString},parentGroupId: {type: GraphQLString},productStoreGroupId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/updateProductStoreGroupRollup?fromDate=${args.fromDate}parentGroupId=${args.parentGroupId}productStoreGroupId=${args.productStoreGroupId}sequenceNum=${args.sequenceNum}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateProductStoreGroupRollup};


const updateProductStoreGroupType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductStoreGroupType method',
  args:{productStoreGroupTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/updateProductStoreGroupType?productStoreGroupTypeId=${args.productStoreGroupTypeId}description=${args.description}`, null, req);
  }
};
export {updateProductStoreGroupType};


const updateProductStoreKeywordOvrd = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductStoreKeywordOvrd method',
  args:{fromDate: {type: GraphQLString},productStoreId: {type: GraphQLString},keyword: {type: GraphQLString},targetTypeEnumId: {type: GraphQLString},thruDate: {type: GraphQLString},target: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/updateProductStoreKeywordOvrd?fromDate=${args.fromDate}productStoreId=${args.productStoreId}keyword=${args.keyword}targetTypeEnumId=${args.targetTypeEnumId}thruDate=${args.thruDate}target=${args.target}`, null, req);
  }
};
export {updateProductStoreKeywordOvrd};


const updateProductStorePaymentSetting = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductStorePaymentSetting method',
  args:{paymentServiceTypeEnumId: {type: GraphQLString},applyToAllProducts: {type: GraphQLString},productStoreId: {type: GraphQLString},paymentMethodTypeId: {type: GraphQLString},paymentGatewayConfigId: {type: GraphQLString},paymentService: {type: GraphQLInt},paymentPropertiesPath: {type: GraphQLInt},paymentCustomMethodId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/updateProductStorePaymentSetting?paymentServiceTypeEnumId=${args.paymentServiceTypeEnumId}applyToAllProducts=${args.applyToAllProducts}productStoreId=${args.productStoreId}paymentMethodTypeId=${args.paymentMethodTypeId}paymentGatewayConfigId=${args.paymentGatewayConfigId}paymentService=${args.paymentService}paymentPropertiesPath=${args.paymentPropertiesPath}paymentCustomMethodId=${args.paymentCustomMethodId}`, null, req);
  }
};
export {updateProductStorePaymentSetting};


const updateProductStorePromoAppl = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductStorePromoAppl method',
  args:{fromDate: {type: GraphQLString},productStoreId: {type: GraphQLString},productPromoId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},manualOnly: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/updateProductStorePromoAppl?fromDate=${args.fromDate}productStoreId=${args.productStoreId}productPromoId=${args.productPromoId}sequenceNum=${args.sequenceNum}manualOnly=${args.manualOnly}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateProductStorePromoAppl};


const updateProductStoreRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductStoreRole method',
  args:{fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},productStoreId: {type: GraphQLString},partyId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/updateProductStoreRole?fromDate=${args.fromDate}roleTypeId=${args.roleTypeId}productStoreId=${args.productStoreId}partyId=${args.partyId}sequenceNum=${args.sequenceNum}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateProductStoreRole};


const updateProductStoreShipMeth = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductStoreShipMeth method',
  args:{productStoreShipMethId: {type: GraphQLString},companyPartyId: {type: GraphQLString},allowancePercent: {type: GraphQLFloat},includeFeatureGroup: {type: GraphQLString},shipmentCustomMethodId: {type: GraphQLString},minTotal: {type: GraphQLFloat},minWeight: {type: GraphQLFloat},requireCompanyAddr: {type: GraphQLString},maxSize: {type: GraphQLFloat},excludeGeoId: {type: GraphQLString},shipmentGatewayConfigId: {type: GraphQLString},minSize: {type: GraphQLFloat},productStoreId: {type: GraphQLString},allowCompanyAddr: {type: GraphQLString},partyId: {type: GraphQLString},minimumPrice: {type: GraphQLFloat},shipmentMethodTypeId: {type: GraphQLString},excludeFeatureGroup: {type: GraphQLString},sequenceNumber: {type: GraphQLInt},roleTypeId: {type: GraphQLString},allowUspsAddr: {type: GraphQLString},maxWeight: {type: GraphQLFloat},serviceName: {type: GraphQLString},includeGeoId: {type: GraphQLString},maxTotal: {type: GraphQLFloat},requireUspsAddr: {type: GraphQLString},configProps: {type: GraphQLString},includeNoChargeItems: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productStore/updateProductStoreShipMeth?productStoreShipMethId=${args.productStoreShipMethId}companyPartyId=${args.companyPartyId}allowancePercent=${args.allowancePercent}includeFeatureGroup=${args.includeFeatureGroup}shipmentCustomMethodId=${args.shipmentCustomMethodId}minTotal=${args.minTotal}minWeight=${args.minWeight}requireCompanyAddr=${args.requireCompanyAddr}maxSize=${args.maxSize}excludeGeoId=${args.excludeGeoId}shipmentGatewayConfigId=${args.shipmentGatewayConfigId}minSize=${args.minSize}productStoreId=${args.productStoreId}allowCompanyAddr=${args.allowCompanyAddr}partyId=${args.partyId}minimumPrice=${args.minimumPrice}shipmentMethodTypeId=${args.shipmentMethodTypeId}excludeFeatureGroup=${args.excludeFeatureGroup}sequenceNumber=${args.sequenceNumber}roleTypeId=${args.roleTypeId}allowUspsAddr=${args.allowUspsAddr}maxWeight=${args.maxWeight}serviceName=${args.serviceName}includeGeoId=${args.includeGeoId}maxTotal=${args.maxTotal}requireUspsAddr=${args.requireUspsAddr}configProps=${args.configProps}includeNoChargeItems=${args.includeNoChargeItems}`, null, req);
  }
};
export {updateProductStoreShipMeth};
