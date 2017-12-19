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


const addPortalPageColumn = {
  type: GraphQLString,
  description: 'mutation for ofbiz addPortalPageColumn method',
  args:{portalPageId: {type: GraphQLString},columnWidthPixels: {type: GraphQLInt},columnWidthPercentage: {type: GraphQLInt},columnSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/addPortalPageColumn?portalPageId=${args.portalPageId}columnWidthPixels=${args.columnWidthPixels}columnWidthPercentage=${args.columnWidthPercentage}columnSeqId=${args.columnSeqId}`, null, req);
  }
};
export {addPortalPageColumn};


const adjustDebugLevels = {
  type: GraphQLString,
  description: 'mutation for ofbiz adjustDebugLevels method',
  args:{important: {type: GraphQLString},timing: {type: GraphQLString},warning: {type: GraphQLString},error: {type: GraphQLString},fatal: {type: GraphQLString},info: {type: GraphQLString},verbose: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/adjustDebugLevels?important=${args.important}timing=${args.timing}warning=${args.warning}error=${args.error}fatal=${args.fatal}info=${args.info}verbose=${args.verbose}`, null, req);
  }
};
export {adjustDebugLevels};


const checkUomConversion = {
  type: GraphQLString,
  description: 'mutation for ofbiz checkUomConversion method',
  args:{uomId: {type: GraphQLString},uomIdTo: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/checkUomConversion?uomId=${args.uomId}uomIdTo=${args.uomIdTo}`, null, req);
  }
};
export {checkUomConversion};


const checkUomConversionDated = {
  type: GraphQLString,
  description: 'mutation for ofbiz checkUomConversionDated method',
  args:{fromDate: {type: GraphQLString},uomId: {type: GraphQLString},uomIdTo: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/checkUomConversionDated?fromDate=${args.fromDate}uomId=${args.uomId}uomIdTo=${args.uomIdTo}`, null, req);
  }
};
export {checkUomConversionDated};


const commonGenericPermission = {
  type: GraphQLString,
  description: 'mutation for ofbiz commonGenericPermission method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/commonGenericPermission?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {commonGenericPermission};


const commonGetAllCrudPermissions = {
  type: GraphQLString,
  description: 'mutation for ofbiz commonGetAllCrudPermissions method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/commonGetAllCrudPermissions?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}`, null, req);
  }
};
export {commonGetAllCrudPermissions};


const convertUom = {
  type: GraphQLString,
  description: 'mutation for ofbiz convertUom method',
  args:{originalValue: {type: GraphQLFloat},uomId: {type: GraphQLString},uomIdTo: {type: GraphQLString},defaultRoundingMode: {type: GraphQLString},purposeEnumId: {type: GraphQLString},conversionParameters: {type: GraphQLString},defaultDecimalScale: {type: GraphQLInt},asOfDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/convertUom?originalValue=${args.originalValue}uomId=${args.uomId}uomIdTo=${args.uomIdTo}defaultRoundingMode=${args.defaultRoundingMode}purposeEnumId=${args.purposeEnumId}conversionParameters=${args.conversionParameters}defaultDecimalScale=${args.defaultDecimalScale}asOfDate=${args.asOfDate}`, null, req);
  }
};
export {convertUom};


const convertUomCustom = {
  type: GraphQLString,
  description: 'mutation for ofbiz convertUomCustom method',
  args:{originalValue: {type: GraphQLFloat},uomId: {type: GraphQLString},uomConversion: {type: GraphQLString},uomIdTo: {type: GraphQLString},conversionParameters: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/convertUomCustom?originalValue=${args.originalValue}uomId=${args.uomId}uomConversion=${args.uomConversion}uomIdTo=${args.uomIdTo}conversionParameters=${args.conversionParameters}`, null, req);
  }
};
export {convertUomCustom};


const copyUserPrefGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz copyUserPrefGroup method',
  args:{userPrefGroupTypeId: {type: GraphQLString},fromUserLoginId: {type: GraphQLString},userPrefLoginId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/copyUserPrefGroup?userPrefGroupTypeId=${args.userPrefGroupTypeId}fromUserLoginId=${args.fromUserLoginId}userPrefLoginId=${args.userPrefLoginId}`, null, req);
  }
};
export {copyUserPrefGroup};


const createCustomTimePeriod = {
  type: GraphQLString,
  description: 'mutation for ofbiz createCustomTimePeriod method',
  args:{fromDate: {type: GraphQLString},periodTypeId: {type: GraphQLString},organizationPartyId: {type: GraphQLString},thruDate: {type: GraphQLString},periodNum: {type: GraphQLInt},isClosed: {type: GraphQLString},periodName: {type: GraphQLString},parentPeriodId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/createCustomTimePeriod?fromDate=${args.fromDate}periodTypeId=${args.periodTypeId}organizationPartyId=${args.organizationPartyId}thruDate=${args.thruDate}periodNum=${args.periodNum}isClosed=${args.isClosed}periodName=${args.periodName}parentPeriodId=${args.parentPeriodId}`, null, req);
  }
};
export {createCustomTimePeriod};


const createDataSource = {
  type: GraphQLString,
  description: 'mutation for ofbiz createDataSource method',
  args:{dataSourceId: {type: GraphQLString},dataSourceTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/createDataSource?dataSourceId=${args.dataSourceId}dataSourceTypeId=${args.dataSourceTypeId}description=${args.description}`, null, req);
  }
};
export {createDataSource};


const createDataSourceType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createDataSourceType method',
  args:{dataSourceTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/createDataSourceType?dataSourceTypeId=${args.dataSourceTypeId}description=${args.description}`, null, req);
  }
};
export {createDataSourceType};


const createEnumeration = {
  type: GraphQLString,
  description: 'mutation for ofbiz createEnumeration method',
  args:{enumTypeId: {type: GraphQLString},description: {type: GraphQLString},enumCode: {type: GraphQLString},sequenceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/createEnumeration?enumTypeId=${args.enumTypeId}description=${args.description}enumCode=${args.enumCode}sequenceId=${args.sequenceId}`, null, req);
  }
};
export {createEnumeration};


const createGeo = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGeo method',
  args:{geoName: {type: GraphQLString},geoTypeId: {type: GraphQLString},geoId: {type: GraphQLString},geoCode: {type: GraphQLString},abbreviation: {type: GraphQLString},geoSecCode: {type: GraphQLString},wellKnownText: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/createGeo?geoName=${args.geoName}geoTypeId=${args.geoTypeId}geoId=${args.geoId}geoCode=${args.geoCode}abbreviation=${args.abbreviation}geoSecCode=${args.geoSecCode}wellKnownText=${args.wellKnownText}`, null, req);
  }
};
export {createGeo};


