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


const upsAddressValidation = {
  type: ResponseType,
  description: 'mutation for ofbiz upsAddressValidation method',
  args:{city: {type: GraphQLString},postalCode: {type: GraphQLString},stateProvinceGeoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentUps/upsAddressValidation?city=${args.city}postalCode=${args.postalCode}stateProvinceGeoId=${args.stateProvinceGeoId}`, null, req);
  }
};
export {upsAddressValidation};


const upsEmailReturnLabel = {
  type: ResponseType,
  description: 'mutation for ofbiz upsEmailReturnLabel method',
  args:{shipmentRouteSegmentId: {type: GraphQLString},shipmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentUps/upsEmailReturnLabel?shipmentRouteSegmentId=${args.shipmentRouteSegmentId}shipmentId=${args.shipmentId}`, null, req);
  }
};
export {upsEmailReturnLabel};


const upsRateEstimate = {
  type: ResponseType,
  description: 'mutation for ofbiz upsRateEstimate method',
  args:{carrierPartyId: {type: GraphQLString},carrierRoleTypeId: {type: GraphQLString},shippableWeight: {type: GraphQLFloat},productStoreId: {type: GraphQLString},shipmentMethodTypeId: {type: GraphQLString},shippableQuantity: {type: GraphQLFloat},shippableTotal: {type: GraphQLFloat},productStoreShipMethId: {type: GraphQLString},shippingContactMechId: {type: GraphQLString},shippingCountryCode: {type: GraphQLString},shipmentCustomMethodId: {type: GraphQLString},serviceConfigProps: {type: GraphQLString},shipmentGatewayConfigId: {type: GraphQLString},upsRateInquireMode: {type: GraphQLString},shippingOriginContactMechId: {type: GraphQLString},shippingPostalCode: {type: GraphQLString},initialEstimateAmt: {type: GraphQLFloat},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentUps/upsRateEstimate?carrierPartyId=${args.carrierPartyId}carrierRoleTypeId=${args.carrierRoleTypeId}shippableItemInfo=${args.shippableItemInfo}shippableWeight=${args.shippableWeight}productStoreId=${args.productStoreId}shipmentMethodTypeId=${args.shipmentMethodTypeId}shippableQuantity=${args.shippableQuantity}shippableTotal=${args.shippableTotal}productStoreShipMethId=${args.productStoreShipMethId}shippingContactMechId=${args.shippingContactMechId}shippingCountryCode=${args.shippingCountryCode}shipmentCustomMethodId=${args.shipmentCustomMethodId}serviceConfigProps=${args.serviceConfigProps}shipmentGatewayConfigId=${args.shipmentGatewayConfigId}upsRateInquireMode=${args.upsRateInquireMode}shippingOriginContactMechId=${args.shippingOriginContactMechId}shippingPostalCode=${args.shippingPostalCode}initialEstimateAmt=${args.initialEstimateAmt}partyId=${args.partyId}packageWeights=${args.packageWeights}`, null, req);
  }
};
export {upsRateEstimate};


const upsRateEstimateByPostalCode = {
  type: ResponseType,
  description: 'mutation for ofbiz upsRateEstimateByPostalCode method',
  args:{carrierPartyId: {type: GraphQLString},carrierRoleTypeId: {type: GraphQLString},shippableWeight: {type: GraphQLFloat},productStoreId: {type: GraphQLString},shipmentMethodTypeId: {type: GraphQLString},shippableQuantity: {type: GraphQLFloat},shippableTotal: {type: GraphQLFloat},shippingCountryCode: {type: GraphQLString},shipFromAddress: {type: new GraphQLList(KeyValueInputType)},serviceConfigProps: {type: GraphQLString},upsRateInquireMode: {type: GraphQLString},shipmentGatewayConfigId: {type: GraphQLString},shippingPostalCode: {type: GraphQLString},initialEstimateAmt: {type: GraphQLFloat},isResidentialAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentUps/upsRateEstimateByPostalCode?carrierPartyId=${args.carrierPartyId}carrierRoleTypeId=${args.carrierRoleTypeId}shippableItemInfo=${args.shippableItemInfo}shippableWeight=${args.shippableWeight}productStoreId=${args.productStoreId}shipmentMethodTypeId=${args.shipmentMethodTypeId}shippableQuantity=${args.shippableQuantity}shippableTotal=${args.shippableTotal}shippingCountryCode=${args.shippingCountryCode}shipFromAddress=${args.shipFromAddress}serviceConfigProps=${args.serviceConfigProps}upsRateInquireMode=${args.upsRateInquireMode}shipmentGatewayConfigId=${args.shipmentGatewayConfigId}shippingPostalCode=${args.shippingPostalCode}initialEstimateAmt=${args.initialEstimateAmt}isResidentialAddress=${args.isResidentialAddress}packageWeights=${args.packageWeights}`, null, req);
  }
};
export {upsRateEstimateByPostalCode};


const upsShipmentAccept = {
  type: ResponseType,
  description: 'mutation for ofbiz upsShipmentAccept method',
  args:{shipmentRouteSegmentId: {type: GraphQLString},shipmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentUps/upsShipmentAccept?shipmentRouteSegmentId=${args.shipmentRouteSegmentId}shipmentId=${args.shipmentId}`, null, req);
  }
};
export {upsShipmentAccept};


const upsShipmentAlternateRatesEstimate = {
  type: ResponseType,
  description: 'mutation for ofbiz upsShipmentAlternateRatesEstimate method',
  args:{shipmentId: {type: GraphQLString},productStoreId: {type: GraphQLString},shipmentRouteSegmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentUps/upsShipmentAlternateRatesEstimate?shipmentId=${args.shipmentId}productStoreId=${args.productStoreId}shipmentRouteSegmentId=${args.shipmentRouteSegmentId}`, null, req);
  }
};
export {upsShipmentAlternateRatesEstimate};


const upsShipmentConfirm = {
  type: ResponseType,
  description: 'mutation for ofbiz upsShipmentConfirm method',
  args:{shipmentRouteSegmentId: {type: GraphQLString},shipmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentUps/upsShipmentConfirm?shipmentRouteSegmentId=${args.shipmentRouteSegmentId}shipmentId=${args.shipmentId}`, null, req);
  }
};
export {upsShipmentConfirm};


const upsTrackShipment = {
  type: ResponseType,
  description: 'mutation for ofbiz upsTrackShipment method',
  args:{shipmentRouteSegmentId: {type: GraphQLString},shipmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentUps/upsTrackShipment?shipmentRouteSegmentId=${args.shipmentRouteSegmentId}shipmentId=${args.shipmentId}`, null, req);
  }
};
export {upsTrackShipment};


const upsVoidShipment = {
  type: ResponseType,
  description: 'mutation for ofbiz upsVoidShipment method',
  args:{shipmentRouteSegmentId: {type: GraphQLString},shipmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentUps/upsVoidShipment?shipmentRouteSegmentId=${args.shipmentRouteSegmentId}shipmentId=${args.shipmentId}`, null, req);
  }
};
export {upsVoidShipment};
