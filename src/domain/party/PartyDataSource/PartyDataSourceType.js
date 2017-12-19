
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


const PartyDataSourceType = new GraphQLObjectType({
  name: 'PartyDataSourceType',
  description: 'Type for PartyDataSource in party',

  fields: () => ({
    fromDate: {type: GraphQLString},
    dataSourceId: {type: GraphQLString},
    comments: {type: GraphQLString},
    visitId: {type: GraphQLString},
    isCreate: {type: GraphQLBoolean},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (partyDataSource, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${partyDataSource.partyId}`)
    }
  })
});

export {PartyDataSourceType};
    