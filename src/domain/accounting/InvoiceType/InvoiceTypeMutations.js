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
import {InvoiceTypeInputType} from '../../accounting/InvoiceType/InvoiceTypeInputType.js';
import {InvoiceTypeResponseType} from '../../accounting/InvoiceType/InvoiceTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createInvoiceType = {
  type: InvoiceTypeResponseType,
  description: 'mutation for ofbiz createInvoiceType method',
  args:{invoiceTypeToBeAdded: {type: InvoiceTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/invoice/invoiceTypes/add?`, args.invoiceTypeToBeAdded, req);
  }
};
export {createInvoiceType};


const updateInvoiceType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateInvoiceType method',
  args:{invoiceTypeToBeUpdated: {type: InvoiceTypeInputType},invoiceTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/invoice/invoiceTypes/${args.invoiceTypeId}?`, args.invoiceTypeToBeUpdated, req);
  }
};
export {updateInvoiceType};


const deleteInvoiceTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteInvoiceTypeByIdUpdated method',
  args:{invoiceTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/invoice/invoiceTypes/${args.invoiceTypeId}?`, null, req);
  }
};
export {deleteInvoiceTypeByIdUpdated};
