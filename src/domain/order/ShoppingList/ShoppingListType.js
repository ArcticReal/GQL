
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

import {ProductStoreShipmentMethType} from '../../product/ProductStoreShipmentMeth/ProductStoreShipmentMethType.js';
import {OrderHeaderType} from '../../order/OrderHeader/OrderHeaderType.js';
import {PartyType} from '../../party/Party/PartyType.js';
import {CarrierShipmentMethodType} from '../../shipment/CarrierShipmentMethod/CarrierShipmentMethodType.js';
import {ShoppingListItemSurveyType} from '../../order/ShoppingListItemSurvey/ShoppingListItemSurveyType.js';
import {ShoppingListTypeType} from '../../order/ShoppingListType/ShoppingListTypeType.js';
import {ProductPromoCodeType} from '../../product/ProductPromoCode/ProductPromoCodeType.js';
import {ShoppingListWorkEffortType} from '../../order/ShoppingListWorkEffort/ShoppingListWorkEffortType.js';
import {PaymentMethodType} from '../../accounting/PaymentMethod/PaymentMethodType.js';
import {ContactMechType} from '../../party/ContactMech/ContactMechType.js';
import {ShoppingListItemType} from '../../order/ShoppingListItem/ShoppingListItemType.js';


const ShoppingListType = new GraphQLObjectType({
  name: 'ShoppingListType',
  description: 'Type for ShoppingList in order',

  fields: () => ({
    recurrenceInfoId: {type: GraphQLString},
    parentShoppingList: {
      type: ShoppingListType,
      args : {parentShoppingListId: {type: GraphQLString}},
      resolve: (shoppingList, args, {loaders}) => loaders.ofbiz.load(`order/shoppingLists/find?shoppingListId=${shoppingList.parentShoppingListId}`)
    },
    productPromoCode: {
      type: ProductPromoCodeType,
      args : {productPromoCodeId: {type: GraphQLString}},
      resolve: (shoppingList, args, {loaders}) => loaders.ofbiz.load(`product/product/productPromoCodes/find?productPromoCodeId=${shoppingList.productPromoCodeId}`)
    },
    description: {type: GraphQLString},
    isActive: {type: GraphQLBoolean},
    shoppingListType: {
      type: ShoppingListTypeType,
      args : {shoppingListTypeId: {type: GraphQLString}},
      resolve: (shoppingList, args, {loaders}) => loaders.ofbiz.load(`order/shoppingList/shoppingListTypes/find?shoppingListTypeId=${shoppingList.shoppingListTypeId}`)
    },
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (shoppingList, args, {loaders}) => loaders.ofbiz.load(`party/contactMechs/find?contactMechId=${shoppingList.contactMechId}`)
    },
    carrierPartyId: {type: GraphQLString},
    shoppingListId: {type: GraphQLString},
    currencyUom: {type: GraphQLString},
    lastOrderedDate: {type: GraphQLString},
    carrierRoleTypeId: {type: GraphQLString},
    paymentMethod: {
      type: PaymentMethodType,
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (shoppingList, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentMethods/find?paymentMethodId=${shoppingList.paymentMethodId}`)
    },
    isPublic: {type: GraphQLBoolean},
    productStore: {
      type: new GraphQLList(ProductStoreShipmentMethType),
      args : {productStoreId: {type: GraphQLString}},
      resolve: (shoppingList, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStoreShipmentMeths/find?productStoreId=${shoppingList.productStoreId}`)
    },
    listName: {type: GraphQLString},
    lastAdminModified: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (shoppingList, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${shoppingList.partyId}`)
    },
    shipmentMethodType: {
      type: CarrierShipmentMethodType,
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (shoppingList, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/carrierShipmentMethods/find?shipmentMethodTypeId=${shoppingList.shipmentMethodTypeId}`)
    },
    visitorId: {type: GraphQLString},
    orderHeaders: {
      type: new GraphQLList(OrderHeaderType),
      args : {},
      resolve: (shoppingList, args, {loaders}) => loaders.ofbizArray.load(`order/orderHeaders/find?shoppingListId=${shoppingList.shoppingListId}`)
    },
    shoppingListItems: {
      type: new GraphQLList(ShoppingListItemType),
      args : {},
      resolve: (shoppingList, args, {loaders}) => loaders.ofbizArray.load(`order/shoppingList/shoppingListItems/find?shoppingListId=${shoppingList.shoppingListId}`)
    },
    shoppingLists: {
      type: new GraphQLList(ShoppingListType),
      args : {},
      resolve: (shoppingList, args, {loaders}) => loaders.ofbizArray.load(`order/shoppingLists/find?shoppingListId=${shoppingList.shoppingListId}`)
    },
    shoppingListItemSurveies: {
      type: new GraphQLList(ShoppingListItemSurveyType),
      args : {},
      resolve: (shoppingList, args, {loaders}) => loaders.ofbizArray.load(`order/shoppingList/shoppingListItemSurveys/find?shoppingListId=${shoppingList.shoppingListId}`)
    },
    shoppingListWorkEfforts: {
      type: new GraphQLList(ShoppingListWorkEffortType),
      args : {},
      resolve: (shoppingList, args, {loaders}) => loaders.ofbizArray.load(`order/shoppingList/shoppingListWorkEfforts/find?shoppingListId=${shoppingList.shoppingListId}`)
    }
  })
});

export {ShoppingListType};
    