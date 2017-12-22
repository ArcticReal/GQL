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
import {DocumentAttributeInputType} from '../../content/DocumentAttribute/DocumentAttributeInputType.js';
import {DocumentAttributeResponseType} from '../../content/DocumentAttribute/DocumentAttributeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createDocumentAttribute = {
  type: DocumentAttributeResponseType,
  description: 'mutation for ofbiz createDocumentAttribute method',
  args:{documentAttributeToBeAdded: {type: DocumentAttributeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/document/documentAttributes/add?`, args.documentAttributeToBeAdded, req);
  }
};
export {createDocumentAttribute};


const updateDocumentAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateDocumentAttribute method',
  args:{documentAttributeToBeUpdated: {type: DocumentAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/document/documentAttributes/${args.attrName}?`, args.documentAttributeToBeUpdated, req);
  }
};
export {updateDocumentAttribute};


const deleteDocumentAttributeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteDocumentAttributeByIdUpdated method',
  args:{documentAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/document/documentAttributes/${args.documentAttributeId}?`, null, req);
  }
};
export {deleteDocumentAttributeByIdUpdated};
