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


const changeLeafToNode = {
  type: ResponseType,
  description: 'mutation for ofbiz changeLeafToNode method',
  args:{contentId: {type: GraphQLString},userLogin: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/changeLeafToNode?contentId=${args.contentId}&userLogin=${args.userLogin}&`, null, req);
  }
};
export {changeLeafToNode};


const checkContentAssocIds = {
  type: ResponseType,
  description: 'mutation for ofbiz checkContentAssocIds method',
  args:{contentIdTo: {type: GraphQLString},contentIdFrom: {type: GraphQLString},contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/checkContentAssocIds?contentIdTo=${args.contentIdTo}&contentIdFrom=${args.contentIdFrom}&contentId=${args.contentId}&`, null, req);
  }
};
export {checkContentAssocIds};


const checkForWaitingApprovals = {
  type: ResponseType,
  description: 'mutation for ofbiz checkForWaitingApprovals method',
  args:{thisUserLogin: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/checkForWaitingApprovals?thisUserLogin=${args.thisUserLogin}&`, null, req);
  }
};
export {checkForWaitingApprovals};


const clearContentAssocDataResourceViewCache = {
  type: ResponseType,
  description: 'mutation for ofbiz clearContentAssocDataResourceViewCache method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/clearContentAssocDataResourceViewCache?`, null, req);
  }
};
export {clearContentAssocDataResourceViewCache};


const clearContentAssocViewCache = {
  type: ResponseType,
  description: 'mutation for ofbiz clearContentAssocViewCache method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/clearContentAssocViewCache?`, null, req);
  }
};
export {clearContentAssocViewCache};


const cloneInstanceContentApprovals = {
  type: ResponseType,
  description: 'mutation for ofbiz cloneInstanceContentApprovals method',
  args:{contentId: {type: GraphQLString},contentRevisionSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/cloneInstanceContentApprovals?contentId=${args.contentId}&contentRevisionSeqId=${args.contentRevisionSeqId}&`, null, req);
  }
};
export {cloneInstanceContentApprovals};


const cloneTemplateContentApprovals = {
  type: ResponseType,
  description: 'mutation for ofbiz cloneTemplateContentApprovals method',
  args:{contentId: {type: GraphQLString},contentRevisionSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/cloneTemplateContentApprovals?contentId=${args.contentId}&contentRevisionSeqId=${args.contentRevisionSeqId}&`, null, req);
  }
};
export {cloneTemplateContentApprovals};


const contentManagerPermission = {
  type: ResponseType,
  description: 'mutation for ofbiz contentManagerPermission method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/contentManagerPermission?primaryPermission=${args.primaryPermission}&altPermission=${args.altPermission}&resourceDescription=${args.resourceDescription}&mainAction=${args.mainAction}&`, null, req);
  }
};
export {contentManagerPermission};


const contentManagerRolePermission = {
  type: ResponseType,
  description: 'mutation for ofbiz contentManagerRolePermission method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/contentManagerRolePermission?primaryPermission=${args.primaryPermission}&altPermission=${args.altPermission}&resourceDescription=${args.resourceDescription}&mainAction=${args.mainAction}&`, null, req);
  }
};
export {contentManagerRolePermission};


const createArticleContent = {
  type: ResponseType,
  description: 'mutation for ofbiz createArticleContent method',
  args:{pubPtContentId: {type: GraphQLString},surveyId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},ownerContentId: {type: GraphQLString},mimeTypeId: {type: GraphQLString},rootDir: {type: GraphQLString},dataCategoryId: {type: GraphQLString},surveyResponseId: {type: GraphQLString},privilegeEnumId: {type: GraphQLString},contentAssocTypeId: {type: GraphQLString},dataResourceId: {type: GraphQLString},objectInfo: {type: GraphQLString},partyId: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},dataResourceName: {type: GraphQLInt},targetOperationString: {type: GraphQLString},skipPermissionCheck: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},contentPurposeString: {type: GraphQLString},summaryData: {type: GraphQLString},fromDate: {type: GraphQLString},statusId: {type: GraphQLString},displayFailCond: {type: GraphQLBoolean},contentIdFrom: {type: GraphQLString},_uploadedFile_fileName: {type: GraphQLString},childBranchCount: {type: GraphQLInt},contentIdTo: {type: GraphQLString},contentTypeId: {type: GraphQLString},contentId: {type: GraphQLString},description: {type: GraphQLString},childLeafCount: {type: GraphQLInt},contentPurposeTypeId: {type: GraphQLString},textData: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},_uploadedFile_contentType: {type: GraphQLString},relatedDetailId: {type: GraphQLString},isPublic: {type: GraphQLString},uploadedFile: {type: GraphQLString},roleTypeId: {type: GraphQLString},dataTemplateTypeId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},mapKey: {type: GraphQLString},serviceName: {type: GraphQLString},characterSetId: {type: GraphQLString},customMethodId: {type: GraphQLString},contentName: {type: GraphQLInt},threadContentId: {type: GraphQLString},createdDate: {type: GraphQLString},localeString: {type: GraphQLString},decoratorContentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/createArticleContent?pubPtContentId=${args.pubPtContentId}&surveyId=${args.surveyId}&sequenceNum=${args.sequenceNum}&ownerContentId=${args.ownerContentId}&mimeTypeId=${args.mimeTypeId}&rootDir=${args.rootDir}&dataCategoryId=${args.dataCategoryId}&surveyResponseId=${args.surveyResponseId}&privilegeEnumId=${args.privilegeEnumId}&contentAssocTypeId=${args.contentAssocTypeId}&dataResourceId=${args.dataResourceId}&objectInfo=${args.objectInfo}&partyId=${args.partyId}&dataResourceTypeId=${args.dataResourceTypeId}&createdByUserLogin=${args.createdByUserLogin}&dataResourceName=${args.dataResourceName}&targetOperationString=${args.targetOperationString}&skipPermissionCheck=${args.skipPermissionCheck}&instanceOfContentId=${args.instanceOfContentId}&contentPurposeString=${args.contentPurposeString}&summaryData=${args.summaryData}&fromDate=${args.fromDate}&statusId=${args.statusId}&displayFailCond=${args.displayFailCond}&contentIdFrom=${args.contentIdFrom}&_uploadedFile_fileName=${args._uploadedFile_fileName}&childBranchCount=${args.childBranchCount}&contentIdTo=${args.contentIdTo}&contentTypeId=${args.contentTypeId}&contentId=${args.contentId}&description=${args.description}&roleTypeList=${args.roleTypeList}&childLeafCount=${args.childLeafCount}&contentPurposeTypeId=${args.contentPurposeTypeId}&textData=${args.textData}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&_uploadedFile_contentType=${args._uploadedFile_contentType}&relatedDetailId=${args.relatedDetailId}&isPublic=${args.isPublic}&uploadedFile=${args.uploadedFile}&contentPurposeList=${args.contentPurposeList}&roleTypeId=${args.roleTypeId}&dataTemplateTypeId=${args.dataTemplateTypeId}&targetOperationList=${args.targetOperationList}&lastModifiedDate=${args.lastModifiedDate}&templateDataResourceId=${args.templateDataResourceId}&mapKey=${args.mapKey}&serviceName=${args.serviceName}&characterSetId=${args.characterSetId}&customMethodId=${args.customMethodId}&contentName=${args.contentName}&threadContentId=${args.threadContentId}&createdDate=${args.createdDate}&localeString=${args.localeString}&decoratorContentId=${args.decoratorContentId}&`, null, req);
  }
};
export {createArticleContent};


const createBlogEntry = {
  type: ResponseType,
  description: 'mutation for ofbiz createBlogEntry method',
  args:{blogContentId: {type: GraphQLString},_uploadedFile_contentType: {type: GraphQLString},statusId: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},description: {type: GraphQLString},articleData: {type: GraphQLString},summaryData: {type: GraphQLString},uploadedFile: {type: GraphQLString},_uploadedFile_fileName: {type: GraphQLString},contentName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/createBlogEntry?blogContentId=${args.blogContentId}&_uploadedFile_contentType=${args._uploadedFile_contentType}&statusId=${args.statusId}&templateDataResourceId=${args.templateDataResourceId}&description=${args.description}&articleData=${args.articleData}&summaryData=${args.summaryData}&uploadedFile=${args.uploadedFile}&_uploadedFile_fileName=${args._uploadedFile_fileName}&contentName=${args.contentName}&`, null, req);
  }
};
export {createBlogEntry};


