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
import {SkillTypeInputType} from '../../humanres/SkillType/SkillTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSkillType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createSkillType method',
  args:{skillTypeToBeAdded: {type: SkillTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/skillTypes/add?`, args.skillTypeToBeAdded, req);
  }
};
export {createSkillType};


const updateSkillType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateSkillType method',
  args:{skillTypeToBeUpdated: {type: SkillTypeInputType},skillTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/skillTypes/${args.skillTypeId}?`, args.skillTypeToBeUpdated, req);
  }
};
export {updateSkillType};


const deleteSkillTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteSkillTypeByIdUpdated method',
  args:{skillTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/skillTypes/${args.skillTypeId}?`, null, req);
  }
};
export {deleteSkillTypeByIdUpdated};
