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
import {PartySkillResponseType} from '../../humanres/PartySkill/PartySkillResponseType.js';
import {PartySkillInputType} from '../../humanres/PartySkill/PartySkillInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartySkill = {
  type: PartySkillResponseType,
  description: 'mutation for ofbiz createPartySkill method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/partySkills/add?`, null, req);
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
