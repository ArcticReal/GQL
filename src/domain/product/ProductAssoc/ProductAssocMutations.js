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
import {ProductAssocInputType} from '../../product/ProductAssoc/ProductAssocInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createProductAssoc = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductAssoc method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productAssocs/add?`, null, req);
  }
};
export {createProductAssoc};


const updateProductAssoc = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductAssoc method',
  args:{productAssocToBeUpdated: {type: ProductAssocInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productAssocs/${args.nullVal}?`, args.productAssocToBeUpdated, req);
  }
};
export {updateProductAssoc};


const deleteProductAssocByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductAssocByIdUpdated method',
  args:{productAssocId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productAssocs/${args.productAssocId}?`, null, req);
  }
};
export {deleteProductAssocByIdUpdated};
