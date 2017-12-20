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


const assocContent = {
  type: ResopnseType,
  description: 'mutation for ofbiz assocContent method',
  args:{contentAssocTypeId: {type: GraphQLString},userLogin: {type: new GraphQLList(KeyValueInputType)},fromDate: {type: GraphQLString},statusId: {type: GraphQLString},contentIdTo: {type: GraphQLString},contentIdFrom: {type: GraphQLString},entityOperation: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/assocContent?contentAssocTypeId=${args.contentAssocTypeId}userLogin=${args.userLogin}fromDate=${args.fromDate}contentPurposeList=${args.contentPurposeList}targetOperationList=${args.targetOperationList}statusId=${args.statusId}contentIdTo=${args.contentIdTo}contentIdFrom=${args.contentIdFrom}roleTypeList=${args.roleTypeList}entityOperation=${args.entityOperation}thruDate=${args.thruDate}`, null, req);
  }
};
export {assocContent};


const attachUploadToDataResource = {
  type: ResopnseType,
  description: 'mutation for ofbiz attachUploadToDataResource method',
  args:{dataResourceId: {type: GraphQLString},_uploadedFile_contentType: {type: GraphQLString},mimeTypeId: {type: GraphQLString},rootDir: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},uploadedFile: {type: GraphQLString},_uploadedFile_fileName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/attachUploadToDataResource?dataResourceId=${args.dataResourceId}_uploadedFile_contentType=${args._uploadedFile_contentType}mimeTypeId=${args.mimeTypeId}rootDir=${args.rootDir}dataResourceTypeId=${args.dataResourceTypeId}uploadedFile=${args.uploadedFile}_uploadedFile_fileName=${args._uploadedFile_fileName}`, null, req);
  }
};
export {attachUploadToDataResource};


const checkAssocPermission = {
  type: ResopnseType,
  description: 'mutation for ofbiz checkAssocPermission method',
  args:{contentIdTo: {type: GraphQLString},thruDate: {type: GraphQLString},userLogin: {type: new GraphQLList(KeyValueInputType)},fromDate: {type: GraphQLString},privilegeEnumId: {type: GraphQLString},contentAssocPredicateId: {type: GraphQLString},statusId: {type: GraphQLString},displayFailCond: {type: GraphQLBoolean},contentAssocTypeId: {type: GraphQLString},contentIdFrom: {type: GraphQLString},entityOperation: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/checkAssocPermission?contentPurposeList=${args.contentPurposeList}targetOperationList=${args.targetOperationList}contentIdTo=${args.contentIdTo}roleTypeList=${args.roleTypeList}thruDate=${args.thruDate}userLogin=${args.userLogin}fromDate=${args.fromDate}privilegeEnumId=${args.privilegeEnumId}contentAssocPredicateId=${args.contentAssocPredicateId}statusId=${args.statusId}displayFailCond=${args.displayFailCond}contentAssocTypeId=${args.contentAssocTypeId}contentIdFrom=${args.contentIdFrom}entityOperation=${args.entityOperation}`, null, req);
  }
};
export {checkAssocPermission};


const checkContentPermission = {
  type: ResopnseType,
  description: 'mutation for ofbiz checkContentPermission method',
  args:{quickCheckContentId: {type: GraphQLString},displayPassCond: {type: GraphQLBoolean},targetOperationString: {type: GraphQLString},roleTypeString: {type: GraphQLString},contentPurposeString: {type: GraphQLString},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},userLoginId: {type: GraphQLString},privilegeEnumId: {type: GraphQLString},currentContent: {type: new GraphQLList(KeyValueInputType)},statusId: {type: GraphQLString},displayFailCond: {type: GraphQLBoolean},entityOperation: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/checkContentPermission?quickCheckContentId=${args.quickCheckContentId}displayPassCond=${args.displayPassCond}targetOperationString=${args.targetOperationString}contentPurposeList=${args.contentPurposeList}targetOperationList=${args.targetOperationList}roleTypeString=${args.roleTypeString}contentPurposeString=${args.contentPurposeString}roleTypeList=${args.roleTypeList}thruDate=${args.thruDate}fromDate=${args.fromDate}userLoginId=${args.userLoginId}privilegeEnumId=${args.privilegeEnumId}currentContent=${args.currentContent}statusId=${args.statusId}displayFailCond=${args.displayFailCond}entityOperation=${args.entityOperation}partyId=${args.partyId}`, null, req);
  }
};
export {checkContentPermission};


const copyContentAndElectronicTextandAssoc = {
  type: ResopnseType,
  description: 'mutation for ofbiz copyContentAndElectronicTextandAssoc method',
  args:{contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/copyContentAndElectronicTextandAssoc?contentId=${args.contentId}`, null, req);
  }
};
export {copyContentAndElectronicTextandAssoc};


const createContent = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContent method',
  args:{sequenceNum: {type: GraphQLInt},ownerContentId: {type: GraphQLString},contentIdTo: {type: GraphQLString},contentTypeId: {type: GraphQLString},contentId: {type: GraphQLString},description: {type: GraphQLString},mimeTypeId: {type: GraphQLString},childLeafCount: {type: GraphQLInt},contentPurposeTypeId: {type: GraphQLString},privilegeEnumId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},contentAssocTypeId: {type: GraphQLString},dataResourceId: {type: GraphQLString},partyId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},targetOperationString: {type: GraphQLString},roleTypeId: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},contentPurposeString: {type: GraphQLString},skipPermissionCheck: {type: GraphQLString},mapKey: {type: GraphQLString},serviceName: {type: GraphQLString},customMethodId: {type: GraphQLString},characterSetId: {type: GraphQLString},contentName: {type: GraphQLInt},fromDate: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},displayFailCond: {type: GraphQLBoolean},localeString: {type: GraphQLString},contentIdFrom: {type: GraphQLString},decoratorContentId: {type: GraphQLString},childBranchCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/createContent?sequenceNum=${args.sequenceNum}ownerContentId=${args.ownerContentId}contentIdTo=${args.contentIdTo}contentTypeId=${args.contentTypeId}contentId=${args.contentId}description=${args.description}mimeTypeId=${args.mimeTypeId}roleTypeList=${args.roleTypeList}childLeafCount=${args.childLeafCount}contentPurposeTypeId=${args.contentPurposeTypeId}privilegeEnumId=${args.privilegeEnumId}dataSourceId=${args.dataSourceId}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}contentAssocTypeId=${args.contentAssocTypeId}dataResourceId=${args.dataResourceId}partyId=${args.partyId}createdByUserLogin=${args.createdByUserLogin}targetOperationString=${args.targetOperationString}contentPurposeList=${args.contentPurposeList}roleTypeId=${args.roleTypeId}targetOperationList=${args.targetOperationList}templateDataResourceId=${args.templateDataResourceId}lastModifiedDate=${args.lastModifiedDate}instanceOfContentId=${args.instanceOfContentId}contentPurposeString=${args.contentPurposeString}skipPermissionCheck=${args.skipPermissionCheck}mapKey=${args.mapKey}serviceName=${args.serviceName}customMethodId=${args.customMethodId}characterSetId=${args.characterSetId}contentName=${args.contentName}fromDate=${args.fromDate}createdDate=${args.createdDate}statusId=${args.statusId}displayFailCond=${args.displayFailCond}localeString=${args.localeString}contentIdFrom=${args.contentIdFrom}decoratorContentId=${args.decoratorContentId}childBranchCount=${args.childBranchCount}`, null, req);
  }
};
export {createContent};


