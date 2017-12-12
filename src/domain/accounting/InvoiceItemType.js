
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

import {AgreementTermType} from '../party/AgreementTerm.js';
import {InvoiceItemType} from '../accounting/InvoiceItem.js';
import {InvoiceItemTypeAttrType} from '../accounting/InvoiceItemTypeAttr.js';
import {InvoiceItemTypeGlAccountType} from '../accounting/InvoiceItemTypeGlAccount.js';
import {GlAccountType} from '../accounting/GlAccount.js';
import {InvoiceItemTypeMapType} from '../accounting/InvoiceItemTypeMap.js';


const InvoiceItemTypeType = new GraphQLObjectType({
  name: 'InvoiceItemTypeType',
  description: 'Type for InvoiceItemType in accounting',

  fields: () => ({
    parentType: {
      type: InvoiceItemTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (invoiceItemType, args, {loaders}) => loaders.ofbiz.load(`accounting/invoice/invoiceItemTypes/find?invoiceItemTypeId=${invoiceItemType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    defaultGlAccount: {
      type: GlAccountType,
      args : {defaultGlAccountId: {type: GraphQLString}},
      resolve: (invoiceItemType, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccounts/find?glAccountId=${invoiceItemType.defaultGlAccountId}`)
    },
    description: {type: GraphQLString},
    invoiceItemTypeId: {type: GraphQLString},
    invoiceItemTypeGlAccounts: {
      type: new GraphQLList(InvoiceItemTypeGlAccountType),
      args : {},
      resolve: (invoiceItemType, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceItemTypeGlAccounts/find?invoiceItemTypeId=${invoiceItemType.invoiceItemTypeId}`)
    },
    invoiceItemTypeAttrs: {
      type: new GraphQLList(InvoiceItemTypeAttrType),
      args : {},
      resolve: (invoiceItemType, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceItemTypeAttrs/find?invoiceItemTypeId=${invoiceItemType.invoiceItemTypeId}`)
    },
    invoiceItemTypeMaps: {
      type: new GraphQLList(InvoiceItemTypeMapType),
      args : {},
      resolve: (invoiceItemType, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceItemTypeMaps/find?invoiceItemTypeId=${invoiceItemType.invoiceItemTypeId}`)
    },
    invoiceItemTypes: {
      type: new GraphQLList(InvoiceItemTypeType),
      args : {},
      resolve: (invoiceItemType, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceItemTypes/find?invoiceItemTypeId=${invoiceItemType.invoiceItemTypeId}`)
    },
    invoiceItems: {
      type: new GraphQLList(InvoiceItemType),
      args : {},
      resolve: (invoiceItemType, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceItems/find?invoiceItemTypeId=${invoiceItemType.invoiceItemTypeId}`)
    },
    agreementTerms: {
      type: new GraphQLList(AgreementTermType),
      args : {},
      resolve: (invoiceItemType, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementTerms/find?invoiceItemTypeId=${invoiceItemType.invoiceItemTypeId}`)
    }
  })
});

export {InvoiceItemTypeType};
    




const InvoiceItemTypeInputType = new GraphQLInputObjectType({
  name: 'InvoiceItemTypeInputType',
  description: 'input type for InvoiceItemType in accounting',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    defaultGlAccountId: {type: GraphQLString},
    description: {type: GraphQLString},
    invoiceItemTypeId: {type: GraphQLString}
  })
});

export {InvoiceItemTypeInputType};
    