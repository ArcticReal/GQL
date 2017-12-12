
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

import {PartyType} from '../party/Party.js';
import {CarrierShipmentMethodType} from '../shipment/CarrierShipmentMethod.js';
import {FacilityType} from '../product/Facility.js';


const FacilityCarrierShipmentType = new GraphQLObjectType({
  name: 'FacilityCarrierShipmentType',
  description: 'Type for FacilityCarrierShipment in product',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (facilityCarrierShipment, args, {loaders}) => loaders.ofbiz.load(`product/facilitys/find?facilityId=${facilityCarrierShipment.facilityId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (facilityCarrierShipment, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${facilityCarrierShipment.partyId}`)
    },
    shipmentMethodType: {
      type: CarrierShipmentMethodType,
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (facilityCarrierShipment, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/carrierShipmentMethods/find?shipmentMethodTypeId=${facilityCarrierShipment.shipmentMethodTypeId}`)
    }
  })
});

export {FacilityCarrierShipmentType};
    




const FacilityCarrierShipmentInputType = new GraphQLInputObjectType({
  name: 'FacilityCarrierShipmentInputType',
  description: 'input type for FacilityCarrierShipment in product',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    facilityId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    shipmentMethodTypeId: {type: GraphQLString}
  })
});

export {FacilityCarrierShipmentInputType};
    