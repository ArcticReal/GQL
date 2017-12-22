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
import {InvoiceItemAttributeResponseType} from '../../accounting/InvoiceItemAttribute/InvoiceItemAttributeResponseType.js';
import {InvoiceItemAttributeInputType} from '../../accounting/InvoiceItemAttribute/InvoiceItemAttributeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createInvoiceItemAttribute = {
  type: InvoiceItemAttributeResponseType,
  description: 'mutation for ofbiz createInvoiceItemAttribute method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/invoice/invoiceItemAttributes/add?`, null, req);
  }
};
export {createInvoiceItemAttribute};


const deleteInvoiceItemAttributeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteInvoiceItemAttributeByIdUpdated method',
  args:{invoiceItemAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/invoice/invoiceItemAttributes/${args.invoiceItemAttributeId}?`, null, req);
  }
};
export {deleteInvoiceItemAttributeByIdUpdated};


const updateInvoiceItemAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateInvoiceItemAttribute method',
  args:{invoiceItemAttributeToBeUpdated: {type: InvoiceItemAttributeInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/invoice/invoiceItemAttributes/${args.nullVal}?`, args.invoiceItemAttributeToBeUpdated, req);
  }
};
export {updateInvoiceItemAttribute};
