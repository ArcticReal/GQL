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
import {TrainingClassTypeInputType} from '../../humanres/TrainingClassType/TrainingClassTypeInputType.js';
import {TrainingClassTypeResponseType} from '../../humanres/TrainingClassType/TrainingClassTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createTrainingClassType = {
  type: TrainingClassTypeResponseType,
  description: 'mutation for ofbiz createTrainingClassType method',
  args:{trainingClassTypeToBeAdded: {type: TrainingClassTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/trainingClassTypes/add?`, args.trainingClassTypeToBeAdded, req);
  }
};
export {createTrainingClassType};


const updateTrainingClassType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTrainingClassType method',
  args:{trainingClassTypeToBeUpdated: {type: TrainingClassTypeInputType},trainingClassTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/trainingClassTypes/${args.trainingClassTypeId}?`, args.trainingClassTypeToBeUpdated, req);
  }
};
export {updateTrainingClassType};


const deleteTrainingClassTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTrainingClassTypeByIdUpdated method',
  args:{trainingClassTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/trainingClassTypes/${args.trainingClassTypeId}?`, null, req);
  }
};
export {deleteTrainingClassTypeByIdUpdated};