const createContentApproval = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContentApproval method',
  args:{contentApprovalId: {type: GraphQLString},roleTypeId: {type: GraphQLString},approvalDate: {type: GraphQLString},comments: {type: GraphQLString},sequenceNum: {type: GraphQLInt},contentId: {type: GraphQLString},contentRevisionSeqId: {type: GraphQLString},partyId: {type: GraphQLString},approvalStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/createContentApproval?contentApprovalId=${args.contentApprovalId}roleTypeId=${args.roleTypeId}approvalDate=${args.approvalDate}comments=${args.comments}sequenceNum=${args.sequenceNum}contentId=${args.contentId}contentRevisionSeqId=${args.contentRevisionSeqId}partyId=${args.partyId}approvalStatusId=${args.approvalStatusId}`, null, req);
  }
};
export {createContentApproval};


const createContentAssoc = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContentAssoc method',
  args:{contentAssocTypeId: {type: GraphQLString},contentIdTo: {type: GraphQLString},contentId: {type: GraphQLString},targetOperationString: {type: GraphQLString},sequenceNum: {type: GraphQLInt},lastModifiedDate: {type: GraphQLString},contentPurposeString: {type: GraphQLString},skipPermissionCheck: {type: GraphQLString},upperCoordinate: {type: GraphQLInt},leftCoordinate: {type: GraphQLInt},mapKey: {type: GraphQLString},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},contentAssocPredicateId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},createdDate: {type: GraphQLString},displayFailCond: {type: GraphQLBoolean},contentIdFrom: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},deactivateExisting: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/createContentAssoc?contentAssocTypeId=${args.contentAssocTypeId}contentIdTo=${args.contentIdTo}contentId=${args.contentId}targetOperationString=${args.targetOperationString}contentPurposeList=${args.contentPurposeList}targetOperationList=${args.targetOperationList}sequenceNum=${args.sequenceNum}lastModifiedDate=${args.lastModifiedDate}contentPurposeString=${args.contentPurposeString}skipPermissionCheck=${args.skipPermissionCheck}upperCoordinate=${args.upperCoordinate}leftCoordinate=${args.leftCoordinate}mapKey=${args.mapKey}roleTypeList=${args.roleTypeList}thruDate=${args.thruDate}fromDate=${args.fromDate}contentAssocPredicateId=${args.contentAssocPredicateId}dataSourceId=${args.dataSourceId}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}createdDate=${args.createdDate}displayFailCond=${args.displayFailCond}contentIdFrom=${args.contentIdFrom}createdByUserLogin=${args.createdByUserLogin}deactivateExisting=${args.deactivateExisting}`, null, req);
  }
};
export {createContentAssoc};


const createContentAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContentAttribute method',
  args:{contentId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/createContentAttribute?contentId=${args.contentId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {createContentAttribute};


const createContentFromDataResource = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContentFromDataResource method',
  args:{sequenceNum: {type: GraphQLInt},ownerContentId: {type: GraphQLString},contentIdTo: {type: GraphQLString},contentTypeId: {type: GraphQLString},contentId: {type: GraphQLString},description: {type: GraphQLString},mimeTypeId: {type: GraphQLString},childLeafCount: {type: GraphQLInt},contentPurposeTypeId: {type: GraphQLString},privilegeEnumId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},contentAssocTypeId: {type: GraphQLString},dataResourceId: {type: GraphQLString},partyId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},uploadedFile: {type: GraphQLString},targetOperationString: {type: GraphQLString},roleTypeId: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},contentPurposeString: {type: GraphQLString},skipPermissionCheck: {type: GraphQLString},mapKey: {type: GraphQLString},serviceName: {type: GraphQLString},customMethodId: {type: GraphQLString},characterSetId: {type: GraphQLString},contentName: {type: GraphQLInt},fromDate: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},displayFailCond: {type: GraphQLBoolean},localeString: {type: GraphQLString},contentIdFrom: {type: GraphQLString},decoratorContentId: {type: GraphQLString},childBranchCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/createContentFromDataResource?sequenceNum=${args.sequenceNum}ownerContentId=${args.ownerContentId}contentIdTo=${args.contentIdTo}contentTypeId=${args.contentTypeId}contentId=${args.contentId}description=${args.description}mimeTypeId=${args.mimeTypeId}roleTypeList=${args.roleTypeList}childLeafCount=${args.childLeafCount}contentPurposeTypeId=${args.contentPurposeTypeId}privilegeEnumId=${args.privilegeEnumId}dataSourceId=${args.dataSourceId}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}contentAssocTypeId=${args.contentAssocTypeId}dataResourceId=${args.dataResourceId}partyId=${args.partyId}createdByUserLogin=${args.createdByUserLogin}uploadedFile=${args.uploadedFile}targetOperationString=${args.targetOperationString}contentPurposeList=${args.contentPurposeList}roleTypeId=${args.roleTypeId}targetOperationList=${args.targetOperationList}templateDataResourceId=${args.templateDataResourceId}lastModifiedDate=${args.lastModifiedDate}instanceOfContentId=${args.instanceOfContentId}contentPurposeString=${args.contentPurposeString}skipPermissionCheck=${args.skipPermissionCheck}mapKey=${args.mapKey}serviceName=${args.serviceName}customMethodId=${args.customMethodId}characterSetId=${args.characterSetId}contentName=${args.contentName}fromDate=${args.fromDate}createdDate=${args.createdDate}statusId=${args.statusId}displayFailCond=${args.displayFailCond}localeString=${args.localeString}contentIdFrom=${args.contentIdFrom}decoratorContentId=${args.decoratorContentId}childBranchCount=${args.childBranchCount}`, null, req);
  }
};
export {createContentFromDataResource};


const createContentFromUploadedFile = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContentFromUploadedFile method',
  args:{surveyId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},ownerContentId: {type: GraphQLString},mimeTypeId: {type: GraphQLString},rootDir: {type: GraphQLString},dataCategoryId: {type: GraphQLString},surveyResponseId: {type: GraphQLString},privilegeEnumId: {type: GraphQLString},contentAssocTypeId: {type: GraphQLString},dataResourceId: {type: GraphQLString},objectInfo: {type: GraphQLString},partyId: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},dataResourceName: {type: GraphQLInt},targetOperationString: {type: GraphQLString},skipPermissionCheck: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},contentPurposeString: {type: GraphQLString},fromDate: {type: GraphQLString},statusId: {type: GraphQLString},displayFailCond: {type: GraphQLBoolean},contentIdFrom: {type: GraphQLString},_uploadedFile_fileName: {type: GraphQLString},childBranchCount: {type: GraphQLInt},contentIdTo: {type: GraphQLString},contentTypeId: {type: GraphQLString},contentId: {type: GraphQLString},description: {type: GraphQLString},childLeafCount: {type: GraphQLInt},contentPurposeTypeId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},_uploadedFile_contentType: {type: GraphQLString},relatedDetailId: {type: GraphQLString},isPublic: {type: GraphQLString},uploadedFile: {type: GraphQLString},roleTypeId: {type: GraphQLString},dataTemplateTypeId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},mapKey: {type: GraphQLString},serviceName: {type: GraphQLString},characterSetId: {type: GraphQLString},customMethodId: {type: GraphQLString},contentName: {type: GraphQLInt},createdDate: {type: GraphQLString},localeString: {type: GraphQLString},decoratorContentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/createContentFromUploadedFile?surveyId=${args.surveyId}sequenceNum=${args.sequenceNum}ownerContentId=${args.ownerContentId}mimeTypeId=${args.mimeTypeId}rootDir=${args.rootDir}dataCategoryId=${args.dataCategoryId}surveyResponseId=${args.surveyResponseId}privilegeEnumId=${args.privilegeEnumId}contentAssocTypeId=${args.contentAssocTypeId}dataResourceId=${args.dataResourceId}objectInfo=${args.objectInfo}partyId=${args.partyId}dataResourceTypeId=${args.dataResourceTypeId}createdByUserLogin=${args.createdByUserLogin}dataResourceName=${args.dataResourceName}targetOperationString=${args.targetOperationString}skipPermissionCheck=${args.skipPermissionCheck}instanceOfContentId=${args.instanceOfContentId}contentPurposeString=${args.contentPurposeString}fromDate=${args.fromDate}statusId=${args.statusId}displayFailCond=${args.displayFailCond}contentIdFrom=${args.contentIdFrom}_uploadedFile_fileName=${args._uploadedFile_fileName}childBranchCount=${args.childBranchCount}contentIdTo=${args.contentIdTo}contentTypeId=${args.contentTypeId}contentId=${args.contentId}description=${args.description}roleTypeList=${args.roleTypeList}childLeafCount=${args.childLeafCount}contentPurposeTypeId=${args.contentPurposeTypeId}dataSourceId=${args.dataSourceId}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}_uploadedFile_contentType=${args._uploadedFile_contentType}relatedDetailId=${args.relatedDetailId}isPublic=${args.isPublic}uploadedFile=${args.uploadedFile}contentPurposeList=${args.contentPurposeList}roleTypeId=${args.roleTypeId}dataTemplateTypeId=${args.dataTemplateTypeId}targetOperationList=${args.targetOperationList}lastModifiedDate=${args.lastModifiedDate}templateDataResourceId=${args.templateDataResourceId}mapKey=${args.mapKey}serviceName=${args.serviceName}characterSetId=${args.characterSetId}customMethodId=${args.customMethodId}contentName=${args.contentName}createdDate=${args.createdDate}localeString=${args.localeString}decoratorContentId=${args.decoratorContentId}`, null, req);
  }
};
export {createContentFromUploadedFile};


const createContentKeyword = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContentKeyword method',
  args:{contentId: {type: GraphQLString},keyword: {type: GraphQLString},relevancyWeight: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/createContentKeyword?contentId=${args.contentId}keyword=${args.keyword}relevancyWeight=${args.relevancyWeight}`, null, req);
  }
};
export {createContentKeyword};


const createContentMetaData = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContentMetaData method',
  args:{metaDataPredicateId: {type: GraphQLString},contentId: {type: GraphQLString},dataSourceId: {type: GraphQLString},metaDataValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/createContentMetaData?metaDataPredicateId=${args.metaDataPredicateId}contentId=${args.contentId}dataSourceId=${args.dataSourceId}metaDataValue=${args.metaDataValue}`, null, req);
  }
};
export {createContentMetaData};


const createContentOperation = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContentOperation method',
  args:{contentOperationId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/createContentOperation?contentOperationId=${args.contentOperationId}description=${args.description}`, null, req);
  }
};
export {createContentOperation};


const createContentPurpose = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContentPurpose method',
  args:{contentPurposeTypeId: {type: GraphQLString},contentId: {type: GraphQLString},sequenceNum: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/createContentPurpose?contentPurposeTypeId=${args.contentPurposeTypeId}contentId=${args.contentId}sequenceNum=${args.sequenceNum}`, null, req);
  }
};
export {createContentPurpose};


const createContentPurposeOperation = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContentPurposeOperation method',
  args:{contentPurposeTypeId: {type: GraphQLString},privilegeEnumId: {type: GraphQLString},roleTypeId: {type: GraphQLString},statusId: {type: GraphQLString},contentOperationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/createContentPurposeOperation?contentPurposeTypeId=${args.contentPurposeTypeId}privilegeEnumId=${args.privilegeEnumId}roleTypeId=${args.roleTypeId}statusId=${args.statusId}contentOperationId=${args.contentOperationId}`, null, req);
  }
};
export {createContentPurposeOperation};


const createContentRevision = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContentRevision method',
  args:{comments: {type: GraphQLString},contentId: {type: GraphQLString},contentRevisionSeqId: {type: GraphQLString},committedByPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/createContentRevision?comments=${args.comments}contentId=${args.contentId}contentRevisionSeqId=${args.contentRevisionSeqId}committedByPartyId=${args.committedByPartyId}`, null, req);
  }
};
export {createContentRevision};


