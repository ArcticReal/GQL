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
import {PerfRatingTypeInputType} from '../../humanres/PerfRatingType/PerfRatingTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPerfRatingType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPerfRatingType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/perfRatingTypes/add?`, null, req);
  }
};
export {createPerfRatingType};


const updatePerfRatingType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePerfRatingType method',
  args:{perfRatingTypeToBeUpdated: {type: PerfRatingTypeInputType},perfRatingTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/perfRatingTypes/${args.perfRatingTypeId}?`, args.perfRatingTypeToBeUpdated, req);
  }
};
export {updatePerfRatingType};


const deletePerfRatingTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePerfRatingTypeByIdUpdated method',
  args:{perfRatingTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/perfRatingTypes/${args.perfRatingTypeId}?`, null, req);
  }
};
export {deletePerfRatingTypeByIdUpdated};
