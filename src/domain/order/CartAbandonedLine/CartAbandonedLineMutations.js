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
import {CartAbandonedLineInputType} from '../../order/CartAbandonedLine/CartAbandonedLineInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCartAbandonedLine = {
  type: ResopnseType,
  description: 'mutation for ofbiz createCartAbandonedLine method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/cartAbandonedLines/add?`, null, req);
  }
};
export {createCartAbandonedLine};


const deleteCartAbandonedLineByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteCartAbandonedLineByIdUpdated method',
  args:{cartAbandonedLineId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/cartAbandonedLines/${args.cartAbandonedLineId}?`, null, req);
  }
};
export {deleteCartAbandonedLineByIdUpdated};


const updateCartAbandonedLine = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateCartAbandonedLine method',
  args:{cartAbandonedLineToBeUpdated: {type: CartAbandonedLineInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/cartAbandonedLines/${args.nullVal}?`, args.cartAbandonedLineToBeUpdated, req);
  }
};
export {updateCartAbandonedLine};
