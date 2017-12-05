
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {StatusItem} from '../product/StatusItem.js';
import {Facility} from '../product/Facility.js';
import {StatusItem} from '../product/StatusItem.js';
import {StatusItem} from '../product/StatusItem.js';
import {StatusItem} from '../product/StatusItem.js';
import {StatusItem} from '../product/StatusItem.js';
import {ProductStoreGroup} from '../product/ProductStoreGroup.js';
import {StatusItem} from '../product/StatusItem.js';
import {StatusItem} from '../product/StatusItem.js';
import {TaxAuthority} from '../product/TaxAuthority.js';
import {Party} from '../product/Party.js';


const ProductStore = new GraphQLObjectType({
  name: 'ProductStoreType',
  description: 'Type for ProductStore in product',

  fields: () => ({
    viewCartOnAdd: {type: GraphQLBoolean},
    requireCustomerRole: {type: GraphQLBoolean},
    companyName: {type: GraphQLString},
    headerDeclinedStatus: {
      type: StatusItemType,
      args : {headerDeclinedStatus: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`statusItems/find?statusId=${args.headerDeclinedStatus}`)
    },
    requireInventory: {type: GraphQLBoolean},
    checkInventory: {type: GraphQLBoolean},
    autoApproveInvoice: {type: GraphQLBoolean},
    addToCartRemoveIncompat: {type: GraphQLBoolean},
    enableAutoSuggestionList: {type: GraphQLBoolean},
    defaultSalesChannelEnumId: {type: GraphQLString},
    autoApproveOrder: {type: GraphQLBoolean},
    allowPassword: {type: GraphQLBoolean},
    showTaxIsExempt: {type: GraphQLBoolean},
    oldHeaderLogo: {type: GraphQLString/*this was an Object TODO find a solution*/},
    autoSaveCart: {type: GraphQLBoolean},
    inventoryFacility: {
      type: FacilityType,
      args : {inventoryFacilityId: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`facilitys/find?facilityId=${args.inventoryFacilityId}`)
    },
    headerApprovedStatus: {
      type: StatusItemType,
      args : {headerApprovedStatus: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`statusItems/find?statusId=${args.headerApprovedStatus}`)
    },
    oldHeaderMiddleBackground: {type: GraphQLString/*this was an Object TODO find a solution*/},
    defaultTimeZoneString: {type: GraphQLString},
    prorateTaxes: {type: GraphQLBoolean},
    showCheckoutGiftOptions: {type: GraphQLBoolean},
    oldStyleSheet: {type: GraphQLString/*this was an Object TODO find a solution*/},
    manualAuthIsCapture: {type: GraphQLBoolean},
    itemDeclinedStatus: {
      type: StatusItemType,
      args : {itemDeclinedStatus: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`statusItems/find?statusId=${args.itemDeclinedStatus}`)
    },
    visualThemeId: {type: GraphQLString},
    storeCreditAccountEnumId: {type: GraphQLString},
    showOutOfStockProducts: {type: GraphQLBoolean},
    itemApprovedStatus: {
      type: StatusItemType,
      args : {itemApprovedStatus: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`statusItems/find?statusId=${args.itemApprovedStatus}`)
    },
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
    headerCancelStatus: {
      type: StatusItemType,
      args : {headerCancelStatus: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`statusItems/find?statusId=${args.headerCancelStatus}`)
    },
    title: {type: GraphQLString},
    primaryStoreGroup: {
      type: ProductStoreGroupType,
      args : {primaryStoreGroupId: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`productStoreGroups/find?productStoreGroupId=${args.primaryStoreGroupId}`)
    },
    oldHeaderRightBackground: {type: GraphQLString/*this was an Object TODO find a solution*/},
    enableDigProdUpload: {type: GraphQLBoolean},
    autoOrderCcTryOtherCards: {type: GraphQLBoolean},
    autoOrderCcTryLaterMax: {type: GraphQLInt},
    digitalItemApprovedStatus: {
      type: StatusItemType,
      args : {digitalItemApprovedStatus: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`statusItems/find?statusId=${args.digitalItemApprovedStatus}`)
    },
    storeName: {type: GraphQLString},
    reserveInventory: {type: GraphQLBoolean},
    productStoreId: {type: GraphQLString},
    isImmediatelyFulfilled: {type: GraphQLBoolean},
    defaultPassword: {type: GraphQLString},
    itemCancelStatus: {
      type: StatusItemType,
      args : {itemCancelStatus: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`statusItems/find?statusId=${args.itemCancelStatus}`)
    },
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
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`taxAuthoritys/find?taxAuthGeoId=${args.vatTaxAuthGeoId}`)
    },
    vatTaxAuthPartyId: {type: GraphQLString},
    daysToCancelNonPay: {type: GraphQLInt},
    requirementMethodEnumId: {type: GraphQLString},
    payToParty: {
      type: PartyType,
      args : {payToPartyId: {type: GraphQLString}},
      resolve: (productStore, args, {loaders}) => loaders.ofbizArray.load(`partys/find?partyId=${args.payToPartyId}`)
    },
    defaultLocaleString: {type: GraphQLString}
  })
});

export {ProductStore};
    