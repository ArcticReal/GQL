
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
import {RoleTypeType} from '../../party/RoleType/RoleTypeType.js';
import {FacilityType} from '../../product/Facility/FacilityType.js';


const FacilityPartyType = new GraphQLObjectType({
  name: 'FacilityPartyType',
  description: 'Type for FacilityParty in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleType: {
      type: RoleTypeType,
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (facilityParty, args, {loaders}) => loaders.ofbiz.load(`party/roleTypes/find?roleTypeId=${facilityParty.roleTypeId}`)
    },
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (facilityParty, args, {loaders}) => loaders.ofbiz.load(`product/facilitys/find?facilityId=${facilityParty.facilityId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (facilityParty, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${facilityParty.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {FacilityPartyType};
    