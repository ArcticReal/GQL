
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

import {FixedAssetType} from '../accounting/FixedAsset.js';


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
    




const FixedAssetGeoPointInputType = new GraphQLInputObjectType({
  name: 'FixedAssetGeoPointInputType',
  description: 'input type for FixedAssetGeoPoint in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    fixedAssetId: {type: GraphQLString},
    geoPointId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FixedAssetGeoPointInputType};
    