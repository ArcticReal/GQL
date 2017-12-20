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
import {ImageDataResourceInputType} from '../../content/ImageDataResource/ImageDataResourceInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createImageDataResource = {
  type: ResopnseType,
  description: 'mutation for ofbiz createImageDataResource method',
  args:{imageDataResourceToBeAdded: {type: ImageDataResourceInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/dataResource/imageDataResources/add?`, args.imageDataResourceToBeAdded, req);
  }
};
export {createImageDataResource};


const deleteImageDataResourceByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteImageDataResourceByIdUpdated method',
  args:{imageDataResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/dataResource/imageDataResources/${args.imageDataResourceId}?`, null, req);
  }
};
export {deleteImageDataResourceByIdUpdated};


const updateImageDataResource = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateImageDataResource method',
  args:{imageDataResourceToBeUpdated: {type: ImageDataResourceInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/dataResource/imageDataResources/${args.nullVal}?`, args.imageDataResourceToBeUpdated, req);
  }
};
export {updateImageDataResource};
