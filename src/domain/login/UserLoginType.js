
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {CustRequestStatusType} from '../order/CustRequestStatusType.js';
import {OrderAdjustmentType} from '../order/OrderAdjustmentType.js';
import {ContentAssocType} from '../content/ContentAssocType.js';
import {ContactListCommStatusType} from '../marketing/ContactListCommStatusType.js';
import {ProductPromoCodeType} from '../product/ProductPromoCodeType.js';
import {ProductType} from '../product/ProductType.js';
import {PartyStatusType} from '../party/PartyStatusType.js';
import {ProductPriceType} from '../product/ProductPriceType.js';
import {ItemIssuanceType} from '../shipment/ItemIssuanceType.js';
import {PicklistStatusHistoryType} from '../shipment/PicklistStatusHistoryType.js';
import {WorkEffortReviewType} from '../workeffort/WorkEffortReviewType.js';
import {OrderPaymentPreferenceType} from '../order/OrderPaymentPreferenceType.js';
import {ProductReviewType} from '../product/ProductReviewType.js';
import {BudgetStatusType} from '../accounting/BudgetStatusType.js';
import {ProductPriceChangeType} from '../product/ProductPriceChangeType.js';
import {OrderStatusType} from '../order/OrderStatusType.js';
import {OrderItemChangeType} from '../order/OrderItemChangeType.js';
import {PartyType} from '../party/PartyType.js';
import {ShipmentStatusType} from '../shipment/ShipmentStatusType.js';
import {QuoteAdjustmentType} from '../order/QuoteAdjustmentType.js';
import {UserLoginSecurityGroupType} from '../login/UserLoginSecurityGroupType.js';
import {WebUserPreferenceType} from '../content/WebUserPreferenceType.js';
import {UserLoginSessionType} from '../login/UserLoginSessionType.js';
import {UserLoginHistoryType} from '../login/UserLoginHistoryType.js';
import {OrderHeaderType} from '../order/OrderHeaderType.js';
import {ShipmentReceiptType} from '../shipment/ShipmentReceiptType.js';
import {WorkEffortPartyAssignmentType} from '../workeffort/WorkEffortPartyAssignmentType.js';
import {TimesheetType} from '../workeffort/TimesheetType.js';
import {ReturnAdjustmentType} from '../order/ReturnAdjustmentType.js';
import {FinAccountStatusType} from '../accounting/FinAccountStatusType.js';
import {ContactListType} from '../marketing/ContactListType.js';
import {DataResourceType} from '../content/DataResourceType.js';
import {InventoryItemStatusType} from '../product/InventoryItemStatusType.js';
import {UserLoginPasswordHistoryType} from '../login/UserLoginPasswordHistoryType.js';
import {SalesForecastType} from '../marketing/SalesForecastType.js';
import {ProductFeaturePriceType} from '../product/ProductFeaturePriceType.js';
import {ProductPromoType} from '../product/ProductPromoType.js';
import {PicklistRoleType} from '../shipment/PicklistRoleType.js';
import {ContentType} from '../content/ContentType.js';
import {OrderItemType} from '../order/OrderItemType.js';
import {SalesForecastHistoryType} from '../marketing/SalesForecastHistoryType.js';
import {ReturnStatusType} from '../order/ReturnStatusType.js';
import {WorkEffortStatusType} from '../workeffort/WorkEffortStatusType.js';
import {RequirementStatusType} from '../order/RequirementStatusType.js';
import {InvoiceStatusType} from '../accounting/InvoiceStatusType.js';


