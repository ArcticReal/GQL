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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createLot = {
  type: ResopnseType,
  description: 'mutation for ofbiz createLot method',
  args:{lotToBeAdded: {type: LotInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/lots/add?`, args.lotToBeAdded, req);
  }
};
export {createLot};


const updateLot = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateLot method',
  args:{lotToBeUpdated: {type: LotInputType},lotId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/lots/${args.lotId}?`, args.lotToBeUpdated, req);
  }
};
export {updateLot};


const deleteLotByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteLotByIdUpdated method',
  args:{lotId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/lots/${args.lotId}?`, null, req);
  }
};
export {deleteLotByIdUpdated};
