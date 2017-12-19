
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

import {ReturnHeaderType} from '../../order/ReturnHeader/ReturnHeaderType.js';
import {InvoiceType} from '../../accounting/Invoice/InvoiceType.js';
import {ContactListCommStatusType} from '../../marketing/ContactListCommStatus/ContactListCommStatusType.js';
import {ShoppingListType} from '../../order/ShoppingList/ShoppingListType.js';
import {TelecomNumberType} from '../../party/TelecomNumber/TelecomNumberType.js';
import {ReturnContactMechType} from '../../order/ReturnContactMech/ReturnContactMechType.js';
import {OrderContactMechType} from '../../order/OrderContactMech/OrderContactMechType.js';
import {PartyContactMechPurposeType} from '../../party/PartyContactMechPurpose/PartyContactMechPurposeType.js';
import {CommunicationEventType} from '../../party/CommunicationEvent/CommunicationEventType.js';
import {BillingAccountType} from '../../accounting/BillingAccount/BillingAccountType.js';
import {FacilityContactMechPurposeType} from '../../product/FacilityContactMechPurpose/FacilityContactMechPurposeType.js';
import {WorkEffortEventReminderType} from '../../workeffort/WorkEffortEventReminder/WorkEffortEventReminderType.js';
import {SubscriptionType} from '../../product/Subscription/SubscriptionType.js';
import {OrderItemContactMechType} from '../../order/OrderItemContactMech/OrderItemContactMechType.js';
import {PayPalPaymentMethodType} from '../../accounting/PayPalPaymentMethod/PayPalPaymentMethodType.js';
import {ContactMechTypeType} from '../../party/ContactMechType/ContactMechTypeType.js';
import {CheckAccountType} from '../../accounting/CheckAccount/CheckAccountType.js';
import {CustRequestType} from '../../order/CustRequest/CustRequestType.js';
import {ContactMechLinkType} from '../../party/ContactMechLink/ContactMechLinkType.js';
import {RespondingPartyType} from '../../order/RespondingParty/RespondingPartyType.js';
import {OrderItemShipGroupType} from '../../order/OrderItemShipGroup/OrderItemShipGroupType.js';
import {VendorType} from '../../party/Vendor/VendorType.js';
import {ContactListPartyType} from '../../marketing/ContactListParty/ContactListPartyType.js';
import {WorkEffortContactMechType} from '../../workeffort/WorkEffortContactMech/WorkEffortContactMechType.js';
import {FacilityContactMechType} from '../../product/FacilityContactMech/FacilityContactMechType.js';
import {CreditCardType} from '../../accounting/CreditCard/CreditCardType.js';
import {ShipmentContactMechType} from '../../shipment/ShipmentContactMech/ShipmentContactMechType.js';
import {PostalAddressType} from '../../party/PostalAddress/PostalAddressType.js';
import {CommunicationEventRoleType} from '../../party/CommunicationEventRole/CommunicationEventRoleType.js';
import {GiftCardType} from '../../accounting/GiftCard/GiftCardType.js';
import {InvoiceContactMechType} from '../../accounting/InvoiceContactMech/InvoiceContactMechType.js';
import {ContactMechAttributeType} from '../../party/ContactMechAttribute/ContactMechAttributeType.js';
import {EftAccountType} from '../../accounting/EftAccount/EftAccountType.js';
import {PartyContactMechType} from '../../party/PartyContactMech/PartyContactMechType.js';


