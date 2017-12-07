
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyType} from '../party/PartyType.js';
import {ContactMechType} from '../party/ContactMechType.js';
import {ContactMechPurposeTypeType} from '../party/ContactMechPurposeTypeType.js';


const PartyContactMechPurposeType = new GraphQLObjectType({
  name: 'PartyContactMechPurposeType',
  description: 'Type for PartyContactMechPurpose in party',

  fields: () => ({
    fromDate: {type: GraphQLString},
    contactMechPurposeType: {
      type: ContactMechPurposeTypeType,
      args : {contactMechPurposeTypeId: {type: GraphQLString}},
      resolve: (partyContactMechPurpose, args, {loaders}) => loaders.ofbiz.load(`contactMechPurposeTypes/find?contactMechPurposeTypeId=${partyContactMechPurpose.contactMechPurposeTypeId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (partyContactMechPurpose, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${partyContactMechPurpose.partyId}`)
    },
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (partyContactMechPurpose, args, {loaders}) => loaders.ofbiz.load(`contactMechs/find?contactMechId=${partyContactMechPurpose.contactMechId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {PartyContactMechPurposeType};
    