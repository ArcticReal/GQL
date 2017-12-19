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


const createSaleType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSaleType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/saleTypes/add?`, null, req);
  }
};
export {createSaleType};


const updateSaleType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSaleType method',
  args:{saleTypeToBeUpdated: {type: SaleTypeInputType},saleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/saleTypes/${args.saleTypeId}?`, args.saleTypeToBeUpdated, req);
  }
};
export {updateSaleType};


const deleteSaleTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSaleTypeByIdUpdated method',
  args:{saleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/saleTypes/${args.saleTypeId}?`, null, req);
  }
};
export {deleteSaleTypeByIdUpdated};
