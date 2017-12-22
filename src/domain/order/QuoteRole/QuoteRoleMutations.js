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
import {QuoteRoleInputType} from '../../order/QuoteRole/QuoteRoleInputType.js';
import {QuoteRoleResponseType} from '../../order/QuoteRole/QuoteRoleResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createQuoteRole = {
  type: QuoteRoleResponseType,
  description: 'mutation for ofbiz createQuoteRole method',
  args:{quoteRoleToBeAdded: {type: QuoteRoleInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/quote/quoteRoles/add?`, args.quoteRoleToBeAdded, req);
  }
};
export {createQuoteRole};


const deleteQuoteRoleByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteQuoteRoleByIdUpdated method',
  args:{quoteRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/quote/quoteRoles/${args.quoteRoleId}?`, null, req);
  }
};
export {deleteQuoteRoleByIdUpdated};


const updateQuoteRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateQuoteRole method',
  args:{quoteRoleToBeUpdated: {type: QuoteRoleInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/quote/quoteRoles/${args.roleTypeId}?`, args.quoteRoleToBeUpdated, req);
  }
};
export {updateQuoteRole};
