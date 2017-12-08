
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

import {AccommodationMapType} from '../accounting/AccommodationMap.js';


const AccommodationMapTypeType = new GraphQLObjectType({
  name: 'AccommodationMapTypeType',
  description: 'Type for AccommodationMapType in accounting',

  fields: () => ({
    description: {type: GraphQLString},
    accommodationMapTypeId: {type: GraphQLString},
    accommodationMaps: {
      type: new GraphQLList(AccommodationMapType),
      args : {accommodationMapTypeId: {type: GraphQLString}},
      resolve: (accommodationMapType, args, {loaders}) => loaders.ofbizArray.load(`accommodationMaps/find?accommodationMapTypeId=${accommodationMapType.accommodationMapTypeId}`)
    }
  })
});

export {AccommodationMapTypeType};
    




const AccommodationMapTypeInputType = new GraphQLInputObjectType({
  name: 'AccommodationMapTypeInputType',
  description: 'input type for AccommodationMapType in accounting',

  fields: () => ({
    description: {type: GraphQLString},
    accommodationMapTypeId: {type: GraphQLString}
  })
});

export {AccommodationMapTypeInputType};
    