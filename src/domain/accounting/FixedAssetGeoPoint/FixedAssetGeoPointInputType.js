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

const FixedAssetGeoPointInputType = new GraphQLInputObjectType({
  name: 'FixedAssetGeoPointInputType',
  description: 'input type for FixedAssetGeoPoint',

  fields: () => ({
    fixedAssetId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    geoPointId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FixedAssetGeoPointInputType};
    