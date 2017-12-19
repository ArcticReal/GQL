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

const FacilityLocationInputType = new GraphQLInputObjectType({
  name: 'FacilityLocationInputType',
  description: 'input type for FacilityLocation',

  fields: () => ({
    aisleId: {type: GraphQLString},
    areaId: {type: GraphQLString},
    facilityId: {type: GraphQLString},
    geoPointId: {type: GraphQLString},
    levelId: {type: GraphQLString},
    locationSeqId: {type: GraphQLString},
    locationTypeEnumId: {type: GraphQLString},
    positionId: {type: GraphQLString},
    sectionId: {type: GraphQLString}
  })
});

export {FacilityLocationInputType};
    