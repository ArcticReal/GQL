
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

import {ReturnHeaderType} from '../order/ReturnHeader.js';
import {OrderHeaderType} from '../order/OrderHeader.js';
import {ShipmentRouteSegmentType} from '../shipment/ShipmentRouteSegment.js';
import {ShipmentAttributeType} from '../shipment/ShipmentAttribute.js';
import {TelecomNumberType} from '../party/TelecomNumber.js';
import {AcctgTransType} from '../accounting/AcctgTrans.js';
import {PicklistBinType} from '../shipment/PicklistBin.js';
import {ShipmentItemType} from '../shipment/ShipmentItem.js';
import {ShipmentContactMechType} from '../shipment/ShipmentContactMech.js';
import {OrderShipmentType} from '../order/OrderShipment.js';
import {PostalAddressType} from '../party/PostalAddress.js';
import {ShipmentTypeType} from '../shipment/ShipmentType.js';
import {PartyType} from '../party/Party.js';
import {WorkEffortType} from '../workeffort/WorkEffort.js';
import {ReturnItemShipmentType} from '../order/ReturnItemShipment.js';
import {ShipmentStatusType} from '../shipment/ShipmentStatus.js';
import {ShipmentPackageType} from '../shipment/ShipmentPackage.js';
import {FacilityType} from '../product/Facility.js';


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
    acctgTranses: {
      type: new GraphQLList(AcctgTransType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbizArray.load(`acctgTranss/find?shipmentId=${shipment.shipmentId}`)
    },
    shipmentAttributes: {
      type: new GraphQLList(ShipmentAttributeType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbizArray.load(`shipmentAttributes/find?shipmentId=${shipment.shipmentId}`)
    },
    returnItemShipments: {
      type: new GraphQLList(ReturnItemShipmentType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbizArray.load(`returnItemShipments/find?shipmentId=${shipment.shipmentId}`)
    },
    shipmentRouteSegments: {
      type: new GraphQLList(ShipmentRouteSegmentType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbizArray.load(`shipmentRouteSegments/find?shipmentId=${shipment.shipmentId}`)
    },
    shipmentContactMeches: {
      type: new GraphQLList(ShipmentContactMechType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbizArray.load(`shipmentContactMechs/find?shipmentId=${shipment.shipmentId}`)
    },
    shipmentStatuses: {
      type: new GraphQLList(ShipmentStatusType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbizArray.load(`shipmentStatuss/find?shipmentId=${shipment.shipmentId}`)
    },
    shipmentItems: {
      type: new GraphQLList(ShipmentItemType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbizArray.load(`shipmentItems/find?shipmentId=${shipment.shipmentId}`)
    },
    shipmentPackages: {
      type: new GraphQLList(ShipmentPackageType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbizArray.load(`shipmentPackages/find?shipmentId=${shipment.shipmentId}`)
    },
    orderShipments: {
      type: new GraphQLList(OrderShipmentType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbizArray.load(`orderShipments/find?shipmentId=${shipment.shipmentId}`)
    }
  })
});

export {ShipmentType};
    




const ShipmentInputType = new GraphQLInputObjectType({
  name: 'ShipmentInputType',
  description: 'input type for Shipment in shipment',

  fields: () => ({
    partyIdFrom: {type: GraphQLString},
    latestCancelDate: {type: GraphQLString},
    estimatedReadyDate: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    estimatedArrivalWorkEffId: {type: GraphQLString},
    additionalShippingCharge: {type: GraphQLFloat},
    destinationTelecomNumberId: {type: GraphQLString},
    estimatedShipCost: {type: GraphQLFloat},
    createdByUserLogin: {type: GraphQLString},
    estimatedShipWorkEffId: {type: GraphQLString},
    destinationFacilityId: {type: GraphQLString},
    addtlShippingChargeDesc: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    originContactMechId: {type: GraphQLString},
    primaryReturnId: {type: GraphQLString},
    originFacilityId: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    destinationContactMechId: {type: GraphQLString},
    shipmentId: {type: GraphQLString},
    originTelecomNumberId: {type: GraphQLString},
    primaryOrderId: {type: GraphQLString},
    estimatedShipDate: {type: GraphQLString},
    partyIdTo: {type: GraphQLString},
    shipmentTypeId: {type: GraphQLString},
    estimatedArrivalDate: {type: GraphQLString},
    picklistBinId: {type: GraphQLString},
    primaryShipGroupSeqId: {type: GraphQLString},
    handlingInstructions: {type: GraphQLString}
  })
});

export {ShipmentInputType};
    