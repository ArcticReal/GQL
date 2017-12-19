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
import {ProductMaintInputType} from '../../product/ProductMaint/ProductMaintInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createProductMaint = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductMaint method',
  args:{productMaintToBeAdded: {type: ProductMaintInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productMaints/add?`, args.productMaintToBeAdded, req);
  }
};
export {createProductMaint};


const deleteProductMaintByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductMaintByIdUpdated method',
  args:{productMaintId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productMaints/${args.productMaintId}?`, null, req);
  }
};
export {deleteProductMaintByIdUpdated};


const updateProductMaint = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductMaint method',
  args:{productMaintToBeUpdated: {type: ProductMaintInputType},productMaintSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productMaints/${args.productMaintSeqId}?`, args.productMaintToBeUpdated, req);
  }
};
export {updateProductMaint};
