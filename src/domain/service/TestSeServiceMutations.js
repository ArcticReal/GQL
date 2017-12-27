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


const testEntityAutoCreateTestingItemPkMissing = {
  type: ResponseType,
  description: 'mutation for ofbiz testEntityAutoCreateTestingItemPkMissing method',
  args:{testingId: {type: GraphQLString},testingHistory: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/testSe/testEntityAutoCreateTestingItemPkMissing?testingId=${args.testingId}&testingHistory=${args.testingHistory}&`, null, req);
  }
};
export {testEntityAutoCreateTestingItemPkMissing};


const testEntityAutoCreateTestingItemPkPresent = {
  type: ResponseType,
  description: 'mutation for ofbiz testEntityAutoCreateTestingItemPkPresent method',
  args:{testingId: {type: GraphQLString},testingSeqId: {type: GraphQLString},testingHistory: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/testSe/testEntityAutoCreateTestingItemPkPresent?testingId=${args.testingId}&testingSeqId=${args.testingSeqId}&testingHistory=${args.testingHistory}&`, null, req);
  }
};
export {testEntityAutoCreateTestingItemPkPresent};


const testEntityAutoCreateTestingNodeMemberPkMissing = {
  type: ResponseType,
  description: 'mutation for ofbiz testEntityAutoCreateTestingNodeMemberPkMissing method',
  args:{testingId: {type: GraphQLString},testingNodeId: {type: GraphQLString},extendFromDate: {type: GraphQLString},extendThruDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/testSe/testEntityAutoCreateTestingNodeMemberPkMissing?testingId=${args.testingId}&testingNodeId=${args.testingNodeId}&extendFromDate=${args.extendFromDate}&extendThruDate=${args.extendThruDate}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {testEntityAutoCreateTestingNodeMemberPkMissing};


const testEntityAutoCreateTestingNodeMemberPkPresent = {
  type: ResponseType,
  description: 'mutation for ofbiz testEntityAutoCreateTestingNodeMemberPkPresent method',
  args:{fromDate: {type: GraphQLString},testingId: {type: GraphQLString},testingNodeId: {type: GraphQLString},extendFromDate: {type: GraphQLString},extendThruDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/testSe/testEntityAutoCreateTestingNodeMemberPkPresent?fromDate=${args.fromDate}&testingId=${args.testingId}&testingNodeId=${args.testingNodeId}&extendFromDate=${args.extendFromDate}&extendThruDate=${args.extendThruDate}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {testEntityAutoCreateTestingNodeMemberPkPresent};


const testEntityAutoCreateTestingPkMissing = {
  type: ResponseType,
  description: 'mutation for ofbiz testEntityAutoCreateTestingPkMissing method',
  args:{comments: {type: GraphQLString},testingTypeId: {type: GraphQLString},testingSize: {type: GraphQLInt},description: {type: GraphQLString},testingDate: {type: GraphQLString},testingName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/testSe/testEntityAutoCreateTestingPkMissing?comments=${args.comments}&testingTypeId=${args.testingTypeId}&testingSize=${args.testingSize}&description=${args.description}&testingDate=${args.testingDate}&testingName=${args.testingName}&`, null, req);
  }
};
export {testEntityAutoCreateTestingPkMissing};


const testEntityAutoCreateTestingPkPresent = {
  type: ResponseType,
  description: 'mutation for ofbiz testEntityAutoCreateTestingPkPresent method',
  args:{testingId: {type: GraphQLString},comments: {type: GraphQLString},testingTypeId: {type: GraphQLString},testingSize: {type: GraphQLInt},description: {type: GraphQLString},testingDate: {type: GraphQLString},testingName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/testSe/testEntityAutoCreateTestingPkPresent?testingId=${args.testingId}&comments=${args.comments}&testingTypeId=${args.testingTypeId}&testingSize=${args.testingSize}&description=${args.description}&testingDate=${args.testingDate}&testingName=${args.testingName}&`, null, req);
  }
};
export {testEntityAutoCreateTestingPkPresent};


const testEntityAutoCreateTestingStatus = {
  type: ResponseType,
  description: 'mutation for ofbiz testEntityAutoCreateTestingStatus method',
  args:{statusId: {type: GraphQLString},testingId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/testSe/testEntityAutoCreateTestingStatus?statusId=${args.statusId}&testingId=${args.testingId}&`, null, req);
  }
};
export {testEntityAutoCreateTestingStatus};


const testEntityAutoDeleteTestingStatus = {
  type: ResponseType,
  description: 'mutation for ofbiz testEntityAutoDeleteTestingStatus method',
  args:{testingStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/testSe/testEntityAutoDeleteTestingStatus?testingStatusId=${args.testingStatusId}&`, null, req);
  }
};
export {testEntityAutoDeleteTestingStatus};


const testEntityAutoExpireTestFieldType = {
  type: ResponseType,
  description: 'mutation for ofbiz testEntityAutoExpireTestFieldType method',
  args:{testFieldTypeId: {type: GraphQLString},dateTimeField: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/testSe/testEntityAutoExpireTestFieldType?testFieldTypeId=${args.testFieldTypeId}&dateTimeField=${args.dateTimeField}&`, null, req);
  }
};
export {testEntityAutoExpireTestFieldType};


const testEntityAutoExpireTestingNodeMember = {
  type: ResponseType,
  description: 'mutation for ofbiz testEntityAutoExpireTestingNodeMember method',
  args:{fromDate: {type: GraphQLString},testingId: {type: GraphQLString},testingNodeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/testSe/testEntityAutoExpireTestingNodeMember?fromDate=${args.fromDate}&testingId=${args.testingId}&testingNodeId=${args.testingNodeId}&`, null, req);
  }
};
export {testEntityAutoExpireTestingNodeMember};


const testEntityAutoRemoveTesting = {
  type: ResponseType,
  description: 'mutation for ofbiz testEntityAutoRemoveTesting method',
  args:{testingId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/testSe/testEntityAutoRemoveTesting?testingId=${args.testingId}&`, null, req);
  }
};
export {testEntityAutoRemoveTesting};


const testEntityAutoUpdateTesting = {
  type: ResponseType,
  description: 'mutation for ofbiz testEntityAutoUpdateTesting method',
  args:{testingId: {type: GraphQLString},comments: {type: GraphQLString},testingTypeId: {type: GraphQLString},testingSize: {type: GraphQLInt},description: {type: GraphQLString},testingDate: {type: GraphQLString},testingName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/testSe/testEntityAutoUpdateTesting?testingId=${args.testingId}&comments=${args.comments}&testingTypeId=${args.testingTypeId}&testingSize=${args.testingSize}&description=${args.description}&testingDate=${args.testingDate}&testingName=${args.testingName}&`, null, req);
  }
};
export {testEntityAutoUpdateTesting};


