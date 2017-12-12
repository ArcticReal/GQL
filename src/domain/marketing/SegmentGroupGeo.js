
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

import {SegmentGroupType} from '../marketing/SegmentGroup.js';


const SegmentGroupGeoType = new GraphQLObjectType({
  name: 'SegmentGroupGeoType',
  description: 'Type for SegmentGroupGeo in marketing',

  fields: () => ({
    geoId: {type: GraphQLString},
    segmentGroup: {
      type: SegmentGroupType,
      args : {segmentGroupId: {type: GraphQLString}},
      resolve: (segmentGroupGeo, args, {loaders}) => loaders.ofbiz.load(`marketing/segmentGroups/find?segmentGroupId=${segmentGroupGeo.segmentGroupId}`)
    }
  })
});

export {SegmentGroupGeoType};
    




const SegmentGroupGeoInputType = new GraphQLInputObjectType({
  name: 'SegmentGroupGeoInputType',
  description: 'input type for SegmentGroupGeo in marketing',

  fields: () => ({
    geoId: {type: GraphQLString},
    segmentGroupId: {type: GraphQLString}
  })
});

export {SegmentGroupGeoInputType};
    