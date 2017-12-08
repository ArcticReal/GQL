
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
import {ShipmentBoxTypeType} from '../shipment/ShipmentBoxType.js';


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
    




const CarrierShipmentBoxTypeInputType = new GraphQLInputObjectType({
  name: 'CarrierShipmentBoxTypeInputType',
  description: 'input type for CarrierShipmentBoxType in shipment',

  fields: () => ({
    packagingTypeCode: {type: GraphQLString},
    oversizeCode: {type: GraphQLString},
    partyId: {type: GraphQLString},
    shipmentBoxTypeId: {type: GraphQLString}
  })
});

export {CarrierShipmentBoxTypeInputType};
    