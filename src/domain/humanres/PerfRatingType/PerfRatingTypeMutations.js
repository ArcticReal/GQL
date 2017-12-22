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
import {PerfRatingTypeResponseType} from '../../humanres/PerfRatingType/PerfRatingTypeResponseType.js';
import {PerfRatingTypeInputType} from '../../humanres/PerfRatingType/PerfRatingTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPerfRatingType = {
  type: PerfRatingTypeResponseType,
  description: 'mutation for ofbiz createPerfRatingType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/perfRatingTypes/add?`, null, req);
  }
};
export {createPerfRatingType};


const updatePerfRatingType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePerfRatingType method',
  args:{perfRatingTypeToBeUpdated: {type: PerfRatingTypeInputType},perfRatingTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/perfRatingTypes/${args.perfRatingTypeId}?`, args.perfRatingTypeToBeUpdated, req);
  }
};
export {updatePerfRatingType};


const deletePerfRatingTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePerfRatingTypeByIdUpdated method',
  args:{perfRatingTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/perfRatingTypes/${args.perfRatingTypeId}?`, null, req);
  }
};
export {deletePerfRatingTypeByIdUpdated};
