
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


const SegmentGroupTypeType = new GraphQLObjectType({
  name: 'SegmentGroupTypeType',
  description: 'Type for SegmentGroupType in marketing',

  fields: () => ({
    description: {type: GraphQLString},
    segmentGroupTypeId: {type: GraphQLString},
    segmentGroup: {
      type: new GraphQLList(SegmentGroupType),
      args : {segmentGroupTypeId: {type: GraphQLString}},
      resolve: (segmentGroupType, args, {loaders}) => loaders.ofbizArray.load(`segmentGroups/find?segmentGroupTypeId=${segmentGroupType.segmentGroupTypeId}`)
    }
  })
});

export {SegmentGroupTypeType};
    