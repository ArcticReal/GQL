
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

import {ReturnHeaderType} from '../../order/ReturnHeader/ReturnHeaderType.js';
import {OrderHeaderType} from '../../order/OrderHeader/OrderHeaderType.js';
import {ShipmentRouteSegmentType} from '../../shipment/ShipmentRouteSegment/ShipmentRouteSegmentType.js';
import {ShipmentAttributeType} from '../../shipment/ShipmentAttribute/ShipmentAttributeType.js';
import {TelecomNumberType} from '../../party/TelecomNumber/TelecomNumberType.js';
import {AcctgTransType} from '../../accounting/AcctgTrans/AcctgTransType.js';
import {PicklistBinType} from '../../shipment/PicklistBin/PicklistBinType.js';
import {ShipmentItemType} from '../../shipment/ShipmentItem/ShipmentItemType.js';
import {ShipmentContactMechType} from '../../shipment/ShipmentContactMech/ShipmentContactMechType.js';
import {OrderShipmentType} from '../../order/OrderShipment/OrderShipmentType.js';
import {PostalAddressType} from '../../party/PostalAddress/PostalAddressType.js';
import {ShipmentTypeType} from '../../shipment/ShipmentType/ShipmentTypeType.js';
import {PartyType} from '../../party/Party/PartyType.js';
import {WorkEffortType} from '../../workeffort/WorkEffort/WorkEffortType.js';
import {ReturnItemShipmentType} from '../../order/ReturnItemShipment/ReturnItemShipmentType.js';
import {ShipmentStatusType} from '../../shipment/ShipmentStatus/ShipmentStatusType.js';
import {ShipmentPackageType} from '../../shipment/ShipmentPackage/ShipmentPackageType.js';
import {FacilityType} from '../../product/Facility/FacilityType.js';


const ShipmentType = new GraphQLObjectType({
  name: 'ShipmentType',
  description: 'Type for Shipment in shipment',

  fields: () => ({
    partyFrom: {
      type: PartyType,
      args : {partyIdFrom: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${shipment.partyIdFrom}`)
    },
    latestCancelDate: {type: GraphQLString},
    estimatedReadyDate: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    estimatedArrivalWorkEff: {
      type: WorkEffortType,
      args : {estimatedArrivalWorkEffId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${shipment.estimatedArrivalWorkEffId}`)
    },
    additionalShippingCharge: {type: GraphQLFloat},
    destinationTelecomNumber: {
      type: TelecomNumberType,
      args : {destinationTelecomNumberId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbiz.load(`party/telecomNumbers/find?contactMechId=${shipment.destinationTelecomNumberId}`)
    },
    estimatedShipCost: {type: GraphQLFloat},
    createdByUserLogin: {type: GraphQLString},
    estimatedShipWorkEff: {
      type: WorkEffortType,
      args : {estimatedShipWorkEffId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${shipment.estimatedShipWorkEffId}`)
    },
    destinationFacility: {
      type: FacilityType,
      args : {destinationFacilityId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbiz.load(`product/facilitys/find?facilityId=${shipment.destinationFacilityId}`)
    },
    addtlShippingChargeDesc: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    originContactMech: {
      type: PostalAddressType,
      args : {originContactMechId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbiz.load(`party/postalAddresss/find?contactMechId=${shipment.originContactMechId}`)
    },
    primaryReturn: {
      type: ReturnHeaderType,
      args : {primaryReturnId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbiz.load(`order/returnHeaders/find?returnId=${shipment.primaryReturnId}`)
    },
    originFacility: {
      type: FacilityType,
      args : {originFacilityId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbiz.load(`product/facilitys/find?facilityId=${shipment.originFacilityId}`)
    },
    currencyUomId: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    destinationContactMech: {
      type: PostalAddressType,
      args : {destinationContactMechId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbiz.load(`party/postalAddresss/find?contactMechId=${shipment.destinationContactMechId}`)
    },
    shipmentId: {type: GraphQLString},
    originTelecomNumber: {
      type: TelecomNumberType,
      args : {originTelecomNumberId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbiz.load(`party/telecomNumbers/find?contactMechId=${shipment.originTelecomNumberId}`)
    },
    primaryOrder: {
      type: OrderHeaderType,
      args : {primaryOrderId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbiz.load(`order/orderHeaders/find?orderId=${shipment.primaryOrderId}`)
    },
    estimatedShipDate: {type: GraphQLString},
    partyTo: {
      type: PartyType,
      args : {partyIdTo: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${shipment.partyIdTo}`)
    },
    shipmentType: {
      type: ShipmentTypeType,
      args : {shipmentTypeId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/shipmentTypes/find?shipmentTypeId=${shipment.shipmentTypeId}`)
    },
    estimatedArrivalDate: {type: GraphQLString},
    picklistBin: {
      type: PicklistBinType,
      args : {picklistBinId: {type: GraphQLString}},
      resolve: (shipment, args, {loaders}) => loaders.ofbiz.load(`shipment/picklist/picklistBins/find?picklistBinId=${shipment.picklistBinId}`)
    },
    primaryShipGroupSeqId: {type: GraphQLString},
    handlingInstructions: {type: GraphQLString},
    acctgTranses: {
      type: new GraphQLList(AcctgTransType),
      args : {},
      resolve: (shipment, args, {loaders}) => loaders.ofbizArray.load(`accounting/acctgTranss/find?shipmentId=${shipment.shipmentId}`)
    },
    shipmentAttributes: {
      type: new GraphQLList(ShipmentAttributeType),
      args : {},
      resolve: (shipment, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentAttributes/find?shipmentId=${shipment.shipmentId}`)
    },
    returnItemShipments: {
      type: new GraphQLList(ReturnItemShipmentType),
      args : {},
      resolve: (shipment, args, {loaders}) => loaders.ofbizArray.load(`order/returnItem/returnItemShipments/find?shipmentId=${shipment.shipmentId}`)
    },
    shipmentRouteSegments: {
      type: new GraphQLList(ShipmentRouteSegmentType),
      args : {},
      resolve: (shipment, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentRouteSegments/find?shipmentId=${shipment.shipmentId}`)
    },
    shipmentContactMeches: {
      type: new GraphQLList(ShipmentContactMechType),
      args : {},
      resolve: (shipment, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentContactMechs/find?shipmentId=${shipment.shipmentId}`)
    },
    shipmentStatuses: {
      type: new GraphQLList(ShipmentStatusType),
      args : {},
      resolve: (shipment, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentStatuss/find?shipmentId=${shipment.shipmentId}`)
    },
    shipmentItems: {
      type: new GraphQLList(ShipmentItemType),
      args : {},
      resolve: (shipment, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentItems/find?shipmentId=${shipment.shipmentId}`)
    },
    shipmentPackages: {
      type: new GraphQLList(ShipmentPackageType),
      args : {},
      resolve: (shipment, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentPackages/find?shipmentId=${shipment.shipmentId}`)
    },
    orderShipments: {
      type: new GraphQLList(OrderShipmentType),
      args : {},
      resolve: (shipment, args, {loaders}) => loaders.ofbizArray.load(`order/orderShipments/find?shipmentId=${shipment.shipmentId}`)
    }
  })
});

export {ShipmentType};
    