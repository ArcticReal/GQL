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
import {ProductStoreFacilityInputType} from '../../product/ProductStoreFacility/ProductStoreFacilityInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductStoreFacility = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductStoreFacility method',
  args:{productStoreFacilityToBeAdded: {type: ProductStoreFacilityInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/facility/productStoreFacilitys/add?`, args.productStoreFacilityToBeAdded, req);
  }
};
export {createProductStoreFacility};


const updateProductStoreFacility = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductStoreFacility method',
  args:{productStoreFacilityToBeUpdated: {type: ProductStoreFacilityInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/facility/productStoreFacilitys/${args.nullVal}?`, args.productStoreFacilityToBeUpdated, req);
  }
};
export {updateProductStoreFacility};


const deleteProductStoreFacilityByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductStoreFacilityByIdUpdated method',
  args:{productStoreFacilityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/facility/productStoreFacilitys/${args.productStoreFacilityId}?`, null, req);
  }
};
export {deleteProductStoreFacilityByIdUpdated};
