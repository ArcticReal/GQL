
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
    productFeatureApplAttrs: {
      type: new GraphQLList(ProductFeatureApplAttrType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productFeatureApplAttrs/find?productId=${product.productId}`)
    },
    shoppingListItems: {
      type: new GraphQLList(ShoppingListItemType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`shoppingListItems/find?productId=${product.productId}`)
    },
    agreementProductAppls: {
      type: new GraphQLList(AgreementProductApplType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`agreementProductAppls/find?productId=${product.productId}`)
    },
    productAssocs: {
      type: new GraphQLList(ProductAssocType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productAssocs/find?productId=${product.productId}`)
    },
    productManufacturingRules: {
      type: new GraphQLList(ProductManufacturingRuleType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productManufacturingRules/find?productId=${product.productId}`)
    },
    costComponents: {
      type: new GraphQLList(CostComponentType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`costComponents/find?productId=${product.productId}`)
    },
    productReviews: {
      type: new GraphQLList(ProductReviewType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productReviews/find?productId=${product.productId}`)
    },
    supplierProducts: {
      type: new GraphQLList(SupplierProductType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`supplierProducts/find?productId=${product.productId}`)
    },
    productGroupOrders: {
      type: new GraphQLList(ProductGroupOrderType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productGroupOrders/find?productId=${product.productId}`)
    },
    productAttributes: {
      type: new GraphQLList(ProductAttributeType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productAttributes/find?productId=${product.productId}`)
    },
    salesForecastDetails: {
      type: new GraphQLList(SalesForecastDetailType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`salesForecastDetails/find?productId=${product.productId}`)
    },
    workEffortGoodStandards: {
      type: new GraphQLList(WorkEffortGoodStandardType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`workEffortGoodStandards/find?productId=${product.productId}`)
    },
    productFacilities: {
      type: new GraphQLList(ProductFacilityType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productFacilitys/find?productId=${product.productId}`)
    },
    productGlAccounts: {
      type: new GraphQLList(ProductGlAccountType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productGlAccounts/find?productId=${product.productId}`)
    },
    productGeos: {
      type: new GraphQLList(ProductGeoType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productGeos/find?productId=${product.productId}`)
    },
    productContents: {
      type: new GraphQLList(ProductContentType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productContents/find?productId=${product.productId}`)
    },
    vendorProducts: {
      type: new GraphQLList(VendorProductType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`vendorProducts/find?productId=${product.productId}`)
    },
    orderSummaryEntries: {
      type: new GraphQLList(OrderSummaryEntryType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`orderSummaryEntrys/find?productId=${product.productId}`)
    },
    custRequestItems: {
      type: new GraphQLList(CustRequestItemType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`custRequestItems/find?productId=${product.productId}`)
    },
    agreements: {
      type: new GraphQLList(AgreementType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`agreements/find?productId=${product.productId}`)
    },
    shipmentPackageContents: {
      type: new GraphQLList(ShipmentPackageContentType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`shipmentPackageContents/find?productId=${product.productId}`)
    },
    partyNeeds: {
      type: new GraphQLList(PartyNeedType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`partyNeeds/find?productId=${product.productId}`)
    },
    productFeatureAppls: {
      type: new GraphQLList(ProductFeatureApplType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productFeatureAppls/find?productId=${product.productId}`)
    },
    productConfigProducts: {
      type: new GraphQLList(ProductConfigProductType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productConfigProducts/find?productId=${product.productId}`)
    },
    productSubscriptionResources: {
      type: new GraphQLList(ProductSubscriptionResourceType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productSubscriptionResources/find?productId=${product.productId}`)
    },
    fixedAssets: {
      type: new GraphQLList(FixedAssetType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`fixedAssets/find?productId=${product.productId}`)
    },
    productCostComponentCalcs: {
      type: new GraphQLList(ProductCostComponentCalcType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productCostComponentCalcs/find?productId=${product.productId}`)
    },
    productPaymentMethodTypes: {
      type: new GraphQLList(ProductPaymentMethodTypeType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productPaymentMethodTypes/find?productId=${product.productId}`)
    },
    goodIdentifications: {
      type: new GraphQLList(GoodIdentificationType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`goodIdentifications/find?productId=${product.productId}`)
    },
    inventoryItemTempReses: {
      type: new GraphQLList(InventoryItemTempResType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemTempRess/find?productId=${product.productId}`)
    },
    productPromoProducts: {
      type: new GraphQLList(ProductPromoProductType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productPromoProducts/find?productId=${product.productId}`)
    },
    fixedAssetProducts: {
      type: new GraphQLList(FixedAssetProductType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetProducts/find?productId=${product.productId}`)
    },
    communicationEventProducts: {
      type: new GraphQLList(CommunicationEventProductType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`communicationEventProducts/find?productId=${product.productId}`)
    },
    productCategoryMembers: {
      type: new GraphQLList(ProductCategoryMemberType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productCategoryMembers/find?productId=${product.productId}`)
    },
    productKeywords: {
      type: new GraphQLList(ProductKeywordType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productKeywords/find?productId=${product.productId}`)
    },
    mrpEvents: {
      type: new GraphQLList(MrpEventType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`mrpEvents/find?productId=${product.productId}`)
    },
    inventoryItems: {
      type: new GraphQLList(InventoryItemType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`inventoryItems/find?productId=${product.productId}`)
    },
    productCalculatedInfos: {
      type: new GraphQLList(ProductCalculatedInfoType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productCalculatedInfos/find?productId=${product.productId}`)
    },
    invoiceItems: {
      type: new GraphQLList(InvoiceItemType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`invoiceItems/find?productId=${product.productId}`)
    },
    productMaints: {
      type: new GraphQLList(ProductMaintType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productMaints/find?productId=${product.productId}`)
    },
    orderItems: {
      type: new GraphQLList(OrderItemType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`orderItems/find?productId=${product.productId}`)
    },
    shipmentItems: {
      type: new GraphQLList(ShipmentItemType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`shipmentItems/find?productId=${product.productId}`)
    },
    productFacilityLocations: {
      type: new GraphQLList(ProductFacilityLocationType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productFacilityLocations/find?productId=${product.productId}`)
    },
    reorderGuidelines: {
      type: new GraphQLList(ReorderGuidelineType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`reorderGuidelines/find?productId=${product.productId}`)
    },
    productConfigs: {
      type: new GraphQLList(ProductConfigType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productConfigs/find?productId=${product.productId}`)
    },
    productRoles: {
      type: new GraphQLList(ProductRoleType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productRoles/find?productId=${product.productId}`)
    },
    returnItems: {
      type: new GraphQLList(ReturnItemType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`returnItems/find?productId=${product.productId}`)
    },
    productOrderItems: {
      type: new GraphQLList(ProductOrderItemType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productOrderItems/find?productId=${product.productId}`)
    },
    subscriptions: {
      type: new GraphQLList(SubscriptionType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`subscriptions/find?productId=${product.productId}`)
    },
    cartAbandonedLines: {
      type: new GraphQLList(CartAbandonedLineType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`cartAbandonedLines/find?productId=${product.productId}`)
    },
    shipmentReceipts: {
      type: new GraphQLList(ShipmentReceiptType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`shipmentReceipts/find?productId=${product.productId}`)
    },
    productAverageCosts: {
      type: new GraphQLList(ProductAverageCostType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productAverageCosts/find?productId=${product.productId}`)
    },
    productPrices: {
      type: new GraphQLList(ProductPriceType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productPrices/find?productId=${product.productId}`)
    },
    quoteItems: {
      type: new GraphQLList(QuoteItemType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`quoteItems/find?productId=${product.productId}`)
    },
    productConfigStatses: {
      type: new GraphQLList(ProductConfigStatsType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productConfigStatss/find?productId=${product.productId}`)
    },
    productMeters: {
      type: new GraphQLList(ProductMeterType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productMeters/find?productId=${product.productId}`)
    },
    requirements: {
      type: new GraphQLList(RequirementType),
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`requirements/find?productId=${product.productId}`)
    }
  })
});

