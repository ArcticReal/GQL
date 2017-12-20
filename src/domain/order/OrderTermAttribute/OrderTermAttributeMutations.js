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
import {OrderTermAttributeInputType} from '../../order/OrderTermAttribute/OrderTermAttributeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderTermAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz createOrderTermAttribute method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderTerm/orderTermAttributes/add?`, null, req);
  }
};
export {createOrderTermAttribute};


const updateOrderTermAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateOrderTermAttribute method',
  args:{orderTermAttributeToBeUpdated: {type: OrderTermAttributeInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderTerm/orderTermAttributes/${args.nullVal}?`, args.orderTermAttributeToBeUpdated, req);
  }
};
export {updateOrderTermAttribute};


const deleteOrderTermAttributeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteOrderTermAttributeByIdUpdated method',
  args:{orderTermAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderTerm/orderTermAttributes/${args.orderTermAttributeId}?`, null, req);
  }
};
export {deleteOrderTermAttributeByIdUpdated};
