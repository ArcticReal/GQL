
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ContainerType} from '../product/ContainerType.js';


const ContainerGeoPointType = new GraphQLObjectType({
  name: 'ContainerGeoPointType',
  description: 'Type for ContainerGeoPoint in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    container: {
      type: ContainerType,
      args : {containerId: {type: GraphQLString}},
      resolve: (containerGeoPoint, args, {loaders}) => loaders.ofbiz.load(`containers/find?containerId=${containerGeoPoint.containerId}`)
    },
    geoPointId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ContainerGeoPointType};
    