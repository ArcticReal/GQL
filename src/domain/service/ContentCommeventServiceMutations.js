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
import {KeyValueType} from '../../framework/helpTypes.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';


const createCommContentAssocType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createCommContentAssocType method',
  args:{commContentAssocTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentCommevent/createCommContentAssocType?commContentAssocTypeId=${args.commContentAssocTypeId}description=${args.description}`, null, req);
  }
};
export {createCommContentAssocType};


const createCommContentDataResource = {
  type: GraphQLString,
  description: 'mutation for ofbiz createCommContentDataResource method',
  args:{contentId: {type: GraphQLString},communicationEventId: {type: GraphQLString},caFromDate: {type: GraphQLString},surveyId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},caContentId: {type: GraphQLString},ownerContentId: {type: GraphQLString},imageData: {type: GraphQLString},upperCoordinate: {type: GraphQLInt},leftCoordinate: {type: GraphQLInt},mimeTypeId: {type: GraphQLString},rootDir: {type: GraphQLString},dataCategoryId: {type: GraphQLString},surveyResponseId: {type: GraphQLString},textData: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},contentAssocPredicateId: {type: GraphQLString},relatedDetailId: {type: GraphQLString},isPublic: {type: GraphQLString},objectInfo: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},deactivateExisting: {type: GraphQLString},dataResourceName: {type: GraphQLInt},targetOperationString: {type: GraphQLString},caContentAssocTypeId: {type: GraphQLString},caSequenceNum: {type: GraphQLInt},dataTemplateTypeId: {type: GraphQLString},forceElectronicText: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},contentPurposeString: {type: GraphQLString},mapKey: {type: GraphQLString},DataResource: {type: GraphQLString},characterSetId: {type: GraphQLString},_imageData_fileName: {type: GraphQLString},thruDate: {type: GraphQLString},userLogin: {type: new GraphQLList(KeyValueType)},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},displayFailCond: {type: GraphQLBoolean},localeString: {type: GraphQLString},Content: {type: GraphQLString},_imageData_contentType: {type: GraphQLString},caContentIdTo: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentCommevent/createCommContentDataResource?contentId=${args.contentId}communicationEventId=${args.communicationEventId}caFromDate=${args.caFromDate}surveyId=${args.surveyId}sequenceNum=${args.sequenceNum}caContentId=${args.caContentId}ownerContentId=${args.ownerContentId}imageData=${args.imageData}upperCoordinate=${args.upperCoordinate}leftCoordinate=${args.leftCoordinate}mimeTypeId=${args.mimeTypeId}rootDir=${args.rootDir}roleTypeList=${args.roleTypeList}dataCategoryId=${args.dataCategoryId}surveyResponseId=${args.surveyResponseId}textData=${args.textData}dataSourceId=${args.dataSourceId}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}contentAssocPredicateId=${args.contentAssocPredicateId}relatedDetailId=${args.relatedDetailId}isPublic=${args.isPublic}objectInfo=${args.objectInfo}dataResourceTypeId=${args.dataResourceTypeId}createdByUserLogin=${args.createdByUserLogin}deactivateExisting=${args.deactivateExisting}dataResourceName=${args.dataResourceName}targetOperationString=${args.targetOperationString}caContentAssocTypeId=${args.caContentAssocTypeId}caSequenceNum=${args.caSequenceNum}contentPurposeList=${args.contentPurposeList}dataTemplateTypeId=${args.dataTemplateTypeId}targetOperationList=${args.targetOperationList}forceElectronicText=${args.forceElectronicText}lastModifiedDate=${args.lastModifiedDate}contentPurposeString=${args.contentPurposeString}mapKey=${args.mapKey}DataResource=${args.DataResource}characterSetId=${args.characterSetId}_imageData_fileName=${args._imageData_fileName}thruDate=${args.thruDate}userLogin=${args.userLogin}createdDate=${args.createdDate}statusId=${args.statusId}displayFailCond=${args.displayFailCond}localeString=${args.localeString}Content=${args.Content}_imageData_contentType=${args._imageData_contentType}caContentIdTo=${args.caContentIdTo}`, null, req);
  }
};
export {createCommContentDataResource};


const createCommEventContentAssoc = {
  type: GraphQLString,
  description: 'mutation for ofbiz createCommEventContentAssoc method',
  args:{contentId: {type: GraphQLString},communicationEventId: {type: GraphQLString},fromDate: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentCommevent/createCommEventContentAssoc?contentId=${args.contentId}communicationEventId=${args.communicationEventId}fromDate=${args.fromDate}sequenceNum=${args.sequenceNum}thruDate=${args.thruDate}`, null, req);
  }
};
export {createCommEventContentAssoc};


const deleteCommContentAssocType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCommContentAssocType method',
  args:{commContentAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentCommevent/deleteCommContentAssocType?commContentAssocTypeId=${args.commContentAssocTypeId}`, null, req);
  }
};
export {deleteCommContentAssocType};


