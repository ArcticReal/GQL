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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createInvoiceContent = {
  type: GraphQLString,
  description: 'mutation for ofbiz createInvoiceContent method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/invoice/invoiceContents/add?`, null, req);
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