const testEntityAutoUpdateTestingStatus = {
  type: ResponseType,
  description: 'mutation for ofbiz testEntityAutoUpdateTestingStatus method',
  args:{statusId: {type: GraphQLString},testingStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/testSe/testEntityAutoUpdateTestingStatus?statusId=${args.statusId}&testingStatusId=${args.testingStatusId}&`, null, req);
  }
};
export {testEntityAutoUpdateTestingStatus};


const testServiceDeadLockRetry = {
  type: ResponseType,
  description: 'mutation for ofbiz testServiceDeadLockRetry method',
  args:{test: {type: GraphQLString},testResult: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/testSe/testServiceDeadLockRetry?test=${args.test}&testResult=${args.testResult}&`, null, req);
  }
};
export {testServiceDeadLockRetry};


const testServiceDeadLockRetryThreadA = {
  type: ResponseType,
  description: 'mutation for ofbiz testServiceDeadLockRetryThreadA method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/testSe/testServiceDeadLockRetryThreadA?`, null, req);
  }
};
export {testServiceDeadLockRetryThreadA};


const testServiceDeadLockRetryThreadB = {
  type: ResponseType,
  description: 'mutation for ofbiz testServiceDeadLockRetryThreadB method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/testSe/testServiceDeadLockRetryThreadB?`, null, req);
  }
};
export {testServiceDeadLockRetryThreadB};


const testServiceEcaGlobalEventExec = {
  type: ResponseType,
  description: 'mutation for ofbiz testServiceEcaGlobalEventExec method',
  args:{test: {type: GraphQLString},testResult: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/testSe/testServiceEcaGlobalEventExec?test=${args.test}&testResult=${args.testResult}&`, null, req);
  }
};
export {testServiceEcaGlobalEventExec};


const testServiceEcaGlobalEventExecOnCommit = {
  type: ResponseType,
  description: 'mutation for ofbiz testServiceEcaGlobalEventExecOnCommit method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/testSe/testServiceEcaGlobalEventExecOnCommit?`, null, req);
  }
};
export {testServiceEcaGlobalEventExecOnCommit};


const testServiceEcaGlobalEventExecOnRollback = {
  type: ResponseType,
  description: 'mutation for ofbiz testServiceEcaGlobalEventExecOnRollback method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/testSe/testServiceEcaGlobalEventExecOnRollback?`, null, req);
  }
};
export {testServiceEcaGlobalEventExecOnRollback};


