
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
import {PartyClassificationGroupType} from '../../party/PartyClassificationGroup/PartyClassificationGroupType.js';


const SegmentGroupClassificationType = new GraphQLObjectType({
  name: 'SegmentGroupClassificationType',
  description: 'Type for SegmentGroupClassification in marketing',

  fields: () => ({
    partyClassificationGroup: {
      type: PartyClassificationGroupType,
      args : {partyClassificationGroupId: {type: GraphQLString}},
      resolve: (segmentGroupClassification, args, {loaders}) => loaders.ofbiz.load(`party/party/partyClassificationGroups/find?partyClassificationGroupId=${segmentGroupClassification.partyClassificationGroupId}`)
    },
    segmentGroup: {
      type: SegmentGroupType,
      args : {segmentGroupId: {type: GraphQLString}},
      resolve: (segmentGroupClassification, args, {loaders}) => loaders.ofbiz.load(`marketing/segmentGroups/find?segmentGroupId=${segmentGroupClassification.segmentGroupId}`)
    }
  })
});

export {SegmentGroupClassificationType};
    