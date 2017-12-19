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


const uspsAddressValidation = {
  type: GraphQLString,
  description: 'mutation for ofbiz uspsAddressValidation method',
  args:{address1: {type: GraphQLString},shipmentGatewayConfigId: {type: GraphQLString},configProps: {type: GraphQLString},address2: {type: GraphQLString},city: {type: GraphQLString},firmName: {type: GraphQLString},zip4: {type: GraphQLString},state: {type: GraphQLString},zip5: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentUsps/uspsAddressValidation?address1=${args.address1}shipmentGatewayConfigId=${args.shipmentGatewayConfigId}configProps=${args.configProps}address2=${args.address2}city=${args.city}firmName=${args.firmName}zip4=${args.zip4}state=${args.state}zip5=${args.zip5}`, null, req);
  }
};
export {uspsAddressValidation};


const uspsCityStateLookup = {
  type: GraphQLString,
  description: 'mutation for ofbiz uspsCityStateLookup method',
  args:{shipmentGatewayConfigId: {type: GraphQLString},configProps: {type: GraphQLString},zip5: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentUsps/uspsCityStateLookup?shipmentGatewayConfigId=${args.shipmentGatewayConfigId}configProps=${args.configProps}zip5=${args.zip5}`, null, req);
  }
};
export {uspsCityStateLookup};


const uspsDeliveryConfirmation = {
  type: GraphQLString,
  description: 'mutation for ofbiz uspsDeliveryConfirmation method',
  args:{shipmentRouteSegmentId: {type: GraphQLString},shipmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentUsps/uspsDeliveryConfirmation?shipmentRouteSegmentId=${args.shipmentRouteSegmentId}shipmentId=${args.shipmentId}`, null, req);
  }
};
export {uspsDeliveryConfirmation};


const uspsDomesticRate = {
  type: GraphQLString,
  description: 'mutation for ofbiz uspsDomesticRate method',
  args:{originZip: {type: GraphQLString},service: {type: GraphQLString},pounds: {type: GraphQLString},ounces: {type: GraphQLString},shipmentGatewayConfigId: {type: GraphQLString},destinationZip: {type: GraphQLString},configProps: {type: GraphQLString},container: {type: GraphQLString},machinable: {type: GraphQLString},size: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentUsps/uspsDomesticRate?originZip=${args.originZip}service=${args.service}pounds=${args.pounds}ounces=${args.ounces}shipmentGatewayConfigId=${args.shipmentGatewayConfigId}destinationZip=${args.destinationZip}configProps=${args.configProps}container=${args.container}machinable=${args.machinable}size=${args.size}`, null, req);
  }
};
export {uspsDomesticRate};


const uspsInternationalRateInquire = {
  type: GraphQLString,
  description: 'mutation for ofbiz uspsInternationalRateInquire method',
  args:{carrierPartyId: {type: GraphQLString},carrierRoleTypeId: {type: GraphQLString},shippableWeight: {type: GraphQLFloat},productStoreId: {type: GraphQLString},shipmentMethodTypeId: {type: GraphQLString},shippableQuantity: {type: GraphQLFloat},shippableTotal: {type: GraphQLFloat},productStoreShipMethId: {type: GraphQLString},shippingContactMechId: {type: GraphQLString},shippingCountryCode: {type: GraphQLString},shipmentCustomMethodId: {type: GraphQLString},serviceConfigProps: {type: GraphQLString},shipmentGatewayConfigId: {type: GraphQLString},shippingOriginContactMechId: {type: GraphQLString},shippingPostalCode: {type: GraphQLString},initialEstimateAmt: {type: GraphQLFloat},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentUsps/uspsInternationalRateInquire?carrierPartyId=${args.carrierPartyId}carrierRoleTypeId=${args.carrierRoleTypeId}shippableItemInfo=${args.shippableItemInfo}shippableWeight=${args.shippableWeight}productStoreId=${args.productStoreId}shipmentMethodTypeId=${args.shipmentMethodTypeId}shippableQuantity=${args.shippableQuantity}shippableTotal=${args.shippableTotal}productStoreShipMethId=${args.productStoreShipMethId}shippingContactMechId=${args.shippingContactMechId}shippingCountryCode=${args.shippingCountryCode}shipmentCustomMethodId=${args.shipmentCustomMethodId}serviceConfigProps=${args.serviceConfigProps}shipmentGatewayConfigId=${args.shipmentGatewayConfigId}shippingOriginContactMechId=${args.shippingOriginContactMechId}shippingPostalCode=${args.shippingPostalCode}initialEstimateAmt=${args.initialEstimateAmt}partyId=${args.partyId}`, null, req);
  }
};
export {uspsInternationalRateInquire};


const uspsPackageServicesStandard = {
  type: GraphQLString,
  description: 'mutation for ofbiz uspsPackageServicesStandard method',
  args:{originZip: {type: GraphQLString},shipmentGatewayConfigId: {type: GraphQLString},destinationZip: {type: GraphQLString},configProps: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentUsps/uspsPackageServicesStandard?originZip=${args.originZip}shipmentGatewayConfigId=${args.shipmentGatewayConfigId}destinationZip=${args.destinationZip}configProps=${args.configProps}`, null, req);
  }
};
export {uspsPackageServicesStandard};