const createGeoAssocType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGeoAssocType method',
  args:{geoAssocTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/createGeoAssocType?geoAssocTypeId=${args.geoAssocTypeId}description=${args.description}`, null, req);
  }
};
export {createGeoAssocType};


const createGeoPoint = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGeoPoint method',
  args:{dataSourceId: {type: GraphQLString},latitude: {type: GraphQLString},longitude: {type: GraphQLString},elevation: {type: GraphQLFloat},elevationUomId: {type: GraphQLString},geoPointTypeEnumId: {type: GraphQLString},description: {type: GraphQLString},information: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/createGeoPoint?dataSourceId=${args.dataSourceId}latitude=${args.latitude}longitude=${args.longitude}elevation=${args.elevation}elevationUomId=${args.elevationUomId}geoPointTypeEnumId=${args.geoPointTypeEnumId}description=${args.description}information=${args.information}`, null, req);
  }
};
export {createGeoPoint};


const createGeoType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGeoType method',
  args:{geoTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/createGeoType?geoTypeId=${args.geoTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {createGeoType};


const createJsLanguageFileMapping = {
  type: GraphQLString,
  description: 'mutation for ofbiz createJsLanguageFileMapping method',
  args:{encoding: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/createJsLanguageFileMapping?encoding=${args.encoding}`, null, req);
  }
};
export {createJsLanguageFileMapping};


const createKeywordThesaurus = {
  type: GraphQLString,
  description: 'mutation for ofbiz createKeywordThesaurus method',
  args:{enteredKeyword: {type: GraphQLString},alternateKeyword: {type: GraphQLString},relationshipEnumId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/createKeywordThesaurus?enteredKeyword=${args.enteredKeyword}alternateKeyword=${args.alternateKeyword}relationshipEnumId=${args.relationshipEnumId}`, null, req);
  }
};
export {createKeywordThesaurus};


const createNote = {
  type: GraphQLString,
  description: 'mutation for ofbiz createNote method',
  args:{note: {type: GraphQLString},noteName: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/createNote?note=${args.note}noteName=${args.noteName}partyId=${args.partyId}`, null, req);
  }
};
export {createNote};


const createPeriodType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPeriodType method',
  args:{periodTypeId: {type: GraphQLString},description: {type: GraphQLString},periodLength: {type: GraphQLInt},uomId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/createPeriodType?periodTypeId=${args.periodTypeId}description=${args.description}periodLength=${args.periodLength}uomId=${args.uomId}`, null, req);
  }
};
export {createPeriodType};


const createPortalPage = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPortalPage method',
  args:{portalPageId: {type: GraphQLString},originalPortalPageId: {type: GraphQLString},securityGroupId: {type: GraphQLString},parentPortalPageId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},helpContentId: {type: GraphQLString},description: {type: GraphQLString},ownerUserLoginId: {type: GraphQLString},portalPageName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/createPortalPage?portalPageId=${args.portalPageId}originalPortalPageId=${args.originalPortalPageId}securityGroupId=${args.securityGroupId}parentPortalPageId=${args.parentPortalPageId}sequenceNum=${args.sequenceNum}helpContentId=${args.helpContentId}description=${args.description}ownerUserLoginId=${args.ownerUserLoginId}portalPageName=${args.portalPageName}`, null, req);
  }
};
export {createPortalPage};


const createPortalPagePortlet = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPortalPagePortlet method',
  args:{portalPageId: {type: GraphQLString},portalPortletId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},columnSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/createPortalPagePortlet?portalPageId=${args.portalPageId}portalPortletId=${args.portalPortletId}sequenceNum=${args.sequenceNum}columnSeqId=${args.columnSeqId}`, null, req);
  }
};
export {createPortalPagePortlet};


const createPortletAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPortletAttribute method',
  args:{portalPageId: {type: GraphQLString},portletSeqId: {type: GraphQLString},portalPortletId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt},attrType: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/createPortletAttribute?portalPageId=${args.portalPageId}portletSeqId=${args.portletSeqId}portalPortletId=${args.portalPortletId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}attrType=${args.attrType}`, null, req);
  }
};
export {createPortletAttribute};


const createStatusValidChange = {
  type: GraphQLString,
  description: 'mutation for ofbiz createStatusValidChange method',
  args:{statusId: {type: GraphQLString},statusIdTo: {type: GraphQLString},conditionExpression: {type: GraphQLString},transitionName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/createStatusValidChange?statusId=${args.statusId}statusIdTo=${args.statusIdTo}conditionExpression=${args.conditionExpression}transitionName=${args.transitionName}`, null, req);
  }
};
export {createStatusValidChange};


const createTemporalExpression = {
  type: GraphQLString,
  description: 'mutation for ofbiz createTemporalExpression method',
  args:{string1: {type: GraphQLString},string2: {type: GraphQLString},description: {type: GraphQLString},integer1: {type: GraphQLInt},tempExprId: {type: GraphQLString},date2: {type: GraphQLString},date1: {type: GraphQLString},tempExprTypeId: {type: GraphQLString},integer2: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/createTemporalExpression?string1=${args.string1}string2=${args.string2}description=${args.description}integer1=${args.integer1}tempExprId=${args.tempExprId}date2=${args.date2}date1=${args.date1}tempExprTypeId=${args.tempExprTypeId}integer2=${args.integer2}`, null, req);
  }
};
export {createTemporalExpression};


const createTemporalExpressionAssoc = {
  type: GraphQLString,
  description: 'mutation for ofbiz createTemporalExpressionAssoc method',
  args:{fromTempExprId: {type: GraphQLString},toTempExprId: {type: GraphQLString},exprAssocType: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/createTemporalExpressionAssoc?fromTempExprId=${args.fromTempExprId}toTempExprId=${args.toTempExprId}exprAssocType=${args.exprAssocType}`, null, req);
  }
};
export {createTemporalExpressionAssoc};


