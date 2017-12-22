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

const AccommodationMapResponseType = new GraphQLObjectType({
  name: 'AccommodationMapResponseType',
  description: 'response type for AccommodationMap',

  fields: () => ({
    accommodationClassId: {type: GraphQLString},
    accommodationMapId: {type: GraphQLString},
    accommodationMapTypeId: {type: GraphQLString},
    fixedAssetId: {type: GraphQLString},
    numberOfSpaces: {type: GraphQLInt}
  })
});

export {AccommodationMapResponseType};
    