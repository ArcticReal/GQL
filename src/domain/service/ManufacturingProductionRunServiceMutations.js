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
import {KeyValueType} from '../../framework/helpTypes.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';


const addProductionRunComponent = {
  type: GraphQLString,
  description: 'mutation for ofbiz addProductionRunComponent method',
  args:{productId: {type: GraphQLString},estimatedQuantity: {type: GraphQLFloat},productionRunId: {type: GraphQLString},workEffortId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/addProductionRunComponent?productId=${args.productId}estimatedQuantity=${args.estimatedQuantity}productionRunId=${args.productionRunId}workEffortId=${args.workEffortId}`, null, req);
  }
};
export {addProductionRunComponent};


const addProductionRunRoutingTask = {
  type: GraphQLString,
  description: 'mutation for ofbiz addProductionRunRoutingTask method',
  args:{routingTaskId: {type: GraphQLString},priority: {type: GraphQLInt},productionRunId: {type: GraphQLString},estimatedSetupMillis: {type: GraphQLFloat},estimatedStartDate: {type: GraphQLString},description: {type: GraphQLString},workEffortName: {type: GraphQLString},estimatedMilliSeconds: {type: GraphQLFloat},estimatedCompletionDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/addProductionRunRoutingTask?routingTaskId=${args.routingTaskId}priority=${args.priority}productionRunId=${args.productionRunId}estimatedSetupMillis=${args.estimatedSetupMillis}estimatedStartDate=${args.estimatedStartDate}description=${args.description}workEffortName=${args.workEffortName}estimatedMilliSeconds=${args.estimatedMilliSeconds}estimatedCompletionDate=${args.estimatedCompletionDate}`, null, req);
  }
};
export {addProductionRunRoutingTask};


const cancelProductionRun = {
  type: GraphQLString,
  description: 'mutation for ofbiz cancelProductionRun method',
  args:{productionRunId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/cancelProductionRun?productionRunId=${args.productionRunId}`, null, req);
  }
};
export {cancelProductionRun};


const changeProductionRunStatus = {
  type: GraphQLString,
  description: 'mutation for ofbiz changeProductionRunStatus method',
  args:{productionRunId: {type: GraphQLString},statusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/changeProductionRunStatus?productionRunId=${args.productionRunId}statusId=${args.statusId}`, null, req);
  }
};
export {changeProductionRunStatus};


const changeProductionRunTaskStatus = {
  type: GraphQLString,
  description: 'mutation for ofbiz changeProductionRunTaskStatus method',
  args:{workEffortId: {type: GraphQLString},productionRunId: {type: GraphQLString},statusId: {type: GraphQLString},issueAllComponents: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/changeProductionRunTaskStatus?workEffortId=${args.workEffortId}productionRunId=${args.productionRunId}statusId=${args.statusId}issueAllComponents=${args.issueAllComponents}`, null, req);
  }
};
export {changeProductionRunTaskStatus};


const checkDecomposeInventoryItem = {
  type: GraphQLString,
  description: 'mutation for ofbiz checkDecomposeInventoryItem method',
  args:{inventoryItemId: {type: GraphQLString},quantityAccepted: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/checkDecomposeInventoryItem?inventoryItemId=${args.inventoryItemId}quantityAccepted=${args.quantityAccepted}`, null, req);
  }
};
export {checkDecomposeInventoryItem};


