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


const buildPdfFromSurveyResponse = {
  type: GraphQLString,
  description: 'mutation for ofbiz buildPdfFromSurveyResponse method',
  args:{surveyResponseId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/buildPdfFromSurveyResponse?surveyResponseId=${args.surveyResponseId}`, null, req);
  }
};
export {buildPdfFromSurveyResponse};


const buildSurveyFromPdf = {
  type: GraphQLString,
  description: 'mutation for ofbiz buildSurveyFromPdf method',
  args:{surveyId: {type: GraphQLString},surveyName: {type: GraphQLString},inputByteBuffer: {type: GraphQLString},contentId: {type: GraphQLString},pdfFileNameIn: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/buildSurveyFromPdf?surveyId=${args.surveyId}surveyName=${args.surveyName}inputByteBuffer=${args.inputByteBuffer}contentId=${args.contentId}pdfFileNameIn=${args.pdfFileNameIn}`, null, req);
  }
};
export {buildSurveyFromPdf};


const buildSurveyQuestionsAndAnswers = {
  type: GraphQLString,
  description: 'mutation for ofbiz buildSurveyQuestionsAndAnswers method',
  args:{surveyResponseId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/buildSurveyQuestionsAndAnswers?surveyResponseId=${args.surveyResponseId}`, null, req);
  }
};
export {buildSurveyQuestionsAndAnswers};


const buildSurveyResponseFromPdf = {
  type: GraphQLString,
  description: 'mutation for ofbiz buildSurveyResponseFromPdf method',
  args:{surveyId: {type: GraphQLString},inputByteBuffer: {type: GraphQLString},contentId: {type: GraphQLString},pdfFileNameIn: {type: GraphQLString},partyId: {type: GraphQLString},surveyResponseId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/buildSurveyResponseFromPdf?surveyId=${args.surveyId}inputByteBuffer=${args.inputByteBuffer}contentId=${args.contentId}pdfFileNameIn=${args.pdfFileNameIn}partyId=${args.partyId}surveyResponseId=${args.surveyResponseId}`, null, req);
  }
};
export {buildSurveyResponseFromPdf};


const cloneSurvey = {
  type: GraphQLString,
  description: 'mutation for ofbiz cloneSurvey method',
  args:{surveyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/cloneSurvey?surveyId=${args.surveyId}`, null, req);
  }
};
export {cloneSurvey};


const createSurvey = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSurvey method',
  args:{isAnonymous: {type: GraphQLString},comments: {type: GraphQLString},surveyName: {type: GraphQLString},allowMultiple: {type: GraphQLString},responseService: {type: GraphQLString},description: {type: GraphQLString},acroFormContentId: {type: GraphQLString},allowUpdate: {type: GraphQLString},submitCaption: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/createSurvey?isAnonymous=${args.isAnonymous}comments=${args.comments}surveyName=${args.surveyName}allowMultiple=${args.allowMultiple}responseService=${args.responseService}description=${args.description}acroFormContentId=${args.acroFormContentId}allowUpdate=${args.allowUpdate}submitCaption=${args.submitCaption}`, null, req);
  }
};
export {createSurvey};


const createSurveyApplType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSurveyApplType method',
  args:{description: {type: GraphQLString},surveyApplTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/createSurveyApplType?description=${args.description}surveyApplTypeId=${args.surveyApplTypeId}`, null, req);
  }
};
export {createSurveyApplType};


const createSurveyMultiResp = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSurveyMultiResp method',
  args:{surveyId: {type: GraphQLString},multiRespTitle: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/createSurveyMultiResp?surveyId=${args.surveyId}multiRespTitle=${args.multiRespTitle}`, null, req);
  }
};
export {createSurveyMultiResp};


const createSurveyMultiRespColumn = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSurveyMultiRespColumn method',
  args:{surveyId: {type: GraphQLString},surveyMultiRespId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},columnTitle: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/createSurveyMultiRespColumn?surveyId=${args.surveyId}surveyMultiRespId=${args.surveyMultiRespId}sequenceNum=${args.sequenceNum}columnTitle=${args.columnTitle}`, null, req);
  }
};
export {createSurveyMultiRespColumn};


const createSurveyPage = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSurveyPage method',
  args:{surveyId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},pageName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/createSurveyPage?surveyId=${args.surveyId}sequenceNum=${args.sequenceNum}pageName=${args.pageName}`, null, req);
  }
};
export {createSurveyPage};


