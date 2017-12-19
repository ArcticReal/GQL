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
import {VideoDataResourceInputType} from '../../content/VideoDataResource/VideoDataResourceInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createVideoDataResource = {
  type: GraphQLString,
  description: 'mutation for ofbiz createVideoDataResource method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/dataResource/videoDataResources/add?`, null, req);
  }
};
export {createVideoDataResource};


const updateVideoDataResource = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateVideoDataResource method',
  args:{videoDataResourceToBeUpdated: {type: VideoDataResourceInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/dataResource/videoDataResources/${args.nullVal}?`, args.videoDataResourceToBeUpdated, req);
  }
};
export {updateVideoDataResource};


const deleteVideoDataResourceByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteVideoDataResourceByIdUpdated method',
  args:{videoDataResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/dataResource/videoDataResources/${args.videoDataResourceId}?`, null, req);
  }
};
export {deleteVideoDataResourceByIdUpdated};
