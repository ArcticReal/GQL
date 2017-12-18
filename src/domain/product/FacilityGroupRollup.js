
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

import {FacilityGroupType} from '../product/FacilityGroup.js';


const FacilityGroupRollupType = new GraphQLObjectType({
  name: 'FacilityGroupRollupType',
  description: 'Type for FacilityGroupRollup in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    facilityGroup: {
      type: FacilityGroupType,
      args : {facilityGroupId: {type: GraphQLString}},
      resolve: (facilityGroupRollup, args, {loaders}) => loaders.ofbiz.load(`product/facility/facilityGroups/find?facilityGroupId=${facilityGroupRollup.facilityGroupId}`)
    },
    parentFacilityGroup: {
      type: FacilityGroupType,
      args : {parentFacilityGroupId: {type: GraphQLString}},
      resolve: (facilityGroupRollup, args, {loaders}) => loaders.ofbiz.load(`product/facility/facilityGroups/find?facilityGroupId=${facilityGroupRollup.parentFacilityGroupId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {FacilityGroupRollupType};
    




const FacilityGroupRollupInputType = new GraphQLInputObjectType({
  name: 'FacilityGroupRollupInputType',
  description: 'input type for FacilityGroupRollup',

  fields: () => ({
    facilityGroupId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    parentFacilityGroupId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {FacilityGroupRollupInputType};
    