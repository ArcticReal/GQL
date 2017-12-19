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

const PartyGeoPointInputType = new GraphQLInputObjectType({
  name: 'PartyGeoPointInputType',
  description: 'input type for PartyGeoPoint',

  fields: () => ({
    fromDate: {type: GraphQLString},
    geoPointId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PartyGeoPointInputType};
    