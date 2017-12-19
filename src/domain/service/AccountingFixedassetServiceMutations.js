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


const addFixedAssetProduct = {
  type: GraphQLString,
  description: 'mutation for ofbiz addFixedAssetProduct method',
  args:{productId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},fixedAssetProductTypeId: {type: GraphQLString},fromDate: {type: GraphQLString},comments: {type: GraphQLString},quantity: {type: GraphQLFloat},sequenceNum: {type: GraphQLInt},quantityUomId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/addFixedAssetProduct?productId=${args.productId}fixedAssetId=${args.fixedAssetId}fixedAssetProductTypeId=${args.fixedAssetProductTypeId}fromDate=${args.fromDate}comments=${args.comments}quantity=${args.quantity}sequenceNum=${args.sequenceNum}quantityUomId=${args.quantityUomId}thruDate=${args.thruDate}`, null, req);
  }
};
export {addFixedAssetProduct};


const calculateFixedAssetDepreciation = {
  type: GraphQLString,
  description: 'mutation for ofbiz calculateFixedAssetDepreciation method',
  args:{fixedAssetId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/calculateFixedAssetDepreciation?fixedAssetId=${args.fixedAssetId}`, null, req);
  }
};
export {calculateFixedAssetDepreciation};


const cancelFixedAssetStdCost = {
  type: GraphQLString,
  description: 'mutation for ofbiz cancelFixedAssetStdCost method',
  args:{fromDate: {type: GraphQLString},fixedAssetStdCostTypeId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},amountUomId: {type: GraphQLString},amount: {type: GraphQLFloat},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/cancelFixedAssetStdCost?fromDate=${args.fromDate}fixedAssetStdCostTypeId=${args.fixedAssetStdCostTypeId}fixedAssetId=${args.fixedAssetId}amountUomId=${args.amountUomId}amount=${args.amount}thruDate=${args.thruDate}`, null, req);
  }
};
export {cancelFixedAssetStdCost};


const checkUpdateFixedAssetDepreciation = {
  type: GraphQLString,
  description: 'mutation for ofbiz checkUpdateFixedAssetDepreciation method',
  args:{acctgTransId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/checkUpdateFixedAssetDepreciation?acctgTransId=${args.acctgTransId}`, null, req);
  }
};
export {checkUpdateFixedAssetDepreciation};


const createAccommodationClass = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAccommodationClass method',
  args:{parentClassId: {type: GraphQLString},description: {type: GraphQLString},accommodationClassId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/createAccommodationClass?parentClassId=${args.parentClassId}description=${args.description}accommodationClassId=${args.accommodationClassId}`, null, req);
  }
};
export {createAccommodationClass};


const createAccommodationMap = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAccommodationMap method',
  args:{accommodationMapId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},numberOfSpaces: {type: GraphQLInt},accommodationClassId: {type: GraphQLString},accommodationMapTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/createAccommodationMap?accommodationMapId=${args.accommodationMapId}fixedAssetId=${args.fixedAssetId}numberOfSpaces=${args.numberOfSpaces}accommodationClassId=${args.accommodationClassId}accommodationMapTypeId=${args.accommodationMapTypeId}`, null, req);
  }
};
export {createAccommodationMap};


