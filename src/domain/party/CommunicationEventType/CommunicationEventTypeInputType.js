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

const CommunicationEventTypeInputType = new GraphQLInputObjectType({
  name: 'CommunicationEventTypeInputType',
  description: 'input type for CommunicationEventType',

  fields: () => ({
    communicationEventTypeId: {type: GraphQLString},
    contactMechTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {CommunicationEventTypeInputType};
    