
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductCategoryMemberType} from './product/ProductCategoryMemberType.js';
import {ProductCategoryType,SomeOtherType} from './product/ProductCategoryType.js';


const ProductType = new GraphQLObjectType({
  name: 'ProductTypeType',
  description: 'this is a product type',

  fields: () => ({
    originGeo: {
      type: GeoType,
      args : {originGeoId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`geos/find?geoId=${args.fieldName}`)
    },
    detailScreen: {type: GraphQLString},
    requireInventory: {type: GraphQLBoolean},
    quantityUom: {
      type: UomType,
      args : {quantityUomId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`uoms/find?uomId=${args.fieldName}`)
    },
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
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`userLogins/find?userLoginId=${args.fieldName}`)
    },
    manufacturerParty: {
      type: PartyType,
      args : {manufacturerPartyId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`partys/find?partyId=${args.fieldName}`)
    },
    brandName: {type: GraphQLString},
    requireAmount: {type: GraphQLBoolean},
    product: {
      type: ProductFeatureAndApplType,
      args : {productId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productFeatureAndAppls/find?=${args.fieldName}`)
    },
    smallImageUrl: {type: GraphQLString},
    taxable: {type: GraphQLBoolean},
    primaryProductCategory: {
      type: ProductCategoryType,
      args : {primaryProductCategoryId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productCategorys/find?productCategoryId=${args.fieldName}`)
    },
    salesDiscontinuationDate: {type: GraphQLString},
    salesDiscWhenNotAvail: {type: GraphQLBoolean},
    returnable: {type: GraphQLBoolean},
    weightUom: {
      type: UomType,
      args : {weightUomId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`uoms/find?uomId=${args.fieldName}`)
    },
    isVirtual: {type: GraphQLBoolean},
    priceDetailText: {type: GraphQLString},
    reserv2ndPPPerc: {type: GraphQLFloat},
    widthUom: {
      type: UomType,
      args : {widthUomId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`uoms/find?uomId=${args.fieldName}`)
    },
    longDescription: {type: GraphQLString},
    diameterUom: {
      type: UomType,
      args : {diameterUomId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`uoms/find?uomId=${args.fieldName}`)
    },
    autoCreateKeywords: {type: GraphQLBoolean},
    amountUomType: {
      type: UomTypeType,
      args : {amountUomTypeId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`uomTypes/find?uomTypeId=${args.fieldName}`)
    },
    productDiameter: {type: GraphQLFloat},
    ratingTypeEnum: {
      type: EnumerationType,
      args : {ratingTypeEnum: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`enumerations/find?enumId=${args.fieldName}`)
    },
    description: {type: GraphQLString},
    chargeShipping: {type: GraphQLBoolean},
    reservNthPPPerc: {type: GraphQLFloat},
    quantityIncluded: {type: GraphQLFloat},
    heightUom: {
      type: UomType,
      args : {heightUomId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`uoms/find?uomId=${args.fieldName}`)
    },
    internalName: {type: GraphQLString},
    lastModifiedByUserLogin: {
      type: UserLoginType,
      args : {lastModifiedByUserLogin: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`userLogins/find?userLoginId=${args.fieldName}`)
    },
    virtualVariantMethodEnum: {
      type: EnumerationType,
      args : {virtualVariantMethodEnum: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`enumerations/find?enumId=${args.fieldName}`)
    },
    shippingWeight: {type: GraphQLFloat},
    shippingWidth: {type: GraphQLFloat},
    shippingDepth: {type: GraphQLFloat},
    reservMaxPersons: {type: GraphQLFloat},
    fixedAmount: {type: GraphQLFloat},
    inventoryItemType: {
      type: InventoryItemTypeType,
      args : {inventoryItemTypeId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemTypes/find?inventoryItemTypeId=${args.fieldName}`)
    },
    piecesIncluded: {type: GraphQLInt},
    productDepth: {type: GraphQLFloat},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`facilitys/find?=${args.fieldName}`)
    },
    comments: {type: GraphQLString},
    releaseDate: {type: GraphQLString},
    productHeight: {type: GraphQLFloat},
    lastModifiedDate: {type: GraphQLString},
    defaultShipmentBoxType: {
      type: ShipmentBoxTypeType,
      args : {defaultShipmentBoxTypeId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`shipmentBoxTypes/find?shipmentBoxTypeId=${args.fieldName}`)
    },
    orderDecimalQuantity: {type: GraphQLBoolean},
    inventoryMessage: {type: GraphQLString},
    productWeight: {type: GraphQLFloat},
    depthUom: {
      type: UomType,
      args : {depthUomId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`uoms/find?uomId=${args.fieldName}`)
    },
    productType: {
      type: ProductTypeAttrType,
      args : {productTypeId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productTypeAttrs/find?=${args.fieldName}`)
    },
    createdDate: {type: GraphQLString},
    isVariant: {type: GraphQLBoolean},
    largeImageUrl: {type: GraphQLString},
    requirementMethodEnum: {
      type: EnumerationType,
      args : {requirementMethodEnumId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`enumerations/find?enumId=${args.fieldName}`)
    }
  })
});

export {ProductType};
    