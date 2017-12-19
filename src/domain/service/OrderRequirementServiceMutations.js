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


const addRequirementTask = {
  type: GraphQLString,
  description: 'mutation for ofbiz addRequirementTask method',
  args:{workEffortId: {type: GraphQLString},requirementId: {type: GraphQLString},workReqFulfTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/addRequirementTask?workEffortId=${args.workEffortId}requirementId=${args.requirementId}workReqFulfTypeId=${args.workReqFulfTypeId}`, null, req);
  }
};
export {addRequirementTask};


const approveRequirement = {
  type: GraphQLString,
  description: 'mutation for ofbiz approveRequirement method',
  args:{requirementId: {type: GraphQLString},quantity: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/approveRequirement?requirementId=${args.requirementId}quantity=${args.quantity}`, null, req);
  }
};
export {approveRequirement};


const associatedRequirementWithRequestItem = {
  type: GraphQLString,
  description: 'mutation for ofbiz associatedRequirementWithRequestItem method',
  args:{custRequestId: {type: GraphQLString},requirementId: {type: GraphQLString},custRequestItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/associatedRequirementWithRequestItem?custRequestId=${args.custRequestId}requirementId=${args.requirementId}custRequestItemSeqId=${args.custRequestItemSeqId}`, null, req);
  }
};
export {associatedRequirementWithRequestItem};


const autoAssignRequirementToSupplier = {
  type: GraphQLString,
  description: 'mutation for ofbiz autoAssignRequirementToSupplier method',
  args:{requirementId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/autoAssignRequirementToSupplier?requirementId=${args.requirementId}`, null, req);
  }
};
export {autoAssignRequirementToSupplier};


const checkCreateOrderRequirement = {
  type: GraphQLString,
  description: 'mutation for ofbiz checkCreateOrderRequirement method',
  args:{orderItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString},quantity: {type: GraphQLFloat},productId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/checkCreateOrderRequirement?orderItemSeqId=${args.orderItemSeqId}orderId=${args.orderId}quantity=${args.quantity}productId=${args.productId}`, null, req);
  }
};
export {checkCreateOrderRequirement};


const checkCreateProductRequirementForFacility = {
  type: GraphQLString,
  description: 'mutation for ofbiz checkCreateProductRequirementForFacility method',
  args:{facilityId: {type: GraphQLString},defaultRequirementMethodId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/checkCreateProductRequirementForFacility?facilityId=${args.facilityId}defaultRequirementMethodId=${args.defaultRequirementMethodId}`, null, req);
  }
};
export {checkCreateProductRequirementForFacility};


const checkCreateStockRequirementAtp = {
  type: GraphQLString,
  description: 'mutation for ofbiz checkCreateStockRequirementAtp method',
  args:{orderItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},inventoryItemId: {type: GraphQLString},quantity: {type: GraphQLFloat},productId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/checkCreateStockRequirementAtp?orderItemSeqId=${args.orderItemSeqId}orderId=${args.orderId}shipGroupSeqId=${args.shipGroupSeqId}inventoryItemId=${args.inventoryItemId}quantity=${args.quantity}productId=${args.productId}`, null, req);
  }
};
export {checkCreateStockRequirementAtp};


const checkCreateStockRequirementQoh = {
  type: GraphQLString,
  description: 'mutation for ofbiz checkCreateStockRequirementQoh method',
  args:{orderItemSeqId: {type: GraphQLString},inventoryItemId: {type: GraphQLString},quantity: {type: GraphQLFloat},orderId: {type: GraphQLString},itemIssuanceId: {type: GraphQLString},shipmentId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},maintHistSeqId: {type: GraphQLString},shipmentItemSeqId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},issuedByUserLoginId: {type: GraphQLString},cancelQuantity: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/checkCreateStockRequirementQoh?orderItemSeqId=${args.orderItemSeqId}inventoryItemId=${args.inventoryItemId}quantity=${args.quantity}orderId=${args.orderId}itemIssuanceId=${args.itemIssuanceId}shipmentId=${args.shipmentId}fixedAssetId=${args.fixedAssetId}maintHistSeqId=${args.maintHistSeqId}shipmentItemSeqId=${args.shipmentItemSeqId}shipGroupSeqId=${args.shipGroupSeqId}issuedByUserLoginId=${args.issuedByUserLoginId}cancelQuantity=${args.cancelQuantity}`, null, req);
  }
};
export {checkCreateStockRequirementQoh};


