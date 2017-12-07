
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


const PartyIcsAvsOverrideType = new GraphQLObjectType({
  name: 'PartyIcsAvsOverrideType',
  description: 'Type for PartyIcsAvsOverride in party',

  fields: () => ({
    avsDeclineString: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (partyIcsAvsOverride, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${partyIcsAvsOverride.partyId}`)
    }
  })
});

export {PartyIcsAvsOverrideType};
    