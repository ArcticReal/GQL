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


const cleanSyncRemoveInfo = {
  type: ResponseType,
  description: 'mutation for ofbiz cleanSyncRemoveInfo method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/cleanSyncRemoveInfo?`, null, req);
  }
};
export {cleanSyncRemoveInfo};


const clearAllEntityCaches = {
  type: ResponseType,
  description: 'mutation for ofbiz clearAllEntityCaches method',
  args:{distribute: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/clearAllEntityCaches?distribute=${args.distribute}&`, null, req);
  }
};
export {clearAllEntityCaches};


const clearCacheLineByCondition = {
  type: ResponseType,
  description: 'mutation for ofbiz clearCacheLineByCondition method',
  args:{condition: {type: GraphQLString},entityName: {type: GraphQLString},distribute: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/clearCacheLineByCondition?condition=${args.condition}&entityName=${args.entityName}&distribute=${args.distribute}&`, null, req);
  }
};
export {clearCacheLineByCondition};


const clearCacheLineByDummyPK = {
  type: ResponseType,
  description: 'mutation for ofbiz clearCacheLineByDummyPK method',
  args:{dummyPK: {type: new GraphQLList(KeyValueInputType)},distribute: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/clearCacheLineByDummyPK?dummyPK=${args.dummyPK}&distribute=${args.distribute}&`, null, req);
  }
};
export {clearCacheLineByDummyPK};


const clearCacheLineByPrimaryKey = {
  type: ResponseType,
  description: 'mutation for ofbiz clearCacheLineByPrimaryKey method',
  args:{primaryKey: {type: new GraphQLList(KeyValueInputType)},distribute: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/clearCacheLineByPrimaryKey?primaryKey=${args.primaryKey}&distribute=${args.distribute}&`, null, req);
  }
};
export {clearCacheLineByPrimaryKey};


const clearCacheLineByValue = {
  type: ResponseType,
  description: 'mutation for ofbiz clearCacheLineByValue method',
  args:{value: {type: new GraphQLList(KeyValueInputType)},distribute: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/clearCacheLineByValue?value=${args.value}&distribute=${args.distribute}&`, null, req);
  }
};
export {clearCacheLineByValue};


const createBrowserType = {
  type: ResponseType,
  description: 'mutation for ofbiz createBrowserType method',
  args:{browserVersion: {type: GraphQLString},browserName: {type: GraphQLString},browserTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/createBrowserType?browserVersion=${args.browserVersion}&browserName=${args.browserName}&browserTypeId=${args.browserTypeId}&`, null, req);
  }
};
export {createBrowserType};


