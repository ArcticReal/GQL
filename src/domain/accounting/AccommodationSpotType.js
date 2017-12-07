
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {WorkEffortType} from '../workeffort/WorkEffortType.js';
import {FixedAssetType} from '../accounting/FixedAssetType.js';
import {AccommodationClassType} from '../accounting/AccommodationClassType.js';


const AccommodationSpotType = new GraphQLObjectType({
  name: 'AccommodationSpotType',
  description: 'Type for AccommodationSpot in accounting',

  fields: () => ({
    accommodationSpotId: {type: GraphQLString},
    fixedAsset: {
      type: FixedAssetType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (accommodationSpot, args, {loaders}) => loaders.ofbiz.load(`fixedAssets/find?fixedAssetId=${accommodationSpot.fixedAssetId}`)
    },
    numberOfSpaces: {type: GraphQLInt},
    description: {type: GraphQLString},
    accommodationClass: {
      type: AccommodationClassType,
      args : {accommodationClassId: {type: GraphQLString}},
      resolve: (accommodationSpot, args, {loaders}) => loaders.ofbiz.load(`accommodationClasss/find?accommodationClassId=${accommodationSpot.accommodationClassId}`)
    },
    workEffort: {
      type: new GraphQLList(WorkEffortType),
      args : {accommodationSpotId: {type: GraphQLString}},
      resolve: (accommodationSpot, args, {loaders}) => loaders.ofbizArray.load(`workEfforts/find?accommodationSpotId=${accommodationSpot.accommodationSpotId}`)
    }
  })
});

export {AccommodationSpotType};
    