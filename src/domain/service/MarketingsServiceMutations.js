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


const addPriceRuleToMarketingCampaign = {
  type: GraphQLString,
  description: 'mutation for ofbiz addPriceRuleToMarketingCampaign method',
  args:{marketingCampaignId: {type: GraphQLString},productPriceRuleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/addPriceRuleToMarketingCampaign?marketingCampaignId=${args.marketingCampaignId}productPriceRuleId=${args.productPriceRuleId}`, null, req);
  }
};
export {addPriceRuleToMarketingCampaign};


const addPromoToMarketingCampaign = {
  type: GraphQLString,
  description: 'mutation for ofbiz addPromoToMarketingCampaign method',
  args:{marketingCampaignId: {type: GraphQLString},productPromoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/addPromoToMarketingCampaign?marketingCampaignId=${args.marketingCampaignId}productPromoId=${args.productPromoId}`, null, req);
  }
};
export {addPromoToMarketingCampaign};


const arePartiesRelatedThroughSegmentGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz arePartiesRelatedThroughSegmentGroup method',
  args:{partyId: {type: GraphQLString},toPartyId: {type: GraphQLString},roleTypeId: {type: GraphQLString},toRoleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/arePartiesRelatedThroughSegmentGroup?partyId=${args.partyId}toPartyId=${args.toPartyId}roleTypeId=${args.roleTypeId}toRoleTypeId=${args.toRoleTypeId}`, null, req);
  }
};
export {arePartiesRelatedThroughSegmentGroup};


const convertLeadToContact = {
  type: GraphQLString,
  description: 'mutation for ofbiz convertLeadToContact method',
  args:{partyId: {type: GraphQLString},partyGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/convertLeadToContact?partyId=${args.partyId}partyGroupId=${args.partyGroupId}`, null, req);
  }
};
export {convertLeadToContact};


const createAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAccount method',
  args:{emailAddress: {type: GraphQLString},extension: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/createAccount?emailAddress=${args.emailAddress}extension=${args.extension}`, null, req);
  }
};
export {createAccount};


const createContact = {
  type: GraphQLString,
  description: 'mutation for ofbiz createContact method',
  args:{partyIdFrom: {type: GraphQLString},emailAddress: {type: GraphQLString},extension: {type: GraphQLString},contactListId: {type: GraphQLString},quickAdd: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/createContact?partyIdFrom=${args.partyIdFrom}emailAddress=${args.emailAddress}extension=${args.extension}contactListId=${args.contactListId}quickAdd=${args.quickAdd}`, null, req);
  }
};
export {createContact};


const createContactList = {
  type: GraphQLString,
  description: 'mutation for ofbiz createContactList method',
  args:{contactListName: {type: GraphQLString},contactListTypeId: {type: GraphQLString},verifyEmailSubject: {type: GraphQLString},comments: {type: GraphQLString},marketingCampaignId: {type: GraphQLString},optOutScreen: {type: GraphQLString},description: {type: GraphQLString},contactMechTypeId: {type: GraphQLString},verifyEmailFrom: {type: GraphQLString},ownerPartyId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},singleUse: {type: GraphQLString},contactListId: {type: GraphQLString},isPublic: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},verifyEmailScreen: {type: GraphQLString},verifyEmailWebSiteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/createContactList?contactListName=${args.contactListName}contactListTypeId=${args.contactListTypeId}verifyEmailSubject=${args.verifyEmailSubject}comments=${args.comments}marketingCampaignId=${args.marketingCampaignId}optOutScreen=${args.optOutScreen}description=${args.description}contactMechTypeId=${args.contactMechTypeId}verifyEmailFrom=${args.verifyEmailFrom}ownerPartyId=${args.ownerPartyId}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}singleUse=${args.singleUse}contactListId=${args.contactListId}isPublic=${args.isPublic}createdByUserLogin=${args.createdByUserLogin}verifyEmailScreen=${args.verifyEmailScreen}verifyEmailWebSiteId=${args.verifyEmailWebSiteId}`, null, req);
  }
};
export {createContactList};


const createContactListParty = {
  type: GraphQLString,
  description: 'mutation for ofbiz createContactListParty method',
  args:{statusId: {type: GraphQLString},contactListId: {type: GraphQLString},partyId: {type: GraphQLString},fromDate: {type: GraphQLString},baseLocation: {type: GraphQLString},preferredContactMechId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/createContactListParty?statusId=${args.statusId}contactListId=${args.contactListId}partyId=${args.partyId}fromDate=${args.fromDate}baseLocation=${args.baseLocation}preferredContactMechId=${args.preferredContactMechId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createContactListParty};


const createContactListPartyStatus = {
  type: GraphQLString,
  description: 'mutation for ofbiz createContactListPartyStatus method',
  args:{statusId: {type: GraphQLString},contactListId: {type: GraphQLString},preferredContactMechId: {type: GraphQLString},partyId: {type: GraphQLString},fromDate: {type: GraphQLString},optInVerifyCode: {type: GraphQLString},baseLocation: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/createContactListPartyStatus?statusId=${args.statusId}contactListId=${args.contactListId}preferredContactMechId=${args.preferredContactMechId}partyId=${args.partyId}fromDate=${args.fromDate}optInVerifyCode=${args.optInVerifyCode}baseLocation=${args.baseLocation}`, null, req);
  }
};
export {createContactListPartyStatus};


