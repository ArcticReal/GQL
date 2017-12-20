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


const entityExportAll = {
  type: ResopnseType,
  description: 'mutation for ofbiz entityExportAll method',
  args:{fromDate: {type: GraphQLString},outpath: {type: GraphQLString},txTimeout: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/webtoolss/entityExportAll?fromDate=${args.fromDate}outpath=${args.outpath}txTimeout=${args.txTimeout}`, null, req);
  }
};
export {entityExportAll};


const entityImport = {
  type: ResopnseType,
  description: 'mutation for ofbiz entityImport method',
  args:{placeholderValues: {type: GraphQLString},filename: {type: GraphQLString},checkDataOnly: {type: GraphQLString},fmfilename: {type: GraphQLString},createDummyFks: {type: GraphQLString},maintainTimeStamps: {type: GraphQLString},fulltext: {type: GraphQLString},isUrl: {type: GraphQLString},txTimeout: {type: GraphQLInt},mostlyInserts: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/webtoolss/entityImport?placeholderValues=${args.placeholderValues}filename=${args.filename}checkDataOnly=${args.checkDataOnly}fmfilename=${args.fmfilename}createDummyFks=${args.createDummyFks}maintainTimeStamps=${args.maintainTimeStamps}fulltext=${args.fulltext}isUrl=${args.isUrl}txTimeout=${args.txTimeout}mostlyInserts=${args.mostlyInserts}`, null, req);
  }
};
export {entityImport};


const entityImportDir = {
  type: ResopnseType,
  description: 'mutation for ofbiz entityImportDir method',
  args:{path: {type: GraphQLString},deleteFiles: {type: GraphQLString},placeholderValues: {type: GraphQLString},checkDataOnly: {type: GraphQLString},filePause: {type: GraphQLInt},createDummyFks: {type: GraphQLString},maintainTimeStamps: {type: GraphQLString},txTimeout: {type: GraphQLInt},mostlyInserts: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/webtoolss/entityImportDir?path=${args.path}deleteFiles=${args.deleteFiles}placeholderValues=${args.placeholderValues}checkDataOnly=${args.checkDataOnly}filePause=${args.filePause}createDummyFks=${args.createDummyFks}maintainTimeStamps=${args.maintainTimeStamps}txTimeout=${args.txTimeout}mostlyInserts=${args.mostlyInserts}`, null, req);
  }
};
export {entityImportDir};


const entityImportReaders = {
  type: ResopnseType,
  description: 'mutation for ofbiz entityImportReaders method',
  args:{overrideDelegator: {type: GraphQLString},checkDataOnly: {type: GraphQLString},readers: {type: GraphQLString},createDummyFks: {type: GraphQLString},maintainTimeStamps: {type: GraphQLString},txTimeout: {type: GraphQLInt},mostlyInserts: {type: GraphQLString},overrideGroup: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/webtoolss/entityImportReaders?overrideDelegator=${args.overrideDelegator}checkDataOnly=${args.checkDataOnly}readers=${args.readers}createDummyFks=${args.createDummyFks}maintainTimeStamps=${args.maintainTimeStamps}txTimeout=${args.txTimeout}mostlyInserts=${args.mostlyInserts}overrideGroup=${args.overrideGroup}`, null, req);
  }
};
export {entityImportReaders};


const entityMaintPermCheck = {
  type: ResopnseType,
  description: 'mutation for ofbiz entityMaintPermCheck method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/webtoolss/entityMaintPermCheck?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {entityMaintPermCheck};


const exportEntityEoModelBundle = {
  type: ResopnseType,
  description: 'mutation for ofbiz exportEntityEoModelBundle method',
  args:{eomodeldFullPath: {type: GraphQLString},entityNamePrefix: {type: GraphQLString},entityGroupId: {type: GraphQLString},datasourceName: {type: GraphQLString},entityPackageName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/webtoolss/exportEntityEoModelBundle?eomodeldFullPath=${args.eomodeldFullPath}entityNamePrefix=${args.entityNamePrefix}entityGroupId=${args.entityGroupId}datasourceName=${args.datasourceName}entityPackageName=${args.entityPackageName}`, null, req);
  }
};
export {exportEntityEoModelBundle};


const exportServiceEoModelBundle = {
  type: ResopnseType,
  description: 'mutation for ofbiz exportServiceEoModelBundle method',
  args:{eomodeldFullPath: {type: GraphQLString},serviceName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/webtoolss/exportServiceEoModelBundle?eomodeldFullPath=${args.eomodeldFullPath}serviceName=${args.serviceName}`, null, req);
  }
};
export {exportServiceEoModelBundle};


const getEntityRefData = {
  type: ResopnseType,
  description: 'mutation for ofbiz getEntityRefData method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/webtoolss/getEntityRefData?`, null, req);
  }
};
export {getEntityRefData};


const parseEntityXmlFile = {
  type: ResopnseType,
  description: 'mutation for ofbiz parseEntityXmlFile method',
  args:{xmltext: {type: GraphQLString},placeholderValues: {type: GraphQLString},checkDataOnly: {type: GraphQLString},createDummyFks: {type: GraphQLString},maintainTimeStamps: {type: GraphQLString},txTimeout: {type: GraphQLInt},mostlyInserts: {type: GraphQLString},url: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/webtoolss/parseEntityXmlFile?xmltext=${args.xmltext}placeholderValues=${args.placeholderValues}checkDataOnly=${args.checkDataOnly}createDummyFks=${args.createDummyFks}maintainTimeStamps=${args.maintainTimeStamps}txTimeout=${args.txTimeout}mostlyInserts=${args.mostlyInserts}url=${args.url}`, null, req);
  }
};
export {parseEntityXmlFile};


const saveLabelsToXmlFile = {
  type: ResopnseType,
  description: 'mutation for ofbiz saveLabelsToXmlFile method',
  args:{fileName: {type: GraphQLString},update_label: {type: GraphQLString},confirm: {type: GraphQLString},removeLabel: {type: GraphQLString},key: {type: GraphQLString},keyComment: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/webtoolss/saveLabelsToXmlFile?fileName=${args.fileName}update_label=${args.update_label}confirm=${args.confirm}localeNames=${args.localeNames}localeValues=${args.localeValues}localeComments=${args.localeComments}removeLabel=${args.removeLabel}key=${args.key}keyComment=${args.keyComment}`, null, req);
  }
};
export {saveLabelsToXmlFile};
