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
import {InvoiceContentInputType} from '../../accounting/InvoiceContent/InvoiceContentInputType.js';
import {InvoiceContentResponseType} from '../../accounting/InvoiceContent/InvoiceContentResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createInvoiceContent = {
  type: InvoiceContentResponseType,
  description: 'mutation for ofbiz createInvoiceContent method',
  args:{invoiceContentToBeAdded: {type: InvoiceContentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/invoice/invoiceContents/add?`, args.invoiceContentToBeAdded, req);
  }
};
export {createInvoiceContent};


const deleteInvoiceContentByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteInvoiceContentByIdUpdated method',
  args:{invoiceContentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/invoice/invoiceContents/${args.invoiceContentId}?`, null, req);
  }
};
export {deleteInvoiceContentByIdUpdated};


const updateInvoiceContent = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateInvoiceContent method',
  args:{invoiceContentToBeUpdated: {type: InvoiceContentInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/invoice/invoiceContents/${args.nullVal}?`, args.invoiceContentToBeUpdated, req);
  }
};
export {updateInvoiceContent};