const createAccommodationMapType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAccommodationMapType method',
  args:{description: {type: GraphQLString},accommodationMapTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/createAccommodationMapType?description=${args.description}accommodationMapTypeId=${args.accommodationMapTypeId}`, null, req);
  }
};
export {createAccommodationMapType};


const createFixedAsset = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFixedAsset method',
  args:{fixedAssetTypeId: {type: GraphQLString},dateNextService: {type: GraphQLString},roleTypeId: {type: GraphQLString},dateAcquired: {type: GraphQLString},purchaseCost: {type: GraphQLFloat},purchaseCostUomId: {type: GraphQLString},productionCapacity: {type: GraphQLFloat},serialNumber: {type: GraphQLString},classEnumId: {type: GraphQLString},fixedAssetName: {type: GraphQLString},acquireOrderId: {type: GraphQLString},uomId: {type: GraphQLString},locatedAtLocationSeqId: {type: GraphQLString},actualEndOfLife: {type: GraphQLString},dateLastServiced: {type: GraphQLString},acquireOrderItemSeqId: {type: GraphQLString},calendarId: {type: GraphQLString},salvageValue: {type: GraphQLFloat},fixedAssetId: {type: GraphQLString},parentFixedAssetId: {type: GraphQLString},partyId: {type: GraphQLString},expectedEndOfLife: {type: GraphQLString},locatedAtFacilityId: {type: GraphQLString},instanceOfProductId: {type: GraphQLString},depreciation: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/createFixedAsset?fixedAssetTypeId=${args.fixedAssetTypeId}dateNextService=${args.dateNextService}roleTypeId=${args.roleTypeId}dateAcquired=${args.dateAcquired}purchaseCost=${args.purchaseCost}purchaseCostUomId=${args.purchaseCostUomId}productionCapacity=${args.productionCapacity}serialNumber=${args.serialNumber}classEnumId=${args.classEnumId}fixedAssetName=${args.fixedAssetName}acquireOrderId=${args.acquireOrderId}uomId=${args.uomId}locatedAtLocationSeqId=${args.locatedAtLocationSeqId}actualEndOfLife=${args.actualEndOfLife}dateLastServiced=${args.dateLastServiced}acquireOrderItemSeqId=${args.acquireOrderItemSeqId}calendarId=${args.calendarId}salvageValue=${args.salvageValue}fixedAssetId=${args.fixedAssetId}parentFixedAssetId=${args.parentFixedAssetId}partyId=${args.partyId}expectedEndOfLife=${args.expectedEndOfLife}locatedAtFacilityId=${args.locatedAtFacilityId}instanceOfProductId=${args.instanceOfProductId}depreciation=${args.depreciation}`, null, req);
  }
};
export {createFixedAsset};


const createFixedAssetAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFixedAssetAttribute method',
  args:{fixedAssetId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/createFixedAssetAttribute?fixedAssetId=${args.fixedAssetId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {createFixedAssetAttribute};


const createFixedAssetDepMethod = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFixedAssetDepMethod method',
  args:{fixedAssetId: {type: GraphQLString},depreciationCustomMethodId: {type: GraphQLString},fromDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/createFixedAssetDepMethod?fixedAssetId=${args.fixedAssetId}depreciationCustomMethodId=${args.depreciationCustomMethodId}fromDate=${args.fromDate}thruDate=${args.thruDate}`, null, req);
  }
};
export {createFixedAssetDepMethod};


const createFixedAssetGeoPoint = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFixedAssetGeoPoint method',
  args:{fixedAssetId: {type: GraphQLString},geoPointId: {type: GraphQLString},fromDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/createFixedAssetGeoPoint?fixedAssetId=${args.fixedAssetId}geoPointId=${args.geoPointId}fromDate=${args.fromDate}thruDate=${args.thruDate}`, null, req);
  }
};
export {createFixedAssetGeoPoint};


const createFixedAssetIdent = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFixedAssetIdent method',
  args:{fixedAssetId: {type: GraphQLString},fixedAssetIdentTypeId: {type: GraphQLString},idValue: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/createFixedAssetIdent?fixedAssetId=${args.fixedAssetId}fixedAssetIdentTypeId=${args.fixedAssetIdentTypeId}idValue=${args.idValue}`, null, req);
  }
};
export {createFixedAssetIdent};


const createFixedAssetIdentType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFixedAssetIdentType method',
  args:{description: {type: GraphQLString},fixedAssetIdentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/createFixedAssetIdentType?description=${args.description}fixedAssetIdentTypeId=${args.fixedAssetIdentTypeId}`, null, req);
  }
};
export {createFixedAssetIdentType};


