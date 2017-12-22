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
import {InvoiceItemTypeMapResponseType} from '../../accounting/InvoiceItemTypeMap/InvoiceItemTypeMapResponseType.js';
import {InvoiceItemTypeMapInputType} from '../../accounting/InvoiceItemTypeMap/InvoiceItemTypeMapInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createInvoiceItemTypeMap = {
  type: InvoiceItemTypeMapResponseType,
  description: 'mutation for ofbiz createInvoiceItemTypeMap method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/invoice/invoiceItemTypeMaps/add?`, null, req);
  }
};
export {createInvoiceItemTypeMap};


const updateInvoiceItemTypeMap = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateInvoiceItemTypeMap method',
  args:{invoiceItemTypeMapToBeUpdated: {type: InvoiceItemTypeMapInputType},invoiceItemMapKey: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/invoice/invoiceItemTypeMaps/${args.invoiceItemMapKey}?`, args.invoiceItemTypeMapToBeUpdated, req);
  }
};
export {updateInvoiceItemTypeMap};


const deleteInvoiceItemTypeMapByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteInvoiceItemTypeMapByIdUpdated method',
  args:{invoiceItemTypeMapId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/invoice/invoiceItemTypeMaps/${args.invoiceItemTypeMapId}?`, null, req);
  }
};
export {deleteInvoiceItemTypeMapByIdUpdated};
