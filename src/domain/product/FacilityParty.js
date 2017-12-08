
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
import {RoleTypeType} from '../party/RoleType.js';
import {FacilityType} from '../product/Facility.js';


const FacilityPartyType = new GraphQLObjectType({
  name: 'FacilityPartyType',
  description: 'Type for FacilityParty in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleType: {
      type: RoleTypeType,
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (facilityParty, args, {loaders}) => loaders.ofbiz.load(`roleTypes/find?roleTypeId=${facilityParty.roleTypeId}`)
    },
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (facilityParty, args, {loaders}) => loaders.ofbiz.load(`facilitys/find?facilityId=${facilityParty.facilityId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (facilityParty, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${facilityParty.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {FacilityPartyType};
    




const FacilityPartyInputType = new GraphQLInputObjectType({
  name: 'FacilityPartyInputType',
  description: 'input type for FacilityParty in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    facilityId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FacilityPartyInputType};
    