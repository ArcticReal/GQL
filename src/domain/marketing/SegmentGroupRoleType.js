
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyRoleType} from '../party/PartyRoleType.js';
import {SegmentGroupType} from '../marketing/SegmentGroupType.js';


const SegmentGroupRoleType = new GraphQLObjectType({
  name: 'SegmentGroupRoleType',
  description: 'Type for SegmentGroupRole in marketing',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    segmentGroup: {
      type: SegmentGroupType,
      args : {segmentGroupId: {type: GraphQLString}},
      resolve: (segmentGroupRole, args, {loaders}) => loaders.ofbiz.load(`segmentGroups/find?segmentGroupId=${segmentGroupRole.segmentGroupId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (segmentGroupRole, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${segmentGroupRole.partyId}`)
    }
  })
});

export {SegmentGroupRoleType};
    