const checkUpdatePrunRoutingTask = {
  type: GraphQLString,
  description: 'mutation for ofbiz checkUpdatePrunRoutingTask method',
  args:{routingTaskId: {type: GraphQLString},estimatedSetupMillis: {type: GraphQLFloat},estimatedStartDate: {type: GraphQLString},priority: {type: GraphQLInt},productionRunId: {type: GraphQLString},estimatedMilliSeconds: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/checkUpdatePrunRoutingTask?routingTaskId=${args.routingTaskId}estimatedSetupMillis=${args.estimatedSetupMillis}estimatedStartDate=${args.estimatedStartDate}priority=${args.priority}productionRunId=${args.productionRunId}estimatedMilliSeconds=${args.estimatedMilliSeconds}`, null, req);
  }
};
export {checkUpdatePrunRoutingTask};


const createProductionRun = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductionRun method',
  args:{pRQuantity: {type: GraphQLFloat},facilityId: {type: GraphQLString},productId: {type: GraphQLString},startDate: {type: GraphQLString},routingId: {type: GraphQLString},description: {type: GraphQLString},workEffortName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/createProductionRun?pRQuantity=${args.pRQuantity}facilityId=${args.facilityId}productId=${args.productId}startDate=${args.startDate}routingId=${args.routingId}description=${args.description}workEffortName=${args.workEffortName}`, null, req);
  }
};
export {createProductionRun};


const createProductionRunAssoc = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductionRunAssoc method',
  args:{productionRunIdTo: {type: GraphQLString},workFlowSequenceTypeId: {type: GraphQLString},productionRunId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/createProductionRunAssoc?productionRunIdTo=${args.productionRunIdTo}workFlowSequenceTypeId=${args.workFlowSequenceTypeId}productionRunId=${args.productionRunId}`, null, req);
  }
};
export {createProductionRunAssoc};


const createProductionRunForMktgPkg = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductionRunForMktgPkg method',
  args:{orderItemSeqId: {type: GraphQLString},facilityId: {type: GraphQLString},orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/createProductionRunForMktgPkg?orderItemSeqId=${args.orderItemSeqId}facilityId=${args.facilityId}orderId=${args.orderId}`, null, req);
  }
};
export {createProductionRunForMktgPkg};


const createProductionRunFromConfiguration = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductionRunFromConfiguration method',
  args:{facilityId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},quantity: {type: GraphQLFloat},orderId: {type: GraphQLString},configId: {type: GraphQLString},config: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/createProductionRunFromConfiguration?facilityId=${args.facilityId}orderItemSeqId=${args.orderItemSeqId}quantity=${args.quantity}orderId=${args.orderId}configId=${args.configId}config=${args.config}`, null, req);
  }
};
export {createProductionRunFromConfiguration};


const createProductionRunFromRequirement = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductionRunFromRequirement method',
  args:{requirementId: {type: GraphQLString},quantity: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/createProductionRunFromRequirement?requirementId=${args.requirementId}quantity=${args.quantity}`, null, req);
  }
};
export {createProductionRunFromRequirement};


const createProductionRunPartyAssign = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductionRunPartyAssign method',
  args:{roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString},productionRunId: {type: GraphQLString},workEffortId: {type: GraphQLString},fromDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/createProductionRunPartyAssign?roleTypeId=${args.roleTypeId}partyId=${args.partyId}productionRunId=${args.productionRunId}workEffortId=${args.workEffortId}fromDate=${args.fromDate}thruDate=${args.thruDate}`, null, req);
  }
};
export {createProductionRunPartyAssign};


const createProductionRunTaskCosts = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductionRunTaskCosts method',
  args:{productionRunTaskId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/createProductionRunTaskCosts?productionRunTaskId=${args.productionRunTaskId}`, null, req);
  }
};
export {createProductionRunTaskCosts};


const createProductionRunsForOrder = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductionRunsForOrder method',
  args:{orderId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},fromDate: {type: GraphQLString},quantity: {type: GraphQLFloat},shipmentId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/createProductionRunsForOrder?orderId=${args.orderId}orderItemSeqId=${args.orderItemSeqId}fromDate=${args.fromDate}quantity=${args.quantity}shipmentId=${args.shipmentId}shipGroupSeqId=${args.shipGroupSeqId}`, null, req);
  }
};
export {createProductionRunsForOrder};


const createProductionRunsForProductBom = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductionRunsForProductBom method',
  args:{facilityId: {type: GraphQLString},productId: {type: GraphQLString},startDate: {type: GraphQLString},quantity: {type: GraphQLFloat},routingId: {type: GraphQLString},description: {type: GraphQLString},workEffortName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/createProductionRunsForProductBom?facilityId=${args.facilityId}productId=${args.productId}startDate=${args.startDate}quantity=${args.quantity}routingId=${args.routingId}description=${args.description}workEffortName=${args.workEffortName}`, null, req);
  }
};
export {createProductionRunsForProductBom};