const createContentRevisionItem = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContentRevisionItem method',
  args:{contentId: {type: GraphQLString},contentRevisionSeqId: {type: GraphQLString},itemContentId: {type: GraphQLString},oldDataResourceId: {type: GraphQLString},newDataResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/createContentRevisionItem?contentId=${args.contentId}contentRevisionSeqId=${args.contentRevisionSeqId}itemContentId=${args.itemContentId}oldDataResourceId=${args.oldDataResourceId}newDataResourceId=${args.newDataResourceId}`, null, req);
  }
};
export {createContentRevisionItem};


const createContentRole = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContentRole method',
  args:{roleTypeId: {type: GraphQLString},contentId: {type: GraphQLString},partyId: {type: GraphQLString},fromDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/createContentRole?roleTypeId=${args.roleTypeId}contentId=${args.contentId}partyId=${args.partyId}fromDate=${args.fromDate}thruDate=${args.thruDate}`, null, req);
  }
};
export {createContentRole};


const createMissingContentAltUrls = {
  type: ResopnseType,
  description: 'mutation for ofbiz createMissingContentAltUrls method',
  args:{prodCatalogId: {type: GraphQLString},webSiteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/createMissingContentAltUrls?prodCatalogId=${args.prodCatalogId}webSiteId=${args.webSiteId}`, null, req);
  }
};
export {createMissingContentAltUrls};


const createTextAndUploadedContent = {
  type: ResopnseType,
  description: 'mutation for ofbiz createTextAndUploadedContent method',
  args:{surveyId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},ownerContentId: {type: GraphQLString},mimeTypeId: {type: GraphQLString},rootDir: {type: GraphQLString},dataCategoryId: {type: GraphQLString},surveyResponseId: {type: GraphQLString},privilegeEnumId: {type: GraphQLString},contentAssocTypeId: {type: GraphQLString},dataResourceId: {type: GraphQLString},objectInfo: {type: GraphQLString},partyId: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},dataResourceName: {type: GraphQLInt},targetOperationString: {type: GraphQLString},skipPermissionCheck: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},contentPurposeString: {type: GraphQLString},fromDate: {type: GraphQLString},statusId: {type: GraphQLString},displayFailCond: {type: GraphQLBoolean},contentIdFrom: {type: GraphQLString},childBranchCount: {type: GraphQLInt},_uploadedFile_fileName: {type: GraphQLString},contentIdTo: {type: GraphQLString},contentTypeId: {type: GraphQLString},contentId: {type: GraphQLString},description: {type: GraphQLString},childLeafCount: {type: GraphQLInt},contentPurposeTypeId: {type: GraphQLString},textData: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},_uploadedFile_contentType: {type: GraphQLString},relatedDetailId: {type: GraphQLString},isPublic: {type: GraphQLString},uploadedFile: {type: GraphQLString},roleTypeId: {type: GraphQLString},dataTemplateTypeId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},mapKey: {type: GraphQLString},serviceName: {type: GraphQLString},characterSetId: {type: GraphQLString},customMethodId: {type: GraphQLString},contentName: {type: GraphQLInt},createdDate: {type: GraphQLString},localeString: {type: GraphQLString},decoratorContentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/createTextAndUploadedContent?surveyId=${args.surveyId}sequenceNum=${args.sequenceNum}ownerContentId=${args.ownerContentId}mimeTypeId=${args.mimeTypeId}rootDir=${args.rootDir}dataCategoryId=${args.dataCategoryId}surveyResponseId=${args.surveyResponseId}privilegeEnumId=${args.privilegeEnumId}contentAssocTypeId=${args.contentAssocTypeId}dataResourceId=${args.dataResourceId}objectInfo=${args.objectInfo}partyId=${args.partyId}dataResourceTypeId=${args.dataResourceTypeId}createdByUserLogin=${args.createdByUserLogin}dataResourceName=${args.dataResourceName}targetOperationString=${args.targetOperationString}skipPermissionCheck=${args.skipPermissionCheck}instanceOfContentId=${args.instanceOfContentId}contentPurposeString=${args.contentPurposeString}fromDate=${args.fromDate}statusId=${args.statusId}displayFailCond=${args.displayFailCond}contentIdFrom=${args.contentIdFrom}childBranchCount=${args.childBranchCount}_uploadedFile_fileName=${args._uploadedFile_fileName}contentIdTo=${args.contentIdTo}contentTypeId=${args.contentTypeId}contentId=${args.contentId}description=${args.description}roleTypeList=${args.roleTypeList}childLeafCount=${args.childLeafCount}contentPurposeTypeId=${args.contentPurposeTypeId}textData=${args.textData}dataSourceId=${args.dataSourceId}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}_uploadedFile_contentType=${args._uploadedFile_contentType}relatedDetailId=${args.relatedDetailId}isPublic=${args.isPublic}uploadedFile=${args.uploadedFile}contentPurposeList=${args.contentPurposeList}roleTypeId=${args.roleTypeId}dataTemplateTypeId=${args.dataTemplateTypeId}targetOperationList=${args.targetOperationList}lastModifiedDate=${args.lastModifiedDate}templateDataResourceId=${args.templateDataResourceId}mapKey=${args.mapKey}serviceName=${args.serviceName}characterSetId=${args.characterSetId}customMethodId=${args.customMethodId}contentName=${args.contentName}createdDate=${args.createdDate}localeString=${args.localeString}decoratorContentId=${args.decoratorContentId}`, null, req);
  }
};
export {createTextAndUploadedContent};


