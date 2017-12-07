
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {QuoteType} from '../order/QuoteType.js';
import {PartyRoleType} from '../party/PartyRoleType.js';


const QuoteRoleType = new GraphQLObjectType({
  name: 'QuoteRoleType',
  description: 'Type for QuoteRole in order',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (quoteRole, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${quoteRole.partyId}`)
    },
    quote: {
      type: QuoteType,
      args : {quoteId: {type: GraphQLString}},
      resolve: (quoteRole, args, {loaders}) => loaders.ofbiz.load(`quotes/find?quoteId=${quoteRole.quoteId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {QuoteRoleType};
    