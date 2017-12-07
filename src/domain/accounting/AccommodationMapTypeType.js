
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


const AccommodationMapTypeType = new GraphQLObjectType({
  name: 'AccommodationMapTypeType',
  description: 'Type for AccommodationMapType in accounting',

  fields: () => ({
    description: {type: GraphQLString},
    accommodationMapTypeId: {type: GraphQLString},
    accommodationMap: {
      type: new GraphQLList(AccommodationMapType),
      args : {accommodationMapTypeId: {type: GraphQLString}},
      resolve: (accommodationMapType, args, {loaders}) => loaders.ofbizArray.load(`accommodationMaps/find?accommodationMapTypeId=${accommodationMapType.accommodationMapTypeId}`)
    }
  })
});

export {AccommodationMapTypeType};
    