const createUom = {
  type: GraphQLString,
  description: 'mutation for ofbiz createUom method',
  args:{description: {type: GraphQLString},uomId: {type: GraphQLString},abbreviation: {type: GraphQLString},uomTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/createUom?description=${args.description}uomId=${args.uomId}abbreviation=${args.abbreviation}uomTypeId=${args.uomTypeId}`, null, req);
  }
};
export {createUom};


const createUomConversionDated = {
  type: GraphQLString,
  description: 'mutation for ofbiz createUomConversionDated method',
  args:{fromDate: {type: GraphQLString},uomId: {type: GraphQLString},uomIdTo: {type: GraphQLString},roundingMode: {type: GraphQLString},purposeEnumId: {type: GraphQLString},conversionFactor: {type: GraphQLFloat},decimalScale: {type: GraphQLInt},customMethodId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/createUomConversionDated?fromDate=${args.fromDate}uomId=${args.uomId}uomIdTo=${args.uomIdTo}roundingMode=${args.roundingMode}purposeEnumId=${args.purposeEnumId}conversionFactor=${args.conversionFactor}decimalScale=${args.decimalScale}customMethodId=${args.customMethodId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createUomConversionDated};


const createUomGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz createUomGroup method',
  args:{uomGroupId: {type: GraphQLString},uomId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/createUomGroup?uomGroupId=${args.uomGroupId}uomId=${args.uomId}`, null, req);
  }
};
export {createUomGroup};


const createUomType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createUomType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString},uomTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/createUomType?parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}uomTypeId=${args.uomTypeId}`, null, req);
  }
};
export {createUomType};


const createUserLogin = {
  type: GraphQLString,
  description: 'mutation for ofbiz createUserLogin method',
  args:{userLoginId: {type: GraphQLString},currentPasswordVerify: {type: GraphQLString},currentPassword: {type: GraphQLString},passwordHint: {type: GraphQLString},securityQuestion: {type: GraphQLString},securityAnswer: {type: GraphQLString},externalAuthId: {type: GraphQLString},requirePasswordChange: {type: GraphQLString},partyId: {type: GraphQLString},enabled: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/createUserLogin?userLoginId=${args.userLoginId}currentPasswordVerify=${args.currentPasswordVerify}currentPassword=${args.currentPassword}passwordHint=${args.passwordHint}securityQuestion=${args.securityQuestion}securityAnswer=${args.securityAnswer}externalAuthId=${args.externalAuthId}requirePasswordChange=${args.requirePasswordChange}partyId=${args.partyId}enabled=${args.enabled}`, null, req);
  }
};
export {createUserLogin};


const createUserPrefGroupType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createUserPrefGroupType method',
  args:{userPrefGroupTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/createUserPrefGroupType?userPrefGroupTypeId=${args.userPrefGroupTypeId}description=${args.description}`, null, req);
  }
};
export {createUserPrefGroupType};


const createVisualTheme = {
  type: GraphQLString,
  description: 'mutation for ofbiz createVisualTheme method',
  args:{visualThemeId: {type: GraphQLString},description: {type: GraphQLString},visualThemeSetId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/createVisualTheme?visualThemeId=${args.visualThemeId}description=${args.description}visualThemeSetId=${args.visualThemeSetId}`, null, req);
  }
};
export {createVisualTheme};


const createVisualThemeResource = {
  type: GraphQLString,
  description: 'mutation for ofbiz createVisualThemeResource method',
  args:{resourceTypeEnumId: {type: GraphQLString},visualThemeId: {type: GraphQLString},resourceValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/createVisualThemeResource?resourceTypeEnumId=${args.resourceTypeEnumId}visualThemeId=${args.visualThemeId}resourceValue=${args.resourceValue}`, null, req);
  }
};
export {createVisualThemeResource};


const deleteCustomTimePeriod = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCustomTimePeriod method',
  args:{customTimePeriodId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/deleteCustomTimePeriod?customTimePeriodId=${args.customTimePeriodId}`, null, req);
  }
};
export {deleteCustomTimePeriod};


const deleteDataSource = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteDataSource method',
  args:{dataSourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/deleteDataSource?dataSourceId=${args.dataSourceId}`, null, req);
  }
};
export {deleteDataSource};


const deleteDataSourceType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteDataSourceType method',
  args:{dataSourceTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/deleteDataSourceType?dataSourceTypeId=${args.dataSourceTypeId}`, null, req);
  }
};
export {deleteDataSourceType};


const deleteEnumeration = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteEnumeration method',
  args:{enumId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/deleteEnumeration?enumId=${args.enumId}`, null, req);
  }
};
export {deleteEnumeration};


const deleteGeo = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGeo method',
  args:{geoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/deleteGeo?geoId=${args.geoId}`, null, req);
  }
};
export {deleteGeo};


const deleteGeoAssoc = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGeoAssoc method',
  args:{geoId: {type: GraphQLString},geoIdTo: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/deleteGeoAssoc?geoId=${args.geoId}geoIdTo=${args.geoIdTo}`, null, req);
  }
};
export {deleteGeoAssoc};


const deleteGeoAssocType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGeoAssocType method',
  args:{geoAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/deleteGeoAssocType?geoAssocTypeId=${args.geoAssocTypeId}`, null, req);
  }
};
export {deleteGeoAssocType};


const deleteGeoPoint = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGeoPoint method',
  args:{geoPointId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/deleteGeoPoint?geoPointId=${args.geoPointId}`, null, req);
  }
};
export {deleteGeoPoint};


const deleteGeoType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGeoType method',
  args:{geoTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/deleteGeoType?geoTypeId=${args.geoTypeId}`, null, req);
  }
};
export {deleteGeoType};


const deleteKeywordThesaurus = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteKeywordThesaurus method',
  args:{enteredKeyword: {type: GraphQLString},alternateKeyword: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/deleteKeywordThesaurus?enteredKeyword=${args.enteredKeyword}alternateKeyword=${args.alternateKeyword}`, null, req);
  }
};
export {deleteKeywordThesaurus};


const deletePeriodType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePeriodType method',
  args:{periodTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/deletePeriodType?periodTypeId=${args.periodTypeId}`, null, req);
  }
};
export {deletePeriodType};


