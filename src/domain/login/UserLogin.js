
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

import {CustRequestStatusType} from '../order/CustRequestStatus.js';
import {OrderAdjustmentType} from '../order/OrderAdjustment.js';
import {ContentAssocType} from '../content/ContentAssoc.js';
import {ContactListCommStatusType} from '../marketing/ContactListCommStatus.js';
import {ProductPromoCodeType} from '../product/ProductPromoCode.js';
import {ProductType} from '../product/Product.js';
import {PartyStatusType} from '../party/PartyStatus.js';
import {ProductPriceType} from '../product/ProductPrice.js';
import {ItemIssuanceType} from '../shipment/ItemIssuance.js';
import {PicklistStatusHistoryType} from '../shipment/PicklistStatusHistory.js';
import {WorkEffortReviewType} from '../workeffort/WorkEffortReview.js';
import {OrderPaymentPreferenceType} from '../order/OrderPaymentPreference.js';
import {ProductReviewType} from '../product/ProductReview.js';
import {BudgetStatusType} from '../accounting/BudgetStatus.js';
import {ProductPriceChangeType} from '../product/ProductPriceChange.js';
import {OrderStatusType} from '../order/OrderStatus.js';
import {OrderItemChangeType} from '../order/OrderItemChange.js';
import {PartyType} from '../party/Party.js';
import {ShipmentStatusType} from '../shipment/ShipmentStatus.js';
import {QuoteAdjustmentType} from '../order/QuoteAdjustment.js';
import {UserLoginSecurityGroupType} from '../login/UserLoginSecurityGroup.js';
import {WebUserPreferenceType} from '../content/WebUserPreference.js';
import {UserLoginSessionType} from '../login/UserLoginSession.js';
import {UserLoginHistoryType} from '../login/UserLoginHistory.js';
import {OrderHeaderType} from '../order/OrderHeader.js';
import {ShipmentReceiptType} from '../shipment/ShipmentReceipt.js';
import {WorkEffortPartyAssignmentType} from '../workeffort/WorkEffortPartyAssignment.js';
import {TimesheetType} from '../workeffort/Timesheet.js';
import {ReturnAdjustmentType} from '../order/ReturnAdjustment.js';
import {FinAccountStatusType} from '../accounting/FinAccountStatus.js';
import {ContactListType} from '../marketing/ContactList.js';
import {DataResourceType} from '../content/DataResource.js';
import {InventoryItemStatusType} from '../product/InventoryItemStatus.js';
import {UserLoginPasswordHistoryType} from '../login/UserLoginPasswordHistory.js';
import {SalesForecastType} from '../marketing/SalesForecast.js';
import {ProductFeaturePriceType} from '../product/ProductFeaturePrice.js';
import {ProductPromoType} from '../product/ProductPromo.js';
import {PicklistRoleType} from '../shipment/PicklistRole.js';
import {ContentType} from '../content/Content.js';
import {OrderItemType} from '../order/OrderItem.js';
import {SalesForecastHistoryType} from '../marketing/SalesForecastHistory.js';
import {ReturnStatusType} from '../order/ReturnStatus.js';
import {WorkEffortStatusType} from '../workeffort/WorkEffortStatus.js';
import {RequirementStatusType} from '../order/RequirementStatus.js';
import {InvoiceStatusType} from '../accounting/InvoiceStatus.js';


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
    orderItems: {
      type: new GraphQLList(OrderItemType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`order/orderItems/find?userLoginId=${userLogin.userLoginId}`)
    },
    userLoginHistories: {
      type: new GraphQLList(UserLoginHistoryType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`login/userLogin/userLoginHistorys/find?userLoginId=${userLogin.userLoginId}`)
    },
    picklistStatusHistories: {
      type: new GraphQLList(PicklistStatusHistoryType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`shipment/picklist/picklistStatusHistorys/find?userLoginId=${userLogin.userLoginId}`)
    },
    salesForecasts: {
      type: new GraphQLList(SalesForecastType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`marketing/salesForecasts/find?userLoginId=${userLogin.userLoginId}`)
    },
    requirementStatuses: {
      type: new GraphQLList(RequirementStatusType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`order/requirement/requirementStatuss/find?userLoginId=${userLogin.userLoginId}`)
    },
    parties: {
      type: new GraphQLList(PartyType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`/partys/find?userLoginId=${userLogin.userLoginId}`)
    },
    productFeaturePrices: {
      type: new GraphQLList(ProductFeaturePriceType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`product/product/productFeaturePrices/find?userLoginId=${userLogin.userLoginId}`)
    },
    orderAdjustments: {
      type: new GraphQLList(OrderAdjustmentType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`order/orderAdjustments/find?userLoginId=${userLogin.userLoginId}`)
    },
    workEffortPartyAssignments: {
      type: new GraphQLList(WorkEffortPartyAssignmentType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortPartyAssignments/find?userLoginId=${userLogin.userLoginId}`)
    },
    userLoginSessions: {
      type: new GraphQLList(UserLoginSessionType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`login/userLogin/userLoginSessions/find?userLoginId=${userLogin.userLoginId}`)
    },
    shipmentReceipts: {
      type: new GraphQLList(ShipmentReceiptType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentReceipts/find?userLoginId=${userLogin.userLoginId}`)
    },
    products: {
      type: new GraphQLList(ProductType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`/products/find?userLoginId=${userLogin.userLoginId}`)
    },
    orderPaymentPreferences: {
      type: new GraphQLList(OrderPaymentPreferenceType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`order/orderPaymentPreferences/find?userLoginId=${userLogin.userLoginId}`)
    },
    timesheets: {
      type: new GraphQLList(TimesheetType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`workeffort/timesheets/find?userLoginId=${userLogin.userLoginId}`)
    },
    invoiceStatuses: {
      type: new GraphQLList(InvoiceStatusType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceStatuss/find?userLoginId=${userLogin.userLoginId}`)
    },
    returnAdjustments: {
      type: new GraphQLList(ReturnAdjustmentType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`order/returnAdjustments/find?userLoginId=${userLogin.userLoginId}`)
    },
    inventoryItemStatuses: {
      type: new GraphQLList(InventoryItemStatusType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`product/inventoryItem/inventoryItemStatuss/find?userLoginId=${userLogin.userLoginId}`)
    },
    budgetStatuses: {
      type: new GraphQLList(BudgetStatusType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`accounting/budget/budgetStatuss/find?userLoginId=${userLogin.userLoginId}`)
    },
    partyStatuses: {
      type: new GraphQLList(PartyStatusType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyStatuss/find?userLoginId=${userLogin.userLoginId}`)
    },
    picklistRoles: {
      type: new GraphQLList(PicklistRoleType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`shipment/picklist/picklistRoles/find?userLoginId=${userLogin.userLoginId}`)
    },
    contents: {
      type: new GraphQLList(ContentType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`/contents/find?userLoginId=${userLogin.userLoginId}`)
    },
    productPrices: {
      type: new GraphQLList(ProductPriceType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPrices/find?userLoginId=${userLogin.userLoginId}`)
    },
    userLoginSecurityGroups: {
      type: new GraphQLList(UserLoginSecurityGroupType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`login/userLogin/userLoginSecurityGroups/find?userLoginId=${userLogin.userLoginId}`)
    },
    productReviews: {
      type: new GraphQLList(ProductReviewType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`product/product/productReviews/find?userLoginId=${userLogin.userLoginId}`)
    },
    contentAssocs: {
      type: new GraphQLList(ContentAssocType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`content/content/contentAssocs/find?userLoginId=${userLogin.userLoginId}`)
    },
    contactLists: {
      type: new GraphQLList(ContactListType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`marketing/contactLists/find?userLoginId=${userLogin.userLoginId}`)
    },
    itemIssuances: {
      type: new GraphQLList(ItemIssuanceType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`shipment/itemIssuances/find?userLoginId=${userLogin.userLoginId}`)
    },
    orderHeaders: {
      type: new GraphQLList(OrderHeaderType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`order/orderHeaders/find?userLoginId=${userLogin.userLoginId}`)
    },
    dataResources: {
      type: new GraphQLList(DataResourceType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`content/dataResources/find?userLoginId=${userLogin.userLoginId}`)
    },
    productPriceChanges: {
      type: new GraphQLList(ProductPriceChangeType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPriceChanges/find?userLoginId=${userLogin.userLoginId}`)
    },
    productPromoCodes: {
      type: new GraphQLList(ProductPromoCodeType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPromoCodes/find?userLoginId=${userLogin.userLoginId}`)
    },
    contactListCommStatuses: {
      type: new GraphQLList(ContactListCommStatusType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`marketing/contactList/contactListCommStatuss/find?userLoginId=${userLogin.userLoginId}`)
    },
    salesForecastHistories: {
      type: new GraphQLList(SalesForecastHistoryType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`marketing/salesForecast/salesForecastHistorys/find?userLoginId=${userLogin.userLoginId}`)
    },
    orderStatuses: {
      type: new GraphQLList(OrderStatusType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`order/orderStatuss/find?userLoginId=${userLogin.userLoginId}`)
    },
    finAccountStatuses: {
      type: new GraphQLList(FinAccountStatusType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`accounting/finAccount/finAccountStatuss/find?userLoginId=${userLogin.userLoginId}`)
    },
    productPromos: {
      type: new GraphQLList(ProductPromoType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPromos/find?userLoginId=${userLogin.userLoginId}`)
    },
    orderItemChanges: {
      type: new GraphQLList(OrderItemChangeType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemChanges/find?userLoginId=${userLogin.userLoginId}`)
    },
    shipmentStatuses: {
      type: new GraphQLList(ShipmentStatusType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentStatuss/find?userLoginId=${userLogin.userLoginId}`)
    },
    userLoginPasswordHistories: {
      type: new GraphQLList(UserLoginPasswordHistoryType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`login/userLogin/userLoginPasswordHistorys/find?userLoginId=${userLogin.userLoginId}`)
    },
    webUserPreferences: {
      type: new GraphQLList(WebUserPreferenceType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`content/webUserPreferences/find?userLoginId=${userLogin.userLoginId}`)
    },
    workEffortReviews: {
      type: new GraphQLList(WorkEffortReviewType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortReviews/find?userLoginId=${userLogin.userLoginId}`)
    },
    custRequestStatuses: {
      type: new GraphQLList(CustRequestStatusType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`order/custRequest/custRequestStatuss/find?userLoginId=${userLogin.userLoginId}`)
    },
    quoteAdjustments: {
      type: new GraphQLList(QuoteAdjustmentType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`order/quote/quoteAdjustments/find?userLoginId=${userLogin.userLoginId}`)
    },
    returnStatuses: {
      type: new GraphQLList(ReturnStatusType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`order/returnStatuss/find?userLoginId=${userLogin.userLoginId}`)
    },
    workEffortStatuses: {
      type: new GraphQLList(WorkEffortStatusType),
      args : {},
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortStatuss/find?userLoginId=${userLogin.userLoginId}`)
    }
  })
});

export {UserLoginType};
    




const UserLoginInputType = new GraphQLInputObjectType({
  name: 'UserLoginInputType',
  description: 'input type for UserLogin in login',

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
    partyId: {type: GraphQLString}
  })
});

export {UserLoginInputType};
    