const createContentAlternativeUrl = {
  type: ResponseType,
  description: 'mutation for ofbiz createContentAlternativeUrl method',
  args:{contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/createContentAlternativeUrl?contentId=${args.contentId}&`, null, req);
  }
};
export {createContentAlternativeUrl};


const createDataCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz createDataCategory method',
  args:{dataCategoryId: {type: GraphQLString},parentCategoryId: {type: GraphQLString},categoryName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/createDataCategory?dataCategoryId=${args.dataCategoryId}&parentCategoryId=${args.parentCategoryId}&categoryName=${args.categoryName}&`, null, req);
  }
};
export {createDataCategory};


const createDataResourceAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz createDataResourceAttribute method',
  args:{dataResourceId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/createDataResourceAttribute?dataResourceId=${args.dataResourceId}&attrName=${args.attrName}&attrDescription=${args.attrDescription}&attrValue=${args.attrValue}&`, null, req);
  }
};
export {createDataResourceAttribute};


const createDataResourceRole = {
  type: ResponseType,
  description: 'mutation for ofbiz createDataResourceRole method',
  args:{roleTypeId: {type: GraphQLString},dataResourceId: {type: GraphQLString},partyId: {type: GraphQLString},fromDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/createDataResourceRole?roleTypeId=${args.roleTypeId}&dataResourceId=${args.dataResourceId}&partyId=${args.partyId}&fromDate=${args.fromDate}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {createDataResourceRole};


const createDownloadContent = {
  type: ResponseType,
  description: 'mutation for ofbiz createDownloadContent method',
  args:{file: {type: GraphQLString},contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/createDownloadContent?file=${args.file}&contentId=${args.contentId}&`, null, req);
  }
};
export {createDownloadContent};


const createEmailContent = {
  type: ResponseType,
  description: 'mutation for ofbiz createEmailContent method',
  args:{subject: {type: GraphQLString},plainBody: {type: GraphQLString},htmlBody: {type: GraphQLString},contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/createEmailContent?subject=${args.subject}&plainBody=${args.plainBody}&htmlBody=${args.htmlBody}&contentId=${args.contentId}&`, null, req);
  }
};
export {createEmailContent};


const createImage = {
  type: ResponseType,
  description: 'mutation for ofbiz createImage method',
  args:{imageData: {type: GraphQLString},dataResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/createImage?imageData=${args.imageData}&dataResourceId=${args.dataResourceId}&`, null, req);
  }
};
export {createImage};


const createSimpleTextContent = {
  type: ResponseType,
  description: 'mutation for ofbiz createSimpleTextContent method',
  args:{text: {type: GraphQLString},contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/createSimpleTextContent?text=${args.text}&contentId=${args.contentId}&`, null, req);
  }
};
export {createSimpleTextContent};


const createTopic = {
  type: ResponseType,
  description: 'mutation for ofbiz createTopic method',
  args:{newTopicId: {type: GraphQLString},newTopicDescription: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/createTopic?newTopicId=${args.newTopicId}&newTopicDescription=${args.newTopicDescription}&`, null, req);
  }
};
export {createTopic};


const createWebPreferenceType = {
  type: ResponseType,
  description: 'mutation for ofbiz createWebPreferenceType method',
  args:{contentId: {type: GraphQLString},description: {type: GraphQLString},contentRevisionSeqId: {type: GraphQLString},itemContentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/createWebPreferenceType?contentId=${args.contentId}&description=${args.description}&contentRevisionSeqId=${args.contentRevisionSeqId}&itemContentId=${args.itemContentId}&`, null, req);
  }
};
export {createWebPreferenceType};


const deactivateAssocs = {
  type: ResponseType,
  description: 'mutation for ofbiz deactivateAssocs method',
  args:{contentAssocTypeId: {type: GraphQLString},contentIdTo: {type: GraphQLString},fromDate: {type: GraphQLString},mapKey: {type: GraphQLString},activeContentId: {type: GraphQLString},contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/deactivateAssocs?contentAssocTypeId=${args.contentAssocTypeId}&contentIdTo=${args.contentIdTo}&fromDate=${args.fromDate}&mapKey=${args.mapKey}&activeContentId=${args.activeContentId}&contentId=${args.contentId}&`, null, req);
  }
};
export {deactivateAssocs};


const deactivateContentAssoc = {
  type: ResponseType,
  description: 'mutation for ofbiz deactivateContentAssoc method',
  args:{fromDate: {type: GraphQLString},contentAssocTypeId: {type: GraphQLString},contentIdTo: {type: GraphQLString},contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/deactivateContentAssoc?fromDate=${args.fromDate}&contentAssocTypeId=${args.contentAssocTypeId}&contentIdTo=${args.contentIdTo}&contentId=${args.contentId}&`, null, req);
  }
};
export {deactivateContentAssoc};


const decrementContentChildStats = {
  type: ResponseType,
  description: 'mutation for ofbiz decrementContentChildStats method',
  args:{contentId: {type: GraphQLString},contentAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/decrementContentChildStats?contentId=${args.contentId}&contentAssocTypeId=${args.contentAssocTypeId}&`, null, req);
  }
};
export {decrementContentChildStats};


const deleteWebPreferenceType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteWebPreferenceType method',
  args:{webPreferenceTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/deleteWebPreferenceType?webPreferenceTypeId=${args.webPreferenceTypeId}&`, null, req);
  }
};
export {deleteWebPreferenceType};


const findAssocContent = {
  type: ResponseType,
  description: 'mutation for ofbiz findAssocContent method',
  args:{contentId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},ContentAssoc: {type: GraphQLString},ownerContentId: {type: GraphQLString},contentIdTo: {type: GraphQLString},upperCoordinate: {type: GraphQLInt},leftCoordinate: {type: GraphQLInt},contentTypeId: {type: GraphQLString},description: {type: GraphQLString},mimeTypeId: {type: GraphQLString},childLeafCount: {type: GraphQLInt},privilegeEnumId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},contentAssocPredicateId: {type: GraphQLString},contentAssocTypeId: {type: GraphQLString},dataResourceId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},mapKey: {type: GraphQLString},serviceName: {type: GraphQLString},customMethodId: {type: GraphQLString},characterSetId: {type: GraphQLString},contentName: {type: GraphQLInt},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString},Content: {type: GraphQLString},decoratorContentId: {type: GraphQLString},childBranchCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/findAssocContent?contentId=${args.contentId}&mapKeys=${args.mapKeys}&sequenceNum=${args.sequenceNum}&ContentAssoc=${args.ContentAssoc}&ownerContentId=${args.ownerContentId}&contentIdTo=${args.contentIdTo}&upperCoordinate=${args.upperCoordinate}&leftCoordinate=${args.leftCoordinate}&contentTypeId=${args.contentTypeId}&description=${args.description}&mimeTypeId=${args.mimeTypeId}&childLeafCount=${args.childLeafCount}&privilegeEnumId=${args.privilegeEnumId}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&contentAssocPredicateId=${args.contentAssocPredicateId}&contentAssocTypeId=${args.contentAssocTypeId}&dataResourceId=${args.dataResourceId}&createdByUserLogin=${args.createdByUserLogin}&templateDataResourceId=${args.templateDataResourceId}&lastModifiedDate=${args.lastModifiedDate}&instanceOfContentId=${args.instanceOfContentId}&mapKey=${args.mapKey}&serviceName=${args.serviceName}&customMethodId=${args.customMethodId}&characterSetId=${args.characterSetId}&contentName=${args.contentName}&thruDate=${args.thruDate}&fromDate=${args.fromDate}&createdDate=${args.createdDate}&statusId=${args.statusId}&localeString=${args.localeString}&Content=${args.Content}&decoratorContentId=${args.decoratorContentId}&childBranchCount=${args.childBranchCount}&`, null, req);
  }
};
export {findAssocContent};


