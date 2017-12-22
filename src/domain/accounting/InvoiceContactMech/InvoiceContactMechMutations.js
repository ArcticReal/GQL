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
import {InvoiceContactMechInputType} from '../../accounting/InvoiceContactMech/InvoiceContactMechInputType.js';
import {InvoiceContactMechResponseType} from '../../accounting/InvoiceContactMech/InvoiceContactMechResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createInvoiceContactMech = {
  type: InvoiceContactMechResponseType,
  description: 'mutation for ofbiz createInvoiceContactMech method',
  args:{invoiceContactMechToBeAdded: {type: InvoiceContactMechInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/invoice/invoiceContactMechs/add?`, args.invoiceContactMechToBeAdded, req);
  }
};
export {createInvoiceContactMech};


const deleteInvoiceContactMechByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteInvoiceContactMechByIdUpdated method',
  args:{invoiceContactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/invoice/invoiceContactMechs/${args.invoiceContactMechId}?`, null, req);
  }
};
export {deleteInvoiceContactMechByIdUpdated};


const updateInvoiceContactMech = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateInvoiceContactMech method',
  args:{invoiceContactMechToBeUpdated: {type: InvoiceContactMechInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/invoice/invoiceContactMechs/${args.nullVal}?`, args.invoiceContactMechToBeUpdated, req);
  }
};
export {updateInvoiceContactMech};
