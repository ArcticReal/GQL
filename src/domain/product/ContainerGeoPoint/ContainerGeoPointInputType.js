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

const ContainerGeoPointInputType = new GraphQLInputObjectType({
  name: 'ContainerGeoPointInputType',
  description: 'input type for ContainerGeoPoint',

  fields: () => ({
    containerId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    geoPointId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ContainerGeoPointInputType};
    