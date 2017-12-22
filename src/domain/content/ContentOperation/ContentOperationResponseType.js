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

const ContentOperationResponseType = new GraphQLObjectType({
  name: 'ContentOperationResponseType',
  description: 'response type for ContentOperation',

  fields: () => ({
    contentOperationId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ContentOperationResponseType};
    