const findContentParents = {
  type: ResponseType,
  description: 'mutation for ofbiz findContentParents method',
  args:{contentAssocTypeId: {type: GraphQLString},contentId: {type: GraphQLString},direction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/findContentParents?contentAssocTypeId=${args.contentAssocTypeId}&contentId=${args.contentId}&direction=${args.direction}&`, null, req);
  }
};
export {findContentParents};


const findSubNodes = {
  type: ResponseType,
  description: 'mutation for ofbiz findSubNodes method',
  args:{contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/findSubNodes?contentId=${args.contentId}&`, null, req);
  }
};
export {findSubNodes};


const followNodeChildren = {
  type: ResponseType,
  description: 'mutation for ofbiz followNodeChildren method',
  args:{contentId: {type: GraphQLString},serviceName: {type: GraphQLString},contentAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/followNodeChildren?contentId=${args.contentId}&serviceName=${args.serviceName}&contentAssocTypeId=${args.contentAssocTypeId}&`, null, req);
  }
};
export {followNodeChildren};


const genCompDocInstance = {
  type: ResponseType,
  description: 'mutation for ofbiz genCompDocInstance method',
  args:{instanceOfContentId: {type: GraphQLString},rootInstanceContentId: {type: GraphQLString},contentName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/genCompDocInstance?instanceOfContentId=${args.instanceOfContentId}&rootInstanceContentId=${args.rootInstanceContentId}&contentName=${args.contentName}&`, null, req);
  }
};
export {genCompDocInstance};


const generateBlogRssFeed = {
  type: ResponseType,
  description: 'mutation for ofbiz generateBlogRssFeed method',
  args:{entryLink: {type: GraphQLString},feedType: {type: GraphQLString},mainLink: {type: GraphQLString},blogContentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/generateBlogRssFeed?entryLink=${args.entryLink}&feedType=${args.feedType}&mainLink=${args.mainLink}&blogContentId=${args.blogContentId}&`, null, req);
  }
};
export {generateBlogRssFeed};


const genericContentPermission = {
  type: ResponseType,
  description: 'mutation for ofbiz genericContentPermission method',
  args:{contentPurposeTypeId: {type: GraphQLString},statusId: {type: GraphQLString},primaryPermission: {type: GraphQLString},ownerContentId: {type: GraphQLString},contentOperationId: {type: GraphQLString},contentIdTo: {type: GraphQLString},altPermission: {type: GraphQLString},contentIdFrom: {type: GraphQLString},contentId: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/genericContentPermission?contentPurposeTypeId=${args.contentPurposeTypeId}&statusId=${args.statusId}&primaryPermission=${args.primaryPermission}&ownerContentId=${args.ownerContentId}&contentOperationId=${args.contentOperationId}&contentIdTo=${args.contentIdTo}&altPermission=${args.altPermission}&contentIdFrom=${args.contentIdFrom}&contentId=${args.contentId}&resourceDescription=${args.resourceDescription}&mainAction=${args.mainAction}&`, null, req);
  }
};
export {genericContentPermission};


const genericDataResourcePermission = {
  type: ResponseType,
  description: 'mutation for ofbiz genericDataResourcePermission method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},dataResourceId: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/genericDataResourcePermission?primaryPermission=${args.primaryPermission}&altPermission=${args.altPermission}&dataResourceId=${args.dataResourceId}&resourceDescription=${args.resourceDescription}&mainAction=${args.mainAction}&`, null, req);
  }
};
export {genericDataResourcePermission};


const getApprovalsWithPermissions = {
  type: ResponseType,
  description: 'mutation for ofbiz getApprovalsWithPermissions method',
  args:{userLogin: {type: new GraphQLList(KeyValueInputType)},contentRevisionSeqId: {type: GraphQLString},rootContentId: {type: GraphQLString},checkPermission: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/getApprovalsWithPermissions?userLogin=${args.userLogin}&contentRevisionSeqId=${args.contentRevisionSeqId}&rootContentId=${args.rootContentId}&checkPermission=${args.checkPermission}&`, null, req);
  }
};
export {getApprovalsWithPermissions};


const getAssocAndContentAndDataResource = {
  type: ResponseType,
  description: 'mutation for ofbiz getAssocAndContentAndDataResource method',
  args:{fromDate: {type: GraphQLString},nullThruDatesOnly: {type: GraphQLBoolean},thruDateStr: {type: GraphQLString},fromDateStr: {type: GraphQLString},mapKey: {type: GraphQLString},contentId: {type: GraphQLString},direction: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/getAssocAndContentAndDataResource?assocTypes=${args.assocTypes}&fromDate=${args.fromDate}&nullThruDatesOnly=${args.nullThruDatesOnly}&thruDateStr=${args.thruDateStr}&fromDateStr=${args.fromDateStr}&mapKey=${args.mapKey}&contentId=${args.contentId}&contentTypes=${args.contentTypes}&direction=${args.direction}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {getAssocAndContentAndDataResource};


const getAssocAndContentAndDataResourceCache = {
  type: ResponseType,
  description: 'mutation for ofbiz getAssocAndContentAndDataResourceCache method',
  args:{fromDateStr: {type: GraphQLString},mapKey: {type: GraphQLString},contentId: {type: GraphQLString},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},nullThruDatesOnly: {type: GraphQLBoolean},contentAssocPredicateId: {type: GraphQLString},thruDateStr: {type: GraphQLString},contentTypesString: {type: GraphQLString},contentIdFrom: {type: GraphQLString},assocTypesString: {type: GraphQLString},direction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/getAssocAndContentAndDataResourceCache?fromDateStr=${args.fromDateStr}&mapKey=${args.mapKey}&contentId=${args.contentId}&thruDate=${args.thruDate}&assocTypes=${args.assocTypes}&fromDate=${args.fromDate}&nullThruDatesOnly=${args.nullThruDatesOnly}&contentAssocPredicateId=${args.contentAssocPredicateId}&thruDateStr=${args.thruDateStr}&contentTypesString=${args.contentTypesString}&contentIdFrom=${args.contentIdFrom}&assocTypesString=${args.assocTypesString}&contentTypes=${args.contentTypes}&direction=${args.direction}&`, null, req);
  }
};
export {getAssocAndContentAndDataResourceCache};


const getBlogEntry = {
  type: ResponseType,
  description: 'mutation for ofbiz getBlogEntry method',
  args:{blogContentId: {type: GraphQLString},contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/getBlogEntry?blogContentId=${args.blogContentId}&contentId=${args.contentId}&`, null, req);
  }
};
export {getBlogEntry};


const getContent = {
  type: ResponseType,
  description: 'mutation for ofbiz getContent method',
  args:{contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/getContent?contentId=${args.contentId}&`, null, req);
  }
};
export {getContent};


const getContentAndDataResource = {
  type: ResponseType,
  description: 'mutation for ofbiz getContentAndDataResource method',
  args:{contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/getContentAndDataResource?contentId=${args.contentId}&`, null, req);
  }
};
export {getContentAndDataResource};


const getDataResource = {
  type: ResponseType,
  description: 'mutation for ofbiz getDataResource method',
  args:{dataResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/getDataResource?dataResourceId=${args.dataResourceId}&`, null, req);
  }
};
export {getDataResource};


const getFinalApprovalStatus = {
  type: ResponseType,
  description: 'mutation for ofbiz getFinalApprovalStatus method',
  args:{contentId: {type: GraphQLString},contentRevisionSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/getFinalApprovalStatus?contentId=${args.contentId}&contentRevisionSeqId=${args.contentRevisionSeqId}&`, null, req);
  }
};
export {getFinalApprovalStatus};


const getMostRecentRevision = {
  type: ResponseType,
  description: 'mutation for ofbiz getMostRecentRevision method',
  args:{contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/getMostRecentRevision?contentId=${args.contentId}&`, null, req);
  }
};
export {getMostRecentRevision};


