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
import {ProductFeatureGroupResponseType} from '../../product/ProductFeatureGroup/ProductFeatureGroupResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductFeatureGroup = {
  type: ProductFeatureGroupResponseType,
  description: 'mutation for ofbiz createProductFeatureGroup method',
  args:{productFeatureGroupToBeAdded: {type: ProductFeatureGroupInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productFeatureGroups/add?`, args.productFeatureGroupToBeAdded, req);
  }
};
export {createProductFeatureGroup};


const updateProductFeatureGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductFeatureGroup method',
  args:{productFeatureGroupToBeUpdated: {type: ProductFeatureGroupInputType},productFeatureGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productFeatureGroups/${args.productFeatureGroupId}?`, args.productFeatureGroupToBeUpdated, req);
  }
};
export {updateProductFeatureGroup};


const deleteProductFeatureGroupByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductFeatureGroupByIdUpdated method',
  args:{productFeatureGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productFeatureGroups/${args.productFeatureGroupId}?`, null, req);
  }
};
export {deleteProductFeatureGroupByIdUpdated};
