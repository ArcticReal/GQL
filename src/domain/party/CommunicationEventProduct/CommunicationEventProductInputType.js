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

const CommunicationEventProductInputType = new GraphQLInputObjectType({
  name: 'CommunicationEventProductInputType',
  description: 'input type for CommunicationEventProduct',

  fields: () => ({
    communicationEventId: {type: GraphQLString},
    productId: {type: GraphQLString}
  })
});

export {CommunicationEventProductInputType};
    