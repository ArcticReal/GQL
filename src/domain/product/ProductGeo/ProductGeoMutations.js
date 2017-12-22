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
import {ProductGeoResponseType} from '../../product/ProductGeo/ProductGeoResponseType.js';
import {ProductGeoInputType} from '../../product/ProductGeo/ProductGeoInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductGeo = {
  type: ProductGeoResponseType,
  description: 'mutation for ofbiz createProductGeo method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productGeos/add?`, null, req);
  }
};
export {createProductGeo};


const updateProductGeo = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductGeo method',
  args:{productGeoToBeUpdated: {type: ProductGeoInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productGeos/${args.nullVal}?`, args.productGeoToBeUpdated, req);
  }
};
export {updateProductGeo};


const deleteProductGeoByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductGeoByIdUpdated method',
  args:{productGeoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productGeos/${args.productGeoId}?`, null, req);
  }
};
export {deleteProductGeoByIdUpdated};