const removeCommEventContentAssoc = {
  type: GraphQLString,
  description: 'mutation for ofbiz removeCommEventContentAssoc method',
  args:{fromDate: {type: GraphQLString},contentId: {type: GraphQLString},communicationEventId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentCommevent/removeCommEventContentAssoc?fromDate=${args.fromDate}contentId=${args.contentId}communicationEventId=${args.communicationEventId}`, null, req);
  }
};
export {removeCommEventContentAssoc};


const updateCommContentAssocType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCommContentAssocType method',
  args:{commContentAssocTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentCommevent/updateCommContentAssocType?commContentAssocTypeId=${args.commContentAssocTypeId}description=${args.description}`, null, req);
  }
};
export {updateCommContentAssocType};


const updateCommContentDataResource = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCommContentDataResource method',
  args:{fromDate: {type: GraphQLString},communicationEventId: {type: GraphQLString},caFromDate: {type: GraphQLString},surveyId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},caContentId: {type: GraphQLString},ownerContentId: {type: GraphQLString},imageData: {type: GraphQLString},upperCoordinate: {type: GraphQLInt},leftCoordinate: {type: GraphQLInt},mimeTypeId: {type: GraphQLString},rootDir: {type: GraphQLString},dataCategoryId: {type: GraphQLString},surveyResponseId: {type: GraphQLString},textData: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},contentAssocPredicateId: {type: GraphQLString},relatedDetailId: {type: GraphQLString},isPublic: {type: GraphQLString},objectInfo: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},deactivateExisting: {type: GraphQLString},dataResourceName: {type: GraphQLInt},targetOperationString: {type: GraphQLString},caContentAssocTypeId: {type: GraphQLString},caSequenceNum: {type: GraphQLInt},dataTemplateTypeId: {type: GraphQLString},forceElectronicText: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},contentPurposeString: {type: GraphQLString},mapKey: {type: GraphQLString},DataResource: {type: GraphQLString},characterSetId: {type: GraphQLString},_imageData_fileName: {type: GraphQLString},thruDate: {type: GraphQLString},userLogin: {type: new GraphQLList(KeyValueType)},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},displayFailCond: {type: GraphQLBoolean},localeString: {type: GraphQLString},Content: {type: GraphQLString},_imageData_contentType: {type: GraphQLString},caContentIdTo: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentCommevent/updateCommContentDataResource?fromDate=${args.fromDate}communicationEventId=${args.communicationEventId}caFromDate=${args.caFromDate}surveyId=${args.surveyId}sequenceNum=${args.sequenceNum}caContentId=${args.caContentId}ownerContentId=${args.ownerContentId}imageData=${args.imageData}upperCoordinate=${args.upperCoordinate}leftCoordinate=${args.leftCoordinate}mimeTypeId=${args.mimeTypeId}rootDir=${args.rootDir}roleTypeList=${args.roleTypeList}dataCategoryId=${args.dataCategoryId}surveyResponseId=${args.surveyResponseId}textData=${args.textData}dataSourceId=${args.dataSourceId}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}contentAssocPredicateId=${args.contentAssocPredicateId}relatedDetailId=${args.relatedDetailId}isPublic=${args.isPublic}objectInfo=${args.objectInfo}dataResourceTypeId=${args.dataResourceTypeId}createdByUserLogin=${args.createdByUserLogin}deactivateExisting=${args.deactivateExisting}dataResourceName=${args.dataResourceName}targetOperationString=${args.targetOperationString}caContentAssocTypeId=${args.caContentAssocTypeId}caSequenceNum=${args.caSequenceNum}contentPurposeList=${args.contentPurposeList}dataTemplateTypeId=${args.dataTemplateTypeId}targetOperationList=${args.targetOperationList}forceElectronicText=${args.forceElectronicText}lastModifiedDate=${args.lastModifiedDate}contentPurposeString=${args.contentPurposeString}mapKey=${args.mapKey}DataResource=${args.DataResource}characterSetId=${args.characterSetId}_imageData_fileName=${args._imageData_fileName}thruDate=${args.thruDate}userLogin=${args.userLogin}createdDate=${args.createdDate}statusId=${args.statusId}displayFailCond=${args.displayFailCond}localeString=${args.localeString}Content=${args.Content}_imageData_contentType=${args._imageData_contentType}caContentIdTo=${args.caContentIdTo}`, null, req);
  }
};
export {updateCommContentDataResource};


const updateCommEventContentAssoc = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCommEventContentAssoc method',
  args:{fromDate: {type: GraphQLString},contentId: {type: GraphQLString},communicationEventId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentCommevent/updateCommEventContentAssoc?fromDate=${args.fromDate}contentId=${args.contentId}communicationEventId=${args.communicationEventId}sequenceNum=${args.sequenceNum}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateCommEventContentAssoc};
