
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

import {PartyRoleType} from '../party/PartyRole.js';
import {ShipmentMethodTypeType} from '../shipment/ShipmentMethodType.js';
import {ShoppingListType} from '../order/ShoppingList.js';
import {OrderItemShipGroupType} from '../order/OrderItemShipGroup.js';
import {FacilityCarrierShipmentType} from '../product/FacilityCarrierShipment.js';
import {ShipmentCostEstimateType} from '../shipment/ShipmentCostEstimate.js';


const CarrierShipmentMethodType = new GraphQLObjectType({
  name: 'CarrierShipmentMethodType',
  description: 'Type for CarrierShipmentMethod in shipment',

  fields: () => ({
    sequenceNumber: {type: GraphQLInt},
    roleTypeId: {type: GraphQLString},
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (carrierShipmentMethod, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${carrierShipmentMethod.partyId}`)
    },
    shipmentMethodType: {
      type: ShipmentMethodTypeType,
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (carrierShipmentMethod, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/shipmentMethodTypes/find?shipmentMethodTypeId=${carrierShipmentMethod.shipmentMethodTypeId}`)
    },
    carrierServiceCode: {type: GraphQLString},
    facilityCarrierShipments: {
      type: new GraphQLList(FacilityCarrierShipmentType),
      args : {},
      resolve: (carrierShipmentMethod, args, {loaders}) => loaders.ofbizArray.load(`product/facility/facilityCarrierShipments/find?shipmentMethodTypeId=${carrierShipmentMethod.shipmentMethodTypeId}`)
    },
    shipmentCostEstimates: {
      type: new GraphQLList(ShipmentCostEstimateType),
      args : {},
      resolve: (carrierShipmentMethod, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentCostEstimates/find?shipmentMethodTypeId=${carrierShipmentMethod.shipmentMethodTypeId}`)
    },
    orderItemShipGroups: {
      type: new GraphQLList(OrderItemShipGroupType),
      args : {},
      resolve: (carrierShipmentMethod, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemShipGroups/find?shipmentMethodTypeId=${carrierShipmentMethod.shipmentMethodTypeId}`)
    },
    shoppingLists: {
      type: new GraphQLList(ShoppingListType),
      args : {},
      resolve: (carrierShipmentMethod, args, {loaders}) => loaders.ofbizArray.load(`order/shoppingLists/find?shipmentMethodTypeId=${carrierShipmentMethod.shipmentMethodTypeId}`)
    }
  })
});

export {CarrierShipmentMethodType};
    




const CarrierShipmentMethodInputType = new GraphQLInputObjectType({
  name: 'CarrierShipmentMethodInputType',
  description: 'input type for CarrierShipmentMethod in shipment',

  fields: () => ({
    sequenceNumber: {type: GraphQLInt},
    roleTypeId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    shipmentMethodTypeId: {type: GraphQLString},
    carrierServiceCode: {type: GraphQLString}
  })
});

export {CarrierShipmentMethodInputType};
    