const createEntitySync = {
  type: ResponseType,
  description: 'mutation for ofbiz createEntitySync method',
  args:{targetDelegatorName: {type: GraphQLString},maxRunningNoUpdateMillis: {type: GraphQLInt},lastHistoryStartDate: {type: GraphQLString},preOfflineSynchTime: {type: GraphQLString},forPushOnly: {type: GraphQLString},forPullOnly: {type: GraphQLString},lastSuccessfulSynchTime: {type: GraphQLString},keepRemoveInfoHours: {type: GraphQLFloat},offlineSyncSplitMillis: {type: GraphQLInt},targetServiceName: {type: GraphQLString},runStatusId: {type: GraphQLString},syncSplitMillis: {type: GraphQLInt},syncEndBufferMillis: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/createEntitySync?targetDelegatorName=${args.targetDelegatorName}&maxRunningNoUpdateMillis=${args.maxRunningNoUpdateMillis}&lastHistoryStartDate=${args.lastHistoryStartDate}&preOfflineSynchTime=${args.preOfflineSynchTime}&forPushOnly=${args.forPushOnly}&forPullOnly=${args.forPullOnly}&lastSuccessfulSynchTime=${args.lastSuccessfulSynchTime}&keepRemoveInfoHours=${args.keepRemoveInfoHours}&offlineSyncSplitMillis=${args.offlineSyncSplitMillis}&targetServiceName=${args.targetServiceName}&runStatusId=${args.runStatusId}&syncSplitMillis=${args.syncSplitMillis}&syncEndBufferMillis=${args.syncEndBufferMillis}&`, null, req);
  }
};
export {createEntitySync};


const createEntitySyncHistory = {
  type: ResponseType,
  description: 'mutation for ofbiz createEntitySyncHistory method',
  args:{entitySyncId: {type: GraphQLString},totalRowsExported: {type: GraphQLInt},perSplitMinItems: {type: GraphQLInt},toCreateInserted: {type: GraphQLInt},toStoreUpdated: {type: GraphQLInt},toCreateUpdated: {type: GraphQLInt},toCreateNotUpdated: {type: GraphQLInt},perSplitMinMillis: {type: GraphQLInt},totalStoreCalls: {type: GraphQLInt},perSplitMaxMillis: {type: GraphQLInt},runningTimeMillis: {type: GraphQLInt},beginningSynchTime: {type: GraphQLString},toStoreInserted: {type: GraphQLInt},lastSplitStartTime: {type: GraphQLInt},totalRowsToRemove: {type: GraphQLInt},totalSplits: {type: GraphQLInt},lastSuccessfulSynchTime: {type: GraphQLString},totalRowsToCreate: {type: GraphQLInt},perSplitMaxItems: {type: GraphQLInt},lastCandidateEndTime: {type: GraphQLString},totalRowsToStore: {type: GraphQLInt},toRemoveAlreadyDeleted: {type: GraphQLInt},toStoreNotUpdated: {type: GraphQLInt},toRemoveDeleted: {type: GraphQLInt},runStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/createEntitySyncHistory?entitySyncId=${args.entitySyncId}&totalRowsExported=${args.totalRowsExported}&perSplitMinItems=${args.perSplitMinItems}&toCreateInserted=${args.toCreateInserted}&toStoreUpdated=${args.toStoreUpdated}&toCreateUpdated=${args.toCreateUpdated}&toCreateNotUpdated=${args.toCreateNotUpdated}&perSplitMinMillis=${args.perSplitMinMillis}&totalStoreCalls=${args.totalStoreCalls}&perSplitMaxMillis=${args.perSplitMaxMillis}&runningTimeMillis=${args.runningTimeMillis}&beginningSynchTime=${args.beginningSynchTime}&toStoreInserted=${args.toStoreInserted}&lastSplitStartTime=${args.lastSplitStartTime}&totalRowsToRemove=${args.totalRowsToRemove}&totalSplits=${args.totalSplits}&lastSuccessfulSynchTime=${args.lastSuccessfulSynchTime}&totalRowsToCreate=${args.totalRowsToCreate}&perSplitMaxItems=${args.perSplitMaxItems}&lastCandidateEndTime=${args.lastCandidateEndTime}&totalRowsToStore=${args.totalRowsToStore}&toRemoveAlreadyDeleted=${args.toRemoveAlreadyDeleted}&toStoreNotUpdated=${args.toStoreNotUpdated}&toRemoveDeleted=${args.toRemoveDeleted}&runStatusId=${args.runStatusId}&`, null, req);
  }
};
export {createEntitySyncHistory};


const createEntitySyncInclude = {
  type: ResponseType,
  description: 'mutation for ofbiz createEntitySyncInclude method',
  args:{entityOrPackage: {type: GraphQLString},entitySyncId: {type: GraphQLString},applEnumId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/createEntitySyncInclude?entityOrPackage=${args.entityOrPackage}&entitySyncId=${args.entitySyncId}&applEnumId=${args.applEnumId}&`, null, req);
  }
};
export {createEntitySyncInclude};


const createPlatformType = {
  type: ResponseType,
  description: 'mutation for ofbiz createPlatformType method',
  args:{platformVersion: {type: GraphQLString},platformTypeId: {type: GraphQLString},platformName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/createPlatformType?platformVersion=${args.platformVersion}&platformTypeId=${args.platformTypeId}&platformName=${args.platformName}&`, null, req);
  }
};
export {createPlatformType};


const createProtocolType = {
  type: ResponseType,
  description: 'mutation for ofbiz createProtocolType method',
  args:{protocolTypeId: {type: GraphQLString},protocolName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/createProtocolType?protocolTypeId=${args.protocolTypeId}&protocolName=${args.protocolName}&`, null, req);
  }
};
export {createProtocolType};


const createServerHitType = {
  type: ResponseType,
  description: 'mutation for ofbiz createServerHitType method',
  args:{hitTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/createServerHitType?hitTypeId=${args.hitTypeId}&description=${args.description}&`, null, req);
  }
};
export {createServerHitType};


const createTestingSubtype = {
  type: ResponseType,
  description: 'mutation for ofbiz createTestingSubtype method',
  args:{testingTypeId: {type: GraphQLString},subtypeDescription: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/createTestingSubtype?testingTypeId=${args.testingTypeId}&subtypeDescription=${args.subtypeDescription}&`, null, req);
  }
};
export {createTestingSubtype};


const createTestingType = {
  type: ResponseType,
  description: 'mutation for ofbiz createTestingType method',
  args:{testingTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/createTestingType?testingTypeId=${args.testingTypeId}&description=${args.description}&`, null, req);
  }
};
export {createTestingType};


