
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
import {ShipmentBoxTypeType} from '../shipment/ShipmentBoxTypeType.js';


const CarrierShipmentBoxTypeType = new GraphQLObjectType({
  name: 'CarrierShipmentBoxTypeType',
  description: 'Type for CarrierShipmentBoxType in shipment',

  fields: () => ({
    packagingTypeCode: {type: GraphQLString},
    oversizeCode: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (carrierShipmentBoxType, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${carrierShipmentBoxType.partyId}`)
    },
    shipmentBoxType: {
      type: ShipmentBoxTypeType,
      args : {shipmentBoxTypeId: {type: GraphQLString}},
      resolve: (carrierShipmentBoxType, args, {loaders}) => loaders.ofbiz.load(`shipmentBoxTypes/find?shipmentBoxTypeId=${carrierShipmentBoxType.shipmentBoxTypeId}`)
    }
  })
});

export {CarrierShipmentBoxTypeType};
    