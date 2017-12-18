
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
import {PerfReviewItemTypeType} from '../humanres/PerfReviewItemType.js';
import {PerfRatingTypeType} from '../humanres/PerfRatingType.js';


const PerfReviewItemType = new GraphQLObjectType({
  name: 'PerfReviewItemType',
  description: 'Type for PerfReviewItem in humanres',

  fields: () => ({
    perfReviewItemType: {
      type: PerfReviewItemTypeType,
      args : {perfReviewItemTypeId: {type: GraphQLString}},
      resolve: (perfReviewItem, args, {loaders}) => loaders.ofbiz.load(`humanres/perfReview/perfReviewItemTypes/find?perfReviewItemTypeId=${perfReviewItem.perfReviewItemTypeId}`)
    },
    employeeRoleTypeId: {type: GraphQLString},
    perfReviewItemSeqId: {type: GraphQLString},
    perfRatingType: {
      type: PerfRatingTypeType,
      args : {perfRatingTypeId: {type: GraphQLString}},
      resolve: (perfReviewItem, args, {loaders}) => loaders.ofbiz.load(`humanres/perfRatingTypes/find?perfRatingTypeId=${perfReviewItem.perfRatingTypeId}`)
    },
    employeeParty: {
      type: PartyRoleType,
      args : {employeePartyId: {type: GraphQLString}},
      resolve: (perfReviewItem, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${perfReviewItem.employeePartyId}`)
    },
    comments: {type: GraphQLString},
    perfReviewId: {type: GraphQLString}
  })
});

export {PerfReviewItemType};
    




const PerfReviewItemInputType = new GraphQLInputObjectType({
  name: 'PerfReviewItemInputType',
  description: 'input type for PerfReviewItem',

  fields: () => ({
    comments: {type: GraphQLString},
    employeePartyId: {type: GraphQLString},
    employeeRoleTypeId: {type: GraphQLString},
    perfRatingTypeId: {type: GraphQLString},
    perfReviewId: {type: GraphQLString},
    perfReviewItemSeqId: {type: GraphQLString},
    perfReviewItemTypeId: {type: GraphQLString}
  })
});

export {PerfReviewItemInputType};
    