const createLead = {
  type: GraphQLString,
  description: 'mutation for ofbiz createLead method',
  args:{partyIdFrom: {type: GraphQLString},emailAddress: {type: GraphQLString},groupName: {type: GraphQLString},dataSourceId: {type: GraphQLString},extension: {type: GraphQLString},numEmployees: {type: GraphQLString},contactListId: {type: GraphQLString},title: {type: GraphQLString},officeSiteName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/createLead?partyIdFrom=${args.partyIdFrom}emailAddress=${args.emailAddress}groupName=${args.groupName}dataSourceId=${args.dataSourceId}extension=${args.extension}numEmployees=${args.numEmployees}contactListId=${args.contactListId}title=${args.title}officeSiteName=${args.officeSiteName}`, null, req);
  }
};
export {createLead};


const createMarketingCampaign = {
  type: GraphQLString,
  description: 'mutation for ofbiz createMarketingCampaign method',
  args:{expectedResponsePercent: {type: GraphQLFloat},expectedRevenue: {type: GraphQLFloat},convertedLeads: {type: GraphQLString},campaignSummary: {type: GraphQLString},numSent: {type: GraphQLInt},parentCampaignId: {type: GraphQLString},estimatedCost: {type: GraphQLFloat},isActive: {type: GraphQLString},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},currencyUomId: {type: GraphQLString},statusId: {type: GraphQLString},budgetedCost: {type: GraphQLFloat},campaignName: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},startDate: {type: GraphQLString},actualCost: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/createMarketingCampaign?expectedResponsePercent=${args.expectedResponsePercent}expectedRevenue=${args.expectedRevenue}convertedLeads=${args.convertedLeads}campaignSummary=${args.campaignSummary}numSent=${args.numSent}parentCampaignId=${args.parentCampaignId}estimatedCost=${args.estimatedCost}isActive=${args.isActive}thruDate=${args.thruDate}fromDate=${args.fromDate}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}currencyUomId=${args.currencyUomId}statusId=${args.statusId}budgetedCost=${args.budgetedCost}campaignName=${args.campaignName}createdByUserLogin=${args.createdByUserLogin}startDate=${args.startDate}actualCost=${args.actualCost}`, null, req);
  }
};
export {createMarketingCampaign};


const createMarketingCampaignNote = {
  type: GraphQLString,
  description: 'mutation for ofbiz createMarketingCampaignNote method',
  args:{marketingCampaignId: {type: GraphQLString},noteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/createMarketingCampaignNote?marketingCampaignId=${args.marketingCampaignId}noteId=${args.noteId}`, null, req);
  }
};
export {createMarketingCampaignNote};


const createMarketingCampaignRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz createMarketingCampaignRole method',
  args:{roleTypeId: {type: GraphQLString},marketingCampaignId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/createMarketingCampaignRole?roleTypeId=${args.roleTypeId}marketingCampaignId=${args.marketingCampaignId}partyId=${args.partyId}`, null, req);
  }
};
export {createMarketingCampaignRole};


const createSegmentGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSegmentGroup method',
  args:{description: {type: GraphQLString},productStoreId: {type: GraphQLString},segmentGroupTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/createSegmentGroup?description=${args.description}productStoreId=${args.productStoreId}segmentGroupTypeId=${args.segmentGroupTypeId}`, null, req);
  }
};
export {createSegmentGroup};


const createSegmentGroupClassification = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSegmentGroupClassification method',
  args:{partyClassificationGroupId: {type: GraphQLString},segmentGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/createSegmentGroupClassification?partyClassificationGroupId=${args.partyClassificationGroupId}segmentGroupId=${args.segmentGroupId}`, null, req);
  }
};
export {createSegmentGroupClassification};


