
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {FixedAssetType} from '../accounting/FixedAssetType.js';


const FixedAssetGeoPointType = new GraphQLObjectType({
  name: 'FixedAssetGeoPointType',
  description: 'Type for FixedAssetGeoPoint in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    fixedAsset: {
      type: FixedAssetType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAssetGeoPoint, args, {loaders}) => loaders.ofbiz.load(`fixedAssets/find?fixedAssetId=${fixedAssetGeoPoint.fixedAssetId}`)
    },
    geoPointId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FixedAssetGeoPointType};
    