const createTextContent = {
  type: ResopnseType,
  description: 'mutation for ofbiz createTextContent method',
  args:{surveyId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},ownerContentId: {type: GraphQLString},mimeTypeId: {type: GraphQLString},dataCategoryId: {type: GraphQLString},surveyResponseId: {type: GraphQLString},privilegeEnumId: {type: GraphQLString},contentAssocTypeId: {type: GraphQLString},dataResourceId: {type: GraphQLString},objectInfo: {type: GraphQLString},partyId: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},dataResourceName: {type: GraphQLInt},targetOperationString: {type: GraphQLString},skipPermissionCheck: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},contentPurposeString: {type: GraphQLString},fromDate: {type: GraphQLString},statusId: {type: GraphQLString},displayFailCond: {type: GraphQLBoolean},contentIdFrom: {type: GraphQLString},childBranchCount: {type: GraphQLInt},contentIdTo: {type: GraphQLString},contentTypeId: {type: GraphQLString},contentId: {type: GraphQLString},description: {type: GraphQLString},childLeafCount: {type: GraphQLInt},contentPurposeTypeId: {type: GraphQLString},textData: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},relatedDetailId: {type: GraphQLString},isPublic: {type: GraphQLString},uploadedFile: {type: GraphQLString},roleTypeId: {type: GraphQLString},dataTemplateTypeId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},mapKey: {type: GraphQLString},serviceName: {type: GraphQLString},characterSetId: {type: GraphQLString},customMethodId: {type: GraphQLString},contentName: {type: GraphQLInt},createdDate: {type: GraphQLString},localeString: {type: GraphQLString},decoratorContentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/createTextContent?surveyId=${args.surveyId}sequenceNum=${args.sequenceNum}ownerContentId=${args.ownerContentId}mimeTypeId=${args.mimeTypeId}dataCategoryId=${args.dataCategoryId}surveyResponseId=${args.surveyResponseId}privilegeEnumId=${args.privilegeEnumId}contentAssocTypeId=${args.contentAssocTypeId}dataResourceId=${args.dataResourceId}objectInfo=${args.objectInfo}partyId=${args.partyId}dataResourceTypeId=${args.dataResourceTypeId}createdByUserLogin=${args.createdByUserLogin}dataResourceName=${args.dataResourceName}targetOperationString=${args.targetOperationString}skipPermissionCheck=${args.skipPermissionCheck}instanceOfContentId=${args.instanceOfContentId}contentPurposeString=${args.contentPurposeString}fromDate=${args.fromDate}statusId=${args.statusId}displayFailCond=${args.displayFailCond}contentIdFrom=${args.contentIdFrom}childBranchCount=${args.childBranchCount}contentIdTo=${args.contentIdTo}contentTypeId=${args.contentTypeId}contentId=${args.contentId}description=${args.description}roleTypeList=${args.roleTypeList}childLeafCount=${args.childLeafCount}contentPurposeTypeId=${args.contentPurposeTypeId}textData=${args.textData}dataSourceId=${args.dataSourceId}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}relatedDetailId=${args.relatedDetailId}isPublic=${args.isPublic}uploadedFile=${args.uploadedFile}contentPurposeList=${args.contentPurposeList}roleTypeId=${args.roleTypeId}dataTemplateTypeId=${args.dataTemplateTypeId}targetOperationList=${args.targetOperationList}lastModifiedDate=${args.lastModifiedDate}templateDataResourceId=${args.templateDataResourceId}mapKey=${args.mapKey}serviceName=${args.serviceName}characterSetId=${args.characterSetId}customMethodId=${args.customMethodId}contentName=${args.contentName}createdDate=${args.createdDate}localeString=${args.localeString}decoratorContentId=${args.decoratorContentId}`, null, req);
  }
};
export {createTextContent};


const deactivateAllContentRoles = {
  type: ResopnseType,
  description: 'mutation for ofbiz deactivateAllContentRoles method',
  args:{roleTypeId: {type: GraphQLString},contentId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/deactivateAllContentRoles?roleTypeId=${args.roleTypeId}contentId=${args.contentId}partyId=${args.partyId}`, null, req);
  }
};
export {deactivateAllContentRoles};


const deleteContentKeyword = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteContentKeyword method',
  args:{contentId: {type: GraphQLString},keyword: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/deleteContentKeyword?contentId=${args.contentId}keyword=${args.keyword}`, null, req);
  }
};
export {deleteContentKeyword};


const deleteContentKeywords = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteContentKeywords method',
  args:{contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/deleteContentKeywords?contentId=${args.contentId}`, null, req);
  }
};
export {deleteContentKeywords};


const findRelatedContent = {
  type: ResopnseType,
  description: 'mutation for ofbiz findRelatedContent method',
  args:{currentContent: {type: new GraphQLList(KeyValueInputType)},fromDate: {type: GraphQLString},userLogin: {type: new GraphQLList(KeyValueInputType)},entityOperation: {type: GraphQLString},toFrom: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/findRelatedContent?currentContent=${args.currentContent}fromDate=${args.fromDate}userLogin=${args.userLogin}contentAssocTypeList=${args.contentAssocTypeList}targetOperationList=${args.targetOperationList}contentTypeList=${args.contentTypeList}entityOperation=${args.entityOperation}toFrom=${args.toFrom}thruDate=${args.thruDate}`, null, req);
  }
};
export {findRelatedContent};


const forceIndexContentKeywords = {
  type: ResopnseType,
  description: 'mutation for ofbiz forceIndexContentKeywords method',
  args:{contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/forceIndexContentKeywords?contentId=${args.contentId}`, null, req);
  }
};
export {forceIndexContentKeywords};


const indexContentKeywords = {
  type: ResopnseType,
  description: 'mutation for ofbiz indexContentKeywords method',
  args:{contentId: {type: GraphQLString},contentInstance: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/indexContentKeywords?contentId=${args.contentId}contentInstance=${args.contentInstance}`, null, req);
  }
};
export {indexContentKeywords};


const removeContent = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeContent method',
  args:{contentId: {type: GraphQLString},contentPurposeTypeId: {type: GraphQLString},userLogin: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/removeContent?contentId=${args.contentId}contentPurposeTypeId=${args.contentPurposeTypeId}userLogin=${args.userLogin}targetOperationList=${args.targetOperationList}roleTypeList=${args.roleTypeList}`, null, req);
  }
};
export {removeContent};


const removeContentAndRelated = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeContentAndRelated method',
  args:{contentId: {type: GraphQLString},contentPurposeTypeId: {type: GraphQLString},userLogin: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/removeContentAndRelated?contentId=${args.contentId}contentPurposeTypeId=${args.contentPurposeTypeId}userLogin=${args.userLogin}targetOperationList=${args.targetOperationList}roleTypeList=${args.roleTypeList}`, null, req);
  }
};
export {removeContentAndRelated};


const removeContentApproval = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeContentApproval method',
  args:{contentApprovalId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/removeContentApproval?contentApprovalId=${args.contentApprovalId}`, null, req);
  }
};
export {removeContentApproval};


const removeContentAssoc = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeContentAssoc method',
  args:{fromDate: {type: GraphQLString},contentAssocTypeId: {type: GraphQLString},contentIdTo: {type: GraphQLString},contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/removeContentAssoc?fromDate=${args.fromDate}contentAssocTypeId=${args.contentAssocTypeId}contentIdTo=${args.contentIdTo}contentId=${args.contentId}`, null, req);
  }
};
export {removeContentAssoc};


const removeContentAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeContentAttribute method',
  args:{contentId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/removeContentAttribute?contentId=${args.contentId}attrName=${args.attrName}`, null, req);
  }
};
export {removeContentAttribute};


