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
import {FileExtensionResponseType} from '../../content/FileExtension/FileExtensionResponseType.js';
import {FileExtensionInputType} from '../../content/FileExtension/FileExtensionInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFileExtension = {
  type: FileExtensionResponseType,
  description: 'mutation for ofbiz createFileExtension method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/fileExtensions/add?`, null, req);
  }
};
export {createFileExtension};


const updateFileExtension = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFileExtension method',
  args:{fileExtensionToBeUpdated: {type: FileExtensionInputType},fileExtensionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/fileExtensions/${args.fileExtensionId}?`, args.fileExtensionToBeUpdated, req);
  }
};
export {updateFileExtension};


const deleteFileExtensionByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFileExtensionByIdUpdated method',
  args:{fileExtensionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/fileExtensions/${args.fileExtensionId}?`, null, req);
  }
};
export {deleteFileExtensionByIdUpdated};
