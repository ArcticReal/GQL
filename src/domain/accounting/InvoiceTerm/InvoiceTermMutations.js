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
import {InvoiceTermInputType} from '../../accounting/InvoiceTerm/InvoiceTermInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createInvoiceTerm = {
  type: GraphQLString,
  description: 'mutation for ofbiz createInvoiceTerm method',
  args:{invoiceTermToBeAdded: {type: InvoiceTermInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/invoice/invoiceTerms/add?`, args.invoiceTermToBeAdded, req);
  }
};
export {createInvoiceTerm};


const updateInvoiceTerm = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateInvoiceTerm method',
  args:{invoiceTermToBeUpdated: {type: InvoiceTermInputType},invoiceTermId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/invoice/invoiceTerms/${args.invoiceTermId}?`, args.invoiceTermToBeUpdated, req);
  }
};
export {updateInvoiceTerm};


const deleteInvoiceTermByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteInvoiceTermByIdUpdated method',
  args:{invoiceTermId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/invoice/invoiceTerms/${args.invoiceTermId}?`, null, req);
  }
};
export {deleteInvoiceTermByIdUpdated};
