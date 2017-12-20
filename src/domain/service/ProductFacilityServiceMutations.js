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


const addContactMechToFacility = {
  type: ResopnseType,
  description: 'mutation for ofbiz addContactMechToFacility method',
  args:{fromDate: {type: GraphQLString},facilityId: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/addContactMechToFacility?fromDate=${args.fromDate}facilityId=${args.facilityId}contactMechId=${args.contactMechId}`, null, req);
  }
};
export {addContactMechToFacility};


const addFacilityGroupToGroup = {
  type: ResopnseType,
  description: 'mutation for ofbiz addFacilityGroupToGroup method',
  args:{facilityGroupId: {type: GraphQLString},parentFacilityGroupId: {type: GraphQLString},fromDate: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/addFacilityGroupToGroup?facilityGroupId=${args.facilityGroupId}parentFacilityGroupId=${args.parentFacilityGroupId}fromDate=${args.fromDate}sequenceNum=${args.sequenceNum}thruDate=${args.thruDate}`, null, req);
  }
};
export {addFacilityGroupToGroup};


const addFacilityToGroup = {
  type: ResopnseType,
  description: 'mutation for ofbiz addFacilityToGroup method',
  args:{facilityId: {type: GraphQLString},facilityGroupId: {type: GraphQLString},fromDate: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/addFacilityToGroup?facilityId=${args.facilityId}facilityGroupId=${args.facilityGroupId}fromDate=${args.fromDate}sequenceNum=${args.sequenceNum}thruDate=${args.thruDate}`, null, req);
  }
};
export {addFacilityToGroup};


const addPartyToFacility = {
  type: ResopnseType,
  description: 'mutation for ofbiz addPartyToFacility method',
  args:{roleTypeId: {type: GraphQLString},facilityId: {type: GraphQLString},partyId: {type: GraphQLString},fromDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/addPartyToFacility?roleTypeId=${args.roleTypeId}facilityId=${args.facilityId}partyId=${args.partyId}fromDate=${args.fromDate}thruDate=${args.thruDate}`, null, req);
  }
};
export {addPartyToFacility};


const addPartyToFacilityGroup = {
  type: ResopnseType,
  description: 'mutation for ofbiz addPartyToFacilityGroup method',
  args:{roleTypeId: {type: GraphQLString},facilityGroupId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/addPartyToFacilityGroup?roleTypeId=${args.roleTypeId}facilityGroupId=${args.facilityGroupId}partyId=${args.partyId}`, null, req);
  }
};
export {addPartyToFacilityGroup};


const balanceInventoryItems = {
  type: ResopnseType,
  description: 'mutation for ofbiz balanceInventoryItems method',
  args:{inventoryItemId: {type: GraphQLString},priorityOrderId: {type: GraphQLString},priorityOrderItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/balanceInventoryItems?inventoryItemId=${args.inventoryItemId}priorityOrderId=${args.priorityOrderId}priorityOrderItemSeqId=${args.priorityOrderItemSeqId}`, null, req);
  }
};
export {balanceInventoryItems};


const balanceOrderItemsWithNegativeReservations = {
  type: ResopnseType,
  description: 'mutation for ofbiz balanceOrderItemsWithNegativeReservations method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/balanceOrderItemsWithNegativeReservations?orderId=${args.orderId}`, null, req);
  }
};
export {balanceOrderItemsWithNegativeReservations};


const cancelInventoryTransfer = {
  type: ResopnseType,
  description: 'mutation for ofbiz cancelInventoryTransfer method',
  args:{inventoryTransferId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/cancelInventoryTransfer?inventoryTransferId=${args.inventoryTransferId}`, null, req);
  }
};
export {cancelInventoryTransfer};


const cancelOrderInventoryReservation = {
  type: ResopnseType,
  description: 'mutation for ofbiz cancelOrderInventoryReservation method',
  args:{orderId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/cancelOrderInventoryReservation?orderId=${args.orderId}orderItemSeqId=${args.orderItemSeqId}shipGroupSeqId=${args.shipGroupSeqId}`, null, req);
  }
};
export {cancelOrderInventoryReservation};


const cancelOrderItemInvResQty = {
  type: ResopnseType,
  description: 'mutation for ofbiz cancelOrderItemInvResQty method',
  args:{orderItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},cancelQuantity: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/cancelOrderItemInvResQty?orderItemSeqId=${args.orderItemSeqId}orderId=${args.orderId}shipGroupSeqId=${args.shipGroupSeqId}cancelQuantity=${args.cancelQuantity}`, null, req);
  }
};
export {cancelOrderItemInvResQty};


const cancelOrderItemShipGrpInvRes = {
  type: ResopnseType,
  description: 'mutation for ofbiz cancelOrderItemShipGrpInvRes method',
  args:{orderItemSeqId: {type: GraphQLString},inventoryItemId: {type: GraphQLString},orderId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},cancelQuantity: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/cancelOrderItemShipGrpInvRes?orderItemSeqId=${args.orderItemSeqId}inventoryItemId=${args.inventoryItemId}orderId=${args.orderId}shipGroupSeqId=${args.shipGroupSeqId}cancelQuantity=${args.cancelQuantity}`, null, req);
  }
};
export {cancelOrderItemShipGrpInvRes};


const changeOwnerUponIssuance = {
  type: ResopnseType,
  description: 'mutation for ofbiz changeOwnerUponIssuance method',
  args:{itemIssuanceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/changeOwnerUponIssuance?itemIssuanceId=${args.itemIssuanceId}`, null, req);
  }
};
export {changeOwnerUponIssuance};


const checkInventoryAvailability = {
  type: ResopnseType,
  description: 'mutation for ofbiz checkInventoryAvailability method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/checkInventoryAvailability?`, null, req);
  }
};
export {checkInventoryAvailability};


const checkProductFacilityRelatedPermission = {
  type: ResopnseType,
  description: 'mutation for ofbiz checkProductFacilityRelatedPermission method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/checkProductFacilityRelatedPermission?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {checkProductFacilityRelatedPermission};


const checkProductInventoryDiscontinuation = {
  type: ResopnseType,
  description: 'mutation for ofbiz checkProductInventoryDiscontinuation method',
  args:{productId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/checkProductInventoryDiscontinuation?productId=${args.productId}`, null, req);
  }
};
export {checkProductInventoryDiscontinuation};


const completeInventoryTransfer = {
  type: ResopnseType,
  description: 'mutation for ofbiz completeInventoryTransfer method',
  args:{inventoryTransferId: {type: GraphQLString},receiveDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/completeInventoryTransfer?inventoryTransferId=${args.inventoryTransferId}receiveDate=${args.receiveDate}`, null, req);
  }
};
export {completeInventoryTransfer};


const countProductInventoryOnHand = {
  type: ResopnseType,
  description: 'mutation for ofbiz countProductInventoryOnHand method',
  args:{facilityId: {type: GraphQLString},productId: {type: GraphQLString},inventoryCountDate: {type: GraphQLString},statusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/countProductInventoryOnHand?facilityId=${args.facilityId}productId=${args.productId}inventoryCountDate=${args.inventoryCountDate}statusId=${args.statusId}`, null, req);
  }
};
export {countProductInventoryOnHand};


const countProductInventoryShippedForSales = {
  type: ResopnseType,
  description: 'mutation for ofbiz countProductInventoryShippedForSales method',
  args:{fromDate: {type: GraphQLString},facilityId: {type: GraphQLString},productId: {type: GraphQLString},statusId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/countProductInventoryShippedForSales?fromDate=${args.fromDate}facilityId=${args.facilityId}productId=${args.productId}statusId=${args.statusId}thruDate=${args.thruDate}`, null, req);
  }
};
export {countProductInventoryShippedForSales};


const createContainer = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContainer method',
  args:{facilityId: {type: GraphQLString},containerTypeId: {type: GraphQLString},description: {type: GraphQLString},containerId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/createContainer?facilityId=${args.facilityId}containerTypeId=${args.containerTypeId}description=${args.description}containerId=${args.containerId}`, null, req);
  }
};
export {createContainer};


const createContainerType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContainerType method',
  args:{containerTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/createContainerType?containerTypeId=${args.containerTypeId}description=${args.description}`, null, req);
  }
};
export {createContainerType};


