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
import {InvoiceNoteInputType} from '../../accounting/InvoiceNote/InvoiceNoteInputType.js';
import {InvoiceNoteResponseType} from '../../accounting/InvoiceNote/InvoiceNoteResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createInvoiceNote = {
  type: InvoiceNoteResponseType,
  description: 'mutation for ofbiz createInvoiceNote method',
  args:{invoiceNoteToBeAdded: {type: InvoiceNoteInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/invoice/invoiceNotes/add?`, args.invoiceNoteToBeAdded, req);
  }
};
export {createInvoiceNote};


const deleteInvoiceNoteByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteInvoiceNoteByIdUpdated method',
  args:{invoiceNoteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/invoice/invoiceNotes/${args.invoiceNoteId}?`, null, req);
  }
};
export {deleteInvoiceNoteByIdUpdated};


const updateInvoiceNote = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateInvoiceNote method',
  args:{invoiceNoteToBeUpdated: {type: InvoiceNoteInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/invoice/invoiceNotes/${args.nullVal}?`, args.invoiceNoteToBeUpdated, req);
  }
};
export {updateInvoiceNote};
