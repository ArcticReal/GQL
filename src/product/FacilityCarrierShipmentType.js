
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {Facility} from '../product/Facility.js';
import {Party} from '../product/Party.js';
import {CarrierShipmentMethod} from '../product/CarrierShipmentMethod.js';


const FacilityCarrierShipment = new GraphQLObjectType({
  name: 'FacilityCarrierShipmentType',
  description: 'Type for FacilityCarrierShipment in product',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (facilityCarrierShipment, args, {loaders}) => loaders.ofbizArray.load(`facilitys/find?=${args.facilityId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (facilityCarrierShipment, args, {loaders}) => loaders.ofbizArray.load(`partys/find?=${args.partyId}`)
    },
    shipmentMethodType: {
      type: CarrierShipmentMethodType,
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (facilityCarrierShipment, args, {loaders}) => loaders.ofbizArray.load(`carrierShipmentMethods/find?=${args.shipmentMethodTypeId}`)
    }
  })
});

export {FacilityCarrierShipment};
    