const createATPRequirementsForOrder = {
  type: GraphQLString,
  description: 'mutation for ofbiz createATPRequirementsForOrder method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/createATPRequirementsForOrder?orderId=${args.orderId}`, null, req);
  }
};
export {createATPRequirementsForOrder};


const createAutoRequirementsForOrder = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAutoRequirementsForOrder method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/createAutoRequirementsForOrder?orderId=${args.orderId}`, null, req);
  }
};
export {createAutoRequirementsForOrder};


const createDesiredFeature = {
  type: GraphQLString,
  description: 'mutation for ofbiz createDesiredFeature method',
  args:{desiredFeatureId: {type: GraphQLString},requirementId: {type: GraphQLString},optionalInd: {type: GraphQLString},productFeatureId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/createDesiredFeature?desiredFeatureId=${args.desiredFeatureId}requirementId=${args.requirementId}optionalInd=${args.optionalInd}productFeatureId=${args.productFeatureId}`, null, req);
  }
};
export {createDesiredFeature};


const createOrderRequirementCommitment = {
  type: GraphQLString,
  description: 'mutation for ofbiz createOrderRequirementCommitment method',
  args:{orderItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString},requirementId: {type: GraphQLString},quantity: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/createOrderRequirementCommitment?orderItemSeqId=${args.orderItemSeqId}orderId=${args.orderId}requirementId=${args.requirementId}quantity=${args.quantity}`, null, req);
  }
};
export {createOrderRequirementCommitment};


const createRequirement = {
  type: GraphQLString,
  description: 'mutation for ofbiz createRequirement method',
  args:{reason: {type: GraphQLString},facilityId: {type: GraphQLString},quantity: {type: GraphQLFloat},productId: {type: GraphQLString},estimatedBudget: {type: GraphQLFloat},description: {type: GraphQLString},requiredByDate: {type: GraphQLString},requirementStartDate: {type: GraphQLString},custRequestItemSeqId: {type: GraphQLString},requirementTypeId: {type: GraphQLString},useCase: {type: GraphQLString},statusId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},custRequestId: {type: GraphQLString},requirementId: {type: GraphQLString},deliverableId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/createRequirement?reason=${args.reason}facilityId=${args.facilityId}quantity=${args.quantity}productId=${args.productId}estimatedBudget=${args.estimatedBudget}description=${args.description}requiredByDate=${args.requiredByDate}requirementStartDate=${args.requirementStartDate}custRequestItemSeqId=${args.custRequestItemSeqId}requirementTypeId=${args.requirementTypeId}useCase=${args.useCase}statusId=${args.statusId}fixedAssetId=${args.fixedAssetId}custRequestId=${args.custRequestId}requirementId=${args.requirementId}deliverableId=${args.deliverableId}`, null, req);
  }
};
export {createRequirement};


const createRequirementAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz createRequirementAttribute method',
  args:{requirementId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/createRequirementAttribute?requirementId=${args.requirementId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {createRequirementAttribute};


const createRequirementBudgetAllocation = {
  type: GraphQLString,
  description: 'mutation for ofbiz createRequirementBudgetAllocation method',
  args:{budgetItemSeqId: {type: GraphQLString},budgetId: {type: GraphQLString},requirementId: {type: GraphQLString},amount: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/createRequirementBudgetAllocation?budgetItemSeqId=${args.budgetItemSeqId}budgetId=${args.budgetId}requirementId=${args.requirementId}amount=${args.amount}`, null, req);
  }
};
export {createRequirementBudgetAllocation};


const createRequirementFromItemATP = {
  type: GraphQLString,
  description: 'mutation for ofbiz createRequirementFromItemATP method',
  args:{orderItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},inventoryItemId: {type: GraphQLString},quantity: {type: GraphQLFloat},productId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/createRequirementFromItemATP?orderItemSeqId=${args.orderItemSeqId}orderId=${args.orderId}shipGroupSeqId=${args.shipGroupSeqId}inventoryItemId=${args.inventoryItemId}quantity=${args.quantity}productId=${args.productId}`, null, req);
  }
};
export {createRequirementFromItemATP};


const createRequirementRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz createRequirementRole method',
  args:{roleTypeId: {type: GraphQLString},requirementId: {type: GraphQLString},partyId: {type: GraphQLString},fromDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/createRequirementRole?roleTypeId=${args.roleTypeId}requirementId=${args.requirementId}partyId=${args.partyId}fromDate=${args.fromDate}thruDate=${args.thruDate}`, null, req);
  }
};
export {createRequirementRole};


const createRequirementStatus = {
  type: GraphQLString,
  description: 'mutation for ofbiz createRequirementStatus method',
  args:{statusId: {type: GraphQLString},requirementId: {type: GraphQLString},statusDate: {type: GraphQLString},changeByUserLoginId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/createRequirementStatus?statusId=${args.statusId}requirementId=${args.requirementId}statusDate=${args.statusDate}changeByUserLoginId=${args.changeByUserLoginId}`, null, req);
  }
};
export {createRequirementStatus};