export {ProductType};
    




const ProductInputType = new GraphQLInputObjectType({
  name: 'ProductInputType',
  description: 'input type for Product in product',

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
    createdByUserLogin: {type: GraphQLString},
    manufacturerPartyId: {type: GraphQLString},
    brandName: {type: GraphQLString},
    requireAmount: {type: GraphQLBoolean},
    productId: {type: GraphQLString},
    smallImageUrl: {type: GraphQLString},
    taxable: {type: GraphQLBoolean},
    primaryProductCategoryId: {type: GraphQLString},
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
    lastModifiedByUserLogin: {type: GraphQLString},
    virtualVariantMethodEnum: {type: GraphQLString},
    shippingWeight: {type: GraphQLFloat},
    shippingWidth: {type: GraphQLFloat},
    shippingDepth: {type: GraphQLFloat},
    reservMaxPersons: {type: GraphQLFloat},
    fixedAmount: {type: GraphQLFloat},
    inventoryItemTypeId: {type: GraphQLString},
    piecesIncluded: {type: GraphQLInt},
    productDepth: {type: GraphQLFloat},
    facilityId: {type: GraphQLString},
    comments: {type: GraphQLString},
    releaseDate: {type: GraphQLString},
    productHeight: {type: GraphQLFloat},
    lastModifiedDate: {type: GraphQLString},
    defaultShipmentBoxTypeId: {type: GraphQLString},
    orderDecimalQuantity: {type: GraphQLBoolean},
    inventoryMessage: {type: GraphQLString},
    productWeight: {type: GraphQLFloat},
    depthUomId: {type: GraphQLString},
    productTypeId: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    isVariant: {type: GraphQLBoolean},
    largeImageUrl: {type: GraphQLString},
    requirementMethodEnumId: {type: GraphQLString}
  })
});

export {ProductInputType};
    