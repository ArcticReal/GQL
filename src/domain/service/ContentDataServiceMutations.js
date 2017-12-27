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


const clearAssociatedRenderCache = {
  type: ResponseType,
  description: 'mutation for ofbiz clearAssociatedRenderCache method',
  args:{dataResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/clearAssociatedRenderCache?dataResourceId=${args.dataResourceId}&`, null, req);
  }
};
export {clearAssociatedRenderCache};


const createAnonFile = {
  type: ResponseType,
  description: 'mutation for ofbiz createAnonFile method',
  args:{surveyId: {type: GraphQLString},mimeTypeId: {type: GraphQLString},rootDir: {type: GraphQLString},dataCategoryId: {type: GraphQLString},surveyResponseId: {type: GraphQLString},textData: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},relatedDetailId: {type: GraphQLString},dataResourceId: {type: GraphQLString},isPublic: {type: GraphQLString},objectInfo: {type: GraphQLString},partyId: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},uploadedFile: {type: GraphQLString},dataResource: {type: new GraphQLList(KeyValueInputType)},dataResourceName: {type: GraphQLInt},roleTypeId: {type: GraphQLString},dataTemplateTypeId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},skipPermissionCheck: {type: GraphQLString},characterSetId: {type: GraphQLString},binData: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/createAnonFile?surveyId=${args.surveyId}&mimeTypeId=${args.mimeTypeId}&rootDir=${args.rootDir}&dataCategoryId=${args.dataCategoryId}&surveyResponseId=${args.surveyResponseId}&textData=${args.textData}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&relatedDetailId=${args.relatedDetailId}&dataResourceId=${args.dataResourceId}&isPublic=${args.isPublic}&objectInfo=${args.objectInfo}&partyId=${args.partyId}&dataResourceTypeId=${args.dataResourceTypeId}&createdByUserLogin=${args.createdByUserLogin}&uploadedFile=${args.uploadedFile}&dataResource=${args.dataResource}&dataResourceName=${args.dataResourceName}&contentPurposeList=${args.contentPurposeList}&roleTypeId=${args.roleTypeId}&dataTemplateTypeId=${args.dataTemplateTypeId}&targetOperationList=${args.targetOperationList}&lastModifiedDate=${args.lastModifiedDate}&skipPermissionCheck=${args.skipPermissionCheck}&characterSetId=${args.characterSetId}&binData=${args.binData}&createdDate=${args.createdDate}&statusId=${args.statusId}&localeString=${args.localeString}&`, null, req);
  }
};
export {createAnonFile};


const createAudioDataResource = {
  type: ResponseType,
  description: 'mutation for ofbiz createAudioDataResource method',
  args:{audioData: {type: GraphQLString},dataResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/createAudioDataResource?audioData=${args.audioData}&dataResourceId=${args.dataResourceId}&`, null, req);
  }
};
export {createAudioDataResource};


const createDataResource = {
  type: ResponseType,
  description: 'mutation for ofbiz createDataResource method',
  args:{surveyId: {type: GraphQLString},mimeTypeId: {type: GraphQLString},dataCategoryId: {type: GraphQLString},surveyResponseId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},relatedDetailId: {type: GraphQLString},dataResourceId: {type: GraphQLString},isPublic: {type: GraphQLString},objectInfo: {type: GraphQLString},partyId: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},uploadedFile: {type: GraphQLString},dataResourceName: {type: GraphQLInt},roleTypeId: {type: GraphQLString},dataTemplateTypeId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},skipPermissionCheck: {type: GraphQLString},characterSetId: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/createDataResource?surveyId=${args.surveyId}&mimeTypeId=${args.mimeTypeId}&dataCategoryId=${args.dataCategoryId}&surveyResponseId=${args.surveyResponseId}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&relatedDetailId=${args.relatedDetailId}&dataResourceId=${args.dataResourceId}&isPublic=${args.isPublic}&objectInfo=${args.objectInfo}&partyId=${args.partyId}&dataResourceTypeId=${args.dataResourceTypeId}&createdByUserLogin=${args.createdByUserLogin}&uploadedFile=${args.uploadedFile}&dataResourceName=${args.dataResourceName}&contentPurposeList=${args.contentPurposeList}&roleTypeId=${args.roleTypeId}&dataTemplateTypeId=${args.dataTemplateTypeId}&targetOperationList=${args.targetOperationList}&lastModifiedDate=${args.lastModifiedDate}&skipPermissionCheck=${args.skipPermissionCheck}&characterSetId=${args.characterSetId}&createdDate=${args.createdDate}&statusId=${args.statusId}&localeString=${args.localeString}&`, null, req);
  }
};
export {createDataResource};


