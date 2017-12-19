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

const SegmentGroupGeoInputType = new GraphQLInputObjectType({
  name: 'SegmentGroupGeoInputType',
  description: 'input type for SegmentGroupGeo',

  fields: () => ({
    geoId: {type: GraphQLString},
    segmentGroupId: {type: GraphQLString}
  })
});

export {SegmentGroupGeoInputType};
    