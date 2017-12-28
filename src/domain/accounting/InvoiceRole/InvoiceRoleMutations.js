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
import {InvoiceRoleInputType} from '../../accounting/InvoiceRole/InvoiceRoleInputType.js';
import {InvoiceRoleResponseType} from '../../accounting/InvoiceRole/InvoiceRoleResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createInvoiceRole = {
  type: InvoiceRoleResponseType,
  description: 'mutation for ofbiz createInvoiceRole method',
  args:{invoiceRoleToBeAdded: {type: InvoiceRoleInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/invoice/invoiceRoles/add?`, args.invoiceRoleToBeAdded, req);
  }
};
export {createInvoiceRole};


const deleteInvoiceRoleByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteInvoiceRoleByIdUpdated method',
  args:{invoiceRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/invoice/invoiceRoles/${args.invoiceRoleId}?`, null, req);
  }
};
export {deleteInvoiceRoleByIdUpdated};


const updateInvoiceRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateInvoiceRole method',
  args:{invoiceRoleToBeUpdated: {type: InvoiceRoleInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/invoice/invoiceRoles/${args.roleTypeId}?`, args.invoiceRoleToBeUpdated, req);
  }
};
export {updateInvoiceRole};
