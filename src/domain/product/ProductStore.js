
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

import {ProductStorePromoApplType} from '../product/ProductStorePromoAppl.js';
import {OrderHeaderType} from '../order/OrderHeader.js';
import {ProductStoreEmailSettingType} from '../product/ProductStoreEmailSetting.js';
import {ProductStoreGroupMemberType} from '../product/ProductStoreGroupMember.js';
import {CustRequestType} from '../order/CustRequest.js';
import {ProductStoreVendorPaymentType} from '../product/ProductStoreVendorPayment.js';
import {ShoppingListType} from '../order/ShoppingList.js';
import {ProductStoreVendorShipmentType} from '../product/ProductStoreVendorShipment.js';
import {ProductStoreSurveyApplType} from '../product/ProductStoreSurveyAppl.js';
import {ProductReviewType} from '../product/ProductReview.js';
import {QuoteType} from '../order/Quote.js';
import {PartyType} from '../party/Party.js';
import {ProductStoreGroupType} from '../product/ProductStoreGroup.js';
import {InventoryItemTempResType} from '../product/InventoryItemTempRes.js';
import {ProductStoreFacilityType} from '../product/ProductStoreFacility.js';
import {TaxAuthorityRateProductType} from '../accounting/TaxAuthorityRateProduct.js';
import {PartyProfileDefaultType} from '../party/PartyProfileDefault.js';
import {ProductStorePaymentSettingType} from '../product/ProductStorePaymentSetting.js';
import {ProductStoreKeywordOvrdType} from '../product/ProductStoreKeywordOvrd.js';
import {FacilityType} from '../product/Facility.js';
import {SegmentGroupType} from '../marketing/SegmentGroup.js';
import {ProductStoreCatalogType} from '../product/ProductStoreCatalog.js';
import {TaxAuthorityType} from '../accounting/TaxAuthority.js';
import {ProductStoreRoleType} from '../product/ProductStoreRole.js';


