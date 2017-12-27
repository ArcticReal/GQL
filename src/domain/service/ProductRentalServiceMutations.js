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
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../framework/helpTypes.js';


const createFixedAssetAndLinkToProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz createFixedAssetAndLinkToProduct method',
  args:{productId: {type: GraphQLString},dateNextService: {type: GraphQLString},purchaseCostUomId: {type: GraphQLString},productionCapacity: {type: GraphQLFloat},acquireOrderId: {type: GraphQLString},locatedAtLocationSeqId: {type: GraphQLString},actualEndOfLife: {type: GraphQLString},dateLastServiced: {type: GraphQLString},acquireOrderItemSeqId: {type: GraphQLString},partyId: {type: GraphQLString},locatedAtFacilityId: {type: GraphQLString},depreciation: {type: GraphQLFloat},roleTypeId: {type: GraphQLString},dateAcquired: {type: GraphQLString},purchaseCost: {type: GraphQLFloat},serialNumber: {type: GraphQLString},fixedAssetTypeId: {type: GraphQLString},classEnumId: {type: GraphQLString},fixedAssetName: {type: GraphQLString},uomId: {type: GraphQLString},calendarId: {type: GraphQLString},salvageValue: {type: GraphQLFloat},fixedAssetId: {type: GraphQLString},parentFixedAssetId: {type: GraphQLString},expectedEndOfLife: {type: GraphQLString},instanceOfProductId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productRental/createFixedAssetAndLinkToProduct?productId=${args.productId}&dateNextService=${args.dateNextService}&purchaseCostUomId=${args.purchaseCostUomId}&productionCapacity=${args.productionCapacity}&acquireOrderId=${args.acquireOrderId}&locatedAtLocationSeqId=${args.locatedAtLocationSeqId}&actualEndOfLife=${args.actualEndOfLife}&dateLastServiced=${args.dateLastServiced}&acquireOrderItemSeqId=${args.acquireOrderItemSeqId}&partyId=${args.partyId}&locatedAtFacilityId=${args.locatedAtFacilityId}&depreciation=${args.depreciation}&roleTypeId=${args.roleTypeId}&dateAcquired=${args.dateAcquired}&purchaseCost=${args.purchaseCost}&serialNumber=${args.serialNumber}&fixedAssetTypeId=${args.fixedAssetTypeId}&classEnumId=${args.classEnumId}&fixedAssetName=${args.fixedAssetName}&uomId=${args.uomId}&calendarId=${args.calendarId}&salvageValue=${args.salvageValue}&fixedAssetId=${args.fixedAssetId}&parentFixedAssetId=${args.parentFixedAssetId}&expectedEndOfLife=${args.expectedEndOfLife}&instanceOfProductId=${args.instanceOfProductId}&`, null, req);
  }
};
export {createFixedAssetAndLinkToProduct};


const getProductFirstRelatedFixedAsset = {
  type: ResponseType,
  description: 'mutation for ofbiz getProductFirstRelatedFixedAsset method',
  args:{productId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productRental/getProductFirstRelatedFixedAsset?productId=${args.productId}&`, null, req);
  }
};
export {getProductFirstRelatedFixedAsset};
