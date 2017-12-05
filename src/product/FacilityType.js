
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {InventoryItemType} from '../product/InventoryItemType.js';
import {Facility} from '../product/Facility.js';
import {FacilityGroup} from '../product/FacilityGroup.js';
import {Party} from '../product/Party.js';
import {FacilityType} from '../product/FacilityType.js';
import {GeoPoint} from '../product/GeoPoint.js';


const Facility = new GraphQLObjectType({
  name: 'FacilityType',
  description: 'Type for Facility in product',

  fields: () => ({
    facilityId: {type: GraphQLString},
    defaultInventoryItemType: {
      type: InventoryItemTypeType,
      args : {defaultInventoryItemTypeId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemTypes/find?inventoryItemTypeId=${args.defaultInventoryItemTypeId}`)
    },
    parentFacility: {
      type: FacilityType,
      args : {parentFacilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`facilitys/find?facilityId=${args.parentFacilityId}`)
    },
    description: {type: GraphQLString},
    defaultWeightUomId: {type: GraphQLString},
    primaryFacilityGroup: {
      type: FacilityGroupType,
      args : {primaryFacilityGroupId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`facilityGroups/find?facilityGroupId=${args.primaryFacilityGroupId}`)
    },
    openedDate: {type: GraphQLString},
    ownerParty: {
      type: PartyType,
      args : {ownerPartyId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`partys/find?partyId=${args.ownerPartyId}`)
    },
    facilitySize: {type: GraphQLFloat},
    facilitySizeUomId: {type: GraphQLString},
    closedDate: {type: GraphQLString},
    facilityType: {
      type: FacilityTypeType,
      args : {facilityTypeId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`facilityTypes/find?=${args.facilityTypeId}`)
    },
    defaultDaysToShip: {type: GraphQLInt},
    defaultDimensionUomId: {type: GraphQLString},
    facilityName: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    geoPoint: {
      type: GeoPointType,
      args : {geoPointId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`geoPoints/find?=${args.geoPointId}`)
    },
    oldSquareFootage: {type: GraphQLInt}
  })
});

export {Facility};
    