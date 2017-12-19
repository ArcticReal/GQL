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

const AccommodationMapInputType = new GraphQLInputObjectType({
  name: 'AccommodationMapInputType',
  description: 'input type for AccommodationMap',

  fields: () => ({
    accommodationClassId: {type: GraphQLString},
    accommodationMapId: {type: GraphQLString},
    accommodationMapTypeId: {type: GraphQLString},
    fixedAssetId: {type: GraphQLString},
    numberOfSpaces: {type: GraphQLInt}
  })
});

export {AccommodationMapInputType};
    