
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ReturnItemType} from '../order/ReturnItemType.js';
import {InventoryItemTypeType} from '../product/InventoryItemTypeType.js';
import {PartyNeedType} from '../party/PartyNeedType.js';
import {QuoteItemType} from '../order/QuoteItemType.js';
import {FixedAssetType} from '../accounting/FixedAssetType.js';
import {SalesForecastDetailType} from '../marketing/SalesForecastDetailType.js';
import {ReorderGuidelineType} from '../product/ReorderGuidelineType.js';
import {ProductFacilityLocationType} from '../product/ProductFacilityLocationType.js';
import {ShipmentBoxTypeType} from '../shipment/ShipmentBoxTypeType.js';
import {ProductFeatureApplType} from '../product/ProductFeatureApplType.js';
import {InventoryItemTempResType} from '../product/InventoryItemTempResType.js';
import {ProductAssocType} from '../product/ProductAssocType.js';
import {SubscriptionType} from '../product/SubscriptionType.js';
import {UserLoginType} from '../login/UserLoginType.js';
import {VendorProductType} from '../product/VendorProductType.js';
import {FixedAssetProductType} from '../accounting/FixedAssetProductType.js';
import {ProductFacilityType} from '../product/ProductFacilityType.js';
import {ProductAverageCostType} from '../accounting/ProductAverageCostType.js';
import {ShipmentReceiptType} from '../shipment/ShipmentReceiptType.js';
import {ProductTypeType} from '../product/ProductTypeType.js';
import {ShipmentPackageContentType} from '../shipment/ShipmentPackageContentType.js';
import {ProductConfigStatsType} from '../product/ProductConfigStatsType.js';
import {ProductContentType} from '../product/ProductContentType.js';
import {RequirementType} from '../order/RequirementType.js';
import {ProductCategoryType} from '../product/ProductCategoryType.js';
import {WorkEffortGoodStandardType} from '../workeffort/WorkEffortGoodStandardType.js';
import {CartAbandonedLineType} from '../order/CartAbandonedLineType.js';
import {InventoryItemType} from '../product/InventoryItemType.js';
import {ProductCostComponentCalcType} from '../product/ProductCostComponentCalcType.js';
import {InvoiceItemType} from '../accounting/InvoiceItemType.js';
import {ProductMeterType} from '../product/ProductMeterType.js';
import {CostComponentType} from '../product/CostComponentType.js';
import {ProductFeatureApplAttrType} from '../product/ProductFeatureApplAttrType.js';
import {ProductConfigType} from '../product/ProductConfigType.js';
import {ProductPriceType} from '../product/ProductPriceType.js';
import {ProductAttributeType} from '../product/ProductAttributeType.js';
import {ProductGeoType} from '../product/ProductGeoType.js';
import {ProductPromoProductType} from '../product/ProductPromoProductType.js';
import {CommunicationEventProductType} from '../party/CommunicationEventProductType.js';
import {ProductReviewType} from '../product/ProductReviewType.js';
import {ProductManufacturingRuleType} from '../manufacturing/ProductManufacturingRuleType.js';
import {ProductOrderItemType} from '../order/ProductOrderItemType.js';
import {SupplierProductType} from '../product/SupplierProductType.js';
import {PartyType} from '../party/PartyType.js';
import {ProductGroupOrderType} from '../product/ProductGroupOrderType.js';
import {ProductKeywordType} from '../product/ProductKeywordType.js';
import {CustRequestItemType} from '../order/CustRequestItemType.js';
import {ProductConfigProductType} from '../product/ProductConfigProductType.js';
import {ProductCalculatedInfoType} from '../product/ProductCalculatedInfoType.js';
import {ProductRoleType} from '../product/ProductRoleType.js';
import {ShoppingListItemType} from '../order/ShoppingListItemType.js';
import {ProductGlAccountType} from '../product/ProductGlAccountType.js';
import {MrpEventType} from '../manufacturing/MrpEventType.js';
import {ShipmentItemType} from '../shipment/ShipmentItemType.js';
import {AgreementProductApplType} from '../party/AgreementProductApplType.js';
import {ProductSubscriptionResourceType} from '../product/ProductSubscriptionResourceType.js';
import {AgreementType} from '../party/AgreementType.js';
import {OrderSummaryEntryType} from '../order/OrderSummaryEntryType.js';
import {ProductCategoryMemberType} from '../product/ProductCategoryMemberType.js';
import {ProductMaintType} from '../product/ProductMaintType.js';
import {ProductPaymentMethodTypeType} from '../product/ProductPaymentMethodTypeType.js';
import {OrderItemType} from '../order/OrderItemType.js';
import {FacilityType} from '../product/FacilityType.js';
import {GoodIdentificationType} from '../product/GoodIdentificationType.js';


