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
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../framework/helpTypes.js';


const createPerfRatingType = {
  type: ResponseType,
  description: 'mutation for ofbiz createPerfRatingType method',
  args:{perfRatingTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanresAbility/createPerfRatingType?perfRatingTypeId=${args.perfRatingTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {createPerfRatingType};


const createPerfReviewItemType = {
  type: ResponseType,
  description: 'mutation for ofbiz createPerfReviewItemType method',
  args:{perfReviewItemTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanresAbility/createPerfReviewItemType?perfReviewItemTypeId=${args.perfReviewItemTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {createPerfReviewItemType};


const deletePerfRatingType = {
  type: ResponseType,
  description: 'mutation for ofbiz deletePerfRatingType method',
  args:{perfRatingTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanresAbility/deletePerfRatingType?perfRatingTypeId=${args.perfRatingTypeId}`, null, req);
  }
};
export {deletePerfRatingType};


const deletePerfReviewItemType = {
  type: ResponseType,
  description: 'mutation for ofbiz deletePerfReviewItemType method',
  args:{perfReviewItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanresAbility/deletePerfReviewItemType?perfReviewItemTypeId=${args.perfReviewItemTypeId}`, null, req);
  }
};
export {deletePerfReviewItemType};


const updatePerfRatingType = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePerfRatingType method',
  args:{perfRatingTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanresAbility/updatePerfRatingType?perfRatingTypeId=${args.perfRatingTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updatePerfRatingType};


const updatePerfReviewItemType = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePerfReviewItemType method',
  args:{perfReviewItemTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanresAbility/updatePerfReviewItemType?perfReviewItemTypeId=${args.perfReviewItemTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updatePerfReviewItemType};