const createFixedAssetMaint = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFixedAssetMaint method',
  args:{fixedAssetId: {type: GraphQLString},intervalUomId: {type: GraphQLString},statusId: {type: GraphQLString},maintTemplateWorkEffortId: {type: GraphQLString},purchaseOrderId: {type: GraphQLString},estimatedStartDate: {type: GraphQLString},scheduleWorkEffortId: {type: GraphQLString},intervalQuantity: {type: GraphQLFloat},productMaintTypeId: {type: GraphQLString},intervalMeterTypeId: {type: GraphQLString},productMaintSeqId: {type: GraphQLString},estimatedCompletionDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/createFixedAssetMaint?fixedAssetId=${args.fixedAssetId}intervalUomId=${args.intervalUomId}statusId=${args.statusId}maintTemplateWorkEffortId=${args.maintTemplateWorkEffortId}purchaseOrderId=${args.purchaseOrderId}estimatedStartDate=${args.estimatedStartDate}scheduleWorkEffortId=${args.scheduleWorkEffortId}intervalQuantity=${args.intervalQuantity}productMaintTypeId=${args.productMaintTypeId}intervalMeterTypeId=${args.intervalMeterTypeId}productMaintSeqId=${args.productMaintSeqId}estimatedCompletionDate=${args.estimatedCompletionDate}`, null, req);
  }
};
export {createFixedAssetMaint};


const createFixedAssetMaintOrder = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFixedAssetMaintOrder method',
  args:{orderId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},maintHistSeqId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/createFixedAssetMaintOrder?orderId=${args.orderId}fixedAssetId=${args.fixedAssetId}maintHistSeqId=${args.maintHistSeqId}orderItemSeqId=${args.orderItemSeqId}`, null, req);
  }
};
export {createFixedAssetMaintOrder};


const createFixedAssetMeter = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFixedAssetMeter method',
  args:{productMeterTypeId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},readingDate: {type: GraphQLString},workEffortId: {type: GraphQLString},readingReasonEnumId: {type: GraphQLString},maintHistSeqId: {type: GraphQLString},meterValue: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/createFixedAssetMeter?productMeterTypeId=${args.productMeterTypeId}fixedAssetId=${args.fixedAssetId}readingDate=${args.readingDate}workEffortId=${args.workEffortId}readingReasonEnumId=${args.readingReasonEnumId}maintHistSeqId=${args.maintHistSeqId}meterValue=${args.meterValue}`, null, req);
  }
};
export {createFixedAssetMeter};


const createFixedAssetProductType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFixedAssetProductType method',
  args:{description: {type: GraphQLString},fixedAssetProductTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/createFixedAssetProductType?description=${args.description}fixedAssetProductTypeId=${args.fixedAssetProductTypeId}`, null, req);
  }
};
export {createFixedAssetProductType};


const createFixedAssetRegistration = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFixedAssetRegistration method',
  args:{fixedAssetId: {type: GraphQLString},fromDate: {type: GraphQLString},registrationNumber: {type: GraphQLString},registrationDate: {type: GraphQLString},licenseNumber: {type: GraphQLString},govAgencyPartyId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/createFixedAssetRegistration?fixedAssetId=${args.fixedAssetId}fromDate=${args.fromDate}registrationNumber=${args.registrationNumber}registrationDate=${args.registrationDate}licenseNumber=${args.licenseNumber}govAgencyPartyId=${args.govAgencyPartyId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createFixedAssetRegistration};


const createFixedAssetStdCost = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFixedAssetStdCost method',
  args:{fromDate: {type: GraphQLString},fixedAssetStdCostTypeId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},amountUomId: {type: GraphQLString},amount: {type: GraphQLFloat},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/createFixedAssetStdCost?fromDate=${args.fromDate}fixedAssetStdCostTypeId=${args.fixedAssetStdCostTypeId}fixedAssetId=${args.fixedAssetId}amountUomId=${args.amountUomId}amount=${args.amount}thruDate=${args.thruDate}`, null, req);
  }
};
export {createFixedAssetStdCost};


const createFixedAssetStdCostType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFixedAssetStdCostType method',
  args:{parentTypeId: {type: GraphQLString},fixedAssetStdCostTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/createFixedAssetStdCostType?parentTypeId=${args.parentTypeId}fixedAssetStdCostTypeId=${args.fixedAssetStdCostTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {createFixedAssetStdCostType};


const createFixedAssetType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFixedAssetType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},fixedAssetTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/createFixedAssetType?parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}fixedAssetTypeId=${args.fixedAssetTypeId}description=${args.description}`, null, req);
  }
};
export {createFixedAssetType};


const createFixedAssetTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFixedAssetTypeAttr method',
  args:{fixedAssetTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/createFixedAssetTypeAttr?fixedAssetTypeId=${args.fixedAssetTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {createFixedAssetTypeAttr};


const createFixedAssetTypeGlAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFixedAssetTypeGlAccount method',
  args:{organizationPartyId: {type: GraphQLString},depGlAccountId: {type: GraphQLString},fixedAssetTypeId: {type: GraphQLString},profitGlAccountId: {type: GraphQLString},lossGlAccountId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},accDepGlAccountId: {type: GraphQLString},assetGlAccountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/createFixedAssetTypeGlAccount?organizationPartyId=${args.organizationPartyId}depGlAccountId=${args.depGlAccountId}fixedAssetTypeId=${args.fixedAssetTypeId}profitGlAccountId=${args.profitGlAccountId}lossGlAccountId=${args.lossGlAccountId}fixedAssetId=${args.fixedAssetId}accDepGlAccountId=${args.accDepGlAccountId}assetGlAccountId=${args.assetGlAccountId}`, null, req);
  }
};
export {createFixedAssetTypeGlAccount};


const createMaintsFromTimeInterval = {
  type: GraphQLString,
  description: 'mutation for ofbiz createMaintsFromTimeInterval method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/createMaintsFromTimeInterval?`, null, req);
  }
};
export {createMaintsFromTimeInterval};


const createPartyFixedAssetAssignment = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyFixedAssetAssignment method',
  args:{roleTypeId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},partyId: {type: GraphQLString},fromDate: {type: GraphQLString},comments: {type: GraphQLString},allocatedDate: {type: GraphQLString},statusId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/createPartyFixedAssetAssignment?roleTypeId=${args.roleTypeId}fixedAssetId=${args.fixedAssetId}partyId=${args.partyId}fromDate=${args.fromDate}comments=${args.comments}allocatedDate=${args.allocatedDate}statusId=${args.statusId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createPartyFixedAssetAssignment};


const deleteAccommodationClass = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAccommodationClass method',
  args:{accommodationClassId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/deleteAccommodationClass?accommodationClassId=${args.accommodationClassId}`, null, req);
  }
};
export {deleteAccommodationClass};


const deleteAccommodationMap = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAccommodationMap method',
  args:{accommodationMapId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/deleteAccommodationMap?accommodationMapId=${args.accommodationMapId}`, null, req);
  }
};
export {deleteAccommodationMap};


const deleteAccommodationMapType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAccommodationMapType method',
  args:{accommodationMapTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/deleteAccommodationMapType?accommodationMapTypeId=${args.accommodationMapTypeId}`, null, req);
  }
};
export {deleteAccommodationMapType};


const deleteFixedAssetAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFixedAssetAttribute method',
  args:{fixedAssetId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/deleteFixedAssetAttribute?fixedAssetId=${args.fixedAssetId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteFixedAssetAttribute};


const deleteFixedAssetDepMethod = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFixedAssetDepMethod method',
  args:{fixedAssetId: {type: GraphQLString},depreciationCustomMethodId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/deleteFixedAssetDepMethod?fixedAssetId=${args.fixedAssetId}depreciationCustomMethodId=${args.depreciationCustomMethodId}`, null, req);
  }
};
export {deleteFixedAssetDepMethod};


const deleteFixedAssetGeoPoint = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFixedAssetGeoPoint method',
  args:{fromDate: {type: GraphQLString},fixedAssetId: {type: GraphQLString},geoPointId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/deleteFixedAssetGeoPoint?fromDate=${args.fromDate}fixedAssetId=${args.fixedAssetId}geoPointId=${args.geoPointId}`, null, req);
  }
};
export {deleteFixedAssetGeoPoint};


const deleteFixedAssetIdentType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFixedAssetIdentType method',
  args:{fixedAssetIdentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/deleteFixedAssetIdentType?fixedAssetIdentTypeId=${args.fixedAssetIdentTypeId}`, null, req);
  }
};
export {deleteFixedAssetIdentType};


const deleteFixedAssetMaint = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFixedAssetMaint method',
  args:{fixedAssetId: {type: GraphQLString},maintHistSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/deleteFixedAssetMaint?fixedAssetId=${args.fixedAssetId}maintHistSeqId=${args.maintHistSeqId}`, null, req);
  }
};
export {deleteFixedAssetMaint};


const deleteFixedAssetMaintOrder = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFixedAssetMaintOrder method',
  args:{orderItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},maintHistSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/deleteFixedAssetMaintOrder?orderItemSeqId=${args.orderItemSeqId}orderId=${args.orderId}fixedAssetId=${args.fixedAssetId}maintHistSeqId=${args.maintHistSeqId}`, null, req);
  }
};
export {deleteFixedAssetMaintOrder};


