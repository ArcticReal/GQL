
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

import {PaymentApplicationType} from '../accounting/PaymentApplication.js';
import {InvoiceItemType} from '../accounting/InvoiceItem.js';
import {InvoiceAttributeType} from '../accounting/InvoiceAttribute.js';
import {InvoiceRoleType} from '../accounting/InvoiceRole.js';
import {RoleTypeType} from '../party/RoleType.js';
import {AcctgTransType} from '../accounting/AcctgTrans.js';
import {ContactMechType} from '../party/ContactMech.js';
import {InvoiceTypeType} from '../accounting/InvoiceType.js';
import {InvoiceTermType} from '../accounting/InvoiceTerm.js';
import {PartyType} from '../party/Party.js';
import {InvoiceContactMechType} from '../accounting/InvoiceContactMech.js';
import {BillingAccountType} from '../accounting/BillingAccount.js';
import {InvoiceNoteType} from '../accounting/InvoiceNote.js';
import {InvoiceStatusType} from '../accounting/InvoiceStatus.js';
import {InvoiceContentType} from '../accounting/InvoiceContent.js';


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
    




const InvoiceInputType = new GraphQLInputObjectType({
  name: 'InvoiceInputType',
  description: 'input type for Invoice in accounting',

  fields: () => ({
    partyIdFrom: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    recurrenceInfoId: {type: GraphQLString},
    invoiceTypeId: {type: GraphQLString},
    dueDate: {type: GraphQLString},
    description: {type: GraphQLString},
    billingAccountId: {type: GraphQLString},
    invoiceDate: {type: GraphQLString},
    contactMechId: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    paidDate: {type: GraphQLString},
    referenceNumber: {type: GraphQLString},
    invoiceId: {type: GraphQLString},
    invoiceMessage: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {InvoiceInputType};
    