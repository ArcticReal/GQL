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
import {PostalAddressInputType} from '../../party/PostalAddress/PostalAddressInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createPostalAddress = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPostalAddress method',
  args:{postalAddressToBeAdded: {type: PostalAddressInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/postalAddresss/add?`, args.postalAddressToBeAdded, req);
  }
};
export {createPostalAddress};


const updatePostalAddress = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePostalAddress method',
  args:{postalAddressToBeUpdated: {type: PostalAddressInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/postalAddresss/${args.nullVal}?`, args.postalAddressToBeUpdated, req);
  }
};
export {updatePostalAddress};


const deletePostalAddressByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePostalAddressByIdUpdated method',
  args:{postalAddressId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/postalAddresss/${args.postalAddressId}?`, null, req);
  }
};
export {deletePostalAddressByIdUpdated};
