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


const findParty = {
  type: ResponseType,
  description: 'mutation for ofbiz findParty method',
  args:{lastName: {type: GraphQLString},VIEW_SIZE: {type: GraphQLString},city: {type: GraphQLString},postalCode: {type: GraphQLString},softIdentifier: {type: GraphQLString},extInfo: {type: GraphQLString},partyTypeId: {type: GraphQLString},showAll: {type: GraphQLString},infoString: {type: GraphQLString},countryCode: {type: GraphQLString},contactNumber: {type: GraphQLString},sortField: {type: GraphQLString},partyId: {type: GraphQLString},roleTypeId: {type: GraphQLString},serialNumber: {type: GraphQLString},address2: {type: GraphQLString},address1: {type: GraphQLString},userLoginId: {type: GraphQLString},inventoryItemId: {type: GraphQLString},lookupFlag: {type: GraphQLString},firstName: {type: GraphQLString},partyRelationshipTypeId: {type: GraphQLString},groupName: {type: GraphQLString},areaCode: {type: GraphQLString},stateProvinceGeoId: {type: GraphQLString},VIEW_INDEX: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyView/findParty?lastName=${args.lastName}VIEW_SIZE=${args.VIEW_SIZE}city=${args.city}postalCode=${args.postalCode}softIdentifier=${args.softIdentifier}extInfo=${args.extInfo}partyTypeId=${args.partyTypeId}showAll=${args.showAll}infoString=${args.infoString}countryCode=${args.countryCode}contactNumber=${args.contactNumber}sortField=${args.sortField}partyId=${args.partyId}ownerPartyIds=${args.ownerPartyIds}roleTypeId=${args.roleTypeId}serialNumber=${args.serialNumber}address2=${args.address2}address1=${args.address1}userLoginId=${args.userLoginId}inventoryItemId=${args.inventoryItemId}lookupFlag=${args.lookupFlag}firstName=${args.firstName}partyRelationshipTypeId=${args.partyRelationshipTypeId}groupName=${args.groupName}areaCode=${args.areaCode}stateProvinceGeoId=${args.stateProvinceGeoId}VIEW_INDEX=${args.VIEW_INDEX}`, null, req);
  }
};
export {findParty};


const getChildRoleTypes = {
  type: ResponseType,
  description: 'mutation for ofbiz getChildRoleTypes method',
  args:{roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyView/getChildRoleTypes?roleTypeId=${args.roleTypeId}`, null, req);
  }
};
export {getChildRoleTypes};


const getParentOrganizations = {
  type: ResponseType,
  description: 'mutation for ofbiz getParentOrganizations method',
  args:{organizationPartyId: {type: GraphQLString},getParentsOfParents: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyView/getParentOrganizations?organizationPartyId=${args.organizationPartyId}getParentsOfParents=${args.getParentsOfParents}`, null, req);
  }
};
export {getParentOrganizations};


const getPartiesByRelationship = {
  type: ResponseType,
  description: 'mutation for ofbiz getPartiesByRelationship method',
  args:{partyIdFrom: {type: GraphQLString},roleTypeIdTo: {type: GraphQLString},positionTitle: {type: GraphQLString},comments: {type: GraphQLString},priorityTypeId: {type: GraphQLString},permissionsEnumId: {type: GraphQLString},roleTypeIdFrom: {type: GraphQLString},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},relationshipName: {type: GraphQLString},securityGroupId: {type: GraphQLString},partyRelationshipTypeId: {type: GraphQLString},statusId: {type: GraphQLString},partyIdTo: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyView/getPartiesByRelationship?partyIdFrom=${args.partyIdFrom}roleTypeIdTo=${args.roleTypeIdTo}positionTitle=${args.positionTitle}comments=${args.comments}priorityTypeId=${args.priorityTypeId}permissionsEnumId=${args.permissionsEnumId}roleTypeIdFrom=${args.roleTypeIdFrom}thruDate=${args.thruDate}fromDate=${args.fromDate}relationshipName=${args.relationshipName}securityGroupId=${args.securityGroupId}partyRelationshipTypeId=${args.partyRelationshipTypeId}statusId=${args.statusId}partyIdTo=${args.partyIdTo}`, null, req);
  }
};
export {getPartiesByRelationship};


const getPartyContactMechValueMaps = {
  type: ResponseType,
  description: 'mutation for ofbiz getPartyContactMechValueMaps method',
  args:{userLogin: {type: new GraphQLList(KeyValueInputType)},showOld: {type: GraphQLBoolean},contactMechTypeId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyView/getPartyContactMechValueMaps?userLogin=${args.userLogin}showOld=${args.showOld}contactMechTypeId=${args.contactMechTypeId}partyId=${args.partyId}`, null, req);
  }
};
export {getPartyContactMechValueMaps};


const getPartyFromEmail = {
  type: ResponseType,
  description: 'mutation for ofbiz getPartyFromEmail method',
  args:{email: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyView/getPartyFromEmail?email=${args.email}`, null, req);
  }
};
export {getPartyFromEmail};