const createDataResourceAndAssocToContent = {
  type: ResponseType,
  description: 'mutation for ofbiz createDataResourceAndAssocToContent method',
  args:{contentId: {type: GraphQLString},surveyId: {type: GraphQLString},mimeTypeId: {type: GraphQLString},dataCategoryId: {type: GraphQLString},surveyResponseId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},relatedDetailId: {type: GraphQLString},dataResourceId: {type: GraphQLString},isPublic: {type: GraphQLString},objectInfo: {type: GraphQLString},partyId: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},uploadedFile: {type: GraphQLString},templateDataResource: {type: GraphQLString},dataResourceName: {type: GraphQLInt},roleTypeId: {type: GraphQLString},dataTemplateTypeId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},skipPermissionCheck: {type: GraphQLString},characterSetId: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/createDataResourceAndAssocToContent?contentId=${args.contentId}&surveyId=${args.surveyId}&mimeTypeId=${args.mimeTypeId}&dataCategoryId=${args.dataCategoryId}&surveyResponseId=${args.surveyResponseId}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&relatedDetailId=${args.relatedDetailId}&dataResourceId=${args.dataResourceId}&isPublic=${args.isPublic}&objectInfo=${args.objectInfo}&partyId=${args.partyId}&dataResourceTypeId=${args.dataResourceTypeId}&createdByUserLogin=${args.createdByUserLogin}&uploadedFile=${args.uploadedFile}&templateDataResource=${args.templateDataResource}&dataResourceName=${args.dataResourceName}&contentPurposeList=${args.contentPurposeList}&roleTypeId=${args.roleTypeId}&dataTemplateTypeId=${args.dataTemplateTypeId}&targetOperationList=${args.targetOperationList}&lastModifiedDate=${args.lastModifiedDate}&skipPermissionCheck=${args.skipPermissionCheck}&characterSetId=${args.characterSetId}&createdDate=${args.createdDate}&statusId=${args.statusId}&localeString=${args.localeString}&`, null, req);
  }
};
export {createDataResourceAndAssocToContent};


const createDataResourceAndText = {
  type: ResponseType,
  description: 'mutation for ofbiz createDataResourceAndText method',
  args:{dataResourceName: {type: GraphQLInt},surveyId: {type: GraphQLString},dataTemplateTypeId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},skipPermissionCheck: {type: GraphQLString},mimeTypeId: {type: GraphQLString},dataCategoryId: {type: GraphQLString},surveyResponseId: {type: GraphQLString},characterSetId: {type: GraphQLString},textData: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString},relatedDetailId: {type: GraphQLString},dataResourceId: {type: GraphQLString},isPublic: {type: GraphQLString},objectInfo: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/createDataResourceAndText?dataResourceName=${args.dataResourceName}&surveyId=${args.surveyId}&contentPurposeList=${args.contentPurposeList}&dataTemplateTypeId=${args.dataTemplateTypeId}&targetOperationList=${args.targetOperationList}&lastModifiedDate=${args.lastModifiedDate}&skipPermissionCheck=${args.skipPermissionCheck}&mimeTypeId=${args.mimeTypeId}&dataCategoryId=${args.dataCategoryId}&surveyResponseId=${args.surveyResponseId}&characterSetId=${args.characterSetId}&textData=${args.textData}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&createdDate=${args.createdDate}&statusId=${args.statusId}&localeString=${args.localeString}&relatedDetailId=${args.relatedDetailId}&dataResourceId=${args.dataResourceId}&isPublic=${args.isPublic}&objectInfo=${args.objectInfo}&dataResourceTypeId=${args.dataResourceTypeId}&createdByUserLogin=${args.createdByUserLogin}&`, null, req);
  }
};
export {createDataResourceAndText};