const decomposeInventoryItem = {
  type: GraphQLString,
  description: 'mutation for ofbiz decomposeInventoryItem method',
  args:{inventoryItemId: {type: GraphQLString},quantity: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/decomposeInventoryItem?inventoryItemId=${args.inventoryItemId}quantity=${args.quantity}`, null, req);
  }
};
export {decomposeInventoryItem};


const deleteProductionRunComponent = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductionRunComponent method',
  args:{productId: {type: GraphQLString},productionRunId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/deleteProductionRunComponent?productId=${args.productId}productionRunId=${args.productionRunId}`, null, req);
  }
};
export {deleteProductionRunComponent};


const deleteProductionRunRoutingTask = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductionRunRoutingTask method',
  args:{routingTaskId: {type: GraphQLString},productionRunId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/deleteProductionRunRoutingTask?routingTaskId=${args.routingTaskId}productionRunId=${args.productionRunId}`, null, req);
  }
};
export {deleteProductionRunRoutingTask};


const getProductionRunCost = {
  type: GraphQLString,
  description: 'mutation for ofbiz getProductionRunCost method',
  args:{workEffortId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/getProductionRunCost?workEffortId=${args.workEffortId}`, null, req);
  }
};
export {getProductionRunCost};


const getProductionRunTotResQty = {
  type: GraphQLString,
  description: 'mutation for ofbiz getProductionRunTotResQty method',
  args:{productId: {type: GraphQLString},startDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/getProductionRunTotResQty?productId=${args.productId}startDate=${args.startDate}`, null, req);
  }
};
export {getProductionRunTotResQty};


const getWorkEffortCosts = {
  type: GraphQLString,
  description: 'mutation for ofbiz getWorkEffortCosts method',
  args:{workEffortId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/getWorkEffortCosts?workEffortId=${args.workEffortId}`, null, req);
  }
};
export {getWorkEffortCosts};


const issueInventoryItemToWorkEffort = {
  type: GraphQLString,
  description: 'mutation for ofbiz issueInventoryItemToWorkEffort method',
  args:{workEffortId: {type: GraphQLString},inventoryItem: {type: new GraphQLList(KeyValueType)},quantity: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/issueInventoryItemToWorkEffort?workEffortId=${args.workEffortId}inventoryItem=${args.inventoryItem}quantity=${args.quantity}`, null, req);
  }
};
export {issueInventoryItemToWorkEffort};


const issueProductionRunTask = {
  type: GraphQLString,
  description: 'mutation for ofbiz issueProductionRunTask method',
  args:{workEffortId: {type: GraphQLString},failIfItemsAreNotOnHand: {type: GraphQLString},reserveOrderEnumId: {type: GraphQLString},failIfItemsAreNotAvailable: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/issueProductionRunTask?workEffortId=${args.workEffortId}failIfItemsAreNotOnHand=${args.failIfItemsAreNotOnHand}reserveOrderEnumId=${args.reserveOrderEnumId}failIfItemsAreNotAvailable=${args.failIfItemsAreNotAvailable}`, null, req);
  }
};
export {issueProductionRunTask};


