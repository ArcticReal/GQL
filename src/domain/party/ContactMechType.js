
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ReturnHeaderType} from '../order/ReturnHeaderType.js';
import {InvoiceType} from '../accounting/InvoiceType.js';
import {ContactListCommStatusType} from '../marketing/ContactListCommStatusType.js';
import {ShoppingListType} from '../order/ShoppingListType.js';
import {TelecomNumberType} from '../party/TelecomNumberType.js';
import {ReturnContactMechType} from '../order/ReturnContactMechType.js';
import {OrderContactMechType} from '../order/OrderContactMechType.js';
import {PartyContactMechPurposeType} from '../party/PartyContactMechPurposeType.js';
import {CommunicationEventType} from '../party/CommunicationEventType.js';
import {BillingAccountType} from '../accounting/BillingAccountType.js';
import {FacilityContactMechPurposeType} from '../product/FacilityContactMechPurposeType.js';
import {WorkEffortEventReminderType} from '../workeffort/WorkEffortEventReminderType.js';
import {SubscriptionType} from '../product/SubscriptionType.js';
import {OrderItemContactMechType} from '../order/OrderItemContactMechType.js';
import {PayPalPaymentMethodType} from '../accounting/PayPalPaymentMethodType.js';
import {ContactMechTypeType} from '../party/ContactMechTypeType.js';
import {CheckAccountType} from '../accounting/CheckAccountType.js';
import {CustRequestType} from '../order/CustRequestType.js';
import {ContactMechLinkType} from '../party/ContactMechLinkType.js';
import {RespondingPartyType} from '../order/RespondingPartyType.js';
import {OrderItemShipGroupType} from '../order/OrderItemShipGroupType.js';
import {VendorType} from '../party/VendorType.js';
import {ContactListPartyType} from '../marketing/ContactListPartyType.js';
import {WorkEffortContactMechType} from '../workeffort/WorkEffortContactMechType.js';
import {FacilityContactMechType} from '../product/FacilityContactMechType.js';
import {CreditCardType} from '../accounting/CreditCardType.js';
import {ShipmentContactMechType} from '../shipment/ShipmentContactMechType.js';
import {PostalAddressType} from '../party/PostalAddressType.js';
import {CommunicationEventRoleType} from '../party/CommunicationEventRoleType.js';
import {GiftCardType} from '../accounting/GiftCardType.js';
import {InvoiceContactMechType} from '../accounting/InvoiceContactMechType.js';
import {ContactMechAttributeType} from '../party/ContactMechAttributeType.js';
import {EftAccountType} from '../accounting/EftAccountType.js';
import {PartyContactMechType} from '../party/PartyContactMechType.js';


