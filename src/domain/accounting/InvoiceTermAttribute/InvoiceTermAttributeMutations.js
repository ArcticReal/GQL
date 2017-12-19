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
import {InvoiceTermAttributeInputType} from '../../accounting/InvoiceTermAttribute/InvoiceTermAttributeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createInvoiceTermAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz createInvoiceTermAttribute method',
  args:{invoiceTermAttributeToBeAdded: {type: InvoiceTermAttributeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/invoice/invoiceTermAttributes/add?`, args.invoiceTermAttributeToBeAdded, req);
  }
};
export {createInvoiceTermAttribute};


const updateInvoiceTermAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateInvoiceTermAttribute method',
  args:{invoiceTermAttributeToBeUpdated: {type: InvoiceTermAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/invoice/invoiceTermAttributes/${args.attrName}?`, args.invoiceTermAttributeToBeUpdated, req);
  }
};
export {updateInvoiceTermAttribute};


const deleteInvoiceTermAttributeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteInvoiceTermAttributeByIdUpdated method',
  args:{invoiceTermAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/invoice/invoiceTermAttributes/${args.invoiceTermAttributeId}?`, null, req);
  }
};
export {deleteInvoiceTermAttributeByIdUpdated};
