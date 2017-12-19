
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

import {AgreementItemType} from '../../party/AgreementItem/AgreementItemType.js';
import {InvoiceItemTypeType} from '../../accounting/InvoiceItemType/InvoiceItemTypeType.js';
import {TermTypeType} from '../../party/TermType/TermTypeType.js';
import {AgreementTermAttributeType} from '../../party/AgreementTermAttribute/AgreementTermAttributeType.js';


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
      resolve: (agreementTerm, args, {loaders}) => loaders.ofbiz.load(`party/termTypes/find?termTypeId=${agreementTerm.termTypeId}`)
    },
    agreementItemSeqId: {type: GraphQLString},
    description: {type: GraphQLString},
    agreementTermId: {type: GraphQLString},
    termValue: {type: GraphQLFloat},
    invoiceItemType: {
      type: InvoiceItemTypeType,
      args : {invoiceItemTypeId: {type: GraphQLString}},
      resolve: (agreementTerm, args, {loaders}) => loaders.ofbiz.load(`accounting/invoice/invoiceItemTypes/find?invoiceItemTypeId=${agreementTerm.invoiceItemTypeId}`)
    },
    thruDate: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    minQuantity: {type: GraphQLFloat},
    agreement: {
      type: AgreementItemType,
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementTerm, args, {loaders}) => loaders.ofbiz.load(`party/agreement/agreementItems/find?agreementId=${agreementTerm.agreementId}`)
    },
    agreementTermAttributes: {
      type: new GraphQLList(AgreementTermAttributeType),
      args : {},
      resolve: (agreementTerm, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementTermAttributes/find?agreementTermId=${agreementTerm.agreementTermId}`)
    }
  })
});

export {AgreementTermType};
    