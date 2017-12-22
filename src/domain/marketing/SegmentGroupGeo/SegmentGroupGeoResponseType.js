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

const SegmentGroupGeoResponseType = new GraphQLObjectType({
  name: 'SegmentGroupGeoResponseType',
  description: 'response type for SegmentGroupGeo',

  fields: () => ({
    geoId: {type: GraphQLString},
    segmentGroupId: {type: GraphQLString}
  })
});

export {SegmentGroupGeoResponseType};
    