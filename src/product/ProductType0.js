
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {Geo} from '../product/Geo.js';
import {UserLogin} from '../product/UserLogin.js';
import {Party} from '../product/Party.js';
import {ProductCategory} from '../product/ProductCategory.js';
import {UserLogin} from '../product/UserLogin.js';
import {InventoryItemType} from '../product/InventoryItemType.js';
import {Facility} from '../product/Facility.js';
import {ShipmentBoxType} from '../product/ShipmentBoxType.js';
import {ProductType} from '../product/ProductType.js';


const Product = new GraphQLObjectType({
  name: 'ProductType',
  description: 'Type for Product in product',

  fields: () => ({
    originGeo: {
      type: GeoType,
      args : {originGeoId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`geos/find?geoId=${args.originGeoId}`)
    },
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
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`userLogins/find?userLoginId=${args.createdByUserLogin}`)
    },
    manufacturerParty: {
      type: PartyType,
      args : {manufacturerPartyId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`partys/find?partyId=${args.manufacturerPartyId}`)
    },
    brandName: {type: GraphQLString},
    requireAmount: {type: GraphQLBoolean},
    productId: {type: GraphQLString},
    smallImageUrl: {type: GraphQLString},
    taxable: {type: GraphQLBoolean},
    primaryProductCategory: {
      type: ProductCategoryType,
      args : {primaryProductCategoryId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productCategorys/find?productCategoryId=${args.primaryProductCategoryId}`)
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
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`userLogins/find?userLoginId=${args.lastModifiedByUserLogin}`)
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
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemTypes/find?inventoryItemTypeId=${args.inventoryItemTypeId}`)
    },
    piecesIncluded: {type: GraphQLInt},
    productDepth: {type: GraphQLFloat},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`facilitys/find?=${args.facilityId}`)
    },
    comments: {type: GraphQLString},
    releaseDate: {type: GraphQLString},
    productHeight: {type: GraphQLFloat},
    lastModifiedDate: {type: GraphQLString},
    defaultShipmentBoxType: {
      type: ShipmentBoxTypeType,
      args : {defaultShipmentBoxTypeId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`shipmentBoxTypes/find?shipmentBoxTypeId=${args.defaultShipmentBoxTypeId}`)
    },
    orderDecimalQuantity: {type: GraphQLBoolean},
    inventoryMessage: {type: GraphQLString},
    productWeight: {type: GraphQLFloat},
    depthUomId: {type: GraphQLString},
    productType: {
      type: ProductTypeType,
      args : {productTypeId: {type: GraphQLString}},
      resolve: (product, args, {loaders}) => loaders.ofbizArray.load(`productTypes/find?=${args.productTypeId}`)
    },
    createdDate: {type: GraphQLString},
    isVariant: {type: GraphQLBoolean},
    largeImageUrl: {type: GraphQLString},
    requirementMethodEnumId: {type: GraphQLString}
  })
});

export {Product};
    