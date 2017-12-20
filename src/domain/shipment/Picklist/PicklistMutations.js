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
import {PicklistInputType} from '../../shipment/Picklist/PicklistInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPicklist = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPicklist method',
  args:{picklistToBeAdded: {type: PicklistInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/picklists/add?`, args.picklistToBeAdded, req);
  }
};
export {createPicklist};


const updatePicklist = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePicklist method',
  args:{picklistToBeUpdated: {type: PicklistInputType},picklistId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/picklists/${args.picklistId}?`, args.picklistToBeUpdated, req);
  }
};
export {updatePicklist};


const deletePicklistByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePicklistByIdUpdated method',
  args:{picklistId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/picklists/${args.picklistId}?`, null, req);
  }
};
export {deletePicklistByIdUpdated};