const ContactMechType = new GraphQLObjectType({
  name: 'ContactMechType',
  description: 'Type for ContactMech in party',

  fields: () => ({
    infoString: {type: GraphQLString},
    contactMechType: {
      type: ContactMechTypeType,
      args : {contactMechTypeId: {type: GraphQLString}},
      resolve: (contactMech, args, {loaders}) => loaders.ofbiz.load(`party/contactMech/contactMechTypes/find?contactMechTypeId=${contactMech.contactMechTypeId}`)
    },
    contactMechId: {type: GraphQLString},
    communicationEvents: {
      type: new GraphQLList(CommunicationEventType),
      args : {},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`party/communicationEvents/find?contactMechId=${contactMech.contactMechId}`)
    },
    returnContactMeches: {
      type: new GraphQLList(ReturnContactMechType),
      args : {},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`order/returnContactMechs/find?contactMechId=${contactMech.contactMechId}`)
    },
    contactMechAttributes: {
      type: new GraphQLList(ContactMechAttributeType),
      args : {},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`party/contactMech/contactMechAttributes/find?contactMechId=${contactMech.contactMechId}`)
    },
    respondingParties: {
      type: new GraphQLList(RespondingPartyType),
      args : {},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`order/respondingPartys/find?contactMechId=${contactMech.contactMechId}`)
    },
    billingAccounts: {
      type: new GraphQLList(BillingAccountType),
      args : {},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`accounting/billingAccounts/find?contactMechId=${contactMech.contactMechId}`)
    },
    creditCards: {
      type: new GraphQLList(CreditCardType),
      args : {},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`accounting/creditCards/find?contactMechId=${contactMech.contactMechId}`)
    },
    communicationEventRoles: {
      type: new GraphQLList(CommunicationEventRoleType),
      args : {},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`party/communicationEvent/communicationEventRoles/find?contactMechId=${contactMech.contactMechId}`)
    },
    contactListParties: {
      type: new GraphQLList(ContactListPartyType),
      args : {},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`marketing/contactList/contactListPartys/find?contactMechId=${contactMech.contactMechId}`)
    },
    payPalPaymentMethods: {
      type: new GraphQLList(PayPalPaymentMethodType),
      args : {},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/payPalPaymentMethods/find?contactMechId=${contactMech.contactMechId}`)
    },
    contactMechLinks: {
      type: new GraphQLList(ContactMechLinkType),
      args : {},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`party/contactMech/contactMechLinks/find?contactMechId=${contactMech.contactMechId}`)
    },
    subscriptions: {
      type: new GraphQLList(SubscriptionType),
      args : {},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`product/subscriptions/find?contactMechId=${contactMech.contactMechId}`)
    },
    facilityContactMechPurposes: {
      type: new GraphQLList(FacilityContactMechPurposeType),
      args : {},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`product/facility/facilityContactMechPurposes/find?contactMechId=${contactMech.contactMechId}`)
    },
    orderItemContactMeches: {
      type: new GraphQLList(OrderItemContactMechType),
      args : {},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemContactMechs/find?contactMechId=${contactMech.contactMechId}`)
    },
    giftCards: {
      type: new GraphQLList(GiftCardType),
      args : {},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`accounting/giftCards/find?contactMechId=${contactMech.contactMechId}`)
    },
    checkAccounts: {
      type: new GraphQLList(CheckAccountType),
      args : {},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`accounting/checkAccounts/find?contactMechId=${contactMech.contactMechId}`)
    },
    postalAddresses: {
      type: new GraphQLList(PostalAddressType),
      args : {},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`party/postalAddresss/find?contactMechId=${contactMech.contactMechId}`)
    },
    orderItemShipGroups: {
      type: new GraphQLList(OrderItemShipGroupType),
      args : {},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemShipGroups/find?contactMechId=${contactMech.contactMechId}`)
    },
    shoppingLists: {
      type: new GraphQLList(ShoppingListType),
      args : {},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`order/shoppingLists/find?contactMechId=${contactMech.contactMechId}`)
    },
    invoiceContactMeches: {
      type: new GraphQLList(InvoiceContactMechType),
      args : {},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceContactMechs/find?contactMechId=${contactMech.contactMechId}`)
    },
    facilityContactMeches: {
      type: new GraphQLList(FacilityContactMechType),
      args : {},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`product/facility/facilityContactMechs/find?contactMechId=${contactMech.contactMechId}`)
    },
    invoices: {
      type: new GraphQLList(InvoiceType),
      args : {},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoices/find?contactMechId=${contactMech.contactMechId}`)
    },
    shipmentContactMeches: {
      type: new GraphQLList(ShipmentContactMechType),
      args : {},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentContactMechs/find?contactMechId=${contactMech.contactMechId}`)
    },
    vendors: {
      type: new GraphQLList(VendorType),
      args : {},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`party/vendors/find?contactMechId=${contactMech.contactMechId}`)
    },
    partyContactMechPurposes: {
      type: new GraphQLList(PartyContactMechPurposeType),
      args : {},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`party/contactMech/partyContactMechPurposes/find?contactMechId=${contactMech.contactMechId}`)
    },
    partyContactMeches: {
      type: new GraphQLList(PartyContactMechType),
      args : {},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`party/contactMech/partyContactMechs/find?contactMechId=${contactMech.contactMechId}`)
    },
    telecomNumbers: {
      type: new GraphQLList(TelecomNumberType),
      args : {},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`party/telecomNumbers/find?contactMechId=${contactMech.contactMechId}`)
    },
    returnHeaders: {
      type: new GraphQLList(ReturnHeaderType),
      args : {},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`order/returnHeaders/find?contactMechId=${contactMech.contactMechId}`)
    },
    workEffortEventReminders: {
      type: new GraphQLList(WorkEffortEventReminderType),
      args : {},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortEventReminders/find?contactMechId=${contactMech.contactMechId}`)
    },
    contactListCommStatuses: {
      type: new GraphQLList(ContactListCommStatusType),
      args : {},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`marketing/contactList/contactListCommStatuss/find?contactMechId=${contactMech.contactMechId}`)
    },
    eftAccounts: {
      type: new GraphQLList(EftAccountType),
      args : {},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`accounting/eftAccounts/find?contactMechId=${contactMech.contactMechId}`)
    },
    custRequests: {
      type: new GraphQLList(CustRequestType),
      args : {},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`order/custRequests/find?contactMechId=${contactMech.contactMechId}`)
    },
    workEffortContactMeches: {
      type: new GraphQLList(WorkEffortContactMechType),
      args : {},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortContactMechs/find?contactMechId=${contactMech.contactMechId}`)
    },
    orderContactMeches: {
      type: new GraphQLList(OrderContactMechType),
      args : {},
      resolve: (contactMech, args, {loaders}) => loaders.ofbizArray.load(`order/orderContactMechs/find?contactMechId=${contactMech.contactMechId}`)
    }
  })
});

export {ContactMechType};
    