const getOwnedOrPublishedBlogEntries = {
  type: ResponseType,
  description: 'mutation for ofbiz getOwnedOrPublishedBlogEntries method',
  args:{userLogin: {type: new GraphQLList(KeyValueInputType)},contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/getOwnedOrPublishedBlogEntries?userLogin=${args.userLogin}&contentId=${args.contentId}&`, null, req);
  }
};
export {getOwnedOrPublishedBlogEntries};


const getPrefixedMembers = {
  type: ResponseType,
  description: 'mutation for ofbiz getPrefixedMembers method',
  args:{prefix: {type: GraphQLString},mapIn: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/getPrefixedMembers?prefix=${args.prefix}&mapIn=${args.mapIn}&`, null, req);
  }
};
export {getPrefixedMembers};


const getPublicForumMessage = {
  type: ResponseType,
  description: 'mutation for ofbiz getPublicForumMessage method',
  args:{contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/getPublicForumMessage?contentId=${args.contentId}&`, null, req);
  }
};
export {getPublicForumMessage};


const getSubContent = {
  type: ResponseType,
  description: 'mutation for ofbiz getSubContent method',
  args:{fromDate: {type: GraphQLString},mapKey: {type: GraphQLString},contentId: {type: GraphQLString},subContentId: {type: GraphQLString},assocTypesString: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/getSubContent?assocTypes=${args.assocTypes}&fromDate=${args.fromDate}&mapKey=${args.mapKey}&contentId=${args.contentId}&subContentId=${args.subContentId}&assocTypesString=${args.assocTypesString}&contentTypes=${args.contentTypes}&`, null, req);
  }
};
export {getSubContent};


const getSubContentWithPermCheck = {
  type: ResponseType,
  description: 'mutation for ofbiz getSubContentWithPermCheck method',
  args:{contentId: {type: GraphQLString},filterByDate: {type: GraphQLBoolean},contentAssocTypeId: {type: GraphQLString},contentOperationId: {type: GraphQLString},useCache: {type: GraphQLBoolean},mapKey: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/getSubContentWithPermCheck?contentId=${args.contentId}&filterByDate=${args.filterByDate}&contentAssocTypeId=${args.contentAssocTypeId}&contentOperationId=${args.contentOperationId}&useCache=${args.useCache}&mapKey=${args.mapKey}&mainAction=${args.mainAction}&`, null, req);
  }
};
export {getSubContentWithPermCheck};


const getSubSubContentWithPermCheck = {
  type: ResponseType,
  description: 'mutation for ofbiz getSubSubContentWithPermCheck method',
  args:{contentId: {type: GraphQLString},filterByDate: {type: GraphQLBoolean},contentAssocTypeId: {type: GraphQLString},contentOperationId: {type: GraphQLString},useCache: {type: GraphQLBoolean},mapKey: {type: GraphQLString},subMapKey: {type: GraphQLString},mainAction: {type: GraphQLString},subContentAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/getSubSubContentWithPermCheck?contentId=${args.contentId}&filterByDate=${args.filterByDate}&contentAssocTypeId=${args.contentAssocTypeId}&contentOperationId=${args.contentOperationId}&useCache=${args.useCache}&mapKey=${args.mapKey}&subMapKey=${args.subMapKey}&mainAction=${args.mainAction}&subContentAssocTypeId=${args.subContentAssocTypeId}&`, null, req);
  }
};
export {getSubSubContentWithPermCheck};


const hasApprovalPermission = {
  type: ResponseType,
  description: 'mutation for ofbiz hasApprovalPermission method',
  args:{userLogin: {type: new GraphQLList(KeyValueInputType)},contentApprovalId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/hasApprovalPermission?userLogin=${args.userLogin}&contentApprovalId=${args.contentApprovalId}&`, null, req);
  }
};
export {hasApprovalPermission};


const incrementContentChildStats = {
  type: ResponseType,
  description: 'mutation for ofbiz incrementContentChildStats method',
  args:{contentId: {type: GraphQLString},contentAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/incrementContentChildStats?contentId=${args.contentId}&contentAssocTypeId=${args.contentAssocTypeId}&`, null, req);
  }
};
export {incrementContentChildStats};


const initContentChildCounts = {
  type: ResponseType,
  description: 'mutation for ofbiz initContentChildCounts method',
  args:{content: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/initContentChildCounts?content=${args.content}&`, null, req);
  }
};
export {initContentChildCounts};


const joinString = {
  type: ResponseType,
  description: 'mutation for ofbiz joinString method',
  args:{delimiter: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/joinString?inputList=${args.inputList}&delimiter=${args.delimiter}&`, null, req);
  }
};
export {joinString};


const linkContentToPubPt = {
  type: ResponseType,
  description: 'mutation for ofbiz linkContentToPubPt method',
  args:{contentIdTo: {type: GraphQLString},contentId: {type: GraphQLString},privilegeEnumId: {type: GraphQLString},statusId: {type: GraphQLString},contentAssocTypeId: {type: GraphQLString},publish: {type: GraphQLString},mapKey: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/linkContentToPubPt?contentIdTo=${args.contentIdTo}&contentId=${args.contentId}&privilegeEnumId=${args.privilegeEnumId}&statusId=${args.statusId}&contentAssocTypeId=${args.contentAssocTypeId}&publish=${args.publish}&mapKey=${args.mapKey}&`, null, req);
  }
};
export {linkContentToPubPt};


const persistCompDoc = {
  type: ResponseType,
  description: 'mutation for ofbiz persistCompDoc method',
  args:{caFromDate: {type: GraphQLString},surveyId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},caContentId: {type: GraphQLString},ownerContentId: {type: GraphQLString},imageData: {type: GraphQLString},upperCoordinate: {type: GraphQLInt},leftCoordinate: {type: GraphQLInt},mimeTypeId: {type: GraphQLString},rootDir: {type: GraphQLString},dataCategoryId: {type: GraphQLString},surveyResponseId: {type: GraphQLString},rootContentId: {type: GraphQLString},textData: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},contentAssocPredicateId: {type: GraphQLString},relatedDetailId: {type: GraphQLString},isPublic: {type: GraphQLString},objectInfo: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},deactivateExisting: {type: GraphQLString},dataResourceName: {type: GraphQLInt},targetOperationString: {type: GraphQLString},caContentAssocTypeId: {type: GraphQLString},caSequenceNum: {type: GraphQLInt},dataTemplateTypeId: {type: GraphQLString},forceElectronicText: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},contentPurposeString: {type: GraphQLString},mapKey: {type: GraphQLString},DataResource: {type: GraphQLString},characterSetId: {type: GraphQLString},_imageData_fileName: {type: GraphQLString},thruDate: {type: GraphQLString},userLogin: {type: new GraphQLList(KeyValueInputType)},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},displayFailCond: {type: GraphQLBoolean},localeString: {type: GraphQLString},Content: {type: GraphQLString},_imageData_contentType: {type: GraphQLString},caContentIdTo: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/persistCompDoc?caFromDate=${args.caFromDate}&surveyId=${args.surveyId}&sequenceNum=${args.sequenceNum}&caContentId=${args.caContentId}&ownerContentId=${args.ownerContentId}&imageData=${args.imageData}&upperCoordinate=${args.upperCoordinate}&leftCoordinate=${args.leftCoordinate}&mimeTypeId=${args.mimeTypeId}&rootDir=${args.rootDir}&roleTypeList=${args.roleTypeList}&dataCategoryId=${args.dataCategoryId}&surveyResponseId=${args.surveyResponseId}&rootContentId=${args.rootContentId}&textData=${args.textData}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&contentAssocPredicateId=${args.contentAssocPredicateId}&relatedDetailId=${args.relatedDetailId}&isPublic=${args.isPublic}&objectInfo=${args.objectInfo}&dataResourceTypeId=${args.dataResourceTypeId}&createdByUserLogin=${args.createdByUserLogin}&deactivateExisting=${args.deactivateExisting}&dataResourceName=${args.dataResourceName}&targetOperationString=${args.targetOperationString}&caContentAssocTypeId=${args.caContentAssocTypeId}&caSequenceNum=${args.caSequenceNum}&contentPurposeList=${args.contentPurposeList}&dataTemplateTypeId=${args.dataTemplateTypeId}&targetOperationList=${args.targetOperationList}&forceElectronicText=${args.forceElectronicText}&lastModifiedDate=${args.lastModifiedDate}&contentPurposeString=${args.contentPurposeString}&mapKey=${args.mapKey}&DataResource=${args.DataResource}&characterSetId=${args.characterSetId}&_imageData_fileName=${args._imageData_fileName}&thruDate=${args.thruDate}&userLogin=${args.userLogin}&createdDate=${args.createdDate}&statusId=${args.statusId}&displayFailCond=${args.displayFailCond}&localeString=${args.localeString}&Content=${args.Content}&_imageData_contentType=${args._imageData_contentType}&caContentIdTo=${args.caContentIdTo}&`, null, req);
  }
};
export {persistCompDoc};