const deletePortalPage = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePortalPage method',
  args:{portalPageId: {type: GraphQLString},originalPortalPageId: {type: GraphQLString},securityGroupId: {type: GraphQLString},parentPortalPageId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},helpContentId: {type: GraphQLString},description: {type: GraphQLString},ownerUserLoginId: {type: GraphQLString},portalPageName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/deletePortalPage?portalPageId=${args.portalPageId}originalPortalPageId=${args.originalPortalPageId}securityGroupId=${args.securityGroupId}parentPortalPageId=${args.parentPortalPageId}sequenceNum=${args.sequenceNum}helpContentId=${args.helpContentId}description=${args.description}ownerUserLoginId=${args.ownerUserLoginId}portalPageName=${args.portalPageName}`, null, req);
  }
};
export {deletePortalPage};


const deletePortalPageColumn = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePortalPageColumn method',
  args:{portalPageId: {type: GraphQLString},columnSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/deletePortalPageColumn?portalPageId=${args.portalPageId}columnSeqId=${args.columnSeqId}`, null, req);
  }
};
export {deletePortalPageColumn};


const deletePortalPagePortlet = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePortalPagePortlet method',
  args:{portalPageId: {type: GraphQLString},portletSeqId: {type: GraphQLString},portalPortletId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/deletePortalPagePortlet?portalPageId=${args.portalPageId}portletSeqId=${args.portletSeqId}portalPortletId=${args.portalPortletId}`, null, req);
  }
};
export {deletePortalPagePortlet};


const deleteStatusValidChange = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteStatusValidChange method',
  args:{statusId: {type: GraphQLString},statusIdTo: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/deleteStatusValidChange?statusId=${args.statusId}statusIdTo=${args.statusIdTo}`, null, req);
  }
};
export {deleteStatusValidChange};


const deleteTemporalExpressionAssoc = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTemporalExpressionAssoc method',
  args:{fromTempExprId: {type: GraphQLString},toTempExprId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/deleteTemporalExpressionAssoc?fromTempExprId=${args.fromTempExprId}toTempExprId=${args.toTempExprId}`, null, req);
  }
};
export {deleteTemporalExpressionAssoc};


const deleteUom = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteUom method',
  args:{uomId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/deleteUom?uomId=${args.uomId}`, null, req);
  }
};
export {deleteUom};


const deleteUomGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteUomGroup method',
  args:{uomGroupId: {type: GraphQLString},uomId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/deleteUomGroup?uomGroupId=${args.uomGroupId}uomId=${args.uomId}`, null, req);
  }
};
export {deleteUomGroup};


const deleteUomType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteUomType method',
  args:{uomTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/deleteUomType?uomTypeId=${args.uomTypeId}`, null, req);
  }
};
export {deleteUomType};


const deleteUserPrefGroupType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteUserPrefGroupType method',
  args:{userPrefGroupTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/deleteUserPrefGroupType?userPrefGroupTypeId=${args.userPrefGroupTypeId}`, null, req);
  }
};
export {deleteUserPrefGroupType};


const deleteVisualTheme = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteVisualTheme method',
  args:{visualThemeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/deleteVisualTheme?visualThemeId=${args.visualThemeId}`, null, req);
  }
};
export {deleteVisualTheme};


const deleteVisualThemeResource = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteVisualThemeResource method',
  args:{resourceTypeEnumId: {type: GraphQLString},visualThemeId: {type: GraphQLString},sequenceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/deleteVisualThemeResource?resourceTypeEnumId=${args.resourceTypeEnumId}visualThemeId=${args.visualThemeId}sequenceId=${args.sequenceId}`, null, req);
  }
};
export {deleteVisualThemeResource};


const displayXaDebugInfo = {
  type: GraphQLString,
  description: 'mutation for ofbiz displayXaDebugInfo method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/displayXaDebugInfo?`, null, req);
  }
};
export {displayXaDebugInfo};


const echoService = {
  type: GraphQLString,
  description: 'mutation for ofbiz echoService method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/echoService?`, null, req);
  }
};
export {echoService};


const executeFind = {
  type: GraphQLString,
  description: 'mutation for ofbiz executeFind method',
  args:{entityName: {type: GraphQLString},maxRows: {type: GraphQLInt},entityConditionList: {type: GraphQLString},noConditionFind: {type: GraphQLString},distinct: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/executeFind?entityName=${args.entityName}orderByList=${args.orderByList}maxRows=${args.maxRows}entityConditionList=${args.entityConditionList}noConditionFind=${args.noConditionFind}distinct=${args.distinct}fieldList=${args.fieldList}`, null, req);
  }
};
export {executeFind};


const forceGarbageCollection = {
  type: GraphQLString,
  description: 'mutation for ofbiz forceGarbageCollection method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/forceGarbageCollection?`, null, req);
  }
};
export {forceGarbageCollection};


const ftpGetFile = {
  type: GraphQLString,
  description: 'mutation for ofbiz ftpGetFile method',
  args:{hostname: {type: GraphQLString},password: {type: GraphQLString},remoteFilename: {type: GraphQLString},localFilename: {type: GraphQLString},username: {type: GraphQLString},defaultTimeout: {type: GraphQLInt},binaryTransfer: {type: GraphQLBoolean},passiveMode: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/ftpGetFile?hostname=${args.hostname}password=${args.password}remoteFilename=${args.remoteFilename}localFilename=${args.localFilename}username=${args.username}defaultTimeout=${args.defaultTimeout}binaryTransfer=${args.binaryTransfer}passiveMode=${args.passiveMode}`, null, req);
  }
};
export {ftpGetFile};


const ftpInterface = {
  type: GraphQLString,
  description: 'mutation for ofbiz ftpInterface method',
  args:{hostname: {type: GraphQLString},password: {type: GraphQLString},remoteFilename: {type: GraphQLString},localFilename: {type: GraphQLString},username: {type: GraphQLString},defaultTimeout: {type: GraphQLInt},binaryTransfer: {type: GraphQLBoolean},passiveMode: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/ftpInterface?hostname=${args.hostname}password=${args.password}remoteFilename=${args.remoteFilename}localFilename=${args.localFilename}username=${args.username}defaultTimeout=${args.defaultTimeout}binaryTransfer=${args.binaryTransfer}passiveMode=${args.passiveMode}`, null, req);
  }
};
export {ftpInterface};


