
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

import {ShipmentRouteSegmentType} from '../shipment/ShipmentRouteSegment.js';
import {ShipmentType} from '../shipment/Shipment.js';
import {ContactMechType} from '../party/ContactMech.js';
import {OrderItemShipGroupType} from '../order/OrderItemShipGroup.js';


const TelecomNumberType = new GraphQLObjectType({
  name: 'TelecomNumberType',
  description: 'Type for TelecomNumber in party',

  fields: () => ({
    areaCode: {type: GraphQLString},
    askForName: {type: GraphQLString},
    countryCode: {type: GraphQLString},
    contactNumber: {type: GraphQLString},
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (telecomNumber, args, {loaders}) => loaders.ofbiz.load(`party/contactMechs/find?contactMechId=${telecomNumber.contactMechId}`)
    },
    shipments: {
      type: new GraphQLList(ShipmentType),
      args : {},
      resolve: (telecomNumber, args, {loaders}) => loaders.ofbizArray.load(`/shipments/find?contactMechId=${telecomNumber.contactMechId}`)
    },
    orderItemShipGroups: {
      type: new GraphQLList(OrderItemShipGroupType),
      args : {},
      resolve: (telecomNumber, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemShipGroups/find?contactMechId=${telecomNumber.contactMechId}`)
    },
    shipmentRouteSegments: {
      type: new GraphQLList(ShipmentRouteSegmentType),
      args : {},
      resolve: (telecomNumber, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentRouteSegments/find?contactMechId=${telecomNumber.contactMechId}`)
    }
  })
});

export {TelecomNumberType};
    




const TelecomNumberInputType = new GraphQLInputObjectType({
  name: 'TelecomNumberInputType',
  description: 'input type for TelecomNumber in party',

  fields: () => ({
    areaCode: {type: GraphQLString},
    askForName: {type: GraphQLString},
    countryCode: {type: GraphQLString},
    contactNumber: {type: GraphQLString},
    contactMechId: {type: GraphQLString}
  })
});

export {TelecomNumberInputType};
    