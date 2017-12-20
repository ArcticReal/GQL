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
import {ProductFeatureApplAttrInputType} from '../../product/ProductFeatureApplAttr/ProductFeatureApplAttrInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductFeatureApplAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductFeatureApplAttr method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productFeatureApplAttrs/add?`, null, req);
  }
};
export {createProductFeatureApplAttr};


const updateProductFeatureApplAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductFeatureApplAttr method',
  args:{productFeatureApplAttrToBeUpdated: {type: ProductFeatureApplAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productFeatureApplAttrs/${args.attrName}?`, args.productFeatureApplAttrToBeUpdated, req);
  }
};
export {updateProductFeatureApplAttr};


const deleteProductFeatureApplAttrByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductFeatureApplAttrByIdUpdated method',
  args:{productFeatureApplAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productFeatureApplAttrs/${args.productFeatureApplAttrId}?`, null, req);
  }
};
export {deleteProductFeatureApplAttrByIdUpdated};
