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
import {DocumentInputType} from '../../content/Document/DocumentInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createDocument = {
  type: GraphQLString,
  description: 'mutation for ofbiz createDocument method',
  args:{documentToBeAdded: {type: DocumentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/documents/add?`, args.documentToBeAdded, req);
  }
};
export {createDocument};


const updateDocument = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateDocument method',
  args:{documentToBeUpdated: {type: DocumentInputType},documentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/documents/${args.documentId}?`, args.documentToBeUpdated, req);
  }
};
export {updateDocument};


const deleteDocumentByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteDocumentByIdUpdated method',
  args:{documentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/documents/${args.documentId}?`, null, req);
  }
};
export {deleteDocumentByIdUpdated};