const createUserAgentMethodType = {
  type: ResponseType,
  description: 'mutation for ofbiz createUserAgentMethodType method',
  args:{description: {type: GraphQLString},userAgentMethodTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/createUserAgentMethodType?description=${args.description}&userAgentMethodTypeId=${args.userAgentMethodTypeId}&`, null, req);
  }
};
export {createUserAgentMethodType};


const createUserAgentType = {
  type: ResponseType,
  description: 'mutation for ofbiz createUserAgentType method',
  args:{userAgentTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/createUserAgentType?userAgentTypeId=${args.userAgentTypeId}&description=${args.description}&`, null, req);
  }
};
export {createUserAgentType};


const deleteBrowserType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteBrowserType method',
  args:{browserTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/deleteBrowserType?browserTypeId=${args.browserTypeId}&`, null, req);
  }
};
export {deleteBrowserType};


const deleteEntitySyncHistory = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteEntitySyncHistory method',
  args:{entitySyncId: {type: GraphQLString},startDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/deleteEntitySyncHistory?entitySyncId=${args.entitySyncId}&startDate=${args.startDate}&`, null, req);
  }
};
export {deleteEntitySyncHistory};


const deleteEntitySyncInclude = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteEntitySyncInclude method',
  args:{entityOrPackage: {type: GraphQLString},entitySyncId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/deleteEntitySyncInclude?entityOrPackage=${args.entityOrPackage}&entitySyncId=${args.entitySyncId}&`, null, req);
  }
};
export {deleteEntitySyncInclude};


const deletePlatformType = {
  type: ResponseType,
  description: 'mutation for ofbiz deletePlatformType method',
  args:{platformTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/deletePlatformType?platformTypeId=${args.platformTypeId}&`, null, req);
  }
};
export {deletePlatformType};


const deleteProtocolType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProtocolType method',
  args:{protocolTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/deleteProtocolType?protocolTypeId=${args.protocolTypeId}&`, null, req);
  }
};
export {deleteProtocolType};


const deleteServerHitType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteServerHitType method',
  args:{hitTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/deleteServerHitType?hitTypeId=${args.hitTypeId}&`, null, req);
  }
};
export {deleteServerHitType};


const deleteTestingSubtype = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteTestingSubtype method',
  args:{testingTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/deleteTestingSubtype?testingTypeId=${args.testingTypeId}&`, null, req);
  }
};
export {deleteTestingSubtype};


const deleteTestingType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteTestingType method',
  args:{testingTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/deleteTestingType?testingTypeId=${args.testingTypeId}&`, null, req);
  }
};
export {deleteTestingType};


const deleteUserAgentMethodType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteUserAgentMethodType method',
  args:{userAgentMethodTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/deleteUserAgentMethodType?userAgentMethodTypeId=${args.userAgentMethodTypeId}&`, null, req);
  }
};
export {deleteUserAgentMethodType};


const deleteUserAgentType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteUserAgentType method',
  args:{userAgentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/deleteUserAgentType?userAgentTypeId=${args.userAgentTypeId}&`, null, req);
  }
};
export {deleteUserAgentType};


const distributedClearAllEntityCaches = {
  type: ResponseType,
  description: 'mutation for ofbiz distributedClearAllEntityCaches method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/distributedClearAllEntityCaches?`, null, req);
  }
};
export {distributedClearAllEntityCaches};


const distributedClearCacheLineByCondition = {
  type: ResponseType,
  description: 'mutation for ofbiz distributedClearCacheLineByCondition method',
  args:{condition: {type: GraphQLString},entityName: {type: GraphQLString},distribute: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/distributedClearCacheLineByCondition?condition=${args.condition}&entityName=${args.entityName}&distribute=${args.distribute}&`, null, req);
  }
};
export {distributedClearCacheLineByCondition};


const distributedClearCacheLineByDummyPK = {
  type: ResponseType,
  description: 'mutation for ofbiz distributedClearCacheLineByDummyPK method',
  args:{dummyPK: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/distributedClearCacheLineByDummyPK?dummyPK=${args.dummyPK}&`, null, req);
  }
};
export {distributedClearCacheLineByDummyPK};


