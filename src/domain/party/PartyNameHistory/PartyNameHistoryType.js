
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


const PartyNameHistoryType = new GraphQLObjectType({
  name: 'PartyNameHistoryType',
  description: 'Type for PartyNameHistory in party',

  fields: () => ({
    firstName: {type: GraphQLString},
    lastName: {type: GraphQLString},
    groupName: {type: GraphQLString},
    changeDate: {type: GraphQLString},
    middleName: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (partyNameHistory, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${partyNameHistory.partyId}`)
    },
    personalTitle: {type: GraphQLString},
    suffix: {type: GraphQLString}
  })
});

export {PartyNameHistoryType};
    