const removeContentMetaData = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeContentMetaData method',
  args:{metaDataPredicateId: {type: GraphQLString},contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/removeContentMetaData?metaDataPredicateId=${args.metaDataPredicateId}contentId=${args.contentId}`, null, req);
  }
};
export {removeContentMetaData};


const removeContentOperation = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeContentOperation method',
  args:{contentOperationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/removeContentOperation?contentOperationId=${args.contentOperationId}`, null, req);
  }
};
export {removeContentOperation};


const removeContentPurpose = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeContentPurpose method',
  args:{contentPurposeTypeId: {type: GraphQLString},contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/removeContentPurpose?contentPurposeTypeId=${args.contentPurposeTypeId}contentId=${args.contentId}`, null, req);
  }
};
export {removeContentPurpose};


const removeContentPurposeOperation = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeContentPurposeOperation method',
  args:{contentPurposeTypeId: {type: GraphQLString},privilegeEnumId: {type: GraphQLString},roleTypeId: {type: GraphQLString},statusId: {type: GraphQLString},contentOperationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/removeContentPurposeOperation?contentPurposeTypeId=${args.contentPurposeTypeId}privilegeEnumId=${args.privilegeEnumId}roleTypeId=${args.roleTypeId}statusId=${args.statusId}contentOperationId=${args.contentOperationId}`, null, req);
  }
};
export {removeContentPurposeOperation};


const removeContentRevision = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeContentRevision method',
  args:{contentId: {type: GraphQLString},contentRevisionSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/removeContentRevision?contentId=${args.contentId}contentRevisionSeqId=${args.contentRevisionSeqId}`, null, req);
  }
};
export {removeContentRevision};


const removeContentRevisionItem = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeContentRevisionItem method',
  args:{contentId: {type: GraphQLString},contentRevisionSeqId: {type: GraphQLString},itemContentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/removeContentRevisionItem?contentId=${args.contentId}contentRevisionSeqId=${args.contentRevisionSeqId}itemContentId=${args.itemContentId}`, null, req);
  }
};
export {removeContentRevisionItem};


const removeContentRole = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeContentRole method',
  args:{fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},contentId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/removeContentRole?fromDate=${args.fromDate}roleTypeId=${args.roleTypeId}contentId=${args.contentId}partyId=${args.partyId}`, null, req);
  }
};
export {removeContentRole};


const setContentStatus = {
  type: ResopnseType,
  description: 'mutation for ofbiz setContentStatus method',
  args:{statusId: {type: GraphQLString},contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/setContentStatus?statusId=${args.statusId}contentId=${args.contentId}`, null, req);
  }
};
export {setContentStatus};


const updateContent = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateContent method',
  args:{fromDate: {type: GraphQLString},contentAssocTypeId: {type: GraphQLString},contentIdTo: {type: GraphQLString},contentId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},ownerContentId: {type: GraphQLString},upperCoordinate: {type: GraphQLInt},leftCoordinate: {type: GraphQLInt},contentTypeId: {type: GraphQLString},description: {type: GraphQLString},mimeTypeId: {type: GraphQLString},childLeafCount: {type: GraphQLInt},contentPurposeTypeId: {type: GraphQLString},privilegeEnumId: {type: GraphQLString},contentAssocPredicateId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},dataResourceId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},deactivateExisting: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},skipPermissionCheck: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},mapKey: {type: GraphQLString},serviceName: {type: GraphQLString},customMethodId: {type: GraphQLString},characterSetId: {type: GraphQLString},thruDate: {type: GraphQLString},contentName: {type: GraphQLInt},createdDate: {type: GraphQLString},displayFailCond: {type: GraphQLBoolean},statusId: {type: GraphQLString},localeString: {type: GraphQLString},contentIdFrom: {type: GraphQLString},decoratorContentId: {type: GraphQLString},childBranchCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/updateContent?fromDate=${args.fromDate}contentAssocTypeId=${args.contentAssocTypeId}contentIdTo=${args.contentIdTo}contentId=${args.contentId}sequenceNum=${args.sequenceNum}ownerContentId=${args.ownerContentId}upperCoordinate=${args.upperCoordinate}leftCoordinate=${args.leftCoordinate}contentTypeId=${args.contentTypeId}roleTypeList=${args.roleTypeList}description=${args.description}mimeTypeId=${args.mimeTypeId}childLeafCount=${args.childLeafCount}contentPurposeTypeId=${args.contentPurposeTypeId}privilegeEnumId=${args.privilegeEnumId}contentAssocPredicateId=${args.contentAssocPredicateId}dataSourceId=${args.dataSourceId}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}dataResourceId=${args.dataResourceId}createdByUserLogin=${args.createdByUserLogin}deactivateExisting=${args.deactivateExisting}contentPurposeList=${args.contentPurposeList}targetOperationList=${args.targetOperationList}lastModifiedDate=${args.lastModifiedDate}templateDataResourceId=${args.templateDataResourceId}skipPermissionCheck=${args.skipPermissionCheck}instanceOfContentId=${args.instanceOfContentId}mapKey=${args.mapKey}serviceName=${args.serviceName}customMethodId=${args.customMethodId}characterSetId=${args.characterSetId}thruDate=${args.thruDate}contentName=${args.contentName}createdDate=${args.createdDate}displayFailCond=${args.displayFailCond}statusId=${args.statusId}localeString=${args.localeString}contentIdFrom=${args.contentIdFrom}decoratorContentId=${args.decoratorContentId}childBranchCount=${args.childBranchCount}`, null, req);
  }
};
export {updateContent};


const updateContentAndUploadedFile = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateContentAndUploadedFile method',
  args:{fromDate: {type: GraphQLString},partyContentTypeId: {type: GraphQLString},contentAssocTypeId: {type: GraphQLString},contentIdTo: {type: GraphQLString},dataResourceId: {type: GraphQLString},contentId: {type: GraphQLString},partyId: {type: GraphQLString},surveyId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},ownerContentId: {type: GraphQLString},upperCoordinate: {type: GraphQLInt},leftCoordinate: {type: GraphQLInt},contentTypeId: {type: GraphQLString},mimeTypeId: {type: GraphQLString},rootDir: {type: GraphQLString},description: {type: GraphQLString},dataCategoryId: {type: GraphQLString},childLeafCount: {type: GraphQLInt},surveyResponseId: {type: GraphQLString},contentPurposeTypeId: {type: GraphQLString},privilegeEnumId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},contentAssocPredicateId: {type: GraphQLString},_uploadedFile_contentType: {type: GraphQLString},relatedDetailId: {type: GraphQLString},isPublic: {type: GraphQLString},objectInfo: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},deactivateExisting: {type: GraphQLString},uploadedFile: {type: GraphQLString},dataResourceName: {type: GraphQLInt},dataTemplateTypeId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},skipPermissionCheck: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},mapKey: {type: GraphQLString},serviceName: {type: GraphQLString},characterSetId: {type: GraphQLString},customMethodId: {type: GraphQLString},thruDate: {type: GraphQLString},contentName: {type: GraphQLInt},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},displayFailCond: {type: GraphQLBoolean},localeString: {type: GraphQLString},contentIdFrom: {type: GraphQLString},decoratorContentId: {type: GraphQLString},_uploadedFile_fileName: {type: GraphQLString},childBranchCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/updateContentAndUploadedFile?fromDate=${args.fromDate}partyContentTypeId=${args.partyContentTypeId}contentAssocTypeId=${args.contentAssocTypeId}contentIdTo=${args.contentIdTo}dataResourceId=${args.dataResourceId}contentId=${args.contentId}partyId=${args.partyId}surveyId=${args.surveyId}sequenceNum=${args.sequenceNum}ownerContentId=${args.ownerContentId}upperCoordinate=${args.upperCoordinate}leftCoordinate=${args.leftCoordinate}contentTypeId=${args.contentTypeId}mimeTypeId=${args.mimeTypeId}rootDir=${args.rootDir}roleTypeList=${args.roleTypeList}description=${args.description}dataCategoryId=${args.dataCategoryId}childLeafCount=${args.childLeafCount}surveyResponseId=${args.surveyResponseId}contentPurposeTypeId=${args.contentPurposeTypeId}privilegeEnumId=${args.privilegeEnumId}dataSourceId=${args.dataSourceId}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}contentAssocPredicateId=${args.contentAssocPredicateId}_uploadedFile_contentType=${args._uploadedFile_contentType}relatedDetailId=${args.relatedDetailId}isPublic=${args.isPublic}objectInfo=${args.objectInfo}dataResourceTypeId=${args.dataResourceTypeId}createdByUserLogin=${args.createdByUserLogin}deactivateExisting=${args.deactivateExisting}uploadedFile=${args.uploadedFile}dataResourceName=${args.dataResourceName}contentPurposeList=${args.contentPurposeList}dataTemplateTypeId=${args.dataTemplateTypeId}targetOperationList=${args.targetOperationList}lastModifiedDate=${args.lastModifiedDate}templateDataResourceId=${args.templateDataResourceId}skipPermissionCheck=${args.skipPermissionCheck}instanceOfContentId=${args.instanceOfContentId}mapKey=${args.mapKey}serviceName=${args.serviceName}characterSetId=${args.characterSetId}customMethodId=${args.customMethodId}thruDate=${args.thruDate}contentName=${args.contentName}createdDate=${args.createdDate}statusId=${args.statusId}displayFailCond=${args.displayFailCond}localeString=${args.localeString}contentIdFrom=${args.contentIdFrom}decoratorContentId=${args.decoratorContentId}_uploadedFile_fileName=${args._uploadedFile_fileName}childBranchCount=${args.childBranchCount}`, null, req);
  }
};
export {updateContentAndUploadedFile};


