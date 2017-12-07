
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {SegmentGroupType} from '../marketing/SegmentGroupType.js';


const SegmentGroupGeoType = new GraphQLObjectType({
  name: 'SegmentGroupGeoType',
  description: 'Type for SegmentGroupGeo in marketing',

  fields: () => ({
    geoId: {type: GraphQLString},
    segmentGroup: {
      type: SegmentGroupType,
      args : {segmentGroupId: {type: GraphQLString}},
      resolve: (segmentGroupGeo, args, {loaders}) => loaders.ofbiz.load(`segmentGroups/find?segmentGroupId=${segmentGroupGeo.segmentGroupId}`)
    }
  })
});

export {SegmentGroupGeoType};
    