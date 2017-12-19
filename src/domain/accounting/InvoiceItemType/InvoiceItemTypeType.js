
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

import {AgreementTermType} from '../../party/AgreementTerm/AgreementTermType.js';
import {InvoiceItemType} from '../../accounting/InvoiceItem/InvoiceItemType.js';
import {InvoiceItemTypeAttrType} from '../../accounting/InvoiceItemTypeAttr/InvoiceItemTypeAttrType.js';
import {InvoiceItemTypeGlAccountType} from '../../accounting/InvoiceItemTypeGlAccount/InvoiceItemTypeGlAccountType.js';
import {GlAccountType} from '../../accounting/GlAccount/GlAccountType.js';
import {InvoiceItemTypeMapType} from '../../accounting/InvoiceItemTypeMap/InvoiceItemTypeMapType.js';


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
    