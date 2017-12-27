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


const dhlRateEstimate = {
  type: ResponseType,
  description: 'mutation for ofbiz dhlRateEstimate method',
  args:{carrierPartyId: {type: GraphQLString},carrierRoleTypeId: {type: GraphQLString},shippableWeight: {type: GraphQLFloat},productStoreId: {type: GraphQLString},shipmentMethodTypeId: {type: GraphQLString},shippableQuantity: {type: GraphQLFloat},shippableTotal: {type: GraphQLFloat},productStoreShipMethId: {type: GraphQLString},shippingContactMechId: {type: GraphQLString},shippingCountryCode: {type: GraphQLString},shipmentCustomMethodId: {type: GraphQLString},serviceConfigProps: {type: GraphQLString},shipmentGatewayConfigId: {type: GraphQLString},shippingOriginContactMechId: {type: GraphQLString},shippingPostalCode: {type: GraphQLString},initialEstimateAmt: {type: GraphQLFloat},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentDhl/dhlRateEstimate?carrierPartyId=${args.carrierPartyId}&carrierRoleTypeId=${args.carrierRoleTypeId}&shippableItemInfo=${args.shippableItemInfo}&shippableWeight=${args.shippableWeight}&productStoreId=${args.productStoreId}&shipmentMethodTypeId=${args.shipmentMethodTypeId}&shippableQuantity=${args.shippableQuantity}&shippableTotal=${args.shippableTotal}&productStoreShipMethId=${args.productStoreShipMethId}&shippingContactMechId=${args.shippingContactMechId}&shippingCountryCode=${args.shippingCountryCode}&shipmentCustomMethodId=${args.shipmentCustomMethodId}&serviceConfigProps=${args.serviceConfigProps}&shipmentGatewayConfigId=${args.shipmentGatewayConfigId}&shippingOriginContactMechId=${args.shippingOriginContactMechId}&shippingPostalCode=${args.shippingPostalCode}&initialEstimateAmt=${args.initialEstimateAmt}&partyId=${args.partyId}&`, null, req);
  }
};
export {dhlRateEstimate};


const dhlRegisterAccount = {
  type: ResponseType,
  description: 'mutation for ofbiz dhlRegisterAccount method',
  args:{postalCode: {type: GraphQLString},shipmentGatewayConfigId: {type: GraphQLString},configProps: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentDhl/dhlRegisterAccount?postalCode=${args.postalCode}&shipmentGatewayConfigId=${args.shipmentGatewayConfigId}&configProps=${args.configProps}&`, null, req);
  }
};
export {dhlRegisterAccount};


const dhlShipmentConfirm = {
  type: ResponseType,
  description: 'mutation for ofbiz dhlShipmentConfirm method',
  args:{shipmentRouteSegmentId: {type: GraphQLString},shipmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentDhl/dhlShipmentConfirm?shipmentRouteSegmentId=${args.shipmentRouteSegmentId}&shipmentId=${args.shipmentId}&`, null, req);
  }
};
export {dhlShipmentConfirm};
