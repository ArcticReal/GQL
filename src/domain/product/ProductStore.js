
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
      resolve: (productStore, args, {loaders}) => loaders.ofbiz.load(`product/facilitys/find?facilityId=${productStore.inventoryFacilityId}`)
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
      resolve: (productStore, args, {loaders}) => loaders.ofbiz.load(`product/product/productStoreGroups/find?productStoreGroupId=${productStore.primaryStoreGroupId}`)
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
      resolve: (productStore, args, {loaders}) => loaders.ofbiz.load(`accounting/taxAuthoritys/find?taxAuthGeoId=${productStore.vatTaxAuthGeoId}`)
    },
    vatTaxAuthPartyId: {type: GraphQLString},
    daysToCancelNonPay: {type: GraphQLInt},
    requirementMethodEnumId: {type: GraphQLString},
    payToParty: {
      type: PartyType,
      args : {payToPartyId: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${productStore.payToPartyId}`)
    },
    defaultLocaleString: {type: GraphQLString},
    productStoreEmailSettings: {
      type: new GraphQLList(ProductStoreEmailSettingType),
      args : {},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStoreEmailSettings/find?productStoreId=${productStore.productStoreId}`)
    },
    productStoreGroupMembers: {
      type: new GraphQLList(ProductStoreGroupMemberType),
      args : {},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStoreGroupMembers/find?productStoreId=${productStore.productStoreId}`)
    },
    productStoreKeywordOvrds: {
      type: new GraphQLList(ProductStoreKeywordOvrdType),
      args : {},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStoreKeywordOvrds/find?productStoreId=${productStore.productStoreId}`)
    },
    productStoreVendorPayments: {
      type: new GraphQLList(ProductStoreVendorPaymentType),
      args : {},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStoreVendorPayments/find?productStoreId=${productStore.productStoreId}`)
    },
    inventoryItemTempReses: {
      type: new GraphQLList(InventoryItemTempResType),
      args : {},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`product/inventoryItem/inventoryItemTempRess/find?productStoreId=${productStore.productStoreId}`)
    },
    productStorePromoAppls: {
      type: new GraphQLList(ProductStorePromoApplType),
      args : {},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStorePromoAppls/find?productStoreId=${productStore.productStoreId}`)
    },
    productStoreSurveyAppls: {
      type: new GraphQLList(ProductStoreSurveyApplType),
      args : {},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStoreSurveyAppls/find?productStoreId=${productStore.productStoreId}`)
    },
    segmentGroups: {
      type: new GraphQLList(SegmentGroupType),
      args : {},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`marketing/segmentGroups/find?productStoreId=${productStore.productStoreId}`)
    },
    productStoreFacilities: {
      type: new GraphQLList(ProductStoreFacilityType),
      args : {},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`product/facility/productStoreFacilitys/find?productStoreId=${productStore.productStoreId}`)
    },
    taxAuthorityRateProducts: {
      type: new GraphQLList(TaxAuthorityRateProductType),
      args : {},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`accounting/taxAuthority/taxAuthorityRateProducts/find?productStoreId=${productStore.productStoreId}`)
    },
    productStoreCatalogs: {
      type: new GraphQLList(ProductStoreCatalogType),
      args : {},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStoreCatalogs/find?productStoreId=${productStore.productStoreId}`)
    },
    quotes: {
      type: new GraphQLList(QuoteType),
      args : {},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`order/quotes/find?productStoreId=${productStore.productStoreId}`)
    },
    productStoreRoles: {
      type: new GraphQLList(ProductStoreRoleType),
      args : {},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStoreRoles/find?productStoreId=${productStore.productStoreId}`)
    },
    productReviews: {
      type: new GraphQLList(ProductReviewType),
      args : {},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`product/product/productReviews/find?productStoreId=${productStore.productStoreId}`)
    },
    shoppingLists: {
      type: new GraphQLList(ShoppingListType),
      args : {},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`order/shoppingLists/find?productStoreId=${productStore.productStoreId}`)
    },
    partyProfileDefaults: {
      type: new GraphQLList(PartyProfileDefaultType),
      args : {},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyProfileDefaults/find?productStoreId=${productStore.productStoreId}`)
    },
    productStoreVendorShipments: {
      type: new GraphQLList(ProductStoreVendorShipmentType),
      args : {},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStoreVendorShipments/find?productStoreId=${productStore.productStoreId}`)
    },
    productStorePaymentSettings: {
      type: new GraphQLList(ProductStorePaymentSettingType),
      args : {},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStorePaymentSettings/find?productStoreId=${productStore.productStoreId}`)
    },
    custRequests: {
      type: new GraphQLList(CustRequestType),
      args : {},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`order/custRequests/find?productStoreId=${productStore.productStoreId}`)
    },
    orderHeaders: {
      type: new GraphQLList(OrderHeaderType),
      args : {},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`order/orderHeaders/find?productStoreId=${productStore.productStoreId}`)
    }
  })
});

export {ProductStoreType};
    




