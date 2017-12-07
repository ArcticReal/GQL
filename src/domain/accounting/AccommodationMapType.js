
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
import {AccommodationMapTypeType} from '../accounting/AccommodationMapTypeType.js';
import {FixedAssetType} from '../accounting/FixedAssetType.js';
import {AccommodationClassType} from '../accounting/AccommodationClassType.js';


const AccommodationMapType = new GraphQLObjectType({
  name: 'AccommodationMapType',
  description: 'Type for AccommodationMap in accounting',

  fields: () => ({
    accommodationMapId: {type: GraphQLString},
    fixedAsset: {
      type: FixedAssetType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (accommodationMap, args, {loaders}) => loaders.ofbiz.load(`fixedAssets/find?fixedAssetId=${accommodationMap.fixedAssetId}`)
    },
    numberOfSpaces: {type: GraphQLInt},
    accommodationClass: {
      type: AccommodationClassType,
      args : {accommodationClassId: {type: GraphQLString}},
      resolve: (accommodationMap, args, {loaders}) => loaders.ofbiz.load(`accommodationClasss/find?accommodationClassId=${accommodationMap.accommodationClassId}`)
    },
    accommodationMapType: {
      type: AccommodationMapTypeType,
      args : {accommodationMapTypeId: {type: GraphQLString}},
      resolve: (accommodationMap, args, {loaders}) => loaders.ofbiz.load(`accommodationMapTypes/find?accommodationMapTypeId=${accommodationMap.accommodationMapTypeId}`)
    },
    workEffort: {
      type: new GraphQLList(WorkEffortType),
      args : {accommodationMapId: {type: GraphQLString}},
      resolve: (accommodationMap, args, {loaders}) => loaders.ofbizArray.load(`workEfforts/find?accommodationMapId=${accommodationMap.accommodationMapId}`)
    }
  })
});

export {AccommodationMapType};
    