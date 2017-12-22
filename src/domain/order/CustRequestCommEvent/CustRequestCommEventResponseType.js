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

const CustRequestCommEventResponseType = new GraphQLObjectType({
  name: 'CustRequestCommEventResponseType',
  description: 'response type for CustRequestCommEvent',

  fields: () => ({
    communicationEventId: {type: GraphQLString},
    custRequestId: {type: GraphQLString}
  })
});

export {CustRequestCommEventResponseType};
    