const persistCompDocContent = {
  type: ResponseType,
  description: 'mutation for ofbiz persistCompDocContent method',
  args:{surveyId: {type: GraphQLString},imageData: {type: GraphQLString},mimeTypeId: {type: GraphQLString},rootDir: {type: GraphQLString},dataCategoryId: {type: GraphQLString},surveyResponseId: {type: GraphQLString},rootContentId: {type: GraphQLString},textData: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},relatedDetailId: {type: GraphQLString},isPublic: {type: GraphQLString},objectInfo: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},dataResourceName: {type: GraphQLInt},targetOperationString: {type: GraphQLString},dataTemplateTypeId: {type: GraphQLString},forceElectronicText: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},contentPurposeString: {type: GraphQLString},DataResource: {type: GraphQLString},characterSetId: {type: GraphQLString},_imageData_fileName: {type: GraphQLString},userLogin: {type: new GraphQLList(KeyValueInputType)},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},displayFailCond: {type: GraphQLBoolean},localeString: {type: GraphQLString},Content: {type: GraphQLString},_imageData_contentType: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/persistCompDocContent?surveyId=${args.surveyId}&imageData=${args.imageData}&mimeTypeId=${args.mimeTypeId}&rootDir=${args.rootDir}&dataCategoryId=${args.dataCategoryId}&surveyResponseId=${args.surveyResponseId}&rootContentId=${args.rootContentId}&textData=${args.textData}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&relatedDetailId=${args.relatedDetailId}&isPublic=${args.isPublic}&objectInfo=${args.objectInfo}&dataResourceTypeId=${args.dataResourceTypeId}&createdByUserLogin=${args.createdByUserLogin}&dataResourceName=${args.dataResourceName}&targetOperationString=${args.targetOperationString}&contentPurposeList=${args.contentPurposeList}&dataTemplateTypeId=${args.dataTemplateTypeId}&targetOperationList=${args.targetOperationList}&forceElectronicText=${args.forceElectronicText}&lastModifiedDate=${args.lastModifiedDate}&contentPurposeString=${args.contentPurposeString}&DataResource=${args.DataResource}&characterSetId=${args.characterSetId}&_imageData_fileName=${args._imageData_fileName}&userLogin=${args.userLogin}&createdDate=${args.createdDate}&statusId=${args.statusId}&displayFailCond=${args.displayFailCond}&localeString=${args.localeString}&Content=${args.Content}&_imageData_contentType=${args._imageData_contentType}&`, null, req);
  }
};
export {persistCompDocContent};


const persistCompDocPdf2Survey = {
  type: ResponseType,
  description: 'mutation for ofbiz persistCompDocPdf2Survey method',
  args:{surveyId: {type: GraphQLString},imageData: {type: GraphQLString},mimeTypeId: {type: GraphQLString},rootDir: {type: GraphQLString},dataCategoryId: {type: GraphQLString},surveyResponseId: {type: GraphQLString},rootContentId: {type: GraphQLString},textData: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},relatedDetailId: {type: GraphQLString},isPublic: {type: GraphQLString},objectInfo: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},dataResourceName: {type: GraphQLInt},targetOperationString: {type: GraphQLString},dataTemplateTypeId: {type: GraphQLString},forceElectronicText: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},contentPurposeString: {type: GraphQLString},DataResource: {type: GraphQLString},characterSetId: {type: GraphQLString},_imageData_fileName: {type: GraphQLString},userLogin: {type: new GraphQLList(KeyValueInputType)},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},displayFailCond: {type: GraphQLBoolean},localeString: {type: GraphQLString},Content: {type: GraphQLString},_imageData_contentType: {type: GraphQLString},pdfName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/persistCompDocPdf2Survey?surveyId=${args.surveyId}&imageData=${args.imageData}&mimeTypeId=${args.mimeTypeId}&rootDir=${args.rootDir}&dataCategoryId=${args.dataCategoryId}&surveyResponseId=${args.surveyResponseId}&rootContentId=${args.rootContentId}&textData=${args.textData}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&relatedDetailId=${args.relatedDetailId}&isPublic=${args.isPublic}&objectInfo=${args.objectInfo}&dataResourceTypeId=${args.dataResourceTypeId}&createdByUserLogin=${args.createdByUserLogin}&dataResourceName=${args.dataResourceName}&targetOperationString=${args.targetOperationString}&contentPurposeList=${args.contentPurposeList}&dataTemplateTypeId=${args.dataTemplateTypeId}&targetOperationList=${args.targetOperationList}&forceElectronicText=${args.forceElectronicText}&lastModifiedDate=${args.lastModifiedDate}&contentPurposeString=${args.contentPurposeString}&DataResource=${args.DataResource}&characterSetId=${args.characterSetId}&_imageData_fileName=${args._imageData_fileName}&userLogin=${args.userLogin}&createdDate=${args.createdDate}&statusId=${args.statusId}&displayFailCond=${args.displayFailCond}&localeString=${args.localeString}&Content=${args.Content}&_imageData_contentType=${args._imageData_contentType}&pdfName=${args.pdfName}&`, null, req);
  }
};
export {persistCompDocPdf2Survey};


const persistContentAndAssoc = {
  type: ResponseType,
  description: 'mutation for ofbiz persistContentAndAssoc method',
  args:{caFromDate: {type: GraphQLString},surveyId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},caContentId: {type: GraphQLString},ownerContentId: {type: GraphQLString},imageData: {type: GraphQLString},upperCoordinate: {type: GraphQLInt},leftCoordinate: {type: GraphQLInt},mimeTypeId: {type: GraphQLString},rootDir: {type: GraphQLString},dataCategoryId: {type: GraphQLString},surveyResponseId: {type: GraphQLString},textData: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},contentAssocPredicateId: {type: GraphQLString},relatedDetailId: {type: GraphQLString},isPublic: {type: GraphQLString},objectInfo: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},deactivateExisting: {type: GraphQLString},dataResourceName: {type: GraphQLInt},targetOperationString: {type: GraphQLString},caContentAssocTypeId: {type: GraphQLString},caSequenceNum: {type: GraphQLInt},dataTemplateTypeId: {type: GraphQLString},forceElectronicText: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},contentPurposeString: {type: GraphQLString},mapKey: {type: GraphQLString},DataResource: {type: GraphQLString},characterSetId: {type: GraphQLString},_imageData_fileName: {type: GraphQLString},thruDate: {type: GraphQLString},userLogin: {type: new GraphQLList(KeyValueInputType)},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},displayFailCond: {type: GraphQLBoolean},localeString: {type: GraphQLString},Content: {type: GraphQLString},_imageData_contentType: {type: GraphQLString},caContentIdTo: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/persistContentAndAssoc?caFromDate=${args.caFromDate}&surveyId=${args.surveyId}&sequenceNum=${args.sequenceNum}&caContentId=${args.caContentId}&ownerContentId=${args.ownerContentId}&imageData=${args.imageData}&upperCoordinate=${args.upperCoordinate}&leftCoordinate=${args.leftCoordinate}&mimeTypeId=${args.mimeTypeId}&rootDir=${args.rootDir}&roleTypeList=${args.roleTypeList}&dataCategoryId=${args.dataCategoryId}&surveyResponseId=${args.surveyResponseId}&textData=${args.textData}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&contentAssocPredicateId=${args.contentAssocPredicateId}&relatedDetailId=${args.relatedDetailId}&isPublic=${args.isPublic}&objectInfo=${args.objectInfo}&dataResourceTypeId=${args.dataResourceTypeId}&createdByUserLogin=${args.createdByUserLogin}&deactivateExisting=${args.deactivateExisting}&dataResourceName=${args.dataResourceName}&targetOperationString=${args.targetOperationString}&caContentAssocTypeId=${args.caContentAssocTypeId}&caSequenceNum=${args.caSequenceNum}&contentPurposeList=${args.contentPurposeList}&dataTemplateTypeId=${args.dataTemplateTypeId}&targetOperationList=${args.targetOperationList}&forceElectronicText=${args.forceElectronicText}&lastModifiedDate=${args.lastModifiedDate}&contentPurposeString=${args.contentPurposeString}&mapKey=${args.mapKey}&DataResource=${args.DataResource}&characterSetId=${args.characterSetId}&_imageData_fileName=${args._imageData_fileName}&thruDate=${args.thruDate}&userLogin=${args.userLogin}&createdDate=${args.createdDate}&statusId=${args.statusId}&displayFailCond=${args.displayFailCond}&localeString=${args.localeString}&Content=${args.Content}&_imageData_contentType=${args._imageData_contentType}&caContentIdTo=${args.caContentIdTo}&`, null, req);
  }
};
export {persistContentAndAssoc};


const persistContentRevisionAndItem = {
  type: ResponseType,
  description: 'mutation for ofbiz persistContentRevisionAndItem method',
  args:{oldDataResourceId: {type: GraphQLString},comments: {type: GraphQLString},contentId: {type: GraphQLString},newDataResourceId: {type: GraphQLString},itemContentId: {type: GraphQLString},committedByPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/persistContentRevisionAndItem?oldDataResourceId=${args.oldDataResourceId}&comments=${args.comments}&contentId=${args.contentId}&newDataResourceId=${args.newDataResourceId}&itemContentId=${args.itemContentId}&committedByPartyId=${args.committedByPartyId}&`, null, req);
  }
};
export {persistContentRevisionAndItem};


