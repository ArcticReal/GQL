
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

import {PartyRoleType} from '../../party/PartyRole/PartyRoleType.js';
import {ShipmentMethodTypeType} from '../../shipment/ShipmentMethodType/ShipmentMethodTypeType.js';
import {ShoppingListType} from '../../order/ShoppingList/ShoppingListType.js';
import {OrderItemShipGroupType} from '../../order/OrderItemShipGroup/OrderItemShipGroupType.js';
import {FacilityCarrierShipmentType} from '../../product/FacilityCarrierShipment/FacilityCarrierShipmentType.js';
import {ShipmentCostEstimateType} from '../../shipment/ShipmentCostEstimate/ShipmentCostEstimateType.js';


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
    