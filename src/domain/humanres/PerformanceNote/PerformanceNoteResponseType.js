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

const PerformanceNoteResponseType = new GraphQLObjectType({
  name: 'PerformanceNoteResponseType',
  description: 'response type for PerformanceNote',

  fields: () => ({
    comments: {type: GraphQLString},
    communicationDate: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PerformanceNoteResponseType};
    