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


const acctgAgreementPermissionCheck = {
  type: ResopnseType,
  description: 'mutation for ofbiz acctgAgreementPermissionCheck method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPerm/acctgAgreementPermissionCheck?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {acctgAgreementPermissionCheck};


const acctgBasePermissionCheck = {
  type: ResopnseType,
  description: 'mutation for ofbiz acctgBasePermissionCheck method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPerm/acctgBasePermissionCheck?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {acctgBasePermissionCheck};


const acctgBillingAcctCheck = {
  type: ResopnseType,
  description: 'mutation for ofbiz acctgBillingAcctCheck method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPerm/acctgBillingAcctCheck?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {acctgBillingAcctCheck};


const acctgCommissionPermissionCheck = {
  type: ResopnseType,
  description: 'mutation for ofbiz acctgCommissionPermissionCheck method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPerm/acctgCommissionPermissionCheck?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {acctgCommissionPermissionCheck};


const acctgCostPermissionCheck = {
  type: ResopnseType,
  description: 'mutation for ofbiz acctgCostPermissionCheck method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPerm/acctgCostPermissionCheck?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {acctgCostPermissionCheck};


const acctgFinAcctPermissionCheck = {
  type: ResopnseType,
  description: 'mutation for ofbiz acctgFinAcctPermissionCheck method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPerm/acctgFinAcctPermissionCheck?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {acctgFinAcctPermissionCheck};


const acctgFxPermissionCheck = {
  type: ResopnseType,
  description: 'mutation for ofbiz acctgFxPermissionCheck method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPerm/acctgFxPermissionCheck?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {acctgFxPermissionCheck};


const acctgInvoicePermissionCheck = {
  type: ResopnseType,
  description: 'mutation for ofbiz acctgInvoicePermissionCheck method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPerm/acctgInvoicePermissionCheck?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {acctgInvoicePermissionCheck};


const acctgPaymentPermissionCheck = {
  type: ResopnseType,
  description: 'mutation for ofbiz acctgPaymentPermissionCheck method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPerm/acctgPaymentPermissionCheck?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {acctgPaymentPermissionCheck};


const acctgPrefPermissionCheck = {
  type: ResopnseType,
  description: 'mutation for ofbiz acctgPrefPermissionCheck method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPerm/acctgPrefPermissionCheck?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {acctgPrefPermissionCheck};


const acctgTransactionPermissionCheck = {
  type: ResopnseType,
  description: 'mutation for ofbiz acctgTransactionPermissionCheck method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPerm/acctgTransactionPermissionCheck?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {acctgTransactionPermissionCheck};


const basicGeneralLedgerPermissionCheck = {
  type: ResopnseType,
  description: 'mutation for ofbiz basicGeneralLedgerPermissionCheck method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPerm/basicGeneralLedgerPermissionCheck?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {basicGeneralLedgerPermissionCheck};


const fixedAssetPermissionCheck = {
  type: ResopnseType,
  description: 'mutation for ofbiz fixedAssetPermissionCheck method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPerm/fixedAssetPermissionCheck?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {fixedAssetPermissionCheck};
