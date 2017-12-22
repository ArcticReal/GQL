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

const PartySkillResponseType = new GraphQLObjectType({
  name: 'PartySkillResponseType',
  description: 'response type for PartySkill',

  fields: () => ({
    partyId: {type: GraphQLString},
    rating: {type: GraphQLInt},
    skillLevel: {type: GraphQLInt},
    skillTypeId: {type: GraphQLString},
    startedUsingDate: {type: GraphQLString},
    yearsExperience: {type: GraphQLInt}
  })
});

export {PartySkillResponseType};
    