const createSegmentGroupGeo = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSegmentGroupGeo method',
  args:{geoId: {type: GraphQLString},segmentGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/createSegmentGroupGeo?geoId=${args.geoId}segmentGroupId=${args.segmentGroupId}`, null, req);
  }
};
export {createSegmentGroupGeo};


const createSegmentGroupRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSegmentGroupRole method',
  args:{roleTypeId: {type: GraphQLString},segmentGroupId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/createSegmentGroupRole?roleTypeId=${args.roleTypeId}segmentGroupId=${args.segmentGroupId}partyId=${args.partyId}`, null, req);
  }
};
export {createSegmentGroupRole};


const createSegmentGroupType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSegmentGroupType method',
  args:{description: {type: GraphQLString},segmentGroupTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/createSegmentGroupType?description=${args.description}segmentGroupTypeId=${args.segmentGroupTypeId}`, null, req);
  }
};
export {createSegmentGroupType};


const createTrackingCode = {
  type: GraphQLString,
  description: 'mutation for ofbiz createTrackingCode method',
  args:{trackingCodeId: {type: GraphQLString},trackingCodeTypeId: {type: GraphQLString},trackableLifetime: {type: GraphQLInt},redirectUrl: {type: GraphQLString},comments: {type: GraphQLString},marketingCampaignId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},overrideLogo: {type: GraphQLString},groupId: {type: GraphQLString},description: {type: GraphQLString},billableLifetime: {type: GraphQLInt},thruDate: {type: GraphQLString},subgroupId: {type: GraphQLString},fromDate: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},createdDate: {type: GraphQLString},overrideCss: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},prodCatalogId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/createTrackingCode?trackingCodeId=${args.trackingCodeId}trackingCodeTypeId=${args.trackingCodeTypeId}trackableLifetime=${args.trackableLifetime}redirectUrl=${args.redirectUrl}comments=${args.comments}marketingCampaignId=${args.marketingCampaignId}lastModifiedDate=${args.lastModifiedDate}overrideLogo=${args.overrideLogo}groupId=${args.groupId}description=${args.description}billableLifetime=${args.billableLifetime}thruDate=${args.thruDate}subgroupId=${args.subgroupId}fromDate=${args.fromDate}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}createdDate=${args.createdDate}overrideCss=${args.overrideCss}createdByUserLogin=${args.createdByUserLogin}prodCatalogId=${args.prodCatalogId}`, null, req);
  }
};
export {createTrackingCode};


const createTrackingCodeOrder = {
  type: GraphQLString,
  description: 'mutation for ofbiz createTrackingCodeOrder method',
  args:{orderId: {type: GraphQLString},trackingCodeTypeId: {type: GraphQLString},trackingCodeId: {type: GraphQLString},siteId: {type: GraphQLString},hasExported: {type: GraphQLString},affiliateReferredTimeStamp: {type: GraphQLString},isBillable: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/createTrackingCodeOrder?orderId=${args.orderId}trackingCodeTypeId=${args.trackingCodeTypeId}trackingCodeId=${args.trackingCodeId}siteId=${args.siteId}hasExported=${args.hasExported}affiliateReferredTimeStamp=${args.affiliateReferredTimeStamp}isBillable=${args.isBillable}`, null, req);
  }
};
export {createTrackingCodeOrder};


const createTrackingCodeOrderReturn = {
  type: GraphQLString,
  description: 'mutation for ofbiz createTrackingCodeOrderReturn method',
  args:{orderId: {type: GraphQLString},trackingCodeTypeId: {type: GraphQLString},returnId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},trackingCodeId: {type: GraphQLString},siteId: {type: GraphQLString},hasExported: {type: GraphQLString},affiliateReferredTimeStamp: {type: GraphQLString},isBillable: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/createTrackingCodeOrderReturn?orderId=${args.orderId}trackingCodeTypeId=${args.trackingCodeTypeId}returnId=${args.returnId}orderItemSeqId=${args.orderItemSeqId}trackingCodeId=${args.trackingCodeId}siteId=${args.siteId}hasExported=${args.hasExported}affiliateReferredTimeStamp=${args.affiliateReferredTimeStamp}isBillable=${args.isBillable}`, null, req);
  }
};
export {createTrackingCodeOrderReturn};


const createTrackingCodeOrderReturns = {
  type: GraphQLString,
  description: 'mutation for ofbiz createTrackingCodeOrderReturns method',
  args:{returnId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/createTrackingCodeOrderReturns?returnId=${args.returnId}`, null, req);
  }
};
export {createTrackingCodeOrderReturns};


const createTrackingCodeType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createTrackingCodeType method',
  args:{trackingCodeTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/createTrackingCodeType?trackingCodeTypeId=${args.trackingCodeTypeId}description=${args.description}`, null, req);
  }
};
export {createTrackingCodeType};


