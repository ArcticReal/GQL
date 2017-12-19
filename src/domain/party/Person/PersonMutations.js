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
import {PersonInputType} from '../../party/Person/PersonInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createPerson = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPerson method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/persons/add?`, null, req);
  }
};
export {createPerson};


const updatePerson = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePerson method',
  args:{personToBeUpdated: {type: PersonInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/persons/${args.nullVal}?`, args.personToBeUpdated, req);
  }
};
export {updatePerson};


const deletePersonByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePersonByIdUpdated method',
  args:{personId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/persons/${args.personId}?`, null, req);
  }
};
export {deletePersonByIdUpdated};
