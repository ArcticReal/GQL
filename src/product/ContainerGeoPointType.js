
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {Container} from '../product/Container.js';
import {GeoPoint} from '../product/GeoPoint.js';


const ContainerGeoPoint = new GraphQLObjectType({
  name: 'ContainerGeoPointType',
  description: 'Type for ContainerGeoPoint in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    container: {
      type: ContainerType,
      args : {containerId: {type: GraphQLString}},
      resolve: (containerGeoPoint, args, {loaders}) => loaders.ofbizArray.load(`containers/find?=${args.containerId}`)
    },
    geoPoint: {
      type: GeoPointType,
      args : {geoPointId: {type: GraphQLString}},
      resolve: (containerGeoPoint, args, {loaders}) => loaders.ofbizArray.load(`geoPoints/find?=${args.geoPointId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ContainerGeoPoint};
    