const distributedClearCacheLineByPrimaryKey = {
  type: ResponseType,
  description: 'mutation for ofbiz distributedClearCacheLineByPrimaryKey method',
  args:{primaryKey: {type: new GraphQLList(KeyValueInputType)},distribute: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/distributedClearCacheLineByPrimaryKey?primaryKey=${args.primaryKey}&distribute=${args.distribute}&`, null, req);
  }
};
export {distributedClearCacheLineByPrimaryKey};


const distributedClearCacheLineByValue = {
  type: ResponseType,
  description: 'mutation for ofbiz distributedClearCacheLineByValue method',
  args:{value: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/distributedClearCacheLineByValue?value=${args.value}&`, null, req);
  }
};
export {distributedClearCacheLineByValue};


const entitySyncPermissionCheck = {
  type: ResponseType,
  description: 'mutation for ofbiz entitySyncPermissionCheck method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/entitySyncPermissionCheck?primaryPermission=${args.primaryPermission}&altPermission=${args.altPermission}&resourceDescription=${args.resourceDescription}&mainAction=${args.mainAction}&`, null, req);
  }
};
export {entitySyncPermissionCheck};


const importDelimitedEntityFile = {
  type: ResponseType,
  description: 'mutation for ofbiz importDelimitedEntityFile method',
  args:{file: {type: GraphQLString},delimiter: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/importDelimitedEntityFile?file=${args.file}&delimiter=${args.delimiter}&`, null, req);
  }
};
export {importDelimitedEntityFile};


const importEntityFileDirectory = {
  type: ResponseType,
  description: 'mutation for ofbiz importEntityFileDirectory method',
  args:{rootDirectory: {type: GraphQLString},delimiter: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/importEntityFileDirectory?rootDirectory=${args.rootDirectory}&delimiter=${args.delimiter}&`, null, req);
  }
};
export {importEntityFileDirectory};


const loadOfflineEntitySyncData = {
  type: ResponseType,
  description: 'mutation for ofbiz loadOfflineEntitySyncData method',
  args:{xmlFileName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/loadOfflineEntitySyncData?xmlFileName=${args.xmlFileName}&`, null, req);
  }
};
export {loadOfflineEntitySyncData};


const localhostClearAllEntityCaches = {
  type: ResponseType,
  description: 'mutation for ofbiz localhostClearAllEntityCaches method',
  args:{distribute: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/localhostClearAllEntityCaches?distribute=${args.distribute}&`, null, req);
  }
};
export {localhostClearAllEntityCaches};


const localhostClearCacheLineByDummyPK = {
  type: ResponseType,
  description: 'mutation for ofbiz localhostClearCacheLineByDummyPK method',
  args:{dummyPK: {type: new GraphQLList(KeyValueInputType)},distribute: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/localhostClearCacheLineByDummyPK?dummyPK=${args.dummyPK}&distribute=${args.distribute}&`, null, req);
  }
};
export {localhostClearCacheLineByDummyPK};


const localhostClearCacheLineByPrimaryKey = {
  type: ResponseType,
  description: 'mutation for ofbiz localhostClearCacheLineByPrimaryKey method',
  args:{primaryKey: {type: new GraphQLList(KeyValueInputType)},distribute: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/localhostClearCacheLineByPrimaryKey?primaryKey=${args.primaryKey}&distribute=${args.distribute}&`, null, req);
  }
};
export {localhostClearCacheLineByPrimaryKey};


const localhostClearCacheLineByValue = {
  type: ResponseType,
  description: 'mutation for ofbiz localhostClearCacheLineByValue method',
  args:{value: {type: new GraphQLList(KeyValueInputType)},distribute: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/localhostClearCacheLineByValue?value=${args.value}&distribute=${args.distribute}&`, null, req);
  }
};
export {localhostClearCacheLineByValue};


const pullAndReportEntitySyncData = {
  type: ResponseType,
  description: 'mutation for ofbiz pullAndReportEntitySyncData method',
  args:{entitySyncId: {type: GraphQLString},delegatorName: {type: GraphQLString},toCreateInserted: {type: GraphQLInt},toStoreUpdated: {type: GraphQLInt},toCreateUpdated: {type: GraphQLInt},toCreateNotUpdated: {type: GraphQLInt},toRemoveAlreadyDeleted: {type: GraphQLInt},toStoreNotUpdated: {type: GraphQLInt},toRemoveDeleted: {type: GraphQLInt},toStoreInserted: {type: GraphQLInt},startDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/pullAndReportEntitySyncData?entitySyncId=${args.entitySyncId}&delegatorName=${args.delegatorName}&toCreateInserted=${args.toCreateInserted}&toStoreUpdated=${args.toStoreUpdated}&toCreateUpdated=${args.toCreateUpdated}&toCreateNotUpdated=${args.toCreateNotUpdated}&toRemoveAlreadyDeleted=${args.toRemoveAlreadyDeleted}&toStoreNotUpdated=${args.toStoreNotUpdated}&toRemoveDeleted=${args.toRemoveDeleted}&toStoreInserted=${args.toStoreInserted}&startDate=${args.startDate}&`, null, req);
  }
};
export {pullAndReportEntitySyncData};