const createDataResourceMetaData = {
  type: ResponseType,
  description: 'mutation for ofbiz createDataResourceMetaData method',
  args:{metaDataPredicateId: {type: GraphQLString},dataResourceId: {type: GraphQLString},dataSourceId: {type: GraphQLString},metaDataValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/createDataResourceMetaData?metaDataPredicateId=${args.metaDataPredicateId}&dataResourceId=${args.dataResourceId}&dataSourceId=${args.dataSourceId}&metaDataValue=${args.metaDataValue}&`, null, req);
  }
};
export {createDataResourceMetaData};


const createDataResourcePurpose = {
  type: ResponseType,
  description: 'mutation for ofbiz createDataResourcePurpose method',
  args:{contentPurposeTypeId: {type: GraphQLString},dataResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/createDataResourcePurpose?contentPurposeTypeId=${args.contentPurposeTypeId}&dataResourceId=${args.dataResourceId}&`, null, req);
  }
};
export {createDataResourcePurpose};


const createDataTemplateType = {
  type: ResponseType,
  description: 'mutation for ofbiz createDataTemplateType method',
  args:{extension: {type: GraphQLString},dataTemplateTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/createDataTemplateType?extension=${args.extension}&dataTemplateTypeId=${args.dataTemplateTypeId}&description=${args.description}&`, null, req);
  }
};
export {createDataTemplateType};


const createDataText = {
  type: ResponseType,
  description: 'mutation for ofbiz createDataText method',
  args:{surveyId: {type: GraphQLString},mimeTypeId: {type: GraphQLString},dataCategoryId: {type: GraphQLString},surveyResponseId: {type: GraphQLString},textData: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},relatedDetailId: {type: GraphQLString},dataResourceId: {type: GraphQLString},isPublic: {type: GraphQLString},objectInfo: {type: GraphQLString},partyId: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},uploadedFile: {type: GraphQLString},dataResourceName: {type: GraphQLInt},roleTypeId: {type: GraphQLString},dataTemplateTypeId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},skipPermissionCheck: {type: GraphQLString},characterSetId: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/createDataText?surveyId=${args.surveyId}&mimeTypeId=${args.mimeTypeId}&dataCategoryId=${args.dataCategoryId}&surveyResponseId=${args.surveyResponseId}&textData=${args.textData}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&relatedDetailId=${args.relatedDetailId}&dataResourceId=${args.dataResourceId}&isPublic=${args.isPublic}&objectInfo=${args.objectInfo}&partyId=${args.partyId}&dataResourceTypeId=${args.dataResourceTypeId}&createdByUserLogin=${args.createdByUserLogin}&uploadedFile=${args.uploadedFile}&dataResourceName=${args.dataResourceName}&contentPurposeList=${args.contentPurposeList}&roleTypeId=${args.roleTypeId}&dataTemplateTypeId=${args.dataTemplateTypeId}&targetOperationList=${args.targetOperationList}&lastModifiedDate=${args.lastModifiedDate}&skipPermissionCheck=${args.skipPermissionCheck}&characterSetId=${args.characterSetId}&createdDate=${args.createdDate}&statusId=${args.statusId}&localeString=${args.localeString}&`, null, req);
  }
};
export {createDataText};


