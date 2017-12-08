
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

import {ReturnHeaderType} from '../order/ReturnHeader.js';
import {InvoiceType} from '../accounting/Invoice.js';
import {ContactListCommStatusType} from '../marketing/ContactListCommStatus.js';
import {ShoppingListType} from '../order/ShoppingList.js';
import {TelecomNumberType} from '../party/TelecomNumber.js';
import {ReturnContactMechType} from '../order/ReturnContactMech.js';
import {OrderContactMechType} from '../order/OrderContactMech.js';
import {PartyContactMechPurposeType} from '../party/PartyContactMechPurpose.js';
import {CommunicationEventType} from '../party/CommunicationEvent.js';
import {BillingAccountType} from '../accounting/BillingAccount.js';
import {FacilityContactMechPurposeType} from '../product/FacilityContactMechPurpose.js';
import {WorkEffortEventReminderType} from '../workeffort/WorkEffortEventReminder.js';
import {SubscriptionType} from '../product/Subscription.js';
import {OrderItemContactMechType} from '../order/OrderItemContactMech.js';
import {PayPalPaymentMethodType} from '../accounting/PayPalPaymentMethod.js';
import {ContactMechTypeType} from '../party/ContactMechType.js';
import {CheckAccountType} from '../accounting/CheckAccount.js';
import {CustRequestType} from '../order/CustRequest.js';
import {ContactMechLinkType} from '../party/ContactMechLink.js';
import {RespondingPartyType} from '../order/RespondingParty.js';
import {OrderItemShipGroupType} from '../order/OrderItemShipGroup.js';
import {VendorType} from '../party/Vendor.js';
import {ContactListPartyType} from '../marketing/ContactListParty.js';
import {WorkEffortContactMechType} from '../workeffort/WorkEffortContactMech.js';
import {FacilityContactMechType} from '../product/FacilityContactMech.js';
import {CreditCardType} from '../accounting/CreditCard.js';
import {ShipmentContactMechType} from '../shipment/ShipmentContactMech.js';
import {PostalAddressType} from '../party/PostalAddress.js';
import {CommunicationEventRoleType} from '../party/CommunicationEventRole.js';
import {GiftCardType} from '../accounting/GiftCard.js';
import {InvoiceContactMechType} from '../accounting/InvoiceContactMech.js';
import {ContactMechAttributeType} from '../party/ContactMechAttribute.js';
import {EftAccountType} from '../accounting/EftAccount.js';
import {PartyContactMechType} from '../party/PartyContactMech.js';


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
    communicationEvents: {
      type: new GraphQLList(CommunicationEventType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`communicationEvents/find?contactMechId=${contactMech.contactMechId}`)
    },
    returnContactMeches: {
      type: new GraphQLList(ReturnContactMechType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`returnContactMechs/find?contactMechId=${contactMech.contactMechId}`)
    },
    contactMechAttributes: {
      type: new GraphQLList(ContactMechAttributeType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`contactMechAttributes/find?contactMechId=${contactMech.contactMechId}`)
    },
    respondingParties: {
      type: new GraphQLList(RespondingPartyType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`respondingPartys/find?contactMechId=${contactMech.contactMechId}`)
    },
    billingAccounts: {
      type: new GraphQLList(BillingAccountType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`billingAccounts/find?contactMechId=${contactMech.contactMechId}`)
    },
    creditCards: {
      type: new GraphQLList(CreditCardType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`creditCards/find?contactMechId=${contactMech.contactMechId}`)
    },
    communicationEventRoles: {
      type: new GraphQLList(CommunicationEventRoleType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`communicationEventRoles/find?contactMechId=${contactMech.contactMechId}`)
    },
    contactListParties: {
      type: new GraphQLList(ContactListPartyType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`contactListPartys/find?contactMechId=${contactMech.contactMechId}`)
    },
    payPalPaymentMethods: {
      type: new GraphQLList(PayPalPaymentMethodType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`payPalPaymentMethods/find?contactMechId=${contactMech.contactMechId}`)
    },
    contactMechLinks: {
      type: new GraphQLList(ContactMechLinkType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`contactMechLinks/find?contactMechId=${contactMech.contactMechId}`)
    },
    subscriptions: {
      type: new GraphQLList(SubscriptionType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`subscriptions/find?contactMechId=${contactMech.contactMechId}`)
    },
    facilityContactMechPurposes: {
      type: new GraphQLList(FacilityContactMechPurposeType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`facilityContactMechPurposes/find?contactMechId=${contactMech.contactMechId}`)
    },
    orderItemContactMeches: {
      type: new GraphQLList(OrderItemContactMechType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`orderItemContactMechs/find?contactMechId=${contactMech.contactMechId}`)
    },
    giftCards: {
      type: new GraphQLList(GiftCardType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`giftCards/find?contactMechId=${contactMech.contactMechId}`)
    },
    checkAccounts: {
      type: new GraphQLList(CheckAccountType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`checkAccounts/find?contactMechId=${contactMech.contactMechId}`)
    },
    postalAddresses: {
      type: new GraphQLList(PostalAddressType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`postalAddresss/find?contactMechId=${contactMech.contactMechId}`)
    },
    orderItemShipGroups: {
      type: new GraphQLList(OrderItemShipGroupType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`orderItemShipGroups/find?contactMechId=${contactMech.contactMechId}`)
    },
    shoppingLists: {
      type: new GraphQLList(ShoppingListType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`shoppingLists/find?contactMechId=${contactMech.contactMechId}`)
    },
    invoiceContactMeches: {
      type: new GraphQLList(InvoiceContactMechType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`invoiceContactMechs/find?contactMechId=${contactMech.contactMechId}`)
    },
    facilityContactMeches: {
      type: new GraphQLList(FacilityContactMechType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`facilityContactMechs/find?contactMechId=${contactMech.contactMechId}`)
    },
    invoices: {
      type: new GraphQLList(InvoiceType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`invoices/find?contactMechId=${contactMech.contactMechId}`)
    },
    shipmentContactMeches: {
      type: new GraphQLList(ShipmentContactMechType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`shipmentContactMechs/find?contactMechId=${contactMech.contactMechId}`)
    },
    vendors: {
      type: new GraphQLList(VendorType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`vendors/find?contactMechId=${contactMech.contactMechId}`)
    },
    partyContactMechPurposes: {
      type: new GraphQLList(PartyContactMechPurposeType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`partyContactMechPurposes/find?contactMechId=${contactMech.contactMechId}`)
    },
    partyContactMeches: {
      type: new GraphQLList(PartyContactMechType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`partyContactMechs/find?contactMechId=${contactMech.contactMechId}`)
    },
    telecomNumbers: {
      type: new GraphQLList(TelecomNumberType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`telecomNumbers/find?contactMechId=${contactMech.contactMechId}`)
    },
    returnHeaders: {
      type: new GraphQLList(ReturnHeaderType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`returnHeaders/find?contactMechId=${contactMech.contactMechId}`)
    },
    workEffortEventReminders: {
      type: new GraphQLList(WorkEffortEventReminderType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`workEffortEventReminders/find?contactMechId=${contactMech.contactMechId}`)
    },
    contactListCommStatuses: {
      type: new GraphQLList(ContactListCommStatusType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`contactListCommStatuss/find?contactMechId=${contactMech.contactMechId}`)
    },
    eftAccounts: {
      type: new GraphQLList(EftAccountType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`eftAccounts/find?contactMechId=${contactMech.contactMechId}`)
    },
    custRequests: {
      type: new GraphQLList(CustRequestType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`custRequests/find?contactMechId=${contactMech.contactMechId}`)
    },
    workEffortContactMeches: {
      type: new GraphQLList(WorkEffortContactMechType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`workEffortContactMechs/find?contactMechId=${contactMech.contactMechId}`)
    },
    orderContactMeches: {
      type: new GraphQLList(OrderContactMechType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`orderContactMechs/find?contactMechId=${contactMech.contactMechId}`)
    }
  })
});

export {ContactMechType};
    




const ContactMechInputType = new GraphQLInputObjectType({
  name: 'ContactMechInputType',
  description: 'input type for ContactMech in party',

  fields: () => ({
    infoString: {type: GraphQLString},
    contactMechTypeId: {type: GraphQLString},
    contactMechId: {type: GraphQLString}
  })
});

export {ContactMechInputType};
    