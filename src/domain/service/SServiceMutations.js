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


const authenticationInterface = {
  type: ResponseType,
  description: 'mutation for ofbiz authenticationInterface method',
  args:{loginusername: {type: GraphQLString},loginpassword: {type: GraphQLString},visitId: {type: GraphQLString},isServiceAuth: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/authenticationInterface?loginusername=${args.loginusername}&loginpassword=${args.loginpassword}&visitId=${args.visitId}&isServiceAuth=${args.isServiceAuth}&`, null, req);
  }
};
export {authenticationInterface};


const cancelJobRetries = {
  type: ResponseType,
  description: 'mutation for ofbiz cancelJobRetries method',
  args:{jobId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/cancelJobRetries?jobId=${args.jobId}&`, null, req);
  }
};
export {cancelJobRetries};


const cancelScheduledJob = {
  type: ResponseType,
  description: 'mutation for ofbiz cancelScheduledJob method',
  args:{jobId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/cancelScheduledJob?jobId=${args.jobId}&`, null, req);
  }
};
export {cancelScheduledJob};


const createCatalinaSession = {
  type: ResponseType,
  description: 'mutation for ofbiz createCatalinaSession method',
  args:{sessionInfo: {type: GraphQLString},maxIdle: {type: GraphQLInt},isValid: {type: GraphQLString},lastAccessed: {type: GraphQLInt},sessionId: {type: GraphQLString},sessionSize: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/createCatalinaSession?sessionInfo=${args.sessionInfo}&maxIdle=${args.maxIdle}&isValid=${args.isValid}&lastAccessed=${args.lastAccessed}&sessionId=${args.sessionId}&sessionSize=${args.sessionSize}&`, null, req);
  }
};
export {createCatalinaSession};


const createJobManagerLock = {
  type: ResponseType,
  description: 'mutation for ofbiz createJobManagerLock method',
  args:{fromDate: {type: GraphQLString},instanceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},comments: {type: GraphQLString},createdDate: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},reasonEnumId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/createJobManagerLock?fromDate=${args.fromDate}&instanceId=${args.instanceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&comments=${args.comments}&createdDate=${args.createdDate}&lastModifiedDate=${args.lastModifiedDate}&reasonEnumId=${args.reasonEnumId}&createdByUserLogin=${args.createdByUserLogin}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {createJobManagerLock};


const createJobSandbox = {
  type: ResponseType,
  description: 'mutation for ofbiz createJobSandbox method',
  args:{jobName: {type: GraphQLString},recurrenceInfoId: {type: GraphQLString},runByInstanceId: {type: GraphQLString},maxRecurrenceCount: {type: GraphQLInt},currentRecurrenceCount: {type: GraphQLInt},tempExprId: {type: GraphQLString},cancelDateTime: {type: GraphQLString},serviceName: {type: GraphQLString},authUserLoginId: {type: GraphQLString},runtimeDataId: {type: GraphQLString},currentRetryCount: {type: GraphQLInt},runAsUser: {type: GraphQLString},finishDateTime: {type: GraphQLString},jobId: {type: GraphQLString},maxRetry: {type: GraphQLInt},loaderName: {type: GraphQLString},startDateTime: {type: GraphQLString},statusId: {type: GraphQLString},previousJobId: {type: GraphQLString},parentJobId: {type: GraphQLString},jobResult: {type: GraphQLInt},poolId: {type: GraphQLString},runTime: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/createJobSandbox?jobName=${args.jobName}&recurrenceInfoId=${args.recurrenceInfoId}&runByInstanceId=${args.runByInstanceId}&maxRecurrenceCount=${args.maxRecurrenceCount}&currentRecurrenceCount=${args.currentRecurrenceCount}&tempExprId=${args.tempExprId}&cancelDateTime=${args.cancelDateTime}&serviceName=${args.serviceName}&authUserLoginId=${args.authUserLoginId}&runtimeDataId=${args.runtimeDataId}&currentRetryCount=${args.currentRetryCount}&runAsUser=${args.runAsUser}&finishDateTime=${args.finishDateTime}&jobId=${args.jobId}&maxRetry=${args.maxRetry}&loaderName=${args.loaderName}&startDateTime=${args.startDateTime}&statusId=${args.statusId}&previousJobId=${args.previousJobId}&parentJobId=${args.parentJobId}&jobResult=${args.jobResult}&poolId=${args.poolId}&runTime=${args.runTime}&`, null, req);
  }
};
export {createJobSandbox};


const createRuntimeData = {
  type: ResponseType,
  description: 'mutation for ofbiz createRuntimeData method',
  args:{runtimeDataId: {type: GraphQLString},runtimeInfo: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/createRuntimeData?runtimeDataId=${args.runtimeDataId}&runtimeInfo=${args.runtimeInfo}&`, null, req);
  }
};
export {createRuntimeData};


