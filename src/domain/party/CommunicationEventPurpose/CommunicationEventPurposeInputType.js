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

const CommunicationEventPurposeInputType = new GraphQLInputObjectType({
  name: 'CommunicationEventPurposeInputType',
  description: 'input type for CommunicationEventPurpose',

  fields: () => ({
    communicationEventId: {type: GraphQLString},
    communicationEventPrpTypId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {CommunicationEventPurposeInputType};
    