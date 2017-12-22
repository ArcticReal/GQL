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

const DeliverableTypeResponseType = new GraphQLObjectType({
  name: 'DeliverableTypeResponseType',
  description: 'response type for DeliverableType',

  fields: () => ({
    deliverableTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {DeliverableTypeResponseType};
    