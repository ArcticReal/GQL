
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

import {ContainerType} from '../product/Container.js';


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
    




const ContainerGeoPointInputType = new GraphQLInputObjectType({
  name: 'ContainerGeoPointInputType',
  description: 'input type for ContainerGeoPoint in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    containerId: {type: GraphQLString},
    geoPointId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ContainerGeoPointInputType};
    