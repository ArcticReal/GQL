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
import {FileExtensionInputType} from '../../content/FileExtension/FileExtensionInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFileExtension = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFileExtension method',
  args:{fileExtensionToBeAdded: {type: FileExtensionInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/fileExtensions/add?`, args.fileExtensionToBeAdded, req);
  }
};
export {createFileExtension};


const updateFileExtension = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFileExtension method',
  args:{fileExtensionToBeUpdated: {type: FileExtensionInputType},fileExtensionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/fileExtensions/${args.fileExtensionId}?`, args.fileExtensionToBeUpdated, req);
  }
};
export {updateFileExtension};


const deleteFileExtensionByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteFileExtensionByIdUpdated method',
  args:{fileExtensionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/fileExtensions/${args.fileExtensionId}?`, null, req);
  }
};
export {deleteFileExtensionByIdUpdated};
