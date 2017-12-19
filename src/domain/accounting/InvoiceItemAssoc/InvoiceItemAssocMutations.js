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
import {InvoiceItemAssocInputType} from '../../accounting/InvoiceItemAssoc/InvoiceItemAssocInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createInvoiceItemAssoc = {
  type: GraphQLString,
  description: 'mutation for ofbiz createInvoiceItemAssoc method',
  args:{invoiceItemAssocToBeAdded: {type: InvoiceItemAssocInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/invoice/invoiceItemAssocs/add?`, args.invoiceItemAssocToBeAdded, req);
  }
};
export {createInvoiceItemAssoc};


const deleteInvoiceItemAssocByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteInvoiceItemAssocByIdUpdated method',
  args:{invoiceItemAssocId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/invoice/invoiceItemAssocs/${args.invoiceItemAssocId}?`, null, req);
  }
};
export {deleteInvoiceItemAssocByIdUpdated};


const updateInvoiceItemAssoc = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateInvoiceItemAssoc method',
  args:{invoiceItemAssocToBeUpdated: {type: InvoiceItemAssocInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/invoice/invoiceItemAssocs/${args.nullVal}?`, args.invoiceItemAssocToBeUpdated, req);
  }
};
export {updateInvoiceItemAssoc};
