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
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../framework/helpTypes.js';


const assignItemShipGroup = {
  type: ResopnseType,
  description: 'mutation for ofbiz assignItemShipGroup method',
  args:{quantity: {type: GraphQLFloat},fromGroupIndex: {type: GraphQLInt},shoppingCart: {type: GraphQLString},itemIndex: {type: GraphQLInt},toGroupIndex: {type: GraphQLInt},clearEmptyGroups: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderCart/assignItemShipGroup?quantity=${args.quantity}fromGroupIndex=${args.fromGroupIndex}shoppingCart=${args.shoppingCart}itemIndex=${args.itemIndex}toGroupIndex=${args.toGroupIndex}clearEmptyGroups=${args.clearEmptyGroups}`, null, req);
  }
};
export {assignItemShipGroup};


const createCartAbandonedLine = {
  type: ResopnseType,
  description: 'mutation for ofbiz createCartAbandonedLine method',
  args:{visitId: {type: GraphQLString},cartAbandonedLineSeqId: {type: GraphQLString},unitPrice: {type: GraphQLFloat},quantity: {type: GraphQLFloat},reservLength: {type: GraphQLFloat},productId: {type: GraphQLString},reservPersons: {type: GraphQLFloat},totalWithAdjustments: {type: GraphQLFloat},reservStart: {type: GraphQLString},configId: {type: GraphQLString},wasReserved: {type: GraphQLString},reservNthPPPerc: {type: GraphQLFloat},reserv2ndPPPerc: {type: GraphQLFloat},prodCatalogId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderCart/createCartAbandonedLine?visitId=${args.visitId}cartAbandonedLineSeqId=${args.cartAbandonedLineSeqId}unitPrice=${args.unitPrice}quantity=${args.quantity}reservLength=${args.reservLength}productId=${args.productId}reservPersons=${args.reservPersons}totalWithAdjustments=${args.totalWithAdjustments}reservStart=${args.reservStart}configId=${args.configId}wasReserved=${args.wasReserved}reservNthPPPerc=${args.reservNthPPPerc}reserv2ndPPPerc=${args.reserv2ndPPPerc}prodCatalogId=${args.prodCatalogId}`, null, req);
  }
};
export {createCartAbandonedLine};


const deleteCartAbandonedLine = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteCartAbandonedLine method',
  args:{visitId: {type: GraphQLString},cartAbandonedLineSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderCart/deleteCartAbandonedLine?visitId=${args.visitId}cartAbandonedLineSeqId=${args.cartAbandonedLineSeqId}`, null, req);
  }
};
export {deleteCartAbandonedLine};


const getShoppingCartData = {
  type: ResopnseType,
  description: 'mutation for ofbiz getShoppingCartData method',
  args:{shoppingCart: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderCart/getShoppingCartData?shoppingCart=${args.shoppingCart}`, null, req);
  }
};
export {getShoppingCartData};


const getShoppingCartItemIndex = {
  type: ResopnseType,
  description: 'mutation for ofbiz getShoppingCartItemIndex method',
  args:{productId: {type: GraphQLString},shoppingCart: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderCart/getShoppingCartItemIndex?productId=${args.productId}shoppingCart=${args.shoppingCart}`, null, req);
  }
};
export {getShoppingCartItemIndex};


const interfaceProductPromoAction = {
  type: ResopnseType,
  description: 'mutation for ofbiz interfaceProductPromoAction method',
  args:{productPromoAction: {type: new GraphQLList(KeyValueInputType)},shoppingCart: {type: GraphQLString},nowTimestamp: {type: GraphQLString},actionResultInfo: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderCart/interfaceProductPromoAction?productPromoAction=${args.productPromoAction}shoppingCart=${args.shoppingCart}nowTimestamp=${args.nowTimestamp}actionResultInfo=${args.actionResultInfo}`, null, req);
  }
};
export {interfaceProductPromoAction};


const interfaceProductPromoCond = {
  type: ResopnseType,
  description: 'mutation for ofbiz interfaceProductPromoCond method',
  args:{productPromoCond: {type: new GraphQLList(KeyValueInputType)},shoppingCart: {type: GraphQLString},nowTimestamp: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderCart/interfaceProductPromoCond?productPromoCond=${args.productPromoCond}shoppingCart=${args.shoppingCart}nowTimestamp=${args.nowTimestamp}`, null, req);
  }
};
export {interfaceProductPromoCond};


const loadCartFromOrder = {
  type: ResopnseType,
  description: 'mutation for ofbiz loadCartFromOrder method',
  args:{orderId: {type: GraphQLString},createAsNewOrder: {type: GraphQLString},includePromoItems: {type: GraphQLBoolean},skipProductChecks: {type: GraphQLBoolean},skipInventoryChecks: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderCart/loadCartFromOrder?orderId=${args.orderId}createAsNewOrder=${args.createAsNewOrder}includePromoItems=${args.includePromoItems}skipProductChecks=${args.skipProductChecks}skipInventoryChecks=${args.skipInventoryChecks}`, null, req);
  }
};
export {loadCartFromOrder};