const createWebSiteContactList = {
  type: GraphQLString,
  description: 'mutation for ofbiz createWebSiteContactList method',
  args:{fromDate: {type: GraphQLString},contactListId: {type: GraphQLString},webSiteId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/createWebSiteContactList?fromDate=${args.fromDate}contactListId=${args.contactListId}webSiteId=${args.webSiteId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createWebSiteContactList};


const deleteContactListParty = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContactListParty method',
  args:{fromDate: {type: GraphQLString},contactListId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/deleteContactListParty?fromDate=${args.fromDate}contactListId=${args.contactListId}partyId=${args.partyId}`, null, req);
  }
};
export {deleteContactListParty};


const deleteMarketingCampaign = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteMarketingCampaign method',
  args:{marketingCampaignId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/deleteMarketingCampaign?marketingCampaignId=${args.marketingCampaignId}`, null, req);
  }
};
export {deleteMarketingCampaign};


const deleteMarketingCampaignNote = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteMarketingCampaignNote method',
  args:{marketingCampaignId: {type: GraphQLString},noteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/deleteMarketingCampaignNote?marketingCampaignId=${args.marketingCampaignId}noteId=${args.noteId}`, null, req);
  }
};
export {deleteMarketingCampaignNote};


const deleteMarketingCampaignRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteMarketingCampaignRole method',
  args:{roleTypeId: {type: GraphQLString},marketingCampaignId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/deleteMarketingCampaignRole?roleTypeId=${args.roleTypeId}marketingCampaignId=${args.marketingCampaignId}partyId=${args.partyId}`, null, req);
  }
};
export {deleteMarketingCampaignRole};


const deleteSegmentGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSegmentGroup method',
  args:{segmentGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/deleteSegmentGroup?segmentGroupId=${args.segmentGroupId}`, null, req);
  }
};
export {deleteSegmentGroup};


const deleteSegmentGroupClassification = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSegmentGroupClassification method',
  args:{partyClassificationGroupId: {type: GraphQLString},segmentGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/deleteSegmentGroupClassification?partyClassificationGroupId=${args.partyClassificationGroupId}segmentGroupId=${args.segmentGroupId}`, null, req);
  }
};
export {deleteSegmentGroupClassification};


const deleteSegmentGroupGeo = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSegmentGroupGeo method',
  args:{geoId: {type: GraphQLString},segmentGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/deleteSegmentGroupGeo?geoId=${args.geoId}segmentGroupId=${args.segmentGroupId}`, null, req);
  }
};
export {deleteSegmentGroupGeo};


const deleteSegmentGroupRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSegmentGroupRole method',
  args:{roleTypeId: {type: GraphQLString},segmentGroupId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/deleteSegmentGroupRole?roleTypeId=${args.roleTypeId}segmentGroupId=${args.segmentGroupId}partyId=${args.partyId}`, null, req);
  }
};
export {deleteSegmentGroupRole};


const deleteSegmentGroupType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSegmentGroupType method',
  args:{segmentGroupTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/deleteSegmentGroupType?segmentGroupTypeId=${args.segmentGroupTypeId}`, null, req);
  }
};
export {deleteSegmentGroupType};


const deleteTrackingCode = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTrackingCode method',
  args:{trackingCodeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/deleteTrackingCode?trackingCodeId=${args.trackingCodeId}`, null, req);
  }
};
export {deleteTrackingCode};


const deleteTrackingCodeOrderReturn = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTrackingCodeOrderReturn method',
  args:{orderId: {type: GraphQLString},trackingCodeTypeId: {type: GraphQLString},returnId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/deleteTrackingCodeOrderReturn?orderId=${args.orderId}trackingCodeTypeId=${args.trackingCodeTypeId}returnId=${args.returnId}`, null, req);
  }
};
export {deleteTrackingCodeOrderReturn};


const deleteTrackingCodeType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTrackingCodeType method',
  args:{trackingCodeTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/deleteTrackingCodeType?trackingCodeTypeId=${args.trackingCodeTypeId}`, null, req);
  }
};
export {deleteTrackingCodeType};


const deleteWebSiteContactList = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWebSiteContactList method',
  args:{fromDate: {type: GraphQLString},contactListId: {type: GraphQLString},webSiteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/deleteWebSiteContactList?fromDate=${args.fromDate}contactListId=${args.contactListId}webSiteId=${args.webSiteId}`, null, req);
  }
};
export {deleteWebSiteContactList};


const exportVCard = {
  type: GraphQLString,
  description: 'mutation for ofbiz exportVCard method',
  args:{partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/exportVCard?partyId=${args.partyId}`, null, req);
  }
};
export {exportVCard};


