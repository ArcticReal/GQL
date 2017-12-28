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
import {DocumentTypeInputType} from '../../content/DocumentType/DocumentTypeInputType.js';
import {DocumentTypeResponseType} from '../../content/DocumentType/DocumentTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createDocumentType = {
  type: DocumentTypeResponseType,
  description: 'mutation for ofbiz createDocumentType method',
  args:{documentTypeToBeAdded: {type: DocumentTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/document/documentTypes/add?`, args.documentTypeToBeAdded, req);
  }
};
export {createDocumentType};


const updateDocumentType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateDocumentType method',
  args:{documentTypeToBeUpdated: {type: DocumentTypeInputType},documentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/document/documentTypes/${args.documentTypeId}?`, args.documentTypeToBeUpdated, req);
  }
};
export {updateDocumentType};


const deleteDocumentTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteDocumentTypeByIdUpdated method',
  args:{documentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/document/documentTypes/${args.documentTypeId}?`, null, req);
  }
};
export {deleteDocumentTypeByIdUpdated};