const createElectronicText = {
  type: ResponseType,
  description: 'mutation for ofbiz createElectronicText method',
  args:{surveyId: {type: GraphQLString},mimeTypeId: {type: GraphQLString},dataCategoryId: {type: GraphQLString},surveyResponseId: {type: GraphQLString},textData: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},relatedDetailId: {type: GraphQLString},dataResourceId: {type: GraphQLString},isPublic: {type: GraphQLString},objectInfo: {type: GraphQLString},partyId: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},uploadedFile: {type: GraphQLString},dataResourceName: {type: GraphQLInt},roleTypeId: {type: GraphQLString},dataTemplateTypeId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},skipPermissionCheck: {type: GraphQLString},characterSetId: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/createElectronicText?surveyId=${args.surveyId}&mimeTypeId=${args.mimeTypeId}&dataCategoryId=${args.dataCategoryId}&surveyResponseId=${args.surveyResponseId}&textData=${args.textData}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&relatedDetailId=${args.relatedDetailId}&dataResourceId=${args.dataResourceId}&isPublic=${args.isPublic}&objectInfo=${args.objectInfo}&partyId=${args.partyId}&dataResourceTypeId=${args.dataResourceTypeId}&createdByUserLogin=${args.createdByUserLogin}&uploadedFile=${args.uploadedFile}&dataResourceName=${args.dataResourceName}&contentPurposeList=${args.contentPurposeList}&roleTypeId=${args.roleTypeId}&dataTemplateTypeId=${args.dataTemplateTypeId}&targetOperationList=${args.targetOperationList}&lastModifiedDate=${args.lastModifiedDate}&skipPermissionCheck=${args.skipPermissionCheck}&characterSetId=${args.characterSetId}&createdDate=${args.createdDate}&statusId=${args.statusId}&localeString=${args.localeString}&`, null, req);
  }
};
export {createElectronicText};


const createElectronicTextForm = {
  type: ResponseType,
  description: 'mutation for ofbiz createElectronicTextForm method',
  args:{surveyId: {type: GraphQLString},mimeTypeId: {type: GraphQLString},dataCategoryId: {type: GraphQLString},surveyResponseId: {type: GraphQLString},textData: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},relatedDetailId: {type: GraphQLString},dataResourceId: {type: GraphQLString},isPublic: {type: GraphQLString},objectInfo: {type: GraphQLString},partyId: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},uploadedFile: {type: GraphQLString},dataResourceName: {type: GraphQLInt},roleTypeId: {type: GraphQLString},dataTemplateTypeId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},skipPermissionCheck: {type: GraphQLString},characterSetId: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/createElectronicTextForm?surveyId=${args.surveyId}&mimeTypeId=${args.mimeTypeId}&dataCategoryId=${args.dataCategoryId}&surveyResponseId=${args.surveyResponseId}&textData=${args.textData}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&relatedDetailId=${args.relatedDetailId}&dataResourceId=${args.dataResourceId}&isPublic=${args.isPublic}&objectInfo=${args.objectInfo}&partyId=${args.partyId}&dataResourceTypeId=${args.dataResourceTypeId}&createdByUserLogin=${args.createdByUserLogin}&uploadedFile=${args.uploadedFile}&dataResourceName=${args.dataResourceName}&contentPurposeList=${args.contentPurposeList}&roleTypeId=${args.roleTypeId}&dataTemplateTypeId=${args.dataTemplateTypeId}&targetOperationList=${args.targetOperationList}&lastModifiedDate=${args.lastModifiedDate}&skipPermissionCheck=${args.skipPermissionCheck}&characterSetId=${args.characterSetId}&createdDate=${args.createdDate}&statusId=${args.statusId}&localeString=${args.localeString}&`, null, req);
  }
};
export {createElectronicTextForm};


const createFile = {
  type: ResponseType,
  description: 'mutation for ofbiz createFile method',
  args:{surveyId: {type: GraphQLString},mimeTypeId: {type: GraphQLString},rootDir: {type: GraphQLString},dataCategoryId: {type: GraphQLString},surveyResponseId: {type: GraphQLString},textData: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},relatedDetailId: {type: GraphQLString},dataResourceId: {type: GraphQLString},isPublic: {type: GraphQLString},objectInfo: {type: GraphQLString},partyId: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},uploadedFile: {type: GraphQLString},dataResource: {type: new GraphQLList(KeyValueInputType)},dataResourceName: {type: GraphQLInt},roleTypeId: {type: GraphQLString},dataTemplateTypeId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},skipPermissionCheck: {type: GraphQLString},characterSetId: {type: GraphQLString},binData: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/createFile?surveyId=${args.surveyId}&mimeTypeId=${args.mimeTypeId}&rootDir=${args.rootDir}&dataCategoryId=${args.dataCategoryId}&surveyResponseId=${args.surveyResponseId}&textData=${args.textData}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&relatedDetailId=${args.relatedDetailId}&dataResourceId=${args.dataResourceId}&isPublic=${args.isPublic}&objectInfo=${args.objectInfo}&partyId=${args.partyId}&dataResourceTypeId=${args.dataResourceTypeId}&createdByUserLogin=${args.createdByUserLogin}&uploadedFile=${args.uploadedFile}&dataResource=${args.dataResource}&dataResourceName=${args.dataResourceName}&contentPurposeList=${args.contentPurposeList}&roleTypeId=${args.roleTypeId}&dataTemplateTypeId=${args.dataTemplateTypeId}&targetOperationList=${args.targetOperationList}&lastModifiedDate=${args.lastModifiedDate}&skipPermissionCheck=${args.skipPermissionCheck}&characterSetId=${args.characterSetId}&binData=${args.binData}&createdDate=${args.createdDate}&statusId=${args.statusId}&localeString=${args.localeString}&`, null, req);
  }
};
export {createFile};


const createImageDataResource = {
  type: ResponseType,
  description: 'mutation for ofbiz createImageDataResource method',
  args:{imageData: {type: GraphQLString},dataResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/createImageDataResource?imageData=${args.imageData}&dataResourceId=${args.dataResourceId}&`, null, req);
  }
};
export {createImageDataResource};