const createSequenceValueItem = {
  type: ResponseType,
  description: 'mutation for ofbiz createSequenceValueItem method',
  args:{seqName: {type: GraphQLString},seqId: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/createSequenceValueItem?seqName=${args.seqName}&seqId=${args.seqId}&`, null, req);
  }
};
export {createSequenceValueItem};


const createStandardLanguage = {
  type: ResponseType,
  description: 'mutation for ofbiz createStandardLanguage method',
  args:{langCode3t: {type: GraphQLString},langCode2: {type: GraphQLString},standardLanguageId: {type: GraphQLString},langCode3b: {type: GraphQLString},langFamily: {type: GraphQLString},langName: {type: GraphQLString},langCharset: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/createStandardLanguage?langCode3t=${args.langCode3t}&langCode2=${args.langCode2}&standardLanguageId=${args.standardLanguageId}&langCode3b=${args.langCode3b}&langFamily=${args.langFamily}&langName=${args.langName}&langCharset=${args.langCharset}&`, null, req);
  }
};
export {createStandardLanguage};


const createStatusItem = {
  type: ResponseType,
  description: 'mutation for ofbiz createStatusItem method',
  args:{statusId: {type: GraphQLString},statusTypeId: {type: GraphQLString},description: {type: GraphQLString},sequenceId: {type: GraphQLString},statusCode: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/createStatusItem?statusId=${args.statusId}&statusTypeId=${args.statusTypeId}&description=${args.description}&sequenceId=${args.sequenceId}&statusCode=${args.statusCode}&`, null, req);
  }
};
export {createStatusItem};


const createStatusType = {
  type: ResponseType,
  description: 'mutation for ofbiz createStatusType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},statusTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/createStatusType?parentTypeId=${args.parentTypeId}&hasTable=${args.hasTable}&statusTypeId=${args.statusTypeId}&description=${args.description}&`, null, req);
  }
};
export {createStatusType};


const deleteCatalinaSession = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteCatalinaSession method',
  args:{sessionId: {type: GraphQLString},sessionInfo: {type: GraphQLString},maxIdle: {type: GraphQLInt},isValid: {type: GraphQLString},lastAccessed: {type: GraphQLInt},sessionSize: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/deleteCatalinaSession?sessionId=${args.sessionId}&sessionInfo=${args.sessionInfo}&maxIdle=${args.maxIdle}&isValid=${args.isValid}&lastAccessed=${args.lastAccessed}&sessionSize=${args.sessionSize}&`, null, req);
  }
};
export {deleteCatalinaSession};


const deleteJobSandbox = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteJobSandbox method',
  args:{jobId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/deleteJobSandbox?jobId=${args.jobId}&`, null, req);
  }
};
export {deleteJobSandbox};


const deleteRuntimeData = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteRuntimeData method',
  args:{runtimeDataId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/deleteRuntimeData?runtimeDataId=${args.runtimeDataId}&`, null, req);
  }
};
export {deleteRuntimeData};


const deleteSequenceValueItem = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteSequenceValueItem method',
  args:{seqName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/deleteSequenceValueItem?seqName=${args.seqName}&`, null, req);
  }
};
export {deleteSequenceValueItem};


const deleteStandardLanguage = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteStandardLanguage method',
  args:{standardLanguageId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/deleteStandardLanguage?standardLanguageId=${args.standardLanguageId}&`, null, req);
  }
};
export {deleteStandardLanguage};


const deleteStatusItem = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteStatusItem method',
  args:{statusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/deleteStatusItem?statusId=${args.statusId}&`, null, req);
  }
};
export {deleteStatusItem};


