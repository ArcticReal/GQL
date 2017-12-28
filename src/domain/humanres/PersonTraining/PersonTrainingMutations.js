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
import {PersonTrainingResponseType} from '../../humanres/PersonTraining/PersonTrainingResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPersonTraining = {
  type: PersonTrainingResponseType,
  description: 'mutation for ofbiz createPersonTraining method',
  args:{personTrainingToBeAdded: {type: PersonTrainingInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/personTrainings/add?`, args.personTrainingToBeAdded, req);
  }
};
export {createPersonTraining};


const updatePersonTraining = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePersonTraining method',
  args:{personTrainingToBeUpdated: {type: PersonTrainingInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/personTrainings/${args.nullVal}?`, args.personTrainingToBeUpdated, req);
  }
};
export {updatePersonTraining};


const deletePersonTrainingByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePersonTrainingByIdUpdated method',
  args:{personTrainingId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/personTrainings/${args.personTrainingId}?`, null, req);
  }
};
export {deletePersonTrainingByIdUpdated};
