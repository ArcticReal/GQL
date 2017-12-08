
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
import {AccommodationMapTypeType} from '../accounting/AccommodationMapType.js';
import {FixedAssetType} from '../accounting/FixedAsset.js';
import {AccommodationClassType} from '../accounting/AccommodationClass.js';


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
    workEfforts: {
      type: new GraphQLList(WorkEffortType),
      args : {accommodationMapId: {type: GraphQLString}},
      resolve: (accommodationMap, args, {loaders}) => loaders.ofbizArray.load(`workEfforts/find?accommodationMapId=${accommodationMap.accommodationMapId}`)
    }
  })
});

export {AccommodationMapType};
    




const AccommodationMapInputType = new GraphQLInputObjectType({
  name: 'AccommodationMapInputType',
  description: 'input type for AccommodationMap in accounting',

  fields: () => ({
    accommodationMapId: {type: GraphQLString},
    fixedAssetId: {type: GraphQLString},
    numberOfSpaces: {type: GraphQLInt},
    accommodationClassId: {type: GraphQLString},
    accommodationMapTypeId: {type: GraphQLString}
  })
});

export {AccommodationMapInputType};
    