const rebuildEntityIndexesAndKeys = {
  type: ResponseType,
  description: 'mutation for ofbiz rebuildEntityIndexesAndKeys method',
  args:{groupName: {type: GraphQLString},fixColSizes: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/rebuildEntityIndexesAndKeys?groupName=${args.groupName}&fixColSizes=${args.fixColSizes}&`, null, req);
  }
};
export {rebuildEntityIndexesAndKeys};


const reencryptFields = {
  type: ResponseType,
  description: 'mutation for ofbiz reencryptFields method',
  args:{groupName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/reencryptFields?groupName=${args.groupName}&`, null, req);
  }
};
export {reencryptFields};


const reencryptPrivateKeys = {
  type: ResponseType,
  description: 'mutation for ofbiz reencryptPrivateKeys method',
  args:{oldKey: {type: GraphQLString},newKey: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/reencryptPrivateKeys?oldKey=${args.oldKey}&newKey=${args.newKey}&`, null, req);
  }
};
export {reencryptPrivateKeys};


const remotePullAndReportEntitySyncDataHttp = {
  type: ResponseType,
  description: 'mutation for ofbiz remotePullAndReportEntitySyncDataHttp method',
  args:{entitySyncId: {type: GraphQLString},delegatorName: {type: GraphQLString},toCreateInserted: {type: GraphQLInt},toStoreUpdated: {type: GraphQLInt},toCreateUpdated: {type: GraphQLInt},toCreateNotUpdated: {type: GraphQLInt},toRemoveAlreadyDeleted: {type: GraphQLInt},toStoreNotUpdated: {type: GraphQLInt},toRemoveDeleted: {type: GraphQLInt},toStoreInserted: {type: GraphQLInt},startDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/remotePullAndReportEntitySyncDataHttp?entitySyncId=${args.entitySyncId}&delegatorName=${args.delegatorName}&toCreateInserted=${args.toCreateInserted}&toStoreUpdated=${args.toStoreUpdated}&toCreateUpdated=${args.toCreateUpdated}&toCreateNotUpdated=${args.toCreateNotUpdated}&toRemoveAlreadyDeleted=${args.toRemoveAlreadyDeleted}&toStoreNotUpdated=${args.toStoreNotUpdated}&toRemoveDeleted=${args.toRemoveDeleted}&toStoreInserted=${args.toStoreInserted}&startDate=${args.startDate}&`, null, req);
  }
};
export {remotePullAndReportEntitySyncDataHttp};


const remotePullAndReportEntitySyncDataRmi = {
  type: ResponseType,
  description: 'mutation for ofbiz remotePullAndReportEntitySyncDataRmi method',
  args:{entitySyncId: {type: GraphQLString},delegatorName: {type: GraphQLString},toCreateInserted: {type: GraphQLInt},toStoreUpdated: {type: GraphQLInt},toCreateUpdated: {type: GraphQLInt},toCreateNotUpdated: {type: GraphQLInt},toRemoveAlreadyDeleted: {type: GraphQLInt},toStoreNotUpdated: {type: GraphQLInt},toRemoveDeleted: {type: GraphQLInt},toStoreInserted: {type: GraphQLInt},startDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/remotePullAndReportEntitySyncDataRmi?entitySyncId=${args.entitySyncId}&delegatorName=${args.delegatorName}&toCreateInserted=${args.toCreateInserted}&toStoreUpdated=${args.toStoreUpdated}&toCreateUpdated=${args.toCreateUpdated}&toCreateNotUpdated=${args.toCreateNotUpdated}&toRemoveAlreadyDeleted=${args.toRemoveAlreadyDeleted}&toStoreNotUpdated=${args.toStoreNotUpdated}&toRemoveDeleted=${args.toRemoveDeleted}&toStoreInserted=${args.toStoreInserted}&startDate=${args.startDate}&`, null, req);
  }
};
export {remotePullAndReportEntitySyncDataRmi};


const remoteStoreEntitySyncDataHttp = {
  type: ResponseType,
  description: 'mutation for ofbiz remoteStoreEntitySyncDataHttp method',
  args:{entitySyncId: {type: GraphQLString},delegatorName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/remoteStoreEntitySyncDataHttp?valuesToStore=${args.valuesToStore}&entitySyncId=${args.entitySyncId}&keysToRemove=${args.keysToRemove}&valuesToCreate=${args.valuesToCreate}&delegatorName=${args.delegatorName}&`, null, req);
  }
};
export {remoteStoreEntitySyncDataHttp};


