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
import {ProductMeterResponseType} from '../../product/ProductMeter/ProductMeterResponseType.js';
import {ProductMeterInputType} from '../../product/ProductMeter/ProductMeterInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductMeter = {
  type: ProductMeterResponseType,
  description: 'mutation for ofbiz createProductMeter method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productMeters/add?`, null, req);
  }
};
export {createProductMeter};


const updateProductMeter = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductMeter method',
  args:{productMeterToBeUpdated: {type: ProductMeterInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productMeters/${args.nullVal}?`, args.productMeterToBeUpdated, req);
  }
};
export {updateProductMeter};


const deleteProductMeterByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductMeterByIdUpdated method',
  args:{productMeterId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productMeters/${args.productMeterId}?`, null, req);
  }
};
export {deleteProductMeterByIdUpdated};