const createOtherDataResource = {
  type: ResponseType,
  description: 'mutation for ofbiz createOtherDataResource method',
  args:{dataResourceContent: {type: GraphQLString},dataResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/createOtherDataResource?dataResourceContent=${args.dataResourceContent}&dataResourceId=${args.dataResourceId}&`, null, req);
  }
};
export {createOtherDataResource};


const createVideoDataResource = {
  type: ResponseType,
  description: 'mutation for ofbiz createVideoDataResource method',
  args:{dataResourceId: {type: GraphQLString},videoData: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/createVideoDataResource?dataResourceId=${args.dataResourceId}&videoData=${args.videoData}&`, null, req);
  }
};
export {createVideoDataResource};


const deleteDataTemplateType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteDataTemplateType method',
  args:{dataTemplateTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/deleteDataTemplateType?dataTemplateTypeId=${args.dataTemplateTypeId}&`, null, req);
  }
};
export {deleteDataTemplateType};


const getElectronicText = {
  type: ResponseType,
  description: 'mutation for ofbiz getElectronicText method',
  args:{contentId: {type: GraphQLString},content: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/getElectronicText?contentId=${args.contentId}&content=${args.content}&`, null, req);
  }
};
export {getElectronicText};


const removeAudioDataResource = {
  type: ResponseType,
  description: 'mutation for ofbiz removeAudioDataResource method',
  args:{dataResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/removeAudioDataResource?dataResourceId=${args.dataResourceId}&`, null, req);
  }
};
export {removeAudioDataResource};


const removeDataResource = {
  type: ResponseType,
  description: 'mutation for ofbiz removeDataResource method',
  args:{dataResourceId: {type: GraphQLString},skipPermissionCheck: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/removeDataResource?dataResourceId=${args.dataResourceId}&contentPurposeList=${args.contentPurposeList}&targetOperationList=${args.targetOperationList}&skipPermissionCheck=${args.skipPermissionCheck}&`, null, req);
  }
};
export {removeDataResource};


const removeDataResourceMetaData = {
  type: ResponseType,
  description: 'mutation for ofbiz removeDataResourceMetaData method',
  args:{metaDataPredicateId: {type: GraphQLString},dataResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/removeDataResourceMetaData?metaDataPredicateId=${args.metaDataPredicateId}&dataResourceId=${args.dataResourceId}&`, null, req);
  }
};
export {removeDataResourceMetaData};


const removeDataResourcePurpose = {
  type: ResponseType,
  description: 'mutation for ofbiz removeDataResourcePurpose method',
  args:{contentPurposeTypeId: {type: GraphQLString},dataResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/removeDataResourcePurpose?contentPurposeTypeId=${args.contentPurposeTypeId}&dataResourceId=${args.dataResourceId}&`, null, req);
  }
};
export {removeDataResourcePurpose};


const removeElectronicText = {
  type: ResponseType,
  description: 'mutation for ofbiz removeElectronicText method',
  args:{dataResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/removeElectronicText?dataResourceId=${args.dataResourceId}&`, null, req);
  }
};
export {removeElectronicText};


const removeImageDataResource = {
  type: ResponseType,
  description: 'mutation for ofbiz removeImageDataResource method',
  args:{dataResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/removeImageDataResource?dataResourceId=${args.dataResourceId}&`, null, req);
  }
};
export {removeImageDataResource};


const removeOtherDataResource = {
  type: ResponseType,
  description: 'mutation for ofbiz removeOtherDataResource method',
  args:{dataResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/removeOtherDataResource?dataResourceId=${args.dataResourceId}&`, null, req);
  }
};
export {removeOtherDataResource};


const removeVideoDataResource = {
  type: ResponseType,
  description: 'mutation for ofbiz removeVideoDataResource method',
  args:{dataResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/removeVideoDataResource?dataResourceId=${args.dataResourceId}&`, null, req);
  }
};
export {removeVideoDataResource};


