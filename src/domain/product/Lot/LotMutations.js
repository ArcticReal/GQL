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
import {LotInputType} from '../../product/Lot/LotInputType.js';
import {LotResponseType} from '../../product/Lot/LotResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createLot = {
  type: LotResponseType,
  description: 'mutation for ofbiz createLot method',
  args:{lotToBeAdded: {type: LotInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/lots/add?`, args.lotToBeAdded, req);
  }
};
export {createLot};


const updateLot = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateLot method',
  args:{lotToBeUpdated: {type: LotInputType},lotId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/lots/${args.lotId}?`, args.lotToBeUpdated, req);
  }
};
export {updateLot};


const deleteLotByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteLotByIdUpdated method',
  args:{lotId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/lots/${args.lotId}?`, null, req);
  }
};
export {deleteLotByIdUpdated};