const persistContentWithRevision = {
  type: ResponseType,
  description: 'mutation for ofbiz persistContentWithRevision method',
  args:{masterRevisionContentId: {type: GraphQLString},caFromDate: {type: GraphQLString},surveyId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},caContentId: {type: GraphQLString},ownerContentId: {type: GraphQLString},imageData: {type: GraphQLString},upperCoordinate: {type: GraphQLInt},leftCoordinate: {type: GraphQLInt},mimeTypeId: {type: GraphQLString},rootDir: {type: GraphQLString},dataCategoryId: {type: GraphQLString},surveyResponseId: {type: GraphQLString},textData: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},contentAssocPredicateId: {type: GraphQLString},relatedDetailId: {type: GraphQLString},isPublic: {type: GraphQLString},objectInfo: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},deactivateExisting: {type: GraphQLString},dataResourceName: {type: GraphQLInt},targetOperationString: {type: GraphQLString},caContentAssocTypeId: {type: GraphQLString},caSequenceNum: {type: GraphQLInt},dataTemplateTypeId: {type: GraphQLString},forceElectronicText: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},contentPurposeString: {type: GraphQLString},mapKey: {type: GraphQLString},DataResource: {type: GraphQLString},characterSetId: {type: GraphQLString},_imageData_fileName: {type: GraphQLString},thruDate: {type: GraphQLString},userLogin: {type: new GraphQLList(KeyValueInputType)},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},displayFailCond: {type: GraphQLBoolean},localeString: {type: GraphQLString},Content: {type: GraphQLString},_imageData_contentType: {type: GraphQLString},caContentIdTo: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/persistContentWithRevision?masterRevisionContentId=${args.masterRevisionContentId}&caFromDate=${args.caFromDate}&surveyId=${args.surveyId}&sequenceNum=${args.sequenceNum}&caContentId=${args.caContentId}&ownerContentId=${args.ownerContentId}&imageData=${args.imageData}&upperCoordinate=${args.upperCoordinate}&leftCoordinate=${args.leftCoordinate}&mimeTypeId=${args.mimeTypeId}&rootDir=${args.rootDir}&roleTypeList=${args.roleTypeList}&dataCategoryId=${args.dataCategoryId}&surveyResponseId=${args.surveyResponseId}&textData=${args.textData}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&contentAssocPredicateId=${args.contentAssocPredicateId}&relatedDetailId=${args.relatedDetailId}&isPublic=${args.isPublic}&objectInfo=${args.objectInfo}&dataResourceTypeId=${args.dataResourceTypeId}&createdByUserLogin=${args.createdByUserLogin}&deactivateExisting=${args.deactivateExisting}&dataResourceName=${args.dataResourceName}&targetOperationString=${args.targetOperationString}&caContentAssocTypeId=${args.caContentAssocTypeId}&caSequenceNum=${args.caSequenceNum}&contentPurposeList=${args.contentPurposeList}&dataTemplateTypeId=${args.dataTemplateTypeId}&targetOperationList=${args.targetOperationList}&forceElectronicText=${args.forceElectronicText}&lastModifiedDate=${args.lastModifiedDate}&contentPurposeString=${args.contentPurposeString}&mapKey=${args.mapKey}&DataResource=${args.DataResource}&characterSetId=${args.characterSetId}&_imageData_fileName=${args._imageData_fileName}&thruDate=${args.thruDate}&userLogin=${args.userLogin}&createdDate=${args.createdDate}&statusId=${args.statusId}&displayFailCond=${args.displayFailCond}&localeString=${args.localeString}&Content=${args.Content}&_imageData_contentType=${args._imageData_contentType}&caContentIdTo=${args.caContentIdTo}&`, null, req);
  }
};
export {persistContentWithRevision};


const persistDataResourceAndData = {
  type: ResponseType,
  description: 'mutation for ofbiz persistDataResourceAndData method',
  args:{surveyId: {type: GraphQLString},imageData: {type: GraphQLString},mimeTypeId: {type: GraphQLString},rootDir: {type: GraphQLString},dataCategoryId: {type: GraphQLString},surveyResponseId: {type: GraphQLString},textData: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},relatedDetailId: {type: GraphQLString},isPublic: {type: GraphQLString},objectInfo: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},dataResourceName: {type: GraphQLInt},targetOperationString: {type: GraphQLString},dataTemplateTypeId: {type: GraphQLString},forceElectronicText: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},contentPurposeString: {type: GraphQLString},DataResource: {type: GraphQLString},characterSetId: {type: GraphQLString},_imageData_fileName: {type: GraphQLString},userLogin: {type: new GraphQLList(KeyValueInputType)},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},displayFailCond: {type: GraphQLBoolean},localeString: {type: GraphQLString},Content: {type: GraphQLString},_imageData_contentType: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/persistDataResourceAndData?surveyId=${args.surveyId}&imageData=${args.imageData}&mimeTypeId=${args.mimeTypeId}&rootDir=${args.rootDir}&dataCategoryId=${args.dataCategoryId}&surveyResponseId=${args.surveyResponseId}&textData=${args.textData}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&relatedDetailId=${args.relatedDetailId}&isPublic=${args.isPublic}&objectInfo=${args.objectInfo}&dataResourceTypeId=${args.dataResourceTypeId}&createdByUserLogin=${args.createdByUserLogin}&dataResourceName=${args.dataResourceName}&targetOperationString=${args.targetOperationString}&contentPurposeList=${args.contentPurposeList}&dataTemplateTypeId=${args.dataTemplateTypeId}&targetOperationList=${args.targetOperationList}&forceElectronicText=${args.forceElectronicText}&lastModifiedDate=${args.lastModifiedDate}&contentPurposeString=${args.contentPurposeString}&DataResource=${args.DataResource}&characterSetId=${args.characterSetId}&_imageData_fileName=${args._imageData_fileName}&userLogin=${args.userLogin}&createdDate=${args.createdDate}&statusId=${args.statusId}&displayFailCond=${args.displayFailCond}&localeString=${args.localeString}&Content=${args.Content}&_imageData_contentType=${args._imageData_contentType}&`, null, req);
  }
};
export {persistDataResourceAndData};


