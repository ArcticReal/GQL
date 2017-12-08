
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


const PartyGeoPointType = new GraphQLObjectType({
  name: 'PartyGeoPointType',
  description: 'Type for PartyGeoPoint in party',

  fields: () => ({
    fromDate: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (partyGeoPoint, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${partyGeoPoint.partyId}`)
    },
    geoPointId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PartyGeoPointType};
    




const PartyGeoPointInputType = new GraphQLInputObjectType({
  name: 'PartyGeoPointInputType',
  description: 'input type for PartyGeoPoint in party',

  fields: () => ({
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    geoPointId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PartyGeoPointInputType};
    