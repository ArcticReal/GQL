
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
      resolve: (accommodationSpot, args, {loaders}) => loaders.ofbiz.load(`accounting/fixedAssets/find?fixedAssetId=${accommodationSpot.fixedAssetId}`)
    },
    numberOfSpaces: {type: GraphQLInt},
    description: {type: GraphQLString},
    accommodationClass: {
      type: AccommodationClassType,
      args : {accommodationClassId: {type: GraphQLString}},
      resolve: (accommodationSpot, args, {loaders}) => loaders.ofbiz.load(`accounting/accommodationClasss/find?accommodationClassId=${accommodationSpot.accommodationClassId}`)
    },
    workEfforts: {
      type: new GraphQLList(WorkEffortType),
      args : {},
      resolve: (accommodationSpot, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEfforts/find?accommodationSpotId=${accommodationSpot.accommodationSpotId}`)
    }
  })
});

export {AccommodationSpotType};
    




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
    