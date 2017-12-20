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


const createRateType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createRateType method',
  args:{rateTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingRate/createRateType?rateTypeId=${args.rateTypeId}description=${args.description}`, null, req);
  }
};
export {createRateType};


const deletePartyRate = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePartyRate method',
  args:{fromDate: {type: GraphQLString},rateTypeId: {type: GraphQLString},partyId: {type: GraphQLString},rateAmountFromDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingRate/deletePartyRate?fromDate=${args.fromDate}rateTypeId=${args.rateTypeId}partyId=${args.partyId}rateAmountFromDate=${args.rateAmountFromDate}`, null, req);
  }
};
export {deletePartyRate};


const deleteRateAmount = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteRateAmount method',
  args:{fromDate: {type: GraphQLString},rateTypeId: {type: GraphQLString},workEffortId: {type: GraphQLString},periodTypeId: {type: GraphQLString},emplPositionTypeId: {type: GraphQLString},rateCurrencyUomId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingRate/deleteRateAmount?fromDate=${args.fromDate}rateTypeId=${args.rateTypeId}workEffortId=${args.workEffortId}periodTypeId=${args.periodTypeId}emplPositionTypeId=${args.emplPositionTypeId}rateCurrencyUomId=${args.rateCurrencyUomId}partyId=${args.partyId}`, null, req);
  }
};
export {deleteRateAmount};


const deleteRateType = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteRateType method',
  args:{rateTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingRate/deleteRateType?rateTypeId=${args.rateTypeId}`, null, req);
  }
};
export {deleteRateType};


const filterRateAmountList = {
  type: ResopnseType,
  description: 'mutation for ofbiz filterRateAmountList method',
  args:{workEffortId: {type: GraphQLString},fromDate: {type: GraphQLString},rateTypeId: {type: GraphQLString},rateAmount: {type: GraphQLFloat},periodTypeId: {type: GraphQLString},emplPositionTypeId: {type: GraphQLString},rateCurrencyUomId: {type: GraphQLString},partyId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingRate/filterRateAmountList?workEffortId=${args.workEffortId}fromDate=${args.fromDate}rateTypeId=${args.rateTypeId}ratesList=${args.ratesList}rateAmount=${args.rateAmount}periodTypeId=${args.periodTypeId}emplPositionTypeId=${args.emplPositionTypeId}rateCurrencyUomId=${args.rateCurrencyUomId}partyId=${args.partyId}thruDate=${args.thruDate}`, null, req);
  }
};
export {filterRateAmountList};


const getRateAmount = {
  type: ResopnseType,
  description: 'mutation for ofbiz getRateAmount method',
  args:{rateTypeId: {type: GraphQLString},workEffortId: {type: GraphQLString},fromDate: {type: GraphQLString},periodTypeId: {type: GraphQLString},emplPositionTypeId: {type: GraphQLString},rateCurrencyUomId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingRate/getRateAmount?rateTypeId=${args.rateTypeId}workEffortId=${args.workEffortId}fromDate=${args.fromDate}periodTypeId=${args.periodTypeId}emplPositionTypeId=${args.emplPositionTypeId}rateCurrencyUomId=${args.rateCurrencyUomId}partyId=${args.partyId}`, null, req);
  }
};
export {getRateAmount};


const getRatesAmountsFromEmplPositionTypeId = {
  type: ResopnseType,
  description: 'mutation for ofbiz getRatesAmountsFromEmplPositionTypeId method',
  args:{emplPositionTypeId: {type: GraphQLString},workEffortId: {type: GraphQLString},fromDate: {type: GraphQLString},rateTypeId: {type: GraphQLString},periodTypeId: {type: GraphQLString},rateCurrencyUomId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingRate/getRatesAmountsFromEmplPositionTypeId?emplPositionTypeId=${args.emplPositionTypeId}workEffortId=${args.workEffortId}fromDate=${args.fromDate}rateTypeId=${args.rateTypeId}periodTypeId=${args.periodTypeId}rateCurrencyUomId=${args.rateCurrencyUomId}partyId=${args.partyId}`, null, req);
  }
};
export {getRatesAmountsFromEmplPositionTypeId};


const getRatesAmountsFromPartyId = {
  type: ResopnseType,
  description: 'mutation for ofbiz getRatesAmountsFromPartyId method',
  args:{partyId: {type: GraphQLString},workEffortId: {type: GraphQLString},fromDate: {type: GraphQLString},rateTypeId: {type: GraphQLString},periodTypeId: {type: GraphQLString},emplPositionTypeId: {type: GraphQLString},rateCurrencyUomId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingRate/getRatesAmountsFromPartyId?partyId=${args.partyId}workEffortId=${args.workEffortId}fromDate=${args.fromDate}rateTypeId=${args.rateTypeId}periodTypeId=${args.periodTypeId}emplPositionTypeId=${args.emplPositionTypeId}rateCurrencyUomId=${args.rateCurrencyUomId}`, null, req);
  }
};
export {getRatesAmountsFromPartyId};


const getRatesAmountsFromWorkEffortId = {
  type: ResopnseType,
  description: 'mutation for ofbiz getRatesAmountsFromWorkEffortId method',
  args:{workEffortId: {type: GraphQLString},fromDate: {type: GraphQLString},rateTypeId: {type: GraphQLString},periodTypeId: {type: GraphQLString},emplPositionTypeId: {type: GraphQLString},rateCurrencyUomId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingRate/getRatesAmountsFromWorkEffortId?workEffortId=${args.workEffortId}fromDate=${args.fromDate}rateTypeId=${args.rateTypeId}periodTypeId=${args.periodTypeId}emplPositionTypeId=${args.emplPositionTypeId}rateCurrencyUomId=${args.rateCurrencyUomId}partyId=${args.partyId}`, null, req);
  }
};
export {getRatesAmountsFromWorkEffortId};


const updatePartyRate = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePartyRate method',
  args:{rateTypeId: {type: GraphQLString},periodTypeId: {type: GraphQLString},partyId: {type: GraphQLString},fromDate: {type: GraphQLString},percentageUsed: {type: GraphQLFloat},defaultRate: {type: GraphQLString},rateAmount: {type: GraphQLFloat},organizationPartyId: {type: GraphQLString},rateCurrencyUomId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingRate/updatePartyRate?rateTypeId=${args.rateTypeId}periodTypeId=${args.periodTypeId}partyId=${args.partyId}fromDate=${args.fromDate}percentageUsed=${args.percentageUsed}defaultRate=${args.defaultRate}rateAmount=${args.rateAmount}organizationPartyId=${args.organizationPartyId}rateCurrencyUomId=${args.rateCurrencyUomId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updatePartyRate};


const updateRateAmount = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateRateAmount method',
  args:{rateTypeId: {type: GraphQLString},rateAmount: {type: GraphQLFloat},workEffortId: {type: GraphQLString},fromDate: {type: GraphQLString},periodTypeId: {type: GraphQLString},emplPositionTypeId: {type: GraphQLString},rateCurrencyUomId: {type: GraphQLString},partyId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingRate/updateRateAmount?rateTypeId=${args.rateTypeId}rateAmount=${args.rateAmount}workEffortId=${args.workEffortId}fromDate=${args.fromDate}periodTypeId=${args.periodTypeId}emplPositionTypeId=${args.emplPositionTypeId}rateCurrencyUomId=${args.rateCurrencyUomId}partyId=${args.partyId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateRateAmount};


const updateRateType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateRateType method',
  args:{rateTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingRate/updateRateType?rateTypeId=${args.rateTypeId}description=${args.description}`, null, req);
  }
};
export {updateRateType};