const deleteStatusType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteStatusType method',
  args:{statusTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/deleteStatusType?statusTypeId=${args.statusTypeId}&`, null, req);
  }
};
export {deleteStatusType};


const effectiveDateEcaCondition = {
  type: ResponseType,
  description: 'mutation for ofbiz effectiveDateEcaCondition method',
  args:{serviceContext: {type: GraphQLString},serviceName: {type: GraphQLString},fromDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/effectiveDateEcaCondition?serviceContext=${args.serviceContext}&serviceName=${args.serviceName}&fromDate=${args.fromDate}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {effectiveDateEcaCondition};


const mailProcessInterface = {
  type: ResponseType,
  description: 'mutation for ofbiz mailProcessInterface method',
  args:{messageWrapper: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/mailProcessInterface?messageWrapper=${args.messageWrapper}&`, null, req);
  }
};
export {mailProcessInterface};


const permissionInterface = {
  type: ResponseType,
  description: 'mutation for ofbiz permissionInterface method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/permissionInterface?primaryPermission=${args.primaryPermission}&altPermission=${args.altPermission}&resourceDescription=${args.resourceDescription}&mainAction=${args.mainAction}&`, null, req);
  }
};
export {permissionInterface};


const purgeOldJobs = {
  type: ResponseType,
  description: 'mutation for ofbiz purgeOldJobs method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/purgeOldJobs?`, null, req);
  }
};
export {purgeOldJobs};


const resetScheduledJob = {
  type: ResponseType,
  description: 'mutation for ofbiz resetScheduledJob method',
  args:{jobId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/resetScheduledJob?jobId=${args.jobId}&`, null, req);
  }
};
export {resetScheduledJob};


const serviceEcaConditionInterface = {
  type: ResponseType,
  description: 'mutation for ofbiz serviceEcaConditionInterface method',
  args:{serviceContext: {type: GraphQLString},serviceName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/serviceEcaConditionInterface?serviceContext=${args.serviceContext}&serviceName=${args.serviceName}&`, null, req);
  }
};
export {serviceEcaConditionInterface};


const serviceMcaConditionInterface = {
  type: ResponseType,
  description: 'mutation for ofbiz serviceMcaConditionInterface method',
  args:{messageWrapper: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/serviceMcaConditionInterface?messageWrapper=${args.messageWrapper}&`, null, req);
  }
};
export {serviceMcaConditionInterface};


const serviceStreamInterface = {
  type: ResponseType,
  description: 'mutation for ofbiz serviceStreamInterface method',
  args:{inputStream: {type: GraphQLString},outputStream: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/serviceStreamInterface?inputStream=${args.inputStream}&outputStream=${args.outputStream}&`, null, req);
  }
};
export {serviceStreamInterface};


