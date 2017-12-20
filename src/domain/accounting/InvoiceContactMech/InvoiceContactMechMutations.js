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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createInvoiceContactMech = {
  type: ResopnseType,
  description: 'mutation for ofbiz createInvoiceContactMech method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/invoice/invoiceContactMechs/add?`, null, req);
  }
};
export {createInvoiceContactMech};


const deleteInvoiceContactMechByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteInvoiceContactMechByIdUpdated method',
  args:{invoiceContactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/invoice/invoiceContactMechs/${args.invoiceContactMechId}?`, null, req);
  }
};
export {deleteInvoiceContactMechByIdUpdated};


const updateInvoiceContactMech = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateInvoiceContactMech method',
  args:{invoiceContactMechToBeUpdated: {type: InvoiceContactMechInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/invoice/invoiceContactMechs/${args.nullVal}?`, args.invoiceContactMechToBeUpdated, req);
  }
};
export {updateInvoiceContactMech};
