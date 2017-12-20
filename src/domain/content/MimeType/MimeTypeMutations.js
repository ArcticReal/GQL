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
import {MimeTypeInputType} from '../../content/MimeType/MimeTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createMimeType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createMimeType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/mimeTypes/add?`, null, req);
  }
};
export {createMimeType};


const updateMimeType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateMimeType method',
  args:{mimeTypeToBeUpdated: {type: MimeTypeInputType},mimeTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/mimeTypes/${args.mimeTypeId}?`, args.mimeTypeToBeUpdated, req);
  }
};
export {updateMimeType};


const deleteMimeTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteMimeTypeByIdUpdated method',
  args:{mimeTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/mimeTypes/${args.mimeTypeId}?`, null, req);
  }
};
export {deleteMimeTypeByIdUpdated};
