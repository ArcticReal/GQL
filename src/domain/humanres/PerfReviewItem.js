
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
    




const PerfReviewItemInputType = new GraphQLInputObjectType({
  name: 'PerfReviewItemInputType',
  description: 'input type for PerfReviewItem in humanres',

  fields: () => ({
    perfReviewItemTypeId: {type: GraphQLString},
    employeeRoleTypeId: {type: GraphQLString},
    perfReviewItemSeqId: {type: GraphQLString},
    perfRatingTypeId: {type: GraphQLString},
    employeePartyId: {type: GraphQLString},
    comments: {type: GraphQLString},
    perfReviewId: {type: GraphQLString}
  })
});

export {PerfReviewItemInputType};
    