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
import {ProductFeatureGroupInputType} from '../../product/ProductFeatureGroup/ProductFeatureGroupInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductFeatureGroup = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductFeatureGroup method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productFeatureGroups/add?`, null, req);
  }
};
export {createProductFeatureGroup};


const updateProductFeatureGroup = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductFeatureGroup method',
  args:{productFeatureGroupToBeUpdated: {type: ProductFeatureGroupInputType},productFeatureGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productFeatureGroups/${args.productFeatureGroupId}?`, args.productFeatureGroupToBeUpdated, req);
  }
};
export {updateProductFeatureGroup};


const deleteProductFeatureGroupByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductFeatureGroupByIdUpdated method',
  args:{productFeatureGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productFeatureGroups/${args.productFeatureGroupId}?`, null, req);
  }
};
export {deleteProductFeatureGroupByIdUpdated};
