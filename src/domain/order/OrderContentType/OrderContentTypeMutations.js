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
import {OrderContentTypeInputType} from '../../order/OrderContentType/OrderContentTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderContentType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createOrderContentType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderContent/orderContentTypes/add?`, null, req);
  }
};
export {createOrderContentType};


const updateOrderContentType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateOrderContentType method',
  args:{orderContentTypeToBeUpdated: {type: OrderContentTypeInputType},orderContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderContent/orderContentTypes/${args.orderContentTypeId}?`, args.orderContentTypeToBeUpdated, req);
  }
};
export {updateOrderContentType};


const deleteOrderContentTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteOrderContentTypeByIdUpdated method',
  args:{orderContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderContent/orderContentTypes/${args.orderContentTypeId}?`, null, req);
  }
};
export {deleteOrderContentTypeByIdUpdated};