const updateAudioDataResource = {
  type: ResponseType,
  description: 'mutation for ofbiz updateAudioDataResource method',
  args:{dataResourceId: {type: GraphQLString},audioData: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/updateAudioDataResource?dataResourceId=${args.dataResourceId}&audioData=${args.audioData}&`, null, req);
  }
};
export {updateAudioDataResource};


const updateDataResource = {
  type: ResponseType,
  description: 'mutation for ofbiz updateDataResource method',
  args:{dataResourceId: {type: GraphQLString},dataResourceName: {type: GraphQLInt},surveyId: {type: GraphQLString},dataTemplateTypeId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},mimeTypeId: {type: GraphQLString},dataCategoryId: {type: GraphQLString},surveyResponseId: {type: GraphQLString},characterSetId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString},relatedDetailId: {type: GraphQLString},isPublic: {type: GraphQLString},objectInfo: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/updateDataResource?dataResourceId=${args.dataResourceId}&dataResourceName=${args.dataResourceName}&surveyId=${args.surveyId}&dataTemplateTypeId=${args.dataTemplateTypeId}&lastModifiedDate=${args.lastModifiedDate}&mimeTypeId=${args.mimeTypeId}&dataCategoryId=${args.dataCategoryId}&surveyResponseId=${args.surveyResponseId}&characterSetId=${args.characterSetId}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&createdDate=${args.createdDate}&statusId=${args.statusId}&localeString=${args.localeString}&relatedDetailId=${args.relatedDetailId}&isPublic=${args.isPublic}&objectInfo=${args.objectInfo}&dataResourceTypeId=${args.dataResourceTypeId}&createdByUserLogin=${args.createdByUserLogin}&`, null, req);
  }
};
export {updateDataResource};


const updateDataResourceAndText = {
  type: ResponseType,
  description: 'mutation for ofbiz updateDataResourceAndText method',
  args:{dataResourceName: {type: GraphQLInt},surveyId: {type: GraphQLString},dataTemplateTypeId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},skipPermissionCheck: {type: GraphQLString},mimeTypeId: {type: GraphQLString},dataCategoryId: {type: GraphQLString},surveyResponseId: {type: GraphQLString},characterSetId: {type: GraphQLString},textData: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString},relatedDetailId: {type: GraphQLString},dataResourceId: {type: GraphQLString},isPublic: {type: GraphQLString},objectInfo: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/updateDataResourceAndText?dataResourceName=${args.dataResourceName}&surveyId=${args.surveyId}&contentPurposeList=${args.contentPurposeList}&dataTemplateTypeId=${args.dataTemplateTypeId}&targetOperationList=${args.targetOperationList}&lastModifiedDate=${args.lastModifiedDate}&skipPermissionCheck=${args.skipPermissionCheck}&mimeTypeId=${args.mimeTypeId}&dataCategoryId=${args.dataCategoryId}&surveyResponseId=${args.surveyResponseId}&characterSetId=${args.characterSetId}&textData=${args.textData}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&createdDate=${args.createdDate}&statusId=${args.statusId}&localeString=${args.localeString}&relatedDetailId=${args.relatedDetailId}&dataResourceId=${args.dataResourceId}&isPublic=${args.isPublic}&objectInfo=${args.objectInfo}&dataResourceTypeId=${args.dataResourceTypeId}&createdByUserLogin=${args.createdByUserLogin}&`, null, req);
  }
};
export {updateDataResourceAndText};


const updateDataResourceMetaData = {
  type: ResponseType,
  description: 'mutation for ofbiz updateDataResourceMetaData method',
  args:{metaDataPredicateId: {type: GraphQLString},dataResourceId: {type: GraphQLString},dataSourceId: {type: GraphQLString},metaDataValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/updateDataResourceMetaData?metaDataPredicateId=${args.metaDataPredicateId}&dataResourceId=${args.dataResourceId}&dataSourceId=${args.dataSourceId}&metaDataValue=${args.metaDataValue}&`, null, req);
  }
};
export {updateDataResourceMetaData};


