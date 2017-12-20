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
import {PostalAddressBoundaryInputType} from '../../party/PostalAddressBoundary/PostalAddressBoundaryInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPostalAddressBoundary = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPostalAddressBoundary method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/postalAddress/postalAddressBoundarys/add?`, null, req);
  }
};
export {createPostalAddressBoundary};


const updatePostalAddressBoundary = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePostalAddressBoundary method',
  args:{postalAddressBoundaryToBeUpdated: {type: PostalAddressBoundaryInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/postalAddress/postalAddressBoundarys/${args.nullVal}?`, args.postalAddressBoundaryToBeUpdated, req);
  }
};
export {updatePostalAddressBoundary};


const deletePostalAddressBoundaryByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePostalAddressBoundaryByIdUpdated method',
  args:{postalAddressBoundaryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/postalAddress/postalAddressBoundarys/${args.postalAddressBoundaryId}?`, null, req);
  }
};
export {deletePostalAddressBoundaryByIdUpdated};