const updateContentApproval = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateContentApproval method',
  args:{contentApprovalId: {type: GraphQLString},roleTypeId: {type: GraphQLString},approvalDate: {type: GraphQLString},comments: {type: GraphQLString},sequenceNum: {type: GraphQLInt},contentId: {type: GraphQLString},contentRevisionSeqId: {type: GraphQLString},partyId: {type: GraphQLString},approvalStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/updateContentApproval?contentApprovalId=${args.contentApprovalId}roleTypeId=${args.roleTypeId}approvalDate=${args.approvalDate}comments=${args.comments}sequenceNum=${args.sequenceNum}contentId=${args.contentId}contentRevisionSeqId=${args.contentRevisionSeqId}partyId=${args.partyId}approvalStatusId=${args.approvalStatusId}`, null, req);
  }
};
export {updateContentApproval};


const updateContentAssoc = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateContentAssoc method',
  args:{fromDate: {type: GraphQLString},contentAssocTypeId: {type: GraphQLString},contentIdTo: {type: GraphQLString},contentId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},lastModifiedDate: {type: GraphQLString},skipPermissionCheck: {type: GraphQLString},upperCoordinate: {type: GraphQLInt},leftCoordinate: {type: GraphQLInt},mapKey: {type: GraphQLString},thruDate: {type: GraphQLString},contentAssocPredicateId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},createdDate: {type: GraphQLString},displayFailCond: {type: GraphQLBoolean},contentIdFrom: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},deactivateExisting: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/updateContentAssoc?fromDate=${args.fromDate}contentAssocTypeId=${args.contentAssocTypeId}contentIdTo=${args.contentIdTo}contentId=${args.contentId}contentPurposeList=${args.contentPurposeList}targetOperationList=${args.targetOperationList}sequenceNum=${args.sequenceNum}lastModifiedDate=${args.lastModifiedDate}skipPermissionCheck=${args.skipPermissionCheck}upperCoordinate=${args.upperCoordinate}leftCoordinate=${args.leftCoordinate}mapKey=${args.mapKey}roleTypeList=${args.roleTypeList}thruDate=${args.thruDate}contentAssocPredicateId=${args.contentAssocPredicateId}dataSourceId=${args.dataSourceId}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}createdDate=${args.createdDate}displayFailCond=${args.displayFailCond}contentIdFrom=${args.contentIdFrom}createdByUserLogin=${args.createdByUserLogin}deactivateExisting=${args.deactivateExisting}`, null, req);
  }
};
export {updateContentAssoc};


const updateContentAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateContentAttribute method',
  args:{contentId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/updateContentAttribute?contentId=${args.contentId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {updateContentAttribute};


const updateContentKeyword = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateContentKeyword method',
  args:{contentId: {type: GraphQLString},keyword: {type: GraphQLString},relevancyWeight: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/updateContentKeyword?contentId=${args.contentId}keyword=${args.keyword}relevancyWeight=${args.relevancyWeight}`, null, req);
  }
};
export {updateContentKeyword};


const updateContentMetaData = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateContentMetaData method',
  args:{metaDataPredicateId: {type: GraphQLString},contentId: {type: GraphQLString},dataSourceId: {type: GraphQLString},metaDataValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/updateContentMetaData?metaDataPredicateId=${args.metaDataPredicateId}contentId=${args.contentId}dataSourceId=${args.dataSourceId}metaDataValue=${args.metaDataValue}`, null, req);
  }
};
export {updateContentMetaData};