const ContactMechType = new GraphQLObjectType({
  name: 'ContactMechType',
  description: 'Type for ContactMech in party',

  fields: () => ({
    infoString: {type: GraphQLString},
    contactMechType: {
      type: ContactMechTypeType,
      args : {contactMechTypeId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbiz.load(`contactMechTypes/find?contactMechTypeId=${contactMech.contactMechTypeId}`)
    },
    contactMechId: {type: GraphQLString},
    communicationEvent: {
      type: new GraphQLList(CommunicationEventType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`communicationEvents/find?contactMechId=${contactMech.contactMechId}`)
    },
    returnContactMech: {
      type: new GraphQLList(ReturnContactMechType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`returnContactMechs/find?contactMechId=${contactMech.contactMechId}`)
    },
    contactMechAttribute: {
      type: new GraphQLList(ContactMechAttributeType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`contactMechAttributes/find?contactMechId=${contactMech.contactMechId}`)
    },
    respondingParty: {
      type: new GraphQLList(RespondingPartyType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`respondingPartys/find?contactMechId=${contactMech.contactMechId}`)
    },
    billingAccount: {
      type: new GraphQLList(BillingAccountType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`billingAccounts/find?contactMechId=${contactMech.contactMechId}`)
    },
    creditCard: {
      type: new GraphQLList(CreditCardType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`creditCards/find?contactMechId=${contactMech.contactMechId}`)
    },
    communicationEventRole: {
      type: new GraphQLList(CommunicationEventRoleType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`communicationEventRoles/find?contactMechId=${contactMech.contactMechId}`)
    },
    contactListParty: {
      type: new GraphQLList(ContactListPartyType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`contactListPartys/find?contactMechId=${contactMech.contactMechId}`)
    },
    payPalPaymentMethod: {
      type: new GraphQLList(PayPalPaymentMethodType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`payPalPaymentMethods/find?contactMechId=${contactMech.contactMechId}`)
    },
    contactMechLink: {
      type: new GraphQLList(ContactMechLinkType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`contactMechLinks/find?contactMechId=${contactMech.contactMechId}`)
    },
    subscription: {
      type: new GraphQLList(SubscriptionType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`subscriptions/find?contactMechId=${contactMech.contactMechId}`)
    },
    facilityContactMechPurpose: {
      type: new GraphQLList(FacilityContactMechPurposeType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`facilityContactMechPurposes/find?contactMechId=${contactMech.contactMechId}`)
    },
    orderItemContactMech: {
      type: new GraphQLList(OrderItemContactMechType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`orderItemContactMechs/find?contactMechId=${contactMech.contactMechId}`)
    },
    giftCard: {
      type: new GraphQLList(GiftCardType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`giftCards/find?contactMechId=${contactMech.contactMechId}`)
    },
    checkAccount: {
      type: new GraphQLList(CheckAccountType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`checkAccounts/find?contactMechId=${contactMech.contactMechId}`)
    },
    postalAddress: {
      type: new GraphQLList(PostalAddressType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`postalAddresss/find?contactMechId=${contactMech.contactMechId}`)
    },
    orderItemShipGroup: {
      type: new GraphQLList(OrderItemShipGroupType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`orderItemShipGroups/find?contactMechId=${contactMech.contactMechId}`)
    },
    shoppingList: {
      type: new GraphQLList(ShoppingListType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`shoppingLists/find?contactMechId=${contactMech.contactMechId}`)
    },
    invoiceContactMech: {
      type: new GraphQLList(InvoiceContactMechType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`invoiceContactMechs/find?contactMechId=${contactMech.contactMechId}`)
    },
    facilityContactMech: {
      type: new GraphQLList(FacilityContactMechType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`facilityContactMechs/find?contactMechId=${contactMech.contactMechId}`)
    },
    communicationEvent: {
      type: new GraphQLList(CommunicationEventType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`communicationEvents/find?contactMechId=${contactMech.contactMechId}`)
    },
    invoice: {
      type: new GraphQLList(InvoiceType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`invoices/find?contactMechId=${contactMech.contactMechId}`)
    },
    contactMechLink: {
      type: new GraphQLList(ContactMechLinkType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`contactMechLinks/find?contactMechId=${contactMech.contactMechId}`)
    },
    shipmentContactMech: {
      type: new GraphQLList(ShipmentContactMechType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`shipmentContactMechs/find?contactMechId=${contactMech.contactMechId}`)
    },
    vendor: {
      type: new GraphQLList(VendorType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`vendors/find?contactMechId=${contactMech.contactMechId}`)
    },
    partyContactMechPurpose: {
      type: new GraphQLList(PartyContactMechPurposeType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`partyContactMechPurposes/find?contactMechId=${contactMech.contactMechId}`)
    },
    partyContactMech: {
      type: new GraphQLList(PartyContactMechType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`partyContactMechs/find?contactMechId=${contactMech.contactMechId}`)
    },
    telecomNumber: {
      type: new GraphQLList(TelecomNumberType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`telecomNumbers/find?contactMechId=${contactMech.contactMechId}`)
    },
    returnHeader: {
      type: new GraphQLList(ReturnHeaderType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`returnHeaders/find?contactMechId=${contactMech.contactMechId}`)
    },
    workEffortEventReminder: {
      type: new GraphQLList(WorkEffortEventReminderType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`workEffortEventReminders/find?contactMechId=${contactMech.contactMechId}`)
    },
    contactListCommStatus: {
      type: new GraphQLList(ContactListCommStatusType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`contactListCommStatuss/find?contactMechId=${contactMech.contactMechId}`)
    },
    vendor: {
      type: new GraphQLList(VendorType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`vendors/find?contactMechId=${contactMech.contactMechId}`)
    },
    eftAccount: {
      type: new GraphQLList(EftAccountType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`eftAccounts/find?contactMechId=${contactMech.contactMechId}`)
    },
    custRequest: {
      type: new GraphQLList(CustRequestType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`custRequests/find?contactMechId=${contactMech.contactMechId}`)
    },
    workEffortContactMech: {
      type: new GraphQLList(WorkEffortContactMechType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`workEffortContactMechs/find?contactMechId=${contactMech.contactMechId}`)
    },
    orderItemShipGroup: {
      type: new GraphQLList(OrderItemShipGroupType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`orderItemShipGroups/find?contactMechId=${contactMech.contactMechId}`)
    },
    orderContactMech: {
      type: new GraphQLList(OrderContactMechType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`orderContactMechs/find?contactMechId=${contactMech.contactMechId}`)
    }
  })
});

export {ContactMechType};
    