const deleteFixedAssetMeter = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFixedAssetMeter method',
  args:{productMeterTypeId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},readingDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/deleteFixedAssetMeter?productMeterTypeId=${args.productMeterTypeId}fixedAssetId=${args.fixedAssetId}readingDate=${args.readingDate}`, null, req);
  }
};
export {deleteFixedAssetMeter};


const deleteFixedAssetProductType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFixedAssetProductType method',
  args:{fixedAssetProductTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/deleteFixedAssetProductType?fixedAssetProductTypeId=${args.fixedAssetProductTypeId}`, null, req);
  }
};
export {deleteFixedAssetProductType};


const deleteFixedAssetRegistration = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFixedAssetRegistration method',
  args:{fromDate: {type: GraphQLString},fixedAssetId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/deleteFixedAssetRegistration?fromDate=${args.fromDate}fixedAssetId=${args.fixedAssetId}`, null, req);
  }
};
export {deleteFixedAssetRegistration};


const deleteFixedAssetStdCostType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFixedAssetStdCostType method',
  args:{fixedAssetStdCostTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/deleteFixedAssetStdCostType?fixedAssetStdCostTypeId=${args.fixedAssetStdCostTypeId}`, null, req);
  }
};
export {deleteFixedAssetStdCostType};


const deleteFixedAssetType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFixedAssetType method',
  args:{fixedAssetTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/deleteFixedAssetType?fixedAssetTypeId=${args.fixedAssetTypeId}`, null, req);
  }
};
export {deleteFixedAssetType};


const deleteFixedAssetTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFixedAssetTypeAttr method',
  args:{fixedAssetTypeId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/deleteFixedAssetTypeAttr?fixedAssetTypeId=${args.fixedAssetTypeId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteFixedAssetTypeAttr};


const deleteFixedAssetTypeGlAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFixedAssetTypeGlAccount method',
  args:{fixedAssetTypeId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},organizationPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/deleteFixedAssetTypeGlAccount?fixedAssetTypeId=${args.fixedAssetTypeId}fixedAssetId=${args.fixedAssetId}organizationPartyId=${args.organizationPartyId}`, null, req);
  }
};
export {deleteFixedAssetTypeGlAccount};


const deletePartyFixedAssetAssignment = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyFixedAssetAssignment method',
  args:{fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/deletePartyFixedAssetAssignment?fromDate=${args.fromDate}roleTypeId=${args.roleTypeId}fixedAssetId=${args.fixedAssetId}partyId=${args.partyId}`, null, req);
  }
};
export {deletePartyFixedAssetAssignment};


const doubleDecliningBalanceDepreciation = {
  type: GraphQLString,
  description: 'mutation for ofbiz doubleDecliningBalanceDepreciation method',
  args:{purchaseCost: {type: GraphQLFloat},assetAcquiredYear: {type: GraphQLInt},usageYears: {type: GraphQLInt},salvageValue: {type: GraphQLFloat},expEndOfLifeYear: {type: GraphQLInt},fixedAssetId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/doubleDecliningBalanceDepreciation?purchaseCost=${args.purchaseCost}assetAcquiredYear=${args.assetAcquiredYear}usageYears=${args.usageYears}salvageValue=${args.salvageValue}expEndOfLifeYear=${args.expEndOfLifeYear}fixedAssetId=${args.fixedAssetId}`, null, req);
  }
};
export {doubleDecliningBalanceDepreciation};


const fixedAssetDepCalcInterface = {
  type: GraphQLString,
  description: 'mutation for ofbiz fixedAssetDepCalcInterface method',
  args:{purchaseCost: {type: GraphQLFloat},assetAcquiredYear: {type: GraphQLInt},usageYears: {type: GraphQLInt},salvageValue: {type: GraphQLFloat},expEndOfLifeYear: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/fixedAssetDepCalcInterface?purchaseCost=${args.purchaseCost}assetAcquiredYear=${args.assetAcquiredYear}usageYears=${args.usageYears}salvageValue=${args.salvageValue}expEndOfLifeYear=${args.expEndOfLifeYear}`, null, req);
  }
};
export {fixedAssetDepCalcInterface};


const removeFixedAssetIdent = {
  type: GraphQLString,
  description: 'mutation for ofbiz removeFixedAssetIdent method',
  args:{fixedAssetId: {type: GraphQLString},fixedAssetIdentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/removeFixedAssetIdent?fixedAssetId=${args.fixedAssetId}fixedAssetIdentTypeId=${args.fixedAssetIdentTypeId}`, null, req);
  }
};
export {removeFixedAssetIdent};


