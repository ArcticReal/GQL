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

const AccommodationSpotInputType = new GraphQLInputObjectType({
  name: 'AccommodationSpotInputType',
  description: 'input type for AccommodationSpot',

  fields: () => ({
    accommodationClassId: {type: GraphQLString},
    accommodationSpotId: {type: GraphQLString},
    description: {type: GraphQLString},
    fixedAssetId: {type: GraphQLString},
    numberOfSpaces: {type: GraphQLInt}
  })
});

export {AccommodationSpotInputType};
    