const ftpPutFile = {
  type: GraphQLString,
  description: 'mutation for ofbiz ftpPutFile method',
  args:{hostname: {type: GraphQLString},password: {type: GraphQLString},remoteFilename: {type: GraphQLString},localFilename: {type: GraphQLString},username: {type: GraphQLString},defaultTimeout: {type: GraphQLInt},binaryTransfer: {type: GraphQLBoolean},passiveMode: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/ftpPutFile?hostname=${args.hostname}password=${args.password}remoteFilename=${args.remoteFilename}localFilename=${args.localFilename}username=${args.username}defaultTimeout=${args.defaultTimeout}binaryTransfer=${args.binaryTransfer}siteCommands=${args.siteCommands}passiveMode=${args.passiveMode}`, null, req);
  }
};
export {ftpPutFile};


const genericBasePermissionCheck = {
  type: GraphQLString,
  description: 'mutation for ofbiz genericBasePermissionCheck method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/genericBasePermissionCheck?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {genericBasePermissionCheck};


const getAllMetrics = {
  type: GraphQLString,
  description: 'mutation for ofbiz getAllMetrics method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/getAllMetrics?`, null, req);
  }
};
export {getAllMetrics};


const getAssociatedStateList = {
  type: GraphQLString,
  description: 'mutation for ofbiz getAssociatedStateList method',
  args:{countryGeoId: {type: GraphQLString},listOrderBy: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/getAssociatedStateList?countryGeoId=${args.countryGeoId}listOrderBy=${args.listOrderBy}`, null, req);
  }
};
export {getAssociatedStateList};


const getCountryList = {
  type: GraphQLString,
  description: 'mutation for ofbiz getCountryList method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/getCountryList?`, null, req);
  }
};
export {getCountryList};


const getFileUploadProgressStatus = {
  type: GraphQLString,
  description: 'mutation for ofbiz getFileUploadProgressStatus method',
  args:{uploadProgressListener: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/getFileUploadProgressStatus?uploadProgressListener=${args.uploadProgressListener}`, null, req);
  }
};
export {getFileUploadProgressStatus};


const getPortletAttributes = {
  type: GraphQLString,
  description: 'mutation for ofbiz getPortletAttributes method',
  args:{portalPortletId: {type: GraphQLString},portalPageId: {type: GraphQLString},portletSeqId: {type: GraphQLString},ownerUserLoginId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/getPortletAttributes?portalPortletId=${args.portalPortletId}portalPageId=${args.portalPageId}portletSeqId=${args.portletSeqId}ownerUserLoginId=${args.ownerUserLoginId}`, null, req);
  }
};
export {getPortletAttributes};


const getRelatedGeos = {
  type: GraphQLString,
  description: 'mutation for ofbiz getRelatedGeos method',
  args:{geoId: {type: GraphQLString},geoAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/getRelatedGeos?geoId=${args.geoId}geoAssocTypeId=${args.geoAssocTypeId}`, null, req);
  }
};
export {getRelatedGeos};


const getServerTimeZone = {
  type: GraphQLString,
  description: 'mutation for ofbiz getServerTimeZone method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/getServerTimeZone?`, null, req);
  }
};
export {getServerTimeZone};


const getServerTimestamp = {
  type: GraphQLString,
  description: 'mutation for ofbiz getServerTimestamp method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/getServerTimestamp?`, null, req);
  }
};
export {getServerTimestamp};


const getServerTimestampAsLong = {
  type: GraphQLString,
  description: 'mutation for ofbiz getServerTimestampAsLong method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/getServerTimestampAsLong?`, null, req);
  }
};
export {getServerTimestampAsLong};


const getStatusItems = {
  type: GraphQLString,
  description: 'mutation for ofbiz getStatusItems method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/getStatusItems?statusTypeIds=${args.statusTypeIds}`, null, req);
  }
};
export {getStatusItems};


const getStatusValidChangeToDetails = {
  type: GraphQLString,
  description: 'mutation for ofbiz getStatusValidChangeToDetails method',
  args:{statusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/getStatusValidChangeToDetails?statusId=${args.statusId}`, null, req);
  }
};
export {getStatusValidChangeToDetails};


const getUserPreference = {
  type: GraphQLString,
  description: 'mutation for ofbiz getUserPreference method',
  args:{userPrefTypeId: {type: GraphQLString},userPrefGroupTypeId: {type: GraphQLString},userPrefLoginId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/getUserPreference?userPrefTypeId=${args.userPrefTypeId}userPrefGroupTypeId=${args.userPrefGroupTypeId}userPrefLoginId=${args.userPrefLoginId}`, null, req);
  }
};
export {getUserPreference};


const getUserPreferenceGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz getUserPreferenceGroup method',
  args:{userPrefGroupTypeId: {type: GraphQLString},userPrefLoginId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/getUserPreferenceGroup?userPrefGroupTypeId=${args.userPrefGroupTypeId}userPrefLoginId=${args.userPrefLoginId}`, null, req);
  }
};
export {getUserPreferenceGroup};


const getVisualThemeResources = {
  type: GraphQLString,
  description: 'mutation for ofbiz getVisualThemeResources method',
  args:{themeResources: {type: GraphQLString},visualThemeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/getVisualThemeResources?themeResources=${args.themeResources}visualThemeId=${args.visualThemeId}`, null, req);
  }
};
export {getVisualThemeResources};


const interfaceDataSource = {
  type: GraphQLString,
  description: 'mutation for ofbiz interfaceDataSource method',
  args:{dataSourceId: {type: GraphQLString},dataSourceTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/interfaceDataSource?dataSourceId=${args.dataSourceId}dataSourceTypeId=${args.dataSourceTypeId}description=${args.description}`, null, req);
  }
};
export {interfaceDataSource};


const interfaceDataSourceType = {
  type: GraphQLString,
  description: 'mutation for ofbiz interfaceDataSourceType method',
  args:{dataSourceTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/interfaceDataSourceType?dataSourceTypeId=${args.dataSourceTypeId}description=${args.description}`, null, req);
  }
};
export {interfaceDataSourceType};


const linkGeos = {
  type: GraphQLString,
  description: 'mutation for ofbiz linkGeos method',
  args:{geoId: {type: GraphQLString},geoAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/linkGeos?geoId=${args.geoId}geoAssocTypeId=${args.geoAssocTypeId}geoIds=${args.geoIds}`, null, req);
  }
};
export {linkGeos};


const movePortletToPortalPage = {
  type: GraphQLString,
  description: 'mutation for ofbiz movePortletToPortalPage method',
  args:{portalPageId: {type: GraphQLString},portletSeqId: {type: GraphQLString},newPortalPageId: {type: GraphQLString},portalPortletId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/movePortletToPortalPage?portalPageId=${args.portalPageId}portletSeqId=${args.portletSeqId}newPortalPageId=${args.newPortalPageId}portalPortletId=${args.portalPortletId}`, null, req);
  }
};
export {movePortletToPortalPage};