const createFacility = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFacility method',
  args:{ownerPartyId: {type: GraphQLString},facilityTypeId: {type: GraphQLString},facilityName: {type: GraphQLString},defaultInventoryItemTypeId: {type: GraphQLString},parentFacilityId: {type: GraphQLString},description: {type: GraphQLString},defaultWeightUomId: {type: GraphQLString},primaryFacilityGroupId: {type: GraphQLString},openedDate: {type: GraphQLString},facilitySize: {type: GraphQLFloat},facilitySizeUomId: {type: GraphQLString},closedDate: {type: GraphQLString},defaultDaysToShip: {type: GraphQLInt},defaultDimensionUomId: {type: GraphQLString},productStoreId: {type: GraphQLString},geoPointId: {type: GraphQLString},oldSquareFootage: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/createFacility?ownerPartyId=${args.ownerPartyId}facilityTypeId=${args.facilityTypeId}facilityName=${args.facilityName}defaultInventoryItemTypeId=${args.defaultInventoryItemTypeId}parentFacilityId=${args.parentFacilityId}description=${args.description}defaultWeightUomId=${args.defaultWeightUomId}primaryFacilityGroupId=${args.primaryFacilityGroupId}openedDate=${args.openedDate}facilitySize=${args.facilitySize}facilitySizeUomId=${args.facilitySizeUomId}closedDate=${args.closedDate}defaultDaysToShip=${args.defaultDaysToShip}defaultDimensionUomId=${args.defaultDimensionUomId}productStoreId=${args.productStoreId}geoPointId=${args.geoPointId}oldSquareFootage=${args.oldSquareFootage}`, null, req);
  }
};
export {createFacility};


const createFacilityAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFacilityAttribute method',
  args:{facilityId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/createFacilityAttribute?facilityId=${args.facilityId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {createFacilityAttribute};


const createFacilityCarrierShipment = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFacilityCarrierShipment method',
  args:{roleTypeId: {type: GraphQLString},facilityId: {type: GraphQLString},partyId: {type: GraphQLString},shipmentMethodTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/createFacilityCarrierShipment?roleTypeId=${args.roleTypeId}facilityId=${args.facilityId}partyId=${args.partyId}shipmentMethodTypeId=${args.shipmentMethodTypeId}`, null, req);
  }
};
export {createFacilityCarrierShipment};


const createFacilityContactMech = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFacilityContactMech method',
  args:{fromDate: {type: GraphQLString},extension: {type: GraphQLString},infoString: {type: GraphQLString},facilityId: {type: GraphQLString},comments: {type: GraphQLString},contactMechPurposeTypeId: {type: GraphQLString},contactMechTypeId: {type: GraphQLString},contactMechId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/createFacilityContactMech?fromDate=${args.fromDate}extension=${args.extension}infoString=${args.infoString}facilityId=${args.facilityId}comments=${args.comments}contactMechPurposeTypeId=${args.contactMechPurposeTypeId}contactMechTypeId=${args.contactMechTypeId}contactMechId=${args.contactMechId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createFacilityContactMech};


const createFacilityContactMechPurpose = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFacilityContactMechPurpose method',
  args:{facilityId: {type: GraphQLString},contactMechPurposeTypeId: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/createFacilityContactMechPurpose?facilityId=${args.facilityId}contactMechPurposeTypeId=${args.contactMechPurposeTypeId}contactMechId=${args.contactMechId}`, null, req);
  }
};
export {createFacilityContactMechPurpose};


const createFacilityContent = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFacilityContent method',
  args:{facilityId: {type: GraphQLString},contentId: {type: GraphQLString},fromDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/createFacilityContent?facilityId=${args.facilityId}contentId=${args.contentId}fromDate=${args.fromDate}thruDate=${args.thruDate}`, null, req);
  }
};
export {createFacilityContent};


const createFacilityEmailAddress = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFacilityEmailAddress method',
  args:{emailAddress: {type: GraphQLString},fromDate: {type: GraphQLString},extension: {type: GraphQLString},infoString: {type: GraphQLString},facilityId: {type: GraphQLString},comments: {type: GraphQLString},contactMechPurposeTypeId: {type: GraphQLString},contactMechTypeId: {type: GraphQLString},contactMechId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/createFacilityEmailAddress?emailAddress=${args.emailAddress}fromDate=${args.fromDate}extension=${args.extension}infoString=${args.infoString}facilityId=${args.facilityId}comments=${args.comments}contactMechPurposeTypeId=${args.contactMechPurposeTypeId}contactMechTypeId=${args.contactMechTypeId}contactMechId=${args.contactMechId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createFacilityEmailAddress};


const createFacilityGroup = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFacilityGroup method',
  args:{facilityGroupTypeId: {type: GraphQLString},facilityGroupName: {type: GraphQLString},primaryParentGroupId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/createFacilityGroup?facilityGroupTypeId=${args.facilityGroupTypeId}facilityGroupName=${args.facilityGroupName}primaryParentGroupId=${args.primaryParentGroupId}description=${args.description}`, null, req);
  }
};
export {createFacilityGroup};


const createFacilityGroupType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFacilityGroupType method',
  args:{facilityGroupTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/createFacilityGroupType?facilityGroupTypeId=${args.facilityGroupTypeId}description=${args.description}`, null, req);
  }
};
export {createFacilityGroupType};


const createFacilityLocation = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFacilityLocation method',
  args:{facilityId: {type: GraphQLString},areaId: {type: GraphQLString},positionId: {type: GraphQLString},levelId: {type: GraphQLString},sectionId: {type: GraphQLString},geoPointId: {type: GraphQLString},locationTypeEnumId: {type: GraphQLString},aisleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/createFacilityLocation?facilityId=${args.facilityId}areaId=${args.areaId}positionId=${args.positionId}levelId=${args.levelId}sectionId=${args.sectionId}geoPointId=${args.geoPointId}locationTypeEnumId=${args.locationTypeEnumId}aisleId=${args.aisleId}`, null, req);
  }
};
export {createFacilityLocation};


const createFacilityLocationGeoPoint = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFacilityLocationGeoPoint method',
  args:{fromDate: {type: GraphQLString},facilityId: {type: GraphQLString},geoPointId: {type: GraphQLString},locationSeqId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/createFacilityLocationGeoPoint?fromDate=${args.fromDate}facilityId=${args.facilityId}geoPointId=${args.geoPointId}locationSeqId=${args.locationSeqId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createFacilityLocationGeoPoint};


const createFacilityPostalAddress = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFacilityPostalAddress method',
  args:{city: {type: GraphQLString},address1: {type: GraphQLString},countryGeoId: {type: GraphQLString},houseNumberExt: {type: GraphQLString},extension: {type: GraphQLString},facilityId: {type: GraphQLString},comments: {type: GraphQLString},address2: {type: GraphQLString},postalCode: {type: GraphQLString},postalCodeGeoId: {type: GraphQLString},houseNumber: {type: GraphQLInt},postalCodeExt: {type: GraphQLString},contactMechId: {type: GraphQLString},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},attnName: {type: GraphQLString},directions: {type: GraphQLString},countyGeoId: {type: GraphQLString},contactMechPurposeTypeId: {type: GraphQLString},toName: {type: GraphQLString},cityGeoId: {type: GraphQLString},paymentMethodId: {type: GraphQLString},municipalityGeoId: {type: GraphQLString},stateProvinceGeoId: {type: GraphQLString},geoPointId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/createFacilityPostalAddress?city=${args.city}address1=${args.address1}countryGeoId=${args.countryGeoId}houseNumberExt=${args.houseNumberExt}extension=${args.extension}facilityId=${args.facilityId}comments=${args.comments}address2=${args.address2}postalCode=${args.postalCode}postalCodeGeoId=${args.postalCodeGeoId}houseNumber=${args.houseNumber}postalCodeExt=${args.postalCodeExt}contactMechId=${args.contactMechId}thruDate=${args.thruDate}fromDate=${args.fromDate}attnName=${args.attnName}directions=${args.directions}countyGeoId=${args.countyGeoId}contactMechPurposeTypeId=${args.contactMechPurposeTypeId}toName=${args.toName}cityGeoId=${args.cityGeoId}paymentMethodId=${args.paymentMethodId}municipalityGeoId=${args.municipalityGeoId}stateProvinceGeoId=${args.stateProvinceGeoId}geoPointId=${args.geoPointId}`, null, req);
  }
};
export {createFacilityPostalAddress};


