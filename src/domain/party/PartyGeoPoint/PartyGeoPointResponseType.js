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

const PartyGeoPointResponseType = new GraphQLObjectType({
  name: 'PartyGeoPointResponseType',
  description: 'response type for PartyGeoPoint',

  fields: () => ({
    fromDate: {type: GraphQLString},
    geoPointId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PartyGeoPointResponseType};
    