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
import {ResopnseType,KeyValueInputType} from '../../framework/helpTypes.js';


const createCharacterSet = {
  type: ResopnseType,
  description: 'mutation for ofbiz createCharacterSet method',
  args:{characterSetId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/createCharacterSet?characterSetId=${args.characterSetId}description=${args.description}`, null, req);
  }
};
export {createCharacterSet};


const createContentAssocPredicate = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContentAssocPredicate method',
  args:{contentAssocPredicateId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/createContentAssocPredicate?contentAssocPredicateId=${args.contentAssocPredicateId}description=${args.description}`, null, req);
  }
};
export {createContentAssocPredicate};


const createContentAssocType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContentAssocType method',
  args:{contentAssocTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/createContentAssocType?contentAssocTypeId=${args.contentAssocTypeId}description=${args.description}`, null, req);
  }
};
export {createContentAssocType};


const createContentPurposeType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContentPurposeType method',
  args:{contentPurposeTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/createContentPurposeType?contentPurposeTypeId=${args.contentPurposeTypeId}description=${args.description}`, null, req);
  }
};
export {createContentPurposeType};


const createContentType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContentType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},contentTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/createContentType?parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}contentTypeId=${args.contentTypeId}description=${args.description}`, null, req);
  }
};
export {createContentType};


const createContentTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContentTypeAttr method',
  args:{contentTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/createContentTypeAttr?contentTypeId=${args.contentTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {createContentTypeAttr};


const createDataResourceType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createDataResourceType method',
  args:{dataResourceTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/createDataResourceType?dataResourceTypeId=${args.dataResourceTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {createDataResourceType};


const createDataResourceTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz createDataResourceTypeAttr method',
  args:{dataResourceTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/createDataResourceTypeAttr?dataResourceTypeId=${args.dataResourceTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {createDataResourceTypeAttr};


const createFileExtension = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFileExtension method',
  args:{fileExtensionId: {type: GraphQLString},mimeTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/createFileExtension?fileExtensionId=${args.fileExtensionId}mimeTypeId=${args.mimeTypeId}`, null, req);
  }
};
export {createFileExtension};


const createMetaDataPredicate = {
  type: ResopnseType,
  description: 'mutation for ofbiz createMetaDataPredicate method',
  args:{metaDataPredicateId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/createMetaDataPredicate?metaDataPredicateId=${args.metaDataPredicateId}description=${args.description}`, null, req);
  }
};
export {createMetaDataPredicate};


const createMimeType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createMimeType method',
  args:{mimeTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/createMimeType?mimeTypeId=${args.mimeTypeId}description=${args.description}`, null, req);
  }
};
export {createMimeType};


const createMimeTypeHtmlTemplate = {
  type: ResopnseType,
  description: 'mutation for ofbiz createMimeTypeHtmlTemplate method',
  args:{mimeTypeId: {type: GraphQLString},templateLocation: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/createMimeTypeHtmlTemplate?mimeTypeId=${args.mimeTypeId}templateLocation=${args.templateLocation}`, null, req);
  }
};
export {createMimeTypeHtmlTemplate};


const removeCharacterSet = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeCharacterSet method',
  args:{characterSetId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/removeCharacterSet?characterSetId=${args.characterSetId}`, null, req);
  }
};
export {removeCharacterSet};


const removeContentAssocPredicate = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeContentAssocPredicate method',
  args:{contentAssocPredicateId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/removeContentAssocPredicate?contentAssocPredicateId=${args.contentAssocPredicateId}`, null, req);
  }
};
export {removeContentAssocPredicate};


const removeContentAssocType = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeContentAssocType method',
  args:{contentAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/removeContentAssocType?contentAssocTypeId=${args.contentAssocTypeId}`, null, req);
  }
};
export {removeContentAssocType};


const removeContentPurposeType = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeContentPurposeType method',
  args:{contentPurposeTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/removeContentPurposeType?contentPurposeTypeId=${args.contentPurposeTypeId}`, null, req);
  }
};
export {removeContentPurposeType};


const removeContentType = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeContentType method',
  args:{contentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/removeContentType?contentTypeId=${args.contentTypeId}`, null, req);
  }
};
export {removeContentType};


const removeContentTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeContentTypeAttr method',
  args:{contentTypeId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/removeContentTypeAttr?contentTypeId=${args.contentTypeId}attrName=${args.attrName}`, null, req);
  }
};
export {removeContentTypeAttr};


const removeDataResourceType = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeDataResourceType method',
  args:{dataResourceTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/removeDataResourceType?dataResourceTypeId=${args.dataResourceTypeId}`, null, req);
  }
};
export {removeDataResourceType};


const removeDataResourceTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeDataResourceTypeAttr method',
  args:{dataResourceTypeId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/removeDataResourceTypeAttr?dataResourceTypeId=${args.dataResourceTypeId}attrName=${args.attrName}`, null, req);
  }
};
export {removeDataResourceTypeAttr};


const removeFileExtension = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeFileExtension method',
  args:{fileExtensionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/removeFileExtension?fileExtensionId=${args.fileExtensionId}`, null, req);
  }
};
export {removeFileExtension};


const removeMetaDataPredicate = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeMetaDataPredicate method',
  args:{metaDataPredicateId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/removeMetaDataPredicate?metaDataPredicateId=${args.metaDataPredicateId}`, null, req);
  }
};
export {removeMetaDataPredicate};


const removeMimeType = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeMimeType method',
  args:{mimeTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/removeMimeType?mimeTypeId=${args.mimeTypeId}`, null, req);
  }
};
export {removeMimeType};


const removeMimeTypeHtmlTemplate = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeMimeTypeHtmlTemplate method',
  args:{mimeTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/removeMimeTypeHtmlTemplate?mimeTypeId=${args.mimeTypeId}`, null, req);
  }
};
export {removeMimeTypeHtmlTemplate};


const updateCharacterSet = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateCharacterSet method',
  args:{characterSetId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/updateCharacterSet?characterSetId=${args.characterSetId}description=${args.description}`, null, req);
  }
};
export {updateCharacterSet};


const updateContentAssocPredicate = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateContentAssocPredicate method',
  args:{contentAssocPredicateId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/updateContentAssocPredicate?contentAssocPredicateId=${args.contentAssocPredicateId}description=${args.description}`, null, req);
  }
};
export {updateContentAssocPredicate};


const updateContentAssocType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateContentAssocType method',
  args:{contentAssocTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/updateContentAssocType?contentAssocTypeId=${args.contentAssocTypeId}description=${args.description}`, null, req);
  }
};
export {updateContentAssocType};


const updateContentPurposeType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateContentPurposeType method',
  args:{contentPurposeTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/updateContentPurposeType?contentPurposeTypeId=${args.contentPurposeTypeId}description=${args.description}`, null, req);
  }
};
export {updateContentPurposeType};


const updateContentType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateContentType method',
  args:{contentTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/updateContentType?contentTypeId=${args.contentTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateContentType};


const updateDataResourceType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateDataResourceType method',
  args:{dataResourceTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/updateDataResourceType?dataResourceTypeId=${args.dataResourceTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateDataResourceType};


const updateDataResourceTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateDataResourceTypeAttr method',
  args:{dataResourceTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/updateDataResourceTypeAttr?dataResourceTypeId=${args.dataResourceTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {updateDataResourceTypeAttr};


const updateFileExtension = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFileExtension method',
  args:{fileExtensionId: {type: GraphQLString},mimeTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/updateFileExtension?fileExtensionId=${args.fileExtensionId}mimeTypeId=${args.mimeTypeId}`, null, req);
  }
};
export {updateFileExtension};


const updateMetaDataPredicate = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateMetaDataPredicate method',
  args:{metaDataPredicateId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/updateMetaDataPredicate?metaDataPredicateId=${args.metaDataPredicateId}description=${args.description}`, null, req);
  }
};
export {updateMetaDataPredicate};


const updateMimeType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateMimeType method',
  args:{mimeTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/updateMimeType?mimeTypeId=${args.mimeTypeId}description=${args.description}`, null, req);
  }
};
export {updateMimeType};


const updateMimeTypeHtmlTemplate = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateMimeTypeHtmlTemplate method',
  args:{mimeTypeId: {type: GraphQLString},templateLocation: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContenttypes/updateMimeTypeHtmlTemplate?mimeTypeId=${args.mimeTypeId}templateLocation=${args.templateLocation}`, null, req);
  }
};
export {updateMimeTypeHtmlTemplate};