const createFacilityTelecomNumber = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFacilityTelecomNumber method',
  args:{fromDate: {type: GraphQLString},extension: {type: GraphQLString},areaCode: {type: GraphQLString},askForName: {type: GraphQLString},facilityId: {type: GraphQLString},comments: {type: GraphQLString},contactMechPurposeTypeId: {type: GraphQLString},countryCode: {type: GraphQLString},contactNumber: {type: GraphQLString},contactMechId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/createFacilityTelecomNumber?fromDate=${args.fromDate}extension=${args.extension}areaCode=${args.areaCode}askForName=${args.askForName}facilityId=${args.facilityId}comments=${args.comments}contactMechPurposeTypeId=${args.contactMechPurposeTypeId}countryCode=${args.countryCode}contactNumber=${args.contactNumber}contactMechId=${args.contactMechId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createFacilityTelecomNumber};


const createFacilityType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFacilityType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},facilityTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/createFacilityType?parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}facilityTypeId=${args.facilityTypeId}description=${args.description}`, null, req);
  }
};
export {createFacilityType};


const createFacilityTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFacilityTypeAttr method',
  args:{facilityTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/createFacilityTypeAttr?facilityTypeId=${args.facilityTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {createFacilityTypeAttr};


const createInventoryItem = {
  type: ResopnseType,
  description: 'mutation for ofbiz createInventoryItem method',
  args:{isReturned: {type: GraphQLString},facilityId: {type: GraphQLString},productId: {type: GraphQLString},inventoryItemTypeId: {type: GraphQLString},comments: {type: GraphQLString},serialNumber: {type: GraphQLInt},softIdentifier: {type: GraphQLInt},binNumber: {type: GraphQLString},lotId: {type: GraphQLString},uomId: {type: GraphQLString},accountingQuantityTotal: {type: GraphQLFloat},ownerPartyId: {type: GraphQLString},oldAvailableToPromise: {type: GraphQLFloat},activationValidThru: {type: GraphQLString},activationNumber: {type: GraphQLInt},currencyUomId: {type: GraphQLString},statusId: {type: GraphQLString},unitCost: {type: GraphQLFloat},datetimeManufactured: {type: GraphQLString},datetimeReceived: {type: GraphQLString},expireDate: {type: GraphQLString},oldQuantityOnHand: {type: GraphQLFloat},partyId: {type: GraphQLString},containerId: {type: GraphQLString},locationSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/createInventoryItem?isReturned=${args.isReturned}facilityId=${args.facilityId}productId=${args.productId}inventoryItemTypeId=${args.inventoryItemTypeId}comments=${args.comments}serialNumber=${args.serialNumber}softIdentifier=${args.softIdentifier}binNumber=${args.binNumber}lotId=${args.lotId}uomId=${args.uomId}accountingQuantityTotal=${args.accountingQuantityTotal}ownerPartyId=${args.ownerPartyId}oldAvailableToPromise=${args.oldAvailableToPromise}activationValidThru=${args.activationValidThru}activationNumber=${args.activationNumber}currencyUomId=${args.currencyUomId}statusId=${args.statusId}unitCost=${args.unitCost}datetimeManufactured=${args.datetimeManufactured}datetimeReceived=${args.datetimeReceived}expireDate=${args.expireDate}oldQuantityOnHand=${args.oldQuantityOnHand}partyId=${args.partyId}containerId=${args.containerId}locationSeqId=${args.locationSeqId}`, null, req);
  }
};
export {createInventoryItem};


const createInventoryItemCheckSetAtpQoh = {
  type: ResopnseType,
  description: 'mutation for ofbiz createInventoryItemCheckSetAtpQoh method',
  args:{inventoryItemId: {type: GraphQLString},quantityOnHandTotal: {type: GraphQLFloat},availableToPromiseTotal: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/createInventoryItemCheckSetAtpQoh?inventoryItemId=${args.inventoryItemId}quantityOnHandTotal=${args.quantityOnHandTotal}availableToPromiseTotal=${args.availableToPromiseTotal}`, null, req);
  }
};
export {createInventoryItemCheckSetAtpQoh};


const createInventoryItemDetail = {
  type: ResopnseType,
  description: 'mutation for ofbiz createInventoryItemDetail method',
  args:{inventoryItemId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},workEffortId: {type: GraphQLString},orderId: {type: GraphQLString},description: {type: GraphQLString},maintHistSeqId: {type: GraphQLString},shipmentItemSeqId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},accountingQuantityDiff: {type: GraphQLFloat},physicalInventoryId: {type: GraphQLString},availableToPromiseDiff: {type: GraphQLFloat},shipmentId: {type: GraphQLString},itemIssuanceId: {type: GraphQLString},unitCost: {type: GraphQLFloat},returnId: {type: GraphQLString},returnItemSeqId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},reasonEnumId: {type: GraphQLString},receiptId: {type: GraphQLString},quantityOnHandDiff: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/createInventoryItemDetail?inventoryItemId=${args.inventoryItemId}orderItemSeqId=${args.orderItemSeqId}workEffortId=${args.workEffortId}orderId=${args.orderId}description=${args.description}maintHistSeqId=${args.maintHistSeqId}shipmentItemSeqId=${args.shipmentItemSeqId}shipGroupSeqId=${args.shipGroupSeqId}accountingQuantityDiff=${args.accountingQuantityDiff}physicalInventoryId=${args.physicalInventoryId}availableToPromiseDiff=${args.availableToPromiseDiff}shipmentId=${args.shipmentId}itemIssuanceId=${args.itemIssuanceId}unitCost=${args.unitCost}returnId=${args.returnId}returnItemSeqId=${args.returnItemSeqId}fixedAssetId=${args.fixedAssetId}reasonEnumId=${args.reasonEnumId}receiptId=${args.receiptId}quantityOnHandDiff=${args.quantityOnHandDiff}`, null, req);
  }
};
export {createInventoryItemDetail};


const createInventoryItemLabel = {
  type: ResopnseType,
  description: 'mutation for ofbiz createInventoryItemLabel method',
  args:{inventoryItemLabelId: {type: GraphQLString},inventoryItemLabelTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/createInventoryItemLabel?inventoryItemLabelId=${args.inventoryItemLabelId}inventoryItemLabelTypeId=${args.inventoryItemLabelTypeId}description=${args.description}`, null, req);
  }
};
export {createInventoryItemLabel};


const createInventoryItemLabelAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz createInventoryItemLabelAppl method',
  args:{inventoryItemId: {type: GraphQLString},inventoryItemLabelId: {type: GraphQLString},sequenceNum: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/createInventoryItemLabelAppl?inventoryItemId=${args.inventoryItemId}inventoryItemLabelId=${args.inventoryItemLabelId}sequenceNum=${args.sequenceNum}`, null, req);
  }
};
export {createInventoryItemLabelAppl};


const createInventoryItemLabelType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createInventoryItemLabelType method',
  args:{inventoryItemLabelTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/createInventoryItemLabelType?inventoryItemLabelTypeId=${args.inventoryItemLabelTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {createInventoryItemLabelType};


const createInventoryItemStatus = {
  type: ResopnseType,
  description: 'mutation for ofbiz createInventoryItemStatus method',
  args:{inventoryItemId: {type: GraphQLString},statusId: {type: GraphQLString},ownerPartyId: {type: GraphQLString},productId: {type: GraphQLString},statusDatetime: {type: GraphQLString},changeByUserLoginId: {type: GraphQLString},statusEndDatetime: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/createInventoryItemStatus?inventoryItemId=${args.inventoryItemId}statusId=${args.statusId}ownerPartyId=${args.ownerPartyId}productId=${args.productId}statusDatetime=${args.statusDatetime}changeByUserLoginId=${args.changeByUserLoginId}statusEndDatetime=${args.statusEndDatetime}`, null, req);
  }
};
export {createInventoryItemStatus};


const createInventoryItemType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createInventoryItemType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString},inventoryItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/createInventoryItemType?parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}inventoryItemTypeId=${args.inventoryItemTypeId}`, null, req);
  }
};
export {createInventoryItemType};


const createInventoryItemVariance = {
  type: ResopnseType,
  description: 'mutation for ofbiz createInventoryItemVariance method',
  args:{inventoryItemId: {type: GraphQLString},physicalInventoryId: {type: GraphQLString},varianceReasonId: {type: GraphQLString},comments: {type: GraphQLString},quantityOnHandVar: {type: GraphQLFloat},availableToPromiseVar: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/createInventoryItemVariance?inventoryItemId=${args.inventoryItemId}physicalInventoryId=${args.physicalInventoryId}varianceReasonId=${args.varianceReasonId}comments=${args.comments}quantityOnHandVar=${args.quantityOnHandVar}availableToPromiseVar=${args.availableToPromiseVar}`, null, req);
  }
};
export {createInventoryItemVariance};


const createInventoryTransfer = {
  type: ResopnseType,
  description: 'mutation for ofbiz createInventoryTransfer method',
  args:{inventoryItemId: {type: GraphQLString},statusId: {type: GraphQLString},xferQty: {type: GraphQLFloat},containerIdTo: {type: GraphQLString},facilityId: {type: GraphQLString},comments: {type: GraphQLString},sendDate: {type: GraphQLString},itemIssuanceId: {type: GraphQLString},receiveDate: {type: GraphQLString},facilityIdTo: {type: GraphQLString},containerId: {type: GraphQLString},locationSeqIdTo: {type: GraphQLString},locationSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/createInventoryTransfer?inventoryItemId=${args.inventoryItemId}statusId=${args.statusId}xferQty=${args.xferQty}containerIdTo=${args.containerIdTo}facilityId=${args.facilityId}comments=${args.comments}sendDate=${args.sendDate}itemIssuanceId=${args.itemIssuanceId}receiveDate=${args.receiveDate}facilityIdTo=${args.facilityIdTo}containerId=${args.containerId}locationSeqIdTo=${args.locationSeqIdTo}locationSeqId=${args.locationSeqId}`, null, req);
  }
};
export {createInventoryTransfer};


