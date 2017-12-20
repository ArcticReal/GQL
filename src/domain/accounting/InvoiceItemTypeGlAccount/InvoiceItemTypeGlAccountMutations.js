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
import {InvoiceItemTypeGlAccountInputType} from '../../accounting/InvoiceItemTypeGlAccount/InvoiceItemTypeGlAccountInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createInvoiceItemTypeGlAccount = {
  type: ResopnseType,
  description: 'mutation for ofbiz createInvoiceItemTypeGlAccount method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/invoice/invoiceItemTypeGlAccounts/add?`, null, req);
  }
};
export {createInvoiceItemTypeGlAccount};


const deleteInvoiceItemTypeGlAccountByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteInvoiceItemTypeGlAccountByIdUpdated method',
  args:{invoiceItemTypeGlAccountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/invoice/invoiceItemTypeGlAccounts/${args.invoiceItemTypeGlAccountId}?`, null, req);
  }
};
export {deleteInvoiceItemTypeGlAccountByIdUpdated};


const updateInvoiceItemTypeGlAccount = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateInvoiceItemTypeGlAccount method',
  args:{invoiceItemTypeGlAccountToBeUpdated: {type: InvoiceItemTypeGlAccountInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/invoice/invoiceItemTypeGlAccounts/${args.nullVal}?`, args.invoiceItemTypeGlAccountToBeUpdated, req);
  }
};
export {updateInvoiceItemTypeGlAccount};
