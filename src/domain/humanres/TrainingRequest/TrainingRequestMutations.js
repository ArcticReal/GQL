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
import {TrainingRequestInputType} from '../../humanres/TrainingRequest/TrainingRequestInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createTrainingRequest = {
  type: ResopnseType,
  description: 'mutation for ofbiz createTrainingRequest method',
  args:{trainingRequestToBeAdded: {type: TrainingRequestInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/trainingRequests/add?`, args.trainingRequestToBeAdded, req);
  }
};
export {createTrainingRequest};


const updateTrainingRequest = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateTrainingRequest method',
  args:{trainingRequestToBeUpdated: {type: TrainingRequestInputType},trainingRequestId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/trainingRequests/${args.trainingRequestId}?`, args.trainingRequestToBeUpdated, req);
  }
};
export {updateTrainingRequest};


const deleteTrainingRequestByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteTrainingRequestByIdUpdated method',
  args:{trainingRequestId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/trainingRequests/${args.trainingRequestId}?`, null, req);
  }
};
export {deleteTrainingRequestByIdUpdated};