const issueProductionRunTaskComponent = {
  type: GraphQLString,
  description: 'mutation for ofbiz issueProductionRunTaskComponent method',
  args:{workEffortId: {type: GraphQLString},productId: {type: GraphQLString},fromDate: {type: GraphQLString},secondaryLocationSeqId: {type: GraphQLString},quantity: {type: GraphQLFloat},failIfItemsAreNotOnHand: {type: GraphQLString},description: {type: GraphQLString},lotId: {type: GraphQLString},reserveOrderEnumId: {type: GraphQLString},reasonEnumId: {type: GraphQLString},failIfItemsAreNotAvailable: {type: GraphQLString},locationSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/issueProductionRunTaskComponent?workEffortId=${args.workEffortId}productId=${args.productId}fromDate=${args.fromDate}secondaryLocationSeqId=${args.secondaryLocationSeqId}quantity=${args.quantity}failIfItemsAreNotOnHand=${args.failIfItemsAreNotOnHand}description=${args.description}lotId=${args.lotId}reserveOrderEnumId=${args.reserveOrderEnumId}reasonEnumId=${args.reasonEnumId}failIfItemsAreNotAvailable=${args.failIfItemsAreNotAvailable}locationSeqId=${args.locationSeqId}`, null, req);
  }
};
export {issueProductionRunTaskComponent};


const productionRunDeclareAndProduce = {
  type: GraphQLString,
  description: 'mutation for ofbiz productionRunDeclareAndProduce method',
  args:{workEffortId: {type: GraphQLString},quantity: {type: GraphQLFloat},componentsLocationMap: {type: GraphQLString},createLotIfNeeded: {type: GraphQLBoolean},quantityUomId: {type: GraphQLString},lotId: {type: GraphQLString},autoCreateLot: {type: GraphQLBoolean},inventoryItemTypeId: {type: GraphQLString},locationSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/productionRunDeclareAndProduce?workEffortId=${args.workEffortId}quantity=${args.quantity}componentsLocationMap=${args.componentsLocationMap}createLotIfNeeded=${args.createLotIfNeeded}quantityUomId=${args.quantityUomId}lotId=${args.lotId}autoCreateLot=${args.autoCreateLot}inventoryItemTypeId=${args.inventoryItemTypeId}locationSeqId=${args.locationSeqId}`, null, req);
  }
};
export {productionRunDeclareAndProduce};


const productionRunProduce = {
  type: GraphQLString,
  description: 'mutation for ofbiz productionRunProduce method',
  args:{workEffortId: {type: GraphQLString},quantity: {type: GraphQLFloat},createLotIfNeeded: {type: GraphQLBoolean},quantityUomId: {type: GraphQLString},lotId: {type: GraphQLString},autoCreateLot: {type: GraphQLBoolean},inventoryItemTypeId: {type: GraphQLString},locationSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/productionRunProduce?workEffortId=${args.workEffortId}quantity=${args.quantity}createLotIfNeeded=${args.createLotIfNeeded}quantityUomId=${args.quantityUomId}lotId=${args.lotId}autoCreateLot=${args.autoCreateLot}inventoryItemTypeId=${args.inventoryItemTypeId}locationSeqId=${args.locationSeqId}`, null, req);
  }
};
export {productionRunProduce};


const productionRunTaskProduce = {
  type: GraphQLString,
  description: 'mutation for ofbiz productionRunTaskProduce method',
  args:{workEffortId: {type: GraphQLString},quantity: {type: GraphQLFloat},productId: {type: GraphQLString},isReturned: {type: GraphQLString},facilityId: {type: GraphQLString},currencyUomId: {type: GraphQLString},unitCost: {type: GraphQLFloat},lotId: {type: GraphQLString},locationSeqId: {type: GraphQLString},inventoryItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/productionRunTaskProduce?workEffortId=${args.workEffortId}quantity=${args.quantity}productId=${args.productId}isReturned=${args.isReturned}facilityId=${args.facilityId}currencyUomId=${args.currencyUomId}unitCost=${args.unitCost}lotId=${args.lotId}locationSeqId=${args.locationSeqId}inventoryItemTypeId=${args.inventoryItemTypeId}`, null, req);
  }
};
export {productionRunTaskProduce};