const createInventoryTransfersForProduct = {
  type: ResopnseType,
  description: 'mutation for ofbiz createInventoryTransfersForProduct method',
  args:{facilityId: {type: GraphQLString},quantity: {type: GraphQLFloat},productId: {type: GraphQLString},facilityIdTo: {type: GraphQLString},statusId: {type: GraphQLString},sendDate: {type: GraphQLString},reserveOrderEnumId: {type: GraphQLString},containerId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/createInventoryTransfersForProduct?facilityId=${args.facilityId}quantity=${args.quantity}productId=${args.productId}facilityIdTo=${args.facilityIdTo}statusId=${args.statusId}sendDate=${args.sendDate}reserveOrderEnumId=${args.reserveOrderEnumId}containerId=${args.containerId}`, null, req);
  }
};
export {createInventoryTransfersForProduct};


const createPhysicalInventory = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPhysicalInventory method',
  args:{physicalInventoryDate: {type: GraphQLString},generalComments: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/createPhysicalInventory?physicalInventoryDate=${args.physicalInventoryDate}generalComments=${args.generalComments}partyId=${args.partyId}`, null, req);
  }
};
export {createPhysicalInventory};


const createPhysicalInventoryAndVariance = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPhysicalInventoryAndVariance method',
  args:{inventoryItemId: {type: GraphQLString},varianceReasonId: {type: GraphQLString},physicalInventoryDate: {type: GraphQLString},comments: {type: GraphQLString},quantityOnHandVar: {type: GraphQLFloat},generalComments: {type: GraphQLString},partyId: {type: GraphQLString},availableToPromiseVar: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/createPhysicalInventoryAndVariance?inventoryItemId=${args.inventoryItemId}varianceReasonId=${args.varianceReasonId}physicalInventoryDate=${args.physicalInventoryDate}comments=${args.comments}quantityOnHandVar=${args.quantityOnHandVar}generalComments=${args.generalComments}partyId=${args.partyId}availableToPromiseVar=${args.availableToPromiseVar}`, null, req);
  }
};
export {createPhysicalInventoryAndVariance};


const createProductFacility = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductFacility method',
  args:{facilityId: {type: GraphQLString},productId: {type: GraphQLString},lastInventoryCount: {type: GraphQLFloat},minimumStock: {type: GraphQLFloat},reorderQuantity: {type: GraphQLFloat},daysToShip: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/createProductFacility?facilityId=${args.facilityId}productId=${args.productId}lastInventoryCount=${args.lastInventoryCount}minimumStock=${args.minimumStock}reorderQuantity=${args.reorderQuantity}daysToShip=${args.daysToShip}`, null, req);
  }
};
export {createProductFacility};


const createProductFacilityLocation = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductFacilityLocation method',
  args:{facilityId: {type: GraphQLString},productId: {type: GraphQLString},locationSeqId: {type: GraphQLString},moveQuantity: {type: GraphQLFloat},minimumStock: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/createProductFacilityLocation?facilityId=${args.facilityId}productId=${args.productId}locationSeqId=${args.locationSeqId}moveQuantity=${args.moveQuantity}minimumStock=${args.minimumStock}`, null, req);
  }
};
export {createProductFacilityLocation};


const createUpdateFacilityGeoPoint = {
  type: ResopnseType,
  description: 'mutation for ofbiz createUpdateFacilityGeoPoint method',
  args:{dataSourceId: {type: GraphQLString},facilityId: {type: GraphQLString},latitude: {type: GraphQLString},longitude: {type: GraphQLString},elevation: {type: GraphQLFloat},elevationUomId: {type: GraphQLString},geoPointTypeEnumId: {type: GraphQLString},description: {type: GraphQLString},information: {type: GraphQLString},geoPointId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/createUpdateFacilityGeoPoint?dataSourceId=${args.dataSourceId}facilityId=${args.facilityId}latitude=${args.latitude}longitude=${args.longitude}elevation=${args.elevation}elevationUomId=${args.elevationUomId}geoPointTypeEnumId=${args.geoPointTypeEnumId}description=${args.description}information=${args.information}geoPointId=${args.geoPointId}`, null, req);
  }
};
export {createUpdateFacilityGeoPoint};


const deleteContainer = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteContainer method',
  args:{containerId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/deleteContainer?containerId=${args.containerId}`, null, req);
  }
};
export {deleteContainer};


const deleteContainerType = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteContainerType method',
  args:{containerTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/deleteContainerType?containerTypeId=${args.containerTypeId}`, null, req);
  }
};
export {deleteContainerType};


const deleteFacility = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteFacility method',
  args:{facilityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/deleteFacility?facilityId=${args.facilityId}`, null, req);
  }
};
export {deleteFacility};


const deleteFacilityAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteFacilityAttribute method',
  args:{facilityId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/deleteFacilityAttribute?facilityId=${args.facilityId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteFacilityAttribute};


const deleteFacilityCarrierShipment = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteFacilityCarrierShipment method',
  args:{roleTypeId: {type: GraphQLString},facilityId: {type: GraphQLString},partyId: {type: GraphQLString},shipmentMethodTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/deleteFacilityCarrierShipment?roleTypeId=${args.roleTypeId}facilityId=${args.facilityId}partyId=${args.partyId}shipmentMethodTypeId=${args.shipmentMethodTypeId}`, null, req);
  }
};
export {deleteFacilityCarrierShipment};


const deleteFacilityContactMech = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteFacilityContactMech method',
  args:{facilityId: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/deleteFacilityContactMech?facilityId=${args.facilityId}contactMechId=${args.contactMechId}`, null, req);
  }
};
export {deleteFacilityContactMech};


const deleteFacilityContactMechPurpose = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteFacilityContactMechPurpose method',
  args:{fromDate: {type: GraphQLString},facilityId: {type: GraphQLString},contactMechPurposeTypeId: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/deleteFacilityContactMechPurpose?fromDate=${args.fromDate}facilityId=${args.facilityId}contactMechPurposeTypeId=${args.contactMechPurposeTypeId}contactMechId=${args.contactMechId}`, null, req);
  }
};
export {deleteFacilityContactMechPurpose};


const deleteFacilityContent = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteFacilityContent method',
  args:{fromDate: {type: GraphQLString},facilityId: {type: GraphQLString},contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/deleteFacilityContent?fromDate=${args.fromDate}facilityId=${args.facilityId}contentId=${args.contentId}`, null, req);
  }
};
export {deleteFacilityContent};


const deleteFacilityGroup = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteFacilityGroup method',
  args:{facilityGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/deleteFacilityGroup?facilityGroupId=${args.facilityGroupId}`, null, req);
  }
};
export {deleteFacilityGroup};


const deleteFacilityGroupType = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteFacilityGroupType method',
  args:{facilityGroupTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/deleteFacilityGroupType?facilityGroupTypeId=${args.facilityGroupTypeId}`, null, req);
  }
};
export {deleteFacilityGroupType};


const deleteFacilityLocation = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteFacilityLocation method',
  args:{facilityId: {type: GraphQLString},locationSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/deleteFacilityLocation?facilityId=${args.facilityId}locationSeqId=${args.locationSeqId}`, null, req);
  }
};
export {deleteFacilityLocation};


const deleteFacilityType = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteFacilityType method',
  args:{facilityTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/deleteFacilityType?facilityTypeId=${args.facilityTypeId}`, null, req);
  }
};
export {deleteFacilityType};


const deleteInventoryItemLabel = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteInventoryItemLabel method',
  args:{inventoryItemLabelId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/deleteInventoryItemLabel?inventoryItemLabelId=${args.inventoryItemLabelId}`, null, req);
  }
};
export {deleteInventoryItemLabel};


const deleteInventoryItemLabelAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteInventoryItemLabelAppl method',
  args:{inventoryItemId: {type: GraphQLString},inventoryItemLabelTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/deleteInventoryItemLabelAppl?inventoryItemId=${args.inventoryItemId}inventoryItemLabelTypeId=${args.inventoryItemLabelTypeId}`, null, req);
  }
};
export {deleteInventoryItemLabelAppl};


const deleteInventoryItemLabelType = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteInventoryItemLabelType method',
  args:{inventoryItemLabelTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/deleteInventoryItemLabelType?inventoryItemLabelTypeId=${args.inventoryItemLabelTypeId}`, null, req);
  }
};
export {deleteInventoryItemLabelType};


