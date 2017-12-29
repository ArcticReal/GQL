
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

import {PartyType} from '../../party/Party/PartyType.js';


const PartyCarrierAccountType = new GraphQLObjectType({
  name: 'PartyCarrierAccountType',
  description: 'Type for PartyCarrierAccount in party',

  fields: () => ({
    fromDate: {type: GraphQLString},
    carrierParty: {
      type: PartyType,
      args : {carrierPartyId: {type: GraphQLString}},
      resolve: (partyCarrierAccount, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${partyCarrierAccount.carrierPartyId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (partyCarrierAccount, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${partyCarrierAccount.partyId}`)
    },
    accountNumber: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PartyCarrierAccountType};
    