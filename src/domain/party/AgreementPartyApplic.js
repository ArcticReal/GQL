
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

import {AgreementType} from '../party/Agreement.js';
import {PartyType} from '../party/Party.js';


const AgreementPartyApplicType = new GraphQLObjectType({
  name: 'AgreementPartyApplicType',
  description: 'Type for AgreementPartyApplic in party',

  fields: () => ({
    agreement: {
      type: AgreementType,
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementPartyApplic, args, {loaders}) => loaders.ofbiz.load(`party/agreements/find?agreementId=${agreementPartyApplic.agreementId}`)
    },
    agreementItemSeqId: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (agreementPartyApplic, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${agreementPartyApplic.partyId}`)
    }
  })
});

export {AgreementPartyApplicType};
    




const AgreementPartyApplicInputType = new GraphQLInputObjectType({
  name: 'AgreementPartyApplicInputType',
  description: 'input type for AgreementPartyApplic in party',

  fields: () => ({
    agreementId: {type: GraphQLString},
    agreementItemSeqId: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {AgreementPartyApplicInputType};
    