const prepForApproval = {
  type: ResponseType,
  description: 'mutation for ofbiz prepForApproval method',
  args:{rootContentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/prepForApproval?rootContentId=${args.rootContentId}&`, null, req);
  }
};
export {prepForApproval};


const publishContent = {
  type: ResponseType,
  description: 'mutation for ofbiz publishContent method',
  args:{content: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/publishContent?content=${args.content}&`, null, req);
  }
};
export {publishContent};


const removeDataCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz removeDataCategory method',
  args:{dataCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/removeDataCategory?dataCategoryId=${args.dataCategoryId}&`, null, req);
  }
};
export {removeDataCategory};


const removeDataResourceAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz removeDataResourceAttribute method',
  args:{dataResourceId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/removeDataResourceAttribute?dataResourceId=${args.dataResourceId}&attrName=${args.attrName}&`, null, req);
  }
};
export {removeDataResourceAttribute};


const removeDataResourceRole = {
  type: ResponseType,
  description: 'mutation for ofbiz removeDataResourceRole method',
  args:{fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},dataResourceId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/removeDataResourceRole?fromDate=${args.fromDate}&roleTypeId=${args.roleTypeId}&dataResourceId=${args.dataResourceId}&partyId=${args.partyId}&`, null, req);
  }
};
export {removeDataResourceRole};


const renderCompDocPdf = {
  type: ResponseType,
  description: 'mutation for ofbiz renderCompDocPdf method',
  args:{contentId: {type: GraphQLString},rootDir: {type: GraphQLString},contentRevisionSeqId: {type: GraphQLString},https: {type: GraphQLString},locale: {type: GraphQLString},webSiteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/renderCompDocPdf?contentId=${args.contentId}&rootDir=${args.rootDir}&contentRevisionSeqId=${args.contentRevisionSeqId}&https=${args.https}&locale=${args.locale}&webSiteId=${args.webSiteId}&`, null, req);
  }
};
export {renderCompDocPdf};


const renderContentAsText = {
  type: ResponseType,
  description: 'mutation for ofbiz renderContentAsText method',
  args:{templateContext: {type: GraphQLString},outWriter: {type: GraphQLString},contentId: {type: GraphQLString},mimeTypeId: {type: GraphQLString},subContentDataResourceView: {type: new GraphQLList(KeyValueInputType)},locale: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/renderContentAsText?templateContext=${args.templateContext}&outWriter=${args.outWriter}&contentId=${args.contentId}&mimeTypeId=${args.mimeTypeId}&subContentDataResourceView=${args.subContentDataResourceView}&locale=${args.locale}&`, null, req);
  }
};
export {renderContentAsText};


const renderContentPdf = {
  type: ResponseType,
  description: 'mutation for ofbiz renderContentPdf method',
  args:{contentId: {type: GraphQLString},rootDir: {type: GraphQLString},contentRevisionSeqId: {type: GraphQLString},https: {type: GraphQLString},locale: {type: GraphQLString},webSiteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/renderContentPdf?contentId=${args.contentId}&rootDir=${args.rootDir}&contentRevisionSeqId=${args.contentRevisionSeqId}&https=${args.https}&locale=${args.locale}&webSiteId=${args.webSiteId}&`, null, req);
  }
};
export {renderContentPdf};


const renderDataResourceAsText = {
  type: ResponseType,
  description: 'mutation for ofbiz renderDataResourceAsText method',
  args:{templateContext: {type: GraphQLString},outWriter: {type: GraphQLString},dataResourceId: {type: GraphQLString},mimeTypeId: {type: GraphQLString},subContentDataResourceView: {type: new GraphQLList(KeyValueInputType)},locale: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/renderDataResourceAsText?templateContext=${args.templateContext}&outWriter=${args.outWriter}&dataResourceId=${args.dataResourceId}&mimeTypeId=${args.mimeTypeId}&subContentDataResourceView=${args.subContentDataResourceView}&locale=${args.locale}&`, null, req);
  }
};
export {renderDataResourceAsText};


const renderSubContentAsText = {
  type: ResponseType,
  description: 'mutation for ofbiz renderSubContentAsText method',
  args:{templateContext: {type: GraphQLString},outWriter: {type: GraphQLString},fromDate: {type: GraphQLString},contentId: {type: GraphQLString},mapKey: {type: GraphQLString},mimeTypeId: {type: GraphQLString},subContentId: {type: GraphQLString},subContentDataResourceView: {type: new GraphQLList(KeyValueInputType)},locale: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/renderSubContentAsText?templateContext=${args.templateContext}&outWriter=${args.outWriter}&fromDate=${args.fromDate}&contentId=${args.contentId}&mapKey=${args.mapKey}&mimeTypeId=${args.mimeTypeId}&subContentId=${args.subContentId}&subContentDataResourceView=${args.subContentDataResourceView}&locale=${args.locale}&`, null, req);
  }
};
export {renderSubContentAsText};


const resequence = {
  type: ResponseType,
  description: 'mutation for ofbiz resequence method',
  args:{contentIdTo: {type: GraphQLString},contentAssocTypeId: {type: GraphQLString},contentId: {type: GraphQLString},dir: {type: GraphQLString},seqInc: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/resequence?contentIdTo=${args.contentIdTo}&typeList=${args.typeList}&contentAssocTypeId=${args.contentAssocTypeId}&contentId=${args.contentId}&dir=${args.dir}&seqInc=${args.seqInc}&`, null, req);
  }
};
export {resequence};


const resetToOutlineMode = {
  type: ResponseType,
  description: 'mutation for ofbiz resetToOutlineMode method',
  args:{contentId: {type: GraphQLString},pageMode: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/resetToOutlineMode?contentId=${args.contentId}&pageMode=${args.pageMode}&`, null, req);
  }
};
export {resetToOutlineMode};


const splitString = {
  type: ResponseType,
  description: 'mutation for ofbiz splitString method',
  args:{delimiter: {type: GraphQLString},inputString: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/splitString?delimiter=${args.delimiter}&inputString=${args.inputString}&`, null, req);
  }
};
export {splitString};


const traverseContent = {
  type: ResponseType,
  description: 'mutation for ofbiz traverseContent method',
  args:{contentId: {type: GraphQLString},followWhen: {type: GraphQLString},thruDateStr: {type: GraphQLString},pickWhen: {type: GraphQLString},fromDateStr: {type: GraphQLString},returnBeforePickWhen: {type: GraphQLString},returnAfterPickWhen: {type: GraphQLString},direction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/traverseContent?contentId=${args.contentId}&followWhen=${args.followWhen}&thruDateStr=${args.thruDateStr}&pickWhen=${args.pickWhen}&fromDateStr=${args.fromDateStr}&returnBeforePickWhen=${args.returnBeforePickWhen}&returnAfterPickWhen=${args.returnAfterPickWhen}&direction=${args.direction}&`, null, req);
  }
};
export {traverseContent};


const updateBlogEntry = {
  type: ResponseType,
  description: 'mutation for ofbiz updateBlogEntry method',
  args:{contentId: {type: GraphQLString},blogContentId: {type: GraphQLString},_uploadedFile_contentType: {type: GraphQLString},statusId: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},description: {type: GraphQLString},articleData: {type: GraphQLString},summaryData: {type: GraphQLString},uploadedFile: {type: GraphQLString},_uploadedFile_fileName: {type: GraphQLString},contentName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/updateBlogEntry?contentId=${args.contentId}&blogContentId=${args.blogContentId}&_uploadedFile_contentType=${args._uploadedFile_contentType}&statusId=${args.statusId}&templateDataResourceId=${args.templateDataResourceId}&description=${args.description}&articleData=${args.articleData}&summaryData=${args.summaryData}&uploadedFile=${args.uploadedFile}&_uploadedFile_fileName=${args._uploadedFile_fileName}&contentName=${args.contentName}&`, null, req);
  }
};
export {updateBlogEntry};


const updateContentChildStats = {
  type: ResponseType,
  description: 'mutation for ofbiz updateContentChildStats method',
  args:{contentId: {type: GraphQLString},contentAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/updateContentChildStats?contentId=${args.contentId}&contentAssocTypeId=${args.contentAssocTypeId}&`, null, req);
  }
};
export {updateContentChildStats};