const createRequirementType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createRequirementType method',
  args:{requirementTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/createRequirementType?requirementTypeId=${args.requirementTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {createRequirementType};


const createRequirementTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz createRequirementTypeAttr method',
  args:{requirementTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/createRequirementTypeAttr?requirementTypeId=${args.requirementTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {createRequirementTypeAttr};


const createTransferFromRequirement = {
  type: GraphQLString,
  description: 'mutation for ofbiz createTransferFromRequirement method',
  args:{fromFacilityId: {type: GraphQLString},requirementId: {type: GraphQLString},quantity: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/createTransferFromRequirement?fromFacilityId=${args.fromFacilityId}requirementId=${args.requirementId}quantity=${args.quantity}`, null, req);
  }
};
export {createTransferFromRequirement};


const createWorkReqFulfType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createWorkReqFulfType method',
  args:{workReqFulfTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/createWorkReqFulfType?workReqFulfTypeId=${args.workReqFulfTypeId}description=${args.description}`, null, req);
  }
};
export {createWorkReqFulfType};


const deleteDesiredFeature = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteDesiredFeature method',
  args:{desiredFeatureId: {type: GraphQLString},requirementId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/deleteDesiredFeature?desiredFeatureId=${args.desiredFeatureId}requirementId=${args.requirementId}`, null, req);
  }
};
export {deleteDesiredFeature};


const deleteRequirement = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteRequirement method',
  args:{requirementId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/deleteRequirement?requirementId=${args.requirementId}`, null, req);
  }
};
export {deleteRequirement};


const deleteRequirementAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteRequirementAttribute method',
  args:{requirementId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/deleteRequirementAttribute?requirementId=${args.requirementId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteRequirementAttribute};


const deleteRequirementBudgetAllocation = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteRequirementBudgetAllocation method',
  args:{budgetItemSeqId: {type: GraphQLString},budgetId: {type: GraphQLString},requirementId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/deleteRequirementBudgetAllocation?budgetItemSeqId=${args.budgetItemSeqId}budgetId=${args.budgetId}requirementId=${args.requirementId}`, null, req);
  }
};
export {deleteRequirementBudgetAllocation};


const deleteRequirementCustRequest = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteRequirementCustRequest method',
  args:{custRequestId: {type: GraphQLString},requirementId: {type: GraphQLString},custRequestItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/deleteRequirementCustRequest?custRequestId=${args.custRequestId}requirementId=${args.requirementId}custRequestItemSeqId=${args.custRequestItemSeqId}`, null, req);
  }
};
export {deleteRequirementCustRequest};


const deleteRequirementType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteRequirementType method',
  args:{requirementTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/deleteRequirementType?requirementTypeId=${args.requirementTypeId}`, null, req);
  }
};
export {deleteRequirementType};


const deleteRequirementTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteRequirementTypeAttr method',
  args:{requirementTypeId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/deleteRequirementTypeAttr?requirementTypeId=${args.requirementTypeId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteRequirementTypeAttr};


const deleteWorkReqFulfType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWorkReqFulfType method',
  args:{workReqFulfTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/deleteWorkReqFulfType?workReqFulfTypeId=${args.workReqFulfTypeId}`, null, req);
  }
};
export {deleteWorkReqFulfType};


const getRequirementsForSupplier = {
  type: GraphQLString,
  description: 'mutation for ofbiz getRequirementsForSupplier method',
  args:{currencyUomId: {type: GraphQLString},unassignedRequirements: {type: GraphQLString},partyId: {type: GraphQLString},requirementConditions: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/getRequirementsForSupplier?currencyUomId=${args.currencyUomId}unassignedRequirements=${args.unassignedRequirements}partyId=${args.partyId}statusIds=${args.statusIds}requirementConditions=${args.requirementConditions}`, null, req);
  }
};
export {getRequirementsForSupplier};


const removeRequirementRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz removeRequirementRole method',
  args:{fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},requirementId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/removeRequirementRole?fromDate=${args.fromDate}roleTypeId=${args.roleTypeId}requirementId=${args.requirementId}partyId=${args.partyId}`, null, req);
  }
};
export {removeRequirementRole};