const createSurveyQuestion = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSurveyQuestion method',
  args:{surveyQuestionTypeId: {type: GraphQLString},enumTypeId: {type: GraphQLString},formatString: {type: GraphQLInt},surveyQuestionCategoryId: {type: GraphQLString},surveyId: {type: GraphQLString},question: {type: GraphQLString},hint: {type: GraphQLString},geoId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/createSurveyQuestion?surveyQuestionTypeId=${args.surveyQuestionTypeId}enumTypeId=${args.enumTypeId}formatString=${args.formatString}surveyQuestionCategoryId=${args.surveyQuestionCategoryId}surveyId=${args.surveyId}question=${args.question}hint=${args.hint}geoId=${args.geoId}description=${args.description}`, null, req);
  }
};
export {createSurveyQuestion};


const createSurveyQuestionAppl = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSurveyQuestionAppl method',
  args:{surveyQuestionId: {type: GraphQLString},surveyId: {type: GraphQLString},fromDate: {type: GraphQLString},withSurveyOptionSeqId: {type: GraphQLString},externalFieldRef: {type: GraphQLString},requiredField: {type: GraphQLString},sequenceNum: {type: GraphQLInt},withSurveyQuestionId: {type: GraphQLString},surveyPageSeqId: {type: GraphQLString},surveyMultiRespId: {type: GraphQLString},surveyMultiRespColId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/createSurveyQuestionAppl?surveyQuestionId=${args.surveyQuestionId}surveyId=${args.surveyId}fromDate=${args.fromDate}withSurveyOptionSeqId=${args.withSurveyOptionSeqId}externalFieldRef=${args.externalFieldRef}requiredField=${args.requiredField}sequenceNum=${args.sequenceNum}withSurveyQuestionId=${args.withSurveyQuestionId}surveyPageSeqId=${args.surveyPageSeqId}surveyMultiRespId=${args.surveyMultiRespId}surveyMultiRespColId=${args.surveyMultiRespColId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createSurveyQuestionAppl};


const createSurveyQuestionCategory = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSurveyQuestionCategory method',
  args:{description: {type: GraphQLString},parentCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/createSurveyQuestionCategory?description=${args.description}parentCategoryId=${args.parentCategoryId}`, null, req);
  }
};
export {createSurveyQuestionCategory};


const createSurveyQuestionOption = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSurveyQuestionOption method',
  args:{surveyQuestionId: {type: GraphQLString},amountBase: {type: GraphQLFloat},duration: {type: GraphQLInt},sequenceNum: {type: GraphQLInt},amountBaseUomId: {type: GraphQLString},durationUomId: {type: GraphQLString},description: {type: GraphQLString},weightFactor: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/createSurveyQuestionOption?surveyQuestionId=${args.surveyQuestionId}amountBase=${args.amountBase}duration=${args.duration}sequenceNum=${args.sequenceNum}amountBaseUomId=${args.amountBaseUomId}durationUomId=${args.durationUomId}description=${args.description}weightFactor=${args.weightFactor}`, null, req);
  }
};
export {createSurveyQuestionOption};


const createSurveyQuestionType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSurveyQuestionType method',
  args:{surveyQuestionTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/createSurveyQuestionType?surveyQuestionTypeId=${args.surveyQuestionTypeId}description=${args.description}`, null, req);
  }
};
export {createSurveyQuestionType};


const createSurveyResponse = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSurveyResponse method',
  args:{surveyId: {type: GraphQLString},answers: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},productStoreSurveyId: {type: GraphQLString},statusId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},orderId: {type: GraphQLString},generalFeedback: {type: GraphQLString},dataResourceId: {type: GraphQLString},partyId: {type: GraphQLString},surveyResponseId: {type: GraphQLString},responseDate: {type: GraphQLString},referenceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/createSurveyResponse?surveyId=${args.surveyId}answers=${args.answers}orderItemSeqId=${args.orderItemSeqId}productStoreSurveyId=${args.productStoreSurveyId}statusId=${args.statusId}lastModifiedDate=${args.lastModifiedDate}orderId=${args.orderId}generalFeedback=${args.generalFeedback}dataResourceId=${args.dataResourceId}partyId=${args.partyId}surveyResponseId=${args.surveyResponseId}responseDate=${args.responseDate}referenceId=${args.referenceId}`, null, req);
  }
};
export {createSurveyResponse};


const createSurveyTrigger = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSurveyTrigger method',
  args:{surveyId: {type: GraphQLString},surveyApplTypeId: {type: GraphQLString},fromDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/createSurveyTrigger?surveyId=${args.surveyId}surveyApplTypeId=${args.surveyApplTypeId}fromDate=${args.fromDate}thruDate=${args.thruDate}`, null, req);
  }
};
export {createSurveyTrigger};


