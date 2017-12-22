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

const PartyResumeResponseType = new GraphQLObjectType({
  name: 'PartyResumeResponseType',
  description: 'response type for PartyResume',

  fields: () => ({
    contentId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    resumeDate: {type: GraphQLString},
    resumeId: {type: GraphQLString},
    resumeText: {type: GraphQLString}
  })
});

export {PartyResumeResponseType};
    