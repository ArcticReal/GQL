
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

import {PaymentApplicationType} from '../../accounting/PaymentApplication/PaymentApplicationType.js';
import {InvoiceItemType} from '../../accounting/InvoiceItem/InvoiceItemType.js';
import {InvoiceAttributeType} from '../../accounting/InvoiceAttribute/InvoiceAttributeType.js';
import {InvoiceRoleType} from '../../accounting/InvoiceRole/InvoiceRoleType.js';
import {RoleTypeType} from '../../party/RoleType/RoleTypeType.js';
import {AcctgTransType} from '../../accounting/AcctgTrans/AcctgTransType.js';
import {ContactMechType} from '../../party/ContactMech/ContactMechType.js';
import {InvoiceTypeType} from '../../accounting/InvoiceType/InvoiceTypeType.js';
import {InvoiceTermType} from '../../accounting/InvoiceTerm/InvoiceTermType.js';
import {PartyType} from '../../party/Party/PartyType.js';
import {InvoiceContactMechType} from '../../accounting/InvoiceContactMech/InvoiceContactMechType.js';
import {BillingAccountType} from '../../accounting/BillingAccount/BillingAccountType.js';
import {InvoiceNoteType} from '../../accounting/InvoiceNote/InvoiceNoteType.js';
import {InvoiceStatusType} from '../../accounting/InvoiceStatus/InvoiceStatusType.js';
import {InvoiceContentType} from '../../accounting/InvoiceContent/InvoiceContentType.js';


const InvoiceType = new GraphQLObjectType({
  name: 'InvoiceType',
  description: 'Type for Invoice in accounting',

  fields: () => ({
    partyFrom: {
      type: PartyType,
      args : {partyIdFrom: {type: GraphQLString}},
      resolve: (invoice, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${invoice.partyIdFrom}`)
    },
    roleType: {
      type: RoleTypeType,
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (invoice, args, {loaders}) => loaders.ofbiz.load(`party/roleTypes/find?roleTypeId=${invoice.roleTypeId}`)
    },
    recurrenceInfoId: {type: GraphQLString},
    invoiceType: {
      type: InvoiceTypeType,
      args : {invoiceTypeId: {type: GraphQLString}},
      resolve: (invoice, args, {loaders}) => loaders.ofbiz.load(`accounting/invoice/invoiceTypes/find?invoiceTypeId=${invoice.invoiceTypeId}`)
    },
    dueDate: {type: GraphQLString},
    description: {type: GraphQLString},
    billingAccount: {
      type: BillingAccountType,
      args : {billingAccountId: {type: GraphQLString}},
      resolve: (invoice, args, {loaders}) => loaders.ofbiz.load(`accounting/billingAccounts/find?billingAccountId=${invoice.billingAccountId}`)
    },
    invoiceDate: {type: GraphQLString},
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (invoice, args, {loaders}) => loaders.ofbiz.load(`party/contactMechs/find?contactMechId=${invoice.contactMechId}`)
    },
    currencyUomId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    paidDate: {type: GraphQLString},
    referenceNumber: {type: GraphQLString},
    invoiceId: {type: GraphQLString},
    invoiceMessage: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (invoice, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${invoice.partyId}`)
    },
    invoiceContents: {
      type: new GraphQLList(InvoiceContentType),
      args : {},
      resolve: (invoice, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceContents/find?invoiceId=${invoice.invoiceId}`)
    },
    invoiceContactMeches: {
      type: new GraphQLList(InvoiceContactMechType),
      args : {},
      resolve: (invoice, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceContactMechs/find?invoiceId=${invoice.invoiceId}`)
    },
    invoiceItems: {
      type: new GraphQLList(InvoiceItemType),
      args : {},
      resolve: (invoice, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceItems/find?invoiceId=${invoice.invoiceId}`)
    },
    invoiceStatuses: {
      type: new GraphQLList(InvoiceStatusType),
      args : {},
      resolve: (invoice, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceStatuss/find?invoiceId=${invoice.invoiceId}`)
    },
    invoiceTerms: {
      type: new GraphQLList(InvoiceTermType),
      args : {},
      resolve: (invoice, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceTerms/find?invoiceId=${invoice.invoiceId}`)
    },
    acctgTranses: {
      type: new GraphQLList(AcctgTransType),
      args : {},
      resolve: (invoice, args, {loaders}) => loaders.ofbizArray.load(`accounting/acctgTranss/find?invoiceId=${invoice.invoiceId}`)
    },
    invoiceNotes: {
      type: new GraphQLList(InvoiceNoteType),
      args : {},
      resolve: (invoice, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceNotes/find?invoiceId=${invoice.invoiceId}`)
    },
    invoiceAttributes: {
      type: new GraphQLList(InvoiceAttributeType),
      args : {},
      resolve: (invoice, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceAttributes/find?invoiceId=${invoice.invoiceId}`)
    },
    invoiceRoles: {
      type: new GraphQLList(InvoiceRoleType),
      args : {},
      resolve: (invoice, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceRoles/find?invoiceId=${invoice.invoiceId}`)
    },
    paymentApplications: {
      type: new GraphQLList(PaymentApplicationType),
      args : {},
      resolve: (invoice, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentApplications/find?invoiceId=${invoice.invoiceId}`)
    }
  })
});

export {InvoiceType};
    