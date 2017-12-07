
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyRoleType} from '../party/PartyRoleType.js';
import {CustRequestType} from '../order/CustRequestType.js';


const CustRequestPartyType = new GraphQLObjectType({
  name: 'CustRequestPartyType',
  description: 'Type for CustRequestParty in order',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    custRequest: {
      type: CustRequestType,
      args : {custRequestId: {type: GraphQLString}},
      resolve: (custRequestParty, args, {loaders}) => loaders.ofbiz.load(`custRequests/find?custRequestId=${custRequestParty.custRequestId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (custRequestParty, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${custRequestParty.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {CustRequestPartyType};
    