const deleteInventoryItemType = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteInventoryItemType method',
  args:{inventoryItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/deleteInventoryItemType?inventoryItemTypeId=${args.inventoryItemTypeId}`, null, req);
  }
};
export {deleteInventoryItemType};


const deleteProductFacility = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductFacility method',
  args:{facilityId: {type: GraphQLString},productId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/deleteProductFacility?facilityId=${args.facilityId}productId=${args.productId}`, null, req);
  }
};
export {deleteProductFacility};


const deleteProductFacilityLocation = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductFacilityLocation method',
  args:{facilityId: {type: GraphQLString},productId: {type: GraphQLString},locationSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/deleteProductFacilityLocation?facilityId=${args.facilityId}productId=${args.productId}locationSeqId=${args.locationSeqId}`, null, req);
  }
};
export {deleteProductFacilityLocation};


const expireFacilityLocationGeoPoint = {
  type: ResopnseType,
  description: 'mutation for ofbiz expireFacilityLocationGeoPoint method',
  args:{fromDate: {type: GraphQLString},facilityId: {type: GraphQLString},geoPointId: {type: GraphQLString},locationSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/expireFacilityLocationGeoPoint?fromDate=${args.fromDate}facilityId=${args.facilityId}geoPointId=${args.geoPointId}locationSeqId=${args.locationSeqId}`, null, req);
  }
};
export {expireFacilityLocationGeoPoint};


const facilityGenericPermission = {
  type: ResopnseType,
  description: 'mutation for ofbiz facilityGenericPermission method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/facilityGenericPermission?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {facilityGenericPermission};


const findProductInventorylocations = {
  type: ResopnseType,
  description: 'mutation for ofbiz findProductInventorylocations method',
  args:{facilityId: {type: GraphQLString},productId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/findProductInventorylocations?facilityId=${args.facilityId}productId=${args.productId}`, null, req);
  }
};
export {findProductInventorylocations};


const findStockMovesNeeded = {
  type: ResopnseType,
  description: 'mutation for ofbiz findStockMovesNeeded method',
  args:{facilityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/findStockMovesNeeded?facilityId=${args.facilityId}`, null, req);
  }
};
export {findStockMovesNeeded};


const findStockMovesRecommended = {
  type: ResopnseType,
  description: 'mutation for ofbiz findStockMovesRecommended method',
  args:{facilityId: {type: GraphQLString},stockMoveHandled: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/findStockMovesRecommended?facilityId=${args.facilityId}stockMoveHandled=${args.stockMoveHandled}`, null, req);
  }
};
export {findStockMovesRecommended};


const getInventoryAvailableByContainer = {
  type: ResopnseType,
  description: 'mutation for ofbiz getInventoryAvailableByContainer method',
  args:{productId: {type: GraphQLString},containerId: {type: GraphQLString},statusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/getInventoryAvailableByContainer?productId=${args.productId}containerId=${args.containerId}statusId=${args.statusId}`, null, req);
  }
};
export {getInventoryAvailableByContainer};


const getInventoryAvailableByFacility = {
  type: ResopnseType,
  description: 'mutation for ofbiz getInventoryAvailableByFacility method',
  args:{facilityId: {type: GraphQLString},productId: {type: GraphQLString},statusId: {type: GraphQLString},useCache: {type: GraphQLBoolean},lotId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/getInventoryAvailableByFacility?facilityId=${args.facilityId}productId=${args.productId}statusId=${args.statusId}useCache=${args.useCache}lotId=${args.lotId}`, null, req);
  }
};
export {getInventoryAvailableByFacility};


const getInventoryAvailableByItem = {
  type: ResopnseType,
  description: 'mutation for ofbiz getInventoryAvailableByItem method',
  args:{inventoryItemId: {type: GraphQLString},useCache: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/getInventoryAvailableByItem?inventoryItemId=${args.inventoryItemId}useCache=${args.useCache}`, null, req);
  }
};
export {getInventoryAvailableByItem};


const getInventoryAvailableByLocation = {
  type: ResopnseType,
  description: 'mutation for ofbiz getInventoryAvailableByLocation method',
  args:{facilityId: {type: GraphQLString},productId: {type: GraphQLString},locationSeqId: {type: GraphQLString},statusId: {type: GraphQLString},useCache: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/getInventoryAvailableByLocation?facilityId=${args.facilityId}productId=${args.productId}locationSeqId=${args.locationSeqId}statusId=${args.statusId}useCache=${args.useCache}`, null, req);
  }
};
export {getInventoryAvailableByLocation};


const getMktgPackagesAvailable = {
  type: ResopnseType,
  description: 'mutation for ofbiz getMktgPackagesAvailable method',
  args:{productId: {type: GraphQLString},facilityId: {type: GraphQLString},statusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/getMktgPackagesAvailable?productId=${args.productId}facilityId=${args.facilityId}statusId=${args.statusId}`, null, req);
  }
};
export {getMktgPackagesAvailable};


const getProductInventoryAndFacilitySummary = {
  type: ResopnseType,
  description: 'mutation for ofbiz getProductInventoryAndFacilitySummary method',
  args:{facilityId: {type: GraphQLString},productId: {type: GraphQLString},checkTime: {type: GraphQLString},statusId: {type: GraphQLString},minimumStock: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/getProductInventoryAndFacilitySummary?facilityId=${args.facilityId}productId=${args.productId}checkTime=${args.checkTime}statusId=${args.statusId}minimumStock=${args.minimumStock}`, null, req);
  }
};
export {getProductInventoryAndFacilitySummary};


const getProductInventoryAvailable = {
  type: ResopnseType,
  description: 'mutation for ofbiz getProductInventoryAvailable method',
  args:{productId: {type: GraphQLString},statusId: {type: GraphQLString},useCache: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/getProductInventoryAvailable?productId=${args.productId}statusId=${args.statusId}useCache=${args.useCache}`, null, req);
  }
};
export {getProductInventoryAvailable};


const getProductInventoryAvailableBySupplier = {
  type: ResopnseType,
  description: 'mutation for ofbiz getProductInventoryAvailableBySupplier method',
  args:{productId: {type: GraphQLString},partyId: {type: GraphQLString},statusId: {type: GraphQLString},useCache: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/getProductInventoryAvailableBySupplier?productId=${args.productId}partyId=${args.partyId}statusId=${args.statusId}useCache=${args.useCache}`, null, req);
  }
};
export {getProductInventoryAvailableBySupplier};


const getProductInventoryAvailableFromAssocProducts = {
  type: ResopnseType,
  description: 'mutation for ofbiz getProductInventoryAvailableFromAssocProducts method',
  args:{facilityId: {type: GraphQLString},statusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/getProductInventoryAvailableFromAssocProducts?assocProducts=${args.assocProducts}facilityId=${args.facilityId}statusId=${args.statusId}`, null, req);
  }
};
export {getProductInventoryAvailableFromAssocProducts};


const getProductInventorySummaryForItems = {
  type: ResopnseType,
  description: 'mutation for ofbiz getProductInventorySummaryForItems method',
  args:{facilityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/getProductInventorySummaryForItems?orderItems=${args.orderItems}facilityId=${args.facilityId}`, null, req);
  }
};
export {getProductInventorySummaryForItems};


const interfaceInventoryTransfer = {
  type: ResopnseType,
  description: 'mutation for ofbiz interfaceInventoryTransfer method',
  args:{inventoryItemId: {type: GraphQLString},statusId: {type: GraphQLString},containerIdTo: {type: GraphQLString},facilityId: {type: GraphQLString},comments: {type: GraphQLString},sendDate: {type: GraphQLString},itemIssuanceId: {type: GraphQLString},receiveDate: {type: GraphQLString},facilityIdTo: {type: GraphQLString},containerId: {type: GraphQLString},locationSeqIdTo: {type: GraphQLString},locationSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/interfaceInventoryTransfer?inventoryItemId=${args.inventoryItemId}statusId=${args.statusId}containerIdTo=${args.containerIdTo}facilityId=${args.facilityId}comments=${args.comments}sendDate=${args.sendDate}itemIssuanceId=${args.itemIssuanceId}receiveDate=${args.receiveDate}facilityIdTo=${args.facilityIdTo}containerId=${args.containerId}locationSeqIdTo=${args.locationSeqIdTo}locationSeqId=${args.locationSeqId}`, null, req);
  }
};
export {interfaceInventoryTransfer};