const updateContentSubscription = {
  type: ResponseType,
  description: 'mutation for ofbiz updateContentSubscription method',
  args:{useTimeUomId: {type: GraphQLString},useTime: {type: GraphQLInt},partyId: {type: GraphQLString},useRoleTypeId: {type: GraphQLString},contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/updateContentSubscription?useTimeUomId=${args.useTimeUomId}&useTime=${args.useTime}&partyId=${args.partyId}&useRoleTypeId=${args.useRoleTypeId}&contentId=${args.contentId}&`, null, req);
  }
};
export {updateContentSubscription};


const updateContentSubscriptionByOrder = {
  type: ResponseType,
  description: 'mutation for ofbiz updateContentSubscriptionByOrder method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/updateContentSubscriptionByOrder?orderId=${args.orderId}&`, null, req);
  }
};
export {updateContentSubscriptionByOrder};


const updateContentSubscriptionByProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz updateContentSubscriptionByProduct method',
  args:{quantity: {type: GraphQLInt},productId: {type: GraphQLString},partyId: {type: GraphQLString},orderCreatedDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/updateContentSubscriptionByProduct?quantity=${args.quantity}&productId=${args.productId}&partyId=${args.partyId}&orderCreatedDate=${args.orderCreatedDate}&`, null, req);
  }
};
export {updateContentSubscriptionByProduct};


const updateDataCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz updateDataCategory method',
  args:{dataCategoryId: {type: GraphQLString},parentCategoryId: {type: GraphQLString},categoryName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/updateDataCategory?dataCategoryId=${args.dataCategoryId}&parentCategoryId=${args.parentCategoryId}&categoryName=${args.categoryName}&`, null, req);
  }
};
export {updateDataCategory};


const updateDataResourceAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz updateDataResourceAttribute method',
  args:{dataResourceId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/updateDataResourceAttribute?dataResourceId=${args.dataResourceId}&attrName=${args.attrName}&attrDescription=${args.attrDescription}&attrValue=${args.attrValue}&`, null, req);
  }
};
export {updateDataResourceAttribute};


const updateDataResourceRole = {
  type: ResponseType,
  description: 'mutation for ofbiz updateDataResourceRole method',
  args:{fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},dataResourceId: {type: GraphQLString},partyId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/updateDataResourceRole?fromDate=${args.fromDate}&roleTypeId=${args.roleTypeId}&dataResourceId=${args.dataResourceId}&partyId=${args.partyId}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {updateDataResourceRole};


const updateDownloadContent = {
  type: ResponseType,
  description: 'mutation for ofbiz updateDownloadContent method',
  args:{file: {type: GraphQLString},fileDataResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/updateDownloadContent?file=${args.file}&fileDataResourceId=${args.fileDataResourceId}&`, null, req);
  }
};
export {updateDownloadContent};


const updateEmailContent = {
  type: ResponseType,
  description: 'mutation for ofbiz updateEmailContent method',
  args:{plainBodyDataResourceId: {type: GraphQLString},htmlBodyDataResourceId: {type: GraphQLString},htmlBody: {type: GraphQLString},subjectDataResourceId: {type: GraphQLString},subject: {type: GraphQLString},plainBody: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/updateEmailContent?plainBodyDataResourceId=${args.plainBodyDataResourceId}&htmlBodyDataResourceId=${args.htmlBodyDataResourceId}&htmlBody=${args.htmlBody}&subjectDataResourceId=${args.subjectDataResourceId}&subject=${args.subject}&plainBody=${args.plainBody}&`, null, req);
  }
};
export {updateEmailContent};


const updateImage = {
  type: ResponseType,
  description: 'mutation for ofbiz updateImage method',
  args:{imageData: {type: GraphQLString},dataResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/updateImage?imageData=${args.imageData}&dataResourceId=${args.dataResourceId}&`, null, req);
  }
};
export {updateImage};


const updateOrRemove = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrRemove method',
  args:{entityName: {type: GraphQLString},pkFieldCount: {type: GraphQLString},fieldName0: {type: GraphQLString},fieldName2: {type: GraphQLString},fieldName1: {type: GraphQLString},fieldName3: {type: GraphQLString},action: {type: GraphQLString},fieldValue3: {type: GraphQLString},fieldValue2: {type: GraphQLString},fieldValue1: {type: GraphQLString},fieldValue0: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/updateOrRemove?entityName=${args.entityName}&pkFieldCount=${args.pkFieldCount}&fieldName0=${args.fieldName0}&fieldName2=${args.fieldName2}&fieldName1=${args.fieldName1}&fieldName3=${args.fieldName3}&action=${args.action}&fieldValue3=${args.fieldValue3}&fieldValue2=${args.fieldValue2}&fieldValue1=${args.fieldValue1}&fieldValue0=${args.fieldValue0}&`, null, req);
  }
};
export {updateOrRemove};


const updatePageType = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePageType method',
  args:{contentId: {type: GraphQLString},pageMode: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/updatePageType?contentId=${args.contentId}&pageMode=${args.pageMode}&`, null, req);
  }
};
export {updatePageType};


const updateSimpleTextContent = {
  type: ResponseType,
  description: 'mutation for ofbiz updateSimpleTextContent method',
  args:{text: {type: GraphQLString},textDataResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/updateSimpleTextContent?text=${args.text}&textDataResourceId=${args.textDataResourceId}&`, null, req);
  }
};
export {updateSimpleTextContent};


const updateSiteRoles = {
  type: ResponseType,
  description: 'mutation for ofbiz updateSiteRoles method',
  args:{blogPublisher: {type: GraphQLString},blogAuthorFromDate: {type: GraphQLString},blogAdmin: {type: GraphQLString},blogEditorFromDate: {type: GraphQLString},blogAdminFromDate: {type: GraphQLString},contentId: {type: GraphQLString},partyId: {type: GraphQLString},blogUser: {type: GraphQLString},blogUserFromDate: {type: GraphQLString},blogPublisherFromDate: {type: GraphQLString},blogEditor: {type: GraphQLString},blogAuthor: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/updateSiteRoles?blogPublisher=${args.blogPublisher}&blogAuthorFromDate=${args.blogAuthorFromDate}&blogAdmin=${args.blogAdmin}&blogEditorFromDate=${args.blogEditorFromDate}&blogAdminFromDate=${args.blogAdminFromDate}&contentId=${args.contentId}&partyId=${args.partyId}&blogUser=${args.blogUser}&blogUserFromDate=${args.blogUserFromDate}&blogPublisherFromDate=${args.blogPublisherFromDate}&blogEditor=${args.blogEditor}&blogAuthor=${args.blogAuthor}&`, null, req);
  }
};
export {updateSiteRoles};


const updateSiteRolesDyn = {
  type: ResponseType,
  description: 'mutation for ofbiz updateSiteRolesDyn method',
  args:{contentId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/updateSiteRolesDyn?contentId=${args.contentId}&partyId=${args.partyId}&`, null, req);
  }
};
export {updateSiteRolesDyn};


const updateWebPreferenceType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateWebPreferenceType method',
  args:{webPreferenceTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/updateWebPreferenceType?webPreferenceTypeId=${args.webPreferenceTypeId}&description=${args.description}&`, null, req);
  }
};
export {updateWebPreferenceType};


const uploadFileInterface = {
  type: ResponseType,
  description: 'mutation for ofbiz uploadFileInterface method',
  args:{_uploadedFile_contentType: {type: GraphQLString},uploadedFile: {type: GraphQLString},_uploadedFile_fileName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/uploadFileInterface?_uploadedFile_contentType=${args._uploadedFile_contentType}&uploadedFile=${args.uploadedFile}&_uploadedFile_fileName=${args._uploadedFile_fileName}&`, null, req);
  }
};
export {uploadFileInterface};


const urlEncodeArgs = {
  type: ResponseType,
  description: 'mutation for ofbiz urlEncodeArgs method',
  args:{mapIn: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contents/urlEncodeArgs?mapIn=${args.mapIn}&`, null, req);
  }
};
export {urlEncodeArgs};
