
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

import {FacilityGroupRoleType} from '../product/FacilityGroupRole.js';
import {FacilityGroupTypeType} from '../product/FacilityGroupType.js';
import {FacilityGroupRollupType} from '../product/FacilityGroupRollup.js';
import {FacilityType} from '../product/Facility.js';
import {FacilityGroupMemberType} from '../product/FacilityGroupMember.js';


const FacilityGroupType = new GraphQLObjectType({
  name: 'FacilityGroupType',
  description: 'Type for FacilityGroup in product',

  fields: () => ({
    primaryParentGroup: {
      type: FacilityGroupType,
      args : {primaryParentGroupId: {type: GraphQLString}},
      resolve: (facilityGroup, args, {loaders}) => loaders.ofbiz.load(`facilityGroups/find?facilityGroupId=${facilityGroup.primaryParentGroupId}`)
    },
    facilityGroupType: {
      type: FacilityGroupTypeType,
      args : {facilityGroupTypeId: {type: GraphQLString}},
      resolve: (facilityGroup, args, {loaders}) => loaders.ofbiz.load(`facilityGroupTypes/find?facilityGroupTypeId=${facilityGroup.facilityGroupTypeId}`)
    },
    facilityGroupId: {type: GraphQLString},
    description: {type: GraphQLString},
    facilityGroupName: {type: GraphQLString},
    facilityGroupRollups: {
      type: new GraphQLList(FacilityGroupRollupType),
      args : {facilityGroupId: {type: GraphQLString}},
      resolve: (facilityGroup, args, {loaders}) => loaders.ofbizArray.load(`facilityGroupRollups/find?facilityGroupId=${facilityGroup.facilityGroupId}`)
    },
    facilityGroupMembers: {
      type: new GraphQLList(FacilityGroupMemberType),
      args : {facilityGroupId: {type: GraphQLString}},
      resolve: (facilityGroup, args, {loaders}) => loaders.ofbizArray.load(`facilityGroupMembers/find?facilityGroupId=${facilityGroup.facilityGroupId}`)
    },
    facilityGroupRoles: {
      type: new GraphQLList(FacilityGroupRoleType),
      args : {facilityGroupId: {type: GraphQLString}},
      resolve: (facilityGroup, args, {loaders}) => loaders.ofbizArray.load(`facilityGroupRoles/find?facilityGroupId=${facilityGroup.facilityGroupId}`)
    },
    facilityGroups: {
      type: new GraphQLList(FacilityGroupType),
      args : {facilityGroupId: {type: GraphQLString}},
      resolve: (facilityGroup, args, {loaders}) => loaders.ofbizArray.load(`facilityGroups/find?facilityGroupId=${facilityGroup.facilityGroupId}`)
    },
    facilities: {
      type: new GraphQLList(FacilityType),
      args : {facilityGroupId: {type: GraphQLString}},
      resolve: (facilityGroup, args, {loaders}) => loaders.ofbizArray.load(`facilitys/find?facilityGroupId=${facilityGroup.facilityGroupId}`)
    }
  })
});

export {FacilityGroupType};
    




const FacilityGroupInputType = new GraphQLInputObjectType({
  name: 'FacilityGroupInputType',
  description: 'input type for FacilityGroup in product',

  fields: () => ({
    primaryParentGroupId: {type: GraphQLString},
    facilityGroupTypeId: {type: GraphQLString},
    facilityGroupId: {type: GraphQLString},
    description: {type: GraphQLString},
    facilityGroupName: {type: GraphQLString}
  })
});

export {FacilityGroupInputType};
    