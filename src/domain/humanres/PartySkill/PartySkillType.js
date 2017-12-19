
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

import {PartyType} from '../../party/Party/PartyType.js';
import {SkillTypeType} from '../../humanres/SkillType/SkillTypeType.js';


const PartySkillType = new GraphQLObjectType({
  name: 'PartySkillType',
  description: 'Type for PartySkill in humanres',

  fields: () => ({
    skillType: {
      type: SkillTypeType,
      args : {skillTypeId: {type: GraphQLString}},
      resolve: (partySkill, args, {loaders}) => loaders.ofbiz.load(`humanres/skillTypes/find?skillTypeId=${partySkill.skillTypeId}`)
    },
    rating: {type: GraphQLInt},
    yearsExperience: {type: GraphQLInt},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (partySkill, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${partySkill.partyId}`)
    },
    startedUsingDate: {type: GraphQLString},
    skillLevel: {type: GraphQLInt}
  })
});

export {PartySkillType};
    