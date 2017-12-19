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
import {PartySkillInputType} from '../../humanres/PartySkill/PartySkillInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createPartySkill = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartySkill method',
  args:{partySkillToBeAdded: {type: PartySkillInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/partySkills/add?`, args.partySkillToBeAdded, req);
  }
};
export {createPartySkill};


const updatePartySkill = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartySkill method',
  args:{partySkillToBeUpdated: {type: PartySkillInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/partySkills/${args.nullVal}?`, args.partySkillToBeUpdated, req);
  }
};
export {updatePartySkill};


const deletePartySkillByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartySkillByIdUpdated method',
  args:{partySkillId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/partySkills/${args.partySkillId}?`, null, req);
  }
};
export {deletePartySkillByIdUpdated};
