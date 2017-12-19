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

const PartyResumeInputType = new GraphQLInputObjectType({
  name: 'PartyResumeInputType',
  description: 'input type for PartyResume',

  fields: () => ({
    contentId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    resumeDate: {type: GraphQLString},
    resumeId: {type: GraphQLString},
    resumeText: {type: GraphQLString}
  })
});

export {PartyResumeInputType};
    