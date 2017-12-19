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
import {ProductSearchConstraintInputType} from '../../product/ProductSearchConstraint/ProductSearchConstraintInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createProductSearchConstraint = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductSearchConstraint method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productSearchConstraints/add?`, null, req);
  }
};
export {createProductSearchConstraint};


const updateProductSearchConstraint = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductSearchConstraint method',
  args:{productSearchConstraintToBeUpdated: {type: ProductSearchConstraintInputType},constraintSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productSearchConstraints/${args.constraintSeqId}?`, args.productSearchConstraintToBeUpdated, req);
  }
};
export {updateProductSearchConstraint};


const deleteProductSearchConstraintByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductSearchConstraintByIdUpdated method',
  args:{productSearchConstraintId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productSearchConstraints/${args.productSearchConstraintId}?`, null, req);
  }
};
export {deleteProductSearchConstraintByIdUpdated};
