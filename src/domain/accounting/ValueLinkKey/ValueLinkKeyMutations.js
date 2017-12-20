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
import {ValueLinkKeyInputType} from '../../accounting/ValueLinkKey/ValueLinkKeyInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createValueLinkKey = {
  type: ResopnseType,
  description: 'mutation for ofbiz createValueLinkKey method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/valueLinkKeys/add?`, null, req);
  }
};
export {createValueLinkKey};


const updateValueLinkKey = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateValueLinkKey method',
  args:{valueLinkKeyToBeUpdated: {type: ValueLinkKeyInputType},merchantId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/valueLinkKeys/${args.merchantId}?`, args.valueLinkKeyToBeUpdated, req);
  }
};
export {updateValueLinkKey};


const deleteValueLinkKeyByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteValueLinkKeyByIdUpdated method',
  args:{valueLinkKeyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/valueLinkKeys/${args.valueLinkKeyId}?`, null, req);
  }
};
export {deleteValueLinkKeyByIdUpdated};
