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


const calcBillingAccountBalance = {
  type: ResponseType,
  description: 'mutation for ofbiz calcBillingAccountBalance method',
  args:{billingAccountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBilling/calcBillingAccountBalance?billingAccountId=${args.billingAccountId}`, null, req);
  }
};
export {calcBillingAccountBalance};


const createBillingAccount = {
  type: ResponseType,
  description: 'mutation for ofbiz createBillingAccount method',
  args:{fromDate: {type: GraphQLString},accountLimit: {type: GraphQLFloat},externalAccountId: {type: GraphQLString},accountCurrencyUomId: {type: GraphQLString},description: {type: GraphQLString},contactMechId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBilling/createBillingAccount?fromDate=${args.fromDate}accountLimit=${args.accountLimit}externalAccountId=${args.externalAccountId}accountCurrencyUomId=${args.accountCurrencyUomId}description=${args.description}contactMechId=${args.contactMechId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createBillingAccount};


const createBillingAccountAndRole = {
  type: ResponseType,
  description: 'mutation for ofbiz createBillingAccountAndRole method',
  args:{roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString},fromDate: {type: GraphQLString},accountLimit: {type: GraphQLFloat},externalAccountId: {type: GraphQLString},accountCurrencyUomId: {type: GraphQLString},description: {type: GraphQLString},billingAccountId: {type: GraphQLString},contactMechId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBilling/createBillingAccountAndRole?roleTypeId=${args.roleTypeId}partyId=${args.partyId}fromDate=${args.fromDate}accountLimit=${args.accountLimit}externalAccountId=${args.externalAccountId}accountCurrencyUomId=${args.accountCurrencyUomId}description=${args.description}billingAccountId=${args.billingAccountId}contactMechId=${args.contactMechId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createBillingAccountAndRole};


const createBillingAccountRole = {
  type: ResponseType,
  description: 'mutation for ofbiz createBillingAccountRole method',
  args:{roleTypeId: {type: GraphQLString},billingAccountId: {type: GraphQLString},partyId: {type: GraphQLString},fromDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBilling/createBillingAccountRole?roleTypeId=${args.roleTypeId}billingAccountId=${args.billingAccountId}partyId=${args.partyId}fromDate=${args.fromDate}thruDate=${args.thruDate}`, null, req);
  }
};
export {createBillingAccountRole};


const createBillingAccountTerm = {
  type: ResponseType,
  description: 'mutation for ofbiz createBillingAccountTerm method',
  args:{termTypeId: {type: GraphQLString},billingAccountId: {type: GraphQLString},termDays: {type: GraphQLInt},uomId: {type: GraphQLString},termValue: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBilling/createBillingAccountTerm?termTypeId=${args.termTypeId}billingAccountId=${args.billingAccountId}termDays=${args.termDays}uomId=${args.uomId}termValue=${args.termValue}`, null, req);
  }
};
export {createBillingAccountTerm};


const removeBillingAccountRole = {
  type: ResponseType,
  description: 'mutation for ofbiz removeBillingAccountRole method',
  args:{fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},billingAccountId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBilling/removeBillingAccountRole?fromDate=${args.fromDate}roleTypeId=${args.roleTypeId}billingAccountId=${args.billingAccountId}partyId=${args.partyId}`, null, req);
  }
};
export {removeBillingAccountRole};


const removeBillingAccountTerm = {
  type: ResponseType,
  description: 'mutation for ofbiz removeBillingAccountTerm method',
  args:{billingAccountTermId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBilling/removeBillingAccountTerm?billingAccountTermId=${args.billingAccountTermId}`, null, req);
  }
};
export {removeBillingAccountTerm};


const updateBillingAccount = {
  type: ResponseType,
  description: 'mutation for ofbiz updateBillingAccount method',
  args:{billingAccountId: {type: GraphQLString},fromDate: {type: GraphQLString},accountLimit: {type: GraphQLFloat},externalAccountId: {type: GraphQLString},accountCurrencyUomId: {type: GraphQLString},description: {type: GraphQLString},contactMechId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBilling/updateBillingAccount?billingAccountId=${args.billingAccountId}fromDate=${args.fromDate}accountLimit=${args.accountLimit}externalAccountId=${args.externalAccountId}accountCurrencyUomId=${args.accountCurrencyUomId}description=${args.description}contactMechId=${args.contactMechId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateBillingAccount};


const updateBillingAccountRole = {
  type: ResponseType,
  description: 'mutation for ofbiz updateBillingAccountRole method',
  args:{fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},billingAccountId: {type: GraphQLString},partyId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBilling/updateBillingAccountRole?fromDate=${args.fromDate}roleTypeId=${args.roleTypeId}billingAccountId=${args.billingAccountId}partyId=${args.partyId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateBillingAccountRole};


const updateBillingAccountTerm = {
  type: ResponseType,
  description: 'mutation for ofbiz updateBillingAccountTerm method',
  args:{billingAccountTermId: {type: GraphQLString},termTypeId: {type: GraphQLString},billingAccountId: {type: GraphQLString},termDays: {type: GraphQLInt},uomId: {type: GraphQLString},termValue: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBilling/updateBillingAccountTerm?billingAccountTermId=${args.billingAccountTermId}termTypeId=${args.termTypeId}billingAccountId=${args.billingAccountId}termDays=${args.termDays}uomId=${args.uomId}termValue=${args.termValue}`, null, req);
  }
};
export {updateBillingAccountTerm};
