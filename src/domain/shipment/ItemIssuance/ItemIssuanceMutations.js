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
import {ItemIssuanceResponseType} from '../../shipment/ItemIssuance/ItemIssuanceResponseType.js';
import {ItemIssuanceInputType} from '../../shipment/ItemIssuance/ItemIssuanceInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createItemIssuance = {
  type: ItemIssuanceResponseType,
  description: 'mutation for ofbiz createItemIssuance method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/itemIssuances/add?`, null, req);
  }
};
export {createItemIssuance};


const updateItemIssuance = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateItemIssuance method',
  args:{itemIssuanceToBeUpdated: {type: ItemIssuanceInputType},itemIssuanceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/itemIssuances/${args.itemIssuanceId}?`, args.itemIssuanceToBeUpdated, req);
  }
};
export {updateItemIssuance};


const deleteItemIssuanceByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteItemIssuanceByIdUpdated method',
  args:{itemIssuanceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/itemIssuances/${args.itemIssuanceId}?`, null, req);
  }
};
export {deleteItemIssuanceByIdUpdated};
