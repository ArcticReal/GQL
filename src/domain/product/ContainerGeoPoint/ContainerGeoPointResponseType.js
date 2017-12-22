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

const ContainerGeoPointResponseType = new GraphQLObjectType({
  name: 'ContainerGeoPointResponseType',
  description: 'response type for ContainerGeoPoint',

  fields: () => ({
    containerId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    geoPointId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ContainerGeoPointResponseType};
    