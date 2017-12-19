
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


const AccommodationMapTypeType = new GraphQLObjectType({
  name: 'AccommodationMapTypeType',
  description: 'Type for AccommodationMapType in accounting',

  fields: () => ({
    description: {type: GraphQLString},
    accommodationMapTypeId: {type: GraphQLString},
    accommodationMaps: {
      type: new GraphQLList(AccommodationMapType),
      args : {},
      resolve: (accommodationMapType, args, {loaders}) => loaders.ofbizArray.load(`accounting/accommodationMaps/find?accommodationMapTypeId=${accommodationMapType.accommodationMapTypeId}`)
    }
  })
});

export {AccommodationMapTypeType};
    