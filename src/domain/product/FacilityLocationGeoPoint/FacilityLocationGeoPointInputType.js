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

const FacilityLocationGeoPointInputType = new GraphQLInputObjectType({
  name: 'FacilityLocationGeoPointInputType',
  description: 'input type for FacilityLocationGeoPoint',

  fields: () => ({
    facilityId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    geoPointId: {type: GraphQLString},
    locationSeqId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FacilityLocationGeoPointInputType};
    