const ProductType = new GraphQLObjectType({
  name: 'ProductType',
  description: 'Type for Product in product',

  fields: () => ({
    originGeoId: {type: GraphQLString},
    detailScreen: {type: GraphQLString},
    requireInventory: {type: GraphQLBoolean},
    quantityUomId: {type: GraphQLString},
    mediumImageUrl: {type: GraphQLString},
    productName: {type: GraphQLString},
    introductionDate: {type: GraphQLString},
    shippingHeight: {type: GraphQLFloat},
    originalImageUrl: {type: GraphQLString},
    inShippingBox: {type: GraphQLBoolean},
    detailImageUrl: {type: GraphQLString},
    supportDiscontinuationDate: {type: GraphQLString},
    productWidth: {type: GraphQLFloat},
    includeInPromotions: {type: GraphQLBoolean},
    configId: {type: GraphQLString},
    billOfMaterialLevel: {type: GraphQLInt},
    lotIdFilledIn: {type: GraphQLString},
    productRating: {type: GraphQLFloat},
    createdByUserLogin: {
      type: UserLoginType,
      args : {createdByUserLogin: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${product.createdByUserLogin}`)
    },
    manufacturerParty: {
      type: PartyType,
      args : {manufacturerPartyId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${product.manufacturerPartyId}`)
    },
    brandName: {type: GraphQLString},
    requireAmount: {type: GraphQLBoolean},
    productId: {type: GraphQLString},
    smallImageUrl: {type: GraphQLString},
    taxable: {type: GraphQLBoolean},
    primaryProductCategory: {
      type: ProductCategoryType,
      args : {primaryProductCategoryId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbiz.load(`productCategorys/find?productCategoryId=${product.primaryProductCategoryId}`)
    },
    salesDiscontinuationDate: {type: GraphQLString},
    salesDiscWhenNotAvail: {type: GraphQLBoolean},
    returnable: {type: GraphQLBoolean},
    weightUomId: {type: GraphQLString},
    isVirtual: {type: GraphQLBoolean},
    priceDetailText: {type: GraphQLString},
    reserv2ndPPPerc: {type: GraphQLFloat},
    widthUomId: {type: GraphQLString},
    longDescription: {type: GraphQLString},
    diameterUomId: {type: GraphQLString},
    autoCreateKeywords: {type: GraphQLBoolean},
    amountUomTypeId: {type: GraphQLString},
    productDiameter: {type: GraphQLFloat},
    ratingTypeEnum: {type: GraphQLString},
    description: {type: GraphQLString},
    chargeShipping: {type: GraphQLBoolean},
    reservNthPPPerc: {type: GraphQLFloat},
    quantityIncluded: {type: GraphQLFloat},
    heightUomId: {type: GraphQLString},
    internalName: {type: GraphQLString},
    lastModifiedByUserLogin: {
      type: UserLoginType,
      args : {lastModifiedByUserLogin: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${product.lastModifiedByUserLogin}`)
    },
    virtualVariantMethodEnum: {type: GraphQLString},
    shippingWeight: {type: GraphQLFloat},
    shippingWidth: {type: GraphQLFloat},
    shippingDepth: {type: GraphQLFloat},
    reservMaxPersons: {type: GraphQLFloat},
    fixedAmount: {type: GraphQLFloat},
    inventoryItemType: {
      type: InventoryItemTypeType,
      args : {inventoryItemTypeId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbiz.load(`inventoryItemTypes/find?inventoryItemTypeId=${product.inventoryItemTypeId}`)
    },
    piecesIncluded: {type: GraphQLInt},
    productDepth: {type: GraphQLFloat},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbiz.load(`facilitys/find?facilityId=${product.facilityId}`)
    },
    comments: {type: GraphQLString},
    releaseDate: {type: GraphQLString},
    productHeight: {type: GraphQLFloat},
    lastModifiedDate: {type: GraphQLString},
    defaultShipmentBoxType: {
      type: ShipmentBoxTypeType,
      args : {defaultShipmentBoxTypeId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbiz.load(`shipmentBoxTypes/find?shipmentBoxTypeId=${product.defaultShipmentBoxTypeId}`)
    },
    orderDecimalQuantity: {type: GraphQLBoolean},
    inventoryMessage: {type: GraphQLString},
    productWeight: {type: GraphQLFloat},
    depthUomId: {type: GraphQLString},
    productType: {
      type: ProductTypeType,
      args : {productTypeId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbiz.load(`productTypes/find?productTypeId=${product.productTypeId}`)
    },
    createdDate: {type: GraphQLString},
    isVariant: {type: GraphQLBoolean},
    largeImageUrl: {type: GraphQLString},
    requirementMethodEnumId: {type: GraphQLString},
    productFeatureApplAttr: {
      type: new GraphQLList(ProductFeatureApplAttrType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productFeatureApplAttrs/find?productId=${product.productId}`)
    },
    shoppingListItem: {
      type: new GraphQLList(ShoppingListItemType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`shoppingListItems/find?productId=${product.productId}`)
    },
    agreementProductAppl: {
      type: new GraphQLList(AgreementProductApplType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`agreementProductAppls/find?productId=${product.productId}`)
    },
    productAssoc: {
      type: new GraphQLList(ProductAssocType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productAssocs/find?productId=${product.productId}`)
    },
    productManufacturingRule: {
      type: new GraphQLList(ProductManufacturingRuleType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productManufacturingRules/find?productId=${product.productId}`)
    },
    costComponent: {
      type: new GraphQLList(CostComponentType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`costComponents/find?productId=${product.productId}`)
    },
    productReview: {
      type: new GraphQLList(ProductReviewType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productReviews/find?productId=${product.productId}`)
    },
    supplierProduct: {
      type: new GraphQLList(SupplierProductType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`supplierProducts/find?productId=${product.productId}`)
    },
    productGroupOrder: {
      type: new GraphQLList(ProductGroupOrderType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productGroupOrders/find?productId=${product.productId}`)
    },
    productAttribute: {
      type: new GraphQLList(ProductAttributeType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productAttributes/find?productId=${product.productId}`)
    },
    salesForecastDetail: {
      type: new GraphQLList(SalesForecastDetailType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`salesForecastDetails/find?productId=${product.productId}`)
    },
    workEffortGoodStandard: {
      type: new GraphQLList(WorkEffortGoodStandardType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`workEffortGoodStandards/find?productId=${product.productId}`)
    },
    productFacility: {
      type: new GraphQLList(ProductFacilityType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productFacilitys/find?productId=${product.productId}`)
    },
    productGlAccount: {
      type: new GraphQLList(ProductGlAccountType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productGlAccounts/find?productId=${product.productId}`)
    },
    productGeo: {
      type: new GraphQLList(ProductGeoType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productGeos/find?productId=${product.productId}`)
    },
    productContent: {
      type: new GraphQLList(ProductContentType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productContents/find?productId=${product.productId}`)
    },
    vendorProduct: {
      type: new GraphQLList(VendorProductType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`vendorProducts/find?productId=${product.productId}`)
    },
    orderSummaryEntry: {
      type: new GraphQLList(OrderSummaryEntryType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`orderSummaryEntrys/find?productId=${product.productId}`)
    },
    custRequestItem: {
      type: new GraphQLList(CustRequestItemType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`custRequestItems/find?productId=${product.productId}`)
    },
    agreement: {
      type: new GraphQLList(AgreementType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`agreements/find?productId=${product.productId}`)
    },
    shipmentPackageContent: {
      type: new GraphQLList(ShipmentPackageContentType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`shipmentPackageContents/find?productId=${product.productId}`)
    },
    partyNeed: {
      type: new GraphQLList(PartyNeedType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`partyNeeds/find?productId=${product.productId}`)
    },
    productFeatureAppl: {
      type: new GraphQLList(ProductFeatureApplType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productFeatureAppls/find?productId=${product.productId}`)
    },
    productConfigProduct: {
      type: new GraphQLList(ProductConfigProductType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productConfigProducts/find?productId=${product.productId}`)
    },
    productSubscriptionResource: {
      type: new GraphQLList(ProductSubscriptionResourceType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productSubscriptionResources/find?productId=${product.productId}`)
    },
    fixedAsset: {
      type: new GraphQLList(FixedAssetType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`fixedAssets/find?productId=${product.productId}`)
    },
    productCostComponentCalc: {
      type: new GraphQLList(ProductCostComponentCalcType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productCostComponentCalcs/find?productId=${product.productId}`)
    },
    productPaymentMethodType: {
      type: new GraphQLList(ProductPaymentMethodTypeType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productPaymentMethodTypes/find?productId=${product.productId}`)
    },
    goodIdentification: {
      type: new GraphQLList(GoodIdentificationType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`goodIdentifications/find?productId=${product.productId}`)
    },
    inventoryItemTempRes: {
      type: new GraphQLList(InventoryItemTempResType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemTempRess/find?productId=${product.productId}`)
    },
    productPromoProduct: {
      type: new GraphQLList(ProductPromoProductType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productPromoProducts/find?productId=${product.productId}`)
    },
    fixedAssetProduct: {
      type: new GraphQLList(FixedAssetProductType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetProducts/find?productId=${product.productId}`)
    },
    communicationEventProduct: {
      type: new GraphQLList(CommunicationEventProductType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`communicationEventProducts/find?productId=${product.productId}`)
    },
    productCategoryMember: {
      type: new GraphQLList(ProductCategoryMemberType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productCategoryMembers/find?productId=${product.productId}`)
    },
    productKeyword: {
      type: new GraphQLList(ProductKeywordType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productKeywords/find?productId=${product.productId}`)
    },
    mrpEvent: {
      type: new GraphQLList(MrpEventType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`mrpEvents/find?productId=${product.productId}`)
    },
    inventoryItem: {
      type: new GraphQLList(InventoryItemType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`inventoryItems/find?productId=${product.productId}`)
    },
    productCalculatedInfo: {
      type: new GraphQLList(ProductCalculatedInfoType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productCalculatedInfos/find?productId=${product.productId}`)
    },
    invoiceItem: {
      type: new GraphQLList(InvoiceItemType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`invoiceItems/find?productId=${product.productId}`)
    },
    productMaint: {
      type: new GraphQLList(ProductMaintType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productMaints/find?productId=${product.productId}`)
    },
    orderItem: {
      type: new GraphQLList(OrderItemType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`orderItems/find?productId=${product.productId}`)
    },
    shipmentItem: {
      type: new GraphQLList(ShipmentItemType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`shipmentItems/find?productId=${product.productId}`)
    },
    productFacilityLocation: {
      type: new GraphQLList(ProductFacilityLocationType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productFacilityLocations/find?productId=${product.productId}`)
    },
    reorderGuideline: {
      type: new GraphQLList(ReorderGuidelineType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`reorderGuidelines/find?productId=${product.productId}`)
    },
    productConfig: {
      type: new GraphQLList(ProductConfigType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productConfigs/find?productId=${product.productId}`)
    },
    productRole: {
      type: new GraphQLList(ProductRoleType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productRoles/find?productId=${product.productId}`)
    },
    returnItem: {
      type: new GraphQLList(ReturnItemType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`returnItems/find?productId=${product.productId}`)
    },
    productOrderItem: {
      type: new GraphQLList(ProductOrderItemType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productOrderItems/find?productId=${product.productId}`)
    },
    subscription: {
      type: new GraphQLList(SubscriptionType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`subscriptions/find?productId=${product.productId}`)
    },
    cartAbandonedLine: {
      type: new GraphQLList(CartAbandonedLineType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`cartAbandonedLines/find?productId=${product.productId}`)
    },
    shipmentReceipt: {
      type: new GraphQLList(ShipmentReceiptType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`shipmentReceipts/find?productId=${product.productId}`)
    },
    productAverageCost: {
      type: new GraphQLList(ProductAverageCostType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productAverageCosts/find?productId=${product.productId}`)
    },
    productPrice: {
      type: new GraphQLList(ProductPriceType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productPrices/find?productId=${product.productId}`)
    },
    quoteItem: {
      type: new GraphQLList(QuoteItemType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`quoteItems/find?productId=${product.productId}`)
    },
    productConfigStats: {
      type: new GraphQLList(ProductConfigStatsType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productConfigStatss/find?productId=${product.productId}`)
    },
    productMeter: {
      type: new GraphQLList(ProductMeterType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productMeters/find?productId=${product.productId}`)
    },
    requirement: {
      type: new GraphQLList(RequirementType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`requirements/find?productId=${product.productId}`)
    }
  })
});

export {ProductType};
    