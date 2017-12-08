
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
import {CustRequestType} from '../order/CustRequest.js';
import {ContactMechType} from '../party/ContactMech.js';


const RespondingPartyType = new GraphQLObjectType({
  name: 'RespondingPartyType',
  description: 'Type for RespondingParty in order',

  fields: () => ({
    respondingPartySeqId: {type: GraphQLString},
    custRequest: {
      type: CustRequestType,
      args : {custRequestId: {type: GraphQLString}},
      resolve: (respondingParty, args, {loaders}) => loaders.ofbiz.load(`custRequests/find?custRequestId=${respondingParty.custRequestId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (respondingParty, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${respondingParty.partyId}`)
    },
    dateSent: {type: GraphQLString},
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (respondingParty, args, {loaders}) => loaders.ofbiz.load(`contactMechs/find?contactMechId=${respondingParty.contactMechId}`)
    }
  })
});

export {RespondingPartyType};
    




const RespondingPartyInputType = new GraphQLInputObjectType({
  name: 'RespondingPartyInputType',
  description: 'input type for RespondingParty in order',

  fields: () => ({
    respondingPartySeqId: {type: GraphQLString},
    custRequestId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    dateSent: {type: GraphQLString},
    contactMechId: {type: GraphQLString}
  })
});

export {RespondingPartyInputType};
    