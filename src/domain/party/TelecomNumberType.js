
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ShipmentRouteSegmentType} from '../shipment/ShipmentRouteSegmentType.js';
import {ShipmentType} from '../shipment/ShipmentType.js';
import {ContactMechType} from '../party/ContactMechType.js';
import {OrderItemShipGroupType} from '../order/OrderItemShipGroupType.js';


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
      resolve: (telecomNumber, args, {loaders}) => loaders.ofbiz.load(`contactMechs/find?contactMechId=${telecomNumber.contactMechId}`)
    },
    shipment: {
      type: new GraphQLList(ShipmentType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (telecomNumber, args, {loaders}) => loaders.ofbizArray.load(`shipments/find?contactMechId=${telecomNumber.contactMechId}`)
    },
    orderItemShipGroup: {
      type: new GraphQLList(OrderItemShipGroupType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (telecomNumber, args, {loaders}) => loaders.ofbizArray.load(`orderItemShipGroups/find?contactMechId=${telecomNumber.contactMechId}`)
    },
    shipmentRouteSegment: {
      type: new GraphQLList(ShipmentRouteSegmentType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (telecomNumber, args, {loaders}) => loaders.ofbizArray.load(`shipmentRouteSegments/find?contactMechId=${telecomNumber.contactMechId}`)
    }
  })
});

export {TelecomNumberType};
    