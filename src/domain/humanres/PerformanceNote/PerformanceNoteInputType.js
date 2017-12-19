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

const PerformanceNoteInputType = new GraphQLInputObjectType({
  name: 'PerformanceNoteInputType',
  description: 'input type for PerformanceNote',

  fields: () => ({
    comments: {type: GraphQLString},
    communicationDate: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PerformanceNoteInputType};
    