const deleteSurvey = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSurvey method',
  args:{surveyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/deleteSurvey?surveyId=${args.surveyId}`, null, req);
  }
};
export {deleteSurvey};


const deleteSurveyApplType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSurveyApplType method',
  args:{surveyApplTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/deleteSurveyApplType?surveyApplTypeId=${args.surveyApplTypeId}`, null, req);
  }
};
export {deleteSurveyApplType};


const deleteSurveyMultiResp = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSurveyMultiResp method',
  args:{surveyId: {type: GraphQLString},surveyMultiRespId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/deleteSurveyMultiResp?surveyId=${args.surveyId}surveyMultiRespId=${args.surveyMultiRespId}`, null, req);
  }
};
export {deleteSurveyMultiResp};


const deleteSurveyMultiRespColumn = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSurveyMultiRespColumn method',
  args:{surveyId: {type: GraphQLString},surveyMultiRespId: {type: GraphQLString},surveyMultiRespColId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/deleteSurveyMultiRespColumn?surveyId=${args.surveyId}surveyMultiRespId=${args.surveyMultiRespId}surveyMultiRespColId=${args.surveyMultiRespColId}`, null, req);
  }
};
export {deleteSurveyMultiRespColumn};


const deleteSurveyPage = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSurveyPage method',
  args:{surveyId: {type: GraphQLString},surveyPageSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/deleteSurveyPage?surveyId=${args.surveyId}surveyPageSeqId=${args.surveyPageSeqId}`, null, req);
  }
};
export {deleteSurveyPage};


const deleteSurveyQuestion = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSurveyQuestion method',
  args:{surveyQuestionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/deleteSurveyQuestion?surveyQuestionId=${args.surveyQuestionId}`, null, req);
  }
};
export {deleteSurveyQuestion};


const deleteSurveyQuestionAppl = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSurveyQuestionAppl method',
  args:{fromDate: {type: GraphQLString},surveyQuestionId: {type: GraphQLString},surveyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/deleteSurveyQuestionAppl?fromDate=${args.fromDate}surveyQuestionId=${args.surveyQuestionId}surveyId=${args.surveyId}`, null, req);
  }
};
export {deleteSurveyQuestionAppl};


const deleteSurveyQuestionCategory = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSurveyQuestionCategory method',
  args:{surveyQuestionCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/deleteSurveyQuestionCategory?surveyQuestionCategoryId=${args.surveyQuestionCategoryId}`, null, req);
  }
};
export {deleteSurveyQuestionCategory};


const deleteSurveyQuestionOption = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSurveyQuestionOption method',
  args:{surveyQuestionId: {type: GraphQLString},surveyOptionSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/deleteSurveyQuestionOption?surveyQuestionId=${args.surveyQuestionId}surveyOptionSeqId=${args.surveyOptionSeqId}`, null, req);
  }
};
export {deleteSurveyQuestionOption};


const deleteSurveyQuestionType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSurveyQuestionType method',
  args:{surveyQuestionTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/deleteSurveyQuestionType?surveyQuestionTypeId=${args.surveyQuestionTypeId}`, null, req);
  }
};
export {deleteSurveyQuestionType};


