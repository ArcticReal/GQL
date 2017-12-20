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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createTrainingClassType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createTrainingClassType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/trainingClassTypes/add?`, null, req);
  }
};
export {createTrainingClassType};


const updateTrainingClassType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateTrainingClassType method',
  args:{trainingClassTypeToBeUpdated: {type: TrainingClassTypeInputType},trainingClassTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/trainingClassTypes/${args.trainingClassTypeId}?`, args.trainingClassTypeToBeUpdated, req);
  }
};
export {updateTrainingClassType};


const deleteTrainingClassTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteTrainingClassTypeByIdUpdated method',
  args:{trainingClassTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/trainingClassTypes/${args.trainingClassTypeId}?`, null, req);
  }
};
export {deleteTrainingClassTypeByIdUpdated};
