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
import {TrainingRequestResponseType} from '../../humanres/TrainingRequest/TrainingRequestResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createTrainingRequest = {
  type: TrainingRequestResponseType,
  description: 'mutation for ofbiz createTrainingRequest method',
  args:{trainingRequestToBeAdded: {type: TrainingRequestInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/trainingRequests/add?`, args.trainingRequestToBeAdded, req);
  }
};
export {createTrainingRequest};


const updateTrainingRequest = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTrainingRequest method',
  args:{trainingRequestToBeUpdated: {type: TrainingRequestInputType},trainingRequestId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/trainingRequests/${args.trainingRequestId}?`, args.trainingRequestToBeUpdated, req);
  }
};
export {updateTrainingRequest};


const deleteTrainingRequestByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTrainingRequestByIdUpdated method',
  args:{trainingRequestId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/trainingRequests/${args.trainingRequestId}?`, null, req);
  }
};
export {deleteTrainingRequestByIdUpdated};