const performFind = {
  type: GraphQLString,
  description: 'mutation for ofbiz performFind method',
  args:{inputFields: {type: GraphQLString},entityName: {type: GraphQLString},viewSize: {type: GraphQLInt},filterByDate: {type: GraphQLString},filterByDateValue: {type: GraphQLString},thruDateName: {type: GraphQLString},orderBy: {type: GraphQLString},noConditionFind: {type: GraphQLString},distinct: {type: GraphQLString},viewIndex: {type: GraphQLInt},fromDateName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/performFind?inputFields=${args.inputFields}entityName=${args.entityName}viewSize=${args.viewSize}filterByDate=${args.filterByDate}filterByDateValue=${args.filterByDateValue}thruDateName=${args.thruDateName}orderBy=${args.orderBy}noConditionFind=${args.noConditionFind}distinct=${args.distinct}viewIndex=${args.viewIndex}fieldList=${args.fieldList}fromDateName=${args.fromDateName}`, null, req);
  }
};
export {performFind};


const performFindItem = {
  type: GraphQLString,
  description: 'mutation for ofbiz performFindItem method',
  args:{inputFields: {type: GraphQLString},entityName: {type: GraphQLString},filterByDate: {type: GraphQLString},filterByDateValue: {type: GraphQLString},orderBy: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/performFindItem?inputFields=${args.inputFields}entityName=${args.entityName}filterByDate=${args.filterByDate}filterByDateValue=${args.filterByDateValue}orderBy=${args.orderBy}`, null, req);
  }
};
export {performFindItem};


const performFindList = {
  type: GraphQLString,
  description: 'mutation for ofbiz performFindList method',
  args:{inputFields: {type: GraphQLString},entityName: {type: GraphQLString},viewSize: {type: GraphQLInt},filterByDate: {type: GraphQLString},filterByDateValue: {type: GraphQLString},orderBy: {type: GraphQLString},noConditionFind: {type: GraphQLString},viewIndex: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/performFindList?inputFields=${args.inputFields}entityName=${args.entityName}viewSize=${args.viewSize}filterByDate=${args.filterByDate}filterByDateValue=${args.filterByDateValue}orderBy=${args.orderBy}noConditionFind=${args.noConditionFind}viewIndex=${args.viewIndex}`, null, req);
  }
};
export {performFindList};


const preferenceCopyPermission = {
  type: GraphQLString,
  description: 'mutation for ofbiz preferenceCopyPermission method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/preferenceCopyPermission?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {preferenceCopyPermission};


const preferenceGetSetPermission = {
  type: GraphQLString,
  description: 'mutation for ofbiz preferenceGetSetPermission method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},userPrefLoginId: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/preferenceGetSetPermission?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}userPrefLoginId=${args.userPrefLoginId}mainAction=${args.mainAction}`, null, req);
  }
};
export {preferenceGetSetPermission};


const prepareFind = {
  type: GraphQLString,
  description: 'mutation for ofbiz prepareFind method',
  args:{inputFields: {type: GraphQLString},entityName: {type: GraphQLString},filterByDate: {type: GraphQLString},filterByDateValue: {type: GraphQLString},thruDateName: {type: GraphQLString},orderBy: {type: GraphQLString},noConditionFind: {type: GraphQLString},fromDateName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/prepareFind?inputFields=${args.inputFields}entityName=${args.entityName}filterByDate=${args.filterByDate}filterByDateValue=${args.filterByDateValue}thruDateName=${args.thruDateName}orderBy=${args.orderBy}noConditionFind=${args.noConditionFind}fromDateName=${args.fromDateName}`, null, req);
  }
};
export {prepareFind};


const removeUserPreference = {
  type: GraphQLString,
  description: 'mutation for ofbiz removeUserPreference method',
  args:{userPrefTypeId: {type: GraphQLString},userPrefLoginId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/removeUserPreference?userPrefTypeId=${args.userPrefTypeId}userPrefLoginId=${args.userPrefLoginId}`, null, req);
  }
};
export {removeUserPreference};


const resetMetric = {
  type: GraphQLString,
  description: 'mutation for ofbiz resetMetric method',
  args:{name: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/resetMetric?name=${args.name}`, null, req);
  }
};
export {resetMetric};


const returnErrorService = {
  type: GraphQLString,
  description: 'mutation for ofbiz returnErrorService method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/returnErrorService?`, null, req);
  }
};
export {returnErrorService};


const rssFeedInterface = {
  type: GraphQLString,
  description: 'mutation for ofbiz rssFeedInterface method',
  args:{entryLink: {type: GraphQLString},feedType: {type: GraphQLString},mainLink: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/rssFeedInterface?entryLink=${args.entryLink}feedType=${args.feedType}mainLink=${args.mainLink}`, null, req);
  }
};
export {rssFeedInterface};


const setUserPreference = {
  type: GraphQLString,
  description: 'mutation for ofbiz setUserPreference method',
  args:{userPrefValue: {type: GraphQLString},userPrefTypeId: {type: GraphQLString},userPrefGroupTypeId: {type: GraphQLString},userPrefLoginId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/setUserPreference?userPrefValue=${args.userPrefValue}userPrefTypeId=${args.userPrefTypeId}userPrefGroupTypeId=${args.userPrefGroupTypeId}userPrefLoginId=${args.userPrefLoginId}`, null, req);
  }
};
export {setUserPreference};


const setUserPreferenceGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz setUserPreferenceGroup method',
  args:{userPrefGroupTypeId: {type: GraphQLString},userPrefMap: {type: GraphQLString},userPrefLoginId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/setUserPreferenceGroup?userPrefGroupTypeId=${args.userPrefGroupTypeId}userPrefMap=${args.userPrefMap}userPrefLoginId=${args.userPrefLoginId}`, null, req);
  }
};
export {setUserPreferenceGroup};


const tempExprPermissionCheck = {
  type: GraphQLString,
  description: 'mutation for ofbiz tempExprPermissionCheck method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/tempExprPermissionCheck?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {tempExprPermissionCheck};


const updateCustomTimePeriod = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCustomTimePeriod method',
  args:{customTimePeriodId: {type: GraphQLString},periodNum: {type: GraphQLInt},fromDate: {type: GraphQLString},isClosed: {type: GraphQLString},periodTypeId: {type: GraphQLString},periodName: {type: GraphQLString},parentPeriodId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/updateCustomTimePeriod?customTimePeriodId=${args.customTimePeriodId}periodNum=${args.periodNum}fromDate=${args.fromDate}isClosed=${args.isClosed}periodTypeId=${args.periodTypeId}periodName=${args.periodName}parentPeriodId=${args.parentPeriodId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateCustomTimePeriod};


const updateDataSource = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateDataSource method',
  args:{dataSourceId: {type: GraphQLString},dataSourceTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/updateDataSource?dataSourceId=${args.dataSourceId}dataSourceTypeId=${args.dataSourceTypeId}description=${args.description}`, null, req);
  }
};
export {updateDataSource};


