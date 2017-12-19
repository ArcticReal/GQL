
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

import {FacilityGroupType} from '../../product/FacilityGroup/FacilityGroupType.js';
import {FacilityType} from '../../product/Facility/FacilityType.js';


const FacilityGroupMemberType = new GraphQLObjectType({
  name: 'FacilityGroupMemberType',
  description: 'Type for FacilityGroupMember in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (facilityGroupMember, args, {loaders}) => loaders.ofbiz.load(`product/facilitys/find?facilityId=${facilityGroupMember.facilityId}`)
    },
    sequenceNum: {type: GraphQLInt},
    facilityGroup: {
      type: FacilityGroupType,
      args : {facilityGroupId: {type: GraphQLString}},
      resolve: (facilityGroupMember, args, {loaders}) => loaders.ofbiz.load(`product/facility/facilityGroups/find?facilityGroupId=${facilityGroupMember.facilityGroupId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {FacilityGroupMemberType};
    