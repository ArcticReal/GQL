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

const PriorityTypeResponseType = new GraphQLObjectType({
  name: 'PriorityTypeResponseType',
  description: 'response type for PriorityType',

  fields: () => ({
    description: {type: GraphQLString},
    priorityTypeId: {type: GraphQLString}
  })
});

export {PriorityTypeResponseType};
    