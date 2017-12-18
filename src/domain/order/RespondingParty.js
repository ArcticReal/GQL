
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
      resolve: (respondingParty, args, {loaders}) => loaders.ofbiz.load(`order/custRequests/find?custRequestId=${respondingParty.custRequestId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (respondingParty, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${respondingParty.partyId}`)
    },
    dateSent: {type: GraphQLString},
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (respondingParty, args, {loaders}) => loaders.ofbiz.load(`party/contactMechs/find?contactMechId=${respondingParty.contactMechId}`)
    }
  })
});

export {RespondingPartyType};
    




const RespondingPartyInputType = new GraphQLInputObjectType({
  name: 'RespondingPartyInputType',
  description: 'input type for RespondingParty',

  fields: () => ({
    contactMechId: {type: GraphQLString},
    custRequestId: {type: GraphQLString},
    dateSent: {type: GraphQLString},
    partyId: {type: GraphQLString},
    respondingPartySeqId: {type: GraphQLString}
  })
});

export {RespondingPartyInputType};
    