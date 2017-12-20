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


const createCountryAddressFormat = {
  type: ResopnseType,
  description: 'mutation for ofbiz createCountryAddressFormat method',
  args:{geoId: {type: GraphQLString},requirePostalCode: {type: GraphQLString},postalCodeRegex: {type: GraphQLString},requireStateProvinceId: {type: GraphQLString},hasPostalCodeExt: {type: GraphQLString},requirePostalCodeExt: {type: GraphQLString},addressFormat: {type: GraphQLString},geoAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonGeo/createCountryAddressFormat?geoId=${args.geoId}requirePostalCode=${args.requirePostalCode}postalCodeRegex=${args.postalCodeRegex}requireStateProvinceId=${args.requireStateProvinceId}hasPostalCodeExt=${args.hasPostalCodeExt}requirePostalCodeExt=${args.requirePostalCodeExt}addressFormat=${args.addressFormat}geoAssocTypeId=${args.geoAssocTypeId}`, null, req);
  }
};
export {createCountryAddressFormat};


const createCountryCapital = {
  type: ResopnseType,
  description: 'mutation for ofbiz createCountryCapital method',
  args:{countryCode: {type: GraphQLString},countryCapital: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonGeo/createCountryCapital?countryCode=${args.countryCode}countryCapital=${args.countryCapital}`, null, req);
  }
};
export {createCountryCapital};


const createCountryCode = {
  type: ResopnseType,
  description: 'mutation for ofbiz createCountryCode method',
  args:{countryCode: {type: GraphQLString},countryNumber: {type: GraphQLString},countryAbbr: {type: GraphQLString},countryName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonGeo/createCountryCode?countryCode=${args.countryCode}countryNumber=${args.countryNumber}countryAbbr=${args.countryAbbr}countryName=${args.countryName}`, null, req);
  }
};
export {createCountryCode};


const createCountryTeleCode = {
  type: ResopnseType,
  description: 'mutation for ofbiz createCountryTeleCode method',
  args:{countryCode: {type: GraphQLString},teleCode: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonGeo/createCountryTeleCode?countryCode=${args.countryCode}teleCode=${args.teleCode}`, null, req);
  }
};
export {createCountryTeleCode};


const deleteCountryAddressFormat = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteCountryAddressFormat method',
  args:{geoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonGeo/deleteCountryAddressFormat?geoId=${args.geoId}`, null, req);
  }
};
export {deleteCountryAddressFormat};


const deleteCountryCapital = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteCountryCapital method',
  args:{countryCode: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonGeo/deleteCountryCapital?countryCode=${args.countryCode}`, null, req);
  }
};
export {deleteCountryCapital};


const deleteCountryCode = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteCountryCode method',
  args:{countryCode: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonGeo/deleteCountryCode?countryCode=${args.countryCode}`, null, req);
  }
};
export {deleteCountryCode};


const deleteCountryTeleCode = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteCountryTeleCode method',
  args:{countryCode: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonGeo/deleteCountryTeleCode?countryCode=${args.countryCode}`, null, req);
  }
};
export {deleteCountryTeleCode};


const updateCountryAddressFormat = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateCountryAddressFormat method',
  args:{geoId: {type: GraphQLString},requirePostalCode: {type: GraphQLString},postalCodeRegex: {type: GraphQLString},requireStateProvinceId: {type: GraphQLString},hasPostalCodeExt: {type: GraphQLString},requirePostalCodeExt: {type: GraphQLString},addressFormat: {type: GraphQLString},geoAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonGeo/updateCountryAddressFormat?geoId=${args.geoId}requirePostalCode=${args.requirePostalCode}postalCodeRegex=${args.postalCodeRegex}requireStateProvinceId=${args.requireStateProvinceId}hasPostalCodeExt=${args.hasPostalCodeExt}requirePostalCodeExt=${args.requirePostalCodeExt}addressFormat=${args.addressFormat}geoAssocTypeId=${args.geoAssocTypeId}`, null, req);
  }
};
export {updateCountryAddressFormat};


const updateCountryCapital = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateCountryCapital method',
  args:{countryCode: {type: GraphQLString},countryCapital: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonGeo/updateCountryCapital?countryCode=${args.countryCode}countryCapital=${args.countryCapital}`, null, req);
  }
};
export {updateCountryCapital};


const updateCountryCode = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateCountryCode method',
  args:{countryCode: {type: GraphQLString},countryNumber: {type: GraphQLString},countryAbbr: {type: GraphQLString},countryName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonGeo/updateCountryCode?countryCode=${args.countryCode}countryNumber=${args.countryNumber}countryAbbr=${args.countryAbbr}countryName=${args.countryName}`, null, req);
  }
};
export {updateCountryCode};


const updateCountryTeleCode = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateCountryTeleCode method',
  args:{countryCode: {type: GraphQLString},teleCode: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonGeo/updateCountryTeleCode?countryCode=${args.countryCode}teleCode=${args.teleCode}`, null, req);
  }
};
export {updateCountryTeleCode};
