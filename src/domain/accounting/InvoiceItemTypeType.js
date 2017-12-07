
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {AgreementTermType} from '../party/AgreementTermType.js';
import {InvoiceItemType} from '../accounting/InvoiceItemType.js';
import {InvoiceItemTypeAttrType} from '../accounting/InvoiceItemTypeAttrType.js';
import {InvoiceItemTypeGlAccountType} from '../accounting/InvoiceItemTypeGlAccountType.js';
import {GlAccountType} from '../accounting/GlAccountType.js';
import {InvoiceItemTypeMapType} from '../accounting/InvoiceItemTypeMapType.js';


const InvoiceItemTypeType = new GraphQLObjectType({
  name: 'InvoiceItemTypeType',
  description: 'Type for InvoiceItemType in accounting',

  fields: () => ({
    parentType: {
      type: InvoiceItemTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (invoiceItemType, args, {loaders}) => loaders.ofbiz.load(`invoiceItemTypes/find?invoiceItemTypeId=${invoiceItemType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    defaultGlAccount: {
      type: GlAccountType,
      args : {defaultGlAccountId: {type: GraphQLString}},
      resolve: (invoiceItemType, args, {loaders}) => loaders.ofbiz.load(`glAccounts/find?glAccountId=${invoiceItemType.defaultGlAccountId}`)
    },
    description: {type: GraphQLString},
    invoiceItemTypeId: {type: GraphQLString},
    invoiceItemTypeGlAccount: {
      type: new GraphQLList(InvoiceItemTypeGlAccountType),
      args : {invoiceItemTypeId: {type: GraphQLString}},
      resolve: (invoiceItemType, args, {loaders}) => loaders.ofbizArray.load(`invoiceItemTypeGlAccounts/find?invoiceItemTypeId=${invoiceItemType.invoiceItemTypeId}`)
    },
    invoiceItemTypeAttr: {
      type: new GraphQLList(InvoiceItemTypeAttrType),
      args : {invoiceItemTypeId: {type: GraphQLString}},
      resolve: (invoiceItemType, args, {loaders}) => loaders.ofbizArray.load(`invoiceItemTypeAttrs/find?invoiceItemTypeId=${invoiceItemType.invoiceItemTypeId}`)
    },
    invoiceItemTypeMap: {
      type: new GraphQLList(InvoiceItemTypeMapType),
      args : {invoiceItemTypeId: {type: GraphQLString}},
      resolve: (invoiceItemType, args, {loaders}) => loaders.ofbizArray.load(`invoiceItemTypeMaps/find?invoiceItemTypeId=${invoiceItemType.invoiceItemTypeId}`)
    },
    invoiceItemType: {
      type: new GraphQLList(InvoiceItemTypeType),
      args : {invoiceItemTypeId: {type: GraphQLString}},
      resolve: (invoiceItemType, args, {loaders}) => loaders.ofbizArray.load(`invoiceItemTypes/find?invoiceItemTypeId=${invoiceItemType.invoiceItemTypeId}`)
    },
    invoiceItem: {
      type: new GraphQLList(InvoiceItemType),
      args : {invoiceItemTypeId: {type: GraphQLString}},
      resolve: (invoiceItemType, args, {loaders}) => loaders.ofbizArray.load(`invoiceItems/find?invoiceItemTypeId=${invoiceItemType.invoiceItemTypeId}`)
    },
    agreementTerm: {
      type: new GraphQLList(AgreementTermType),
      args : {invoiceItemTypeId: {type: GraphQLString}},
      resolve: (invoiceItemType, args, {loaders}) => loaders.ofbizArray.load(`agreementTerms/find?invoiceItemTypeId=${invoiceItemType.invoiceItemTypeId}`)
    }
  })
});

export {InvoiceItemTypeType};
    