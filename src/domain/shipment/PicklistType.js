
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PicklistRoleType} from '../shipment/PicklistRoleType.js';
import {ShipmentMethodTypeType} from '../shipment/ShipmentMethodTypeType.js';
import {FacilityType} from '../product/FacilityType.js';
import {PicklistStatusHistoryType} from '../shipment/PicklistStatusHistoryType.js';
import {PicklistBinType} from '../shipment/PicklistBinType.js';


const PicklistType = new GraphQLObjectType({
  name: 'PicklistType',
  description: 'Type for Picklist in shipment',

  fields: () => ({
    picklistId: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (picklist, args, {loaders}) => loaders.ofbiz.load(`facilitys/find?facilityId=${picklist.facilityId}`)
    },
    statusId: {type: GraphQLString},
    description: {type: GraphQLString},
    picklistDate: {type: GraphQLString},
    shipmentMethodType: {
      type: ShipmentMethodTypeType,
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (picklist, args, {loaders}) => loaders.ofbiz.load(`shipmentMethodTypes/find?shipmentMethodTypeId=${picklist.shipmentMethodTypeId}`)
    },
    createdByUserLogin: {type: GraphQLString},
    picklistRole: {
      type: new GraphQLList(PicklistRoleType),
      args : {picklistId: {type: GraphQLString}},
      resolve: (picklist, args, {loaders}) => loaders.ofbizArray.load(`picklistRoles/find?picklistId=${picklist.picklistId}`)
    },
    picklistStatusHistory: {
      type: new GraphQLList(PicklistStatusHistoryType),
      args : {picklistId: {type: GraphQLString}},
      resolve: (picklist, args, {loaders}) => loaders.ofbizArray.load(`picklistStatusHistorys/find?picklistId=${picklist.picklistId}`)
    },
    picklistBin: {
      type: new GraphQLList(PicklistBinType),
      args : {picklistId: {type: GraphQLString}},
      resolve: (picklist, args, {loaders}) => loaders.ofbizArray.load(`picklistBins/find?picklistId=${picklist.picklistId}`)
    }
  })
});

export {PicklistType};
    