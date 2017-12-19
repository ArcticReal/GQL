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
import {InvoiceTypeAttrInputType} from '../../accounting/InvoiceTypeAttr/InvoiceTypeAttrInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createInvoiceTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz createInvoiceTypeAttr method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/invoice/invoiceTypeAttrs/add?`, null, req);
  }
};
export {createInvoiceTypeAttr};


const updateInvoiceTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateInvoiceTypeAttr method',
  args:{invoiceTypeAttrToBeUpdated: {type: InvoiceTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/invoice/invoiceTypeAttrs/${args.attrName}?`, args.invoiceTypeAttrToBeUpdated, req);
  }
};
export {updateInvoiceTypeAttr};


const deleteInvoiceTypeAttrByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteInvoiceTypeAttrByIdUpdated method',
  args:{invoiceTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/invoice/invoiceTypeAttrs/${args.invoiceTypeAttrId}?`, null, req);
  }
};
export {deleteInvoiceTypeAttrByIdUpdated};
