
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

import {PartyType} from '../../party/Party/PartyType.js';
import {CarrierShipmentMethodType} from '../../shipment/CarrierShipmentMethod/CarrierShipmentMethodType.js';
import {FacilityType} from '../../product/Facility/FacilityType.js';


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
      resolve: (facilityCarrierShipment, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${facilityCarrierShipment.partyId}`)
    },
    shipmentMethodType: {
      type: CarrierShipmentMethodType,
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (facilityCarrierShipment, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/carrierShipmentMethods/find?shipmentMethodTypeId=${facilityCarrierShipment.shipmentMethodTypeId}`)
    }
  })
});

export {FacilityCarrierShipmentType};
    