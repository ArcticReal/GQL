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

const AccommodationSpotResponseType = new GraphQLObjectType({
  name: 'AccommodationSpotResponseType',
  description: 'response type for AccommodationSpot',

  fields: () => ({
    accommodationClassId: {type: GraphQLString},
    accommodationSpotId: {type: GraphQLString},
    description: {type: GraphQLString},
    fixedAssetId: {type: GraphQLString},
    numberOfSpaces: {type: GraphQLInt}
  })
});

export {AccommodationSpotResponseType};
    