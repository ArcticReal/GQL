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
import {CharacterSetInputType} from '../../content/CharacterSet/CharacterSetInputType.js';
import {CharacterSetResponseType} from '../../content/CharacterSet/CharacterSetResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCharacterSet = {
  type: CharacterSetResponseType,
  description: 'mutation for ofbiz createCharacterSet method',
  args:{characterSetToBeAdded: {type: CharacterSetInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/characterSets/add?`, args.characterSetToBeAdded, req);
  }
};
export {createCharacterSet};


const updateCharacterSet = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCharacterSet method',
  args:{characterSetToBeUpdated: {type: CharacterSetInputType},characterSetId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/characterSets/${args.characterSetId}?`, args.characterSetToBeUpdated, req);
  }
};
export {updateCharacterSet};


const deleteCharacterSetByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCharacterSetByIdUpdated method',
  args:{characterSetId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/characterSets/${args.characterSetId}?`, null, req);
  }
};
export {deleteCharacterSetByIdUpdated};
