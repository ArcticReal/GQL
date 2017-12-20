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
import {SaleTypeInputType} from '../../product/SaleType/SaleTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSaleType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createSaleType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/saleTypes/add?`, null, req);
  }
};
export {createSaleType};


const updateSaleType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateSaleType method',
  args:{saleTypeToBeUpdated: {type: SaleTypeInputType},saleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/saleTypes/${args.saleTypeId}?`, args.saleTypeToBeUpdated, req);
  }
};
export {updateSaleType};


const deleteSaleTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteSaleTypeByIdUpdated method',
  args:{saleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/saleTypes/${args.saleTypeId}?`, null, req);
  }
};
export {deleteSaleTypeByIdUpdated};
