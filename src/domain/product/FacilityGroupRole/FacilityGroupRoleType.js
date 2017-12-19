
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

import {PartyRoleType} from '../../party/PartyRole/PartyRoleType.js';
import {FacilityGroupType} from '../../product/FacilityGroup/FacilityGroupType.js';


const FacilityGroupRoleType = new GraphQLObjectType({
  name: 'FacilityGroupRoleType',
  description: 'Type for FacilityGroupRole in product',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    facilityGroup: {
      type: FacilityGroupType,
      args : {facilityGroupId: {type: GraphQLString}},
      resolve: (facilityGroupRole, args, {loaders}) => loaders.ofbiz.load(`product/facility/facilityGroups/find?facilityGroupId=${facilityGroupRole.facilityGroupId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (facilityGroupRole, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${facilityGroupRole.partyId}`)
    }
  })
});

export {FacilityGroupRoleType};
    