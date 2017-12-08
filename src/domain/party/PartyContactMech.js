
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
import {ContactMechType} from '../party/ContactMech.js';


const PartyContactMechType = new GraphQLObjectType({
  name: 'PartyContactMechType',
  description: 'Type for PartyContactMech in party',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleType: {
      type: RoleTypeType,
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (partyContactMech, args, {loaders}) => loaders.ofbiz.load(`roleTypes/find?roleTypeId=${partyContactMech.roleTypeId}`)
    },
    allowSolicitation: {type: GraphQLBoolean},
    extension: {type: GraphQLString},
    comments: {type: GraphQLString},
    yearsWithContactMech: {type: GraphQLInt},
    verified: {type: GraphQLBoolean},
    monthsWithContactMech: {type: GraphQLInt},
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (partyContactMech, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${partyContactMech.partyId}`)
    },
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (partyContactMech, args, {loaders}) => loaders.ofbiz.load(`contactMechs/find?contactMechId=${partyContactMech.contactMechId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {PartyContactMechType};
    




const PartyContactMechInputType = new GraphQLInputObjectType({
  name: 'PartyContactMechInputType',
  description: 'input type for PartyContactMech in party',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    allowSolicitation: {type: GraphQLBoolean},
    extension: {type: GraphQLString},
    comments: {type: GraphQLString},
    yearsWithContactMech: {type: GraphQLInt},
    verified: {type: GraphQLBoolean},
    monthsWithContactMech: {type: GraphQLInt},
    partyId: {type: GraphQLString},
    contactMechId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PartyContactMechInputType};
    