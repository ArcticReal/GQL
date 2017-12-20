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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCharacterSet = {
  type: ResopnseType,
  description: 'mutation for ofbiz createCharacterSet method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/characterSets/add?`, null, req);
  }
};
export {createCharacterSet};


const updateCharacterSet = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateCharacterSet method',
  args:{characterSetToBeUpdated: {type: CharacterSetInputType},characterSetId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/characterSets/${args.characterSetId}?`, args.characterSetToBeUpdated, req);
  }
};
export {updateCharacterSet};


const deleteCharacterSetByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteCharacterSetByIdUpdated method',
  args:{characterSetId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/characterSets/${args.characterSetId}?`, null, req);
  }
};
export {deleteCharacterSetByIdUpdated};
