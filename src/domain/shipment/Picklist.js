
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

import {PicklistRoleType} from '../shipment/PicklistRole.js';
import {ShipmentMethodTypeType} from '../shipment/ShipmentMethodType.js';
import {FacilityType} from '../product/Facility.js';
import {PicklistStatusHistoryType} from '../shipment/PicklistStatusHistory.js';
import {PicklistBinType} from '../shipment/PicklistBin.js';


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
    picklistRoles: {
      type: new GraphQLList(PicklistRoleType),
      args : {picklistId: {type: GraphQLString}},
      resolve: (picklist, args, {loaders}) => loaders.ofbizArray.load(`picklistRoles/find?picklistId=${picklist.picklistId}`)
    },
    picklistStatusHistories: {
      type: new GraphQLList(PicklistStatusHistoryType),
      args : {picklistId: {type: GraphQLString}},
      resolve: (picklist, args, {loaders}) => loaders.ofbizArray.load(`picklistStatusHistorys/find?picklistId=${picklist.picklistId}`)
    },
    picklistBins: {
      type: new GraphQLList(PicklistBinType),
      args : {picklistId: {type: GraphQLString}},
      resolve: (picklist, args, {loaders}) => loaders.ofbizArray.load(`picklistBins/find?picklistId=${picklist.picklistId}`)
    }
  })
});

export {PicklistType};
    




const PicklistInputType = new GraphQLInputObjectType({
  name: 'PicklistInputType',
  description: 'input type for Picklist in shipment',

  fields: () => ({
    picklistId: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    facilityId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    description: {type: GraphQLString},
    picklistDate: {type: GraphQLString},
    shipmentMethodTypeId: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString}
  })
});

export {PicklistInputType};
    