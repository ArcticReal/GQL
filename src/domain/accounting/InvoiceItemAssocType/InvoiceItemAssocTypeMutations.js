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
import {InvoiceItemAssocTypeInputType} from '../../accounting/InvoiceItemAssocType/InvoiceItemAssocTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createInvoiceItemAssocType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createInvoiceItemAssocType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/invoice/invoiceItemAssocTypes/add?`, null, req);
  }
};
export {createInvoiceItemAssocType};


const updateInvoiceItemAssocType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateInvoiceItemAssocType method',
  args:{invoiceItemAssocTypeToBeUpdated: {type: InvoiceItemAssocTypeInputType},invoiceItemAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/invoice/invoiceItemAssocTypes/${args.invoiceItemAssocTypeId}?`, args.invoiceItemAssocTypeToBeUpdated, req);
  }
};
export {updateInvoiceItemAssocType};


const deleteInvoiceItemAssocTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteInvoiceItemAssocTypeByIdUpdated method',
  args:{invoiceItemAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/invoice/invoiceItemAssocTypes/${args.invoiceItemAssocTypeId}?`, null, req);
  }
};
export {deleteInvoiceItemAssocTypeByIdUpdated};
