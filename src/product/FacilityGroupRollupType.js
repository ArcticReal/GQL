
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {FacilityGroup} from '../product/FacilityGroup.js';
import {FacilityGroup} from '../product/FacilityGroup.js';


const FacilityGroupRollup = new GraphQLObjectType({
  name: 'FacilityGroupRollupType',
  description: 'Type for FacilityGroupRollup in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    facilityGroup: {
      type: FacilityGroupType,
      args : {facilityGroupId: {type: GraphQLString}},
      resolve: (facilityGroupRollup, args, {loaders}) => loaders.ofbizArray.load(`facilityGroups/find?=${args.facilityGroupId}`)
    },
    parentFacilityGroup: {
      type: FacilityGroupType,
      args : {parentFacilityGroupId: {type: GraphQLString}},
      resolve: (facilityGroupRollup, args, {loaders}) => loaders.ofbizArray.load(`facilityGroups/find?facilityGroupId=${args.parentFacilityGroupId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {FacilityGroupRollup};
    