const importVCard = {
  type: GraphQLString,
  description: 'mutation for ofbiz importVCard method',
  args:{infile: {type: GraphQLString},serviceName: {type: GraphQLString},partyType: {type: GraphQLString},serviceContext: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/importVCard?infile=${args.infile}serviceName=${args.serviceName}partyType=${args.partyType}serviceContext=${args.serviceContext}`, null, req);
  }
};
export {importVCard};


const marketingPermissionService = {
  type: GraphQLString,
  description: 'mutation for ofbiz marketingPermissionService method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/marketingPermissionService?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {marketingPermissionService};


const mergeContacts = {
  type: GraphQLString,
  description: 'mutation for ofbiz mergeContacts method',
  args:{partyIdTo: {type: GraphQLString},partyId: {type: GraphQLString},emailContactMechId: {type: GraphQLString},addrContactMechId: {type: GraphQLString},useEmail2: {type: GraphQLString},useContactNum2: {type: GraphQLString},phoneContactMechIdTo: {type: GraphQLString},emailContactMechIdTo: {type: GraphQLString},addrContactMechIdTo: {type: GraphQLString},phoneContactMechId: {type: GraphQLString},useAddress2: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/mergeContacts?partyIdTo=${args.partyIdTo}partyId=${args.partyId}emailContactMechId=${args.emailContactMechId}addrContactMechId=${args.addrContactMechId}useEmail2=${args.useEmail2}useContactNum2=${args.useContactNum2}phoneContactMechIdTo=${args.phoneContactMechIdTo}emailContactMechIdTo=${args.emailContactMechIdTo}addrContactMechIdTo=${args.addrContactMechIdTo}phoneContactMechId=${args.phoneContactMechId}useAddress2=${args.useAddress2}`, null, req);
  }
};
export {mergeContacts};


const optOutOfListFromCommEvent = {
  type: GraphQLString,
  description: 'mutation for ofbiz optOutOfListFromCommEvent method',
  args:{communicationEventId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/optOutOfListFromCommEvent?communicationEventId=${args.communicationEventId}`, null, req);
  }
};
export {optOutOfListFromCommEvent};


const removeContactList = {
  type: GraphQLString,
  description: 'mutation for ofbiz removeContactList method',
  args:{contactListId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/removeContactList?contactListId=${args.contactListId}`, null, req);
  }
};
export {removeContactList};


const removePriceRuleFromMarketingCampaign = {
  type: GraphQLString,
  description: 'mutation for ofbiz removePriceRuleFromMarketingCampaign method',
  args:{marketingCampaignId: {type: GraphQLString},productPriceRuleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/removePriceRuleFromMarketingCampaign?marketingCampaignId=${args.marketingCampaignId}productPriceRuleId=${args.productPriceRuleId}`, null, req);
  }
};
export {removePriceRuleFromMarketingCampaign};


const removePromoFromMarketingCampaign = {
  type: GraphQLString,
  description: 'mutation for ofbiz removePromoFromMarketingCampaign method',
  args:{marketingCampaignId: {type: GraphQLString},productPromoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/removePromoFromMarketingCampaign?marketingCampaignId=${args.marketingCampaignId}productPromoId=${args.productPromoId}`, null, req);
  }
};
export {removePromoFromMarketingCampaign};


const sendContactListPartySubscribeEmail = {
  type: GraphQLString,
  description: 'mutation for ofbiz sendContactListPartySubscribeEmail method',
  args:{preferredContactMechId: {type: GraphQLString},fromDate: {type: GraphQLString},statusId: {type: GraphQLString},baseLocation: {type: GraphQLString},contactListId: {type: GraphQLString},productStoreId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/sendContactListPartySubscribeEmail?preferredContactMechId=${args.preferredContactMechId}fromDate=${args.fromDate}statusId=${args.statusId}baseLocation=${args.baseLocation}contactListId=${args.contactListId}productStoreId=${args.productStoreId}partyId=${args.partyId}`, null, req);
  }
};
export {sendContactListPartySubscribeEmail};


const sendContactListPartyUnSubscribeEmail = {
  type: GraphQLString,
  description: 'mutation for ofbiz sendContactListPartyUnSubscribeEmail method',
  args:{preferredContactMechId: {type: GraphQLString},fromDate: {type: GraphQLString},statusId: {type: GraphQLString},contactListId: {type: GraphQLString},productStoreId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/sendContactListPartyUnSubscribeEmail?preferredContactMechId=${args.preferredContactMechId}fromDate=${args.fromDate}statusId=${args.statusId}contactListId=${args.contactListId}productStoreId=${args.productStoreId}partyId=${args.partyId}`, null, req);
  }
};
export {sendContactListPartyUnSubscribeEmail};


