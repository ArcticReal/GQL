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

const CommunicationEventOrderInputType = new GraphQLInputObjectType({
  name: 'CommunicationEventOrderInputType',
  description: 'input type for CommunicationEventOrder',

  fields: () => ({
    communicationEventId: {type: GraphQLString},
    orderId: {type: GraphQLString}
  })
});

export {CommunicationEventOrderInputType};
    