const remoteStoreEntitySyncDataRmi = {
  type: ResponseType,
  description: 'mutation for ofbiz remoteStoreEntitySyncDataRmi method',
  args:{entitySyncId: {type: GraphQLString},delegatorName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/remoteStoreEntitySyncDataRmi?valuesToStore=${args.valuesToStore}&entitySyncId=${args.entitySyncId}&keysToRemove=${args.keysToRemove}&valuesToCreate=${args.valuesToCreate}&delegatorName=${args.delegatorName}&`, null, req);
  }
};
export {remoteStoreEntitySyncDataRmi};


const resetEntitySyncStatusToNotStarted = {
  type: ResponseType,
  description: 'mutation for ofbiz resetEntitySyncStatusToNotStarted method',
  args:{entitySyncId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/resetEntitySyncStatusToNotStarted?entitySyncId=${args.entitySyncId}&`, null, req);
  }
};
export {resetEntitySyncStatusToNotStarted};


const runEntitySync = {
  type: ResponseType,
  description: 'mutation for ofbiz runEntitySync method',
  args:{entitySyncId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/runEntitySync?entitySyncId=${args.entitySyncId}&`, null, req);
  }
};
export {runEntitySync};


const runOfflineEntitySync = {
  type: ResponseType,
  description: 'mutation for ofbiz runOfflineEntitySync method',
  args:{entitySyncId: {type: GraphQLString},fileName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/runOfflineEntitySync?entitySyncId=${args.entitySyncId}&fileName=${args.fileName}&`, null, req);
  }
};
export {runOfflineEntitySync};


const runPullEntitySync = {
  type: ResponseType,
  description: 'mutation for ofbiz runPullEntitySync method',
  args:{entitySyncId: {type: GraphQLString},remotePullAndReportEntitySyncDataName: {type: GraphQLString},remoteDelegatorName: {type: GraphQLString},localDelegatorName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/runPullEntitySync?entitySyncId=${args.entitySyncId}&remotePullAndReportEntitySyncDataName=${args.remotePullAndReportEntitySyncDataName}&remoteDelegatorName=${args.remoteDelegatorName}&localDelegatorName=${args.localDelegatorName}&`, null, req);
  }
};
export {runPullEntitySync};


const storeEntitySyncData = {
  type: ResponseType,
  description: 'mutation for ofbiz storeEntitySyncData method',
  args:{entitySyncId: {type: GraphQLString},delegatorName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/storeEntitySyncData?valuesToStore=${args.valuesToStore}&entitySyncId=${args.entitySyncId}&keysToRemove=${args.keysToRemove}&valuesToCreate=${args.valuesToCreate}&delegatorName=${args.delegatorName}&`, null, req);
  }
};
export {storeEntitySyncData};


const unwrapByteWrappers = {
  type: ResponseType,
  description: 'mutation for ofbiz unwrapByteWrappers method',
  args:{fieldName: {type: GraphQLString},entityName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/unwrapByteWrappers?fieldName=${args.fieldName}&entityName=${args.entityName}&`, null, req);
  }
};
export {unwrapByteWrappers};


const updateBrowserType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateBrowserType method',
  args:{browserTypeId: {type: GraphQLString},browserVersion: {type: GraphQLString},browserName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/updateBrowserType?browserTypeId=${args.browserTypeId}&browserVersion=${args.browserVersion}&browserName=${args.browserName}&`, null, req);
  }
};
export {updateBrowserType};


