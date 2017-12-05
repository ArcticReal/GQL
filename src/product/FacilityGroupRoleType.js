
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
import {PartyRole} from '../product/PartyRole.js';


const FacilityGroupRole = new GraphQLObjectType({
  name: 'FacilityGroupRoleType',
  description: 'Type for FacilityGroupRole in product',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    facilityGroup: {
      type: FacilityGroupType,
      args : {facilityGroupId: {type: GraphQLString}},
      resolve: (facilityGroupRole, args, {loaders}) => loaders.ofbizArray.load(`facilityGroups/find?=${args.facilityGroupId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (facilityGroupRole, args, {loaders}) => loaders.ofbizArray.load(`partyRoles/find?=${args.partyId}`)
    }
  })
});

export {FacilityGroupRole};
    