const removeFixedAssetProduct = {
  type: GraphQLString,
  description: 'mutation for ofbiz removeFixedAssetProduct method',
  args:{fromDate: {type: GraphQLString},productId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},fixedAssetProductTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/removeFixedAssetProduct?fromDate=${args.fromDate}productId=${args.productId}fixedAssetId=${args.fixedAssetId}fixedAssetProductTypeId=${args.fixedAssetProductTypeId}`, null, req);
  }
};
export {removeFixedAssetProduct};


const straightLineDepreciation = {
  type: GraphQLString,
  description: 'mutation for ofbiz straightLineDepreciation method',
  args:{purchaseCost: {type: GraphQLFloat},assetAcquiredYear: {type: GraphQLInt},usageYears: {type: GraphQLInt},salvageValue: {type: GraphQLFloat},expEndOfLifeYear: {type: GraphQLInt},fixedAssetId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/straightLineDepreciation?purchaseCost=${args.purchaseCost}assetAcquiredYear=${args.assetAcquiredYear}usageYears=${args.usageYears}salvageValue=${args.salvageValue}expEndOfLifeYear=${args.expEndOfLifeYear}fixedAssetId=${args.fixedAssetId}`, null, req);
  }
};
export {straightLineDepreciation};


const updateAccommodationClass = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAccommodationClass method',
  args:{accommodationClassId: {type: GraphQLString},parentClassId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/updateAccommodationClass?accommodationClassId=${args.accommodationClassId}parentClassId=${args.parentClassId}description=${args.description}`, null, req);
  }
};
export {updateAccommodationClass};


const updateAccommodationMap = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAccommodationMap method',
  args:{accommodationMapId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},numberOfSpaces: {type: GraphQLInt},accommodationClassId: {type: GraphQLString},accommodationMapTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/updateAccommodationMap?accommodationMapId=${args.accommodationMapId}fixedAssetId=${args.fixedAssetId}numberOfSpaces=${args.numberOfSpaces}accommodationClassId=${args.accommodationClassId}accommodationMapTypeId=${args.accommodationMapTypeId}`, null, req);
  }
};
export {updateAccommodationMap};


const updateAccommodationMapType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAccommodationMapType method',
  args:{accommodationMapTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/updateAccommodationMapType?accommodationMapTypeId=${args.accommodationMapTypeId}description=${args.description}`, null, req);
  }
};
export {updateAccommodationMapType};


const updateFixedAsset = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFixedAsset method',
  args:{fixedAssetTypeId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},dateNextService: {type: GraphQLString},roleTypeId: {type: GraphQLString},dateAcquired: {type: GraphQLString},purchaseCost: {type: GraphQLFloat},purchaseCostUomId: {type: GraphQLString},productionCapacity: {type: GraphQLFloat},serialNumber: {type: GraphQLString},classEnumId: {type: GraphQLString},fixedAssetName: {type: GraphQLString},acquireOrderId: {type: GraphQLString},uomId: {type: GraphQLString},locatedAtLocationSeqId: {type: GraphQLString},actualEndOfLife: {type: GraphQLString},dateLastServiced: {type: GraphQLString},acquireOrderItemSeqId: {type: GraphQLString},calendarId: {type: GraphQLString},salvageValue: {type: GraphQLFloat},parentFixedAssetId: {type: GraphQLString},partyId: {type: GraphQLString},expectedEndOfLife: {type: GraphQLString},locatedAtFacilityId: {type: GraphQLString},instanceOfProductId: {type: GraphQLString},depreciation: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/updateFixedAsset?fixedAssetTypeId=${args.fixedAssetTypeId}fixedAssetId=${args.fixedAssetId}dateNextService=${args.dateNextService}roleTypeId=${args.roleTypeId}dateAcquired=${args.dateAcquired}purchaseCost=${args.purchaseCost}purchaseCostUomId=${args.purchaseCostUomId}productionCapacity=${args.productionCapacity}serialNumber=${args.serialNumber}classEnumId=${args.classEnumId}fixedAssetName=${args.fixedAssetName}acquireOrderId=${args.acquireOrderId}uomId=${args.uomId}locatedAtLocationSeqId=${args.locatedAtLocationSeqId}actualEndOfLife=${args.actualEndOfLife}dateLastServiced=${args.dateLastServiced}acquireOrderItemSeqId=${args.acquireOrderItemSeqId}calendarId=${args.calendarId}salvageValue=${args.salvageValue}parentFixedAssetId=${args.parentFixedAssetId}partyId=${args.partyId}expectedEndOfLife=${args.expectedEndOfLife}locatedAtFacilityId=${args.locatedAtFacilityId}instanceOfProductId=${args.instanceOfProductId}depreciation=${args.depreciation}`, null, req);
  }
};
export {updateFixedAsset};


const updateFixedAssetAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFixedAssetAttribute method',
  args:{fixedAssetId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/updateFixedAssetAttribute?fixedAssetId=${args.fixedAssetId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {updateFixedAssetAttribute};


const updateFixedAssetDepMethod = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFixedAssetDepMethod method',
  args:{fixedAssetId: {type: GraphQLString},depreciationCustomMethodId: {type: GraphQLString},fromDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/updateFixedAssetDepMethod?fixedAssetId=${args.fixedAssetId}depreciationCustomMethodId=${args.depreciationCustomMethodId}fromDate=${args.fromDate}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateFixedAssetDepMethod};


const updateFixedAssetGeoPoint = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFixedAssetGeoPoint method',
  args:{fromDate: {type: GraphQLString},fixedAssetId: {type: GraphQLString},geoPointId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/updateFixedAssetGeoPoint?fromDate=${args.fromDate}fixedAssetId=${args.fixedAssetId}geoPointId=${args.geoPointId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateFixedAssetGeoPoint};


const updateFixedAssetIdent = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFixedAssetIdent method',
  args:{fixedAssetId: {type: GraphQLString},fixedAssetIdentTypeId: {type: GraphQLString},idValue: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/updateFixedAssetIdent?fixedAssetId=${args.fixedAssetId}fixedAssetIdentTypeId=${args.fixedAssetIdentTypeId}idValue=${args.idValue}`, null, req);
  }
};
export {updateFixedAssetIdent};


const updateFixedAssetIdentType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFixedAssetIdentType method',
  args:{fixedAssetIdentTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/updateFixedAssetIdentType?fixedAssetIdentTypeId=${args.fixedAssetIdentTypeId}description=${args.description}`, null, req);
  }
};
export {updateFixedAssetIdentType};


const updateFixedAssetMaint = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFixedAssetMaint method',
  args:{fixedAssetId: {type: GraphQLString},maintHistSeqId: {type: GraphQLString},intervalUomId: {type: GraphQLString},statusId: {type: GraphQLString},purchaseOrderId: {type: GraphQLString},scheduleWorkEffortId: {type: GraphQLString},intervalQuantity: {type: GraphQLFloat},productMaintTypeId: {type: GraphQLString},intervalMeterTypeId: {type: GraphQLString},productMaintSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/updateFixedAssetMaint?fixedAssetId=${args.fixedAssetId}maintHistSeqId=${args.maintHistSeqId}intervalUomId=${args.intervalUomId}statusId=${args.statusId}purchaseOrderId=${args.purchaseOrderId}scheduleWorkEffortId=${args.scheduleWorkEffortId}intervalQuantity=${args.intervalQuantity}productMaintTypeId=${args.productMaintTypeId}intervalMeterTypeId=${args.intervalMeterTypeId}productMaintSeqId=${args.productMaintSeqId}`, null, req);
  }
};
export {updateFixedAssetMaint};


const updateFixedAssetMeter = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFixedAssetMeter method',
  args:{productMeterTypeId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},readingDate: {type: GraphQLString},workEffortId: {type: GraphQLString},readingReasonEnumId: {type: GraphQLString},maintHistSeqId: {type: GraphQLString},meterValue: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/updateFixedAssetMeter?productMeterTypeId=${args.productMeterTypeId}fixedAssetId=${args.fixedAssetId}readingDate=${args.readingDate}workEffortId=${args.workEffortId}readingReasonEnumId=${args.readingReasonEnumId}maintHistSeqId=${args.maintHistSeqId}meterValue=${args.meterValue}`, null, req);
  }
};
export {updateFixedAssetMeter};


