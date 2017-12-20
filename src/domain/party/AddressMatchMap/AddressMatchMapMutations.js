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
import {AddressMatchMapInputType} from '../../party/AddressMatchMap/AddressMatchMapInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createAddressMatchMap = {
  type: ResopnseType,
  description: 'mutation for ofbiz createAddressMatchMap method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/addressMatchMaps/add?`, null, req);
  }
};
export {createAddressMatchMap};


const deleteAddressMatchMapByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteAddressMatchMapByIdUpdated method',
  args:{addressMatchMapId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/addressMatchMaps/${args.addressMatchMapId}?`, null, req);
  }
};
export {deleteAddressMatchMapByIdUpdated};


const updateAddressMatchMap = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateAddressMatchMap method',
  args:{addressMatchMapToBeUpdated: {type: AddressMatchMapInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/addressMatchMaps/${args.nullVal}?`, args.addressMatchMapToBeUpdated, req);
  }
};
export {updateAddressMatchMap};
