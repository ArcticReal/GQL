
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {AgreementItemType} from '../party/AgreementItemType.js';
import {InvoiceItemTypeType} from '../accounting/InvoiceItemTypeType.js';
import {TermTypeType} from '../party/TermTypeType.js';
import {AgreementTermAttributeType} from '../party/AgreementTermAttributeType.js';


const AgreementTermType = new GraphQLObjectType({
  name: 'AgreementTermType',
  description: 'Type for AgreementTerm in party',

  fields: () => ({
    textValue: {type: GraphQLString},
    termDays: {type: GraphQLInt},
    maxQuantity: {type: GraphQLFloat},
    termType: {
      type: TermTypeType,
      args : {termTypeId: {type: GraphQLString}},
      resolve: (agreementTerm, args, {loaders}) => loaders.ofbiz.load(`termTypes/find?termTypeId=${agreementTerm.termTypeId}`)
    },
    agreementItemSeqId: {type: GraphQLString},
    description: {type: GraphQLString},
    agreementTermId: {type: GraphQLString},
    termValue: {type: GraphQLFloat},
    invoiceItemType: {
      type: InvoiceItemTypeType,
      args : {invoiceItemTypeId: {type: GraphQLString}},
      resolve: (agreementTerm, args, {loaders}) => loaders.ofbiz.load(`invoiceItemTypes/find?invoiceItemTypeId=${agreementTerm.invoiceItemTypeId}`)
    },
    thruDate: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    minQuantity: {type: GraphQLFloat},
    agreement: {
      type: AgreementItemType,
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementTerm, args, {loaders}) => loaders.ofbiz.load(`agreementItems/find?agreementId=${agreementTerm.agreementId}`)
    },
    agreementTermAttribute: {
      type: new GraphQLList(AgreementTermAttributeType),
      args : {agreementTermId: {type: GraphQLString}},
      resolve: (agreementTerm, args, {loaders}) => loaders.ofbizArray.load(`agreementTermAttributes/find?agreementTermId=${agreementTerm.agreementTermId}`)
    }
  })
});

export {AgreementTermType};
    