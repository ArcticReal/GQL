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
import {ProductSearchConstraintResponseType} from '../../product/ProductSearchConstraint/ProductSearchConstraintResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductSearchConstraint = {
  type: ProductSearchConstraintResponseType,
  description: 'mutation for ofbiz createProductSearchConstraint method',
  args:{productSearchConstraintToBeAdded: {type: ProductSearchConstraintInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productSearchConstraints/add?`, args.productSearchConstraintToBeAdded, req);
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