const updateEntitySync = {
  type: ResponseType,
  description: 'mutation for ofbiz updateEntitySync method',
  args:{entitySyncId: {type: GraphQLString},targetDelegatorName: {type: GraphQLString},maxRunningNoUpdateMillis: {type: GraphQLInt},lastHistoryStartDate: {type: GraphQLString},preOfflineSynchTime: {type: GraphQLString},forPushOnly: {type: GraphQLString},forPullOnly: {type: GraphQLString},lastSuccessfulSynchTime: {type: GraphQLString},keepRemoveInfoHours: {type: GraphQLFloat},offlineSyncSplitMillis: {type: GraphQLInt},targetServiceName: {type: GraphQLString},runStatusId: {type: GraphQLString},syncSplitMillis: {type: GraphQLInt},syncEndBufferMillis: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/updateEntitySync?entitySyncId=${args.entitySyncId}&targetDelegatorName=${args.targetDelegatorName}&maxRunningNoUpdateMillis=${args.maxRunningNoUpdateMillis}&lastHistoryStartDate=${args.lastHistoryStartDate}&preOfflineSynchTime=${args.preOfflineSynchTime}&forPushOnly=${args.forPushOnly}&forPullOnly=${args.forPullOnly}&lastSuccessfulSynchTime=${args.lastSuccessfulSynchTime}&keepRemoveInfoHours=${args.keepRemoveInfoHours}&offlineSyncSplitMillis=${args.offlineSyncSplitMillis}&targetServiceName=${args.targetServiceName}&runStatusId=${args.runStatusId}&syncSplitMillis=${args.syncSplitMillis}&syncEndBufferMillis=${args.syncEndBufferMillis}&`, null, req);
  }
};
export {updateEntitySync};


const updateEntitySyncHistory = {
  type: ResponseType,
  description: 'mutation for ofbiz updateEntitySyncHistory method',
  args:{entitySyncId: {type: GraphQLString},startDate: {type: GraphQLString},totalRowsExported: {type: GraphQLInt},perSplitMinItems: {type: GraphQLInt},toCreateInserted: {type: GraphQLInt},toStoreUpdated: {type: GraphQLInt},toCreateUpdated: {type: GraphQLInt},toCreateNotUpdated: {type: GraphQLInt},perSplitMinMillis: {type: GraphQLInt},totalStoreCalls: {type: GraphQLInt},perSplitMaxMillis: {type: GraphQLInt},runningTimeMillis: {type: GraphQLInt},beginningSynchTime: {type: GraphQLString},toStoreInserted: {type: GraphQLInt},lastSplitStartTime: {type: GraphQLInt},totalRowsToRemove: {type: GraphQLInt},totalSplits: {type: GraphQLInt},lastSuccessfulSynchTime: {type: GraphQLString},totalRowsToCreate: {type: GraphQLInt},perSplitMaxItems: {type: GraphQLInt},lastCandidateEndTime: {type: GraphQLString},totalRowsToStore: {type: GraphQLInt},toRemoveAlreadyDeleted: {type: GraphQLInt},toStoreNotUpdated: {type: GraphQLInt},toRemoveDeleted: {type: GraphQLInt},runStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/updateEntitySyncHistory?entitySyncId=${args.entitySyncId}&startDate=${args.startDate}&totalRowsExported=${args.totalRowsExported}&perSplitMinItems=${args.perSplitMinItems}&toCreateInserted=${args.toCreateInserted}&toStoreUpdated=${args.toStoreUpdated}&toCreateUpdated=${args.toCreateUpdated}&toCreateNotUpdated=${args.toCreateNotUpdated}&perSplitMinMillis=${args.perSplitMinMillis}&totalStoreCalls=${args.totalStoreCalls}&perSplitMaxMillis=${args.perSplitMaxMillis}&runningTimeMillis=${args.runningTimeMillis}&beginningSynchTime=${args.beginningSynchTime}&toStoreInserted=${args.toStoreInserted}&lastSplitStartTime=${args.lastSplitStartTime}&totalRowsToRemove=${args.totalRowsToRemove}&totalSplits=${args.totalSplits}&lastSuccessfulSynchTime=${args.lastSuccessfulSynchTime}&totalRowsToCreate=${args.totalRowsToCreate}&perSplitMaxItems=${args.perSplitMaxItems}&lastCandidateEndTime=${args.lastCandidateEndTime}&totalRowsToStore=${args.totalRowsToStore}&toRemoveAlreadyDeleted=${args.toRemoveAlreadyDeleted}&toStoreNotUpdated=${args.toStoreNotUpdated}&toRemoveDeleted=${args.toRemoveDeleted}&runStatusId=${args.runStatusId}&`, null, req);
  }
};
export {updateEntitySyncHistory};


