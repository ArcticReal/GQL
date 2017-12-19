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
import {InvoiceAttributeInputType} from '../../accounting/InvoiceAttribute/InvoiceAttributeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createInvoiceAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz createInvoiceAttribute method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/invoice/invoiceAttributes/add?`, null, req);
  }
};
export {createInvoiceAttribute};


const updateInvoiceAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateInvoiceAttribute method',
  args:{invoiceAttributeToBeUpdated: {type: InvoiceAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/invoice/invoiceAttributes/${args.attrName}?`, args.invoiceAttributeToBeUpdated, req);
  }
};
export {updateInvoiceAttribute};


const deleteInvoiceAttributeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteInvoiceAttributeByIdUpdated method',
  args:{invoiceAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/invoice/invoiceAttributes/${args.invoiceAttributeId}?`, null, req);
  }
};
export {deleteInvoiceAttributeByIdUpdated};
