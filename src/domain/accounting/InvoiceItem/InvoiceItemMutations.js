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
import {InvoiceItemResponseType} from '../../accounting/InvoiceItem/InvoiceItemResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createInvoiceItem = {
  type: InvoiceItemResponseType,
  description: 'mutation for ofbiz createInvoiceItem method',
  args:{invoiceItemToBeAdded: {type: InvoiceItemInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/invoice/invoiceItems/add?`, args.invoiceItemToBeAdded, req);
  }
};
export {createInvoiceItem};


const deleteInvoiceItemByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteInvoiceItemByIdUpdated method',
  args:{invoiceItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/invoice/invoiceItems/${args.invoiceItemId}?`, null, req);
  }
};
export {deleteInvoiceItemByIdUpdated};


const updateInvoiceItem = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateInvoiceItem method',
  args:{invoiceItemToBeUpdated: {type: InvoiceItemInputType},invoiceItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/invoice/invoiceItems/${args.invoiceItemSeqId}?`, args.invoiceItemToBeUpdated, req);
  }
};
export {updateInvoiceItem};
