
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductStoreShipmentMethType} from '../product/ProductStoreShipmentMethType.js';
import {OrderHeaderType} from '../order/OrderHeaderType.js';
import {PartyType} from '../party/PartyType.js';
import {CarrierShipmentMethodType} from '../shipment/CarrierShipmentMethodType.js';
import {ShoppingListItemSurveyType} from '../order/ShoppingListItemSurveyType.js';
import {ShoppingListTypeType} from '../order/ShoppingListTypeType.js';
import {ProductPromoCodeType} from '../product/ProductPromoCodeType.js';
import {ShoppingListWorkEffortType} from '../order/ShoppingListWorkEffortType.js';
import {PaymentMethodType} from '../accounting/PaymentMethodType.js';
import {ContactMechType} from '../party/ContactMechType.js';
import {ShoppingListItemType} from '../order/ShoppingListItemType.js';


const ShoppingListType = new GraphQLObjectType({
  name: 'ShoppingListType',
  description: 'Type for ShoppingList in order',

  fields: () => ({
    recurrenceInfoId: {type: GraphQLString},
    parentShoppingList: {
      type: ShoppingListType,
      args : {parentShoppingListId: {type: GraphQLString}},
      resolve: (shoppingList, args, {loaders}) => loaders.ofbiz.load(`shoppingLists/find?shoppingListId=${shoppingList.parentShoppingListId}`)
    },
    productPromoCode: {
      type: ProductPromoCodeType,
      args : {productPromoCodeId: {type: GraphQLString}},
      resolve: (shoppingList, args, {loaders}) => loaders.ofbiz.load(`productPromoCodes/find?productPromoCodeId=${shoppingList.productPromoCodeId}`)
    },
    description: {type: GraphQLString},
    isActive: {type: GraphQLBoolean},
    shoppingListType: {
      type: ShoppingListTypeType,
      args : {shoppingListTypeId: {type: GraphQLString}},
      resolve: (shoppingList, args, {loaders}) => loaders.ofbiz.load(`shoppingListTypes/find?shoppingListTypeId=${shoppingList.shoppingListTypeId}`)
    },
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (shoppingList, args, {loaders}) => loaders.ofbiz.load(`contactMechs/find?contactMechId=${shoppingList.contactMechId}`)
    },
    carrierPartyId: {type: GraphQLString},
    shoppingListId: {type: GraphQLString},
    currencyUom: {type: GraphQLString},
    lastOrderedDate: {type: GraphQLString},
    carrierRoleTypeId: {type: GraphQLString},
    paymentMethod: {
      type: PaymentMethodType,
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (shoppingList, args, {loaders}) => loaders.ofbiz.load(`paymentMethods/find?paymentMethodId=${shoppingList.paymentMethodId}`)
    },
    isPublic: {type: GraphQLBoolean},
    productStore: {
      type: new GraphQLList(ProductStoreShipmentMethType),
      args : {productStoreId: {type: GraphQLString}},
      resolve: (shoppingList, args, {loaders}) => loaders.ofbizArray.load(`productStoreShipmentMeths/find?productStoreId=${shoppingList.productStoreId}`)
    },
    listName: {type: GraphQLString},
    lastAdminModified: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (shoppingList, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${shoppingList.partyId}`)
    },
    shipmentMethodType: {
      type: CarrierShipmentMethodType,
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (shoppingList, args, {loaders}) => loaders.ofbiz.load(`carrierShipmentMethods/find?shipmentMethodTypeId=${shoppingList.shipmentMethodTypeId}`)
    },
    visitorId: {type: GraphQLString},
    orderHeader: {
      type: new GraphQLList(OrderHeaderType),
      args : {shoppingListId: {type: GraphQLString}},
      resolve: (shoppingList, args, {loaders}) => loaders.ofbizArray.load(`orderHeaders/find?shoppingListId=${shoppingList.shoppingListId}`)
    },
    shoppingListItem: {
      type: new GraphQLList(ShoppingListItemType),
      args : {shoppingListId: {type: GraphQLString}},
      resolve: (shoppingList, args, {loaders}) => loaders.ofbizArray.load(`shoppingListItems/find?shoppingListId=${shoppingList.shoppingListId}`)
    },
    shoppingList: {
      type: new GraphQLList(ShoppingListType),
      args : {shoppingListId: {type: GraphQLString}},
      resolve: (shoppingList, args, {loaders}) => loaders.ofbizArray.load(`shoppingLists/find?shoppingListId=${shoppingList.shoppingListId}`)
    },
    shoppingListItemSurvey: {
      type: new GraphQLList(ShoppingListItemSurveyType),
      args : {shoppingListId: {type: GraphQLString}},
      resolve: (shoppingList, args, {loaders}) => loaders.ofbizArray.load(`shoppingListItemSurveys/find?shoppingListId=${shoppingList.shoppingListId}`)
    },
    shoppingListWorkEffort: {
      type: new GraphQLList(ShoppingListWorkEffortType),
      args : {shoppingListId: {type: GraphQLString}},
      resolve: (shoppingList, args, {loaders}) => loaders.ofbizArray.load(`shoppingListWorkEfforts/find?shoppingListId=${shoppingList.shoppingListId}`)
    }
  })
});

export {ShoppingListType};
    