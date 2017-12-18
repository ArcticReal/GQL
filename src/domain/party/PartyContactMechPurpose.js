
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

import {PartyType} from '../party/Party.js';
import {ContactMechType} from '../party/ContactMech.js';
import {ContactMechPurposeTypeType} from '../party/ContactMechPurposeType.js';


const PartyContactMechPurposeType = new GraphQLObjectType({
  name: 'PartyContactMechPurposeType',
  description: 'Type for PartyContactMechPurpose in party',

  fields: () => ({
    fromDate: {type: GraphQLString},
    contactMechPurposeType: {
      type: ContactMechPurposeTypeType,
      args : {contactMechPurposeTypeId: {type: GraphQLString}},
      resolve: (partyContactMechPurpose, args, {loaders}) => loaders.ofbiz.load(`party/contactMech/contactMechPurposeTypes/find?contactMechPurposeTypeId=${partyContactMechPurpose.contactMechPurposeTypeId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (partyContactMechPurpose, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${partyContactMechPurpose.partyId}`)
    },
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (partyContactMechPurpose, args, {loaders}) => loaders.ofbiz.load(`party/contactMechs/find?contactMechId=${partyContactMechPurpose.contactMechId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {PartyContactMechPurposeType};
    




const PartyContactMechPurposeInputType = new GraphQLInputObjectType({
  name: 'PartyContactMechPurposeInputType',
  description: 'input type for PartyContactMechPurpose',

  fields: () => ({
    contactMechId: {type: GraphQLString},
    contactMechPurposeTypeId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PartyContactMechPurposeInputType};
    