const sendContactListPartyUnSubscribeVerifyEmail = {
  type: GraphQLString,
  description: 'mutation for ofbiz sendContactListPartyUnSubscribeVerifyEmail method',
  args:{preferredContactMechId: {type: GraphQLString},fromDate: {type: GraphQLString},statusId: {type: GraphQLString},baseLocation: {type: GraphQLString},contactListId: {type: GraphQLString},productStoreId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/sendContactListPartyUnSubscribeVerifyEmail?preferredContactMechId=${args.preferredContactMechId}fromDate=${args.fromDate}statusId=${args.statusId}baseLocation=${args.baseLocation}contactListId=${args.contactListId}productStoreId=${args.productStoreId}partyId=${args.partyId}`, null, req);
  }
};
export {sendContactListPartyUnSubscribeVerifyEmail};


const sendContactListPartyVerifyEmail = {
  type: GraphQLString,
  description: 'mutation for ofbiz sendContactListPartyVerifyEmail method',
  args:{fromDate: {type: GraphQLString},contactListId: {type: GraphQLString},partyId: {type: GraphQLString},baseLocation: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/sendContactListPartyVerifyEmail?fromDate=${args.fromDate}contactListId=${args.contactListId}partyId=${args.partyId}baseLocation=${args.baseLocation}`, null, req);
  }
};
export {sendContactListPartyVerifyEmail};


const signUpForContactList = {
  type: GraphQLString,
  description: 'mutation for ofbiz signUpForContactList method',
  args:{contactListId: {type: GraphQLString},email: {type: GraphQLString},baseLocation: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/signUpForContactList?contactListId=${args.contactListId}email=${args.email}baseLocation=${args.baseLocation}partyId=${args.partyId}`, null, req);
  }
};
export {signUpForContactList};


const unsubscribeContactListParty = {
  type: GraphQLString,
  description: 'mutation for ofbiz unsubscribeContactListParty method',
  args:{contactListId: {type: GraphQLString},email: {type: GraphQLString},baseLocation: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/unsubscribeContactListParty?contactListId=${args.contactListId}email=${args.email}baseLocation=${args.baseLocation}partyId=${args.partyId}`, null, req);
  }
};
export {unsubscribeContactListParty};


const unsubscribeContactListPartyContachMech = {
  type: GraphQLString,
  description: 'mutation for ofbiz unsubscribeContactListPartyContachMech method',
  args:{contactListId: {type: GraphQLString},preferredContactMechId: {type: GraphQLString},baseLocation: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/unsubscribeContactListPartyContachMech?contactListId=${args.contactListId}preferredContactMechId=${args.preferredContactMechId}baseLocation=${args.baseLocation}partyId=${args.partyId}`, null, req);
  }
};
export {unsubscribeContactListPartyContachMech};


const updateCommStatusFromCommEvent = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCommStatusFromCommEvent method',
  args:{statusId: {type: GraphQLString},communicationEventId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/updateCommStatusFromCommEvent?statusId=${args.statusId}communicationEventId=${args.communicationEventId}`, null, req);
  }
};
export {updateCommStatusFromCommEvent};


const updateContactList = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContactList method',
  args:{contactListId: {type: GraphQLString},verifyEmailSubject: {type: GraphQLString},comments: {type: GraphQLString},contactListName: {type: GraphQLString},marketingCampaignId: {type: GraphQLString},optOutScreen: {type: GraphQLString},description: {type: GraphQLString},contactMechTypeId: {type: GraphQLString},contactListTypeId: {type: GraphQLString},verifyEmailFrom: {type: GraphQLString},ownerPartyId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},singleUse: {type: GraphQLString},isPublic: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},verifyEmailScreen: {type: GraphQLString},verifyEmailWebSiteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/updateContactList?contactListId=${args.contactListId}verifyEmailSubject=${args.verifyEmailSubject}comments=${args.comments}contactListName=${args.contactListName}marketingCampaignId=${args.marketingCampaignId}optOutScreen=${args.optOutScreen}description=${args.description}contactMechTypeId=${args.contactMechTypeId}contactListTypeId=${args.contactListTypeId}verifyEmailFrom=${args.verifyEmailFrom}ownerPartyId=${args.ownerPartyId}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}singleUse=${args.singleUse}isPublic=${args.isPublic}createdByUserLogin=${args.createdByUserLogin}verifyEmailScreen=${args.verifyEmailScreen}verifyEmailWebSiteId=${args.verifyEmailWebSiteId}`, null, req);
  }
};
export {updateContactList};


const updateContactListCommStatus = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContactListCommStatus method',
  args:{statusId: {type: GraphQLString},contactListId: {type: GraphQLString},communicationEventId: {type: GraphQLString},contactMechId: {type: GraphQLString},messageId: {type: GraphQLInt},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/updateContactListCommStatus?statusId=${args.statusId}contactListId=${args.contactListId}communicationEventId=${args.communicationEventId}contactMechId=${args.contactMechId}messageId=${args.messageId}partyId=${args.partyId}`, null, req);
  }
};
export {updateContactListCommStatus};


