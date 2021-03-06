
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

import {OrderTermType} from '../../order/OrderTerm/OrderTermType.js';
import {InvoiceTermType} from '../../accounting/InvoiceTerm/InvoiceTermType.js';
import {AgreementTermType} from '../../party/AgreementTerm/AgreementTermType.js';
import {BillingAccountTermType} from '../../accounting/BillingAccountTerm/BillingAccountTermType.js';
import {QuoteTermType} from '../../order/QuoteTerm/QuoteTermType.js';
import {TermTypeAttrType} from '../../party/TermTypeAttr/TermTypeAttrType.js';


const TermTypeType = new GraphQLObjectType({
  name: 'TermTypeType',
  description: 'Type for TermType in party',

  fields: () => ({
    parentType: {
      type: TermTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (termType, args, {loaders}) => loaders.ofbiz.load(`party/termTypes/find?termTypeId=${termType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    termTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    quoteTerms: {
      type: new GraphQLList(QuoteTermType),
      args : {},
      resolve: (termType, args, {loaders}) => loaders.ofbizArray.load(`order/quote/quoteTerms/find?termTypeId=${termType.termTypeId}`)
    },
    termTypes: {
      type: new GraphQLList(TermTypeType),
      args : {},
      resolve: (termType, args, {loaders}) => loaders.ofbizArray.load(`party/termTypes/find?termTypeId=${termType.termTypeId}`)
    },
    orderTerms: {
      type: new GraphQLList(OrderTermType),
      args : {},
      resolve: (termType, args, {loaders}) => loaders.ofbizArray.load(`order/orderTerms/find?termTypeId=${termType.termTypeId}`)
    },
    agreementTerms: {
      type: new GraphQLList(AgreementTermType),
      args : {},
      resolve: (termType, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementTerms/find?termTypeId=${termType.termTypeId}`)
    },
    termTypeAttrs: {
      type: new GraphQLList(TermTypeAttrType),
      args : {},
      resolve: (termType, args, {loaders}) => loaders.ofbizArray.load(`party/termType/termTypeAttrs/find?termTypeId=${termType.termTypeId}`)
    },
    invoiceTerms: {
      type: new GraphQLList(InvoiceTermType),
      args : {},
      resolve: (termType, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceTerms/find?termTypeId=${termType.termTypeId}`)
    },
    billingAccountTerms: {
      type: new GraphQLList(BillingAccountTermType),
      args : {},
      resolve: (termType, args, {loaders}) => loaders.ofbizArray.load(`accounting/billingAccount/billingAccountTerms/find?termTypeId=${termType.termTypeId}`)
    }
  })
});

export {TermTypeType};
    