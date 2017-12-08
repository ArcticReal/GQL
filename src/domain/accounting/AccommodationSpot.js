
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

import {WorkEffortType} from '../workeffort/WorkEffort.js';
import {FixedAssetType} from '../accounting/FixedAsset.js';
import {AccommodationClassType} from '../accounting/AccommodationClass.js';


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
    workEfforts: {
      type: new GraphQLList(WorkEffortType),
      args : {accommodationSpotId: {type: GraphQLString}},
      resolve: (accommodationSpot, args, {loaders}) => loaders.ofbizArray.load(`workEfforts/find?accommodationSpotId=${accommodationSpot.accommodationSpotId}`)
    }
  })
});

export {AccommodationSpotType};
    




const AccommodationSpotInputType = new GraphQLInputObjectType({
  name: 'AccommodationSpotInputType',
  description: 'input type for AccommodationSpot in accounting',

  fields: () => ({
    accommodationSpotId: {type: GraphQLString},
    fixedAssetId: {type: GraphQLString},
    numberOfSpaces: {type: GraphQLInt},
    description: {type: GraphQLString},
    accommodationClassId: {type: GraphQLString}
  })
});

export {AccommodationSpotInputType};
    