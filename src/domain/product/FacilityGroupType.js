
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {FacilityGroupRoleType} from '../product/FacilityGroupRoleType.js';
import {FacilityGroupTypeType} from '../product/FacilityGroupTypeType.js';
import {FacilityGroupRollupType} from '../product/FacilityGroupRollupType.js';
import {FacilityType} from '../product/FacilityType.js';
import {FacilityGroupMemberType} from '../product/FacilityGroupMemberType.js';


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
    facilityGroupRollup: {
      type: new GraphQLList(FacilityGroupRollupType),
      args : {facilityGroupId: {type: GraphQLString}},
      resolve: (facilityGroup, args, {loaders}) => loaders.ofbizArray.load(`facilityGroupRollups/find?facilityGroupId=${facilityGroup.facilityGroupId}`)
    },
    facilityGroupMember: {
      type: new GraphQLList(FacilityGroupMemberType),
      args : {facilityGroupId: {type: GraphQLString}},
      resolve: (facilityGroup, args, {loaders}) => loaders.ofbizArray.load(`facilityGroupMembers/find?facilityGroupId=${facilityGroup.facilityGroupId}`)
    },
    facilityGroupRole: {
      type: new GraphQLList(FacilityGroupRoleType),
      args : {facilityGroupId: {type: GraphQLString}},
      resolve: (facilityGroup, args, {loaders}) => loaders.ofbizArray.load(`facilityGroupRoles/find?facilityGroupId=${facilityGroup.facilityGroupId}`)
    },
    facilityGroup: {
      type: new GraphQLList(FacilityGroupType),
      args : {facilityGroupId: {type: GraphQLString}},
      resolve: (facilityGroup, args, {loaders}) => loaders.ofbizArray.load(`facilityGroups/find?facilityGroupId=${facilityGroup.facilityGroupId}`)
    },
    facility: {
      type: new GraphQLList(FacilityType),
      args : {facilityGroupId: {type: GraphQLString}},
      resolve: (facilityGroup, args, {loaders}) => loaders.ofbizArray.load(`facilitys/find?facilityGroupId=${facilityGroup.facilityGroupId}`)
    }
  })
});

export {FacilityGroupType};
    