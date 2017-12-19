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

const ShipmentInputType = new GraphQLInputObjectType({
  name: 'ShipmentInputType',
  description: 'input type for Shipment',

  fields: () => ({
    additionalShippingCharge: {type: GraphQLFloat},
    addtlShippingChargeDesc: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    destinationContactMechId: {type: GraphQLString},
    destinationFacilityId: {type: GraphQLString},
    destinationTelecomNumberId: {type: GraphQLString},
    estimatedArrivalDate: {type: GraphQLString},
    estimatedArrivalWorkEffId: {type: GraphQLString},
    estimatedReadyDate: {type: GraphQLString},
    estimatedShipCost: {type: GraphQLFloat},
    estimatedShipDate: {type: GraphQLString},
    estimatedShipWorkEffId: {type: GraphQLString},
    handlingInstructions: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    latestCancelDate: {type: GraphQLString},
    originContactMechId: {type: GraphQLString},
    originFacilityId: {type: GraphQLString},
    originTelecomNumberId: {type: GraphQLString},
    partyIdFrom: {type: GraphQLString},
    partyIdTo: {type: GraphQLString},
    picklistBinId: {type: GraphQLString},
    primaryOrderId: {type: GraphQLString},
    primaryReturnId: {type: GraphQLString},
    primaryShipGroupSeqId: {type: GraphQLString},
    shipmentId: {type: GraphQLString},
    shipmentTypeId: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {ShipmentInputType};
    