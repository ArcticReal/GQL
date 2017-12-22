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
import {AddressMatchMapResponseType} from '../../party/AddressMatchMap/AddressMatchMapResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createAddressMatchMap = {
  type: AddressMatchMapResponseType,
  description: 'mutation for ofbiz createAddressMatchMap method',
  args:{addressMatchMapToBeAdded: {type: AddressMatchMapInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/addressMatchMaps/add?`, args.addressMatchMapToBeAdded, req);
  }
};
export {createAddressMatchMap};


const deleteAddressMatchMapByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAddressMatchMapByIdUpdated method',
  args:{addressMatchMapId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/addressMatchMaps/${args.addressMatchMapId}?`, null, req);
  }
};
export {deleteAddressMatchMapByIdUpdated};


const updateAddressMatchMap = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAddressMatchMap method',
  args:{addressMatchMapToBeUpdated: {type: AddressMatchMapInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/addressMatchMaps/${args.nullVal}?`, args.addressMatchMapToBeUpdated, req);
  }
};
export {updateAddressMatchMap};
