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
import {DocumentTypeAttrInputType} from '../../content/DocumentTypeAttr/DocumentTypeAttrInputType.js';
import {DocumentTypeAttrResponseType} from '../../content/DocumentTypeAttr/DocumentTypeAttrResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createDocumentTypeAttr = {
  type: DocumentTypeAttrResponseType,
  description: 'mutation for ofbiz createDocumentTypeAttr method',
  args:{documentTypeAttrToBeAdded: {type: DocumentTypeAttrInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/document/documentTypeAttrs/add?`, args.documentTypeAttrToBeAdded, req);
  }
};
export {createDocumentTypeAttr};


const updateDocumentTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateDocumentTypeAttr method',
  args:{documentTypeAttrToBeUpdated: {type: DocumentTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/document/documentTypeAttrs/${args.attrName}?`, args.documentTypeAttrToBeUpdated, req);
  }
};
export {updateDocumentTypeAttr};


const deleteDocumentTypeAttrByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteDocumentTypeAttrByIdUpdated method',
  args:{documentTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/document/documentTypeAttrs/${args.documentTypeAttrId}?`, null, req);
  }
};
export {deleteDocumentTypeAttrByIdUpdated};