const requirementInterface = {
  type: GraphQLString,
  description: 'mutation for ofbiz requirementInterface method',
  args:{reason: {type: GraphQLString},facilityId: {type: GraphQLString},quantity: {type: GraphQLFloat},productId: {type: GraphQLString},estimatedBudget: {type: GraphQLFloat},description: {type: GraphQLString},requiredByDate: {type: GraphQLString},requirementStartDate: {type: GraphQLString},requirementTypeId: {type: GraphQLString},useCase: {type: GraphQLString},statusId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},deliverableId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/requirementInterface?reason=${args.reason}facilityId=${args.facilityId}quantity=${args.quantity}productId=${args.productId}estimatedBudget=${args.estimatedBudget}description=${args.description}requiredByDate=${args.requiredByDate}requirementStartDate=${args.requirementStartDate}requirementTypeId=${args.requirementTypeId}useCase=${args.useCase}statusId=${args.statusId}fixedAssetId=${args.fixedAssetId}deliverableId=${args.deliverableId}`, null, req);
  }
};
export {requirementInterface};


const updateDesiredFeature = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateDesiredFeature method',
  args:{desiredFeatureId: {type: GraphQLString},requirementId: {type: GraphQLString},optionalInd: {type: GraphQLString},productFeatureId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/updateDesiredFeature?desiredFeatureId=${args.desiredFeatureId}requirementId=${args.requirementId}optionalInd=${args.optionalInd}productFeatureId=${args.productFeatureId}`, null, req);
  }
};
export {updateDesiredFeature};


const updateRequirement = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateRequirement method',
  args:{requirementId: {type: GraphQLString},reason: {type: GraphQLString},facilityId: {type: GraphQLString},quantity: {type: GraphQLFloat},productId: {type: GraphQLString},estimatedBudget: {type: GraphQLFloat},description: {type: GraphQLString},requiredByDate: {type: GraphQLString},requirementStartDate: {type: GraphQLString},requirementTypeId: {type: GraphQLString},useCase: {type: GraphQLString},statusId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},deliverableId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/updateRequirement?requirementId=${args.requirementId}reason=${args.reason}facilityId=${args.facilityId}quantity=${args.quantity}productId=${args.productId}estimatedBudget=${args.estimatedBudget}description=${args.description}requiredByDate=${args.requiredByDate}requirementStartDate=${args.requirementStartDate}requirementTypeId=${args.requirementTypeId}useCase=${args.useCase}statusId=${args.statusId}fixedAssetId=${args.fixedAssetId}deliverableId=${args.deliverableId}`, null, req);
  }
};
export {updateRequirement};


const updateRequirementAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateRequirementAttribute method',
  args:{requirementId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/updateRequirementAttribute?requirementId=${args.requirementId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {updateRequirementAttribute};


const updateRequirementBudgetAllocation = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateRequirementBudgetAllocation method',
  args:{budgetItemSeqId: {type: GraphQLString},budgetId: {type: GraphQLString},requirementId: {type: GraphQLString},amount: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/updateRequirementBudgetAllocation?budgetItemSeqId=${args.budgetItemSeqId}budgetId=${args.budgetId}requirementId=${args.requirementId}amount=${args.amount}`, null, req);
  }
};
export {updateRequirementBudgetAllocation};


const updateRequirementRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateRequirementRole method',
  args:{fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},requirementId: {type: GraphQLString},partyId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/updateRequirementRole?fromDate=${args.fromDate}roleTypeId=${args.roleTypeId}requirementId=${args.requirementId}partyId=${args.partyId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateRequirementRole};


const updateRequirementType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateRequirementType method',
  args:{requirementTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/updateRequirementType?requirementTypeId=${args.requirementTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateRequirementType};


const updateRequirementTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateRequirementTypeAttr method',
  args:{requirementTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/updateRequirementTypeAttr?requirementTypeId=${args.requirementTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {updateRequirementTypeAttr};


const updateRequirementsToOrdered = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateRequirementsToOrdered method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/updateRequirementsToOrdered?orderId=${args.orderId}`, null, req);
  }
};
export {updateRequirementsToOrdered};


const updateWorkReqFulfType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWorkReqFulfType method',
  args:{workReqFulfTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequirement/updateWorkReqFulfType?workReqFulfTypeId=${args.workReqFulfTypeId}description=${args.description}`, null, req);
  }
};
export {updateWorkReqFulfType};