const inventoryItemCheckSetDefaultValues = {
  type: ResopnseType,
  description: 'mutation for ofbiz inventoryItemCheckSetDefaultValues method',
  args:{inventoryItemId: {type: GraphQLString},inventoryItem: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/inventoryItemCheckSetDefaultValues?inventoryItemId=${args.inventoryItemId}inventoryItem=${args.inventoryItem}`, null, req);
  }
};
export {inventoryItemCheckSetDefaultValues};


const issueImmediatelyFulfilledOrder = {
  type: ResopnseType,
  description: 'mutation for ofbiz issueImmediatelyFulfilledOrder method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/issueImmediatelyFulfilledOrder?orderId=${args.orderId}`, null, req);
  }
};
export {issueImmediatelyFulfilledOrder};


const issueImmediatelyFulfilledOrderItem = {
  type: ResopnseType,
  description: 'mutation for ofbiz issueImmediatelyFulfilledOrderItem method',
  args:{orderItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString},orderItem: {type: new GraphQLList(KeyValueInputType)},orderHeader: {type: new GraphQLList(KeyValueInputType)},productStore: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/issueImmediatelyFulfilledOrderItem?orderItemSeqId=${args.orderItemSeqId}orderId=${args.orderId}orderItem=${args.orderItem}orderHeader=${args.orderHeader}productStore=${args.productStore}`, null, req);
  }
};
export {issueImmediatelyFulfilledOrderItem};


const prepareInventoryTransfer = {
  type: ResopnseType,
  description: 'mutation for ofbiz prepareInventoryTransfer method',
  args:{inventoryItemId: {type: GraphQLString},xferQty: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/prepareInventoryTransfer?inventoryItemId=${args.inventoryItemId}xferQty=${args.xferQty}`, null, req);
  }
};
export {prepareInventoryTransfer};


const processPhysicalStockMove = {
  type: ResopnseType,
  description: 'mutation for ofbiz processPhysicalStockMove method',
  args:{quantityMoved: {type: GraphQLFloat},facilityId: {type: GraphQLString},productId: {type: GraphQLString},targetLocationSeqId: {type: GraphQLString},locationSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/processPhysicalStockMove?quantityMoved=${args.quantityMoved}facilityId=${args.facilityId}productId=${args.productId}targetLocationSeqId=${args.targetLocationSeqId}locationSeqId=${args.locationSeqId}warningMessageList=${args.warningMessageList}`, null, req);
  }
};
export {processPhysicalStockMove};


const reassignInventoryReservations = {
  type: ResopnseType,
  description: 'mutation for ofbiz reassignInventoryReservations method',
  args:{facilityId: {type: GraphQLString},productId: {type: GraphQLString},fromDate: {type: GraphQLString},priority: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/reassignInventoryReservations?facilityId=${args.facilityId}productId=${args.productId}fromDate=${args.fromDate}priority=${args.priority}`, null, req);
  }
};
export {reassignInventoryReservations};


const removeContactMechFromFacility = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeContactMechFromFacility method',
  args:{fromDate: {type: GraphQLString},facilityId: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/removeContactMechFromFacility?fromDate=${args.fromDate}facilityId=${args.facilityId}contactMechId=${args.contactMechId}`, null, req);
  }
};
export {removeContactMechFromFacility};


const removeFacilityFromGroup = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeFacilityFromGroup method',
  args:{fromDate: {type: GraphQLString},facilityId: {type: GraphQLString},facilityGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/removeFacilityFromGroup?fromDate=${args.fromDate}facilityId=${args.facilityId}facilityGroupId=${args.facilityGroupId}`, null, req);
  }
};
export {removeFacilityFromGroup};


const removeFacilityGroupFromGroup = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeFacilityGroupFromGroup method',
  args:{fromDate: {type: GraphQLString},facilityGroupId: {type: GraphQLString},parentFacilityGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/removeFacilityGroupFromGroup?fromDate=${args.fromDate}facilityGroupId=${args.facilityGroupId}parentFacilityGroupId=${args.parentFacilityGroupId}`, null, req);
  }
};
export {removeFacilityGroupFromGroup};


const removeFacilityTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeFacilityTypeAttr method',
  args:{facilityTypeId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/removeFacilityTypeAttr?facilityTypeId=${args.facilityTypeId}attrName=${args.attrName}`, null, req);
  }
};
export {removeFacilityTypeAttr};


const removePartyFromFacility = {
  type: ResopnseType,
  description: 'mutation for ofbiz removePartyFromFacility method',
  args:{fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},facilityId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/removePartyFromFacility?fromDate=${args.fromDate}roleTypeId=${args.roleTypeId}facilityId=${args.facilityId}partyId=${args.partyId}`, null, req);
  }
};
export {removePartyFromFacility};


const removePartyFromFacilityGroup = {
  type: ResopnseType,
  description: 'mutation for ofbiz removePartyFromFacilityGroup method',
  args:{roleTypeId: {type: GraphQLString},facilityGroupId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/removePartyFromFacilityGroup?roleTypeId=${args.roleTypeId}facilityGroupId=${args.facilityGroupId}partyId=${args.partyId}`, null, req);
  }
};
export {removePartyFromFacilityGroup};


const reserveAnInventoryItem = {
  type: ResopnseType,
  description: 'mutation for ofbiz reserveAnInventoryItem method',
  args:{inventoryItemId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},quantity: {type: GraphQLFloat},productId: {type: GraphQLString},orderId: {type: GraphQLString},promisedDatetime: {type: GraphQLString},requireInventory: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},serialNumber: {type: GraphQLString},reservedDatetime: {type: GraphQLString},priority: {type: GraphQLString},sequenceId: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/reserveAnInventoryItem?inventoryItemId=${args.inventoryItemId}orderItemSeqId=${args.orderItemSeqId}quantity=${args.quantity}productId=${args.productId}orderId=${args.orderId}promisedDatetime=${args.promisedDatetime}requireInventory=${args.requireInventory}shipGroupSeqId=${args.shipGroupSeqId}serialNumber=${args.serialNumber}reservedDatetime=${args.reservedDatetime}priority=${args.priority}sequenceId=${args.sequenceId}`, null, req);
  }
};
export {reserveAnInventoryItem};


const reserveOrderItemInventory = {
  type: ResopnseType,
  description: 'mutation for ofbiz reserveOrderItemInventory method',
  args:{orderItemSeqId: {type: GraphQLString},inventoryItemId: {type: GraphQLString},quantity: {type: GraphQLFloat},orderId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},promisedDatetime: {type: GraphQLString},quantityNotAvailable: {type: GraphQLFloat},reserveOrderEnumId: {type: GraphQLString},reservedDatetime: {type: GraphQLString},priority: {type: GraphQLString},sequenceId: {type: GraphQLInt},oldPickStartDate: {type: GraphQLString},currentPromisedDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/reserveOrderItemInventory?orderItemSeqId=${args.orderItemSeqId}inventoryItemId=${args.inventoryItemId}quantity=${args.quantity}orderId=${args.orderId}shipGroupSeqId=${args.shipGroupSeqId}promisedDatetime=${args.promisedDatetime}quantityNotAvailable=${args.quantityNotAvailable}reserveOrderEnumId=${args.reserveOrderEnumId}reservedDatetime=${args.reservedDatetime}priority=${args.priority}sequenceId=${args.sequenceId}oldPickStartDate=${args.oldPickStartDate}currentPromisedDate=${args.currentPromisedDate}`, null, req);
  }
};
export {reserveOrderItemInventory};


const reserveProductInventory = {
  type: ResopnseType,
  description: 'mutation for ofbiz reserveProductInventory method',
  args:{orderItemSeqId: {type: GraphQLString},quantity: {type: GraphQLFloat},productId: {type: GraphQLString},orderId: {type: GraphQLString},requireInventory: {type: GraphQLString},reserveOrderEnumId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},lotId: {type: GraphQLString},reservedDatetime: {type: GraphQLString},priority: {type: GraphQLString},sequenceId: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/reserveProductInventory?orderItemSeqId=${args.orderItemSeqId}quantity=${args.quantity}productId=${args.productId}orderId=${args.orderId}requireInventory=${args.requireInventory}reserveOrderEnumId=${args.reserveOrderEnumId}shipGroupSeqId=${args.shipGroupSeqId}lotId=${args.lotId}reservedDatetime=${args.reservedDatetime}priority=${args.priority}sequenceId=${args.sequenceId}`, null, req);
  }
};
export {reserveProductInventory};


const reserveProductInventoryByContainer = {
  type: ResopnseType,
  description: 'mutation for ofbiz reserveProductInventoryByContainer method',
  args:{orderItemSeqId: {type: GraphQLString},quantity: {type: GraphQLFloat},productId: {type: GraphQLString},orderId: {type: GraphQLString},requireInventory: {type: GraphQLString},containerId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},reservedDatetime: {type: GraphQLString},reserveOrderEnumId: {type: GraphQLString},sequenceId: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/reserveProductInventoryByContainer?orderItemSeqId=${args.orderItemSeqId}quantity=${args.quantity}productId=${args.productId}orderId=${args.orderId}requireInventory=${args.requireInventory}containerId=${args.containerId}shipGroupSeqId=${args.shipGroupSeqId}reservedDatetime=${args.reservedDatetime}reserveOrderEnumId=${args.reserveOrderEnumId}sequenceId=${args.sequenceId}`, null, req);
  }
};
export {reserveProductInventoryByContainer};


