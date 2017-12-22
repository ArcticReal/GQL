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
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../framework/helpTypes.js';


const createDocument = {
  type: ResponseType,
  description: 'mutation for ofbiz createDocument method',
  args:{dateCreated: {type: GraphQLString},comments: {type: GraphQLString},imageData: {type: GraphQLString},documentTypeId: {type: GraphQLString},documentText: {type: GraphQLString},documentId: {type: GraphQLString},documentLocation: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentDocument/createDocument?dateCreated=${args.dateCreated}comments=${args.comments}imageData=${args.imageData}documentTypeId=${args.documentTypeId}documentText=${args.documentText}documentId=${args.documentId}documentLocation=${args.documentLocation}`, null, req);
  }
};
export {createDocument};


const createDocumentAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz createDocumentAttribute method',
  args:{documentId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentDocument/createDocumentAttribute?documentId=${args.documentId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {createDocumentAttribute};


const createDocumentType = {
  type: ResponseType,
  description: 'mutation for ofbiz createDocumentType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},documentTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentDocument/createDocumentType?parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}documentTypeId=${args.documentTypeId}description=${args.description}`, null, req);
  }
};
export {createDocumentType};


const createDocumentTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz createDocumentTypeAttr method',
  args:{documentTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentDocument/createDocumentTypeAttr?documentTypeId=${args.documentTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {createDocumentTypeAttr};


const deleteDocument = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteDocument method',
  args:{documentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentDocument/deleteDocument?documentId=${args.documentId}`, null, req);
  }
};
export {deleteDocument};


const deleteDocumentAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteDocumentAttribute method',
  args:{documentId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentDocument/deleteDocumentAttribute?documentId=${args.documentId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteDocumentAttribute};


const deleteDocumentType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteDocumentType method',
  args:{documentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentDocument/deleteDocumentType?documentTypeId=${args.documentTypeId}`, null, req);
  }
};
export {deleteDocumentType};


const deleteDocumentTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteDocumentTypeAttr method',
  args:{documentTypeId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentDocument/deleteDocumentTypeAttr?documentTypeId=${args.documentTypeId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteDocumentTypeAttr};


const updateDocument = {
  type: ResponseType,
  description: 'mutation for ofbiz updateDocument method',
  args:{documentId: {type: GraphQLString},dateCreated: {type: GraphQLString},comments: {type: GraphQLString},imageData: {type: GraphQLString},documentTypeId: {type: GraphQLString},documentText: {type: GraphQLString},documentLocation: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentDocument/updateDocument?documentId=${args.documentId}dateCreated=${args.dateCreated}comments=${args.comments}imageData=${args.imageData}documentTypeId=${args.documentTypeId}documentText=${args.documentText}documentLocation=${args.documentLocation}`, null, req);
  }
};
export {updateDocument};


const updateDocumentAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz updateDocumentAttribute method',
  args:{documentId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentDocument/updateDocumentAttribute?documentId=${args.documentId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {updateDocumentAttribute};


const updateDocumentType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateDocumentType method',
  args:{documentTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentDocument/updateDocumentType?documentTypeId=${args.documentTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateDocumentType};


const updateDocumentTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz updateDocumentTypeAttr method',
  args:{documentTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentDocument/updateDocumentTypeAttr?documentTypeId=${args.documentTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {updateDocumentTypeAttr};
