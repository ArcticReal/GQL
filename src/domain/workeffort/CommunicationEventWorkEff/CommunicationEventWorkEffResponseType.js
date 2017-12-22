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

const CommunicationEventWorkEffResponseType = new GraphQLObjectType({
  name: 'CommunicationEventWorkEffResponseType',
  description: 'response type for CommunicationEventWorkEff',

  fields: () => ({
    communicationEventId: {type: GraphQLString},
    description: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {CommunicationEventWorkEffResponseType};
    