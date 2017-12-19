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


const createPicklist = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPicklist method',
  args:{picklistToBeAdded: {type: PicklistInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/picklists/add?`, args.picklistToBeAdded, req);
  }
};
export {createPicklist};


const updatePicklist = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePicklist method',
  args:{picklistToBeUpdated: {type: PicklistInputType},picklistId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/picklists/${args.picklistId}?`, args.picklistToBeUpdated, req);
  }
};
export {updatePicklist};


const deletePicklistByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePicklistByIdUpdated method',
  args:{picklistId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/picklists/${args.picklistId}?`, null, req);
  }
};
export {deletePicklistByIdUpdated};