const updateEntitySyncInclude = {
  type: ResponseType,
  description: 'mutation for ofbiz updateEntitySyncInclude method',
  args:{entityOrPackage: {type: GraphQLString},entitySyncId: {type: GraphQLString},applEnumId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/updateEntitySyncInclude?entityOrPackage=${args.entityOrPackage}&entitySyncId=${args.entitySyncId}&applEnumId=${args.applEnumId}&`, null, req);
  }
};
export {updateEntitySyncInclude};


const updateEntitySyncRunning = {
  type: ResponseType,
  description: 'mutation for ofbiz updateEntitySyncRunning method',
  args:{entitySyncId: {type: GraphQLString},targetDelegatorName: {type: GraphQLString},maxRunningNoUpdateMillis: {type: GraphQLInt},lastHistoryStartDate: {type: GraphQLString},preOfflineSynchTime: {type: GraphQLString},forPushOnly: {type: GraphQLString},forPullOnly: {type: GraphQLString},lastSuccessfulSynchTime: {type: GraphQLString},keepRemoveInfoHours: {type: GraphQLFloat},offlineSyncSplitMillis: {type: GraphQLInt},targetServiceName: {type: GraphQLString},runStatusId: {type: GraphQLString},syncSplitMillis: {type: GraphQLInt},syncEndBufferMillis: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/updateEntitySyncRunning?entitySyncId=${args.entitySyncId}&targetDelegatorName=${args.targetDelegatorName}&maxRunningNoUpdateMillis=${args.maxRunningNoUpdateMillis}&lastHistoryStartDate=${args.lastHistoryStartDate}&preOfflineSynchTime=${args.preOfflineSynchTime}&forPushOnly=${args.forPushOnly}&forPullOnly=${args.forPullOnly}&lastSuccessfulSynchTime=${args.lastSuccessfulSynchTime}&keepRemoveInfoHours=${args.keepRemoveInfoHours}&offlineSyncSplitMillis=${args.offlineSyncSplitMillis}&targetServiceName=${args.targetServiceName}&runStatusId=${args.runStatusId}&syncSplitMillis=${args.syncSplitMillis}&syncEndBufferMillis=${args.syncEndBufferMillis}&`, null, req);
  }
};
export {updateEntitySyncRunning};


const updateOfflineEntitySync = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOfflineEntitySync method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/updateOfflineEntitySync?`, null, req);
  }
};
export {updateOfflineEntitySync};


const updatePlatformType = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePlatformType method',
  args:{platformTypeId: {type: GraphQLString},platformVersion: {type: GraphQLString},platformName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/updatePlatformType?platformTypeId=${args.platformTypeId}&platformVersion=${args.platformVersion}&platformName=${args.platformName}&`, null, req);
  }
};
export {updatePlatformType};


const updateProtocolType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProtocolType method',
  args:{protocolTypeId: {type: GraphQLString},protocolName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/updateProtocolType?protocolTypeId=${args.protocolTypeId}&protocolName=${args.protocolName}&`, null, req);
  }
};
export {updateProtocolType};


const updateServerHitType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateServerHitType method',
  args:{hitTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/updateServerHitType?hitTypeId=${args.hitTypeId}&description=${args.description}&`, null, req);
  }
};
export {updateServerHitType};


const updateTestingSubtype = {
  type: ResponseType,
  description: 'mutation for ofbiz updateTestingSubtype method',
  args:{testingTypeId: {type: GraphQLString},subtypeDescription: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/updateTestingSubtype?testingTypeId=${args.testingTypeId}&subtypeDescription=${args.subtypeDescription}&`, null, req);
  }
};
export {updateTestingSubtype};


const updateTestingType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateTestingType method',
  args:{testingTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/updateTestingType?testingTypeId=${args.testingTypeId}&description=${args.description}&`, null, req);
  }
};
export {updateTestingType};


const updateUserAgentMethodType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateUserAgentMethodType method',
  args:{userAgentMethodTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/updateUserAgentMethodType?userAgentMethodTypeId=${args.userAgentMethodTypeId}&description=${args.description}&`, null, req);
  }
};
export {updateUserAgentMethodType};


const updateUserAgentType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateUserAgentType method',
  args:{userAgentTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/updateUserAgentType?userAgentTypeId=${args.userAgentTypeId}&description=${args.description}&`, null, req);
  }
};
export {updateUserAgentType};


const watchEntity = {
  type: ResponseType,
  description: 'mutation for ofbiz watchEntity method',
  args:{newValue: {type: new GraphQLList(KeyValueInputType)},fieldName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityexts/watchEntity?newValue=${args.newValue}&fieldName=${args.fieldName}&`, null, req);
  }
};
export {watchEntity};
