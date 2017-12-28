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
import {MimeTypeResponseType} from '../../content/MimeType/MimeTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createMimeType = {
  type: MimeTypeResponseType,
  description: 'mutation for ofbiz createMimeType method',
  args:{mimeTypeToBeAdded: {type: MimeTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/mimeTypes/add?`, args.mimeTypeToBeAdded, req);
  }
};
export {createMimeType};


const updateMimeType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateMimeType method',
  args:{mimeTypeToBeUpdated: {type: MimeTypeInputType},mimeTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/mimeTypes/${args.mimeTypeId}?`, args.mimeTypeToBeUpdated, req);
  }
};
export {updateMimeType};


const deleteMimeTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteMimeTypeByIdUpdated method',
  args:{mimeTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/mimeTypes/${args.mimeTypeId}?`, null, req);
  }
};
export {deleteMimeTypeByIdUpdated};