const ProductStoreType = new GraphQLObjectType({
  name: 'ProductStoreType',
  description: 'Type for ProductStore in product',

  fields: () => ({
    viewCartOnAdd: {type: GraphQLBoolean},
    requireCustomerRole: {type: GraphQLBoolean},
    companyName: {type: GraphQLString},
    headerDeclinedStatus: {type: GraphQLString},
    requireInventory: {type: GraphQLBoolean},
    checkInventory: {type: GraphQLBoolean},
    autoApproveInvoice: {type: GraphQLBoolean},
    addToCartRemoveIncompat: {type: GraphQLBoolean},
    enableAutoSuggestionList: {type: GraphQLBoolean},
    defaultSalesChannelEnumId: {type: GraphQLString},
    autoApproveOrder: {type: GraphQLBoolean},
    allowPassword: {type: GraphQLBoolean},
    showTaxIsExempt: {type: GraphQLBoolean},
    oldHeaderLogo: {type: GraphQLString/*this was a type I didn't find TODO find a solution*/},
    autoSaveCart: {type: GraphQLBoolean},
    inventoryFacility: {
      type: FacilityType,
      args : {inventoryFacilityId: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbiz.load(`facilitys/find?facilityId=${productStore.inventoryFacilityId}`)
    },
    headerApprovedStatus: {type: GraphQLString},
    oldHeaderMiddleBackground: {type: GraphQLString/*this was a type I didn't find TODO find a solution*/},
    defaultTimeZoneString: {type: GraphQLString},
    prorateTaxes: {type: GraphQLBoolean},
    showCheckoutGiftOptions: {type: GraphQLBoolean},
    oldStyleSheet: {type: GraphQLString/*this was a type I didn't find TODO find a solution*/},
    manualAuthIsCapture: {type: GraphQLBoolean},
    itemDeclinedStatus: {type: GraphQLString},
    visualThemeId: {type: GraphQLString},
    storeCreditAccountEnumId: {type: GraphQLString},
    showOutOfStockProducts: {type: GraphQLBoolean},
    itemApprovedStatus: {type: GraphQLString},
    allowComment: {type: GraphQLBoolean},
    storeCreditValidDays: {type: GraphQLInt},
    splitPayPrefPerShpGrp: {type: GraphQLBoolean},
    authFraudMessage: {type: GraphQLString},
    managedByLot: {type: GraphQLBoolean},
    reqShipAddrForDigItems: {type: GraphQLBoolean},
    oneInventoryFacility: {type: GraphQLBoolean},
    orderNumberPrefix: {type: GraphQLString},
    autoInvoiceDigitalItems: {type: GraphQLBoolean},
    subtitle: {type: GraphQLString},
    reserveOrderEnumId: {type: GraphQLString},
    isDemoStore: {type: GraphQLBoolean},
    retryFailedAuths: {type: GraphQLBoolean},
    selectPaymentTypePerItem: {type: GraphQLBoolean},
    balanceResOnOrderCreation: {type: GraphQLBoolean},
    autoApproveReviews: {type: GraphQLBoolean},
    explodeOrderItems: {type: GraphQLBoolean},
    usePrimaryEmailUsername: {type: GraphQLBoolean},
    headerCancelStatus: {type: GraphQLString},
    title: {type: GraphQLString},
    primaryStoreGroup: {
      type: ProductStoreGroupType,
      args : {primaryStoreGroupId: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbiz.load(`productStoreGroups/find?productStoreGroupId=${productStore.primaryStoreGroupId}`)
    },
    oldHeaderRightBackground: {type: GraphQLString/*this was a type I didn't find TODO find a solution*/},
    enableDigProdUpload: {type: GraphQLBoolean},
    autoOrderCcTryOtherCards: {type: GraphQLBoolean},
    autoOrderCcTryLaterMax: {type: GraphQLInt},
    digitalItemApprovedStatus: {type: GraphQLString},
    storeName: {type: GraphQLString},
    reserveInventory: {type: GraphQLBoolean},
    productStoreId: {type: GraphQLString},
    isImmediatelyFulfilled: {type: GraphQLBoolean},
    defaultPassword: {type: GraphQLString},
    itemCancelStatus: {type: GraphQLString},
    autoOrderCcTryExp: {type: GraphQLBoolean},
    authDeclinedMessage: {type: GraphQLString},
    prodSearchExcludeVariants: {type: GraphQLBoolean},
    shipIfCaptureFails: {type: GraphQLBoolean},
    showPricesWithVatTax: {type: GraphQLBoolean},
    defaultCurrencyUomId: {type: GraphQLString},
    orderDecimalQuantity: {type: GraphQLBoolean},
    prorateShipping: {type: GraphQLBoolean},
    digProdUploadCategoryId: {type: GraphQLString},
    reqReturnInventoryReceive: {type: GraphQLBoolean},
    authErrorMessage: {type: GraphQLString},
    setOwnerUponIssuance: {type: GraphQLBoolean},
    checkGcBalance: {type: GraphQLBoolean},
    autoOrderCcTryLaterNsf: {type: GraphQLBoolean},
    addToCartReplaceUpsell: {type: GraphQLBoolean},
    vatTaxAuthGeo: {
      type: TaxAuthorityType,
      args : {vatTaxAuthGeoId: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbiz.load(`taxAuthoritys/find?taxAuthGeoId=${productStore.vatTaxAuthGeoId}`)
    },
    vatTaxAuthPartyId: {type: GraphQLString},
    daysToCancelNonPay: {type: GraphQLInt},
    requirementMethodEnumId: {type: GraphQLString},
    payToParty: {
      type: PartyType,
      args : {payToPartyId: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${productStore.payToPartyId}`)
    },
    defaultLocaleString: {type: GraphQLString},
    productStoreEmailSettings: {
      type: new GraphQLList(ProductStoreEmailSettingType),
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`productStoreEmailSettings/find?productStoreId=${productStore.productStoreId}`)
    },
    productStoreGroupMembers: {
      type: new GraphQLList(ProductStoreGroupMemberType),
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`productStoreGroupMembers/find?productStoreId=${productStore.productStoreId}`)
    },
    productStoreKeywordOvrds: {
      type: new GraphQLList(ProductStoreKeywordOvrdType),
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`productStoreKeywordOvrds/find?productStoreId=${productStore.productStoreId}`)
    },
    productStoreVendorPayments: {
      type: new GraphQLList(ProductStoreVendorPaymentType),
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`productStoreVendorPayments/find?productStoreId=${productStore.productStoreId}`)
    },
    inventoryItemTempReses: {
      type: new GraphQLList(InventoryItemTempResType),
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemTempRess/find?productStoreId=${productStore.productStoreId}`)
    },
    productStorePromoAppls: {
      type: new GraphQLList(ProductStorePromoApplType),
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`productStorePromoAppls/find?productStoreId=${productStore.productStoreId}`)
    },
    productStoreSurveyAppls: {
      type: new GraphQLList(ProductStoreSurveyApplType),
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`productStoreSurveyAppls/find?productStoreId=${productStore.productStoreId}`)
    },
    segmentGroups: {
      type: new GraphQLList(SegmentGroupType),
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`segmentGroups/find?productStoreId=${productStore.productStoreId}`)
    },
    productStoreFacilities: {
      type: new GraphQLList(ProductStoreFacilityType),
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`productStoreFacilitys/find?productStoreId=${productStore.productStoreId}`)
    },
    taxAuthorityRateProducts: {
      type: new GraphQLList(TaxAuthorityRateProductType),
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`taxAuthorityRateProducts/find?productStoreId=${productStore.productStoreId}`)
    },
    productStoreCatalogs: {
      type: new GraphQLList(ProductStoreCatalogType),
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`productStoreCatalogs/find?productStoreId=${productStore.productStoreId}`)
    },
    quotes: {
      type: new GraphQLList(QuoteType),
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`quotes/find?productStoreId=${productStore.productStoreId}`)
    },
    productStoreRoles: {
      type: new GraphQLList(ProductStoreRoleType),
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`productStoreRoles/find?productStoreId=${productStore.productStoreId}`)
    },
    productReviews: {
      type: new GraphQLList(ProductReviewType),
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`productReviews/find?productStoreId=${productStore.productStoreId}`)
    },
    shoppingLists: {
      type: new GraphQLList(ShoppingListType),
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`shoppingLists/find?productStoreId=${productStore.productStoreId}`)
    },
    partyProfileDefaults: {
      type: new GraphQLList(PartyProfileDefaultType),
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`partyProfileDefaults/find?productStoreId=${productStore.productStoreId}`)
    },
    productStoreVendorShipments: {
      type: new GraphQLList(ProductStoreVendorShipmentType),
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`productStoreVendorShipments/find?productStoreId=${productStore.productStoreId}`)
    },
    productStorePaymentSettings: {
      type: new GraphQLList(ProductStorePaymentSettingType),
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`productStorePaymentSettings/find?productStoreId=${productStore.productStoreId}`)
    },
    custRequests: {
      type: new GraphQLList(CustRequestType),
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`custRequests/find?productStoreId=${productStore.productStoreId}`)
    },
    orderHeaders: {
      type: new GraphQLList(OrderHeaderType),
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`orderHeaders/find?productStoreId=${productStore.productStoreId}`)
    }
  })
});

