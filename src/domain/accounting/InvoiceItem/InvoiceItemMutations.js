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
import {InvoiceItemInputType} from '../../accounting/InvoiceItem/InvoiceItemInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createInvoiceItem = {
  type: ResopnseType,
  description: 'mutation for ofbiz createInvoiceItem method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/invoice/invoiceItems/add?`, null, req);
  }
};
export {createInvoiceItem};


const deleteInvoiceItemByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteInvoiceItemByIdUpdated method',
  args:{invoiceItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/invoice/invoiceItems/${args.invoiceItemId}?`, null, req);
  }
};
export {deleteInvoiceItemByIdUpdated};


const updateInvoiceItem = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateInvoiceItem method',
  args:{invoiceItemToBeUpdated: {type: InvoiceItemInputType},invoiceItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/invoice/invoiceItems/${args.invoiceItemSeqId}?`, args.invoiceItemToBeUpdated, req);
  }
};
export {updateInvoiceItem};
