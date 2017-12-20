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
import {AudioDataResourceInputType} from '../../content/AudioDataResource/AudioDataResourceInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createAudioDataResource = {
  type: ResopnseType,
  description: 'mutation for ofbiz createAudioDataResource method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/dataResource/audioDataResources/add?`, null, req);
  }
};
export {createAudioDataResource};


const deleteAudioDataResourceByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteAudioDataResourceByIdUpdated method',
  args:{audioDataResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/dataResource/audioDataResources/${args.audioDataResourceId}?`, null, req);
  }
};
export {deleteAudioDataResourceByIdUpdated};


const updateAudioDataResource = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateAudioDataResource method',
  args:{audioDataResourceToBeUpdated: {type: AudioDataResourceInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/dataResource/audioDataResources/${args.nullVal}?`, args.audioDataResourceToBeUpdated, req);
  }
};
export {updateAudioDataResource};
