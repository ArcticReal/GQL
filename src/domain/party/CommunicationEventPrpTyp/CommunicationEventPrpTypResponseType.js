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

const CommunicationEventPrpTypResponseType = new GraphQLObjectType({
  name: 'CommunicationEventPrpTypResponseType',
  description: 'response type for CommunicationEventPrpTyp',

  fields: () => ({
    communicationEventPrpTypId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {CommunicationEventPrpTypResponseType};
    