const updateCatalinaSession = {
  type: ResponseType,
  description: 'mutation for ofbiz updateCatalinaSession method',
  args:{sessionId: {type: GraphQLString},sessionInfo: {type: GraphQLString},maxIdle: {type: GraphQLInt},isValid: {type: GraphQLString},lastAccessed: {type: GraphQLInt},sessionSize: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/updateCatalinaSession?sessionId=${args.sessionId}&sessionInfo=${args.sessionInfo}&maxIdle=${args.maxIdle}&isValid=${args.isValid}&lastAccessed=${args.lastAccessed}&sessionSize=${args.sessionSize}&`, null, req);
  }
};
export {updateCatalinaSession};


const updateJobManagerLock = {
  type: ResponseType,
  description: 'mutation for ofbiz updateJobManagerLock method',
  args:{fromDate: {type: GraphQLString},instanceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},comments: {type: GraphQLString},createdDate: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},reasonEnumId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/updateJobManagerLock?fromDate=${args.fromDate}&instanceId=${args.instanceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&comments=${args.comments}&createdDate=${args.createdDate}&lastModifiedDate=${args.lastModifiedDate}&reasonEnumId=${args.reasonEnumId}&createdByUserLogin=${args.createdByUserLogin}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {updateJobManagerLock};


const updateJobSandbox = {
  type: ResponseType,
  description: 'mutation for ofbiz updateJobSandbox method',
  args:{jobId: {type: GraphQLString},jobName: {type: GraphQLString},recurrenceInfoId: {type: GraphQLString},runByInstanceId: {type: GraphQLString},maxRecurrenceCount: {type: GraphQLInt},currentRecurrenceCount: {type: GraphQLInt},tempExprId: {type: GraphQLString},cancelDateTime: {type: GraphQLString},serviceName: {type: GraphQLString},authUserLoginId: {type: GraphQLString},runtimeDataId: {type: GraphQLString},currentRetryCount: {type: GraphQLInt},runAsUser: {type: GraphQLString},finishDateTime: {type: GraphQLString},maxRetry: {type: GraphQLInt},loaderName: {type: GraphQLString},startDateTime: {type: GraphQLString},statusId: {type: GraphQLString},previousJobId: {type: GraphQLString},parentJobId: {type: GraphQLString},jobResult: {type: GraphQLInt},poolId: {type: GraphQLString},runTime: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/updateJobSandbox?jobId=${args.jobId}&jobName=${args.jobName}&recurrenceInfoId=${args.recurrenceInfoId}&runByInstanceId=${args.runByInstanceId}&maxRecurrenceCount=${args.maxRecurrenceCount}&currentRecurrenceCount=${args.currentRecurrenceCount}&tempExprId=${args.tempExprId}&cancelDateTime=${args.cancelDateTime}&serviceName=${args.serviceName}&authUserLoginId=${args.authUserLoginId}&runtimeDataId=${args.runtimeDataId}&currentRetryCount=${args.currentRetryCount}&runAsUser=${args.runAsUser}&finishDateTime=${args.finishDateTime}&maxRetry=${args.maxRetry}&loaderName=${args.loaderName}&startDateTime=${args.startDateTime}&statusId=${args.statusId}&previousJobId=${args.previousJobId}&parentJobId=${args.parentJobId}&jobResult=${args.jobResult}&poolId=${args.poolId}&runTime=${args.runTime}&`, null, req);
  }
};
export {updateJobSandbox};


const updateRuntimeData = {
  type: ResponseType,
  description: 'mutation for ofbiz updateRuntimeData method',
  args:{runtimeDataId: {type: GraphQLString},runtimeInfo: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/updateRuntimeData?runtimeDataId=${args.runtimeDataId}&runtimeInfo=${args.runtimeInfo}&`, null, req);
  }
};
export {updateRuntimeData};


const updateSequenceValueItem = {
  type: ResponseType,
  description: 'mutation for ofbiz updateSequenceValueItem method',
  args:{seqName: {type: GraphQLString},seqId: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/updateSequenceValueItem?seqName=${args.seqName}&seqId=${args.seqId}&`, null, req);
  }
};
export {updateSequenceValueItem};


const updateStandardLanguage = {
  type: ResponseType,
  description: 'mutation for ofbiz updateStandardLanguage method',
  args:{standardLanguageId: {type: GraphQLString},langCode3t: {type: GraphQLString},langCode2: {type: GraphQLString},langCode3b: {type: GraphQLString},langFamily: {type: GraphQLString},langName: {type: GraphQLString},langCharset: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/updateStandardLanguage?standardLanguageId=${args.standardLanguageId}&langCode3t=${args.langCode3t}&langCode2=${args.langCode2}&langCode3b=${args.langCode3b}&langFamily=${args.langFamily}&langName=${args.langName}&langCharset=${args.langCharset}&`, null, req);
  }
};
export {updateStandardLanguage};


const updateStatusItem = {
  type: ResponseType,
  description: 'mutation for ofbiz updateStatusItem method',
  args:{statusId: {type: GraphQLString},statusTypeId: {type: GraphQLString},description: {type: GraphQLString},sequenceId: {type: GraphQLString},statusCode: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/updateStatusItem?statusId=${args.statusId}&statusTypeId=${args.statusTypeId}&description=${args.description}&sequenceId=${args.sequenceId}&statusCode=${args.statusCode}&`, null, req);
  }
};
export {updateStatusItem};


const updateStatusType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateStatusType method',
  args:{statusTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/s/updateStatusType?statusTypeId=${args.statusTypeId}&parentTypeId=${args.parentTypeId}&hasTable=${args.hasTable}&description=${args.description}&`, null, req);
  }
};
export {updateStatusType};