const loadCartFromQuote = {
  type: ResopnseType,
  description: 'mutation for ofbiz loadCartFromQuote method',
  args:{quoteId: {type: GraphQLString},applyQuoteAdjustments: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderCart/loadCartFromQuote?quoteId=${args.quoteId}applyQuoteAdjustments=${args.applyQuoteAdjustments}`, null, req);
  }
};
export {loadCartFromQuote};


const loadCartFromShoppingList = {
  type: ResopnseType,
  description: 'mutation for ofbiz loadCartFromShoppingList method',
  args:{shoppingListId: {type: GraphQLString},orderPartyId: {type: GraphQLString},applyStorePromotions: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderCart/loadCartFromShoppingList?shoppingListId=${args.shoppingListId}orderPartyId=${args.orderPartyId}applyStorePromotions=${args.applyStorePromotions}`, null, req);
  }
};
export {loadCartFromShoppingList};


const prepareVendorShipGroups = {
  type: ResopnseType,
  description: 'mutation for ofbiz prepareVendorShipGroups method',
  args:{shoppingCart: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderCart/prepareVendorShipGroups?shoppingCart=${args.shoppingCart}`, null, req);
  }
};
export {prepareVendorShipGroups};


const resetShipGroupItems = {
  type: ResopnseType,
  description: 'mutation for ofbiz resetShipGroupItems method',
  args:{shoppingCart: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderCart/resetShipGroupItems?shoppingCart=${args.shoppingCart}`, null, req);
  }
};
export {resetShipGroupItems};


const setCartOtherOptions = {
  type: ResopnseType,
  description: 'mutation for ofbiz setCartOtherOptions method',
  args:{shoppingCart: {type: GraphQLString},orderAdditionalEmails: {type: GraphQLString},correspondingPoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderCart/setCartOtherOptions?shoppingCart=${args.shoppingCart}orderAdditionalEmails=${args.orderAdditionalEmails}correspondingPoId=${args.correspondingPoId}`, null, req);
  }
};
export {setCartOtherOptions};


const setCartPaymentOptions = {
  type: ResopnseType,
  description: 'mutation for ofbiz setCartPaymentOptions method',
  args:{shoppingCart: {type: GraphQLString},paymentInfoId: {type: GraphQLString},amount: {type: GraphQLFloat},refNum: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderCart/setCartPaymentOptions?shoppingCart=${args.shoppingCart}paymentInfoId=${args.paymentInfoId}amount=${args.amount}refNum=${args.refNum}`, null, req);
  }
};
export {setCartPaymentOptions};


const setCartShippingAddress = {
  type: ResopnseType,
  description: 'mutation for ofbiz setCartShippingAddress method',
  args:{shippingContactMechId: {type: GraphQLString},shoppingCart: {type: GraphQLString},groupIndex: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderCart/setCartShippingAddress?shippingContactMechId=${args.shippingContactMechId}shoppingCart=${args.shoppingCart}groupIndex=${args.groupIndex}`, null, req);
  }
};
export {setCartShippingAddress};


const setCartShippingOptions = {
  type: ResopnseType,
  description: 'mutation for ofbiz setCartShippingOptions method',
  args:{shippingContactMechId: {type: GraphQLString},shoppingCart: {type: GraphQLString},maySplit: {type: GraphQLBoolean},isGift: {type: GraphQLBoolean},groupIndex: {type: GraphQLInt},shipmentMethodString: {type: GraphQLString},giftMessage: {type: GraphQLString},shippingInstructions: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderCart/setCartShippingOptions?shippingContactMechId=${args.shippingContactMechId}shoppingCart=${args.shoppingCart}maySplit=${args.maySplit}isGift=${args.isGift}groupIndex=${args.groupIndex}shipmentMethodString=${args.shipmentMethodString}giftMessage=${args.giftMessage}shippingInstructions=${args.shippingInstructions}`, null, req);
  }
};
export {setCartShippingOptions};


const updateCartAbandonedLine = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateCartAbandonedLine method',
  args:{visitId: {type: GraphQLString},cartAbandonedLineSeqId: {type: GraphQLString},unitPrice: {type: GraphQLFloat},quantity: {type: GraphQLFloat},reservLength: {type: GraphQLFloat},productId: {type: GraphQLString},reservPersons: {type: GraphQLFloat},totalWithAdjustments: {type: GraphQLFloat},reservStart: {type: GraphQLString},configId: {type: GraphQLString},wasReserved: {type: GraphQLString},reservNthPPPerc: {type: GraphQLFloat},reserv2ndPPPerc: {type: GraphQLFloat},prodCatalogId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderCart/updateCartAbandonedLine?visitId=${args.visitId}cartAbandonedLineSeqId=${args.cartAbandonedLineSeqId}unitPrice=${args.unitPrice}quantity=${args.quantity}reservLength=${args.reservLength}productId=${args.productId}reservPersons=${args.reservPersons}totalWithAdjustments=${args.totalWithAdjustments}reservStart=${args.reservStart}configId=${args.configId}wasReserved=${args.wasReserved}reservNthPPPerc=${args.reservNthPPPerc}reserv2ndPPPerc=${args.reserv2ndPPPerc}prodCatalogId=${args.prodCatalogId}`, null, req);
  }
};
export {updateCartAbandonedLine};
