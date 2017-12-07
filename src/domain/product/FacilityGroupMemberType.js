
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {FacilityGroupType} from '../product/FacilityGroupType.js';
import {FacilityType} from '../product/FacilityType.js';


const FacilityGroupMemberType = new GraphQLObjectType({
  name: 'FacilityGroupMemberType',
  description: 'Type for FacilityGroupMember in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (facilityGroupMember, args, {loaders}) => loaders.ofbiz.load(`facilitys/find?facilityId=${facilityGroupMember.facilityId}`)
    },
    sequenceNum: {type: GraphQLInt},
    facilityGroup: {
      type: FacilityGroupType,
      args : {facilityGroupId: {type: GraphQLString}},
      resolve: (facilityGroupMember, args, {loaders}) => loaders.ofbiz.load(`facilityGroups/find?facilityGroupId=${facilityGroupMember.facilityGroupId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {FacilityGroupMemberType};
    