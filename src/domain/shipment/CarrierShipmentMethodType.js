
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyRoleType} from '../party/PartyRoleType.js';
import {ShipmentMethodTypeType} from '../shipment/ShipmentMethodTypeType.js';
import {ShoppingListType} from '../order/ShoppingListType.js';
import {OrderItemShipGroupType} from '../order/OrderItemShipGroupType.js';
import {FacilityCarrierShipmentType} from '../product/FacilityCarrierShipmentType.js';
import {ShipmentCostEstimateType} from '../shipment/ShipmentCostEstimateType.js';


const CarrierShipmentMethodType = new GraphQLObjectType({
  name: 'CarrierShipmentMethodType',
  description: 'Type for CarrierShipmentMethod in shipment',

  fields: () => ({
    sequenceNumber: {type: GraphQLInt},
    roleTypeId: {type: GraphQLString},
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (carrierShipmentMethod, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${carrierShipmentMethod.partyId}`)
    },
    shipmentMethodType: {
      type: ShipmentMethodTypeType,
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (carrierShipmentMethod, args, {loaders}) => loaders.ofbiz.load(`shipmentMethodTypes/find?shipmentMethodTypeId=${carrierShipmentMethod.shipmentMethodTypeId}`)
    },
    carrierServiceCode: {type: GraphQLString},
    facilityCarrierShipment: {
      type: new GraphQLList(FacilityCarrierShipmentType),
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (carrierShipmentMethod, args, {loaders}) => loaders.ofbizArray.load(`facilityCarrierShipments/find?shipmentMethodTypeId=${carrierShipmentMethod.shipmentMethodTypeId}`)
    },
    shipmentCostEstimate: {
      type: new GraphQLList(ShipmentCostEstimateType),
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (carrierShipmentMethod, args, {loaders}) => loaders.ofbizArray.load(`shipmentCostEstimates/find?shipmentMethodTypeId=${carrierShipmentMethod.shipmentMethodTypeId}`)
    },
    orderItemShipGroup: {
      type: new GraphQLList(OrderItemShipGroupType),
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (carrierShipmentMethod, args, {loaders}) => loaders.ofbizArray.load(`orderItemShipGroups/find?shipmentMethodTypeId=${carrierShipmentMethod.shipmentMethodTypeId}`)
    },
    shoppingList: {
      type: new GraphQLList(ShoppingListType),
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (carrierShipmentMethod, args, {loaders}) => loaders.ofbizArray.load(`shoppingLists/find?shipmentMethodTypeId=${carrierShipmentMethod.shipmentMethodTypeId}`)
    }
  })
});

export {CarrierShipmentMethodType};
    