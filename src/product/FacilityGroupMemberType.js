
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {Facility} from '../product/Facility.js';
import {FacilityGroup} from '../product/FacilityGroup.js';


const FacilityGroupMember = new GraphQLObjectType({
  name: 'FacilityGroupMemberType',
  description: 'Type for FacilityGroupMember in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (facilityGroupMember, args, {loaders}) => loaders.ofbizArray.load(`facilitys/find?=${args.facilityId}`)
    },
    sequenceNum: {type: GraphQLInt},
    facilityGroup: {
      type: FacilityGroupType,
      args : {facilityGroupId: {type: GraphQLString}},
      resolve: (facilityGroupMember, args, {loaders}) => loaders.ofbizArray.load(`facilityGroups/find?=${args.facilityGroupId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {FacilityGroupMember};
    