const updateDataResourcePurpose = {
  type: ResponseType,
  description: 'mutation for ofbiz updateDataResourcePurpose method',
  args:{contentPurposeTypeId: {type: GraphQLString},dataResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/updateDataResourcePurpose?contentPurposeTypeId=${args.contentPurposeTypeId}&dataResourceId=${args.dataResourceId}&`, null, req);
  }
};
export {updateDataResourcePurpose};


const updateDataTemplateType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateDataTemplateType method',
  args:{dataTemplateTypeId: {type: GraphQLString},extension: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/updateDataTemplateType?dataTemplateTypeId=${args.dataTemplateTypeId}&extension=${args.extension}&description=${args.description}&`, null, req);
  }
};
export {updateDataTemplateType};


const updateDataText = {
  type: ResponseType,
  description: 'mutation for ofbiz updateDataText method',
  args:{dataResourceId: {type: GraphQLString},dataResourceName: {type: GraphQLInt},surveyId: {type: GraphQLString},dataTemplateTypeId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},contentId: {type: GraphQLString},mimeTypeId: {type: GraphQLString},dataCategoryId: {type: GraphQLString},surveyResponseId: {type: GraphQLString},characterSetId: {type: GraphQLString},textData: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString},relatedDetailId: {type: GraphQLString},isPublic: {type: GraphQLString},objectInfo: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/updateDataText?dataResourceId=${args.dataResourceId}&dataResourceName=${args.dataResourceName}&surveyId=${args.surveyId}&dataTemplateTypeId=${args.dataTemplateTypeId}&lastModifiedDate=${args.lastModifiedDate}&contentId=${args.contentId}&mimeTypeId=${args.mimeTypeId}&dataCategoryId=${args.dataCategoryId}&surveyResponseId=${args.surveyResponseId}&characterSetId=${args.characterSetId}&textData=${args.textData}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&createdDate=${args.createdDate}&statusId=${args.statusId}&localeString=${args.localeString}&relatedDetailId=${args.relatedDetailId}&isPublic=${args.isPublic}&objectInfo=${args.objectInfo}&dataResourceTypeId=${args.dataResourceTypeId}&createdByUserLogin=${args.createdByUserLogin}&`, null, req);
  }
};
export {updateDataText};


const updateElectronicText = {
  type: ResponseType,
  description: 'mutation for ofbiz updateElectronicText method',
  args:{dataResourceId: {type: GraphQLString},textData: {type: GraphQLString},contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/updateElectronicText?dataResourceId=${args.dataResourceId}&textData=${args.textData}&contentId=${args.contentId}&`, null, req);
  }
};
export {updateElectronicText};


const updateElectronicTextForm = {
  type: ResponseType,
  description: 'mutation for ofbiz updateElectronicTextForm method',
  args:{dataResourceId: {type: GraphQLString},textData: {type: GraphQLString},contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/updateElectronicTextForm?dataResourceId=${args.dataResourceId}&textData=${args.textData}&contentId=${args.contentId}&`, null, req);
  }
};
export {updateElectronicTextForm};


const updateFile = {
  type: ResponseType,
  description: 'mutation for ofbiz updateFile method',
  args:{textData: {type: GraphQLString},rootDir: {type: GraphQLString},objectInfo: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},dataResource: {type: new GraphQLList(KeyValueInputType)},binData: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/updateFile?textData=${args.textData}&rootDir=${args.rootDir}&objectInfo=${args.objectInfo}&dataResourceTypeId=${args.dataResourceTypeId}&dataResource=${args.dataResource}&binData=${args.binData}&`, null, req);
  }
};
export {updateFile};


const updateImageDataResource = {
  type: ResponseType,
  description: 'mutation for ofbiz updateImageDataResource method',
  args:{dataResourceId: {type: GraphQLString},imageData: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/updateImageDataResource?dataResourceId=${args.dataResourceId}&imageData=${args.imageData}&`, null, req);
  }
};
export {updateImageDataResource};


const updateOtherDataResource = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOtherDataResource method',
  args:{dataResourceId: {type: GraphQLString},dataResourceContent: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/updateOtherDataResource?dataResourceId=${args.dataResourceId}&dataResourceContent=${args.dataResourceContent}&`, null, req);
  }
};
export {updateOtherDataResource};


const updateVideoDataResource = {
  type: ResponseType,
  description: 'mutation for ofbiz updateVideoDataResource method',
  args:{dataResourceId: {type: GraphQLString},videoData: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentData/updateVideoDataResource?dataResourceId=${args.dataResourceId}&videoData=${args.videoData}&`, null, req);
  }
};
export {updateVideoDataResource};
