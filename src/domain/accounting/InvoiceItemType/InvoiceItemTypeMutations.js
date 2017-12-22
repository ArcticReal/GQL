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
import {InvoiceItemTypeInputType} from '../../accounting/InvoiceItemType/InvoiceItemTypeInputType.js';
import {InvoiceItemTypeResponseType} from '../../accounting/InvoiceItemType/InvoiceItemTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createInvoiceItemType = {
  type: InvoiceItemTypeResponseType,
  description: 'mutation for ofbiz createInvoiceItemType method',
  args:{invoiceItemTypeToBeAdded: {type: InvoiceItemTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/invoice/invoiceItemTypes/add?`, args.invoiceItemTypeToBeAdded, req);
  }
};
export {createInvoiceItemType};


const updateInvoiceItemType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateInvoiceItemType method',
  args:{invoiceItemTypeToBeUpdated: {type: InvoiceItemTypeInputType},invoiceItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/invoice/invoiceItemTypes/${args.invoiceItemTypeId}?`, args.invoiceItemTypeToBeUpdated, req);
  }
};
export {updateInvoiceItemType};


const deleteInvoiceItemTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteInvoiceItemTypeByIdUpdated method',
  args:{invoiceItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/invoice/invoiceItemTypes/${args.invoiceItemTypeId}?`, null, req);
  }
};
export {deleteInvoiceItemTypeByIdUpdated};
