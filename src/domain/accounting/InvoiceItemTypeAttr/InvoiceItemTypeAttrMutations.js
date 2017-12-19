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
import {InvoiceItemTypeAttrInputType} from '../../accounting/InvoiceItemTypeAttr/InvoiceItemTypeAttrInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createInvoiceItemTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz createInvoiceItemTypeAttr method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/invoice/invoiceItemTypeAttrs/add?`, null, req);
  }
};
export {createInvoiceItemTypeAttr};


const updateInvoiceItemTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateInvoiceItemTypeAttr method',
  args:{invoiceItemTypeAttrToBeUpdated: {type: InvoiceItemTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/invoice/invoiceItemTypeAttrs/${args.attrName}?`, args.invoiceItemTypeAttrToBeUpdated, req);
  }
};
export {updateInvoiceItemTypeAttr};


const deleteInvoiceItemTypeAttrByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteInvoiceItemTypeAttrByIdUpdated method',
  args:{invoiceItemTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/invoice/invoiceItemTypeAttrs/${args.invoiceItemTypeAttrId}?`, null, req);
  }
};
export {deleteInvoiceItemTypeAttrByIdUpdated};