const getPartyFromExternalId = {
  type: ResponseType,
  description: 'mutation for ofbiz getPartyFromExternalId method',
  args:{externalId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyView/getPartyFromExternalId?externalId=${args.externalId}`, null, req);
  }
};
export {getPartyFromExternalId};


const getPartyFromGroupName = {
  type: ResponseType,
  description: 'mutation for ofbiz getPartyFromGroupName method',
  args:{groupName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyView/getPartyFromGroupName?groupName=${args.groupName}`, null, req);
  }
};
export {getPartyFromGroupName};


const getPartyFromName = {
  type: ResponseType,
  description: 'mutation for ofbiz getPartyFromName method',
  args:{firstName: {type: GraphQLString},lastName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyView/getPartyFromName?firstName=${args.firstName}lastName=${args.lastName}`, null, req);
  }
};
export {getPartyFromName};


const getPartyFromUserLogin = {
  type: ResponseType,
  description: 'mutation for ofbiz getPartyFromUserLogin method',
  args:{userLoginId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyView/getPartyFromUserLogin?userLoginId=${args.userLoginId}`, null, req);
  }
};
export {getPartyFromUserLogin};


const getPerson = {
  type: ResponseType,
  description: 'mutation for ofbiz getPerson method',
  args:{partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyView/getPerson?partyId=${args.partyId}`, null, req);
  }
};
export {getPerson};


const getPostalAddressBoundary = {
  type: ResponseType,
  description: 'mutation for ofbiz getPostalAddressBoundary method',
  args:{contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyView/getPostalAddressBoundary?contactMechId=${args.contactMechId}`, null, req);
  }
};
export {getPostalAddressBoundary};


const getRelatedParties = {
  type: ResponseType,
  description: 'mutation for ofbiz getRelatedParties method',
  args:{partyIdFrom: {type: GraphQLString},roleTypeIdTo: {type: GraphQLString},partyRelationshipTypeId: {type: GraphQLString},includeFromToSwitched: {type: GraphQLString},roleTypeIdToIncludeAllChildTypes: {type: GraphQLString},recurse: {type: GraphQLString},useCache: {type: GraphQLString},roleTypeIdFromInclueAllChildTypes: {type: GraphQLString},roleTypeIdFrom: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyView/getRelatedParties?partyIdFrom=${args.partyIdFrom}roleTypeIdTo=${args.roleTypeIdTo}partyRelationshipTypeId=${args.partyRelationshipTypeId}includeFromToSwitched=${args.includeFromToSwitched}roleTypeIdToIncludeAllChildTypes=${args.roleTypeIdToIncludeAllChildTypes}recurse=${args.recurse}useCache=${args.useCache}roleTypeIdFromInclueAllChildTypes=${args.roleTypeIdFromInclueAllChildTypes}roleTypeIdFrom=${args.roleTypeIdFrom}`, null, req);
  }
};
export {getRelatedParties};


const performFindParty = {
  type: ResponseType,
  description: 'mutation for ofbiz performFindParty method',
  args:{lastName: {type: GraphQLString},city: {type: GraphQLString},postalCode: {type: GraphQLString},softIdentifier: {type: GraphQLString},extInfo: {type: GraphQLString},partyTypeId: {type: GraphQLString},infoString: {type: GraphQLString},countryCode: {type: GraphQLString},partyIdentificationTypeId: {type: GraphQLString},contactNumber: {type: GraphQLString},sortField: {type: GraphQLString},partyId: {type: GraphQLString},roleTypeId: {type: GraphQLString},serialNumber: {type: GraphQLString},address2: {type: GraphQLString},address1: {type: GraphQLString},noConditionFind: {type: GraphQLString},externalId: {type: GraphQLString},idValue: {type: GraphQLString},userLoginId: {type: GraphQLString},inventoryItemId: {type: GraphQLString},firstName: {type: GraphQLString},partyRelationshipTypeId: {type: GraphQLString},groupName: {type: GraphQLString},areaCode: {type: GraphQLString},stateProvinceGeoId: {type: GraphQLString},extCond: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyView/performFindParty?lastName=${args.lastName}city=${args.city}postalCode=${args.postalCode}softIdentifier=${args.softIdentifier}extInfo=${args.extInfo}partyTypeId=${args.partyTypeId}infoString=${args.infoString}countryCode=${args.countryCode}partyIdentificationTypeId=${args.partyIdentificationTypeId}contactNumber=${args.contactNumber}sortField=${args.sortField}partyId=${args.partyId}ownerPartyIds=${args.ownerPartyIds}roleTypeId=${args.roleTypeId}serialNumber=${args.serialNumber}address2=${args.address2}address1=${args.address1}noConditionFind=${args.noConditionFind}externalId=${args.externalId}idValue=${args.idValue}userLoginId=${args.userLoginId}inventoryItemId=${args.inventoryItemId}firstName=${args.firstName}partyRelationshipTypeId=${args.partyRelationshipTypeId}groupName=${args.groupName}areaCode=${args.areaCode}stateProvinceGeoId=${args.stateProvinceGeoId}extCond=${args.extCond}`, null, req);
  }
};
export {performFindParty};
