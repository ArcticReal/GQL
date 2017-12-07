
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {AccommodationMapType} from '../accounting/AccommodationMapType.js';
import {AccommodationSpotType} from '../accounting/AccommodationSpotType.js';


const AccommodationClassType = new GraphQLObjectType({
  name: 'AccommodationClassType',
  description: 'Type for AccommodationClass in accounting',

  fields: () => ({
    parentClass: {
      type: AccommodationClassType,
      args : {parentClassId: {type: GraphQLString}},
      resolve: (accommodationClass, args, {loaders}) => loaders.ofbiz.load(`accommodationClasss/find?accommodationClassId=${accommodationClass.parentClassId}`)
    },
    description: {type: GraphQLString},
    accommodationClassId: {type: GraphQLString},
    accommodationClass: {
      type: new GraphQLList(AccommodationClassType),
      args : {accommodationClassId: {type: GraphQLString}},
      resolve: (accommodationClass, args, {loaders}) => loaders.ofbizArray.load(`accommodationClasss/find?accommodationClassId=${accommodationClass.accommodationClassId}`)
    },
    accommodationSpot: {
      type: new GraphQLList(AccommodationSpotType),
      args : {accommodationClassId: {type: GraphQLString}},
      resolve: (accommodationClass, args, {loaders}) => loaders.ofbizArray.load(`accommodationSpots/find?accommodationClassId=${accommodationClass.accommodationClassId}`)
    },
    accommodationMap: {
      type: new GraphQLList(AccommodationMapType),
      args : {accommodationClassId: {type: GraphQLString}},
      resolve: (accommodationClass, args, {loaders}) => loaders.ofbizArray.load(`accommodationMaps/find?accommodationClassId=${accommodationClass.accommodationClassId}`)
    }
  })
});

export {AccommodationClassType};
    