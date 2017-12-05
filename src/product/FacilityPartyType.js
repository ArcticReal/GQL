
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {RoleType} from '../product/RoleType.js';
import {Facility} from '../product/Facility.js';
import {PartyRole} from '../product/PartyRole.js';


const FacilityParty = new GraphQLObjectType({
  name: 'FacilityPartyType',
  description: 'Type for FacilityParty in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleType: {
      type: RoleTypeType,
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (facilityParty, args, {loaders}) => loaders.ofbizArray.load(`roleTypes/find?=${args.roleTypeId}`)
    },
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (facilityParty, args, {loaders}) => loaders.ofbizArray.load(`facilitys/find?=${args.facilityId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (facilityParty, args, {loaders}) => loaders.ofbizArray.load(`partyRoles/find?=${args.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {FacilityParty};
    