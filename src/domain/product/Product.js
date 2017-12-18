
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

import {ReturnItemType} from '../order/ReturnItem.js';
import {InventoryItemTypeType} from '../product/InventoryItemType.js';
import {PartyNeedType} from '../party/PartyNeed.js';
import {QuoteItemType} from '../order/QuoteItem.js';
import {FixedAssetType} from '../accounting/FixedAsset.js';
import {SalesForecastDetailType} from '../marketing/SalesForecastDetail.js';
import {ReorderGuidelineType} from '../product/ReorderGuideline.js';
import {ProductFacilityLocationType} from '../product/ProductFacilityLocation.js';
import {ShipmentBoxTypeType} from '../shipment/ShipmentBoxType.js';
import {ProductFeatureApplType} from '../product/ProductFeatureAppl.js';
import {InventoryItemTempResType} from '../product/InventoryItemTempRes.js';
import {ProductAssocType} from '../product/ProductAssoc.js';
import {SubscriptionType} from '../product/Subscription.js';
import {UserLoginType} from '../login/UserLogin.js';
import {VendorProductType} from '../product/VendorProduct.js';
import {FixedAssetProductType} from '../accounting/FixedAssetProduct.js';
import {ProductFacilityType} from '../product/ProductFacility.js';
import {ProductAverageCostType} from '../accounting/ProductAverageCost.js';
import {ShipmentReceiptType} from '../shipment/ShipmentReceipt.js';
import {ProductTypeType} from '../product/ProductType.js';
import {ShipmentPackageContentType} from '../shipment/ShipmentPackageContent.js';
import {ProductConfigStatsType} from '../product/ProductConfigStats.js';
import {ProductContentType} from '../product/ProductContent.js';
import {RequirementType} from '../order/Requirement.js';
import {ProductCategoryType} from '../product/ProductCategory.js';
import {WorkEffortGoodStandardType} from '../workeffort/WorkEffortGoodStandard.js';
import {CartAbandonedLineType} from '../order/CartAbandonedLine.js';
import {InventoryItemType} from '../product/InventoryItem.js';
import {ProductCostComponentCalcType} from '../product/ProductCostComponentCalc.js';
import {InvoiceItemType} from '../accounting/InvoiceItem.js';
import {ProductMeterType} from '../product/ProductMeter.js';
import {CostComponentType} from '../product/CostComponent.js';
import {ProductFeatureApplAttrType} from '../product/ProductFeatureApplAttr.js';
import {ProductConfigType} from '../product/ProductConfig.js';
import {ProductPriceType} from '../product/ProductPrice.js';
import {ProductAttributeType} from '../product/ProductAttribute.js';
import {ProductGeoType} from '../product/ProductGeo.js';
import {ProductPromoProductType} from '../product/ProductPromoProduct.js';
import {CommunicationEventProductType} from '../party/CommunicationEventProduct.js';
import {ProductReviewType} from '../product/ProductReview.js';
import {ProductManufacturingRuleType} from '../manufacturing/ProductManufacturingRule.js';
import {ProductOrderItemType} from '../order/ProductOrderItem.js';
import {SupplierProductType} from '../product/SupplierProduct.js';
import {PartyType} from '../party/Party.js';
import {ProductGroupOrderType} from '../product/ProductGroupOrder.js';
import {ProductKeywordType} from '../product/ProductKeyword.js';
import {CustRequestItemType} from '../order/CustRequestItem.js';
import {ProductConfigProductType} from '../product/ProductConfigProduct.js';
import {ProductCalculatedInfoType} from '../product/ProductCalculatedInfo.js';
import {ProductRoleType} from '../product/ProductRole.js';
import {ShoppingListItemType} from '../order/ShoppingListItem.js';
import {ProductGlAccountType} from '../product/ProductGlAccount.js';
import {MrpEventType} from '../manufacturing/MrpEvent.js';
import {ShipmentItemType} from '../shipment/ShipmentItem.js';
import {AgreementProductApplType} from '../party/AgreementProductAppl.js';
import {ProductSubscriptionResourceType} from '../product/ProductSubscriptionResource.js';
import {AgreementType} from '../party/Agreement.js';
import {OrderSummaryEntryType} from '../order/OrderSummaryEntry.js';
import {ProductCategoryMemberType} from '../product/ProductCategoryMember.js';
import {ProductMaintType} from '../product/ProductMaint.js';
import {ProductPaymentMethodTypeType} from '../product/ProductPaymentMethodType.js';
import {OrderItemType} from '../order/OrderItem.js';
import {FacilityType} from '../product/Facility.js';
import {GoodIdentificationType} from '../product/GoodIdentification.js';


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
      resolve: (product, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${product.createdByUserLogin}`)
    },
    manufacturerParty: {
      type: PartyType,
      args : {manufacturerPartyId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${product.manufacturerPartyId}`)
    },
    brandName: {type: GraphQLString},
    requireAmount: {type: GraphQLBoolean},
    productId: {type: GraphQLString},
    smallImageUrl: {type: GraphQLString},
    taxable: {type: GraphQLBoolean},
    primaryProductCategory: {
      type: ProductCategoryType,
      args : {primaryProductCategoryId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbiz.load(`product/product/productCategorys/find?productCategoryId=${product.primaryProductCategoryId}`)
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
      resolve: (product, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${product.lastModifiedByUserLogin}`)
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
      resolve: (product, args, {loaders}) => loaders.ofbiz.load(`product/inventoryItem/inventoryItemTypes/find?inventoryItemTypeId=${product.inventoryItemTypeId}`)
    },
    piecesIncluded: {type: GraphQLInt},
    productDepth: {type: GraphQLFloat},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbiz.load(`product/facilitys/find?facilityId=${product.facilityId}`)
    },
    comments: {type: GraphQLString},
    releaseDate: {type: GraphQLString},
    productHeight: {type: GraphQLFloat},
    lastModifiedDate: {type: GraphQLString},
    defaultShipmentBoxType: {
      type: ShipmentBoxTypeType,
      args : {defaultShipmentBoxTypeId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/shipmentBoxTypes/find?shipmentBoxTypeId=${product.defaultShipmentBoxTypeId}`)
    },
    orderDecimalQuantity: {type: GraphQLBoolean},
    inventoryMessage: {type: GraphQLString},
    productWeight: {type: GraphQLFloat},
    depthUomId: {type: GraphQLString},
    productType: {
      type: ProductTypeType,
      args : {productTypeId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbiz.load(`product/product/productTypes/find?productTypeId=${product.productTypeId}`)
    },
    createdDate: {type: GraphQLString},
    isVariant: {type: GraphQLBoolean},
    largeImageUrl: {type: GraphQLString},
    requirementMethodEnumId: {type: GraphQLString},
    productFeatureApplAttrs: {
      type: new GraphQLList(ProductFeatureApplAttrType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`product/product/productFeatureApplAttrs/find?productId=${product.productId}`)
    },
    shoppingListItems: {
      type: new GraphQLList(ShoppingListItemType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`order/shoppingList/shoppingListItems/find?productId=${product.productId}`)
    },
    agreementProductAppls: {
      type: new GraphQLList(AgreementProductApplType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementProductAppls/find?productId=${product.productId}`)
    },
    productAssocs: {
      type: new GraphQLList(ProductAssocType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`product/product/productAssocs/find?productId=${product.productId}`)
    },
    productManufacturingRules: {
      type: new GraphQLList(ProductManufacturingRuleType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`manufacturing/productManufacturingRules/find?productId=${product.productId}`)
    },
    costComponents: {
      type: new GraphQLList(CostComponentType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`product/costComponents/find?productId=${product.productId}`)
    },
    productReviews: {
      type: new GraphQLList(ProductReviewType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`product/product/productReviews/find?productId=${product.productId}`)
    },
    supplierProducts: {
      type: new GraphQLList(SupplierProductType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`product/product/supplierProducts/find?productId=${product.productId}`)
    },
    productGroupOrders: {
      type: new GraphQLList(ProductGroupOrderType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`product/product/productGroupOrders/find?productId=${product.productId}`)
    },
    productAttributes: {
      type: new GraphQLList(ProductAttributeType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`product/product/productAttributes/find?productId=${product.productId}`)
    },
    salesForecastDetails: {
      type: new GraphQLList(SalesForecastDetailType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`marketing/salesForecast/salesForecastDetails/find?productId=${product.productId}`)
    },
    workEffortGoodStandards: {
      type: new GraphQLList(WorkEffortGoodStandardType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortGoodStandards/find?productId=${product.productId}`)
    },
    productFacilities: {
      type: new GraphQLList(ProductFacilityType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`product/facility/productFacilitys/find?productId=${product.productId}`)
    },
    productGlAccounts: {
      type: new GraphQLList(ProductGlAccountType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`product/product/productGlAccounts/find?productId=${product.productId}`)
    },
    productGeos: {
      type: new GraphQLList(ProductGeoType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`product/product/productGeos/find?productId=${product.productId}`)
    },
    productContents: {
      type: new GraphQLList(ProductContentType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`product/product/productContents/find?productId=${product.productId}`)
    },
    vendorProducts: {
      type: new GraphQLList(VendorProductType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`product/product/vendorProducts/find?productId=${product.productId}`)
    },
    orderSummaryEntries: {
      type: new GraphQLList(OrderSummaryEntryType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`order/orderSummaryEntrys/find?productId=${product.productId}`)
    },
    custRequestItems: {
      type: new GraphQLList(CustRequestItemType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`order/custRequest/custRequestItems/find?productId=${product.productId}`)
    },
    agreements: {
      type: new GraphQLList(AgreementType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`party/agreements/find?productId=${product.productId}`)
    },
    shipmentPackageContents: {
      type: new GraphQLList(ShipmentPackageContentType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentPackageContents/find?productId=${product.productId}`)
    },
    partyNeeds: {
      type: new GraphQLList(PartyNeedType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyNeeds/find?productId=${product.productId}`)
    },
    productFeatureAppls: {
      type: new GraphQLList(ProductFeatureApplType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`product/product/productFeatureAppls/find?productId=${product.productId}`)
    },
    productConfigProducts: {
      type: new GraphQLList(ProductConfigProductType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`product/product/productConfigProducts/find?productId=${product.productId}`)
    },
    productSubscriptionResources: {
      type: new GraphQLList(ProductSubscriptionResourceType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`product/product/productSubscriptionResources/find?productId=${product.productId}`)
    },
    fixedAssets: {
      type: new GraphQLList(FixedAssetType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAssets/find?productId=${product.productId}`)
    },
    productCostComponentCalcs: {
      type: new GraphQLList(ProductCostComponentCalcType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`product/costComponent/productCostComponentCalcs/find?productId=${product.productId}`)
    },
    productPaymentMethodTypes: {
      type: new GraphQLList(ProductPaymentMethodTypeType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPaymentMethodTypes/find?productId=${product.productId}`)
    },
    goodIdentifications: {
      type: new GraphQLList(GoodIdentificationType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`product/goodIdentifications/find?productId=${product.productId}`)
    },
    inventoryItemTempReses: {
      type: new GraphQLList(InventoryItemTempResType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`product/inventoryItem/inventoryItemTempRess/find?productId=${product.productId}`)
    },
    productPromoProducts: {
      type: new GraphQLList(ProductPromoProductType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPromoProducts/find?productId=${product.productId}`)
    },
    fixedAssetProducts: {
      type: new GraphQLList(FixedAssetProductType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAsset/fixedAssetProducts/find?productId=${product.productId}`)
    },
    communicationEventProducts: {
      type: new GraphQLList(CommunicationEventProductType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`party/communicationEvent/communicationEventProducts/find?productId=${product.productId}`)
    },
    productCategoryMembers: {
      type: new GraphQLList(ProductCategoryMemberType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`product/product/productCategoryMembers/find?productId=${product.productId}`)
    },
    productKeywords: {
      type: new GraphQLList(ProductKeywordType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`product/product/productKeywords/find?productId=${product.productId}`)
    },
    mrpEvents: {
      type: new GraphQLList(MrpEventType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`manufacturing/mrpEvents/find?productId=${product.productId}`)
    },
    inventoryItems: {
      type: new GraphQLList(InventoryItemType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`product/inventoryItems/find?productId=${product.productId}`)
    },
    productCalculatedInfos: {
      type: new GraphQLList(ProductCalculatedInfoType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`product/product/productCalculatedInfos/find?productId=${product.productId}`)
    },
    invoiceItems: {
      type: new GraphQLList(InvoiceItemType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceItems/find?productId=${product.productId}`)
    },
    productMaints: {
      type: new GraphQLList(ProductMaintType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`product/product/productMaints/find?productId=${product.productId}`)
    },
    orderItems: {
      type: new GraphQLList(OrderItemType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`order/orderItems/find?productId=${product.productId}`)
    },
    shipmentItems: {
      type: new GraphQLList(ShipmentItemType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentItems/find?productId=${product.productId}`)
    },
    productFacilityLocations: {
      type: new GraphQLList(ProductFacilityLocationType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`product/facility/productFacilityLocations/find?productId=${product.productId}`)
    },
    reorderGuidelines: {
      type: new GraphQLList(ReorderGuidelineType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`product/reorderGuidelines/find?productId=${product.productId}`)
    },
    productConfigs: {
      type: new GraphQLList(ProductConfigType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`product/product/productConfigs/find?productId=${product.productId}`)
    },
    productRoles: {
      type: new GraphQLList(ProductRoleType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`product/product/productRoles/find?productId=${product.productId}`)
    },
    returnItems: {
      type: new GraphQLList(ReturnItemType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`order/returnItems/find?productId=${product.productId}`)
    },
    productOrderItems: {
      type: new GraphQLList(ProductOrderItemType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/productOrderItems/find?productId=${product.productId}`)
    },
    subscriptions: {
      type: new GraphQLList(SubscriptionType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`product/subscriptions/find?productId=${product.productId}`)
    },
    cartAbandonedLines: {
      type: new GraphQLList(CartAbandonedLineType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`order/cartAbandonedLines/find?productId=${product.productId}`)
    },
    shipmentReceipts: {
      type: new GraphQLList(ShipmentReceiptType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentReceipts/find?productId=${product.productId}`)
    },
    productAverageCosts: {
      type: new GraphQLList(ProductAverageCostType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`accounting/productAverageCosts/find?productId=${product.productId}`)
    },
    productPrices: {
      type: new GraphQLList(ProductPriceType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPrices/find?productId=${product.productId}`)
    },
    quoteItems: {
      type: new GraphQLList(QuoteItemType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`order/quote/quoteItems/find?productId=${product.productId}`)
    },
    productConfigStatses: {
      type: new GraphQLList(ProductConfigStatsType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`product/product/productConfigStatss/find?productId=${product.productId}`)
    },
    productMeters: {
      type: new GraphQLList(ProductMeterType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`product/product/productMeters/find?productId=${product.productId}`)
    },
    requirements: {
      type: new GraphQLList(RequirementType),
      args : {},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`order/requirements/find?productId=${product.productId}`)
    }
  })
});

export {ProductType};
    




const ProductInputType = new GraphQLInputObjectType({
  name: 'ProductInputType',
  description: 'input type for Product',

  fields: () => ({
    amountUomTypeId: {type: GraphQLString},
    autoCreateKeywords: {type: GraphQLBoolean},
    billOfMaterialLevel: {type: GraphQLInt},
    brandName: {type: GraphQLString},
    chargeShipping: {type: GraphQLBoolean},
    comments: {type: GraphQLString},
    configId: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    defaultShipmentBoxTypeId: {type: GraphQLString},
    depthUomId: {type: GraphQLString},
    description: {type: GraphQLString},
    detailImageUrl: {type: GraphQLString},
    detailScreen: {type: GraphQLString},
    diameterUomId: {type: GraphQLString},
    facilityId: {type: GraphQLString},
    fixedAmount: {type: GraphQLFloat},
    heightUomId: {type: GraphQLString},
    inShippingBox: {type: GraphQLBoolean},
    includeInPromotions: {type: GraphQLBoolean},
    internalName: {type: GraphQLString},
    introductionDate: {type: GraphQLString},
    inventoryItemTypeId: {type: GraphQLString},
    inventoryMessage: {type: GraphQLString},
    isVariant: {type: GraphQLBoolean},
    isVirtual: {type: GraphQLBoolean},
    largeImageUrl: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    longDescription: {type: GraphQLString},
    lotIdFilledIn: {type: GraphQLString},
    manufacturerPartyId: {type: GraphQLString},
    mediumImageUrl: {type: GraphQLString},
    orderDecimalQuantity: {type: GraphQLBoolean},
    originGeoId: {type: GraphQLString},
    originalImageUrl: {type: GraphQLString},
    piecesIncluded: {type: GraphQLInt},
    priceDetailText: {type: GraphQLString},
    primaryProductCategoryId: {type: GraphQLString},
    productDepth: {type: GraphQLFloat},
    productDiameter: {type: GraphQLFloat},
    productHeight: {type: GraphQLFloat},
    productId: {type: GraphQLString},
    productName: {type: GraphQLString},
    productRating: {type: GraphQLFloat},
    productTypeId: {type: GraphQLString},
    productWeight: {type: GraphQLFloat},
    productWidth: {type: GraphQLFloat},
    quantityIncluded: {type: GraphQLFloat},
    quantityUomId: {type: GraphQLString},
    ratingTypeEnum: {type: GraphQLString},
    releaseDate: {type: GraphQLString},
    requireAmount: {type: GraphQLBoolean},
    requireInventory: {type: GraphQLBoolean},
    requirementMethodEnumId: {type: GraphQLString},
    reserv2ndPPPerc: {type: GraphQLFloat},
    reservMaxPersons: {type: GraphQLFloat},
    reservNthPPPerc: {type: GraphQLFloat},
    returnable: {type: GraphQLBoolean},
    salesDiscWhenNotAvail: {type: GraphQLBoolean},
    salesDiscontinuationDate: {type: GraphQLString},
    shippingDepth: {type: GraphQLFloat},
    shippingHeight: {type: GraphQLFloat},
    shippingWeight: {type: GraphQLFloat},
    shippingWidth: {type: GraphQLFloat},
    smallImageUrl: {type: GraphQLString},
    supportDiscontinuationDate: {type: GraphQLString},
    taxable: {type: GraphQLBoolean},
    variant: {type: GraphQLBoolean},
    virtual: {type: GraphQLBoolean},
    virtualVariantMethodEnum: {type: GraphQLString},
    weightUomId: {type: GraphQLString},
    widthUomId: {type: GraphQLString}
  })
});

export {ProductInputType};
    