const updateContentOperation = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateContentOperation method',
  args:{contentOperationId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/updateContentOperation?contentOperationId=${args.contentOperationId}description=${args.description}`, null, req);
  }
};
export {updateContentOperation};


const updateContentPurpose = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateContentPurpose method',
  args:{contentPurposeTypeId: {type: GraphQLString},contentId: {type: GraphQLString},sequenceNum: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/updateContentPurpose?contentPurposeTypeId=${args.contentPurposeTypeId}contentId=${args.contentId}sequenceNum=${args.sequenceNum}`, null, req);
  }
};
export {updateContentPurpose};


const updateContentPurposeOperation = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateContentPurposeOperation method',
  args:{contentPurposeTypeId: {type: GraphQLString},privilegeEnumId: {type: GraphQLString},roleTypeId: {type: GraphQLString},statusId: {type: GraphQLString},contentOperationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/updateContentPurposeOperation?contentPurposeTypeId=${args.contentPurposeTypeId}privilegeEnumId=${args.privilegeEnumId}roleTypeId=${args.roleTypeId}statusId=${args.statusId}contentOperationId=${args.contentOperationId}`, null, req);
  }
};
export {updateContentPurposeOperation};


const updateContentRevision = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateContentRevision method',
  args:{contentId: {type: GraphQLString},contentRevisionSeqId: {type: GraphQLString},comments: {type: GraphQLString},committedByPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/updateContentRevision?contentId=${args.contentId}contentRevisionSeqId=${args.contentRevisionSeqId}comments=${args.comments}committedByPartyId=${args.committedByPartyId}`, null, req);
  }
};
export {updateContentRevision};


const updateContentRevisionItem = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateContentRevisionItem method',
  args:{contentId: {type: GraphQLString},contentRevisionSeqId: {type: GraphQLString},itemContentId: {type: GraphQLString},oldDataResourceId: {type: GraphQLString},newDataResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/updateContentRevisionItem?contentId=${args.contentId}contentRevisionSeqId=${args.contentRevisionSeqId}itemContentId=${args.itemContentId}oldDataResourceId=${args.oldDataResourceId}newDataResourceId=${args.newDataResourceId}`, null, req);
  }
};
export {updateContentRevisionItem};


const updateContentRole = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateContentRole method',
  args:{fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},contentId: {type: GraphQLString},partyId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/updateContentRole?fromDate=${args.fromDate}roleTypeId=${args.roleTypeId}contentId=${args.contentId}partyId=${args.partyId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateContentRole};


const updateSingleContentPurpose = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateSingleContentPurpose method',
  args:{contentPurposeTypeId: {type: GraphQLString},contentId: {type: GraphQLString},sequenceNum: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/updateSingleContentPurpose?contentPurposeTypeId=${args.contentPurposeTypeId}contentId=${args.contentId}sequenceNum=${args.sequenceNum}`, null, req);
  }
};
export {updateSingleContentPurpose};


const updateTextContent = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateTextContent method',
  args:{fromDate: {type: GraphQLString},contentAssocTypeId: {type: GraphQLString},contentIdTo: {type: GraphQLString},dataResourceId: {type: GraphQLString},surveyId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},ownerContentId: {type: GraphQLString},upperCoordinate: {type: GraphQLInt},leftCoordinate: {type: GraphQLInt},contentId: {type: GraphQLString},contentTypeId: {type: GraphQLString},mimeTypeId: {type: GraphQLString},description: {type: GraphQLString},dataCategoryId: {type: GraphQLString},childLeafCount: {type: GraphQLInt},surveyResponseId: {type: GraphQLString},contentPurposeTypeId: {type: GraphQLString},textData: {type: GraphQLString},privilegeEnumId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},contentAssocPredicateId: {type: GraphQLString},relatedDetailId: {type: GraphQLString},isPublic: {type: GraphQLString},objectInfo: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},deactivateExisting: {type: GraphQLString},dataResourceName: {type: GraphQLInt},dataTemplateTypeId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},skipPermissionCheck: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},mapKey: {type: GraphQLString},serviceName: {type: GraphQLString},characterSetId: {type: GraphQLString},customMethodId: {type: GraphQLString},thruDate: {type: GraphQLString},contentName: {type: GraphQLInt},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},displayFailCond: {type: GraphQLBoolean},localeString: {type: GraphQLString},contentIdFrom: {type: GraphQLString},decoratorContentId: {type: GraphQLString},childBranchCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentContent/updateTextContent?fromDate=${args.fromDate}contentAssocTypeId=${args.contentAssocTypeId}contentIdTo=${args.contentIdTo}dataResourceId=${args.dataResourceId}surveyId=${args.surveyId}sequenceNum=${args.sequenceNum}ownerContentId=${args.ownerContentId}upperCoordinate=${args.upperCoordinate}leftCoordinate=${args.leftCoordinate}contentId=${args.contentId}contentTypeId=${args.contentTypeId}mimeTypeId=${args.mimeTypeId}roleTypeList=${args.roleTypeList}description=${args.description}dataCategoryId=${args.dataCategoryId}childLeafCount=${args.childLeafCount}surveyResponseId=${args.surveyResponseId}contentPurposeTypeId=${args.contentPurposeTypeId}textData=${args.textData}privilegeEnumId=${args.privilegeEnumId}dataSourceId=${args.dataSourceId}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}contentAssocPredicateId=${args.contentAssocPredicateId}relatedDetailId=${args.relatedDetailId}isPublic=${args.isPublic}objectInfo=${args.objectInfo}dataResourceTypeId=${args.dataResourceTypeId}createdByUserLogin=${args.createdByUserLogin}deactivateExisting=${args.deactivateExisting}dataResourceName=${args.dataResourceName}contentPurposeList=${args.contentPurposeList}dataTemplateTypeId=${args.dataTemplateTypeId}targetOperationList=${args.targetOperationList}lastModifiedDate=${args.lastModifiedDate}templateDataResourceId=${args.templateDataResourceId}skipPermissionCheck=${args.skipPermissionCheck}instanceOfContentId=${args.instanceOfContentId}mapKey=${args.mapKey}serviceName=${args.serviceName}characterSetId=${args.characterSetId}customMethodId=${args.customMethodId}thruDate=${args.thruDate}contentName=${args.contentName}createdDate=${args.createdDate}statusId=${args.statusId}displayFailCond=${args.displayFailCond}localeString=${args.localeString}contentIdFrom=${args.contentIdFrom}decoratorContentId=${args.decoratorContentId}childBranchCount=${args.childBranchCount}`, null, req);
  }
};
export {updateTextContent};
