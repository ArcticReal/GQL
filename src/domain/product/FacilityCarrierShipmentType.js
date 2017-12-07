
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyType} from '../party/PartyType.js';
import {CarrierShipmentMethodType} from '../shipment/CarrierShipmentMethodType.js';
import {FacilityType} from '../product/FacilityType.js';


const FacilityCarrierShipmentType = new GraphQLObjectType({
  name: 'FacilityCarrierShipmentType',
  description: 'Type for FacilityCarrierShipment in product',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (facilityCarrierShipment, args, {loaders}) => loaders.ofbiz.load(`facilitys/find?facilityId=${facilityCarrierShipment.facilityId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (facilityCarrierShipment, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${facilityCarrierShipment.partyId}`)
    },
    shipmentMethodType: {
      type: CarrierShipmentMethodType,
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (facilityCarrierShipment, args, {loaders}) => loaders.ofbiz.load(`carrierShipmentMethods/find?shipmentMethodTypeId=${facilityCarrierShipment.shipmentMethodTypeId}`)
    }
  })
});

export {FacilityCarrierShipmentType};
    