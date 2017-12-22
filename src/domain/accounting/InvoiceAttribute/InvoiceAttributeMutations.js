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
import {InvoiceAttributeResponseType} from '../../accounting/InvoiceAttribute/InvoiceAttributeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createInvoiceAttribute = {
  type: InvoiceAttributeResponseType,
  description: 'mutation for ofbiz createInvoiceAttribute method',
  args:{invoiceAttributeToBeAdded: {type: InvoiceAttributeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/invoice/invoiceAttributes/add?`, args.invoiceAttributeToBeAdded, req);
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
