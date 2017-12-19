
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

import {AccommodationMapType} from '../../accounting/AccommodationMap/AccommodationMapType.js';
import {AccommodationSpotType} from '../../accounting/AccommodationSpot/AccommodationSpotType.js';


const AccommodationClassType = new GraphQLObjectType({
  name: 'AccommodationClassType',
  description: 'Type for AccommodationClass in accounting',

  fields: () => ({
    parentClass: {
      type: AccommodationClassType,
      args : {parentClassId: {type: GraphQLString}},
      resolve: (accommodationClass, args, {loaders}) => loaders.ofbiz.load(`accounting/accommodationClasss/find?accommodationClassId=${accommodationClass.parentClassId}`)
    },
    description: {type: GraphQLString},
    accommodationClassId: {type: GraphQLString},
    accommodationClasses: {
      type: new GraphQLList(AccommodationClassType),
      args : {},
      resolve: (accommodationClass, args, {loaders}) => loaders.ofbizArray.load(`accounting/accommodationClasss/find?accommodationClassId=${accommodationClass.accommodationClassId}`)
    },
    accommodationSpots: {
      type: new GraphQLList(AccommodationSpotType),
      args : {},
      resolve: (accommodationClass, args, {loaders}) => loaders.ofbizArray.load(`accounting/accommodationSpots/find?accommodationClassId=${accommodationClass.accommodationClassId}`)
    },
    accommodationMaps: {
      type: new GraphQLList(AccommodationMapType),
      args : {},
      resolve: (accommodationClass, args, {loaders}) => loaders.ofbizArray.load(`accounting/accommodationMaps/find?accommodationClassId=${accommodationClass.accommodationClassId}`)
    }
  })
});

export {AccommodationClassType};
    