const updateFixedAssetProduct = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFixedAssetProduct method',
  args:{fromDate: {type: GraphQLString},productId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},fixedAssetProductTypeId: {type: GraphQLString},comments: {type: GraphQLString},quantity: {type: GraphQLFloat},sequenceNum: {type: GraphQLInt},quantityUomId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/updateFixedAssetProduct?fromDate=${args.fromDate}productId=${args.productId}fixedAssetId=${args.fixedAssetId}fixedAssetProductTypeId=${args.fixedAssetProductTypeId}comments=${args.comments}quantity=${args.quantity}sequenceNum=${args.sequenceNum}quantityUomId=${args.quantityUomId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateFixedAssetProduct};


const updateFixedAssetProductType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFixedAssetProductType method',
  args:{fixedAssetProductTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/updateFixedAssetProductType?fixedAssetProductTypeId=${args.fixedAssetProductTypeId}description=${args.description}`, null, req);
  }
};
export {updateFixedAssetProductType};


const updateFixedAssetRegistration = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFixedAssetRegistration method',
  args:{fromDate: {type: GraphQLString},fixedAssetId: {type: GraphQLString},registrationNumber: {type: GraphQLString},registrationDate: {type: GraphQLString},licenseNumber: {type: GraphQLString},govAgencyPartyId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/updateFixedAssetRegistration?fromDate=${args.fromDate}fixedAssetId=${args.fixedAssetId}registrationNumber=${args.registrationNumber}registrationDate=${args.registrationDate}licenseNumber=${args.licenseNumber}govAgencyPartyId=${args.govAgencyPartyId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateFixedAssetRegistration};


const updateFixedAssetStdCost = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFixedAssetStdCost method',
  args:{fromDate: {type: GraphQLString},fixedAssetStdCostTypeId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},amountUomId: {type: GraphQLString},amount: {type: GraphQLFloat},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/updateFixedAssetStdCost?fromDate=${args.fromDate}fixedAssetStdCostTypeId=${args.fixedAssetStdCostTypeId}fixedAssetId=${args.fixedAssetId}amountUomId=${args.amountUomId}amount=${args.amount}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateFixedAssetStdCost};


const updateFixedAssetStdCostType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFixedAssetStdCostType method',
  args:{fixedAssetStdCostTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/updateFixedAssetStdCostType?fixedAssetStdCostTypeId=${args.fixedAssetStdCostTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateFixedAssetStdCostType};


const updateFixedAssetType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFixedAssetType method',
  args:{fixedAssetTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/updateFixedAssetType?fixedAssetTypeId=${args.fixedAssetTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateFixedAssetType};


const updateFixedAssetTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFixedAssetTypeAttr method',
  args:{fixedAssetTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/updateFixedAssetTypeAttr?fixedAssetTypeId=${args.fixedAssetTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {updateFixedAssetTypeAttr};


const updateFixedAssetTypeGlAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFixedAssetTypeGlAccount method',
  args:{fixedAssetTypeId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},organizationPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/updateFixedAssetTypeGlAccount?fixedAssetTypeId=${args.fixedAssetTypeId}fixedAssetId=${args.fixedAssetId}organizationPartyId=${args.organizationPartyId}`, null, req);
  }
};
export {updateFixedAssetTypeGlAccount};


const updatePartyFixedAssetAssignment = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyFixedAssetAssignment method',
  args:{fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},partyId: {type: GraphQLString},comments: {type: GraphQLString},allocatedDate: {type: GraphQLString},statusId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingFixedasset/updatePartyFixedAssetAssignment?fromDate=${args.fromDate}roleTypeId=${args.roleTypeId}fixedAssetId=${args.fixedAssetId}partyId=${args.partyId}comments=${args.comments}allocatedDate=${args.allocatedDate}statusId=${args.statusId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updatePartyFixedAssetAssignment};
