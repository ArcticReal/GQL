
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
import {FacilityGroupType} from '../product/FacilityGroupType.js';


const FacilityGroup = new GraphQLObjectType({
  name: 'FacilityGroupType',
  description: 'Type for FacilityGroup in product',

  fields: () => ({
    primaryParentGroup: {
      type: FacilityGroupType,
      args : {primaryParentGroupId: {type: GraphQLString}},
      resolve: (facilityGroup, args, {loaders}) => loaders.ofbizArray.load(`facilityGroups/find?facilityGroupId=${args.primaryParentGroupId}`)
    },
    facilityGroupType: {
      type: FacilityGroupTypeType,
      args : {facilityGroupTypeId: {type: GraphQLString}},
      resolve: (facilityGroup, args, {loaders}) => loaders.ofbizArray.load(`facilityGroupTypes/find?=${args.facilityGroupTypeId}`)
    },
    facilityGroupId: {type: GraphQLString},
    description: {type: GraphQLString},
    facilityGroupName: {type: GraphQLString}
  })
});

export {FacilityGroup};
    