const ProductStoreInputType = new GraphQLInputObjectType({
  name: 'ProductStoreInputType',
  description: 'input type for ProductStore',

  fields: () => ({
    addToCartRemoveIncompat: {type: GraphQLBoolean},
    addToCartReplaceUpsell: {type: GraphQLBoolean},
    allowComment: {type: GraphQLBoolean},
    allowPassword: {type: GraphQLBoolean},
    authDeclinedMessage: {type: GraphQLString},
    authErrorMessage: {type: GraphQLString},
    authFraudMessage: {type: GraphQLString},
    autoApproveInvoice: {type: GraphQLBoolean},
    autoApproveOrder: {type: GraphQLBoolean},
    autoApproveReviews: {type: GraphQLBoolean},
    autoInvoiceDigitalItems: {type: GraphQLBoolean},
    autoOrderCcTryExp: {type: GraphQLBoolean},
    autoOrderCcTryLaterMax: {type: GraphQLInt},
    autoOrderCcTryLaterNsf: {type: GraphQLBoolean},
    autoOrderCcTryOtherCards: {type: GraphQLBoolean},
    autoSaveCart: {type: GraphQLBoolean},
    balanceResOnOrderCreation: {type: GraphQLBoolean},
    checkGcBalance: {type: GraphQLBoolean},
    checkInventory: {type: GraphQLBoolean},
    companyName: {type: GraphQLString},
    daysToCancelNonPay: {type: GraphQLInt},
    defaultCurrencyUomId: {type: GraphQLString},
    defaultLocaleString: {type: GraphQLString},
    defaultPassword: {type: GraphQLString},
    defaultSalesChannelEnumId: {type: GraphQLString},
    defaultTimeZoneString: {type: GraphQLString},
    digProdUploadCategoryId: {type: GraphQLString},
    digitalItemApprovedStatus: {type: GraphQLString},
    enableAutoSuggestionList: {type: GraphQLBoolean},
    enableDigProdUpload: {type: GraphQLBoolean},
    explodeOrderItems: {type: GraphQLBoolean},
    headerApprovedStatus: {type: GraphQLString},
    headerCancelStatus: {type: GraphQLString},
    headerDeclinedStatus: {type: GraphQLString},
    inventoryFacilityId: {type: GraphQLString},
    isDemoStore: {type: GraphQLBoolean},
    isImmediatelyFulfilled: {type: GraphQLBoolean},
    itemApprovedStatus: {type: GraphQLString},
    itemCancelStatus: {type: GraphQLString},
    itemDeclinedStatus: {type: GraphQLString},
    managedByLot: {type: GraphQLBoolean},
    manualAuthIsCapture: {type: GraphQLBoolean},
    oldHeaderLogo: {type: GraphQLString},
    oldHeaderMiddleBackground: {type: GraphQLString},
    oldHeaderRightBackground: {type: GraphQLString},
    oldStyleSheet: {type: GraphQLString},
    oneInventoryFacility: {type: GraphQLBoolean},
    orderDecimalQuantity: {type: GraphQLBoolean},
    orderNumberPrefix: {type: GraphQLString},
    payToPartyId: {type: GraphQLString},
    primaryStoreGroupId: {type: GraphQLString},
    prodSearchExcludeVariants: {type: GraphQLBoolean},
    productStoreId: {type: GraphQLString},
    prorateShipping: {type: GraphQLBoolean},
    prorateTaxes: {type: GraphQLBoolean},
    reqReturnInventoryReceive: {type: GraphQLBoolean},
    reqShipAddrForDigItems: {type: GraphQLBoolean},
    requireCustomerRole: {type: GraphQLBoolean},
    requireInventory: {type: GraphQLBoolean},
    requirementMethodEnumId: {type: GraphQLString},
    reserveInventory: {type: GraphQLBoolean},
    reserveOrderEnumId: {type: GraphQLString},
    retryFailedAuths: {type: GraphQLBoolean},
    selectPaymentTypePerItem: {type: GraphQLBoolean},
    setOwnerUponIssuance: {type: GraphQLBoolean},
    shipIfCaptureFails: {type: GraphQLBoolean},
    showCheckoutGiftOptions: {type: GraphQLBoolean},
    showOutOfStockProducts: {type: GraphQLBoolean},
    showPricesWithVatTax: {type: GraphQLBoolean},
    showTaxIsExempt: {type: GraphQLBoolean},
    splitPayPrefPerShpGrp: {type: GraphQLBoolean},
    storeCreditAccountEnumId: {type: GraphQLString},
    storeCreditValidDays: {type: GraphQLInt},
    storeName: {type: GraphQLString},
    subtitle: {type: GraphQLString},
    title: {type: GraphQLString},
    usePrimaryEmailUsername: {type: GraphQLBoolean},
    vatTaxAuthGeoId: {type: GraphQLString},
    vatTaxAuthPartyId: {type: GraphQLString},
    viewCartOnAdd: {type: GraphQLBoolean},
    visualThemeId: {type: GraphQLString}
  })
});

export {ProductStoreInputType};
    