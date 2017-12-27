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
import {ResponseType,KeyValueInputType} from '../../framework/helpTypes.js';


const createConfigOptionProductOption = {
  type: ResponseType,
  description: 'mutation for ofbiz createConfigOptionProductOption method',
  args:{configItemId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},productId: {type: GraphQLString},configId: {type: GraphQLString},configOptionId: {type: GraphQLString},productOptionId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productConfig/createConfigOptionProductOption?configItemId=${args.configItemId}&sequenceNum=${args.sequenceNum}&productId=${args.productId}&configId=${args.configId}&configOptionId=${args.configOptionId}&productOptionId=${args.productOptionId}&description=${args.description}&`, null, req);
  }
};
export {createConfigOptionProductOption};


const createProdConfItemContentType = {
  type: ResponseType,
  description: 'mutation for ofbiz createProdConfItemContentType method',
  args:{confItemContentTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productConfig/createProdConfItemContentType?confItemContentTypeId=${args.confItemContentTypeId}&parentTypeId=${args.parentTypeId}&hasTable=${args.hasTable}&description=${args.description}&`, null, req);
  }
};
export {createProdConfItemContentType};


const deleteConfigOptionProductOption = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteConfigOptionProductOption method',
  args:{configItemId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},productId: {type: GraphQLString},configId: {type: GraphQLString},configOptionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productConfig/deleteConfigOptionProductOption?configItemId=${args.configItemId}&sequenceNum=${args.sequenceNum}&productId=${args.productId}&configId=${args.configId}&configOptionId=${args.configOptionId}&`, null, req);
  }
};
export {deleteConfigOptionProductOption};


const deleteProdConfItemContentType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProdConfItemContentType method',
  args:{confItemContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productConfig/deleteProdConfItemContentType?confItemContentTypeId=${args.confItemContentTypeId}&`, null, req);
  }
};
export {deleteProdConfItemContentType};


const updateConfigOptionProductOption = {
  type: ResponseType,
  description: 'mutation for ofbiz updateConfigOptionProductOption method',
  args:{configItemId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},productId: {type: GraphQLString},configId: {type: GraphQLString},configOptionId: {type: GraphQLString},productOptionId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productConfig/updateConfigOptionProductOption?configItemId=${args.configItemId}&sequenceNum=${args.sequenceNum}&productId=${args.productId}&configId=${args.configId}&configOptionId=${args.configOptionId}&productOptionId=${args.productOptionId}&description=${args.description}&`, null, req);
  }
};
export {updateConfigOptionProductOption};


const updateProdConfItemContentType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProdConfItemContentType method',
  args:{confItemContentTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productConfig/updateProdConfItemContentType?confItemContentTypeId=${args.confItemContentTypeId}&parentTypeId=${args.parentTypeId}&hasTable=${args.hasTable}&description=${args.description}&`, null, req);
  }
};
export {updateProdConfItemContentType};
