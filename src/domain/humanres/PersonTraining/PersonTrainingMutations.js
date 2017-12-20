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
import {PersonTrainingInputType} from '../../humanres/PersonTraining/PersonTrainingInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPersonTraining = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPersonTraining method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/personTrainings/add?`, null, req);
  }
};
export {createPersonTraining};


const updatePersonTraining = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePersonTraining method',
  args:{personTrainingToBeUpdated: {type: PersonTrainingInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/personTrainings/${args.nullVal}?`, args.personTrainingToBeUpdated, req);
  }
};
export {updatePersonTraining};


const deletePersonTrainingByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePersonTrainingByIdUpdated method',
  args:{personTrainingId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/personTrainings/${args.personTrainingId}?`, null, req);
  }
};
export {deletePersonTrainingByIdUpdated};
