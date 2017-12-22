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

const FacilityLocationGeoPointResponseType = new GraphQLObjectType({
  name: 'FacilityLocationGeoPointResponseType',
  description: 'response type for FacilityLocationGeoPoint',

  fields: () => ({
    facilityId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    geoPointId: {type: GraphQLString},
    locationSeqId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FacilityLocationGeoPointResponseType};
    