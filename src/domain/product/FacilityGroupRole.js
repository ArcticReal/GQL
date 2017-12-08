
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

import {PartyRoleType} from '../party/PartyRole.js';
import {FacilityGroupType} from '../product/FacilityGroup.js';


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
    




const FacilityGroupRoleInputType = new GraphQLInputObjectType({
  name: 'FacilityGroupRoleInputType',
  description: 'input type for FacilityGroupRole in product',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    facilityGroupId: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {FacilityGroupRoleInputType};
    