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


const createCostComponentCalc = {
  type: ResponseType,
  description: 'mutation for ofbiz createCostComponentCalc method',
  args:{costCustomMethodId: {type: GraphQLString},currencyUomId: {type: GraphQLString},variableCost: {type: GraphQLFloat},costGlAccountTypeId: {type: GraphQLString},fixedCost: {type: GraphQLFloat},description: {type: GraphQLString},offsettingGlAccountTypeId: {type: GraphQLString},perMilliSecond: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingCost/createCostComponentCalc?costCustomMethodId=${args.costCustomMethodId}currencyUomId=${args.currencyUomId}variableCost=${args.variableCost}costGlAccountTypeId=${args.costGlAccountTypeId}fixedCost=${args.fixedCost}description=${args.description}offsettingGlAccountTypeId=${args.offsettingGlAccountTypeId}perMilliSecond=${args.perMilliSecond}`, null, req);
  }
};
export {createCostComponentCalc};


const createProductAverageCost = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductAverageCost method',
  args:{facilityId: {type: GraphQLString},productId: {type: GraphQLString},productAverageCostTypeId: {type: GraphQLString},organizationPartyId: {type: GraphQLString},averageCost: {type: GraphQLFloat},fromDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingCost/createProductAverageCost?facilityId=${args.facilityId}productId=${args.productId}productAverageCostTypeId=${args.productAverageCostTypeId}organizationPartyId=${args.organizationPartyId}averageCost=${args.averageCost}fromDate=${args.fromDate}thruDate=${args.thruDate}`, null, req);
  }
};
export {createProductAverageCost};


const createWorkEffortCostCalc = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffortCostCalc method',
  args:{workEffortId: {type: GraphQLString},costComponentTypeId: {type: GraphQLString},fromDate: {type: GraphQLString},costComponentCalcId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingCost/createWorkEffortCostCalc?workEffortId=${args.workEffortId}costComponentTypeId=${args.costComponentTypeId}fromDate=${args.fromDate}costComponentCalcId=${args.costComponentCalcId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createWorkEffortCostCalc};


const deleteProductAverageCost = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductAverageCost method',
  args:{fromDate: {type: GraphQLString},facilityId: {type: GraphQLString},productId: {type: GraphQLString},productAverageCostTypeId: {type: GraphQLString},organizationPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingCost/deleteProductAverageCost?fromDate=${args.fromDate}facilityId=${args.facilityId}productId=${args.productId}productAverageCostTypeId=${args.productAverageCostTypeId}organizationPartyId=${args.organizationPartyId}`, null, req);
  }
};
export {deleteProductAverageCost};


const getProductAverageCost = {
  type: ResponseType,
  description: 'mutation for ofbiz getProductAverageCost method',
  args:{inventoryItem: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingCost/getProductAverageCost?inventoryItem=${args.inventoryItem}`, null, req);
  }
};
export {getProductAverageCost};


const removeCostComponentCalc = {
  type: ResponseType,
  description: 'mutation for ofbiz removeCostComponentCalc method',
  args:{costComponentCalcId: {type: GraphQLString},costCustomMethodId: {type: GraphQLString},currencyUomId: {type: GraphQLString},variableCost: {type: GraphQLFloat},costGlAccountTypeId: {type: GraphQLString},fixedCost: {type: GraphQLFloat},description: {type: GraphQLString},offsettingGlAccountTypeId: {type: GraphQLString},perMilliSecond: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingCost/removeCostComponentCalc?costComponentCalcId=${args.costComponentCalcId}costCustomMethodId=${args.costCustomMethodId}currencyUomId=${args.currencyUomId}variableCost=${args.variableCost}costGlAccountTypeId=${args.costGlAccountTypeId}fixedCost=${args.fixedCost}description=${args.description}offsettingGlAccountTypeId=${args.offsettingGlAccountTypeId}perMilliSecond=${args.perMilliSecond}`, null, req);
  }
};
export {removeCostComponentCalc};


const removeWorkEffortCostCalc = {
  type: ResponseType,
  description: 'mutation for ofbiz removeWorkEffortCostCalc method',
  args:{workEffortId: {type: GraphQLString},fromDate: {type: GraphQLString},costComponentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingCost/removeWorkEffortCostCalc?workEffortId=${args.workEffortId}fromDate=${args.fromDate}costComponentTypeId=${args.costComponentTypeId}`, null, req);
  }
};
export {removeWorkEffortCostCalc};


const updateCostComponentCalc = {
  type: ResponseType,
  description: 'mutation for ofbiz updateCostComponentCalc method',
  args:{costComponentCalcId: {type: GraphQLString},costCustomMethodId: {type: GraphQLString},currencyUomId: {type: GraphQLString},variableCost: {type: GraphQLFloat},costGlAccountTypeId: {type: GraphQLString},fixedCost: {type: GraphQLFloat},description: {type: GraphQLString},offsettingGlAccountTypeId: {type: GraphQLString},perMilliSecond: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingCost/updateCostComponentCalc?costComponentCalcId=${args.costComponentCalcId}costCustomMethodId=${args.costCustomMethodId}currencyUomId=${args.currencyUomId}variableCost=${args.variableCost}costGlAccountTypeId=${args.costGlAccountTypeId}fixedCost=${args.fixedCost}description=${args.description}offsettingGlAccountTypeId=${args.offsettingGlAccountTypeId}perMilliSecond=${args.perMilliSecond}`, null, req);
  }
};
export {updateCostComponentCalc};


const updateProductAverageCost = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductAverageCost method',
  args:{fromDate: {type: GraphQLString},facilityId: {type: GraphQLString},productId: {type: GraphQLString},productAverageCostTypeId: {type: GraphQLString},organizationPartyId: {type: GraphQLString},averageCost: {type: GraphQLFloat},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingCost/updateProductAverageCost?fromDate=${args.fromDate}facilityId=${args.facilityId}productId=${args.productId}productAverageCostTypeId=${args.productAverageCostTypeId}organizationPartyId=${args.organizationPartyId}averageCost=${args.averageCost}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateProductAverageCost};


const updateProductAverageCostOnReceiveInventory = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductAverageCostOnReceiveInventory method',
  args:{inventoryItemId: {type: GraphQLString},facilityId: {type: GraphQLString},productId: {type: GraphQLString},quantityAccepted: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingCost/updateProductAverageCostOnReceiveInventory?inventoryItemId=${args.inventoryItemId}facilityId=${args.facilityId}productId=${args.productId}quantityAccepted=${args.quantityAccepted}`, null, req);
  }
};
export {updateProductAverageCostOnReceiveInventory};