const deleteSurveyTrigger = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSurveyTrigger method',
  args:{fromDate: {type: GraphQLString},surveyId: {type: GraphQLString},surveyApplTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/deleteSurveyTrigger?fromDate=${args.fromDate}surveyId=${args.surveyId}surveyApplTypeId=${args.surveyApplTypeId}`, null, req);
  }
};
export {deleteSurveyTrigger};


const getAcroFieldsFromPdf = {
  type: GraphQLString,
  description: 'mutation for ofbiz getAcroFieldsFromPdf method',
  args:{inputByteBuffer: {type: GraphQLString},contentId: {type: GraphQLString},pdfFileNameIn: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/getAcroFieldsFromPdf?inputByteBuffer=${args.inputByteBuffer}contentId=${args.contentId}pdfFileNameIn=${args.pdfFileNameIn}`, null, req);
  }
};
export {getAcroFieldsFromPdf};


const setAcroFields = {
  type: GraphQLString,
  description: 'mutation for ofbiz setAcroFields method',
  args:{acroFieldMap: {type: GraphQLString},inputByteBuffer: {type: GraphQLString},contentId: {type: GraphQLString},pdfFileNameIn: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/setAcroFields?acroFieldMap=${args.acroFieldMap}inputByteBuffer=${args.inputByteBuffer}contentId=${args.contentId}pdfFileNameIn=${args.pdfFileNameIn}`, null, req);
  }
};
export {setAcroFields};


const setAcroFieldsFromSurveyResponse = {
  type: GraphQLString,
  description: 'mutation for ofbiz setAcroFieldsFromSurveyResponse method',
  args:{surveyResponseId: {type: GraphQLString},inputByteBuffer: {type: GraphQLString},contentId: {type: GraphQLString},pdfFileNameIn: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/setAcroFieldsFromSurveyResponse?surveyResponseId=${args.surveyResponseId}inputByteBuffer=${args.inputByteBuffer}contentId=${args.contentId}pdfFileNameIn=${args.pdfFileNameIn}`, null, req);
  }
};
export {setAcroFieldsFromSurveyResponse};


const surveyResponseProcessInterface = {
  type: GraphQLString,
  description: 'mutation for ofbiz surveyResponseProcessInterface method',
  args:{surveyResponseId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/surveyResponseProcessInterface?surveyResponseId=${args.surveyResponseId}`, null, req);
  }
};
export {surveyResponseProcessInterface};


const updateSurvey = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSurvey method',
  args:{surveyId: {type: GraphQLString},isAnonymous: {type: GraphQLString},comments: {type: GraphQLString},surveyName: {type: GraphQLString},allowMultiple: {type: GraphQLString},responseService: {type: GraphQLString},description: {type: GraphQLString},acroFormContentId: {type: GraphQLString},allowUpdate: {type: GraphQLString},submitCaption: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/updateSurvey?surveyId=${args.surveyId}isAnonymous=${args.isAnonymous}comments=${args.comments}surveyName=${args.surveyName}allowMultiple=${args.allowMultiple}responseService=${args.responseService}description=${args.description}acroFormContentId=${args.acroFormContentId}allowUpdate=${args.allowUpdate}submitCaption=${args.submitCaption}`, null, req);
  }
};
export {updateSurvey};


const updateSurveyApplType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSurveyApplType method',
  args:{surveyApplTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/updateSurveyApplType?surveyApplTypeId=${args.surveyApplTypeId}description=${args.description}`, null, req);
  }
};
export {updateSurveyApplType};


const updateSurveyMultiResp = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSurveyMultiResp method',
  args:{surveyId: {type: GraphQLString},surveyMultiRespId: {type: GraphQLString},multiRespTitle: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/updateSurveyMultiResp?surveyId=${args.surveyId}surveyMultiRespId=${args.surveyMultiRespId}multiRespTitle=${args.multiRespTitle}`, null, req);
  }
};
export {updateSurveyMultiResp};


const updateSurveyMultiRespColumn = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSurveyMultiRespColumn method',
  args:{surveyId: {type: GraphQLString},surveyMultiRespId: {type: GraphQLString},surveyMultiRespColId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},columnTitle: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/updateSurveyMultiRespColumn?surveyId=${args.surveyId}surveyMultiRespId=${args.surveyMultiRespId}surveyMultiRespColId=${args.surveyMultiRespColId}sequenceNum=${args.sequenceNum}columnTitle=${args.columnTitle}`, null, req);
  }
};
export {updateSurveyMultiRespColumn};


const updateSurveyPage = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSurveyPage method',
  args:{surveyId: {type: GraphQLString},surveyPageSeqId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},pageName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/updateSurveyPage?surveyId=${args.surveyId}surveyPageSeqId=${args.surveyPageSeqId}sequenceNum=${args.sequenceNum}pageName=${args.pageName}`, null, req);
  }
};
export {updateSurveyPage};


