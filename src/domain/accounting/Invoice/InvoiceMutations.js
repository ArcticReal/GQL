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
import {InvoiceInputType} from '../../accounting/Invoice/InvoiceInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createInvoice = {
  type: ResopnseType,
  description: 'mutation for ofbiz createInvoice method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/invoices/add?`, null, req);
  }
};
export {createInvoice};


const updateInvoice = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateInvoice method',
  args:{invoiceToBeUpdated: {type: InvoiceInputType},invoiceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/invoices/${args.invoiceId}?`, args.invoiceToBeUpdated, req);
  }
};
export {updateInvoice};


const deleteInvoiceByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteInvoiceByIdUpdated method',
  args:{invoiceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/invoices/${args.invoiceId}?`, null, req);
  }
};
export {deleteInvoiceByIdUpdated};
