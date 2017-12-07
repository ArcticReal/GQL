
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ReturnHeaderType} from '../order/ReturnHeaderType.js';
import {OrderHeaderType} from '../order/OrderHeaderType.js';
import {ShipmentRouteSegmentType} from '../shipment/ShipmentRouteSegmentType.js';
import {ShipmentAttributeType} from '../shipment/ShipmentAttributeType.js';
import {TelecomNumberType} from '../party/TelecomNumberType.js';
import {AcctgTransType} from '../accounting/AcctgTransType.js';
import {PicklistBinType} from '../shipment/PicklistBinType.js';
import {ShipmentItemType} from '../shipment/ShipmentItemType.js';
import {ShipmentContactMechType} from '../shipment/ShipmentContactMechType.js';
import {OrderShipmentType} from '../order/OrderShipmentType.js';
import {PostalAddressType} from '../party/PostalAddressType.js';
import {ShipmentTypeType} from '../shipment/ShipmentTypeType.js';
import {PartyType} from '../party/PartyType.js';
import {WorkEffortType} from '../workeffort/WorkEffortType.js';
import {ReturnItemShipmentType} from '../order/ReturnItemShipmentType.js';
import {ShipmentStatusType} from '../shipment/ShipmentStatusType.js';
import {ShipmentPackageType} from '../shipment/ShipmentPackageType.js';
import {FacilityType} from '../product/FacilityType.js';


const ShipmentType = new GraphQLObjectType({
  name: 'ShipmentType',
  description: 'Type for Shipment in shipment',

  fields: () => ({
    partyFrom: {
      type: PartyType,
      args : {partyIdFrom: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${shipment.partyIdFrom}`)
    },
    latestCancelDate: {type: GraphQLString},
    estimatedReadyDate: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    estimatedArrivalWorkEff: {
      type: WorkEffortType,
      args : {estimatedArrivalWorkEffId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${shipment.estimatedArrivalWorkEffId}`)
    },
    additionalShippingCharge: {type: GraphQLFloat},
    destinationTelecomNumber: {
      type: TelecomNumberType,
      args : {destinationTelecomNumberId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbiz.load(`telecomNumbers/find?contactMechId=${shipment.destinationTelecomNumberId}`)
    },
    estimatedShipCost: {type: GraphQLFloat},
    createdByUserLogin: {type: GraphQLString},
    estimatedShipWorkEff: {
      type: WorkEffortType,
      args : {estimatedShipWorkEffId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${shipment.estimatedShipWorkEffId}`)
    },
    destinationFacility: {
      type: FacilityType,
      args : {destinationFacilityId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbiz.load(`facilitys/find?facilityId=${shipment.destinationFacilityId}`)
    },
    addtlShippingChargeDesc: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    originContactMech: {
      type: PostalAddressType,
      args : {originContactMechId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbiz.load(`postalAddresss/find?contactMechId=${shipment.originContactMechId}`)
    },
    primaryReturn: {
      type: ReturnHeaderType,
      args : {primaryReturnId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbiz.load(`returnHeaders/find?returnId=${shipment.primaryReturnId}`)
    },
    originFacility: {
      type: FacilityType,
      args : {originFacilityId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbiz.load(`facilitys/find?facilityId=${shipment.originFacilityId}`)
    },
    currencyUomId: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    destinationContactMech: {
      type: PostalAddressType,
      args : {destinationContactMechId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbiz.load(`postalAddresss/find?contactMechId=${shipment.destinationContactMechId}`)
    },
    shipmentId: {type: GraphQLString},
    originTelecomNumber: {
      type: TelecomNumberType,
      args : {originTelecomNumberId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbiz.load(`telecomNumbers/find?contactMechId=${shipment.originTelecomNumberId}`)
    },
    primaryOrder: {
      type: OrderHeaderType,
      args : {primaryOrderId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbiz.load(`orderHeaders/find?orderId=${shipment.primaryOrderId}`)
    },
    estimatedShipDate: {type: GraphQLString},
    partyTo: {
      type: PartyType,
      args : {partyIdTo: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${shipment.partyIdTo}`)
    },
    shipmentType: {
      type: ShipmentTypeType,
      args : {shipmentTypeId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbiz.load(`shipmentTypes/find?shipmentTypeId=${shipment.shipmentTypeId}`)
    },
    estimatedArrivalDate: {type: GraphQLString},
    picklistBin: {
      type: PicklistBinType,
      args : {picklistBinId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbiz.load(`picklistBins/find?picklistBinId=${shipment.picklistBinId}`)
    },
    primaryShipGroupSeqId: {type: GraphQLString},
    handlingInstructions: {type: GraphQLString},
    acctgTrans: {
      type: new GraphQLList(AcctgTransType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbizArray.load(`acctgTranss/find?shipmentId=${shipment.shipmentId}`)
    },
    shipmentAttribute: {
      type: new GraphQLList(ShipmentAttributeType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbizArray.load(`shipmentAttributes/find?shipmentId=${shipment.shipmentId}`)
    },
    returnItemShipment: {
      type: new GraphQLList(ReturnItemShipmentType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbizArray.load(`returnItemShipments/find?shipmentId=${shipment.shipmentId}`)
    },
    shipmentRouteSegment: {
      type: new GraphQLList(ShipmentRouteSegmentType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbizArray.load(`shipmentRouteSegments/find?shipmentId=${shipment.shipmentId}`)
    },
    shipmentContactMech: {
      type: new GraphQLList(ShipmentContactMechType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbizArray.load(`shipmentContactMechs/find?shipmentId=${shipment.shipmentId}`)
    },
    shipmentStatus: {
      type: new GraphQLList(ShipmentStatusType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbizArray.load(`shipmentStatuss/find?shipmentId=${shipment.shipmentId}`)
    },
    shipmentItem: {
      type: new GraphQLList(ShipmentItemType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbizArray.load(`shipmentItems/find?shipmentId=${shipment.shipmentId}`)
    },
    shipmentPackage: {
      type: new GraphQLList(ShipmentPackageType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbizArray.load(`shipmentPackages/find?shipmentId=${shipment.shipmentId}`)
    },
    orderShipment: {
      type: new GraphQLList(OrderShipmentType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbizArray.load(`orderShipments/find?shipmentId=${shipment.shipmentId}`)
    }
  })
});

export {ShipmentType};
    