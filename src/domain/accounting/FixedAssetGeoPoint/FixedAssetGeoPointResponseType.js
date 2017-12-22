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

const FixedAssetGeoPointResponseType = new GraphQLObjectType({
  name: 'FixedAssetGeoPointResponseType',
  description: 'response type for FixedAssetGeoPoint',

  fields: () => ({
    fixedAssetId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    geoPointId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FixedAssetGeoPointResponseType};
    