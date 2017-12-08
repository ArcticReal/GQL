
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

import {OrderTermType} from '../order/OrderTerm.js';
import {InvoiceTermType} from '../accounting/InvoiceTerm.js';
import {AgreementTermType} from '../party/AgreementTerm.js';
import {BillingAccountTermType} from '../accounting/BillingAccountTerm.js';
import {QuoteTermType} from '../order/QuoteTerm.js';
import {TermTypeAttrType} from '../party/TermTypeAttr.js';


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
    quoteTerms: {
      type: new GraphQLList(QuoteTermType),
      args : {termTypeId: {type: GraphQLString}},
      resolve: (termType, args, {loaders}) => loaders.ofbizArray.load(`quoteTerms/find?termTypeId=${termType.termTypeId}`)
    },
    termTypes: {
      type: new GraphQLList(TermTypeType),
      args : {termTypeId: {type: GraphQLString}},
      resolve: (termType, args, {loaders}) => loaders.ofbizArray.load(`termTypes/find?termTypeId=${termType.termTypeId}`)
    },
    orderTerms: {
      type: new GraphQLList(OrderTermType),
      args : {termTypeId: {type: GraphQLString}},
      resolve: (termType, args, {loaders}) => loaders.ofbizArray.load(`orderTerms/find?termTypeId=${termType.termTypeId}`)
    },
    agreementTerms: {
      type: new GraphQLList(AgreementTermType),
      args : {termTypeId: {type: GraphQLString}},
      resolve: (termType, args, {loaders}) => loaders.ofbizArray.load(`agreementTerms/find?termTypeId=${termType.termTypeId}`)
    },
    termTypeAttrs: {
      type: new GraphQLList(TermTypeAttrType),
      args : {termTypeId: {type: GraphQLString}},
      resolve: (termType, args, {loaders}) => loaders.ofbizArray.load(`termTypeAttrs/find?termTypeId=${termType.termTypeId}`)
    },
    invoiceTerms: {
      type: new GraphQLList(InvoiceTermType),
      args : {termTypeId: {type: GraphQLString}},
      resolve: (termType, args, {loaders}) => loaders.ofbizArray.load(`invoiceTerms/find?termTypeId=${termType.termTypeId}`)
    },
    billingAccountTerms: {
      type: new GraphQLList(BillingAccountTermType),
      args : {termTypeId: {type: GraphQLString}},
      resolve: (termType, args, {loaders}) => loaders.ofbizArray.load(`billingAccountTerms/find?termTypeId=${termType.termTypeId}`)
    }
  })
});

export {TermTypeType};
    




const TermTypeInputType = new GraphQLInputObjectType({
  name: 'TermTypeInputType',
  description: 'input type for TermType in party',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    termTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {TermTypeInputType};
    