export {ProductStoreType};
    




const ProductStoreInputType = new GraphQLInputObjectType({
  name: 'ProductStoreInputType',
  description: 'input type for ProductStore in product',

  fields: () => ({
    viewCartOnAdd: {type: GraphQLBoolean},
    requireCustomerRole: {type: GraphQLBoolean},
    companyName: {type: GraphQLString},
    headerDeclinedStatus: {type: GraphQLString},
    requireInventory: {type: GraphQLBoolean},
    checkInventory: {type: GraphQLBoolean},
    autoApproveInvoice: {type: GraphQLBoolean},
    addToCartRemoveIncompat: {type: GraphQLBoolean},
    enableAutoSuggestionList: {type: GraphQLBoolean},
    defaultSalesChannelEnumId: {type: GraphQLString},
    autoApproveOrder: {type: GraphQLBoolean},
    allowPassword: {type: GraphQLBoolean},
    showTaxIsExempt: {type: GraphQLBoolean},
    oldHeaderLogo: {type: GraphQLString/*this was a type I didn't find TODO find a solution*/},
    autoSaveCart: {type: GraphQLBoolean},
    inventoryFacilityId: {type: GraphQLString},
    headerApprovedStatus: {type: GraphQLString},
    oldHeaderMiddleBackground: {type: GraphQLString/*this was a type I didn't find TODO find a solution*/},
    defaultTimeZoneString: {type: GraphQLString},
    prorateTaxes: {type: GraphQLBoolean},
    showCheckoutGiftOptions: {type: GraphQLBoolean},
    oldStyleSheet: {type: GraphQLString/*this was a type I didn't find TODO find a solution*/},
    manualAuthIsCapture: {type: GraphQLBoolean},
    itemDeclinedStatus: {type: GraphQLString},
    visualThemeId: {type: GraphQLString},
    storeCreditAccountEnumId: {type: GraphQLString},
    showOutOfStockProducts: {type: GraphQLBoolean},
    itemApprovedStatus: {type: GraphQLString},
    allowComment: {type: GraphQLBoolean},
    storeCreditValidDays: {type: GraphQLInt},
    splitPayPrefPerShpGrp: {type: GraphQLBoolean},
    authFraudMessage: {type: GraphQLString},
    managedByLot: {type: GraphQLBoolean},
    reqShipAddrForDigItems: {type: GraphQLBoolean},
    oneInventoryFacility: {type: GraphQLBoolean},
    orderNumberPrefix: {type: GraphQLString},
    autoInvoiceDigitalItems: {type: GraphQLBoolean},
    subtitle: {type: GraphQLString},
    reserveOrderEnumId: {type: GraphQLString},
    isDemoStore: {type: GraphQLBoolean},
    retryFailedAuths: {type: GraphQLBoolean},
    selectPaymentTypePerItem: {type: GraphQLBoolean},
    balanceResOnOrderCreation: {type: GraphQLBoolean},
    autoApproveReviews: {type: GraphQLBoolean},
    explodeOrderItems: {type: GraphQLBoolean},
    usePrimaryEmailUsername: {type: GraphQLBoolean},
    headerCancelStatus: {type: GraphQLString},
    title: {type: GraphQLString},
    primaryStoreGroupId: {type: GraphQLString},
    oldHeaderRightBackground: {type: GraphQLString/*this was a type I didn't find TODO find a solution*/},
    enableDigProdUpload: {type: GraphQLBoolean},
    autoOrderCcTryOtherCards: {type: GraphQLBoolean},
    autoOrderCcTryLaterMax: {type: GraphQLInt},
    digitalItemApprovedStatus: {type: GraphQLString},
    storeName: {type: GraphQLString},
    reserveInventory: {type: GraphQLBoolean},
    productStoreId: {type: GraphQLString},
    isImmediatelyFulfilled: {type: GraphQLBoolean},
    defaultPassword: {type: GraphQLString},
    itemCancelStatus: {type: GraphQLString},
    autoOrderCcTryExp: {type: GraphQLBoolean},
    authDeclinedMessage: {type: GraphQLString},
    prodSearchExcludeVariants: {type: GraphQLBoolean},
    shipIfCaptureFails: {type: GraphQLBoolean},
    showPricesWithVatTax: {type: GraphQLBoolean},
    defaultCurrencyUomId: {type: GraphQLString},
    orderDecimalQuantity: {type: GraphQLBoolean},
    prorateShipping: {type: GraphQLBoolean},
    digProdUploadCategoryId: {type: GraphQLString},
    reqReturnInventoryReceive: {type: GraphQLBoolean},
    authErrorMessage: {type: GraphQLString},
    setOwnerUponIssuance: {type: GraphQLBoolean},
    checkGcBalance: {type: GraphQLBoolean},
    autoOrderCcTryLaterNsf: {type: GraphQLBoolean},
    addToCartReplaceUpsell: {type: GraphQLBoolean},
    vatTaxAuthGeoId: {type: GraphQLString},
    vatTaxAuthPartyId: {type: GraphQLString},
    daysToCancelNonPay: {type: GraphQLInt},
    requirementMethodEnumId: {type: GraphQLString},
    payToPartyId: {type: GraphQLString},
    defaultLocaleString: {type: GraphQLString}
  })
});

export {ProductStoreInputType};
    