const reserveProductInventoryByFacility = {
  type: ResopnseType,
  description: 'mutation for ofbiz reserveProductInventoryByFacility method',
  args:{orderItemSeqId: {type: GraphQLString},facilityId: {type: GraphQLString},quantity: {type: GraphQLFloat},productId: {type: GraphQLString},orderId: {type: GraphQLString},requireInventory: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},lotId: {type: GraphQLString},reservedDatetime: {type: GraphQLString},reserveOrderEnumId: {type: GraphQLString},priority: {type: GraphQLString},sequenceId: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/reserveProductInventoryByFacility?orderItemSeqId=${args.orderItemSeqId}facilityId=${args.facilityId}quantity=${args.quantity}productId=${args.productId}orderId=${args.orderId}requireInventory=${args.requireInventory}shipGroupSeqId=${args.shipGroupSeqId}lotId=${args.lotId}reservedDatetime=${args.reservedDatetime}reserveOrderEnumId=${args.reserveOrderEnumId}priority=${args.priority}sequenceId=${args.sequenceId}`, null, req);
  }
};
export {reserveProductInventoryByFacility};


const setLastInventoryCount = {
  type: ResopnseType,
  description: 'mutation for ofbiz setLastInventoryCount method',
  args:{inventoryItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/setLastInventoryCount?inventoryItemId=${args.inventoryItemId}`, null, req);
  }
};
export {setLastInventoryCount};


const setOrderReservationPriority = {
  type: ResopnseType,
  description: 'mutation for ofbiz setOrderReservationPriority method',
  args:{orderId: {type: GraphQLString},priority: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/setOrderReservationPriority?orderId=${args.orderId}priority=${args.priority}`, null, req);
  }
};
export {setOrderReservationPriority};


const updateContainer = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateContainer method',
  args:{containerId: {type: GraphQLString},facilityId: {type: GraphQLString},containerTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/updateContainer?containerId=${args.containerId}facilityId=${args.facilityId}containerTypeId=${args.containerTypeId}description=${args.description}`, null, req);
  }
};
export {updateContainer};


const updateContainerType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateContainerType method',
  args:{containerTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/updateContainerType?containerTypeId=${args.containerTypeId}description=${args.description}`, null, req);
  }
};
export {updateContainerType};


const updateFacility = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFacility method',
  args:{facilityId: {type: GraphQLString},defaultInventoryItemTypeId: {type: GraphQLString},parentFacilityId: {type: GraphQLString},description: {type: GraphQLString},defaultWeightUomId: {type: GraphQLString},primaryFacilityGroupId: {type: GraphQLString},openedDate: {type: GraphQLString},ownerPartyId: {type: GraphQLString},facilitySize: {type: GraphQLFloat},facilitySizeUomId: {type: GraphQLString},closedDate: {type: GraphQLString},facilityTypeId: {type: GraphQLString},defaultDaysToShip: {type: GraphQLInt},defaultDimensionUomId: {type: GraphQLString},facilityName: {type: GraphQLString},productStoreId: {type: GraphQLString},geoPointId: {type: GraphQLString},oldSquareFootage: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/updateFacility?facilityId=${args.facilityId}defaultInventoryItemTypeId=${args.defaultInventoryItemTypeId}parentFacilityId=${args.parentFacilityId}description=${args.description}defaultWeightUomId=${args.defaultWeightUomId}primaryFacilityGroupId=${args.primaryFacilityGroupId}openedDate=${args.openedDate}ownerPartyId=${args.ownerPartyId}facilitySize=${args.facilitySize}facilitySizeUomId=${args.facilitySizeUomId}closedDate=${args.closedDate}facilityTypeId=${args.facilityTypeId}defaultDaysToShip=${args.defaultDaysToShip}defaultDimensionUomId=${args.defaultDimensionUomId}facilityName=${args.facilityName}productStoreId=${args.productStoreId}geoPointId=${args.geoPointId}oldSquareFootage=${args.oldSquareFootage}`, null, req);
  }
};
export {updateFacility};


const updateFacilityAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFacilityAttribute method',
  args:{facilityId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/updateFacilityAttribute?facilityId=${args.facilityId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {updateFacilityAttribute};


const updateFacilityContactMech = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFacilityContactMech method',
  args:{contactMechTypeId: {type: GraphQLString},fromDate: {type: GraphQLString},extension: {type: GraphQLString},facilityId: {type: GraphQLString},comments: {type: GraphQLString},infoString: {type: GraphQLString},newContactMechId: {type: GraphQLString},contactMechId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/updateFacilityContactMech?contactMechTypeId=${args.contactMechTypeId}fromDate=${args.fromDate}extension=${args.extension}facilityId=${args.facilityId}comments=${args.comments}infoString=${args.infoString}newContactMechId=${args.newContactMechId}contactMechId=${args.contactMechId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateFacilityContactMech};


const updateFacilityEmailAddress = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFacilityEmailAddress method',
  args:{emailAddress: {type: GraphQLString},fromDate: {type: GraphQLString},extension: {type: GraphQLString},facilityId: {type: GraphQLString},comments: {type: GraphQLString},contactMechId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/updateFacilityEmailAddress?emailAddress=${args.emailAddress}fromDate=${args.fromDate}extension=${args.extension}facilityId=${args.facilityId}comments=${args.comments}contactMechId=${args.contactMechId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateFacilityEmailAddress};


const updateFacilityGroup = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFacilityGroup method',
  args:{facilityGroupId: {type: GraphQLString},primaryParentGroupId: {type: GraphQLString},facilityGroupTypeId: {type: GraphQLString},description: {type: GraphQLString},facilityGroupName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/updateFacilityGroup?facilityGroupId=${args.facilityGroupId}primaryParentGroupId=${args.primaryParentGroupId}facilityGroupTypeId=${args.facilityGroupTypeId}description=${args.description}facilityGroupName=${args.facilityGroupName}`, null, req);
  }
};
export {updateFacilityGroup};


const updateFacilityGroupToGroup = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFacilityGroupToGroup method',
  args:{fromDate: {type: GraphQLString},facilityGroupId: {type: GraphQLString},parentFacilityGroupId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/updateFacilityGroupToGroup?fromDate=${args.fromDate}facilityGroupId=${args.facilityGroupId}parentFacilityGroupId=${args.parentFacilityGroupId}sequenceNum=${args.sequenceNum}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateFacilityGroupToGroup};


const updateFacilityGroupType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFacilityGroupType method',
  args:{facilityGroupTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/updateFacilityGroupType?facilityGroupTypeId=${args.facilityGroupTypeId}description=${args.description}`, null, req);
  }
};
export {updateFacilityGroupType};


const updateFacilityLocation = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFacilityLocation method',
  args:{facilityId: {type: GraphQLString},locationSeqId: {type: GraphQLString},areaId: {type: GraphQLString},positionId: {type: GraphQLString},levelId: {type: GraphQLString},sectionId: {type: GraphQLString},geoPointId: {type: GraphQLString},locationTypeEnumId: {type: GraphQLString},aisleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/updateFacilityLocation?facilityId=${args.facilityId}locationSeqId=${args.locationSeqId}areaId=${args.areaId}positionId=${args.positionId}levelId=${args.levelId}sectionId=${args.sectionId}geoPointId=${args.geoPointId}locationTypeEnumId=${args.locationTypeEnumId}aisleId=${args.aisleId}`, null, req);
  }
};
export {updateFacilityLocation};


const updateFacilityPostalAddress = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFacilityPostalAddress method',
  args:{countryGeoId: {type: GraphQLString},houseNumberExt: {type: GraphQLString},extension: {type: GraphQLString},facilityId: {type: GraphQLString},comments: {type: GraphQLString},address2: {type: GraphQLString},city: {type: GraphQLString},address1: {type: GraphQLString},postalCode: {type: GraphQLString},postalCodeGeoId: {type: GraphQLString},houseNumber: {type: GraphQLInt},postalCodeExt: {type: GraphQLString},contactMechId: {type: GraphQLString},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},attnName: {type: GraphQLString},directions: {type: GraphQLString},countyGeoId: {type: GraphQLString},toName: {type: GraphQLString},cityGeoId: {type: GraphQLString},municipalityGeoId: {type: GraphQLString},stateProvinceGeoId: {type: GraphQLString},geoPointId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/updateFacilityPostalAddress?countryGeoId=${args.countryGeoId}houseNumberExt=${args.houseNumberExt}extension=${args.extension}facilityId=${args.facilityId}comments=${args.comments}address2=${args.address2}city=${args.city}address1=${args.address1}postalCode=${args.postalCode}postalCodeGeoId=${args.postalCodeGeoId}houseNumber=${args.houseNumber}postalCodeExt=${args.postalCodeExt}contactMechId=${args.contactMechId}thruDate=${args.thruDate}fromDate=${args.fromDate}attnName=${args.attnName}directions=${args.directions}countyGeoId=${args.countyGeoId}toName=${args.toName}cityGeoId=${args.cityGeoId}municipalityGeoId=${args.municipalityGeoId}stateProvinceGeoId=${args.stateProvinceGeoId}geoPointId=${args.geoPointId}`, null, req);
  }
};
export {updateFacilityPostalAddress};


