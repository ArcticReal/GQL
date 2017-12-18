
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

import {QuoteType} from '../order/Quote.js';
import {PartyRoleType} from '../party/PartyRole.js';


const QuoteRoleType = new GraphQLObjectType({
  name: 'QuoteRoleType',
  description: 'Type for QuoteRole in order',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (quoteRole, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${quoteRole.partyId}`)
    },
    quote: {
      type: QuoteType,
      args : {quoteId: {type: GraphQLString}},
      resolve: (quoteRole, args, {loaders}) => loaders.ofbiz.load(`order/quotes/find?quoteId=${quoteRole.quoteId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {QuoteRoleType};
    




const QuoteRoleInputType = new GraphQLInputObjectType({
  name: 'QuoteRoleInputType',
  description: 'input type for QuoteRole',

  fields: () => ({
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    quoteId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {QuoteRoleInputType};
    