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
import {ItemIssuanceInputType} from '../../shipment/ItemIssuance/ItemIssuanceInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createItemIssuance = {
  type: ResopnseType,
  description: 'mutation for ofbiz createItemIssuance method',
  args:{itemIssuanceToBeAdded: {type: ItemIssuanceInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/itemIssuances/add?`, args.itemIssuanceToBeAdded, req);
  }
};
export {createItemIssuance};


const updateItemIssuance = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateItemIssuance method',
  args:{itemIssuanceToBeUpdated: {type: ItemIssuanceInputType},itemIssuanceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/itemIssuances/${args.itemIssuanceId}?`, args.itemIssuanceToBeUpdated, req);
  }
};
export {updateItemIssuance};


const deleteItemIssuanceByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteItemIssuanceByIdUpdated method',
  args:{itemIssuanceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/itemIssuances/${args.itemIssuanceId}?`, null, req);
  }
};
export {deleteItemIssuanceByIdUpdated};