const updateFacilityTelecomNumber = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFacilityTelecomNumber method',
  args:{fromDate: {type: GraphQLString},extension: {type: GraphQLString},areaCode: {type: GraphQLString},askForName: {type: GraphQLString},facilityId: {type: GraphQLString},comments: {type: GraphQLString},countryCode: {type: GraphQLString},contactNumber: {type: GraphQLString},contactMechId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/updateFacilityTelecomNumber?fromDate=${args.fromDate}extension=${args.extension}areaCode=${args.areaCode}askForName=${args.askForName}facilityId=${args.facilityId}comments=${args.comments}countryCode=${args.countryCode}contactNumber=${args.contactNumber}contactMechId=${args.contactMechId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateFacilityTelecomNumber};


const updateFacilityToGroup = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFacilityToGroup method',
  args:{fromDate: {type: GraphQLString},facilityId: {type: GraphQLString},facilityGroupId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/updateFacilityToGroup?fromDate=${args.fromDate}facilityId=${args.facilityId}facilityGroupId=${args.facilityGroupId}sequenceNum=${args.sequenceNum}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateFacilityToGroup};


const updateFacilityType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFacilityType method',
  args:{facilityTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/updateFacilityType?facilityTypeId=${args.facilityTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateFacilityType};


const updateFacilityTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFacilityTypeAttr method',
  args:{facilityTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/updateFacilityTypeAttr?facilityTypeId=${args.facilityTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {updateFacilityTypeAttr};


const updateInventoryItem = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateInventoryItem method',
  args:{inventoryItemId: {type: GraphQLString},facilityId: {type: GraphQLString},comments: {type: GraphQLString},serialNumber: {type: GraphQLInt},productId: {type: GraphQLString},softIdentifier: {type: GraphQLInt},binNumber: {type: GraphQLString},lotId: {type: GraphQLString},uomId: {type: GraphQLString},accountingQuantityTotal: {type: GraphQLFloat},ownerPartyId: {type: GraphQLString},oldAvailableToPromise: {type: GraphQLFloat},activationValidThru: {type: GraphQLString},activationNumber: {type: GraphQLInt},currencyUomId: {type: GraphQLString},statusId: {type: GraphQLString},unitCost: {type: GraphQLFloat},datetimeManufactured: {type: GraphQLString},datetimeReceived: {type: GraphQLString},expireDate: {type: GraphQLString},oldQuantityOnHand: {type: GraphQLFloat},partyId: {type: GraphQLString},containerId: {type: GraphQLString},inventoryItemTypeId: {type: GraphQLString},locationSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/updateInventoryItem?inventoryItemId=${args.inventoryItemId}facilityId=${args.facilityId}comments=${args.comments}serialNumber=${args.serialNumber}productId=${args.productId}softIdentifier=${args.softIdentifier}binNumber=${args.binNumber}lotId=${args.lotId}uomId=${args.uomId}accountingQuantityTotal=${args.accountingQuantityTotal}ownerPartyId=${args.ownerPartyId}oldAvailableToPromise=${args.oldAvailableToPromise}activationValidThru=${args.activationValidThru}activationNumber=${args.activationNumber}currencyUomId=${args.currencyUomId}statusId=${args.statusId}unitCost=${args.unitCost}datetimeManufactured=${args.datetimeManufactured}datetimeReceived=${args.datetimeReceived}expireDate=${args.expireDate}oldQuantityOnHand=${args.oldQuantityOnHand}partyId=${args.partyId}containerId=${args.containerId}inventoryItemTypeId=${args.inventoryItemTypeId}locationSeqId=${args.locationSeqId}`, null, req);
  }
};
export {updateInventoryItem};


const updateInventoryItemFromDetail = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateInventoryItemFromDetail method',
  args:{inventoryItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/updateInventoryItemFromDetail?inventoryItemId=${args.inventoryItemId}`, null, req);
  }
};
export {updateInventoryItemFromDetail};


const updateInventoryItemLabel = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateInventoryItemLabel method',
  args:{inventoryItemLabelId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/updateInventoryItemLabel?inventoryItemLabelId=${args.inventoryItemLabelId}description=${args.description}`, null, req);
  }
};
export {updateInventoryItemLabel};


const updateInventoryItemLabelAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateInventoryItemLabelAppl method',
  args:{inventoryItemLabelTypeId: {type: GraphQLString},inventoryItemLabelId: {type: GraphQLString},sequenceNum: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/updateInventoryItemLabelAppl?inventoryItemLabelTypeId=${args.inventoryItemLabelTypeId}inventoryItemLabelId=${args.inventoryItemLabelId}sequenceNum=${args.sequenceNum}`, null, req);
  }
};
export {updateInventoryItemLabelAppl};


const updateInventoryItemLabelType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateInventoryItemLabelType method',
  args:{inventoryItemLabelTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/updateInventoryItemLabelType?inventoryItemLabelTypeId=${args.inventoryItemLabelTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateInventoryItemLabelType};


const updateInventoryItemType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateInventoryItemType method',
  args:{inventoryItemTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/updateInventoryItemType?inventoryItemTypeId=${args.inventoryItemTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateInventoryItemType};


const updateInventoryTransfer = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateInventoryTransfer method',
  args:{inventoryItemId: {type: GraphQLString},inventoryTransferId: {type: GraphQLString},statusId: {type: GraphQLString},containerIdTo: {type: GraphQLString},facilityId: {type: GraphQLString},comments: {type: GraphQLString},sendDate: {type: GraphQLString},itemIssuanceId: {type: GraphQLString},receiveDate: {type: GraphQLString},facilityIdTo: {type: GraphQLString},containerId: {type: GraphQLString},locationSeqIdTo: {type: GraphQLString},locationSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/updateInventoryTransfer?inventoryItemId=${args.inventoryItemId}inventoryTransferId=${args.inventoryTransferId}statusId=${args.statusId}containerIdTo=${args.containerIdTo}facilityId=${args.facilityId}comments=${args.comments}sendDate=${args.sendDate}itemIssuanceId=${args.itemIssuanceId}receiveDate=${args.receiveDate}facilityIdTo=${args.facilityIdTo}containerId=${args.containerId}locationSeqIdTo=${args.locationSeqIdTo}locationSeqId=${args.locationSeqId}`, null, req);
  }
};
export {updateInventoryTransfer};


const updateProductFacility = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductFacility method',
  args:{facilityId: {type: GraphQLString},productId: {type: GraphQLString},lastInventoryCount: {type: GraphQLFloat},minimumStock: {type: GraphQLFloat},reorderQuantity: {type: GraphQLFloat},daysToShip: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/updateProductFacility?facilityId=${args.facilityId}productId=${args.productId}lastInventoryCount=${args.lastInventoryCount}minimumStock=${args.minimumStock}reorderQuantity=${args.reorderQuantity}daysToShip=${args.daysToShip}`, null, req);
  }
};
export {updateProductFacility};


const updateProductFacilityLocation = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductFacilityLocation method',
  args:{facilityId: {type: GraphQLString},productId: {type: GraphQLString},locationSeqId: {type: GraphQLString},moveQuantity: {type: GraphQLFloat},minimumStock: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/updateProductFacilityLocation?facilityId=${args.facilityId}productId=${args.productId}locationSeqId=${args.locationSeqId}moveQuantity=${args.moveQuantity}minimumStock=${args.minimumStock}`, null, req);
  }
};
export {updateProductFacilityLocation};


const updateSerializedInventoryTotals = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateSerializedInventoryTotals method',
  args:{inventoryItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFacility/updateSerializedInventoryTotals?inventoryItemId=${args.inventoryItemId}`, null, req);
  }
};
export {updateSerializedInventoryTotals};
