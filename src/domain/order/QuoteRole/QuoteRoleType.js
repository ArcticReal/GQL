
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

import {QuoteType} from '../../order/Quote/QuoteType.js';
import {PartyRoleType} from '../../party/PartyRole/PartyRoleType.js';


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
    