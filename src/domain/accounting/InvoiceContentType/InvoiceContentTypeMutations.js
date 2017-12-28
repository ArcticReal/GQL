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
import {InvoiceContentTypeInputType} from '../../accounting/InvoiceContentType/InvoiceContentTypeInputType.js';
import {InvoiceContentTypeResponseType} from '../../accounting/InvoiceContentType/InvoiceContentTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createInvoiceContentType = {
  type: InvoiceContentTypeResponseType,
  description: 'mutation for ofbiz createInvoiceContentType method',
  args:{invoiceContentTypeToBeAdded: {type: InvoiceContentTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/invoice/invoiceContentTypes/add?`, args.invoiceContentTypeToBeAdded, req);
  }
};
export {createInvoiceContentType};


const updateInvoiceContentType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateInvoiceContentType method',
  args:{invoiceContentTypeToBeUpdated: {type: InvoiceContentTypeInputType},invoiceContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/invoice/invoiceContentTypes/${args.invoiceContentTypeId}?`, args.invoiceContentTypeToBeUpdated, req);
  }
};
export {updateInvoiceContentType};


const deleteInvoiceContentTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteInvoiceContentTypeByIdUpdated method',
  args:{invoiceContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/invoice/invoiceContentTypes/${args.invoiceContentTypeId}?`, null, req);
  }
};
export {deleteInvoiceContentTypeByIdUpdated};
