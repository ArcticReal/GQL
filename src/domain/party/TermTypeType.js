
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {OrderTermType} from '../order/OrderTermType.js';
import {InvoiceTermType} from '../accounting/InvoiceTermType.js';
import {AgreementTermType} from '../party/AgreementTermType.js';
import {BillingAccountTermType} from '../accounting/BillingAccountTermType.js';
import {QuoteTermType} from '../order/QuoteTermType.js';
import {TermTypeAttrType} from '../party/TermTypeAttrType.js';


const TermTypeType = new GraphQLObjectType({
  name: 'TermTypeType',
  description: 'Type for TermType in party',

  fields: () => ({
    parentType: {
      type: TermTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (termType, args, {loaders}) => loaders.ofbiz.load(`termTypes/find?termTypeId=${termType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    termTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    quoteTerm: {
      type: new GraphQLList(QuoteTermType),
      args : {termTypeId: {type: GraphQLString}},
      resolve: (termType, args, {loaders}) => loaders.ofbizArray.load(`quoteTerms/find?termTypeId=${termType.termTypeId}`)
    },
    termType: {
      type: new GraphQLList(TermTypeType),
      args : {termTypeId: {type: GraphQLString}},
      resolve: (termType, args, {loaders}) => loaders.ofbizArray.load(`termTypes/find?termTypeId=${termType.termTypeId}`)
    },
    orderTerm: {
      type: new GraphQLList(OrderTermType),
      args : {termTypeId: {type: GraphQLString}},
      resolve: (termType, args, {loaders}) => loaders.ofbizArray.load(`orderTerms/find?termTypeId=${termType.termTypeId}`)
    },
    agreementTerm: {
      type: new GraphQLList(AgreementTermType),
      args : {termTypeId: {type: GraphQLString}},
      resolve: (termType, args, {loaders}) => loaders.ofbizArray.load(`agreementTerms/find?termTypeId=${termType.termTypeId}`)
    },
    termTypeAttr: {
      type: new GraphQLList(TermTypeAttrType),
      args : {termTypeId: {type: GraphQLString}},
      resolve: (termType, args, {loaders}) => loaders.ofbizArray.load(`termTypeAttrs/find?termTypeId=${termType.termTypeId}`)
    },
    invoiceTerm: {
      type: new GraphQLList(InvoiceTermType),
      args : {termTypeId: {type: GraphQLString}},
      resolve: (termType, args, {loaders}) => loaders.ofbizArray.load(`invoiceTerms/find?termTypeId=${termType.termTypeId}`)
    },
    billingAccountTerm: {
      type: new GraphQLList(BillingAccountTermType),
      args : {termTypeId: {type: GraphQLString}},
      resolve: (termType, args, {loaders}) => loaders.ofbizArray.load(`billingAccountTerms/find?termTypeId=${termType.termTypeId}`)
    }
  })
});

export {TermTypeType};
    