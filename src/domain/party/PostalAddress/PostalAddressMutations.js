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
import {PostalAddressResponseType} from '../../party/PostalAddress/PostalAddressResponseType.js';
import {PostalAddressInputType} from '../../party/PostalAddress/PostalAddressInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPostalAddress = {
  type: PostalAddressResponseType,
  description: 'mutation for ofbiz createPostalAddress method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/postalAddresss/add?`, null, req);
  }
};
export {createPostalAddress};


const updatePostalAddress = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePostalAddress method',
  args:{postalAddressToBeUpdated: {type: PostalAddressInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/postalAddresss/${args.nullVal}?`, args.postalAddressToBeUpdated, req);
  }
};
export {updatePostalAddress};


const deletePostalAddressByIdUpdated = {
  type: ResponseType,
  description: 'mutation for ofbiz deletePostalAddressByIdUpdated method',
  args:{postalAddressId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/postalAddresss/${args.postalAddressId}?`, null, req);
  }
};
export {deletePostalAddressByIdUpdated};
