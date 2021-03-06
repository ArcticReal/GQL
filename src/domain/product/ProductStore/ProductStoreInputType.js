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
    