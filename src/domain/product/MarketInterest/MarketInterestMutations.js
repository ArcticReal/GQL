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
import {MarketInterestInputType} from '../../product/MarketInterest/MarketInterestInputType.js';
import {MarketInterestResponseType} from '../../product/MarketInterest/MarketInterestResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createMarketInterest = {
  type: MarketInterestResponseType,
  description: 'mutation for ofbiz createMarketInterest method',
  args:{marketInterestToBeAdded: {type: MarketInterestInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/marketInterests/add?`, args.marketInterestToBeAdded, req);
  }
};
export {createMarketInterest};


const deleteMarketInterestByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteMarketInterestByIdUpdated method',
  args:{marketInterestId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/marketInterests/${args.marketInterestId}?`, null, req);
  }
};
export {deleteMarketInterestByIdUpdated};


const updateMarketInterest = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateMarketInterest method',
  args:{marketInterestToBeUpdated: {type: MarketInterestInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/marketInterests/${args.nullVal}?`, args.marketInterestToBeUpdated, req);
  }
};
export {updateMarketInterest};
