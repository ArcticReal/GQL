
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyRoleType} from '../party/PartyRoleType.js';
import {FacilityGroupType} from '../product/FacilityGroupType.js';


const FacilityGroupRoleType = new GraphQLObjectType({
  name: 'FacilityGroupRoleType',
  description: 'Type for FacilityGroupRole in product',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    facilityGroup: {
      type: FacilityGroupType,
      args : {facilityGroupId: {type: GraphQLString}},
      resolve: (facilityGroupRole, args, {loaders}) => loaders.ofbiz.load(`facilityGroups/find?facilityGroupId=${facilityGroupRole.facilityGroupId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (facilityGroupRole, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${facilityGroupRole.partyId}`)
    }
  })
});

export {FacilityGroupRoleType};
    