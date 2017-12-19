
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

import {PicklistRoleType} from '../../shipment/PicklistRole/PicklistRoleType.js';
import {ShipmentMethodTypeType} from '../../shipment/ShipmentMethodType/ShipmentMethodTypeType.js';
import {FacilityType} from '../../product/Facility/FacilityType.js';
import {PicklistStatusHistoryType} from '../../shipment/PicklistStatusHistory/PicklistStatusHistoryType.js';
import {PicklistBinType} from '../../shipment/PicklistBin/PicklistBinType.js';


const PicklistType = new GraphQLObjectType({
  name: 'PicklistType',
  description: 'Type for Picklist in shipment',

  fields: () => ({
    picklistId: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (picklist, args, {loaders}) => loaders.ofbiz.load(`product/facilitys/find?facilityId=${picklist.facilityId}`)
    },
    statusId: {type: GraphQLString},
    description: {type: GraphQLString},
    picklistDate: {type: GraphQLString},
    shipmentMethodType: {
      type: ShipmentMethodTypeType,
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (picklist, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/shipmentMethodTypes/find?shipmentMethodTypeId=${picklist.shipmentMethodTypeId}`)
    },
    createdByUserLogin: {type: GraphQLString},
    picklistRoles: {
      type: new GraphQLList(PicklistRoleType),
      args : {},
      resolve: (picklist, args, {loaders}) => loaders.ofbizArray.load(`shipment/picklist/picklistRoles/find?picklistId=${picklist.picklistId}`)
    },
    picklistStatusHistories: {
      type: new GraphQLList(PicklistStatusHistoryType),
      args : {},
      resolve: (picklist, args, {loaders}) => loaders.ofbizArray.load(`shipment/picklist/picklistStatusHistorys/find?picklistId=${picklist.picklistId}`)
    },
    picklistBins: {
      type: new GraphQLList(PicklistBinType),
      args : {},
      resolve: (picklist, args, {loaders}) => loaders.ofbizArray.load(`shipment/picklist/picklistBins/find?picklistId=${picklist.picklistId}`)
    }
  })
});

export {PicklistType};
    