const UserLoginType = new GraphQLObjectType({
  name: 'UserLoginType',
  description: 'Type for UserLogin in login',

  fields: () => ({
    successiveFailedLogins: {type: GraphQLInt},
    passwordHint: {type: GraphQLString},
    externalAuthId: {type: GraphQLString},
    lastTimeZone: {type: GraphQLString},
    enabled: {type: GraphQLBoolean},
    lastLocale: {type: GraphQLString},
    currentPassword: {type: GraphQLString},
    userLoginId: {type: GraphQLString},
    isSystem: {type: GraphQLBoolean},
    disabledDateTime: {type: GraphQLString},
    disabledBy: {type: GraphQLString},
    hasLoggedOut: {type: GraphQLBoolean},
    userLdapDn: {type: GraphQLString},
    requirePasswordChange: {type: GraphQLBoolean},
    lastCurrencyUom: {type: GraphQLString},
    partyId: {type: GraphQLString},
    orderItem: {
      type: new GraphQLList(OrderItemType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`orderItems/find?userLoginId=${userLogin.userLoginId}`)
    },
    userLoginHistory: {
      type: new GraphQLList(UserLoginHistoryType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`userLoginHistorys/find?userLoginId=${userLogin.userLoginId}`)
    },
    picklistStatusHistory: {
      type: new GraphQLList(PicklistStatusHistoryType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`picklistStatusHistorys/find?userLoginId=${userLogin.userLoginId}`)
    },
    salesForecast: {
      type: new GraphQLList(SalesForecastType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`salesForecasts/find?userLoginId=${userLogin.userLoginId}`)
    },
    requirementStatus: {
      type: new GraphQLList(RequirementStatusType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`requirementStatuss/find?userLoginId=${userLogin.userLoginId}`)
    },
    party: {
      type: new GraphQLList(PartyType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`partys/find?userLoginId=${userLogin.userLoginId}`)
    },
    productFeaturePrice: {
      type: new GraphQLList(ProductFeaturePriceType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`productFeaturePrices/find?userLoginId=${userLogin.userLoginId}`)
    },
    orderAdjustment: {
      type: new GraphQLList(OrderAdjustmentType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`orderAdjustments/find?userLoginId=${userLogin.userLoginId}`)
    },
    workEffortPartyAssignment: {
      type: new GraphQLList(WorkEffortPartyAssignmentType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`workEffortPartyAssignments/find?userLoginId=${userLogin.userLoginId}`)
    },
    userLoginSession: {
      type: new GraphQLList(UserLoginSessionType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`userLoginSessions/find?userLoginId=${userLogin.userLoginId}`)
    },
    shipmentReceipt: {
      type: new GraphQLList(ShipmentReceiptType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`shipmentReceipts/find?userLoginId=${userLogin.userLoginId}`)
    },
    product: {
      type: new GraphQLList(ProductType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`products/find?userLoginId=${userLogin.userLoginId}`)
    },
    orderPaymentPreference: {
      type: new GraphQLList(OrderPaymentPreferenceType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`orderPaymentPreferences/find?userLoginId=${userLogin.userLoginId}`)
    },
    timesheet: {
      type: new GraphQLList(TimesheetType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`timesheets/find?userLoginId=${userLogin.userLoginId}`)
    },
    invoiceStatus: {
      type: new GraphQLList(InvoiceStatusType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`invoiceStatuss/find?userLoginId=${userLogin.userLoginId}`)
    },
    returnAdjustment: {
      type: new GraphQLList(ReturnAdjustmentType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`returnAdjustments/find?userLoginId=${userLogin.userLoginId}`)
    },
    inventoryItemStatus: {
      type: new GraphQLList(InventoryItemStatusType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemStatuss/find?userLoginId=${userLogin.userLoginId}`)
    },
    budgetStatus: {
      type: new GraphQLList(BudgetStatusType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`budgetStatuss/find?userLoginId=${userLogin.userLoginId}`)
    },
    partyStatus: {
      type: new GraphQLList(PartyStatusType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`partyStatuss/find?userLoginId=${userLogin.userLoginId}`)
    },
    picklistRole: {
      type: new GraphQLList(PicklistRoleType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`picklistRoles/find?userLoginId=${userLogin.userLoginId}`)
    },
    content: {
      type: new GraphQLList(ContentType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`contents/find?userLoginId=${userLogin.userLoginId}`)
    },
    productPrice: {
      type: new GraphQLList(ProductPriceType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`productPrices/find?userLoginId=${userLogin.userLoginId}`)
    },
    userLoginSecurityGroup: {
      type: new GraphQLList(UserLoginSecurityGroupType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`userLoginSecurityGroups/find?userLoginId=${userLogin.userLoginId}`)
    },
    productReview: {
      type: new GraphQLList(ProductReviewType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`productReviews/find?userLoginId=${userLogin.userLoginId}`)
    },
    contentAssoc: {
      type: new GraphQLList(ContentAssocType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`contentAssocs/find?userLoginId=${userLogin.userLoginId}`)
    },
    contactList: {
      type: new GraphQLList(ContactListType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`contactLists/find?userLoginId=${userLogin.userLoginId}`)
    },
    itemIssuance: {
      type: new GraphQLList(ItemIssuanceType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`itemIssuances/find?userLoginId=${userLogin.userLoginId}`)
    },
    orderHeader: {
      type: new GraphQLList(OrderHeaderType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`orderHeaders/find?userLoginId=${userLogin.userLoginId}`)
    },
    dataResource: {
      type: new GraphQLList(DataResourceType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`dataResources/find?userLoginId=${userLogin.userLoginId}`)
    },
    productPriceChange: {
      type: new GraphQLList(ProductPriceChangeType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`productPriceChanges/find?userLoginId=${userLogin.userLoginId}`)
    },
    productPromoCode: {
      type: new GraphQLList(ProductPromoCodeType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`productPromoCodes/find?userLoginId=${userLogin.userLoginId}`)
    },
    contactListCommStatus: {
      type: new GraphQLList(ContactListCommStatusType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`contactListCommStatuss/find?userLoginId=${userLogin.userLoginId}`)
    },
    salesForecastHistory: {
      type: new GraphQLList(SalesForecastHistoryType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`salesForecastHistorys/find?userLoginId=${userLogin.userLoginId}`)
    },
    orderStatus: {
      type: new GraphQLList(OrderStatusType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`orderStatuss/find?userLoginId=${userLogin.userLoginId}`)
    },
    finAccountStatus: {
      type: new GraphQLList(FinAccountStatusType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`finAccountStatuss/find?userLoginId=${userLogin.userLoginId}`)
    },
    productPromo: {
      type: new GraphQLList(ProductPromoType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`productPromos/find?userLoginId=${userLogin.userLoginId}`)
    },
    orderItemChange: {
      type: new GraphQLList(OrderItemChangeType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`orderItemChanges/find?userLoginId=${userLogin.userLoginId}`)
    },
    shipmentStatus: {
      type: new GraphQLList(ShipmentStatusType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`shipmentStatuss/find?userLoginId=${userLogin.userLoginId}`)
    },
    userLoginPasswordHistory: {
      type: new GraphQLList(UserLoginPasswordHistoryType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`userLoginPasswordHistorys/find?userLoginId=${userLogin.userLoginId}`)
    },
    webUserPreference: {
      type: new GraphQLList(WebUserPreferenceType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`webUserPreferences/find?userLoginId=${userLogin.userLoginId}`)
    },
    workEffortReview: {
      type: new GraphQLList(WorkEffortReviewType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`workEffortReviews/find?userLoginId=${userLogin.userLoginId}`)
    },
    custRequestStatus: {
      type: new GraphQLList(CustRequestStatusType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`custRequestStatuss/find?userLoginId=${userLogin.userLoginId}`)
    },
    quoteAdjustment: {
      type: new GraphQLList(QuoteAdjustmentType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`quoteAdjustments/find?userLoginId=${userLogin.userLoginId}`)
    },
    returnStatus: {
      type: new GraphQLList(ReturnStatusType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`returnStatuss/find?userLoginId=${userLogin.userLoginId}`)
    },
    workEffortStatus: {
      type: new GraphQLList(WorkEffortStatusType),
      args : {userLoginId: {type: GraphQLString}},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`workEffortStatuss/find?userLoginId=${userLogin.userLoginId}`)
    }
  })
});

export {UserLoginType};
    