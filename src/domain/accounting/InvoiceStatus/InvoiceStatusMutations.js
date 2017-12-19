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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createInvoiceStatus = {
  type: GraphQLString,
  description: 'mutation for ofbiz createInvoiceStatus method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/invoice/invoiceStatuss/add?`, null, req);
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
