
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

import {CustRequestStatusType} from '../../order/CustRequestStatus/CustRequestStatusType.js';
import {OrderAdjustmentType} from '../../order/OrderAdjustment/OrderAdjustmentType.js';
import {ContentAssocType} from '../../content/ContentAssoc/ContentAssocType.js';
import {ContactListCommStatusType} from '../../marketing/ContactListCommStatus/ContactListCommStatusType.js';
import {ProductPromoCodeType} from '../../product/ProductPromoCode/ProductPromoCodeType.js';
import {ProductType} from '../../product/Product/ProductType.js';
import {PartyStatusType} from '../../party/PartyStatus/PartyStatusType.js';
import {ProductPriceType} from '../../product/ProductPrice/ProductPriceType.js';
import {ItemIssuanceType} from '../../shipment/ItemIssuance/ItemIssuanceType.js';
import {PicklistStatusHistoryType} from '../../shipment/PicklistStatusHistory/PicklistStatusHistoryType.js';
import {WorkEffortReviewType} from '../../workeffort/WorkEffortReview/WorkEffortReviewType.js';
import {OrderPaymentPreferenceType} from '../../order/OrderPaymentPreference/OrderPaymentPreferenceType.js';
import {ProductReviewType} from '../../product/ProductReview/ProductReviewType.js';
import {BudgetStatusType} from '../../accounting/BudgetStatus/BudgetStatusType.js';
import {ProductPriceChangeType} from '../../product/ProductPriceChange/ProductPriceChangeType.js';
import {OrderStatusType} from '../../order/OrderStatus/OrderStatusType.js';
import {OrderItemChangeType} from '../../order/OrderItemChange/OrderItemChangeType.js';
import {PartyType} from '../../party/Party/PartyType.js';
import {ShipmentStatusType} from '../../shipment/ShipmentStatus/ShipmentStatusType.js';
import {QuoteAdjustmentType} from '../../order/QuoteAdjustment/QuoteAdjustmentType.js';
import {UserLoginSecurityGroupType} from '../../login/UserLoginSecurityGroup/UserLoginSecurityGroupType.js';
import {WebUserPreferenceType} from '../../content/WebUserPreference/WebUserPreferenceType.js';
import {UserLoginSessionType} from '../../login/UserLoginSession/UserLoginSessionType.js';
import {UserLoginHistoryType} from '../../login/UserLoginHistory/UserLoginHistoryType.js';
import {OrderHeaderType} from '../../order/OrderHeader/OrderHeaderType.js';
import {ShipmentReceiptType} from '../../shipment/ShipmentReceipt/ShipmentReceiptType.js';
import {WorkEffortPartyAssignmentType} from '../../workeffort/WorkEffortPartyAssignment/WorkEffortPartyAssignmentType.js';
import {TimesheetType} from '../../workeffort/Timesheet/TimesheetType.js';
import {ReturnAdjustmentType} from '../../order/ReturnAdjustment/ReturnAdjustmentType.js';
import {FinAccountStatusType} from '../../accounting/FinAccountStatus/FinAccountStatusType.js';
import {ContactListType} from '../../marketing/ContactList/ContactListType.js';
import {DataResourceType} from '../../content/DataResource/DataResourceType.js';
import {InventoryItemStatusType} from '../../product/InventoryItemStatus/InventoryItemStatusType.js';
import {UserLoginPasswordHistoryType} from '../../login/UserLoginPasswordHistory/UserLoginPasswordHistoryType.js';
import {SalesForecastType} from '../../marketing/SalesForecast/SalesForecastType.js';
import {ProductFeaturePriceType} from '../../product/ProductFeaturePrice/ProductFeaturePriceType.js';
import {ProductPromoType} from '../../product/ProductPromo/ProductPromoType.js';
import {PicklistRoleType} from '../../shipment/PicklistRole/PicklistRoleType.js';
import {ContentType} from '../../content/Content/ContentType.js';
import {OrderItemType} from '../../order/OrderItem/OrderItemType.js';
import {SalesForecastHistoryType} from '../../marketing/SalesForecastHistory/SalesForecastHistoryType.js';
import {ReturnStatusType} from '../../order/ReturnStatus/ReturnStatusType.js';
import {WorkEffortStatusType} from '../../workeffort/WorkEffortStatus/WorkEffortStatusType.js';
import {RequirementStatusType} from '../../order/RequirementStatus/RequirementStatusType.js';
import {InvoiceStatusType} from '../../accounting/InvoiceStatus/InvoiceStatusType.js';


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
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`partys/find?userLoginId=${userLogin.userLoginId}`)
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
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`products/find?userLoginId=${userLogin.userLoginId}`)
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
      resolve: (userLogin, args, {loaders}) => loaders.ofbizArray.load(`contents/find?userLoginId=${userLogin.userLoginId}`)
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
    