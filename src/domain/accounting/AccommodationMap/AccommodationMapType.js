
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
import {AccommodationMapTypeType} from '../../accounting/AccommodationMapType/AccommodationMapTypeType.js';
import {FixedAssetType} from '../../accounting/FixedAsset/FixedAssetType.js';
import {AccommodationClassType} from '../../accounting/AccommodationClass/AccommodationClassType.js';


const AccommodationMapType = new GraphQLObjectType({
  name: 'AccommodationMapType',
  description: 'Type for AccommodationMap in accounting',

  fields: () => ({
    accommodationMapId: {type: GraphQLString},
    fixedAsset: {
      type: FixedAssetType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (accommodationMap, args, {loaders}) => loaders.ofbiz.load(`accounting/fixedAssets/find?fixedAssetId=${accommodationMap.fixedAssetId}`)
    },
    numberOfSpaces: {type: GraphQLInt},
    accommodationClass: {
      type: AccommodationClassType,
      args : {accommodationClassId: {type: GraphQLString}},
      resolve: (accommodationMap, args, {loaders}) => loaders.ofbiz.load(`accounting/accommodationClasss/find?accommodationClassId=${accommodationMap.accommodationClassId}`)
    },
    accommodationMapType: {
      type: AccommodationMapTypeType,
      args : {accommodationMapTypeId: {type: GraphQLString}},
      resolve: (accommodationMap, args, {loaders}) => loaders.ofbiz.load(`accounting/accommodationMap/accommodationMapTypes/find?accommodationMapTypeId=${accommodationMap.accommodationMapTypeId}`)
    },
    workEfforts: {
      type: new GraphQLList(WorkEffortType),
      args : {},
      resolve: (accommodationMap, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEfforts/find?accommodationMapId=${accommodationMap.accommodationMapId}`)
    }
  })
});

export {AccommodationMapType};
    