const updateDataSourceType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateDataSourceType method',
  args:{dataSourceTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/updateDataSourceType?dataSourceTypeId=${args.dataSourceTypeId}description=${args.description}`, null, req);
  }
};
export {updateDataSourceType};


const updateEnumeration = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateEnumeration method',
  args:{enumTypeId: {type: GraphQLString},enumId: {type: GraphQLString},description: {type: GraphQLString},enumCode: {type: GraphQLString},sequenceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/updateEnumeration?enumTypeId=${args.enumTypeId}enumId=${args.enumId}description=${args.description}enumCode=${args.enumCode}sequenceId=${args.sequenceId}`, null, req);
  }
};
export {updateEnumeration};


const updateGeo = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGeo method',
  args:{geoId: {type: GraphQLString},geoName: {type: GraphQLString},geoTypeId: {type: GraphQLString},geoCode: {type: GraphQLString},abbreviation: {type: GraphQLString},geoSecCode: {type: GraphQLString},wellKnownText: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/updateGeo?geoId=${args.geoId}geoName=${args.geoName}geoTypeId=${args.geoTypeId}geoCode=${args.geoCode}abbreviation=${args.abbreviation}geoSecCode=${args.geoSecCode}wellKnownText=${args.wellKnownText}`, null, req);
  }
};
export {updateGeo};


const updateGeoAssocType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGeoAssocType method',
  args:{geoAssocTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/updateGeoAssocType?geoAssocTypeId=${args.geoAssocTypeId}description=${args.description}`, null, req);
  }
};
export {updateGeoAssocType};


const updateGeoPoint = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGeoPoint method',
  args:{dataSourceId: {type: GraphQLString},latitude: {type: GraphQLString},geoPointId: {type: GraphQLString},longitude: {type: GraphQLString},elevation: {type: GraphQLFloat},elevationUomId: {type: GraphQLString},geoPointTypeEnumId: {type: GraphQLString},description: {type: GraphQLString},information: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/updateGeoPoint?dataSourceId=${args.dataSourceId}latitude=${args.latitude}geoPointId=${args.geoPointId}longitude=${args.longitude}elevation=${args.elevation}elevationUomId=${args.elevationUomId}geoPointTypeEnumId=${args.geoPointTypeEnumId}description=${args.description}information=${args.information}`, null, req);
  }
};
export {updateGeoPoint};


const updateGeoType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGeoType method',
  args:{geoTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/updateGeoType?geoTypeId=${args.geoTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateGeoType};


const updateKeywordThesaurus = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateKeywordThesaurus method',
  args:{enteredKeyword: {type: GraphQLString},alternateKeyword: {type: GraphQLString},relationshipEnumId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/updateKeywordThesaurus?enteredKeyword=${args.enteredKeyword}alternateKeyword=${args.alternateKeyword}relationshipEnumId=${args.relationshipEnumId}`, null, req);
  }
};
export {updateKeywordThesaurus};


const updateNote = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateNote method',
  args:{noteId: {type: GraphQLString},noteName: {type: GraphQLString},noteDateTime: {type: GraphQLString},noteInfo: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/updateNote?noteId=${args.noteId}noteName=${args.noteName}noteDateTime=${args.noteDateTime}noteInfo=${args.noteInfo}`, null, req);
  }
};
export {updateNote};


const updatePassword = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePassword method',
  args:{userLoginId: {type: GraphQLString},newPasswordVerify: {type: GraphQLString},passwordHint: {type: GraphQLString},newPassword: {type: GraphQLString},currentPassword: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/updatePassword?userLoginId=${args.userLoginId}newPasswordVerify=${args.newPasswordVerify}passwordHint=${args.passwordHint}newPassword=${args.newPassword}currentPassword=${args.currentPassword}`, null, req);
  }
};
export {updatePassword};


const updatePeriodType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePeriodType method',
  args:{periodTypeId: {type: GraphQLString},description: {type: GraphQLString},periodLength: {type: GraphQLInt},uomId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/updatePeriodType?periodTypeId=${args.periodTypeId}description=${args.description}periodLength=${args.periodLength}uomId=${args.uomId}`, null, req);
  }
};
export {updatePeriodType};


const updatePortalPage = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePortalPage method',
  args:{portalPageId: {type: GraphQLString},originalPortalPageId: {type: GraphQLString},securityGroupId: {type: GraphQLString},parentPortalPageId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},helpContentId: {type: GraphQLString},description: {type: GraphQLString},ownerUserLoginId: {type: GraphQLString},portalPageName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/updatePortalPage?portalPageId=${args.portalPageId}originalPortalPageId=${args.originalPortalPageId}securityGroupId=${args.securityGroupId}parentPortalPageId=${args.parentPortalPageId}sequenceNum=${args.sequenceNum}helpContentId=${args.helpContentId}description=${args.description}ownerUserLoginId=${args.ownerUserLoginId}portalPageName=${args.portalPageName}`, null, req);
  }
};
export {updatePortalPage};


const updatePortalPageColumn = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePortalPageColumn method',
  args:{portalPageId: {type: GraphQLString},columnSeqId: {type: GraphQLString},columnWidthPixels: {type: GraphQLInt},columnWidthPercentage: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/updatePortalPageColumn?portalPageId=${args.portalPageId}columnSeqId=${args.columnSeqId}columnWidthPixels=${args.columnWidthPixels}columnWidthPercentage=${args.columnWidthPercentage}`, null, req);
  }
};
export {updatePortalPageColumn};


const updatePortalPagePortlet = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePortalPagePortlet method',
  args:{portalPageId: {type: GraphQLString},portletSeqId: {type: GraphQLString},portalPortletId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},columnSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/updatePortalPagePortlet?portalPageId=${args.portalPageId}portletSeqId=${args.portletSeqId}portalPortletId=${args.portalPortletId}sequenceNum=${args.sequenceNum}columnSeqId=${args.columnSeqId}`, null, req);
  }
};
export {updatePortalPagePortlet};


