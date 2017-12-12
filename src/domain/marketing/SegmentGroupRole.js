
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

import {PartyRoleType} from '../party/PartyRole.js';
import {SegmentGroupType} from '../marketing/SegmentGroup.js';


const SegmentGroupRoleType = new GraphQLObjectType({
  name: 'SegmentGroupRoleType',
  description: 'Type for SegmentGroupRole in marketing',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    segmentGroup: {
      type: SegmentGroupType,
      args : {segmentGroupId: {type: GraphQLString}},
      resolve: (segmentGroupRole, args, {loaders}) => loaders.ofbiz.load(`marketing/segmentGroups/find?segmentGroupId=${segmentGroupRole.segmentGroupId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (segmentGroupRole, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${segmentGroupRole.partyId}`)
    }
  })
});

export {SegmentGroupRoleType};
    




const SegmentGroupRoleInputType = new GraphQLInputObjectType({
  name: 'SegmentGroupRoleInputType',
  description: 'input type for SegmentGroupRole in marketing',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    segmentGroupId: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {SegmentGroupRoleInputType};
    