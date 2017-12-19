
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

import {WorkEffortType} from '../../workeffort/WorkEffort/WorkEffortType.js';
import {FixedAssetType} from '../../accounting/FixedAsset/FixedAssetType.js';
import {AccommodationClassType} from '../../accounting/AccommodationClass/AccommodationClassType.js';


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
    