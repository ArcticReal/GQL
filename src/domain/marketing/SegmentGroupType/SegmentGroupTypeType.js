
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

import {SegmentGroupType} from '../../marketing/SegmentGroup/SegmentGroupType.js';


const SegmentGroupTypeType = new GraphQLObjectType({
  name: 'SegmentGroupTypeType',
  description: 'Type for SegmentGroupType in marketing',

  fields: () => ({
    description: {type: GraphQLString},
    segmentGroupTypeId: {type: GraphQLString},
    segmentGroups: {
      type: new GraphQLList(SegmentGroupType),
      args : {},
      resolve: (segmentGroupType, args, {loaders}) => loaders.ofbizArray.load(`marketing/segmentGroups/find?segmentGroupTypeId=${segmentGroupType.segmentGroupTypeId}`)
    }
  })
});

export {SegmentGroupTypeType};
    