const uspsPriorityMailStandard = {
  type: GraphQLString,
  description: 'mutation for ofbiz uspsPriorityMailStandard method',
  args:{originZip: {type: GraphQLString},shipmentGatewayConfigId: {type: GraphQLString},destinationZip: {type: GraphQLString},configProps: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentUsps/uspsPriorityMailStandard?originZip=${args.originZip}shipmentGatewayConfigId=${args.shipmentGatewayConfigId}destinationZip=${args.destinationZip}configProps=${args.configProps}`, null, req);
  }
};
export {uspsPriorityMailStandard};


const uspsRateInquire = {
  type: GraphQLString,
  description: 'mutation for ofbiz uspsRateInquire method',
  args:{carrierPartyId: {type: GraphQLString},carrierRoleTypeId: {type: GraphQLString},shippableWeight: {type: GraphQLFloat},productStoreId: {type: GraphQLString},shipmentMethodTypeId: {type: GraphQLString},shippableQuantity: {type: GraphQLFloat},shippableTotal: {type: GraphQLFloat},productStoreShipMethId: {type: GraphQLString},shippingContactMechId: {type: GraphQLString},shippingCountryCode: {type: GraphQLString},shipmentCustomMethodId: {type: GraphQLString},serviceConfigProps: {type: GraphQLString},shipmentGatewayConfigId: {type: GraphQLString},shippingOriginContactMechId: {type: GraphQLString},shippingPostalCode: {type: GraphQLString},initialEstimateAmt: {type: GraphQLFloat},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentUsps/uspsRateInquire?carrierPartyId=${args.carrierPartyId}carrierRoleTypeId=${args.carrierRoleTypeId}shippableItemInfo=${args.shippableItemInfo}shippableWeight=${args.shippableWeight}productStoreId=${args.productStoreId}shipmentMethodTypeId=${args.shipmentMethodTypeId}shippableQuantity=${args.shippableQuantity}shippableTotal=${args.shippableTotal}productStoreShipMethId=${args.productStoreShipMethId}shippingContactMechId=${args.shippingContactMechId}shippingCountryCode=${args.shippingCountryCode}shipmentCustomMethodId=${args.shipmentCustomMethodId}serviceConfigProps=${args.serviceConfigProps}shipmentGatewayConfigId=${args.shipmentGatewayConfigId}shippingOriginContactMechId=${args.shippingOriginContactMechId}shippingPostalCode=${args.shippingPostalCode}initialEstimateAmt=${args.initialEstimateAmt}partyId=${args.partyId}`, null, req);
  }
};
export {uspsRateInquire};


const uspsTrackConfirm = {
  type: GraphQLString,
  description: 'mutation for ofbiz uspsTrackConfirm method',
  args:{shipmentGatewayConfigId: {type: GraphQLString},configProps: {type: GraphQLString},trackingId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentUsps/uspsTrackConfirm?shipmentGatewayConfigId=${args.shipmentGatewayConfigId}configProps=${args.configProps}trackingId=${args.trackingId}`, null, req);
  }
};
export {uspsTrackConfirm};


const uspsUpdateShipmentRateInfo = {
  type: GraphQLString,
  description: 'mutation for ofbiz uspsUpdateShipmentRateInfo method',
  args:{shipmentRouteSegmentId: {type: GraphQLString},shipmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentUsps/uspsUpdateShipmentRateInfo?shipmentRouteSegmentId=${args.shipmentRouteSegmentId}shipmentId=${args.shipmentId}`, null, req);
  }
};
export {uspsUpdateShipmentRateInfo};