const updateContactListParty = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContactListParty method',
  args:{contactListId: {type: GraphQLString},partyId: {type: GraphQLString},fromDate: {type: GraphQLString},optInVerifyCode: {type: GraphQLString},statusId: {type: GraphQLString},baseLocation: {type: GraphQLString},preferredContactMechId: {type: GraphQLString},productStoreId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/updateContactListParty?contactListId=${args.contactListId}partyId=${args.partyId}fromDate=${args.fromDate}optInVerifyCode=${args.optInVerifyCode}statusId=${args.statusId}baseLocation=${args.baseLocation}preferredContactMechId=${args.preferredContactMechId}productStoreId=${args.productStoreId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateContactListParty};


const updateContactListPartyNoUserLogin = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContactListPartyNoUserLogin method',
  args:{contactListId: {type: GraphQLString},fromDate: {type: GraphQLString},optInVerifyCode: {type: GraphQLString},statusId: {type: GraphQLString},baseLocation: {type: GraphQLString},preferredContactMechId: {type: GraphQLString},productStoreId: {type: GraphQLString},partyId: {type: GraphQLString},email: {type: GraphQLString},thruDate: {type: GraphQLString},webSiteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/updateContactListPartyNoUserLogin?contactListId=${args.contactListId}fromDate=${args.fromDate}optInVerifyCode=${args.optInVerifyCode}statusId=${args.statusId}baseLocation=${args.baseLocation}preferredContactMechId=${args.preferredContactMechId}productStoreId=${args.productStoreId}partyId=${args.partyId}email=${args.email}thruDate=${args.thruDate}webSiteId=${args.webSiteId}`, null, req);
  }
};
export {updateContactListPartyNoUserLogin};


const updateMarketingCampaign = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateMarketingCampaign method',
  args:{marketingCampaignId: {type: GraphQLString},expectedResponsePercent: {type: GraphQLFloat},expectedRevenue: {type: GraphQLFloat},convertedLeads: {type: GraphQLString},campaignSummary: {type: GraphQLString},numSent: {type: GraphQLInt},parentCampaignId: {type: GraphQLString},estimatedCost: {type: GraphQLFloat},isActive: {type: GraphQLString},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},currencyUomId: {type: GraphQLString},statusId: {type: GraphQLString},budgetedCost: {type: GraphQLFloat},campaignName: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},startDate: {type: GraphQLString},actualCost: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/updateMarketingCampaign?marketingCampaignId=${args.marketingCampaignId}expectedResponsePercent=${args.expectedResponsePercent}expectedRevenue=${args.expectedRevenue}convertedLeads=${args.convertedLeads}campaignSummary=${args.campaignSummary}numSent=${args.numSent}parentCampaignId=${args.parentCampaignId}estimatedCost=${args.estimatedCost}isActive=${args.isActive}thruDate=${args.thruDate}fromDate=${args.fromDate}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}currencyUomId=${args.currencyUomId}statusId=${args.statusId}budgetedCost=${args.budgetedCost}campaignName=${args.campaignName}createdByUserLogin=${args.createdByUserLogin}startDate=${args.startDate}actualCost=${args.actualCost}`, null, req);
  }
};
export {updateMarketingCampaign};


const updatePartyEmailContactListParty = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyEmailContactListParty method',
  args:{oldContactMechId: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/updatePartyEmailContactListParty?oldContactMechId=${args.oldContactMechId}contactMechId=${args.contactMechId}`, null, req);
  }
};
export {updatePartyEmailContactListParty};


const updateSegmentGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSegmentGroup method',
  args:{segmentGroupId: {type: GraphQLString},description: {type: GraphQLString},productStoreId: {type: GraphQLString},segmentGroupTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/updateSegmentGroup?segmentGroupId=${args.segmentGroupId}description=${args.description}productStoreId=${args.productStoreId}segmentGroupTypeId=${args.segmentGroupTypeId}`, null, req);
  }
};
export {updateSegmentGroup};


const updateSegmentGroupClassification = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSegmentGroupClassification method',
  args:{partyClassificationGroupId: {type: GraphQLString},segmentGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/updateSegmentGroupClassification?partyClassificationGroupId=${args.partyClassificationGroupId}segmentGroupId=${args.segmentGroupId}`, null, req);
  }
};
export {updateSegmentGroupClassification};


const updateSegmentGroupGeo = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSegmentGroupGeo method',
  args:{geoId: {type: GraphQLString},segmentGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/updateSegmentGroupGeo?geoId=${args.geoId}segmentGroupId=${args.segmentGroupId}`, null, req);
  }
};
export {updateSegmentGroupGeo};


const updateSegmentGroupRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSegmentGroupRole method',
  args:{roleTypeId: {type: GraphQLString},segmentGroupId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/updateSegmentGroupRole?roleTypeId=${args.roleTypeId}segmentGroupId=${args.segmentGroupId}partyId=${args.partyId}`, null, req);
  }
};
export {updateSegmentGroupRole};


const updateSegmentGroupType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSegmentGroupType method',
  args:{segmentGroupTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/updateSegmentGroupType?segmentGroupTypeId=${args.segmentGroupTypeId}description=${args.description}`, null, req);
  }
};
export {updateSegmentGroupType};


const updateTrackingCode = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTrackingCode method',
  args:{trackingCodeId: {type: GraphQLString},trackableLifetime: {type: GraphQLInt},redirectUrl: {type: GraphQLString},comments: {type: GraphQLString},marketingCampaignId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},overrideLogo: {type: GraphQLString},groupId: {type: GraphQLString},description: {type: GraphQLString},billableLifetime: {type: GraphQLInt},thruDate: {type: GraphQLString},subgroupId: {type: GraphQLString},fromDate: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},createdDate: {type: GraphQLString},trackingCodeTypeId: {type: GraphQLString},overrideCss: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},prodCatalogId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/updateTrackingCode?trackingCodeId=${args.trackingCodeId}trackableLifetime=${args.trackableLifetime}redirectUrl=${args.redirectUrl}comments=${args.comments}marketingCampaignId=${args.marketingCampaignId}lastModifiedDate=${args.lastModifiedDate}overrideLogo=${args.overrideLogo}groupId=${args.groupId}description=${args.description}billableLifetime=${args.billableLifetime}thruDate=${args.thruDate}subgroupId=${args.subgroupId}fromDate=${args.fromDate}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}createdDate=${args.createdDate}trackingCodeTypeId=${args.trackingCodeTypeId}overrideCss=${args.overrideCss}createdByUserLogin=${args.createdByUserLogin}prodCatalogId=${args.prodCatalogId}`, null, req);
  }
};
export {updateTrackingCode};


const updateTrackingCodeOrder = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTrackingCodeOrder method',
  args:{orderId: {type: GraphQLString},trackingCodeTypeId: {type: GraphQLString},trackingCodeId: {type: GraphQLString},siteId: {type: GraphQLString},hasExported: {type: GraphQLString},affiliateReferredTimeStamp: {type: GraphQLString},isBillable: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/updateTrackingCodeOrder?orderId=${args.orderId}trackingCodeTypeId=${args.trackingCodeTypeId}trackingCodeId=${args.trackingCodeId}siteId=${args.siteId}hasExported=${args.hasExported}affiliateReferredTimeStamp=${args.affiliateReferredTimeStamp}isBillable=${args.isBillable}`, null, req);
  }
};
export {updateTrackingCodeOrder};


const updateTrackingCodeOrderReturn = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTrackingCodeOrderReturn method',
  args:{orderId: {type: GraphQLString},trackingCodeTypeId: {type: GraphQLString},returnId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},trackingCodeId: {type: GraphQLString},siteId: {type: GraphQLString},hasExported: {type: GraphQLString},affiliateReferredTimeStamp: {type: GraphQLString},isBillable: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/updateTrackingCodeOrderReturn?orderId=${args.orderId}trackingCodeTypeId=${args.trackingCodeTypeId}returnId=${args.returnId}orderItemSeqId=${args.orderItemSeqId}trackingCodeId=${args.trackingCodeId}siteId=${args.siteId}hasExported=${args.hasExported}affiliateReferredTimeStamp=${args.affiliateReferredTimeStamp}isBillable=${args.isBillable}`, null, req);
  }
};
export {updateTrackingCodeOrderReturn};


const updateTrackingCodeType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTrackingCodeType method',
  args:{trackingCodeTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/updateTrackingCodeType?trackingCodeTypeId=${args.trackingCodeTypeId}description=${args.description}`, null, req);
  }
};
export {updateTrackingCodeType};


const updateWebSiteContactList = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWebSiteContactList method',
  args:{fromDate: {type: GraphQLString},contactListId: {type: GraphQLString},webSiteId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/marketings/updateWebSiteContactList?fromDate=${args.fromDate}contactListId=${args.contactListId}webSiteId=${args.webSiteId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateWebSiteContactList};