const updateSurveyQuestion = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSurveyQuestion method',
  args:{surveyQuestionId: {type: GraphQLString},surveyQuestionTypeId: {type: GraphQLString},enumTypeId: {type: GraphQLString},formatString: {type: GraphQLInt},surveyQuestionCategoryId: {type: GraphQLString},question: {type: GraphQLString},hint: {type: GraphQLString},geoId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/updateSurveyQuestion?surveyQuestionId=${args.surveyQuestionId}surveyQuestionTypeId=${args.surveyQuestionTypeId}enumTypeId=${args.enumTypeId}formatString=${args.formatString}surveyQuestionCategoryId=${args.surveyQuestionCategoryId}question=${args.question}hint=${args.hint}geoId=${args.geoId}description=${args.description}`, null, req);
  }
};
export {updateSurveyQuestion};


const updateSurveyQuestionAppl = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSurveyQuestionAppl method',
  args:{fromDate: {type: GraphQLString},surveyQuestionId: {type: GraphQLString},surveyId: {type: GraphQLString},withSurveyOptionSeqId: {type: GraphQLString},externalFieldRef: {type: GraphQLString},requiredField: {type: GraphQLString},sequenceNum: {type: GraphQLInt},withSurveyQuestionId: {type: GraphQLString},surveyPageSeqId: {type: GraphQLString},surveyMultiRespId: {type: GraphQLString},surveyMultiRespColId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/updateSurveyQuestionAppl?fromDate=${args.fromDate}surveyQuestionId=${args.surveyQuestionId}surveyId=${args.surveyId}withSurveyOptionSeqId=${args.withSurveyOptionSeqId}externalFieldRef=${args.externalFieldRef}requiredField=${args.requiredField}sequenceNum=${args.sequenceNum}withSurveyQuestionId=${args.withSurveyQuestionId}surveyPageSeqId=${args.surveyPageSeqId}surveyMultiRespId=${args.surveyMultiRespId}surveyMultiRespColId=${args.surveyMultiRespColId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateSurveyQuestionAppl};


const updateSurveyQuestionCategory = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSurveyQuestionCategory method',
  args:{surveyQuestionCategoryId: {type: GraphQLString},description: {type: GraphQLString},parentCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/updateSurveyQuestionCategory?surveyQuestionCategoryId=${args.surveyQuestionCategoryId}description=${args.description}parentCategoryId=${args.parentCategoryId}`, null, req);
  }
};
export {updateSurveyQuestionCategory};


const updateSurveyQuestionOption = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSurveyQuestionOption method',
  args:{surveyQuestionId: {type: GraphQLString},surveyOptionSeqId: {type: GraphQLString},amountBase: {type: GraphQLFloat},duration: {type: GraphQLInt},sequenceNum: {type: GraphQLInt},amountBaseUomId: {type: GraphQLString},durationUomId: {type: GraphQLString},description: {type: GraphQLString},weightFactor: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/updateSurveyQuestionOption?surveyQuestionId=${args.surveyQuestionId}surveyOptionSeqId=${args.surveyOptionSeqId}amountBase=${args.amountBase}duration=${args.duration}sequenceNum=${args.sequenceNum}amountBaseUomId=${args.amountBaseUomId}durationUomId=${args.durationUomId}description=${args.description}weightFactor=${args.weightFactor}`, null, req);
  }
};
export {updateSurveyQuestionOption};


const updateSurveyQuestionType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSurveyQuestionType method',
  args:{surveyQuestionTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/updateSurveyQuestionType?surveyQuestionTypeId=${args.surveyQuestionTypeId}description=${args.description}`, null, req);
  }
};
export {updateSurveyQuestionType};


const updateSurveyTrigger = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSurveyTrigger method',
  args:{fromDate: {type: GraphQLString},surveyId: {type: GraphQLString},surveyApplTypeId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentSurvey/updateSurveyTrigger?fromDate=${args.fromDate}surveyId=${args.surveyId}surveyApplTypeId=${args.surveyApplTypeId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateSurveyTrigger};