const testServiceEcaGlobalEventExecToRollback = {
  type: ResponseType,
  description: 'mutation for ofbiz testServiceEcaGlobalEventExecToRollback method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/testSe/testServiceEcaGlobalEventExecToRollback?`, null, req);
  }
};
export {testServiceEcaGlobalEventExecToRollback};


const testServiceLockWaitTimeoutRetry = {
  type: ResponseType,
  description: 'mutation for ofbiz testServiceLockWaitTimeoutRetry method',
  args:{test: {type: GraphQLString},testResult: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/testSe/testServiceLockWaitTimeoutRetry?test=${args.test}&testResult=${args.testResult}&`, null, req);
  }
};
export {testServiceLockWaitTimeoutRetry};


const testServiceLockWaitTimeoutRetryCantRecover = {
  type: ResponseType,
  description: 'mutation for ofbiz testServiceLockWaitTimeoutRetryCantRecover method',
  args:{test: {type: GraphQLString},testResult: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/testSe/testServiceLockWaitTimeoutRetryCantRecover?test=${args.test}&testResult=${args.testResult}&`, null, req);
  }
};
export {testServiceLockWaitTimeoutRetryCantRecover};


const testServiceLockWaitTimeoutRetryCantRecoverWaiter = {
  type: ResponseType,
  description: 'mutation for ofbiz testServiceLockWaitTimeoutRetryCantRecoverWaiter method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/testSe/testServiceLockWaitTimeoutRetryCantRecoverWaiter?`, null, req);
  }
};
export {testServiceLockWaitTimeoutRetryCantRecoverWaiter};


const testServiceLockWaitTimeoutRetryGrabber = {
  type: ResponseType,
  description: 'mutation for ofbiz testServiceLockWaitTimeoutRetryGrabber method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/testSe/testServiceLockWaitTimeoutRetryGrabber?`, null, req);
  }
};
export {testServiceLockWaitTimeoutRetryGrabber};


const testServiceLockWaitTimeoutRetryWaiter = {
  type: ResponseType,
  description: 'mutation for ofbiz testServiceLockWaitTimeoutRetryWaiter method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/testSe/testServiceLockWaitTimeoutRetryWaiter?`, null, req);
  }
};
export {testServiceLockWaitTimeoutRetryWaiter};


const testServiceOwnTxSubServiceAfterSetRollbackOnlyInParent = {
  type: ResponseType,
  description: 'mutation for ofbiz testServiceOwnTxSubServiceAfterSetRollbackOnlyInParent method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/testSe/testServiceOwnTxSubServiceAfterSetRollbackOnlyInParent?`, null, req);
  }
};
export {testServiceOwnTxSubServiceAfterSetRollbackOnlyInParent};


const testServiceOwnTxSubServiceAfterSetRollbackOnlyInParentErrorCatchWrapper = {
  type: ResponseType,
  description: 'mutation for ofbiz testServiceOwnTxSubServiceAfterSetRollbackOnlyInParentErrorCatchWrapper method',
  args:{test: {type: GraphQLString},testResult: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/testSe/testServiceOwnTxSubServiceAfterSetRollbackOnlyInParentErrorCatchWrapper?test=${args.test}&testResult=${args.testResult}&`, null, req);
  }
};
export {testServiceOwnTxSubServiceAfterSetRollbackOnlyInParentErrorCatchWrapper};


const testServiceOwnTxSubServiceAfterSetRollbackOnlyInParentSubService = {
  type: ResponseType,
  description: 'mutation for ofbiz testServiceOwnTxSubServiceAfterSetRollbackOnlyInParentSubService method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/testSe/testServiceOwnTxSubServiceAfterSetRollbackOnlyInParentSubService?`, null, req);
  }
};
export {testServiceOwnTxSubServiceAfterSetRollbackOnlyInParentSubService};


const testXmlRpcAdd = {
  type: ResponseType,
  description: 'mutation for ofbiz testXmlRpcAdd method',
  args:{num1: {type: GraphQLInt},num2: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/testSe/testXmlRpcAdd?num1=${args.num1}&num2=${args.num2}&`, null, req);
  }
};
export {testXmlRpcAdd};


const testXmlRpcClientAdd = {
  type: ResponseType,
  description: 'mutation for ofbiz testXmlRpcClientAdd method',
  args:{test: {type: GraphQLString},testResult: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/testSe/testXmlRpcClientAdd?test=${args.test}&testResult=${args.testResult}&`, null, req);
  }
};
export {testXmlRpcClientAdd};


const testXmlRpcLocalEngine = {
  type: ResponseType,
  description: 'mutation for ofbiz testXmlRpcLocalEngine method',
  args:{num1: {type: GraphQLInt},num2: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/testSe/testXmlRpcLocalEngine?num1=${args.num1}&num2=${args.num2}&`, null, req);
  }
};
export {testXmlRpcLocalEngine};
