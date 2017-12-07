
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
import {PerfReviewItemTypeType} from '../humanres/PerfReviewItemTypeType.js';
import {PerfRatingTypeType} from '../humanres/PerfRatingTypeType.js';


const PerfReviewItemType = new GraphQLObjectType({
  name: 'PerfReviewItemType',
  description: 'Type for PerfReviewItem in humanres',

  fields: () => ({
    perfReviewItemType: {
      type: PerfReviewItemTypeType,
      args : {perfReviewItemTypeId: {type: GraphQLString}},
      resolve: (perfReviewItem, args, {loaders}) => loaders.ofbiz.load(`perfReviewItemTypes/find?perfReviewItemTypeId=${perfReviewItem.perfReviewItemTypeId}`)
    },
    employeeRoleTypeId: {type: GraphQLString},
    perfReviewItemSeqId: {type: GraphQLString},
    perfRatingType: {
      type: PerfRatingTypeType,
      args : {perfRatingTypeId: {type: GraphQLString}},
      resolve: (perfReviewItem, args, {loaders}) => loaders.ofbiz.load(`perfRatingTypes/find?perfRatingTypeId=${perfReviewItem.perfRatingTypeId}`)
    },
    employeeParty: {
      type: PartyRoleType,
      args : {employeePartyId: {type: GraphQLString}},
      resolve: (perfReviewItem, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${perfReviewItem.employeePartyId}`)
    },
    comments: {type: GraphQLString},
    perfReviewId: {type: GraphQLString}
  })
});

export {PerfReviewItemType};
    