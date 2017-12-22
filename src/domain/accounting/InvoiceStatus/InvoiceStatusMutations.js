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
import {InvoiceStatusInputType} from '../../accounting/InvoiceStatus/InvoiceStatusInputType.js';
import {InvoiceStatusResponseType} from '../../accounting/InvoiceStatus/InvoiceStatusResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createInvoiceStatus = {
  type: InvoiceStatusResponseType,
  description: 'mutation for ofbiz createInvoiceStatus method',
  args:{invoiceStatusToBeAdded: {type: InvoiceStatusInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/invoice/invoiceStatuss/add?`, args.invoiceStatusToBeAdded, req);
  }
};
export {createInvoiceStatus};


const deleteInvoiceStatusByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteInvoiceStatusByIdUpdated method',
  args:{invoiceStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/invoice/invoiceStatuss/${args.invoiceStatusId}?`, null, req);
  }
};
export {deleteInvoiceStatusByIdUpdated};


const updateInvoiceStatus = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateInvoiceStatus method',
  args:{invoiceStatusToBeUpdated: {type: InvoiceStatusInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/invoice/invoiceStatuss/${args.nullVal}?`, args.invoiceStatusToBeUpdated, req);
  }
};
export {updateInvoiceStatus};
