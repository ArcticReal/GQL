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


const createUpdateBillingAddressAndPaymentMethod = {
  type: ResopnseType,
  description: 'mutation for ofbiz createUpdateBillingAddressAndPaymentMethod method',
  args:{expMonth: {type: GraphQLString},expYear: {type: GraphQLString},lastNameOnCard: {type: GraphQLString},firstNameOnCard: {type: GraphQLString},cardType: {type: GraphQLString},shoppingCart: {type: GraphQLString},cardNumber: {type: GraphQLString},billToCountryCode: {type: GraphQLString},billToAreaCode: {type: GraphQLString},billToPostalCode: {type: GraphQLString},setDefaultBilling: {type: GraphQLString},billToAddress2: {type: GraphQLString},contactMechId: {type: GraphQLString},billToCity: {type: GraphQLString},keepAddressBook: {type: GraphQLString},titleOnCard: {type: GraphQLString},paymentMethodId: {type: GraphQLString},productStoreId: {type: GraphQLString},billToContactNumber: {type: GraphQLString},partyId: {type: GraphQLString},suffixOnCard: {type: GraphQLString},billToStateProvinceGeoId: {type: GraphQLString},billToAttnName: {type: GraphQLString},shipToContactMechId: {type: GraphQLString},billToName: {type: GraphQLString},billToCountryGeoId: {type: GraphQLString},companyNameOnCard: {type: GraphQLString},userLogin: {type: new GraphQLList(KeyValueInputType)},billToCardSecurityCode: {type: GraphQLString},billToAddress1: {type: GraphQLString},billToContactMechId: {type: GraphQLString},middleNameOnCard: {type: GraphQLString},useShippingAddressForBilling: {type: GraphQLString},billToExtension: {type: GraphQLString},billToPhoneContactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderCheckout/createUpdateBillingAddressAndPaymentMethod?expMonth=${args.expMonth}expYear=${args.expYear}lastNameOnCard=${args.lastNameOnCard}firstNameOnCard=${args.firstNameOnCard}cardType=${args.cardType}shoppingCart=${args.shoppingCart}cardNumber=${args.cardNumber}billToCountryCode=${args.billToCountryCode}billToAreaCode=${args.billToAreaCode}billToPostalCode=${args.billToPostalCode}setDefaultBilling=${args.setDefaultBilling}billToAddress2=${args.billToAddress2}contactMechId=${args.contactMechId}billToCity=${args.billToCity}keepAddressBook=${args.keepAddressBook}titleOnCard=${args.titleOnCard}paymentMethodId=${args.paymentMethodId}productStoreId=${args.productStoreId}billToContactNumber=${args.billToContactNumber}partyId=${args.partyId}suffixOnCard=${args.suffixOnCard}billToStateProvinceGeoId=${args.billToStateProvinceGeoId}billToAttnName=${args.billToAttnName}shipToContactMechId=${args.shipToContactMechId}billToName=${args.billToName}billToCountryGeoId=${args.billToCountryGeoId}companyNameOnCard=${args.companyNameOnCard}userLogin=${args.userLogin}billToCardSecurityCode=${args.billToCardSecurityCode}billToAddress1=${args.billToAddress1}billToContactMechId=${args.billToContactMechId}middleNameOnCard=${args.middleNameOnCard}useShippingAddressForBilling=${args.useShippingAddressForBilling}billToExtension=${args.billToExtension}billToPhoneContactMechId=${args.billToPhoneContactMechId}`, null, req);
  }
};
export {createUpdateBillingAddressAndPaymentMethod};


const createUpdateCustomerAndShippingAddress = {
  type: ResopnseType,
  description: 'mutation for ofbiz createUpdateCustomerAndShippingAddress method',
  args:{shipToCity: {type: GraphQLString},emailAddress: {type: GraphQLString},shipToAddress1: {type: GraphQLString},shipToPostalCode: {type: GraphQLString},shoppingCart: {type: GraphQLString},shipToCountryGeoId: {type: GraphQLString},shipToStateProvinceGeoId: {type: GraphQLString},lastName: {type: GraphQLString},setDefaultShipping: {type: GraphQLString},shipToContactMechId: {type: GraphQLString},shipToPhoneContactMechId: {type: GraphQLString},userLogin: {type: new GraphQLList(KeyValueInputType)},emailContactMechId: {type: GraphQLString},keepAddressBook: {type: GraphQLString},firstName: {type: GraphQLString},shipToContactNumber: {type: GraphQLString},shipToAddress2: {type: GraphQLString},billToContactMechId: {type: GraphQLString},shipToCountryCode: {type: GraphQLString},shipToName: {type: GraphQLString},shipToExtension: {type: GraphQLString},productStoreId: {type: GraphQLString},partyId: {type: GraphQLString},shipToAreaCode: {type: GraphQLString},shipToAttnName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderCheckout/createUpdateCustomerAndShippingAddress?shipToCity=${args.shipToCity}emailAddress=${args.emailAddress}shipToAddress1=${args.shipToAddress1}shipToPostalCode=${args.shipToPostalCode}shoppingCart=${args.shoppingCart}shipToCountryGeoId=${args.shipToCountryGeoId}shipToStateProvinceGeoId=${args.shipToStateProvinceGeoId}lastName=${args.lastName}setDefaultShipping=${args.setDefaultShipping}shipToContactMechId=${args.shipToContactMechId}shipToPhoneContactMechId=${args.shipToPhoneContactMechId}userLogin=${args.userLogin}emailContactMechId=${args.emailContactMechId}keepAddressBook=${args.keepAddressBook}firstName=${args.firstName}shipToContactNumber=${args.shipToContactNumber}shipToAddress2=${args.shipToAddress2}billToContactMechId=${args.billToContactMechId}shipToCountryCode=${args.shipToCountryCode}shipToName=${args.shipToName}shipToExtension=${args.shipToExtension}productStoreId=${args.productStoreId}partyId=${args.partyId}shipToAreaCode=${args.shipToAreaCode}shipToAttnName=${args.shipToAttnName}`, null, req);
  }
};
export {createUpdateCustomerAndShippingAddress};


const setAnonUserLogin = {
  type: ResopnseType,
  description: 'mutation for ofbiz setAnonUserLogin method',
  args:{shoppingCart: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderCheckout/setAnonUserLogin?shoppingCart=${args.shoppingCart}partyId=${args.partyId}`, null, req);
  }
};
export {setAnonUserLogin};