const updatePortalPageSeq = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePortalPageSeq method',
  args:{portalPageId: {type: GraphQLString},mode: {type: GraphQLString},originalPortalPageId: {type: GraphQLString},securityGroupId: {type: GraphQLString},parentPortalPageId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},helpContentId: {type: GraphQLString},description: {type: GraphQLString},ownerUserLoginId: {type: GraphQLString},portalPageName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/updatePortalPageSeq?portalPageId=${args.portalPageId}mode=${args.mode}originalPortalPageId=${args.originalPortalPageId}securityGroupId=${args.securityGroupId}parentPortalPageId=${args.parentPortalPageId}sequenceNum=${args.sequenceNum}helpContentId=${args.helpContentId}description=${args.description}ownerUserLoginId=${args.ownerUserLoginId}portalPageName=${args.portalPageName}`, null, req);
  }
};
export {updatePortalPageSeq};


const updatePortletSeqDragDrop = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePortletSeqDragDrop method',
  args:{mode: {type: GraphQLString},o_portalPortletId: {type: GraphQLString},o_portalPageId: {type: GraphQLString},o_portletSeqId: {type: GraphQLString},d_portalPortletId: {type: GraphQLString},d_portalPageId: {type: GraphQLString},d_portletSeqId: {type: GraphQLString},destinationColumn: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/updatePortletSeqDragDrop?mode=${args.mode}o_portalPortletId=${args.o_portalPortletId}o_portalPageId=${args.o_portalPageId}o_portletSeqId=${args.o_portletSeqId}d_portalPortletId=${args.d_portalPortletId}d_portalPageId=${args.d_portalPageId}d_portletSeqId=${args.d_portletSeqId}destinationColumn=${args.destinationColumn}`, null, req);
  }
};
export {updatePortletSeqDragDrop};


const updateStatusValidChange = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateStatusValidChange method',
  args:{statusId: {type: GraphQLString},statusIdTo: {type: GraphQLString},conditionExpression: {type: GraphQLString},transitionName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/updateStatusValidChange?statusId=${args.statusId}statusIdTo=${args.statusIdTo}conditionExpression=${args.conditionExpression}transitionName=${args.transitionName}`, null, req);
  }
};
export {updateStatusValidChange};


const updateTemporalExpression = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTemporalExpression method',
  args:{tempExprId: {type: GraphQLString},string1: {type: GraphQLString},string2: {type: GraphQLString},description: {type: GraphQLString},integer1: {type: GraphQLInt},date2: {type: GraphQLString},date1: {type: GraphQLString},tempExprTypeId: {type: GraphQLString},integer2: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/updateTemporalExpression?tempExprId=${args.tempExprId}string1=${args.string1}string2=${args.string2}description=${args.description}integer1=${args.integer1}date2=${args.date2}date1=${args.date1}tempExprTypeId=${args.tempExprTypeId}integer2=${args.integer2}`, null, req);
  }
};
export {updateTemporalExpression};


const updateUom = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateUom method',
  args:{uomId: {type: GraphQLString},description: {type: GraphQLString},abbreviation: {type: GraphQLString},uomTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/updateUom?uomId=${args.uomId}description=${args.description}abbreviation=${args.abbreviation}uomTypeId=${args.uomTypeId}`, null, req);
  }
};
export {updateUom};


const updateUomType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateUomType method',
  args:{uomTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/updateUomType?uomTypeId=${args.uomTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateUomType};


const updateUserLoginId = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateUserLoginId method',
  args:{userLoginId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/updateUserLoginId?userLoginId=${args.userLoginId}`, null, req);
  }
};
export {updateUserLoginId};


const updateUserLoginSecurity = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateUserLoginSecurity method',
  args:{userLoginId: {type: GraphQLString},enabled: {type: GraphQLString},disabledDateTime: {type: GraphQLString},disabledBy: {type: GraphQLString},successiveFailedLogins: {type: GraphQLInt},userLdapDn: {type: GraphQLString},externalAuthId: {type: GraphQLString},requirePasswordChange: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/updateUserLoginSecurity?userLoginId=${args.userLoginId}enabled=${args.enabled}disabledDateTime=${args.disabledDateTime}disabledBy=${args.disabledBy}successiveFailedLogins=${args.successiveFailedLogins}userLdapDn=${args.userLdapDn}externalAuthId=${args.externalAuthId}requirePasswordChange=${args.requirePasswordChange}`, null, req);
  }
};
export {updateUserLoginSecurity};


const updateUserPrefGroupType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateUserPrefGroupType method',
  args:{userPrefGroupTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/updateUserPrefGroupType?userPrefGroupTypeId=${args.userPrefGroupTypeId}description=${args.description}`, null, req);
  }
};
export {updateUserPrefGroupType};


const updateVisualTheme = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateVisualTheme method',
  args:{visualThemeId: {type: GraphQLString},description: {type: GraphQLString},visualThemeSetId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/updateVisualTheme?visualThemeId=${args.visualThemeId}description=${args.description}visualThemeSetId=${args.visualThemeSetId}`, null, req);
  }
};
export {updateVisualTheme};


const updateVisualThemeResource = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateVisualThemeResource method',
  args:{resourceTypeEnumId: {type: GraphQLString},visualThemeId: {type: GraphQLString},sequenceId: {type: GraphQLString},resourceValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/updateVisualThemeResource?resourceTypeEnumId=${args.resourceTypeEnumId}visualThemeId=${args.visualThemeId}sequenceId=${args.sequenceId}resourceValue=${args.resourceValue}`, null, req);
  }
};
export {updateVisualThemeResource};


const userLogin = {
  type: GraphQLString,
  description: 'mutation for ofbiz userLogin method',
  args:{loginUsername: {type: GraphQLString},loginPassword: {type: GraphQLString},visitId: {type: GraphQLString},isServiceAuth: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/userLogin?loginUsername=${args.loginUsername}loginPassword=${args.loginPassword}visitId=${args.visitId}isServiceAuth=${args.isServiceAuth}`, null, req);
  }
};
export {userLogin};


const visualThemePermissionCheck = {
  type: GraphQLString,
  description: 'mutation for ofbiz visualThemePermissionCheck method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commons/visualThemePermissionCheck?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {visualThemePermissionCheck};