const productionRunTaskReturnMaterial = {
  type: GraphQLString,
  description: 'mutation for ofbiz productionRunTaskReturnMaterial method',
  args:{workEffortId: {type: GraphQLString},productId: {type: GraphQLString},quantity: {type: GraphQLFloat},lotId: {type: GraphQLString},inventoryItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/productionRunTaskReturnMaterial?workEffortId=${args.workEffortId}productId=${args.productId}quantity=${args.quantity}lotId=${args.lotId}inventoryItemTypeId=${args.inventoryItemTypeId}`, null, req);
  }
};
export {productionRunTaskReturnMaterial};


const quickChangeProductionRunStatus = {
  type: GraphQLString,
  description: 'mutation for ofbiz quickChangeProductionRunStatus method',
  args:{statusId: {type: GraphQLString},productionRunId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/quickChangeProductionRunStatus?statusId=${args.statusId}productionRunId=${args.productionRunId}`, null, req);
  }
};
export {quickChangeProductionRunStatus};


const quickRunAllProductionRunTasks = {
  type: GraphQLString,
  description: 'mutation for ofbiz quickRunAllProductionRunTasks method',
  args:{productionRunId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/quickRunAllProductionRunTasks?productionRunId=${args.productionRunId}`, null, req);
  }
};
export {quickRunAllProductionRunTasks};


const quickRunProductionRunTask = {
  type: GraphQLString,
  description: 'mutation for ofbiz quickRunProductionRunTask method',
  args:{productionRunId: {type: GraphQLString},taskId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/quickRunProductionRunTask?productionRunId=${args.productionRunId}taskId=${args.taskId}`, null, req);
  }
};
export {quickRunProductionRunTask};


const quickStartAllProductionRunTasks = {
  type: GraphQLString,
  description: 'mutation for ofbiz quickStartAllProductionRunTasks method',
  args:{productionRunId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/quickStartAllProductionRunTasks?productionRunId=${args.productionRunId}`, null, req);
  }
};
export {quickStartAllProductionRunTasks};


const updateProductionRun = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductionRun method',
  args:{productionRunId: {type: GraphQLString},quantity: {type: GraphQLFloat},facilityId: {type: GraphQLString},estimatedStartDate: {type: GraphQLString},description: {type: GraphQLString},workEffortName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/updateProductionRun?productionRunId=${args.productionRunId}quantity=${args.quantity}facilityId=${args.facilityId}estimatedStartDate=${args.estimatedStartDate}description=${args.description}workEffortName=${args.workEffortName}`, null, req);
  }
};
export {updateProductionRun};


const updateProductionRunComponent = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductionRunComponent method',
  args:{productId: {type: GraphQLString},productionRunId: {type: GraphQLString},workEffortId: {type: GraphQLString},estimatedQuantity: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/updateProductionRunComponent?productId=${args.productId}productionRunId=${args.productionRunId}workEffortId=${args.workEffortId}estimatedQuantity=${args.estimatedQuantity}`, null, req);
  }
};
export {updateProductionRunComponent};


const updateProductionRunTask = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductionRunTask method',
  args:{productionRunTaskId: {type: GraphQLString},productionRunId: {type: GraphQLString},fromDate: {type: GraphQLString},addSetupTime: {type: GraphQLFloat},comments: {type: GraphQLString},issueRequiredComponents: {type: GraphQLBoolean},componentsLocationMap: {type: GraphQLString},addQuantityRejected: {type: GraphQLFloat},addTaskTime: {type: GraphQLFloat},partyId: {type: GraphQLString},addQuantityProduced: {type: GraphQLFloat},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingProductionRun/updateProductionRunTask?productionRunTaskId=${args.productionRunTaskId}productionRunId=${args.productionRunId}fromDate=${args.fromDate}addSetupTime=${args.addSetupTime}comments=${args.comments}issueRequiredComponents=${args.issueRequiredComponents}componentsLocationMap=${args.componentsLocationMap}addQuantityRejected=${args.addQuantityRejected}addTaskTime=${args.addTaskTime}partyId=${args.partyId}addQuantityProduced=${args.addQuantityProduced}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateProductionRunTask};
